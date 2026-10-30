// =====================================================================
// Homepage editorial content.
// One place for every sentence and picture on the page, so the markup
// stays layout-only. Contact details are pulled from siteConfig.
// =====================================================================

import { clips } from "./media";

export const nav = [
  { id: "studio", label: "Studio" },
  { id: "work", label: "Work" },
  { id: "approach", label: "Approach" },
  { id: "finishes", label: "Finishes" },
  { id: "words", label: "Clients" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  title: ["Finishes that hold up", "to real life."],
  intro:
    "Painting, stucco, Travertino and screeding for homes and workspaces across Osogbo.",
  cta: { label: "Request a quote", href: "#contact" },
  image: "/assets/images/exterior-luxury-peach.jpeg",
  imageAlt:
    "Completed two-storey house in Osogbo finished in a warm sand and brown exterior coating",
  footerNote: "Painting · Stucco · Travertino · Screeding",
  areas: "Osogbo and surrounding towns",
};

export const studio = {
  label: "The Studio",
  place: "Osogbo, Nigeria",
  statement: "A finish only lasts as long as the surface beneath it.",
  body: [
    "DEMO Paint is a small finishing studio working on homes, duplexes and commercial interiors across Osogbo. We take the slow route: screeding, filling and priming until the wall is flat enough to hold a sheen without showing where the trowel went.",
    "That is why our work still looks new after years of harmattan dust, humidity and traffic. The part nobody photographs is the part that decides how the finish ages.",
  ],
  image: "/assets/images/screeding-before.jpeg",
  imageAlt:
    "Unfinished duplex in grey screed, with the crew working from a ladder on the upper floor",
  imageCaption: "Screed, primer and scaffold, before a single finish coat.",
};

export const band = {
  image: "/assets/images/crew-marble-effect.jpg",
  imageAlt:
    "Crew member in a hi-vis vest troweling a pink marble-effect finish up a full-height wall",
  paragraphs: [
    "We are painters, plasterers and screeders on one crew. The person who inspects your walls is the person who signs off the final coat, so nothing is lost between trades and nothing gets blamed on the last man.",
    "It means realistic schedules, a written scope before we start, and a site swept every evening. It also means we occasionally turn work down — a coat rushed over damp plaster will fail, and we would be the ones called back to fix it.",
  ],
  wordmark: "DEMO",
};

export const footage = {
  label: "Close up",
  aside: "Travertino feature wall · Osogbo",
  claim: "Travertino, dragged through the wall in long passes.",
  body: "One pass across a finished Travertino wall. The stone-look plaster is built in thin layers, then dragged while it is still soft so the veining splits wherever the trowel turns.",
  meta: "0:07 · muted · looping",
  caption:
    "Raking light down a Travertino wall, filmed on the day it was finished.",
  video: "/assets/videos/project-showcase.mp4",
  poster: "/assets/images/gilded-wall.jpg",
  videoAlt:
    "Close pass over a Travertino plaster wall, pale gold veining running through a cream ground",
};

export const work = {
  label: "Featured Works",
  aside: "Selected projects",
  items: [
    {
      title: "Duplex Recoat",
      category: "Exterior & interior",
      image: "/assets/images/duplex-finished.jpeg",
      alt: "White duplex exterior with stone-clad entrance columns and glass balcony railing",
      detail:
        "Full exterior recoat, interior emulsion and enamel joinery across a four-bedroom duplex.",
    },
    {
      title: "Travertino Feature Wall",
      category: "Travertino",
      image: "/assets/images/gilded-wall.jpg",
      alt: "Travertino plaster wall with pale gold veining catching raking light across a cream ground",
      detail:
        "Travertino built in thin organic layers, dragged into warm veining for a feature wall.",
    },
    {
      title: "Stucco Living Room",
      category: "Stucco",
      image: "/assets/images/feature-wall-marble.jpg",
      clip: clips.featureGold,
      alt: "Stucco wall with brown and gold veining beside a dark timber column",
      detail:
        "Hand-troweled stucco burnished to a stone sheen in a double-height living room.",
    },
    {
      title: "Sculpted Wall Panels",
      category: "3D finishes",
      image: "/assets/images/panels-3d-led.jpg",
      clip: clips.wall3dLed,
      alt: "Carved relief wall panels lit by a concealed LED cove at ceiling level",
      detail:
        "Carved relief panels and a concealed LED cove finished in the same matte white.",
    },
    {
      title: "Travertino Wall",
      category: "Travertino",
      image: "/assets/images/plaster-shimmer.jpg",
      clip: clips.ceilingShimmer,
      alt: "Full-height Travertino wall with troweled pale cream and silver veining under a set-back ceiling",
      detail:
        "Troweled Travertino in pale cream and silver, worked in long drags that catch the light as you move.",
    },
    {
      title: "Perimeter Wall",
      category: "Exterior",
      image: "/assets/images/perimeter-fence-finish.jpeg",
      alt: "Sand-coloured boundary wall and gate pillars on an Osogbo street",
      detail:
        "Boundary wall, gate pillars and stone cladding brought back to one clean line.",
    },
  ],
};

export const partners = {
  label: "Materials we trust",
  aside: "Official partners",
  note:
    "We specify the same two brands on every job, bought trade, so a wall we quote is a wall those systems were made for.",
  items: [
    {
      name: "Armstrong Paints",
      note: "Interior emulsion, enamel and exterior weather-shield",
      tag: "Certified partner",
      logo: "/assets/images/armstrong-logo.png",
      logoAlt: "Armstrong Paints logo",
    },
    {
      name: "Slikcoat",
      note: "Textured coatings, stucco and screeding compounds",
      tag: "Registered applicator",
    },
  ],
};

export const approach = {
  label: "Our Approach",
  statement: "Preparation decides how a finish ages.",
  body: "Before a coat goes on we read the walls: moisture, cracks, hollow plaster, old emulsion that will not grip. Each stage is checked under work lighting, because a fault you can see at four in the afternoon is a fault you will see every day after.",
  image: "/assets/images/interior-paint-prep.jpg",
  imageAlt: "Interior wall being prepared and primed before painting",
  imageCaption: "Preparation and primer coat, Osogbo apartment.",
  steps: [
    {
      title: "Site inspection",
      detail: "Moisture readings, measurements and a finish schedule agreed on site.",
    },
    {
      title: "Written quotation",
      detail: "Itemised by room and coat, with no provisional sums buried in the total.",
    },
    {
      title: "Preparation",
      detail: "Masking, crack repair, screeding and primer before a single topcoat.",
    },
    {
      title: "Application",
      detail: "Coats applied to the specified film thickness and drying time.",
    },
    {
      title: "Handover",
      detail: "A joint walkthrough under light, touch-ups, and a clean site.",
    },
  ],
  link: { label: "Talk through your project", href: "#contact" },
};

export const finishes = {
  label: "What we finish",
  intro:
    "Eight disciplines, one crew. Choose a single room or hand over the whole building.",
  items: [
    {
      name: "House painting",
      category: "Interior · Exterior",
      detail: "Washable interior emulsion and weather-shielded exterior coats.",
    },
    {
      name: "Stucco",
      category: "Textured walls",
      detail: "Italian-style lime plaster troweled to a tactile stone sheen.",
    },
    {
      name: "Travertino",
      category: "Stone finish",
      detail: "Travertine texture built in thin organic layers for accent walls.",
    },
    {
      name: "Travertino screeding",
      category: "Substrate",
      detail: "Flat, calibrated walls so stone finishes read clean under light.",
    },
    {
      name: "Ceiling work",
      category: "POP · Plaster",
      detail: "Plaster ceilings, cornices, cove lighting and water-stain blocking.",
    },
    {
      name: "3D wall finishes",
      category: "Relief",
      detail: "Sculpted panels and carved relief with concealed lighting.",
    },
    {
      name: "Wallpaper",
      category: "Installation",
      detail: "Luxury vinyl, fabric and textured papers with aligned seams.",
    },
    {
      name: "Screeding & contracting",
      category: "Floors · Walls",
      detail: "Floor and wall screeding, moisture barriers and full surface contracts.",
    },
  ],
};

export const words = {
  label: "Client Words",
  items: [
    {
      quote:
        "They transformed our four-bedroom duplex completely. Walls that had been cracking for years were screeded back to flat, and two years on there is still not a hairline showing.",
      name: "Homeowner",
      place: "Osogbo",
      project: "House painting & ceilings",
      image: "/assets/images/duplex-prep.jpeg",
      imageAlt: "Duplex under preparation with masked openings before painting",
    },
    {
      quote:
        "The Travertino wall in our reception has become the thing visitors photograph. Quoted clearly, finished on the date they gave us, and they left the building cleaner than they found it.",
      name: "Property developer",
      place: "Osogbo",
      project: "Travertino & stucco",
      image: "/assets/images/marble-stucco.jpg",
      imageAlt: "Travertine-textured feature wall finished in a pale stone tone",
    },
    {
      quote:
        "Reliable from the first visit. The quotation held, the crew arrived when they said they would, and the washable paint has stayed spotless with three children in the house.",
      name: "Homeowner",
      place: "Osogbo",
      project: "Interior paint & 3D panels",
      image: "/assets/images/panels-3d-led.jpg",
      imageAlt:
        "Carved relief wall panels finished in matte white with a concealed LED cove",
    },
  ],
};

export const contact = {
  label: "Start a project",
  title: "Tell us about your project.",
  intro:
    "Send the essentials and we will come out to measure, read the walls and quote in writing — usually within two working days.",
  formNote: "Opens WhatsApp with your details filled in.",
};
