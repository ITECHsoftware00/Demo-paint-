import Arrow from "./Arrow";

const servicesData = [
  {
    id: "painting",
    title: "House Painting",
    badge: "Interior & exterior",
    image: "/assets/images/exterior-luxury-peach.jpeg",
    description:
      "Comprehensive interior & exterior painting with ultra-durable, weather-resistant paints engineered for lasting beauty.",
    features: [
      "Digital colour matching & consultation",
      "Surface sanding, priming & sealing",
      "Washable, anti-fungal exterior coats",
    ],
    span: "wide",
  },
  {
    id: "ceiling",
    title: "Ceiling & POP",
    badge: "Ceilings",
    image: "/assets/images/pop-ceiling.jpg",
    description:
      "Modern architectural false ceilings, plaster of Paris mouldings, and custom recessed LED illumination profiles.",
    features: [
      "Geometric & curvilinear POP designs",
      "Integrated LED cove light troughs",
      "Moisture-proof ceiling plastering",
    ],
    span: "tall",
  },
  {
    id: "3d-walls",
    title: "3D Wall Panels",
    badge: "Feature walls",
    image: "/assets/images/wall-panels-3d.jpg",
    description:
      "Sculpted geometric wall panels that transform plain interior walls into bold, modern architectural focal points.",
    features: [
      "Eco-friendly bamboo fibre panels",
      "Seamless joint sealing & spray finish",
      "Custom diamond & wave motifs",
    ],
    span: "normal",
  },
  {
    id: "stucco",
    title: "Stucco & Plaster",
    badge: "Textured finishes",
    image: "/assets/images/stucco-texture.jpg",
    description:
      "Handcrafted Italian-style stucco finishes and venetian plastering delivering a deep, opulent marble-like sheen.",
    features: [
      "Venetian marble & metallic stucco",
      "Durable, breathable surface coat",
      "Scratch-resistant velvet textures",
    ],
    span: "normal",
  },
  {
    id: "wallpaper",
    title: "Wallpaper & Accent Walls",
    badge: "Wallcoverings",
    image: "/assets/images/luxury-wallpaper.jpg",
    description:
      "Premium designer wallpaper installations for residential lounges, corporate boardrooms, and luxury master suites.",
    features: [
      "Embossed textures & foil accents",
      "Precision laser-level alignment",
      "Zero-bubble, stain-resistant adhesive",
    ],
    span: "tall",
  },
  {
    id: "screeding",
    title: "Screeding",
    badge: "Surface preparation",
    image: "/assets/images/screeding-before.jpeg",
    description:
      "Heavy-duty precision screeding and leveling for floors and walls before paint, tiles, or decorative overlays.",
    features: [
      "Laser-straight wall & floor leveling",
      "High-tensile bonding compound",
      "Rapid-cure formula for swift handover",
    ],
    span: "wide",
  },
];

export default function Services({ onSelectService }) {
  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Section header */}
        <div className="svc-header reveal">
          <div className="svc-header-main">
            <span className="svc-eyebrow label-style">02 — Services</span>
            <h2 className="svc-title">
              Six disciplines, <em>one standard.</em>
            </h2>
          </div>
          <div className="svc-header-aside">
            <p className="svc-desc">
              From surface prep to final coat, every trade is handled by
              specialists who treat your home like their own.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="svc-bento reveal">
          {servicesData.map((service, index) => (
            <article
              key={service.id}
              className={`svc-card svc-card--${service.span}`}
            >
              <div className="svc-card-bg">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />
              </div>
              <div className="svc-card-overlay" />
              <div className="svc-card-content">
                <div className="svc-card-top">
                  <span className="svc-card-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="svc-card-badge">{service.badge}</span>
                </div>
                <h3 className="svc-card-title">{service.title}</h3>
                <p className="svc-card-desc">{service.description}</p>
                <ul className="svc-card-features">
                  {service.features.map((feat) => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="svc-card-cta"
                  onClick={() =>
                    onSelectService && onSelectService(service.title)
                  }
                >
                  <span>Request this service</span>
                  <Arrow size={11} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
