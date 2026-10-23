import Arrow from "./Arrow";

export default function CTABand() {
  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div className="cta-band-content">
          <span className="label-style cta-band-label">Ready to start?</span>
          <h2 className="cta-band-title">
            Let's transform <em>your space.</em>
          </h2>
          <p className="cta-band-desc">
            Whether it's a single room or a full duplex, our team delivers
            showroom-grade finishes on every project.
          </p>
        </div>
        <div className="cta-band-actions">
          <a href="#contact" className="btn btn-cta-primary">
            Request a quote
            <Arrow size={11} />
          </a>
          <a href="tel:07037522322" className="btn btn-cta-outline">
            Call 0703 752 2322
          </a>
        </div>
      </div>
    </section>
  );
}
