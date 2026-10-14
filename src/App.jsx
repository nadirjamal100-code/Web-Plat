import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Footer from './components/Footer.jsx'
import Bubbles from './components/Bubbles.jsx'
import ScrollTop from './components/ScrollTop.jsx'
import { getService } from './data/services.js'
import { caseStudies } from './data/caseStudies.js'
import { getPost } from './data/posts.js'
import useScrollEffects from './useScrollEffects.js'

/*
  Tiny router with clean URLs (History API), so no extra package is needed.
    /                      -> Home
    /about                 -> About page
    /case-studies          -> Case studies,   /case-studies/<slug>  -> a single case study
    /blog                  -> Blog,           /blog/<slug>          -> a single article
    /services/<slug>       -> a service page
    /how-it-works, /hire, /contact -> those pages (any #contact link opens /contact)
  Links in the code can be written as plain paths ("/about") or section anchors ("#contact"). A click handler below
  turns them into in-app navigation: paths change the URL without reloading, and anchors scroll to the section
  WITHOUT putting #something in the address bar (if the section is on another page, it goes home first).
  Old links like /#/about are converted to /about automatically.
  When you deploy, the host must serve index.html for every path (see README).
  The route is a string: 'home' | 'about' | 'case-studies' | 'how-it-works' | 'hire' | 'blog' | 'post/<slug>' | 'case-study/<slug>' | 'service/<slug>'.
*/
// Everything below the first screen, and the other pages, is loaded on demand so the first load stays small and fast
const loadHomeRest = () => import('./pages/HomeRest.jsx')
const HomeRest = lazy(loadHomeRest)
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const ServicePage = lazy(() => import('./pages/ServicePage.jsx'))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage.jsx'))
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage.jsx'))
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage.jsx'))
const HirePage = lazy(() => import('./pages/HirePage.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))
const BlogPage = lazy(() => import('./pages/BlogPage.jsx'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage.jsx'))
const findCase = (slug) => caseStudies.find((c) => c.slug === slug)
const Loading = <div className="page-loading" aria-hidden="true" />

function readRoute(path) {
  const [, a = '', b = ''] = (path.replace(/\/+$/, '') || '/').split('/')
  switch (a) {
    case 'about': return 'about'
    case 'hire': return 'hire'
    case 'contact': return 'contact'
    case 'how-it-works': return 'how-it-works'
    case 'blog': return b ? (getPost(b) ? `post/${b}` : 'blog') : 'blog'
    case 'case-studies': return b ? (findCase(b) ? `case-study/${b}` : 'case-studies') : 'case-studies'
    case 'services': return b && getService(b) ? `service/${b}` : 'home'
    default: return 'home'
  }
}

function pageTitle(route) {
  if (route === 'about') return 'About us | Hi Developers'
  if (route === 'case-studies') return 'Case studies | Hi Developers'
  if (route === 'blog') return 'Blog | Hi Developers'
  if (route === 'hire') return 'Hire developers | Hi Developers'
  if (route === 'contact') return 'Contact us | Hi Developers'
  if (route === 'how-it-works') return 'How it works | Hi Developers'
  if (route.startsWith('post/')) return `${getPost(route.slice('post/'.length))?.title} | Hi Developers Blog`
  if (route.startsWith('case-study/')) return `${findCase(route.slice('case-study/'.length))?.client} case study | Hi Developers`
  if (route.startsWith('service/')) return `${getService(route.slice('service/'.length))?.title} | Hi Developers`
  return 'Hi Developers | Software House'
}

// First load: turn an old-style /#/about into /about, and remember a /#contact so we can scroll to it
function initialLocation() {
  const { pathname, hash } = window.location
  let path = pathname
  let target = null
  if (hash.startsWith('#/')) {
    path = hash.slice(1)
    window.history.replaceState(null, '', path)
  } else if (hash.length > 1) {
    target = hash.slice(1)
    window.history.replaceState(null, '', pathname)
  }
  return { path, target, n: 0 }
}

export default function App() {
  const [nav, setNav] = useState(initialLocation)
  const route = useMemo(() => readRoute(nav.path), [nav.path])

  const goPath = useCallback((url) => {
    if (url !== window.location.pathname) window.history.pushState(null, '', url)
    setNav((s) => ({ path: url, target: null, n: s.n + 1 }))
  }, [])

  const goSection = useCallback((id) => {
    // every "contact" link opens the Contact page (the footer also has id="contact", but a link should go to the page)
    if (id === 'contact') {
      goPath('/contact')
      return
    }
    const el = id && id !== 'top' ? document.getElementById(id) : null
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else if (!id || id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // the section lives on the home page
      if (window.location.pathname !== '/') window.history.pushState(null, '', '/')
      setNav((s) => ({ path: '/', target: id, n: s.n + 1 }))
    }
  }, [goPath])

  // Back / forward buttons
  useEffect(() => {
    const onPop = () => setNav((s) => ({ path: window.location.pathname, target: null, n: s.n + 1 }))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  // Turn clicks on internal links into in-app navigation (no reload, no #hash in the address bar)
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest?.('a[href]')
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return
      let href = a.getAttribute('href')
      if (href.startsWith('#/')) href = href.slice(1) // old style links, just in case
      if (href.startsWith('#')) {
        e.preventDefault()
        goSection(href.slice(1))
      } else if (href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault()
        goPath(href)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [goPath, goSection])

  // After every navigation: scroll to the requested section, otherwise to the top
  useEffect(() => {
    document.title = pageTitle(route)
    if (!nav.target) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return undefined
    }
    // The section may still be loading (code splitting): keep looking for a moment, then scroll to it
    let tries = 0
    const timer = setInterval(() => {
      const el = document.getElementById(nav.target)
      if (el) el.scrollIntoView()
      if (el || ++tries > 40) clearInterval(timer)
    }, 100)
    return () => clearInterval(timer)
  }, [nav.n]) // eslint-disable-line react-hooks/exhaustive-deps

  // Start fetching the rest of the home page once the browser is idle, so scrolling down feels instant
  useEffect(() => {
    const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 1500))
    const id = idle(loadHomeRest)
    return () => (window.cancelIdleCallback || clearTimeout)(id)
  }, [])

  const progressRef = useRef(null)
  useScrollEffects(route, progressRef)

  let page
  if (route === 'about') {
    page = <AboutPage />
  } else if (route === 'how-it-works') {
    page = <HowItWorksPage />
  } else if (route === 'contact') {
    page = <ContactPage />
  } else if (route === 'hire') {
    page = <HirePage />
  } else if (route === 'blog') {
    page = <BlogPage />
  } else if (route.startsWith('post/')) {
    page = <BlogPostPage key={route} slug={route.slice('post/'.length)} />
  } else if (route === 'case-studies') {
    page = <CaseStudiesPage />
  } else if (route.startsWith('case-study/')) {
    page = <CaseStudyPage key={route} slug={route.slice('case-study/'.length)} />
  } else if (route.startsWith('service/')) {
    page = <ServicePage key={route} slug={route.slice('service/'.length)} />
  } else {
    page = (
      <>
        <Hero />
        <Services />
        {/* own boundary, so the hero and services paint at once while the rest loads */}
        <Suspense fallback={Loading}>
          <HomeRest />
        </Suspense>
      </>
    )
  }

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span ref={progressRef} className="scroll-progress__bar" />
      </div>
      <Bubbles />
      <Header route={route} />
      <main>
        <Suspense fallback={Loading}>{page}</Suspense>
      </main>
      <Footer />
      <ScrollTop route={route} />
    </>
  )
}
