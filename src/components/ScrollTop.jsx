import { useEffect, useState } from 'react'

// Floating "back to top" button: appears after scrolling down a little, and scrolls smoothly to the top.
export default function ScrollTop({ route }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500) // state only changes when the threshold is crossed
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [route])

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, left: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      className={`scroll-top ${show ? 'is-visible' : ''}`}
      aria-label="Scroll to top"
      onClick={toTop}
      tabIndex={show ? 0 : -1}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22">
        <path d="M12 19V5M5.500 11.500 12 5l6.500 6.500" fill="none" stroke="currentColor" strokeWidth="2.400" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
