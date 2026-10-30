"use client";

export default function StudioPhilosophy() {
  return (
    <section className="section section-brown" id="studio">
      <div className="container">
        <p className="mono-tag" style={{ marginBottom: "1.25rem" }}>
          02 / Our Studio
        </p>

        <div className="studio-editorial-grid">
          <div>
            <h2 className="studio-statement">
              Every considered home begins with a considered approach to design.
            </h2>
          </div>

          <div className="studio-narrative">
            <p>
              The difference between an exceptional design and an exceptional home is everything
              that happens between concept and completion. DEMO Paint exists to close that gap,
              guiding every stage personally so the home that is envisioned is the home that gets built.
            </p>
            <p>
              DEMO Paint is a specialist architectural painting and finishing studio, delivering
              master-grade interior and exterior transformations, modern false ceilings, and bespoke
              accent walls. Partnered with industry leaders <strong>Armstrong</strong> and <strong>Slikcoat</strong>,
              every project starts with how your family actually lives. From surface preparation to the final
              topcoat, that thinking shapes homes that make daily routines effortless, adapt as your family evolves,
              and hold lasting value.
            </p>
          </div>
        </div>

        {/* 3 Architectural Pillars */}
        <div className="studio-pillars">
          <div className="studio-pillar-card">
            <span className="studio-pillar-num">01 / PREPARATION</span>
            <h4>Precision Screeding</h4>
            <p>
              A flawless finish begins before paint ever touches the wall. We eliminate surface
              imperfections, bridge cracks, and laser-screed substrates for true Level 5 flatness.
            </p>
          </div>

          <div className="studio-pillar-card">
            <span className="studio-pillar-num">02 / CRAFTSMANSHIP</span>
            <h4>Artisanal Finishes</h4>
            <p>
              From Italian-style marble stucco and Venetian plaster to custom POP recessed LED
              ceilings and geometric 3D wall panels that add tactile architectural depth.
            </p>
          </div>

          <div className="studio-pillar-card">
            <span className="studio-pillar-num">03 / PARTNERSHIP</span>
            <h4>Certified Quality</h4>
            <p>
              Backed by authorized partnerships with Armstrong and Slikcoat, delivering ultra-durable,
              weather-shielded, and anti-fungal coatings that protect your investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
