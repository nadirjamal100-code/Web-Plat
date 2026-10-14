import SectionHeading from '../components/SectionHeading.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { caseStudies, categories } from '../data/caseStudies.js'
import { caseDetails } from '../data/caseDetails.js'

const labelOf = (id) => categories.find((c) => c.id === id)?.label ?? id
const HIGHLIGHT_ICONS = ['success', 'rocket', 'shield']

function Cover({ study }) {
  if (study.img) {
    return (
      <img
        className="cs-cover cs-cover--img"
        src={`/assets/case-studies/${study.img}.webp`}
        alt={`${study.client} project preview`}
        width="601"
        height="416"
        fetchPriority="high"
      />
    )
  }
  return (
    <div className="cs-cover cs-cover--art" style={{ '--tile': study.tile }} role="img" aria-label={`${study.client} project illustration`}>
      <span className="cs-cover__ring" aria-hidden="true" />
      <span className="cs-cover__core" aria-hidden="true">
        <img src={`/assets/icons/${study.icon}.webp`} alt="" width="64" height="64" />
      </span>
      {study.tech.map((t, i) => (
        <span key={t} className={`cs-cover__chip cs-cover__chip--${i + 1}`} aria-hidden="true">{t}</span>
      ))}
    </div>
  )
}

export default function CaseStudyPage({ slug }) {
  const index = caseStudies.findIndex((c) => c.slug === slug)
  const study = caseStudies[index]
  const detail = caseDetails[slug]
  if (!study || !detail) return null

  const prev = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length]
  const next = caseStudies[(index + 1) % caseStudies.length]
  const related = caseStudies.filter((c) => c.slug !== slug).slice(0, 3)

  return (
    <div className="csd-page">
      {/* ---------- Hero ---------- */}
      <section className="ap-hero csd-hero" aria-labelledby="csd-title">
        <span className="ap-hero__glow" aria-hidden="true" />
        <div className="container">
          <nav className="ap-crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/case-studies">Case studies</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{study.client}</span>
          </nav>
          <div className="ap-hero__grid">
            <div className="ap-hero__text">
              <span className="cs-tag">{labelOf(study.category)} · {study.industry}</span>
              <h1 id="csd-title" className="csd-title">{study.title}</h1>
              <p className="ap-hero__lead">{study.summary}</p>
              <div className="ap-hero__actions">
                <a className="btn btn--hero" href="#contact">Start a similar project</a>
                <a className="link-arrow" href="/case-studies">
                  All case studies
                  <img src="/assets/icons/arrow-right-line.svg" alt="" width="24" height="24" />
                </a>
              </div>
            </div>
            <div className="ap-hero__media csd-hero__media">
              <Cover study={study} />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Project facts ---------- */}
      <section className="csd-facts" aria-label="Project details">
        <dl className="container csd-facts__grid">
          {Object.entries(detail.facts).map(([k, v]) => (
            <div key={k} className="csd-fact">
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ---------- Overview + challenge ---------- */}
      <section className="csd-story" aria-labelledby="csd-overview-title">
        <div className="container csd-story__grid">
          <div className="csd-story__block">
            <SectionHeading id="csd-overview-title" lines={['The project', 'at a glance']} />
            {detail.intro.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="csd-story__block csd-story__block--challenge">
            <span className="cs-tag">The challenge</span>
            {detail.challenge.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* ---------- Approach ---------- */}
      <section className="sp-steps" aria-labelledby="csd-approach-title">
        <div className="container">
          <SectionHeading id="csd-approach-title" lines={['Our approach', 'step by step']} center />
          <ol className="sp-steps__grid">
            {detail.approach.map((s, i) => (
              <li key={s.title} className="sp-step">
                <span className="sp-step__num gradient-text">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Solution ---------- */}
      <section className="ap-values" aria-labelledby="csd-solution-title">
        <div className="container container--wide">
          <SectionHeading id="csd-solution-title" lines={['What we', 'delivered']} center />
          <ul className="ap-values__grid">
            {detail.highlights.map((h, i) => (
              <li key={h.title} className="ap-value">
                <span className="ap-value__tile" style={{ '--tile': study.tile }}>
                  <img src={`/assets/icons/${HIGHLIGHT_ICONS[i]}.webp`} alt="" width="34" height="34" loading="lazy" />
                </span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </li>
            ))}
          </ul>
          <ul className="cs-tech csd-tech">
            {study.tech.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </section>

      {/* ---------- Results ---------- */}
      <section className="csd-results" aria-labelledby="csd-results-title">
        <div className="container">
          <SectionHeading id="csd-results-title" lines={['The', 'results']} center />
          <ul className="csd-results__grid">
            {study.results.map((r) => (
              <li key={r.label} className="sp-stat csd-result">
                <strong className="gradient-text">{r.value}</strong>
                <span>{r.label}</span>
              </li>
            ))}
          </ul>
          <p className="csd-results__text">{detail.outcome}</p>
        </div>
      </section>

      {/* ---------- Quote ---------- */}
      <section className="cs-quote" aria-label="Client testimonial">
        <div className="container">
          <figure>
            <svg className="cs-quote__mark" viewBox="0 0 48 36" aria-hidden="true">
              <path d="M0 36V20C0 8 6 1 18 0v6c-6 1-9 5-9 10h9v20H0Zm27 0V20C27 8 33 1 45 0v6c-6 1-9 5-9 10h9v20H27Z" fill="currentColor" />
            </svg>
            <blockquote>{detail.quote.text}</blockquote>
            <figcaption><strong>{detail.quote.name}</strong><span>{detail.quote.role}</span></figcaption>
          </figure>
        </div>
      </section>

      {/* ---------- Previous / next ---------- */}
      <nav className="csd-pager" aria-label="More case studies">
        <div className="container csd-pager__grid">
          <a className="csd-pager__link" href={`/case-studies/${prev.slug}`}>
            <span>← Previous</span>
            <strong>{prev.client}</strong>
          </a>
          <a className="csd-pager__link csd-pager__link--next" href={`/case-studies/${next.slug}`}>
            <span>Next →</span>
            <strong>{next.client}</strong>
          </a>
        </div>
      </nav>

      {/* ---------- Related ---------- */}
      <section className="sp-more" aria-labelledby="csd-more-title">
        <div className="container container--wide">
          <SectionHeading id="csd-more-title" lines={['More', 'case studies']} center />
          <div className="sp-more__grid">
            {related.map((c) => (
              <a key={c.slug} className="sp-more__card" href={`/case-studies/${c.slug}`}>
                <span className="ap-value__tile" style={{ '--tile': c.tile }}>
                  <img src={`/assets/icons/${c.icon}.webp`} alt="" width="34" height="34" loading="lazy" />
                </span>
                <h3>{c.client}</h3>
                <p>{c.title}</p>
                <span className="sp-more__link">
                  Read the story
                  <img src="/assets/icons/arrow-right-line.svg" alt="" width="20" height="20" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
