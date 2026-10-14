import { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading.jsx'

const text =
  'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.'

const services = [
  { title: 'Mobile App Development', icon: 'mobile-app' },
  { title: 'Mobile App Development', icon: 'mobile-app' },
  { title: 'Web Design & Development', icon: 'code' },
  { title: 'Software Testing Service', icon: 'dashboard' },
  { title: 'Software Testing Service', icon: 'code' },
]

const N = services.length
const AUTOPLAY_MS = 3500
const SLIDE_MS = 450

// Three copies of the list sit side by side: [0..N-1] [N..2N-1] [2N..3N-1].
// We always rest in the middle copy; when the slider drifts into the first or last copy it silently
// jumps back by N cards (identical content, no animation), so the cards never run out and there is no gap.
const loop = [...services, ...services, ...services]

export default function Services() {
  const [pos, setPos] = useState(N + 2) // start on "Web Design & Development"
  const [jumping, setJumping] = useState(false)
  const [paused, setPaused] = useState(false)
  const current = ((pos % N) + N) % N

  // Autoplay: advance one card at a time, forever, pausing while hovered/focused.
  useEffect(() => {
    if (paused) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = setInterval(() => setPos((p) => p + 1), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused])

  // After a slide finishes in a clone copy, jump back to the matching card in the middle copy.
  useEffect(() => {
    if (pos >= N && pos < 2 * N) return undefined
    let raf1 = 0
    let raf2 = 0
    const t = setTimeout(() => {
      setJumping(true)
      setPos((p) => (p >= 2 * N ? p - N : p + N))
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setJumping(false))
      })
    }, SLIDE_MS + 40)
    return () => {
      clearTimeout(t)
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [pos])

  return (
    <section
      className="services"
      id="services"
      aria-labelledby="services-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="services__head">
        <SectionHeading id="services-title" lines={['Services we offer']} center />
      </div>
      <div className="services__viewport" aria-live="off">
        <ul className={`services__track ${jumping ? 'is-jumping' : ''}`} style={{ '--active': pos }}>
          {loop.map((s, i) => (
            <li
              key={i}
              className={`service-card ${i === pos ? 'is-active' : ''}`}
              aria-current={i === pos}
              aria-hidden={i < N || i >= 2 * N ? true : undefined}
            >
              <span className="service-card__icon">
                <img src={`/assets/icons/${s.icon}.webp`} alt="" loading="lazy" width="34" height="34" />
              </span>
              <h3 className={i === pos ? 'gradient-text' : ''}>{s.title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="services__dots" role="tablist" aria-label="Choose a service">
        {services.map((s, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Service ${i + 1}`}
            className={i === current ? 'is-active' : ''}
            onClick={() => setPos(N + i)}
          />
        ))}
      </div>
      <div className="services__count" aria-hidden="true">
        <span>{String(current + 1).padStart(2, '0')}</span>
        <span className="services__bar"><i style={{ width: `${((current + 1) / N) * 100}%` }} /></span>
        <span className="is-end">05</span>
      </div>
    </section>
  )
}
