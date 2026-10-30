"use client";

export default function OurApproach() {
  const steps = [
    {
      num: "01",
      title: "Spatial Audit & Substrate Diagnostics",
      desc: "Every project begins on site with calibrated moisture meters, laser level diagnostics, and natural light analysis. We identify structural movement joints, damp risks, and existing coating compatibility before drafting the finish specification.",
    },
    {
      num: "02",
      title: "Physical Sample Boards & Lighting Curation",
      desc: "We prepare physical 30x30cm sample boards in your actual rooms. Natural light shifts drastically between morning and late afternoon; evaluating pigments and plaster sheens under your real space's lighting prevents costly surprises.",
    },
    {
      num: "03",
      title: "Dustless Preparation & Master Application",
      desc: "Using HEPA-filtered vacuum sanding systems, crack-bridging fiberglass meshes, and laser-guided screeding, our master finishers apply multi-coat systems to exact millimeter tolerances with immaculate job-site cleanliness.",
    },
    {
      num: "04",
      title: "Raking Light Audit & Handover Dossier",
      desc: "We perform a formal high-powered raking light inspection with the client and architect. Upon completion, we provide a complete Handover Dossier with color codes, batch numbers, labeled touch-up bottles, and surface care instructions.",
    },
  ];

  return (
    <section className="section section-beige" id="approach">
      <div className="container">
        <p className="mono-tag" style={{ marginBottom: "1rem" }}>
          05 / Our Approach
        </p>

        <div className="approach-header">
          <h2>Thoughtful execution requires everyone working from the same page.</h2>
          <p className="p-lead" style={{ color: "var(--neutral--charcoal)", marginTop: "1rem" }}>
            Designing an enduring space is only half the job. The other half is making sure
            every artisan and trade partner is working toward the exact same outcome. We work
            closely with builders, interior designers, and homeowners so every decision on site
            elevates the final finish.
          </p>
        </div>

        <div className="approach-steps-list">
          {steps.map((step) => (
            <div key={step.num} className="approach-step-card">
              <span className="approach-step-num">{step.num}</span>
              <h3 className="approach-step-title">{step.title}</h3>
              <p className="approach-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

