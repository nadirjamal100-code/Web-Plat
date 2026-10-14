import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'

const people = [
  { name: 'Romeena De Silva', company: 'Janet Cosmetics', photo: 'person-1' },
  { name: 'Romeena De Silva', company: 'Janet Cosmetics', photo: 'person-2' },
  { name: 'Imran Khan', company: 'Software Engineer', photo: 'person-3' },
  { name: 'Romeena De Silva', company: 'Janet Cosmetics', photo: 'person-4' },
  { name: 'Romeena De Silva', company: 'Janet Cosmetics', photo: 'person-5' },
]

const comma =
  'M9.6 0C4.3 0 0 3.9 0 9c0 3.9 2.6 6.700 6.100 6.700-.300 3.300-2.200 5.700-4.900 7.600L2.800 24c6.400-2.800 10.200-8 10.200-14.200C13 3.800 11.700 0 9.600 0z'

export default function Testimonials() {
  const [active, setActive] = useState(2)
  const go = (i) => setActive((i + people.length) % people.length)
  return (
    <section className="feedback" id="testimonials" aria-labelledby="feedback-title">
      <div className="container feedback__inner">
        <svg className="feedback__comma feedback__comma--open" viewBox="0 0 13 24" aria-hidden="true">
          <defs>
            <linearGradient id="qg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#c8407f" />
              <stop offset="1" stopColor="#7a1f6e" />
            </linearGradient>
          </defs>
          <path fill="url(#qg)" d={comma} transform="rotate(180 6.5 12)" />
        </svg>
        <svg className="feedback__comma feedback__comma--close" viewBox="0 0 13 24" aria-hidden="true">
          <path fill="url(#qg)" d={comma} />
        </svg>
        <svg className="feedback__curve feedback__curve--left" viewBox="0 0 140 196" aria-hidden="true">
          <path d="M18 6 C-4 62 8 152 136 192" fill="none" stroke="#8f2d7c" strokeWidth="1.5" strokeDasharray="5 5" strokeLinecap="round" />
          <path d="M9 14 L19 3 L30 10" fill="none" stroke="#8f2d7c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg className="feedback__curve feedback__curve--right" viewBox="0 0 190 256" aria-hidden="true">
          <path d="M176 4 C196 92 170 218 16 248" fill="none" stroke="#8f2d7c" strokeWidth="1.5" strokeDasharray="5 5" strokeLinecap="round" />
          <path d="M25 238 L14 248 L25 258" fill="none" stroke="#8f2d7c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="feedback__quote">
          <SectionHeading id="feedback-title" lines={['Why customers love', 'working with us']} center />
          <blockquote>
            Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing
            agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to
            someone else.
          </blockquote>
        </div>
        <ul className="feedback__people">
          {people.map((p, i) => {
            const dist = Math.abs(i - active)
            return (
              <li key={i} className={`person ${i === active ? 'is-active' : ''} ${dist === 1 ? 'is-near' : ''}`}>
                <button type="button" onClick={() => setActive(i)} aria-label={`Show review from ${p.name}`} aria-pressed={i === active}>
                  <span className="person__photo">
                    <img src={`/assets/people/${p.photo}.webp`} alt="" loading="lazy" width="100" height="100" />
                  </span>
                  <span className="person__stars" aria-label="Rated 5 out of 5">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <img key={s} src="/assets/icons/star.webp" alt="" width="20" height="20" loading="lazy" />
                    ))}
                  </span>
                  <span className="person__meta">
                    <span className="person__name">{p.name}</span>
                    <span className="person__company">{p.company}</span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
        <button type="button" className="round-btn feedback__prev" aria-label="Previous review" onClick={() => go(active - 1)}>
          <img src="/assets/icons/arrow-left-purple.svg" alt="" />
        </button>
        <button type="button" className="round-btn round-btn--solid feedback__next" aria-label="Next review" onClick={() => go(active + 1)}>
          <img src="/assets/icons/arrow-right-white.svg" alt="" />
        </button>
      </div>
    </section>
  )
}
