export default function CtaBanner() {
  return (
    <section className="cta" id="hire" aria-labelledby="cta-title">
      <div className="container cta__card">
        <h2 id="cta-title">Hire the best developers and designers around!</h2>
        <a className="btn btn--gradient-pink" href="#contact">Hire Top Developers</a>
        <span className="cta__deco" aria-hidden="true">
          <i /><i /><i /><i /><i /><i />
        </span>
      </div>
    </section>
  )
}
