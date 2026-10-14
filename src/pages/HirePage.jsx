import { useRef, useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import { engagementModels } from '../data/serviceDetails.js'
import { TILES } from '../data/services.js'
import { EMAIL as CONTACT_EMAIL } from '../data/contact.js'

/*
  PLACEHOLDER CONTENT: roles, figures and answers are sample copy. Replace them with what you really offer.
  The request form has no server behind it: on submit it opens the visitor's email app with the details filled in.
  The email address comes from src/data/contact.js (a placeholder there: change it to your real address).
*/

const roles = [
  { title: 'Front-end developers', icon: 'code', tile: TILES.blue, skills: ['React', 'Next.js', 'TypeScript'] },
  { title: 'Back-end developers', icon: 'dashboard', tile: TILES.teal, skills: ['Node.js', 'Python', '.NET'] },
  { title: 'Full-stack developers', icon: 'rocket', tile: TILES.dark, skills: ['React', 'Node.js', 'SQL'] },
  { title: 'Mobile developers', icon: 'mobile-app', tile: TILES.pink, skills: ['React Native', 'Flutter', 'Swift'] },
  { title: 'UI/UX designers', icon: 'heart-rate', tile: TILES.yellow, skills: ['Figma', 'Research', 'Design systems'] },
  { title: 'QA engineers', icon: 'success', tile: TILES.teal, skills: ['Cypress', 'Playwright', 'Selenium'] },
  { title: 'DevOps engineers', icon: 'shield', tile: TILES.purple, skills: ['AWS', 'Docker', 'Kubernetes'] },
  { title: 'Project managers', icon: 'trophy', tile: TILES.blue, skills: ['Agile', 'Jira', 'Reporting'] },
]

const benefits = [
  { value: '2 weeks', label: 'Average time to start', text: 'Skip months of recruiting. Pre-vetted engineers are ready to join.' },
  { value: '92%', label: 'Teams kept 2+ years', text: 'People stay, learn your product and keep delivering.' },
  { value: '1 in 8', label: 'Candidates accepted', text: 'Technical and communication screening on every hire.' },
  { value: '100%', label: 'You own the code', text: 'Everything lives in your repositories and your accounts.' },
]

const steps = [
  { title: 'Tell us what you need', text: 'Share your goals, stack and timeline in a short form or call.' },
  { title: 'We match your team', text: 'Within 48 hours you receive profiles of engineers who fit.' },
  { title: 'You interview', text: 'Meet the people, ask your questions and approve who joins.' },
  { title: 'Start in about two weeks', text: 'Onboarding, access and first tasks, with a demo in week two.' },
]

const faqs = [
  { q: 'Can I hire just one developer?', a: 'Yes. You can add a single specialist to your team, or build a full squad. Most clients start small and grow.' },
  { q: 'Is there a minimum commitment?', a: 'Most engagements start with three months, then continue month to month. There are no long lock-in contracts.' },
  { q: 'Can I replace someone if it is not working?', a: 'Yes. If the fit is not right, we find a replacement quickly and handle the handover at no extra cost.' },
  { q: 'What time zones do your developers work in?', a: 'We agree overlapping hours with your team in advance, usually four to six hours, so collaboration stays smooth.' },
  { q: 'How do you protect my intellectual property?', a: 'Every engineer signs an NDA and IP assignment. Code stays in your repositories, and access is controlled by you.' },
]

const sizes = ['Just 1 person', '2 to 3 people', '4 to 8 people', 'More than 8']

export default function HirePage() {
  const formRef = useRef(null)
  const [role, setRole] = useState('')
  const [sent, setSent] = useState(false)

  const choose = (title) => {
    setRole(title)
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const submit = (e) => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget))
    const body = [
      `Name: ${d.name}`,
      `Email: ${d.email}`,
      `Company: ${d.company || '-'}`,
      `Role needed: ${d.role}`,
      `Team size: ${d.size}`,
      '',
      d.message || '',
    ].join('\n')
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Hiring request: ${d.role}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <div className="hr-page">
      {/* ---------- Hero ---------- */}
      <section className="ap-hero" aria-labelledby="hr-title">
        <span className="ap-hero__glow" aria-hidden="true" />
        <div className="container">
          <nav className="ap-crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Hire</span>
          </nav>
          <div className="ap-hero__grid">
            <div className="ap-hero__text">
              <span className="section-heading__line" aria-hidden="true" />
              <h1 id="hr-title">
                <span className="ap-light">Hire world-class</span>
                <br />
                <span className="ap-bold">
                  developers, <span className="gradient-text">ready in weeks</span>
                </span>
              </h1>
              <p className="ap-hero__lead">
                Add vetted engineers, designers and QA to your team, or build a whole squad around your product,
                without the long hiring process.
              </p>
              <div className="ap-hero__actions">
                <button type="button" className="btn btn--hero" onClick={() => choose(role)}>Request a team</button>
                <a className="link-arrow" href="/how-it-works">
                  How it works
                  <img src="/assets/icons/arrow-right-line.svg" alt="" width="24" height="24" />
                </a>
              </div>
            </div>
            <div className="ap-hero__media">
              <div className="sp-art" aria-hidden="true" style={{ '--tile': 'linear-gradient(226deg, #f76680 0%, #57007b 100%)' }}>
                <span className="sp-art__glow" />
                <span className="sp-art__ring sp-art__ring--1" />
                <span className="sp-art__ring sp-art__ring--2" />
                <span className="sp-art__core">
                  <img src="/assets/icons/rocket.webp" alt="" width="96" height="96" />
                </span>
                <span className="sp-chip sp-chip--1">Vetted</span>
                <span className="sp-chip sp-chip--2">2-week start</span>
                <span className="sp-chip sp-chip--3">Full-time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Roles ---------- */}
      <section className="hr-roles" aria-labelledby="hr-roles-title">
        <div className="container container--wide">
          <SectionHeading id="hr-roles-title" lines={['Who would you', 'like to hire?']} center />
          <ul className="hr-roles__grid">
            {roles.map((r) => (
              <li key={r.title} className="hr-role">
                <span className="ap-value__tile" style={{ '--tile': r.tile }}>
                  <img src={`/assets/icons/${r.icon}.webp`} alt="" width="34" height="34" loading="lazy" />
                </span>
                <h3>{r.title}</h3>
                <ul className="cs-tech">
                  {r.skills.map((s) => <li key={s}>{s}</li>)}
                </ul>
                <button type="button" className="hr-role__btn" onClick={() => choose(r.title)}>
                  <span className="gradient-text">Hire now</span>
                  <img src="/assets/icons/chevron-purple.svg" alt="" width="11" height="16" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Benefits ---------- */}
      <section className="hr-why" aria-labelledby="hr-why-title">
        <div className="container container--wide">
          <SectionHeading id="hr-why-title" lines={['Why companies', 'hire through us']} center />
          <ul className="hr-why__grid">
            {benefits.map((b) => (
              <li key={b.label} className="hr-why__item">
                <strong className="gradient-text">{b.value}</strong>
                <h3>{b.label}</h3>
                <p>{b.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="sp-steps" aria-labelledby="hr-steps-title">
        <div className="container">
          <SectionHeading id="hr-steps-title" lines={['Hiring made', 'simple']} center />
          <ol className="sp-steps__grid">
            {steps.map((s, i) => (
              <li key={s.title} className="sp-step">
                <span className="sp-step__num gradient-text">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Engagement models ---------- */}
      <section className="sp-models" aria-labelledby="hr-models-title">
        <div className="container container--wide">
          <SectionHeading id="hr-models-title" lines={['Flexible ways', 'to work together']} center />
          <div className="sp-models__grid">
            {engagementModels.map((m) => (
              <article key={m.title} className={`sp-model ${m.tag === 'Most popular' ? 'is-featured' : ''}`}>
                <span className="sp-model__tag">{m.tag}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
                <ul>
                  {m.points.map((p) => (
                    <li key={p}>
                      <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                        <circle cx="10" cy="10" r="10" fill="currentColor" opacity=".14" />
                        <path d="m5.800 10.300 2.800 2.800 5.600-5.800" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <button type="button" className="btn btn--hero" onClick={() => choose(role)}>Request a team</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Request form ---------- */}
      <section className="hr-form" aria-labelledby="hr-form-title" ref={formRef} id="hire-form">
        <div className="container hr-form__grid">
          <div className="hr-form__intro">
            <SectionHeading id="hr-form-title" lines={['Tell us who', 'you need']} />
            <p>Share a few details and we will come back within one working day with next steps and matching profiles.</p>
            <ul className="hr-form__points">
              <li>No obligation and no sales pressure</li>
              <li>Profiles of matching engineers in 48 hours</li>
              <li>Your details are used only to reply to you</li>
            </ul>
          </div>

          <form className="hr-form__card" onSubmit={submit}>
            <div className="hr-field">
              <label htmlFor="hr-name">Your name</label>
              <input id="hr-name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="hr-field">
              <label htmlFor="hr-email">Work email</label>
              <input id="hr-email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="hr-field">
              <label htmlFor="hr-company">Company <span>(optional)</span></label>
              <input id="hr-company" name="company" type="text" autoComplete="organization" />
            </div>
            <div className="hr-field">
              <label htmlFor="hr-role">Who do you need?</label>
              <select id="hr-role" name="role" value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="" disabled>Choose a role</option>
                {roles.map((r) => <option key={r.title} value={r.title}>{r.title}</option>)}
                <option value="A full team">A full team</option>
              </select>
            </div>
            <div className="hr-field">
              <label htmlFor="hr-size">Team size</label>
              <select id="hr-size" name="size" defaultValue={sizes[0]}>
                {sizes.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="hr-field hr-field--full">
              <label htmlFor="hr-message">Tell us about your project <span>(optional)</span></label>
              <textarea id="hr-message" name="message" rows="4" />
            </div>
            <div className="hr-field--full hr-form__actions">
              <button type="submit" className="btn btn--hero">Send request</button>
              <p role="status">
                {sent
                  ? 'Your email app should have opened with the request ready to send. If not, write to us at ' + CONTACT_EMAIL + '.'
                  : 'This opens your email app with the request filled in.'}
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="sp-faq" aria-labelledby="hr-faq-title">
        <div className="container">
          <SectionHeading id="hr-faq-title" lines={['Frequently asked', 'questions']} center />
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
