import Arrow from "./Arrow";

export default function CTABand() {
  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div className="cta-band-content">
          <span className="label-style cta-band-label reveal-item" data-stagger="0">Ready to start?</span>
          <h2 className="cta-band-title reveal-item" data-stagger="1">
            Let's transform <em>your space.</em>
          </h2>
          <p className="cta-band-desc reveal-item" data-stagger="2">
            Whether it's a single room or a full duplex, our team delivers
            showroom-grade finishes on every project.
          </p>
        </div>
        <div className="cta-band-actions reveal-item" data-stagger="3">
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
