"use client";

import { useState } from "react";
import Arrow from "./Arrow";
import MediaVideo from "./ui/MediaVideo";
import { clips } from "../lib/media";

const FINISHES_DATA = [
  {
    id: "venetian",
    name: "Handcrafted Venetian Plaster",
    tag: "Artisanal Finish",
    subtitle: "Slaked lime, marble dust, and hand-burnished minerals",
    description:
      "Formulated from aged Italian slaked lime and crushed Carrara marble, Venetian plaster is applied in multiple micro-thin layers and burnished by hand. It breathes naturally, resists mould, and yields a soft stone-like luminosity that shifts subtly with morning and evening light.",
    clip: clips.marbleVein,
    specs: [
      { label: "Material Base", value: "Slaked Lime & Micro-Fine Marble Dust" },
      { label: "Sheen Options", value: "Matte Stone, Satin Velvety, Mirror Burnished" },
      { label: "Best Suited For", value: "Entry Foyers, Fireplace Surrounds, Master Suites" },
      { label: "Maintenance", value: "Washable with natural soap, zero VOCs" },
      { label: "Longevity", value: "15+ years; cures harder over time through carbonation" },
    ],
  },
  {
    id: "paintwork",
    name: "Architectural Interior & Exterior Paint",
    tag: "Core Finishing",
    subtitle: "Precision edge lines, mineral pigments & washable weather-shields",
    description:
      "Beyond standard roll-and-brush painting, our architectural painting process begins with machine dustless sanding, high-build acrylic primers, and laser-guided cutting. We specify washable, anti-fungal formulations engineered to withstand coastal humidity and intense UV exposure.",
    clip: clips.interiorPrep,
    specs: [
      { label: "Formulation", value: "Low-VOC Pure Mineral & Elastomeric Polymers" },
      { label: "Surface Prep", value: "Level 5 Drywall Finish & Dustless Sanding" },
      { label: "Sheen Spectrum", value: "Ultra-Flat Chalk, Low-Sheen Eggshell, Semi-Gloss" },
      { label: "Warranty", value: "10-Year Weather & Adhesion Guarantee" },
      { label: "Turnaround", value: "Phased room-by-room or rapid whole-house execution" },
    ],
  },
  {
    id: "ceilings",
    name: "Architectural Ceilings & POP Profiles",
    tag: "Structural Design",
    subtitle: "Recessed light coves, acoustic dampening, and plaster mouldings",
    description:
      "Ceilings are often called the 'fifth wall' in architectural design. We craft seamless Plaster of Paris false ceilings featuring knife-edge perimeter shadow lines, recessed LED lighting troughs, and acoustic mineral wool insulation to refine sound dampening in open-plan spaces.",
    clip: clips.ceilingShimmer,
    specs: [
      { label: "Construction", value: "Light-Gauge Zinc Framework & Fibre-Reinforced Gypsum" },
      { label: "Integrated Lighting", value: "Concealed 45° LED coves & magnetic track channels" },
      { label: "Acoustics", value: "Up to 0.75 NRC sound absorption rating" },
      { label: "Moisture Resistance", value: "Hydrophobic plaster boards for humid zones" },
      { label: "Design Styles", value: "Floating trays, stepped bulkheads, curved reveals" },
    ],
  },
  {
    id: "panels",
    name: "3D Carved & Textured Feature Walls",
    tag: "Signature Dimensionality",
    subtitle: "Sculpted geometric relief with architectural grazing illumination",
    description:
      "Dimensional feature walls designed to create dramatic light-and-shadow play across feature lounges, dining areas, and executive offices. Each modular tile is precision joined, screeded flat at the seams, and coated in monolithic stone or satin finishes.",
    clip: clips.wall3dLed,
    specs: [
      { label: "Core Substrate", value: "High-Density Bamboo Fibre & Cast Mineral Polymer" },
      { label: "Joinery", value: "Seamless continuous joint blending (zero visible seams)" },
      { label: "Finish Compatibility", value: "Metallic lustre, velvety matte, concrete texture" },
      { label: "Fire Rating", value: "Class A / Non-combustible architectural certification" },
      { label: "Customization", value: "Diamond lattice, fluted reeding, organic waves" },
    ],
  },
  {
    id: "screeding",
    name: "Monolithic Screeding & Substrate Prep",
    tag: "Foundational Craft",
    subtitle: "Laser-calibrated leveling, anti-crack membranes, and mirror smoothness",
    description:
      "A flawless topcoat is impossible without an uncompromising substrate. We laser-calibrate existing masonry and drywall to within 1mm per 3 metres, correcting uneven plaster, dampness intrusion, and hairline fissures with epoxy-reinforced screed compounds.",
    clip: clips.crewMarble,
    specs: [
      { label: "Compound", value: "Polymer-Modified Self-Smoothing Cementitious Screed" },
      { label: "Tolerance", value: "Level 5 Architectural Flatness (±1mm / 3m)" },
      { label: "Reinforcement", value: "Alkali-resistant glass fibre mesh interlayer" },
      { label: "Drying Time", value: "Foot traffic in 12 hours, recoat ready in 24 hours" },
      { label: "Application", value: "Floors, walls, outdoor terraces, wet-room substrates" },
    ],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(FINISHES_DATA[0].id);
  const current = FINISHES_DATA.find((f) => f.id === activeTab) || FINISHES_DATA[0];

  return (
    <section className="section section-beige" id="finishes">
      <div className="container">
        <p className="mono-tag" style={{ marginBottom: "1rem" }}>
          03 / Finishes & Materials
        </p>

        <div style={{ maxWidth: "860px", marginBottom: "3rem" }}>
          <h2>Tactile materials specified with architectural intent.</h2>
          <p className="p-lead" style={{ color: "var(--neutral--charcoal)", marginTop: "1rem" }}>
            Every surface material performs differently under light, traffic, and humidity.
            Explore our curated finish specifications below to understand the science, texture,
            and durability of our craft.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="materials-selector-bar">
          {FINISHES_DATA.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`material-tab-btn ${activeTab === item.id ? "active" : ""}`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Detailed Spec Panel */}
        <div className="material-detail-panel">
          <div>
            <span className="mono-tag" style={{ color: "var(--terracota)" }}>
              {current.tag}
            </span>
            <h3 style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              {current.name}
            </h3>
            <p style={{ fontStyle: "italic", color: "var(--ink-secondary)", marginBottom: "1.25rem" }}>
              {current.subtitle}
            </p>
            <p style={{ marginBottom: "2rem", lineHeight: "1.7" }}>
              {current.description}
            </p>

            {/* Architectural Specifications Table */}
            <div style={{ marginBottom: "2rem" }}>
              {current.specs.map((s, i) => (
                <div key={i} className="spec-row">
                  <span className="spec-row-label">{s.label}</span>
                  <span className="spec-row-val">{s.value}</span>
                </div>
              ))}
            </div>

            <a
              href="#enquiry"
              className="btn btn-primary"
              style={{ fontSize: "0.875rem" }}
            >
              Enquire About This Finish
              <Arrow size={14} />
            </a>
          </div>

          {/* Visual Showcase for this finish */}
          <div style={{ width: "100%", height: "420px", borderRadius: "4px", overflow: "hidden", position: "relative" }}>
            <MediaVideo
              clip={current.clip}
              mode="always"
              active={true}
              fit="cover"
            />
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "1rem",
                backgroundColor: "rgba(27, 26, 24, 0.82)",
                backdropFilter: "blur(6px)",
                color: "#fffdf8",
                padding: "0.4rem 0.85rem",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
              }}
            >
              Craft Sample — {current.name}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
