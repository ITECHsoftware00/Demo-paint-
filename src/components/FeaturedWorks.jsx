"use client";

import { useState } from "react";
import Arrow from "./Arrow";

const PROJECTS = [
  {
    id: 1,
    number: "01",
    title: "Luxury Residential Duplex",
    type: "Full Transformation",
    location: "Residential Estate",
    scope: "Complete Interior & Exterior Painting, Screeding & Weather Shield",
    snippet:
      "Full transformation from rough unlevel masonry to an immaculate satin-smooth architectural duplex, sealed with anti-fungal weather-resistant coatings.",
    media: "/assets/images/duplex-finished.jpeg",
    beforeImage: "/assets/images/duplex-prep.jpeg",
    afterImage: "/assets/images/duplex-finished.jpeg",
    story: {
      clientBrief:
        "The client required a complete overhaul of an expansive duplex, demanding mirror-flat interior walls and an exterior finish engineered to withstand heavy tropical rains and harsh sun.",
      substrateChallenge:
        "Severe wall undulations and settlement hairline cracks required full perimeter mesh reinforcement, 3-coat polymer screeding, and thorough alkali-resistant priming.",
      finishesApplied:
        "Slikcoat high-performance exterior weather-shield with anti-fungal properties, paired with interior ultra-washable low-sheen satin acrylic.",
      tradeCollaboration:
        "Delivered ahead of schedule in coordination with ceiling and electrical installers for a seamless turnkey handover.",
    },
  },
  {
    id: 2,
    number: "02",
    title: "Illuminated Feature Ceiling",
    type: "Ceiling & POP",
    location: "Contemporary Villa",
    scope: "Architectural False Ceiling & Concealed LED Cove Lighting",
    snippet:
      "Modern multi-tiered Plaster of Paris false ceiling with knife-edge shadow reveals and integrated recessed LED cove illumination.",
    media: "/assets/images/plaster-shimmer.jpg",
    beforeImage: "/assets/images/duplex-before.jpeg",
    afterImage: "/assets/images/plaster-shimmer.jpg",
    story: {
      clientBrief:
        "Create an airy, sophisticated living room ceiling that integrates indirect mood lighting and conceals structural beams seamlessly.",
      substrateChallenge:
        "High-span ceiling framing required laser-leveled zinc channels to ensure zero deflection and immaculate 90-degree corner beads.",
      finishesApplied:
        "Custom curved and geometric POP mouldings, sealed with anti-crack primer and coated in ultra-flat acoustic white mineral paint.",
      tradeCollaboration:
        "Coordinated with the electrical team to embed continuous 45-degree LED light troughs with no visible joints or hot spots.",
    },
  },
  {
    id: 3,
    number: "03",
    title: "3D Geometric Wall Panels",
    type: "Feature Wall",
    location: "Executive Penthouse",
    scope: "Modular 3D Relief Panels with Backlit Perimeter Niches",
    snippet:
      "Sculpted geometric relief panels delivering dramatic light-and-shadow play across the main lounge and entrance foyer.",
    media: "/assets/images/panels-3d-led.jpg",
    beforeImage: "/assets/images/duplex-before.jpeg",
    afterImage: "/assets/images/panels-3d-led.jpg",
    story: {
      clientBrief:
        "A statement accent wall to elevate the entertainment lounge with tactile, architectural depth rather than plain flat paint.",
      substrateChallenge:
        "Substrate required laser alignment to ensure all 3D panel tile seams aligned within 0.5mm before continuous joint smoothing.",
      finishesApplied:
        "High-density eco-friendly modular panels, bonded with structural epoxy, seamless joint sealant, and coated in silk-matte finish.",
      tradeCollaboration:
        "Integrated alongside custom floating cabinetry and warm perimeter lighting.",
    },
  },
  {
    id: 4,
    number: "04",
    title: "Italian Marble Stucco",
    type: "Venetian Plaster",
    location: "Private Residence",
    scope: "Hand-Burnished Marble-Vein Stucco Finish",
    snippet:
      "Handcrafted Italian-style stucco with soft grey marble veining, burnished to an opulent stone-like reflective depth.",
    media: "/assets/images/marble-stucco.jpg",
    beforeImage: "/assets/images/prep-stucco.jpeg",
    afterImage: "/assets/images/marble-stucco.jpg",
    story: {
      clientBrief:
        "The homeowner wanted the look and grandeur of natural quarried marble for their formal dining feature wall without the heavy weight of stone slabs.",
      substrateChallenge:
        "Demanded ultra-flat screeding with zero micro-cavities before the first thin skim of plaster could be troweled.",
      finishesApplied:
        "Multi-layer slaked lime stucco worked with artistic veining techniques, burnished to a mirror sheen with natural protective beeswax.",
      tradeCollaboration:
        "Handcrafted on site by our senior finishing artisan over a 5-day meticulous layering cycle.",
    },
  },
  {
    id: 5,
    number: "05",
    title: "Gilded Marble Feature Wall",
    type: "Luxury Accent",
    location: "Master Suite",
    scope: "Hand-Painted Marble Effect with Delicate Gold Veining",
    snippet:
      "Bespoke marble-effect wall enriched with hand-traced gilded veining and sealed beneath a high-gloss protective topcoat.",
    media: "/assets/images/gold-vein-wall.jpg",
    beforeImage: "/assets/images/duplex-before.jpeg",
    afterImage: "/assets/images/gold-vein-wall.jpg",
    story: {
      clientBrief:
        "An opulent, boutique hotel-inspired focal wall behind the primary bedhead with warm gold accents.",
      substrateChallenge:
        "Ensuring complete surface smoothness and moisture barrier to prevent any future micro-flaking of delicate metallic leafing.",
      finishesApplied:
        "Hand-applied Italian mineral plaster with hand-drawn organic gold leaf veining and non-yellowing crystal clear sealer.",
      tradeCollaboration:
        "Color-matched directly to the room's brass fixtures and warm lighting temperature.",
    },
  },
  {
    id: 6,
    number: "06",
    title: "Substrate Screeding & Prep",
    type: "General Contractor",
    location: "Multi-Unit Property",
    scope: "Precision Laser Screeding & Base Preparation",
    snippet:
      "Comprehensive surface re-leveling and crack repair, providing the essential foundation for flawless, long-lasting painting.",
    media: "/assets/images/screeding-before.jpeg",
    beforeImage: "/assets/images/screeding-before.jpeg",
    afterImage: "/assets/images/duplex-finished.jpeg",
    story: {
      clientBrief:
        "Fix uneven, cracked, and poorly plastered walls left behind by rough masonry contractors across a large private development.",
      substrateChallenge:
        "Correcting severe wall dips of up to 15mm while maintaining solid structural bonding across all concrete and brick substrates.",
      finishesApplied:
        "High-strength polymer-modified screeding compounds, fiberglass reinforcing mesh, and high-build penetrating primer.",
      tradeCollaboration:
        "Established perfect Level 5 baseline ready for both standard painting and specialist decorative coatings.",
    },
  },
];

