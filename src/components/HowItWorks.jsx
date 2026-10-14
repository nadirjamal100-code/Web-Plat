import SectionHeading from './SectionHeading.jsx'

const steps = [
  ['#1', 'Assemble the right team', "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do."],
  ['#2', 'Sprint planning', 'Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.'],
  ['#3', 'Tech architecture', 'We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently'],
  ['#4', 'Standups & weekly demos', 'Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.'],
  ['#5', 'Code reviews', 'Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells'],
  ['#6', 'Iterative delivery', 'We divide the implementation process into several checkpoints rather than a single deadline.'],
]

export default function HowItWorks() {
  return (
    <section className="how" id="how-it-works" aria-labelledby="how-title">
      <div className="container">
        <SectionHeading id="how-title" lines={['How development', 'through Alcaline works']} center />
        <ol className="how__steps">
          {steps.map(([n, t, d], i) => (
            <li key={n} className={`step ${i % 2 ? 'is-low' : 'is-high'}`}>
              <div className="step__card">
                <h3>
                  <span className="gradient-text">{n}</span> {t}
                </h3>
                <p>{d}</p>
              </div>
            </li>
          ))}
        </ol>
        <a className="link-arrow how__more" href="/how-it-works">
          See the full process
          <img src="/assets/icons/arrow-right-line.svg" alt="" width="24" height="24" />
        </a>
        <img className="how__trophy" src="/assets/icons/trophy.webp" alt="" width="42" height="42" loading="lazy" />
      </div>
    </section>
  )
}
