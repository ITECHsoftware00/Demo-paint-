import Arrow from "./Arrow";

export default function FeaturedProject() {
  return (
    <section className="spread-section">
      <div className="container">
        <div className="spread-inner">
          <div className="spread-media wipe-reveal">
            <img
              src="/assets/images/duplex-finished.jpeg"
              alt="Completed luxury duplex by DEMO Paint"
              loading="lazy"
            />
          </div>
          <div className="spread-body">
            <span className="spread-label reveal-item" data-stagger="0">Featured project</span>
            <h2 className="spread-title reveal-item" data-stagger="1">
              Luxury duplex, <em>completed.</em>
            </h2>
            <p className="spread-desc reveal-item" data-stagger="2">
              A full turnkey transformation — from raw screeding and primer
              coats to a double satin topcoat finish. Every surface inspected
              and approved before handover.
            </p>
            <div className="spread-stats reveal-item" data-stagger="3">
              <div>
                <div className="spread-stat-value">12</div>
                <div className="spread-stat-label">Weeks to complete</div>
              </div>
              <div>
                <div className="spread-stat-value">4.9</div>
                <div className="spread-stat-label">Client rating</div>
              </div>
              <div>
                <div className="spread-stat-value">6</div>
                <div className="spread-stat-label">Finishes applied</div>
              </div>
            </div>
            <a href="#gallery" className="btn btn-dark" style={{ marginTop: 28, alignSelf: "flex-start" }}>
              View project
              <Arrow size={11} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
