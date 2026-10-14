import SectionHeading from '../components/SectionHeading.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { engagementModels } from '../data/serviceDetails.js'
import { TILES } from '../data/services.js'

/*
  PLACEHOLDER CONTENT: durations, tools and answers below are sample copy. Replace them with how you really work.
  The six steps match the "How development works" section on the home page.
*/
const steps = [
  {
    title: 'Assemble the right team',
    time: 'Week 1',
    text: 'We handle the vetting and selection you do not have the time, expertise or desire to do. You meet and approve every person before they join.',
    points: ['Skills matched to your stack and culture', 'Technical and communication screening', 'You interview and approve the team'],
  },
  {
    title: 'Sprint planning',
    time: 'Every 2 weeks',
    text: 'The sprint roadmap is a collective effort. Team members collaborate to clarify items and make sure everyone shares the same understanding.',
    points: ['Clear goals for each sprint', 'Work broken into small, estimated tasks', 'Priorities always set by you'],
  },
  {
    title: 'Tech architecture',
    time: 'Weeks 1 to 3',
    text: 'We break monolithic apps into services. Decoupling the code lets teams move faster and more independently, without stepping on each other.',
    points: ['Architecture review and decision records', 'Clear boundaries between services', 'Built to scale from the start'],
  },
  {
    title: 'Standups & weekly demos',
    time: 'Daily and weekly',
    text: 'Standups, weekly demos and weekly reviews keep everyone on the same page and give everyone a chance to raise concerns early.',
    points: ['Daily 15-minute standup in your tools', 'Working demo every week', 'Honest status, no surprises'],
  },
  {
    title: 'Code reviews',
    time: 'On every change',
    text: 'Reviews before release catch issues such as memory leaks, file leaks, performance problems and general bad smells before users do.',
    points: ['Every change reviewed by a second engineer', 'Automated tests and checks on each commit', 'Security and performance reviewed regularly'],
  },
  {
    title: 'Iterative delivery',
    time: 'Continuous',
    text: 'We divide the implementation into several checkpoints rather than a single deadline, so you see progress early and can change direction.',
    points: ['Frequent, small releases', 'Feedback built into every cycle', 'Roadmap adjusted as you learn'],
  },
]

const rhythm = [
  { day: 'Daily', title: 'Standup', text: 'A short check-in on progress, plans and blockers.', tile: TILES.blue },
  { day: 'Weekly', title: 'Demo', text: 'See working software and give feedback while it is cheap to change.', tile: TILES.pink },
  { day: 'Weekly', title: 'Review', text: 'Look at quality, risks and priorities with the whole team.', tile: TILES.teal },
  { day: 'Every 2 weeks', title: 'Planning', text: 'Agree on the next sprint and a realistic scope.', tile: TILES.yellow },
]

const firstDays = [
  { when: 'Day 1 to 3', title: 'Kick-off', text: 'Goals, access, tools and ways of working agreed.' },
  { when: 'Week 1', title: 'Team in place', text: 'Engineers onboarded and the first tasks assigned.' },
  { when: 'Week 2', title: 'First demo', text: 'Your first working increment is shown and reviewed.' },
  { when: 'Day 30', title: 'Steady rhythm', text: 'A predictable cadence of releases and clear reporting.' },
]

const tools = ['Slack', 'Jira', 'GitHub', 'Figma', 'Notion', 'Zoom', 'Confluence', 'GitLab', 'Trello', 'Google Meet']

const faqs = [
  { q: 'How quickly can the team start?', a: 'Most teams start within two weeks of agreeing the plan. Smaller additions to an existing team can often begin sooner.' },
  { q: 'Do I need a technical person on my side?', a: 'It helps but is not required. We can provide a tech lead who manages the work day to day and explains decisions in plain language.' },
  { q: 'How do you keep me informed?', a: 'Daily standups, a weekly demo and a short written report. You can also see the work any time in your own tools.' },
  { q: 'Can I change direction mid-project?', a: 'Yes. Short sprints are designed for exactly that. We adjust the plan every two weeks without penalty.' },
  { q: 'Who owns the code and designs?', a: 'You do, from the first commit. Everything lives in your repositories and your accounts.' },
]

export default function HowItWorksPage() {
  return (
    <div className="hw-page">
      {/* ---------- Hero ---------- */}
      <section className="ap-hero" aria-labelledby="hw-title">
        <span className="ap-hero__glow" aria-hidden="true" />
        <div className="container">
          <nav className="ap-crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">How it works</span>
          </nav>
          <div className="ap-hero__grid">
            <div className="ap-hero__text">
              <span className="section-heading__line" aria-hidden="true" />
              <h1 id="hw-title">
                <span className="ap-light">From first call to</span>
                <br />
                <span className="ap-bold">
                  steady, <span className="gradient-text">predictable delivery</span>
                </span>
              </h1>
              <p className="ap-hero__lead">
                Here is exactly how we build a team around your product, plan the work, keep you informed and ship
                great software, sprint after sprint.
              </p>
              <div className="ap-hero__actions">
                <a className="btn btn--hero" href="#contact">Get started</a>
                <a className="link-arrow" href="/case-studies">
                  See it in action
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
                <span className="sp-chip sp-chip--1">Plan</span>
                <span className="sp-chip sp-chip--2">Build</span>
                <span className="sp-chip sp-chip--3">Ship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Six steps ---------- */}
      <section className="hw-steps" aria-labelledby="hw-steps-title">
        <div className="container">
          <SectionHeading id="hw-steps-title" lines={['Our process', 'in six steps']} center />
          <ol className="hw-timeline">
            {steps.map((s, i) => (
              <li key={s.title} className="hw-step">
                <span className="hw-step__num" aria-hidden="true">{i + 1}</span>
                <div className="hw-step__card">
                  <span className="hw-step__time">{s.time}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul>
                    {s.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- First 30 days ---------- */}
      <section className="hw-first" aria-labelledby="hw-first-title">
        <div className="container container--wide">
          <SectionHeading id="hw-first-title" lines={['Your first', '30 days']} center />
          <ol className="hw-first__grid">
            {firstDays.map((d) => (
              <li key={d.title} className="hw-first__item">
                <span className="hw-first__when gradient-text">{d.when}</span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Weekly rhythm ---------- */}
      <section className="hw-rhythm" aria-labelledby="hw-rhythm-title">
        <div className="container container--wide">
          <SectionHeading id="hw-rhythm-title" lines={['The rhythm', 'we work to']} center />
          <ul className="hw-rhythm__grid">
            {rhythm.map((r) => (
              <li key={r.title} className="hw-rhythm__item" style={{ '--tile': r.tile }}>
                <span className="hw-rhythm__day">{r.day}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Tools ---------- */}
      <section className="sp-tech" aria-labelledby="hw-tools-title">
        <div className="container">
          <SectionHeading id="hw-tools-title" lines={['Tools', 'we work in']} center />
          <p className="hw-tools__note">We join your workspace rather than asking you to learn ours.</p>
          <ul className="sp-tech__list">
            {tools.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </section>

      {/* ---------- Engagement models ---------- */}
      <section className="sp-models" aria-labelledby="hw-models-title">
        <div className="container container--wide">
          <SectionHeading id="hw-models-title" lines={['Ways to work with us', 'Pick what suits you']} center />
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
                <a className="btn btn--hero" href="#contact">Talk to us</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="sp-faq" aria-labelledby="hw-faq-title">
        <div className="container">
          <SectionHeading id="hw-faq-title" lines={['Frequently asked', 'questions']} center />
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

      <CtaBanner />
    </div>
  )
}
