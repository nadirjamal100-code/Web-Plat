import HeroVector from './HeroVector.jsx'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__text">
          <div className="hero__copy">
            <h1 id="hero-title">
              <span className="hero__light">Great</span>{' '}
              <span className="hero__accent">Product</span>{' '}
              <span className="hero__light">is</span>
              <br />
              built by great{' '}
              <span className="hero__accent hero__accent--alt">teams</span>
            </h1>
            <p className="hero__lead">
              We help build and manage a team of world-class developers to bring your vision to life
            </p>
          </div>
          <a className="btn btn--hero" href="#contact">Let’s get started!</a>
        </div>
        <div className="hero__media">
          <HeroVector />
          <img
            src="/assets/hero-web-development.webp"
            alt="Illustration of a software team building web and mobile products"
            width="614"
            height="546"
            fetchPriority="high"
          />
        </div>
      </div>
      <span className="dot dot--a" aria-hidden="true" />
    </section>
  )
}
