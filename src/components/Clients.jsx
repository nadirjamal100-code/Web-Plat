import { useRef } from 'react'
import SectionHeading from './SectionHeading.jsx'

const logos = [
  ['client-hd', 107], ['client-9', 170], ['client-8', 101], ['client-5', 215],
  ['client-7', 215], ['client-9b', 215], ['client-6', 215], ['client-3', 215],
]

export default function Clients() {
  const scroller = useRef(null)
  const scrollBy = (dir) => scroller.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })
  return (
    <section className="clients" aria-labelledby="clients-title">
      <span className="dot dot--c" aria-hidden="true" />
      <div className="container clients__head">
        <SectionHeading id="clients-title" lines={['Meet the People', 'We are Working With']} />
        <div className="clients__controls">
          <button type="button" className="round-btn" aria-label="Scroll logos left" onClick={() => scrollBy(-1)}>
            <img src="/assets/icons/arrow-left-purple.svg" alt="" />
          </button>
          <button type="button" className="round-btn round-btn--solid" aria-label="Scroll logos right" onClick={() => scrollBy(1)}>
            <img src="/assets/icons/arrow-right-white.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="clients__band">
        <ul className="clients__row" ref={scroller} tabIndex={0} aria-label="Our clients">
          {logos.map(([name, w], i) => (
            <li key={name}>
              <img src={`/assets/clients/${name}.webp`} alt={`Client logo ${i + 1}`} width={w} height="80" loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
