import SectionHeading from '../components/SectionHeading.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { TILES, getService, services } from '../data/services.js'
import { details, engagementModels, industries } from '../data/serviceDetails.js'

// Icons and tile colours for the three "what you get" cards
const FEATURE_ICONS = ['success', 'rocket', 'shield']
const FEATURE_TILES = [TILES.yellow, TILES.blue, TILES.teal]
const OFFER_TILES = [TILES.blue, TILES.pink, TILES.teal, TILES.yellow, TILES.purple, TILES.dark]

const Check = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="currentColor" opacity=".14" />
    <path d="m5.800 10.300 2.800 2.800 5.600-5.800" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ServicePage({ slug }) {
  const service = getService(slug)
  if (!service) return null
  const more = details[slug]

  // Three other services to suggest, starting with the one after this one
  const index = services.findIndex((s) => s.slug === slug)
  const others = [1, 2, 3].map((n) => services[(index + n) % services.length])

  const words = service.headline[1].split(' ')
  const lastWord = words.pop()

  return (
    <div className="service-page">
      {/* ---------- Hero (shares the About page hero layout) ---------- */}
      <section className="ap-hero" aria-labelledby="service-title">
        <span className="ap-hero__glow" aria-hidden="true" />
        <div className="container">
          <nav className="ap-crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <a href="#services">Services</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{service.title}</span>
          </nav>

          <div className="ap-hero__grid">
            <div className="ap-hero__text">
              <span className="section-heading__line" aria-hidden="true" />
              <h1 id="service-title">
                <span className="ap-light">{service.headline[0]}</span>
                <br />
                <span className="ap-bold">
                  {words.join(' ')} <span className="gradient-text">{lastWord}</span>
                </span>
              </h1>
              <p className="ap-hero__lead">{service.lead}</p>
              <div className="ap-hero__actions">
                <a className="btn btn--hero" href="#contact">Get a free quote</a>
                <a className="link-arrow" href="/case-studies">
                  See related work
                  <img src="/assets/icons/arrow-right-line.svg" alt="" width="24" height="24" />
                </a>
              </div>
            </div>

            <div className="ap-hero__media">
              <div className="sp-art" aria-hidden="true" style={{ '--tile': service.tile }}>
                <span className="sp-art__glow" />
                <span className="sp-art__ring sp-art__ring--1" />
                <span className="sp-art__ring sp-art__ring--2" />
                <span className="sp-art__core">
                  <img src={`/assets/icons/${service.icon}.webp`} alt="" width="96" height="96" />
                </span>
                {service.tech.slice(0, 3).map((t, i) => (
                  <span key={t} className={`sp-chip sp-chip--${i + 1}`}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Overview + key figures ---------- */}
      <section className="sp-overview" aria-labelledby="sp-overview-title">
        <div className="container sp-overview__grid">
          <div className="sp-overview__text">
            <SectionHeading id="sp-overview-title" lines={['About this service', service.title]} />
            {more.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="sp-overview__stats">
            {more.stats.map((s) => (
              <li key={s.label} className="sp-stat">
                <strong className="gradient-text">{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- What we offer ---------- */}
      <section className="sp-offers" aria-labelledby="sp-offers-title">
        <div className="container container--wide">
          <SectionHeading id="sp-offers-title" lines={['What we offer', `within ${service.title}`]} center />
          <ul className="sp-offers__grid">
            {more.offerings.map((o, i) => (
              <li key={o.title} className="sp-offer">
                <span className="sp-offer__num" style={{ '--tile': OFFER_TILES[i % OFFER_TILES.length] }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{o.title}</h3>
                  <p>{o.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- What you get ---------- */}
      <section className="ap-values" aria-labelledby="sp-features-title">
        <div className="container container--wide">
          <SectionHeading id="sp-features-title" lines={['What you get', 'from our team']} center />
          <ul className="ap-values__grid">
            {service.features.map((f, i) => (
              <li key={f.title} className="ap-value">
                <span className="ap-value__tile" style={{ '--tile': FEATURE_TILES[i] }}>
                  <img src={`/assets/icons/${FEATURE_ICONS[i]}.webp`} alt="" width="34" height="34" loading="lazy" />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- How we work ---------- */}
      <section className="sp-steps" aria-labelledby="sp-steps-title">
        <div className="container">
          <SectionHeading id="sp-steps-title" lines={['How we work', 'step by step']} center />
          <ol className="sp-steps__grid">
            {service.steps.map((s, i) => (
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
      <section className="sp-models" aria-labelledby="sp-models-title">
        <div className="container container--wide">
          <SectionHeading id="sp-models-title" lines={['Ways to work with us', 'Pick what suits you']} center />
          <div className="sp-models__grid">
            {engagementModels.map((m) => (
              <article key={m.title} className={`sp-model ${m.tag === 'Most popular' ? 'is-featured' : ''}`}>
                <span className="sp-model__tag">{m.tag}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
                <ul>
                  {m.points.map((p) => (
                    <li key={p}><Check />{p}</li>
                  ))}
                </ul>
                <a className="btn btn--hero" href="#contact">Talk to us</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Industries ---------- */}
      <section className="sp-industries" aria-labelledby="sp-industries-title">
        <div className="container">
          <SectionHeading id="sp-industries-title" lines={['Industries', 'we have worked in']} center />
          <ul className="sp-industries__list">
            {industries.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Technologies ---------- */}
      <section className="sp-tech" aria-labelledby="sp-tech-title">
        <div className="container">
          <SectionHeading id="sp-tech-title" lines={['Technologies', 'we work with']} center />
          <ul className="sp-tech__list">
            {service.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="sp-faq" aria-labelledby="sp-faq-title">
        <div className="container">
          <SectionHeading id="sp-faq-title" lines={['Frequently asked', 'questions']} center />
          <div className="sp-faq__list">
            {more.faqs.map((f, i) => (
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

      {/* ---------- More services ---------- */}
      <section className="sp-more" aria-labelledby="sp-more-title">
        <div className="container container--wide">
          <SectionHeading id="sp-more-title" lines={['Explore more', 'of our services']} center />
          <div className="sp-more__grid">
            {others.map((o) => (
              <a key={o.slug} className="sp-more__card" href={`/services/${o.slug}`}>
                <span className="ap-value__tile" style={{ '--tile': o.tile }}>
                  <img src={`/assets/icons/${o.icon}.webp`} alt="" width="34" height="34" loading="lazy" />
                </span>
                <h3>{o.title}</h3>
                <p>{o.short}</p>
                <span className="sp-more__link">
                  Learn more
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
