import { useEffect, useRef, useState } from 'react'
import { services } from '../data/services.js'

const links = [
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '#services', menu: true },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'How it Works', href: '/how-it-works' },
  { label: 'Hire', href: '/hire' },
]

export function Logo({ className = '' }) {
  return (
    <a href="/" className={`brand ${className}`} aria-label="Hi Developers – home">
      <img className="brand__icon" src="/assets/logo-icon.svg" alt="" width="30" height="23" />
      <span className="brand__text">Hi Developers</span>
    </a>
  )
}

export default function Header({ route = 'home' }) {
  const [open, setOpen] = useState(false) // mobile menu
  const [sub, setSub] = useState(false) // Services dropdown (opened by the arrow button; on desktop it also opens on hover/focus)
  const menuRef = useRef(null)
  const currentService = route.startsWith('service/') ? route.slice('service/'.length) : null

  const closeAll = () => {
    setOpen(false)
    setSub(false)
  }
  // After choosing a link, drop focus so the dropdown does not stay open through :focus-within
  const pick = (e) => {
    e.currentTarget.blur()
    closeAll()
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (menuRef.current?.contains(document.activeElement)) document.activeElement.blur()
      setOpen(false)
      setSub(false)
    }
    const onResize = () => window.innerWidth > 1023 && setOpen(false)
    const onPointer = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setSub(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [])

  // Changing page always closes the menus
  useEffect(() => {
    setOpen(false)
    setSub(false)
  }, [route])

  return (
    <header className="site-header" id="top">
      <div className="site-header__inner">
        <Logo />
        <nav className={`nav ${open ? 'is-open' : ''}`} id="primary-nav" aria-label="Primary">
          <ul className="nav__list">
            {links.map((l) =>
              l.menu ? (
                <li
                  key={l.label}
                  ref={menuRef}
                  className={`nav__item nav__item--menu ${sub ? 'is-open' : ''} ${currentService ? 'is-current' : ''}`}
                >
                  <div className="nav__link-wrap">
                    <a className="nav__link" href={l.href} onClick={pick}>{l.label}</a>
                    <button
                      type="button"
                      className="nav__caret"
                      aria-label="Show services menu"
                      aria-expanded={sub}
                      aria-controls="services-menu"
                      onClick={() => setSub((v) => !v)}
                    >
                      <svg viewBox="0 0 12 12" aria-hidden="true">
                        <path d="M2 4.500 6 8.500 10 4.500" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  <div className="nav__dropdown" id="services-menu">
                    <ul className="nav__dropdown-list">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <a
                            className="nav__sub"
                            href={`/services/${s.slug}`}
                            aria-current={currentService === s.slug ? 'page' : undefined}
                            onClick={pick}
                          >
                            <span className="nav__sub-icon" style={{ '--tile': s.tile }}>
                              <img src={`/assets/icons/${s.icon}.webp`} alt="" width="26" height="26" />
                            </span>
                            <span>
                              <strong>{s.title}</strong>
                              <small>{s.short}</small>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                    <a className="nav__dropdown-all" href="#services" onClick={pick}>
                      View all services
                      <img src="/assets/icons/arrow-right-line.svg" alt="" width="20" height="20" />
                    </a>
                  </div>
                </li>
              ) : (
                <li key={l.label}>
                  <a
                    className="nav__link"
                    href={l.href}
                    aria-current={l.href === `/${route}` || (l.href === '/case-studies' && route.startsWith('case-study/')) || (l.href === '/blog' && route.startsWith('post/')) ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ),
            )}
            <li className="nav__cta-mobile">
              <a className="btn btn--gradient" href="/contact" onClick={() => setOpen(false)}>Contact us</a>
            </li>
          </ul>
        </nav>
        <a className="btn btn--gradient site-header__cta" href="/contact">Contact us</a>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle__bars" />
        </button>
      </div>
    </header>
  )
}