export default function FeaturedWorks() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderMove = (e) => {
    const box = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - box.left;
    const pct = Math.max(0, Math.min(100, (x / box.width) * 100));
    setSliderPos(pct);
  };

  return (
    <section className="section section-beige" id="works">
      <div className="container">
        <p className="mono-tag" style={{ marginBottom: "1rem" }}>
          03 / Featured Works
        </p>

        <div className="featured-works-header">
          <div>
            <h2>Selected projects & transformations.</h2>
            <p className="p-lead" style={{ color: "var(--neutral--charcoal)", marginTop: "0.5rem" }}>
              Explore real projects completed by DEMO Paint — from screeding to master finishes.
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="works-grid">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="project-card"
              onClick={() => setSelectedProject(proj)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelectedProject(proj)}
            >
              <div className="project-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={proj.media}
                  alt={proj.title}
                  loading="lazy"
                />
              </div>

              <div className="project-body">
                <div className="project-meta-row">
                  <span className="project-number">{proj.number}</span>
                  <span className="project-type-tag">{proj.type}</span>
                </div>

                <h3 className="project-title">{proj.title}</h3>
                <p className="project-snippet">{proj.snippet}</p>

                <div className="project-footer-link">
                  <span>Read Project Story & Specs</span>
                  <Arrow size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal / Project Story Drawer */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="drawer-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              ✕
            </button>

            <span className="mono-tag" style={{ color: "var(--terracota)" }}>
              Project {selectedProject.number} / {selectedProject.type}
            </span>

            <h2 style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              {selectedProject.title}
            </h2>

            <p style={{ color: "var(--ink-secondary)", fontFamily: "var(--font-mono)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
              {selectedProject.location} — {selectedProject.scope}
            </p>

            {/* Before / After Interactive Slider */}
            <div style={{ marginBottom: "2rem" }}>
              <p className="mono-tag" style={{ marginBottom: "0.5rem" }}>
                Interactive Before / After Surface Comparison
              </p>
              <div
                className="ba-compare-box"
                onMouseMove={(e) => isDragging && handleSliderMove(e)}
                onMouseDown={(e) => {
                  setIsDragging(true);
                  handleSliderMove(e);
                }}
                onMouseUp={() => setIsDragging(false)}
                onTouchMove={(e) => {
                  const touch = e.touches[0];
                  const box = e.currentTarget.getBoundingClientRect();
                  const x = touch.clientX - box.left;
                  const pct = Math.max(0, Math.min(100, (x / box.width) * 100));
                  setSliderPos(pct);
                }}
              >
                {/* After image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedProject.afterImage}
                  alt="Finished Architectural Surface"
                  className="ba-compare-img"
                />

                {/* Before overlay */}
                <div
                  className="ba-compare-overlay"
                  style={{ width: `${sliderPos}%` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedProject.beforeImage}
                    alt="Substrate Before Preparation"
                    className="ba-compare-img"
                    style={{ width: "100%", maxWidth: "none" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      backgroundColor: "rgba(0,0,0,0.75)",
                      color: "#fff",
                      padding: "2px 8px",
                      fontSize: "11px",
                      fontFamily: "var(--font-mono)",
                      borderRadius: "2px",
                    }}
                  >
                    BEFORE
                  </div>
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    backgroundColor: "rgba(0,0,0,0.75)",
                    color: "#fff",
                    padding: "2px 8px",
                    fontSize: "11px",
                    fontFamily: "var(--font-mono)",
                    borderRadius: "2px",
                  }}
                >
                  AFTER FINISH
                </div>

                <div
                  className="ba-compare-handle"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="ba-compare-knob">◀ ▶</div>
                </div>
              </div>
              <p style={{ fontSize: "0.8125rem", color: "var(--ink-secondary)", textAlign: "center" }}>
                Drag slider horizontally to inspect surface transformation
              </p>
            </div>

            {/* Deep Read Section */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0.4rem" }}>
                  The Client Brief
                </h4>
                <p style={{ fontSize: "0.9375rem", lineHeight: "1.65" }}>
                  {selectedProject.story.clientBrief}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0.4rem" }}>
                  Substrate & Technical Challenge
                </h4>
                <p style={{ fontSize: "0.9375rem", lineHeight: "1.65" }}>
                  {selectedProject.story.substrateChallenge}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0.4rem" }}>
                  Finishes & Formulations Applied
                </h4>
                <p style={{ fontSize: "0.9375rem", lineHeight: "1.65" }}>
                  {selectedProject.story.finishesApplied}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0.4rem" }}>
                  Coordination & Delivery
                </h4>
                <p style={{ fontSize: "0.9375rem", lineHeight: "1.65" }}>
                  {selectedProject.story.tradeCollaboration}
                </p>
              </div>
            </div>

            <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid var(--border--medium)" }}>
              <a
                href="#enquiry"
                onClick={() => setSelectedProject(null)}
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                Request a Quote for Similar Work
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
