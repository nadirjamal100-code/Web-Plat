import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import Clients from '../components/Clients.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { caseStudies, categories, impact, quote } from '../data/caseStudies.js'

const labelOf = (id) => categories.find((c) => c.id === id)?.label ?? id

function Cover({ study, className = '' }) {
  if (study.img) {
    return (
      <img
        className={`cs-cover cs-cover--img ${className}`}
        src={`/assets/case-studies/${study.img}.webp`}
        alt={`${study.client} project preview`}
        width="601"
        height="416"
        loading="lazy"
      />
    )
  }
  return (
    <div className={`cs-cover cs-cover--art ${className}`} style={{ '--tile': study.tile }} role="img" aria-label={`${study.client} project illustration`}>
      <span className="cs-cover__ring" aria-hidden="true" />
      <span className="cs-cover__core" aria-hidden="true">
        <img src={`/assets/icons/${study.icon}.webp`} alt="" width="64" height="64" loading="lazy" />
      </span>
      {study.tech.map((t, i) => (
        <span key={t} className={`cs-cover__chip cs-cover__chip--${i + 1}`} aria-hidden="true">{t}</span>
      ))}
    </div>
  )
}

function Results({ items }) {
  return (
    <ul className="cs-results">
      {items.map((r) => (
        <li key={r.label}>
          <strong className="gradient-text">{r.value}</strong>
          <span>{r.label}</span>
        </li>
      ))}
    </ul>
  )
}

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState('all')
  const featured = caseStudies.find((c) => c.featured) ?? caseStudies[0]
  const list = caseStudies.filter((c) => c !== featured && (filter === 'all' || c.category === filter))

  return (
    <div className="cs-page">
      {/* ---------- Hero ---------- */}
      <section className="ap-hero" aria-labelledby="cs-title">
        <span className="ap-hero__glow" aria-hidden="true" />
        <div className="container">
          <nav className="ap-crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Case studies</span>
          </nav>
          <div className="ap-hero__grid">
            <div className="ap-hero__text">
              <span className="section-heading__line" aria-hidden="true" />
              <h1 id="cs-title">
                <span className="ap-light">Real products, real</span>
                <br />
                <span className="ap-bold">
                  results we are <span className="gradient-text">proud of</span>
                </span>
              </h1>
              <p className="ap-hero__lead">
                A closer look at how we help companies launch faster, scale with confidence and turn good ideas into
                software people use every day.
              </p>
              <div className="ap-hero__actions">
                <a className="btn btn--hero" href="#contact">Start your project</a>
                <a className="link-arrow" href="/about">
                  About our team
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
                  <img src="/assets/icons/trophy.webp" alt="" width="96" height="96" />
                </span>
                <span className="sp-chip sp-chip--1">+68% leads</span>
                <span className="sp-chip sp-chip--2">99.95% uptime</span>
                <span className="sp-chip sp-chip--3">4.8★ rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Impact ---------- */}
      <section className="cs-impact" aria-label="Our impact in numbers">
        <ul className="container cs-impact__grid">
          {impact.map((s) => (
            <li key={s.label} className="sp-stat cs-impact__item">
              <strong className="gradient-text">{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Featured ---------- */}
      <section className="cs-featured" aria-labelledby="cs-featured-title">
        <div className="container container--wide">
          <SectionHeading id="cs-featured-title" lines={['Featured', 'case study']} center />
          <article className="cs-feature">
            <Cover study={featured} className="cs-feature__cover" />
            <div className="cs-feature__body">
              <span className="cs-tag">{labelOf(featured.category)} · {featured.industry}</span>
              <h3>{featured.client}: {featured.title}</h3>
              <p>{featured.summary}</p>
              <dl className="cs-story">
                <div><dt>Challenge</dt><dd>{featured.challenge}</dd></div>
                <div><dt>Solution</dt><dd>{featured.solution}</dd></div>
              </dl>
              <Results items={featured.results} />
              <ul className="cs-tech">
                {featured.tech.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <a className="btn btn--hero" href={`/case-studies/${featured.slug}`}>Read the full story</a>
            </div>
          </article>
        </div>
      </section>

      {/* ---------- All projects ---------- */}
      <section className="cs-all" aria-labelledby="cs-all-title">
        <div className="container container--wide">
          <SectionHeading id="cs-all-title" lines={['More', 'of our work']} center />
          <div className="cs-filters" role="group" aria-label="Filter projects by type">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`cs-filter ${filter === c.id ? 'is-active' : ''}`}
                aria-pressed={filter === c.id}
                onClick={() => setFilter(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          {list.length === 0 ? (
            <p className="cs-empty">No other projects in this category yet. <button type="button" onClick={() => setFilter('all')}>Show all projects</button></p>
          ) : (
            <ul className="cs-grid">
              {list.map((c) => (
                <li key={c.slug} className="cs-card">
                  <Cover study={c} className="cs-card__cover" />
                  <div className="cs-card__body">
                    <span className="cs-tag">{labelOf(c.category)} · {c.industry}</span>
                    <h3>{c.client}: {c.title}</h3>
                    <p>{c.summary}</p>
                    <Results items={c.results} />
                    <ul className="cs-tech">
                      {c.tech.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                    <a className="cs-card__link" href={`/case-studies/${c.slug}`}>
                      <span className="gradient-text">Read the full story</span>
                      <img src="/assets/icons/chevron-purple.svg" alt="" width="11" height="16" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ---------- Quote ---------- */}
      <section className="cs-quote" aria-label="Client testimonial">
        <div className="container">
          <figure>
            <svg className="cs-quote__mark" viewBox="0 0 48 36" aria-hidden="true">
              <path d="M0 36V20C0 8 6 1 18 0v6c-6 1-9 5-9 10h9v20H0Zm27 0V20C27 8 33 1 45 0v6c-6 1-9 5-9 10h9v20H27Z" fill="currentColor" />
            </svg>
            <blockquote>{quote.text}</blockquote>
            <figcaption><strong>{quote.name}</strong><span>{quote.role}</span></figcaption>
          </figure>
        </div>
      </section>

      <Clients />
      <CtaBanner />
    </div>
  )
}
