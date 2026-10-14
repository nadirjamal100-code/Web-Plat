import SectionHeading from './SectionHeading.jsx'

// [icon, title, tile background, "UX first" accent colour]
const items = [
  ['rocket', 'UX Driven Engineering', '#27262b', '#3b3b40'],
  ['code', 'Developing Shared Understanding', 'linear-gradient(226deg, #67e0f7 0%, #4d96ec 100%)', '#5ecaf1'],
  ['heart-rate', 'Proven Experience and Expertise', 'linear-gradient(226deg, #ff97b3 0%, #ff3a9d 100%)', '#ff6ba3'],
  ['shield', 'Security & Intellectual Property (IP)', 'linear-gradient(226deg, #67e9f1 0%, #24e795 100%)', '#3ee3c0'],
  ['success', 'Code Reviews', 'linear-gradient(226deg, #ffe468 0%, #f99a6c 100%)', '#f7c84f'],
  ['padlock', 'Quality Assurance & Testing', 'linear-gradient(226deg, #f76680 0%, #5a0a80 100%)', '#f76680'],
]

export default function Approach() {
  return (
    <section className="approach" aria-labelledby="approach-title">
      <div className="container container--wide">
        <SectionHeading id="approach-title" lines={['Our design and', 'development approach']} center />
        <ul className="approach__grid">
          {items.map(([icon, title, tile, accent]) => (
            <li key={title} className="approach-card">
              <span className="approach-card__tile" style={{ '--tile': tile }}>
                <img src={`/assets/icons/${icon}.webp`} alt="" width="34" height="34" loading="lazy" />
              </span>
              <div>
                <h3>{title}</h3>
                <p>
                  Unlike other companies, we are a <span style={{ color: accent }}>UX first</span> development
                  company. Projects are driven by designers and they make sure design and experiences translate to
                  code.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
