import Arrow from "./Arrow";

export default function FeaturedProject() {
  return (
    <section className="spread-section">
      <div className="container">
        <div className="spread-inner reveal">
          <div className="spread-media">
            <img
              src="/assets/images/duplex-finished.jpeg"
              alt="Completed luxury duplex by DEMO Paint"
              loading="lazy"
            />
          </div>
          <div className="spread-body">
            <span className="spread-label">Featured project</span>
            <h2 className="spread-title">
              Luxury duplex, <em>completed.</em>
            </h2>
            <p className="spread-desc">
              A full turnkey transformation — from raw screeding and primer
              coats to a double satin topcoat finish. Every surface inspected
              and approved before handover.
            </p>
            <div className="spread-stats">
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
