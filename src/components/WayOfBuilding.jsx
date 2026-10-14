import SectionHeading from './SectionHeading.jsx'

const rows = [
  { img: 'way-1', badge: 'ceo-1', flip: false },
  { img: 'way-2', badge: 'ceo-2', flip: true },
  { img: 'way-3', badge: 'ceo-3', flip: false },
]

export default function WayOfBuilding() {
  return (
    <section className="way" aria-labelledby="way-title">
      <span className="dot dot--warm dot--f" aria-hidden="true" />
      <span className="dot dot--g" aria-hidden="true" />
      <span className="dot dot--j" aria-hidden="true" />
      <span className="dot dot--k" aria-hidden="true" />
      <span className="dot dot--warm dot--h" aria-hidden="true" />
      <span className="dot dot--warm dot--i" aria-hidden="true" />
      <div className="container container--wide">
        <SectionHeading id="way-title" lines={['Way of building', 'Great Software']} center />
        <div className="way__rows">
          {rows.map((r) => (
            <article key={r.img} className={`way-row ${r.flip ? 'is-flip' : ''}`}>
              <div className="way-row__text">
                <h3>Build the right team to scale</h3>
                <p>
                  Finding the right talent is not easy. We help you find the talent that suits your needs, follows your
                  processes, and sticks with you long term (not the case with freelancers
                </p>
                <p>Our <span className="accent-text">delivery model</span> helps you cut costs and deliver within budget.</p>
                <blockquote>
                  “Simform is quick to identify larger problem with the Software so we decided to expand our scope to
                  build new modules”
                </blockquote>
                <div className="badge">
                  <img src={`/assets/people/${r.badge}.webp`} alt="" width="41" height="41" loading="lazy" />
                  <div>
                    <strong>Jeewa markram</strong>
                    <span>CEO</span>
                  </div>
                </div>
              </div>
              <img className="way-row__img" src={`/assets/way/${r.img}.webp`} alt="Engineers working together at a desk" width="575" height="473" loading="lazy" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
