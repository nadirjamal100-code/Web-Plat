import { useEffect, useRef, useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import Clients from '../components/Clients.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import AboutHeroVector from '../components/AboutHeroVector.jsx'

/*
  PLACEHOLDER CONTENT: the figures, years and milestones below are sample copy so the page looks complete.
  Replace them with your real company numbers and dates.
*/
const stats = [
  { to: 8, suffix: '+', label: 'Years of experience', icon: 'trophy' },
  { to: 150, suffix: '+', label: 'Projects delivered', icon: 'success' },
  { to: 60, suffix: '+', label: 'Engineers & designers', icon: 'code' },
  { to: 98, suffix: '%', label: 'Client retention', icon: 'heart-rate' },
]

const values = [
  {
    icon: 'rocket',
    tile: '#27262b',
    title: 'UX-driven engineering',
    text: 'Projects are led by designers, so every design and experience translates cleanly into code.',
  },
  {
    icon: 'code',
    tile: 'linear-gradient(226deg, #67e0f7 0%, #4d96ec 100%)',
    title: 'Shared understanding',
    text: 'We work closely with your team to clarify scope, share context and keep everyone moving in one direction.',
  },
  {
    icon: 'heart-rate',
    tile: 'linear-gradient(226deg, #ff97b3 0%, #ff3a9d 100%)',
    title: 'People first',
    text: 'Great software comes from motivated people. We hire carefully and stay with you for the long term.',
  },
  {
    icon: 'shield',
    tile: 'linear-gradient(226deg, #67e9f1 0%, #24e795 100%)',
    title: 'Security & IP protection',
    text: 'Your code, data and intellectual property are protected from the first commit to the final release.',
  },
  {
    icon: 'success',
    tile: 'linear-gradient(226deg, #ffe468 0%, #f99a6c 100%)',
    title: 'Quality without shortcuts',
    text: 'Code reviews, testing and QA are part of every sprint, never an afterthought.',
  },
  {
    icon: 'dashboard',
    tile: 'linear-gradient(226deg, #f76680 0%, #5a0a80 100%)',
    title: 'Transparent delivery',
    text: 'Standups and weekly demos keep you informed, so there are no surprises at launch.',
  },
]

const milestones = [
  { year: '2018', title: 'Founded', text: 'Hi Developers opens its doors with a small team and a big idea.' },
  { year: '2020', title: 'First 20 engineers', text: 'We grow into a full-stack team serving clients across web and mobile.' },
  { year: '2022', title: 'Dedicated team model', text: 'We launch our model for building and managing teams around client goals.' },
  { year: '2024', title: '100th project', text: 'A milestone project ships, and most of our clients stay on for years.' },
  { year: '2026', title: 'Today', text: '60+ engineers and designers delivering products people love to use.' },
]

const work = ['case-1', 'case-2', 'case-3']

function CountUp({ to, suffix = '', duration = 1600 }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setValue(to)
      return undefined
    }
    let raf = 0
    let started = false
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return
        started = true
        io.disconnect()
        const t0 = performance.now()
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / duration)
          setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to, duration])

  return (
    <span ref={ref}>
      {value}
      <em className="ap-stat__suffix">{suffix}</em>
    </span>
  )
}

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* ---------- Page hero ---------- */}
      <section className="ap-hero" aria-labelledby="about-page-title">
        <span className="ap-hero__glow" aria-hidden="true" />
        <div className="container">
          <nav className="ap-crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">About us</span>
          </nav>

          <div className="ap-hero__grid">
            <div className="ap-hero__text">
              <span className="section-heading__line" aria-hidden="true" />
              <h1 id="about-page-title">
                <span className="ap-light">We turn ideas into</span>
                <br />
                <span className="ap-bold">
                  software people <span className="gradient-text">love</span>
                </span>
              </h1>
              <p className="ap-hero__lead">
                Hi Developers helps ambitious companies build and manage world-class teams of developers, from the
                first prototype to products used by millions.
              </p>
              <div className="ap-hero__actions">
                <a className="btn btn--hero" href="#contact">Let’s talk</a>
                <a className="link-arrow" href="/case-studies">
                  See our work
                  <img src="/assets/icons/arrow-right-line.svg" alt="" width="24" height="24" />
                </a>
              </div>
            </div>

            <div className="ap-hero__media">
              <AboutHeroVector />
              <div className="ap-badge ap-badge--a">
                <span className="ap-badge__icon"><img src="/assets/icons/trophy.webp" alt="" width="26" height="26" /></span>
                <span><strong>8+ years</strong><small>building software</small></span>
              </div>
              <div className="ap-badge ap-badge--b">
                <span className="ap-badge__icon ap-badge__icon--warm"><img src="/assets/icons/success.webp" alt="" width="26" height="26" /></span>
                <span><strong>150+ projects</strong><small>delivered with care</small></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Numbers ---------- */}
      <section className="ap-stats" aria-labelledby="stats-title">
        <div className="container">
          <SectionHeading id="stats-title" lines={['Our impact', 'in numbers']} center />
        </div>
        <ul className="container ap-stats__grid">
          {stats.map((s) => (
            <li key={s.label} className="ap-stat">
              <span className="ap-stat__icon">
                <img src={`/assets/icons/${s.icon}.webp`} alt="" width="34" height="34" loading="lazy" />
              </span>
              <strong><CountUp to={s.to} suffix={s.suffix} /></strong>
              <span className="ap-stat__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Story ---------- */}
      <section className="ap-story" aria-labelledby="story-title">
        <div className="container ap-story__grid">
          <div className="ap-story__media">
            <span className="dot dot--warm ap-dot ap-dot--a" aria-hidden="true" />
            <img
              src="/assets/way/way-1.webp"
              alt="Our engineers planning work around a whiteboard"
              width="575"
              height="473"
              loading="lazy"
            />
            <span className="dot ap-dot ap-dot--b" aria-hidden="true" />
          </div>
          <div className="ap-story__text">
            <SectionHeading id="story-title" lines={['How we started', 'and where we are going']} />
            <p>
              Hi Developers began with a simple observation: great products are built by great teams, yet finding and
              managing the right engineers is the hardest part of building software.
            </p>
            <p>
              So we built a different kind of software house. We add development capacity to tech teams, embedding
              vetted engineers who follow your processes and stick with you long term. We are a custom software
              development company that guarantees the successful delivery of your project.
            </p>
            <ul className="ap-checks">
              <li>Vetted, long-term engineers, not freelancers</li>
              <li>UX-first, design-driven delivery</li>
              <li>Standups and weekly demos, so you always know where things stand</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Values ---------- */}
      <section className="ap-values" aria-labelledby="values-title">
        <div className="container container--wide">
          <SectionHeading id="values-title" lines={['What we believe', 'The values we work by']} center />
          <ul className="ap-values__grid">
            {values.map((v) => (
              <li key={v.title} className="ap-value">
                <span className="ap-value__tile" style={{ '--tile': v.tile }}>
                  <img src={`/assets/icons/${v.icon}.webp`} alt="" width="34" height="34" loading="lazy" />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Journey ---------- */}
      <section className="ap-journey" aria-labelledby="journey-title">
        <div className="container">
          <SectionHeading id="journey-title" lines={['Our journey', 'so far']} center />
          <ol className="ap-timeline">
            {milestones.map((m) => (
              <li key={m.year} className="ap-milestone">
                <span className="ap-milestone__dot" aria-hidden="true" />
                <strong className="gradient-text">{m.year}</strong>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Selected work ---------- */}
      <section className="ap-work" aria-labelledby="work-title">
        <div className="container container--wide">
          <SectionHeading id="work-title" lines={['Work we are', 'proud of']} center />
          <ul className="ap-work__grid">
            {work.map((img, i) => (
              <li key={img}>
                <a className="ap-work__card" href="/case-studies">
                  <span className="ap-work__img">
                    <img
                      src={`/assets/case-studies/${img}.webp`}
                      alt={`Website design project ${i + 1}`}
                      width="601"
                      height="416"
                      loading="lazy"
                    />
                  </span>
                  <span className="ap-work__caption">
                    <h3>Website Design for SCFC Canada</h3>
                    <span className="gradient-text">Read more</span>
                    <img src="/assets/icons/chevron-purple.svg" alt="" width="11" height="16" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Clients + call to action (shared with the home page) ---------- */}
      <Clients />
      <CtaBanner />
    </div>
  )
}
