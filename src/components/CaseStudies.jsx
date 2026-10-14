import SectionHeading from './SectionHeading.jsx'

const cases = [
  { img: 'case-1', bg: 'var(--bg-case-1)' },
  { img: 'case-2', bg: 'var(--bg-case-2)' },
  { img: 'case-3', bg: 'var(--bg-case-3)' },
]

export default function CaseStudies() {
  return (
    <section className="cases" id="case-studies" aria-labelledby="cases-title">
      <span className="dot dot--d" aria-hidden="true" />
      <span className="dot dot--e" aria-hidden="true" />
      <img className="cases__deco cases__deco--left" src="/assets/deco-arrow-left.svg" alt="" aria-hidden="true" />
      <img className="cases__deco cases__deco--right" src="/assets/deco-arrow-right.svg" alt="" aria-hidden="true" />
      <div className="container container--cases">
        <SectionHeading id="cases-title" lines={['Our recent', 'Case studies']} center />
        <ul className="cases__list">
          {cases.map((c, i) => (
            <li key={c.img} className="case-card" style={{ '--card-bg': c.bg }}>
              <img className="case-card__img" src={`/assets/case-studies/${c.img}.webp`} alt={`Website design project ${i + 1}`} width="601" height="416" loading="lazy" />
              <div className="case-card__body">
                <h3>Website Design for SCFC Canada</h3>
                <p>
                  Born out of a vision, a single-minded objective that puts service before anything else, Swift
                  Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and
                  logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20
                  years of rich and varied experience in the shipping and freight forwarding industry.
                </p>
                <a className="case-card__link gradient-link" href="/case-studies/scfc-canada">
                  <span className="gradient-text">Read more</span>
                  <img src="/assets/icons/chevron-purple.svg" alt="" width="11" height="16" />
                </a>
              </div>
            </li>
          ))}
        </ul>
        <a className="cases__more" href="/case-studies">
          <span className="gradient-text">Read more case studies</span>
          <img src="/assets/icons/chevron-purple.svg" alt="" width="14" height="22" />
        </a>
      </div>
    </section>
  )
}
