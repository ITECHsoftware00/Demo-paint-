export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  category: string;
}

export interface PaintType {
  name: string;
  category: "Interior" | "Exterior" | "Specialty" | "Protective" | "Preparation";
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Painting" | "Stucco" | "Travertino" | "Wallpaper" | "Ceiling" | "3D";
  image: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  service: string;
}

export const siteConfig = {
  name: "DEMO Paint",
  headline: "Quality Finishes. Lasting Impressions.",
  subheadline:
    "Painting, stucco, Travertino, screeding and finishing for homes and businesses.",
  tagline: "We paint. You relax. We deliver excellence.",

  // Contact details (verified)
  phones: [
    { display: "0703 752 2322", raw: "07037522322", intl: "2347037522322" },
    { display: "0816 122 0276", raw: "08161220276", intl: "2348161220276" },
    { display: "0708 572 2638", raw: "07085722638", intl: "2347085722638" },
  ],
  whatsappNumber: "2348161220276",
  email: "adebisimutiu021@gmail.com",

  // Clear placeholders to be filled by client if needed:
  address: "[To be provided: City / Physical Workshop Location, Nigeria]",
  rcNumber: "[To be provided: Business Registration Number / CAC]",
  openingHours: "Mon - Sat: 8:00 AM - 6:00 PM",

  // 4 Trust badges below Hero
  trustItems: [
    { title: "Free site inspection", desc: "Thorough in-person surface assessment" },
    { title: "Quality materials", desc: "Long-lasting paints & genuine compounds" },
    { title: "Clean work sites", desc: "Complete daily masking & site protection" },
    { title: "Clear quotes", desc: "Transparent scope with zero hidden costs" },
  ],

  // 8 Specific Services
  services: [
    {
      id: "house-painting",
      title: "House Painting",
      subtitle: "Interior & Exterior",
      description:
        "Comprehensive residential and commercial painting with weather-resistant exterior coats and durable, washable interior emulsions.",
      iconName: "Paintbrush",
      category: "Painting",
    },
    {
      id: "ceiling-work",
      title: "Ceiling Work",
      subtitle: "POP Finishes & Repairs",
      description:
        "Architectural false ceiling plastering, POP cornices, ceiling repainting, and specialized water-stain blocking treatments.",
      iconName: "Layers",
      category: "Ceiling",
    },
    {
      id: "3d-wall-finishes",
      title: "3D Wall Finishes",
      subtitle: "Panels & Sculpted Walls",
      description:
        "Sculpted geometric relief panels and decorative 3D feature walls creating dimensional depth and lighting accents.",
      iconName: "Box",
      category: "3D",
    },
    {
      id: "stucco",
      title: "Stucco",
      subtitle: "Textured Wall Finishes",
      description:
        "Hand-troweled Italian-style stucco and Venetian plaster delivering an opulent, tactile, and natural stone-sheen finish.",
      iconName: "Sparkles",
      category: "Stucco",
    },
    {
      id: "travertino-finish",
      title: "Travertino Finish",
      subtitle: "Authentic Stone Texture",
      description:
        "Travertine stone-look textured finish applied with precision trowels in thin organic layers for high-end accent walls.",
      iconName: "Gem",
      category: "Travertino",
    },
    {
      id: "travertino-screeding",
      title: "Travertino Screeding",
      subtitle: "Flat Surface Calibration",
      description:
        "Substrate leveling and micro-smoothing engineered specifically so Travertino and decorative plasters sit perfectly flat.",
      iconName: "Maximize2",
      category: "Travertino",
    },
    {
      id: "wallpaper-installation",
      title: "Wallpaper Installation",
      subtitle: "Precision Pattern Matching",
      description:
        "Expert hanging of luxury vinyl, fabric, and textured wallpapers with laser-aligned seams and bubbled-free adhesion.",
      iconName: "Scroll",
      category: "Wallpaper",
    },
    {
      id: "screeding-general",
      title: "Screeding & General Contracting",
      subtitle: "Floors & Walls",
      description:
        "Precision floor and wall screeding, moisture-barrier priming, and end-to-end surface contracting for building projects.",
      iconName: "Hammer",
      category: "Painting",
    },
  ] as ServiceItem[],

  // Paint Guide categories and products
  paintCategories: [
    "Interior",
    "Exterior",
    "Specialty",
    "Protective",
    "Preparation",
  ] as const,

  paintTypes: [
    // Interior
    {
      category: "Interior",
      name: "Matt Emulsion",
      description: "Non-reflective velvety finish that conceals wall flaws on living and bedroom walls.",
    },
    {
      category: "Interior",
      name: "Silk Emulsion",
      description: "Smooth mid-sheen paint that reflects subtle light and wipes clean with a damp cloth.",
    },
    {
      category: "Interior",
      name: "Satin / Eggshell Emulsion",
      description: "Low-sheen architectural finish balancing high scrub-resistance and low gloss.",
    },
    {
      category: "Interior",
      name: "Washable Interior Paint",
      description: "Stain-resistant high-polymer formula engineered for high-traffic corridors and family rooms.",
    },
    {
      category: "Interior",
      name: "Anti-Mould Paint",
      description: "Fungicidal active formula preventing black mould in bathrooms, kitchens, and humid spaces.",
    },

    // Exterior
    {
      category: "Exterior",
      name: "Weatherproof Emulsion",
      description: "UV-shielded exterior coating resisting intense tropical sunlight, heavy rain, and fading.",
    },
    {
      category: "Exterior",
      name: "Masonry Paint",
      description: "Heavy-duty exterior shield for brickwork, rendered block, and stone perimeter walls.",
    },
    {
      category: "Exterior",
      name: "Textured Coatings",
      description: "Granular textured formulations providing structural protection and visual masonry depth.",
    },
    {
      category: "Exterior",
      name: "Crack-Bridging Coatings",
      description: "High-elasticity elastomeric coating that expands and contracts across hairline fissures.",
    },

    // Specialty
    {
      category: "Specialty",
      name: "Metallic & Pearl Paints",
      description: "Light-reactive mineral paints creating gold, silver, and iridescent copper focal accents.",
    },
    {
      category: "Specialty",
      name: "Multicolor / Spectrum Finishes",
      description: "Multi-tonal spray and trowel finishes replicating natural granite and composite stone.",
    },
    {
      category: "Specialty",
      name: "Limewash & Chalk Finishes",
      description: "Breathable natural mineral wash creating authentic European patina and cloudy chalk textures.",
    },

    // Protective
    {
      category: "Protective",
      name: "Waterproofing Coats",
      description: "Seamless hydrostatic liquid membranes blocking moisture ingress on parapets and exterior walls.",
    },
    {
      category: "Protective",
      name: "Gloss & Semi-Gloss Enamel",
      description: "Tough solvent-based enamel for wooden trims, doors, metal gates, and architectural handrails.",
    },
    {
      category: "Protective",
      name: "Wood Varnish & Lacquer",
      description: "Clear and tinted protective resin coats highlighting and sealing natural wood grain.",
    },
    {
      category: "Protective",
      name: "Anti-Rust Metal Paint",
      description: "Zinc-rich direct-to-metal paint preventing oxidation and rust on gates, rails, and structural steel.",
    },
    {
      category: "Protective",
      name: "Epoxy Floor Paint",
      description: "Chemical and tyre-resistant resin coating for residential garages, showrooms, and warehouse floors.",
    },

    // Preparation
    {
      category: "Preparation",
      name: "Alkali-Resistant Primers",
      description: "Deep-penetrating sealers preventing efflorescence and lime burn on new plaster and screed.",
    },
    {
      category: "Preparation",
      name: "Binding Sealers",
      description: "High-adhesion clear bonding liquid that consolidates chalky and porous old masonry.",
    },
    {
      category: "Preparation",
      name: "High-Build Undercoat",
      description: "Dense intermediate coat providing solid opacity and uniform substrate holdout.",
    },
    {
      category: "Preparation",
      name: "Ultra-Smooth Wall Putty",
      description: "Fine-grade acrylic screeding paste for filling micro-pinholes before final topcoating.",
    },
  ] as PaintType[],

  // 5 Process Steps
  processSteps: [
    {
      step: "01",
      title: "Site Visit & Inspection",
      description:
        "We visit your property to measure dimensions, scan moisture levels, assess surface condition, and discuss finishes.",
    },
    {
      step: "02",
      title: "Detailed Quotation",
      description:
        "You receive an itemized, transparent proposal detailing materials, coat specifications, labor, and timeline.",
    },
    {
      step: "03",
      title: "Surface Preparation",
      description:
        "We protect floors and furnishings, fill cracks, screed uneven sections, and prime substrates for maximum adhesion.",
    },
    {
      step: "04",
      title: "Precision Application",
      description:
        "Our skilled painters apply required coats and artisan textures according to strict manufacturer drying times.",
    },
    {
      step: "05",
      title: "Inspection & Handover",
      description:
        "A joint walkthrough with you under proper lighting. We ensure full cleanup, touch-ups, and customer satisfaction.",
    },
  ] as ProcessStep[],

  // Gallery items (clean placeholders pointing to existing project photos)
  galleryItems: [
    {
      id: "gal-1",
      title: "Residential Duplex Transformation",
      category: "Painting",
      image: "/assets/images/duplex-finished.jpeg",
      description: "Exterior weather-shield coating and smooth interior satin finish.",
    },
    {
      id: "gal-2",
      title: "Curved POP Ceiling & Lighting",
      category: "Ceiling",
      image: "/assets/images/plaster-shimmer.jpg",
      description: "Multi-tiered false ceiling with recessed LED lighting trough.",
    },
    {
      id: "gal-3",
      title: "Dimensional 3D Accent Wall",
      category: "3D",
      image: "/assets/images/panels-3d-led.jpg",
      description: "Sculpted geometric feature wall with integrated perimeter light.",
    },
    {
      id: "gal-4",
      title: "Hand-Burnished Italian Stucco",
      category: "Stucco",
      image: "/assets/images/marble-stucco.jpg",
      description: "Venetian lime plaster burnished to reflective stone depth.",
    },
    {
      id: "gal-5",
      title: "Travertino Textured Accent",
      category: "Travertino",
      image: "/assets/images/prep-stucco.jpeg",
      description: "Trowel-applied travertine stone texture across dining wall.",
    },
    {
      id: "gal-6",
      title: "Luxury Gilded Feature Wall",
      category: "Wallpaper",
      image: "/assets/images/gold-vein-wall.jpg",
      description: "Marble veining with delicate gold accents for master retreat.",
    },
  ] as GalleryItem[],

  // Why Choose Us
  whyPoints: [
    {
      title: "No Shortcuts on Preparation",
      desc: "We spend 60% of our effort on screeding, scraping, and priming because a finish only lasts as long as the surface underneath.",
    },
    {
      title: "Tested Premium Formulations",
      desc: "We exclusively specify genuine high-grade emulsions, weather shields, and Italian plaster compounds.",
    },
    {
      title: "Clean & Respectful Job Sites",
      desc: "Full masking of furniture, windows, and floors with daily vacuuming. We treat your property like our own.",
    },
    {
      title: "Direct Accountability",
      desc: "You deal directly with dedicated trade professionals who provide ongoing project updates from start to finish.",
    },
  ],

  // Testimonials (Placeholders clearly marked)
  testimonials: [
    {
      id: "test-1",
      name: "[Placeholder: Homeowner Name]",
      location: "Lekki Phase 1, Lagos",
      service: "House Painting & POP Ceilings",
      quote:
        "DEMO Paint transformed our 4-bedroom duplex completely. Their screeding work made walls that were previously cracked look brand new.",
    },
    {
      id: "test-2",
      name: "[Placeholder: Property Developer]",
      location: "Victoria Island, Lagos",
      service: "Travertino & Stucco Finish",
      quote:
        "The Travertino feature wall in the reception area has become the talk of our office. On time, on budget, and immaculate cleanup.",
    },
    {
      id: "test-3",
      name: "[Placeholder: Residential Client]",
      location: "Ikeja GRA, Lagos",
      service: "3D Wall Panels & Interior Paint",
      quote:
        "Extremely reliable team. The quote they provided was clear, no unexpected extras, and the washable paint has stayed spotless.",
    },
  ] as TestimonialItem[],
};

