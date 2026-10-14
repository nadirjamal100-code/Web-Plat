import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import { ADDRESS, EMAIL, HOURS, PHONE, PHONE_DISPLAY } from '../data/contact.js'
import { TILES } from '../data/services.js'

/*
  The form has no server behind it: on submit it opens the visitor's email app with the message filled in.
  Contact details come from src/data/contact.js (EMAIL, ADDRESS and HOURS there are placeholders).
*/
const topics = ['A new project', 'Hiring a team', 'Partnership', 'Careers', 'Something else']

const next = [
  { title: 'We read it', text: 'A real person reads your message the same day.' },
  { title: 'We reply within one working day', text: 'With answers, or a few questions to understand your goals.' },
  { title: 'We set up a call', text: 'A free, no-obligation conversation about your project.' },
]

const faqs = [
  { q: 'How quickly will I get a reply?', a: 'Within one working day. For urgent matters, please call us.' },
  { q: 'Is the first conversation free?', a: 'Yes. The first call is free and carries no obligation.' },
  { q: 'Do you sign NDAs?', a: 'Of course. We are happy to sign an NDA before you share any details.' },
  { q: 'Can I visit your office?', a: 'You are welcome. Please book a time first so the right people are there to meet you.' },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget))
    const body = [`Name: ${d.name}`, `Email: ${d.email}`, `Phone: ${d.phone || '-'}`, `Topic: ${d.topic}`, '', d.message].join('\n')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Website enquiry: ${d.topic}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const cards = [
    { title: 'Call us', icon: 'heart-rate', tile: TILES.pink, lines: [PHONE_DISPLAY], href: `tel:${PHONE}`, action: 'Call now' },
    { title: 'Email us', icon: 'dashboard', tile: TILES.blue, lines: [EMAIL], href: `mailto:${EMAIL}`, action: 'Send an email' },
    { title: 'Working hours', icon: 'success', tile: TILES.teal, lines: [HOURS], action: null },
    { title: 'Visit us', icon: 'rocket', tile: TILES.yellow, lines: ADDRESS, action: null },
  ]

  return (
    <div className="ct-page">
      {/* ---------- Hero ---------- */}
      <section className="ap-hero" aria-labelledby="ct-title">
        <span className="ap-hero__glow" aria-hidden="true" />
        <div className="container">
          <nav className="ap-crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Contact us</span>
          </nav>
          <div className="ap-hero__grid">
            <div className="ap-hero__text">
              <span className="section-heading__line" aria-hidden="true" />
              <h1 id="ct-title">
                <span className="ap-light">Let’s build something</span>
                <br />
                <span className="ap-bold">
                  great <span className="gradient-text">together</span>
                </span>
              </h1>
              <p className="ap-hero__lead">
                Have a project, a question or an idea? Tell us about it. We reply within one working day, and the first
                conversation is always free.
              </p>
              <div className="ap-hero__actions">
                <a className="btn btn--hero" href="#ct-form">Send a message</a>
              </div>
            </div>
            <div className="ap-hero__media">
              <div className="sp-art" aria-hidden="true" style={{ '--tile': 'linear-gradient(226deg, #67e0f7 0%, #57007b 100%)' }}>
                <span className="sp-art__glow" />
                <span className="sp-art__ring sp-art__ring--1" />
                <span className="sp-art__ring sp-art__ring--2" />
                <span className="sp-art__core">
                  <img src="/assets/icons/dashboard.webp" alt="" width="96" height="96" />
                </span>
                <span className="sp-chip sp-chip--1">Hello!</span>
                <span className="sp-chip sp-chip--2">1 working day</span>
                <span className="sp-chip sp-chip--3">Free first call</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Ways to reach us ---------- */}
      <section className="ct-cards" aria-label="Ways to contact us">
        <ul className="container container--wide ct-cards__grid">
          {cards.map((c) => (
            <li key={c.title} className="ct-card">
              <span className="ap-value__tile" style={{ '--tile': c.tile }}>
                <img src={`/assets/icons/${c.icon}.webp`} alt="" width="34" height="34" loading="lazy" />
              </span>
              <h3>{c.title}</h3>
              <address>
                {c.lines.map((l) => <span key={l}>{l}</span>)}
              </address>
              {c.action && (
                <a
                  className="ct-card__link"
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="gradient-text">{c.action}</span>
                  <img src="/assets/icons/chevron-purple.svg" alt="" width="11" height="16" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Form ---------- */}
      <section className="hr-form ct-form" aria-labelledby="ct-form-title" id="ct-form">
        <div className="container hr-form__grid">
          <div className="hr-form__intro">
            <SectionHeading id="ct-form-title" lines={['Send us', 'a message']} />
            <p>Fill in the form and we will get back to you within one working day.</p>
            <dl className="ct-info">
              <div>
                <dt>Phone</dt>
                <dd><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a></dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>{ADDRESS.slice(1).join(', ')}</dd>
              </div>
              <div>
                <dt>Prefer email?</dt>
                <dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
              </div>
            </dl>
          </div>

          <form className="hr-form__card" onSubmit={submit}>
            <div className="hr-field">
              <label htmlFor="ct-name">Your name</label>
              <input id="ct-name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="hr-field">
              <label htmlFor="ct-email">Email</label>
              <input id="ct-email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="hr-field">
              <label htmlFor="ct-phone">Phone <span>(optional)</span></label>
              <input id="ct-phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="hr-field">
              <label htmlFor="ct-topic">What is it about?</label>
              <select id="ct-topic" name="topic" defaultValue={topics[0]}>
                {topics.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="hr-field hr-field--full">
              <label htmlFor="ct-message">Your message</label>
              <textarea id="ct-message" name="message" rows="5" required />
            </div>
            <div className="hr-field--full hr-form__actions">
              <button type="submit" className="btn btn--hero">Send message</button>
              <p role="status">
                {sent
                  ? `Your email app should have opened with the message ready to send. If not, write to us at ${EMAIL}.`
                  : 'This opens your email app with the message filled in.'}
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* ---------- What happens next ---------- */}
      <section className="sp-steps" aria-labelledby="ct-next-title">
        <div className="container">
          <SectionHeading id="ct-next-title" lines={['What happens', 'next']} center />
          <ol className="sp-steps__grid ct-next__grid">
            {next.map((s, i) => (
              <li key={s.title} className="sp-step">
                <span className="sp-step__num gradient-text">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="sp-faq" aria-labelledby="ct-faq-title">
        <div className="container">
          <SectionHeading id="ct-faq-title" lines={['Quick', 'answers']} center />
          <div className="sp-faq__list">
            {faqs.map((f, i) => (
              <details key={f.q} className="sp-faq__item" open={i === 0}>
                <summary>
                  {f.q}
                  <span className="sp-faq__icon" aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
