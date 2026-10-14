import { useEffect, useLayoutEffect } from 'react'

/*
  Scroll effects for the whole site (no extra library):
    1. Reveal on scroll: matching elements fade/slide/zoom in the first time they enter the screen.
    2. Scroll progress: a gradient bar at the very top fills as you read down the page.
    3. Parallax: the decorative gradient dots drift at slightly different speeds from the page.
  Everything is skipped when the visitor prefers reduced motion, so content is simply shown.
  The reveal itself is plain CSS (see styles/animations.css); this file only tags elements and watches them.
*/

// s = selector, v = animation (up | left | right | zoom), cols = items per row (staggers the delay in a row),
// nested = also reveal when inside another revealed element
const REVEALS = [
  // ----- home -----
  { s: '.services__viewport', v: 'up' },
  { s: '.about__text', v: 'left' },
  { s: '.about__video', v: 'zoom' },
  { s: '.clients__controls', v: 'up' },
  { s: '.clients__band', v: 'up' },
  { s: '.feedback__quote blockquote', v: 'up' },
  { s: '.feedback__people', v: 'up' },
  { s: '.case-card', v: 'up' },
  { s: '.cases__more', v: 'up' },
  { s: '.way-row:not(.is-flip) .way-row__text', v: 'left' },
  { s: '.way-row.is-flip .way-row__text', v: 'right' },
  { s: '.way-row:not(.is-flip) .way-row__img', v: 'right' },
  { s: '.way-row.is-flip .way-row__img', v: 'left' },
  { s: '.approach-card', v: 'up', cols: 2 },
  { s: '.tech__tabs', v: 'up' },
  { s: '.step__card', v: 'up', cols: 3 },
  { s: '.resources__marquee', v: 'up' },
  { s: '.cta__card', v: 'zoom' },
  { s: '.footer__grid > *', v: 'up', cols: 4 },
  // ----- about page -----
  { s: '.ap-stat', v: 'zoom', cols: 4 },
  { s: '.ap-story__media', v: 'left' },
  { s: '.ap-story__text', v: 'right' },
  { s: '.ap-value', v: 'up', cols: 3 },
  { s: '.ap-milestone', v: 'up', cols: 5 },
  { s: '.ap-work__grid > li', v: 'up', cols: 3 },
  // ----- case studies page -----
  { s: '.cs-impact__item', v: 'zoom', cols: 4 },
  { s: '.cs-feature', v: 'up' },
  { s: '.cs-filters', v: 'up' },
  { s: '.cs-card', v: 'up', cols: 2 },
  { s: '.cs-quote figure', v: 'zoom' },
  // ----- contact page -----
  { s: '.ct-card', v: 'up', cols: 4 },
  // ----- hire page -----
  { s: '.hr-role', v: 'up', cols: 4 },
  { s: '.hr-why__item', v: 'zoom', cols: 4 },
  { s: '.hr-form__intro', v: 'left' },
  { s: '.hr-form__card', v: 'right' },
  // ----- how it works page -----
  { s: '.hw-step:nth-child(odd) .hw-step__card', v: 'left' },
  { s: '.hw-step:nth-child(even) .hw-step__card', v: 'right' },
  { s: '.hw-first__item', v: 'up', cols: 4 },
  { s: '.hw-rhythm__item', v: 'zoom', cols: 4 },
  // ----- blog -----
  { s: '.bl-feature', v: 'up' },
  { s: '.bl-card', v: 'up', cols: 3 },
  { s: '.bp-article > *', v: 'up' },
  { s: '.bp-aside > *', v: 'right', cols: 2 },
  // ----- single case study page -----
  { s: '.csd-fact', v: 'up', cols: 5 },
  { s: '.csd-story__block', v: 'up', cols: 2 },
  { s: '.csd-result', v: 'zoom', cols: 3 },
  { s: '.csd-results__text', v: 'up' },
  { s: '.csd-pager__link', v: 'up', cols: 2 },
  // ----- service pages -----
  { s: '.sp-overview__text', v: 'left' },
  { s: '.sp-stat', v: 'right', cols: 3 },
  { s: '.sp-offer', v: 'up', cols: 3 },
  { s: '.sp-model', v: 'up', cols: 3 },
  { s: '.sp-industries__list > li', v: 'zoom', cols: 4 },
  { s: '.sp-faq__item', v: 'up' },
  { s: '.sp-step', v: 'up', cols: 4 },
  { s: '.sp-tech__list > li', v: 'up', cols: 6 },
  { s: '.sp-more__card', v: 'up', cols: 3 },
  // ----- headings last, so ones inside an already-revealed block are skipped -----
  { s: '.section-heading', v: 'up', nested: false },
]

const PARALLAX = [0.14, -0.1, 0.2, -0.16]
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function useScrollEffects(route, progressRef) {
  // 1) Reveal on scroll. Layout effect = classes are added before the browser paints, so nothing flashes.
  useLayoutEffect(() => {
    if (reducedMotion() || !('IntersectionObserver' in window)) return undefined

    const tag = () => {
      for (const { s, v, cols = 1, nested = true } of REVEALS) {
        document.querySelectorAll(s).forEach((el, i) => {
          if (el.classList.contains('reveal')) return
          if (!nested && el.parentElement?.closest('.reveal')) return
          el.classList.add('reveal', `rv-${v}`)
          if (cols > 1) el.style.setProperty('--reveal-delay', `${(i % cols) * 0.12}s`)
        })
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    const observeNew = () => document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => io.observe(el))

    tag()
    observeNew()

    // Sections are loaded on demand (code splitting), so tag and watch anything that appears later
    const main = document.querySelector('main')
    const mo = main ? new MutationObserver(() => { tag(); observeNew() }) : null
    mo?.observe(main, { childList: true, subtree: true })

    return () => {
      mo?.disconnect()
      io.disconnect()
    }
  }, [route])

  // 2) Scroll progress bar + 3) parallax dots, sharing one scroll listener
  useEffect(() => {
    const bar = progressRef.current
    const dots = reducedMotion() ? [] : [...document.querySelectorAll('.dot')]
    const applied = dots.map(() => 0)
    let raf = 0

    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`

      const vh = window.innerHeight
      dots.forEach((dot, i) => {
        const r = dot.getBoundingClientRect()
        if (r.height === 0) return
        const center = r.top + r.height / 2 - applied[i] // position without our own shift
        if (center < -vh || center > vh * 2) return
        const shift = Math.max(-120, Math.min(120, -(center - vh / 2) * PARALLAX[i % PARALLAX.length]))
        applied[i] = shift
        dot.style.translate = `0 ${shift.toFixed(1)}px`
      })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
      dots.forEach((dot) => { dot.style.translate = '' })
    }
  }, [route, progressRef])
}
