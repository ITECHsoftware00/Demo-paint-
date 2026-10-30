// =====================================================================
// DEMO Paint — real work media manifest
// Single source of truth for the cinematic showreel. Every clip here is
// genuine on-site footage; posters are real frames pulled from the same
// clips so nothing is AI-generated. `orientation` drives how MediaVideo
// fills its frame (portrait clips get a blurred fill behind, landscape
// clips cover cleanly).
// =====================================================================

export const clips = {
  showcase: {
    id: "showcase",
    src: "/assets/videos/project-showcase.mp4",
    poster: "/assets/images/duplex-prep.jpeg",
    orientation: "landscape",
    caption: "Full project walkthrough — from raw screeding to the completed duplex",
  },
  wall3dLed: {
    id: "wall3dLed",
    src: "/assets/videos/reel-wall-3d-led.mp4",
    poster: "/assets/images/panels-3d-led.jpg",
    orientation: "portrait",
    caption: "Hand-carved 3D relief panels with concealed LED cove lighting",
  },
  ceilingShimmer: {
    id: "ceilingShimmer",
    src: "/assets/videos/reel-ceiling-shimmer.mp4",
    poster: "/assets/images/plaster-shimmer.jpg",
    orientation: "portrait",
    caption: "Shimmer Venetian plaster rising into a recessed tray ceiling",
  },
  marbleVein: {
    id: "marbleVein",
    src: "/assets/videos/reel-marble-vein.mp4",
    poster: "/assets/images/marble-stucco.jpg",
    orientation: "portrait",
    caption: "Marble-vein Venetian stucco, burnished to a stone-like depth",
  },
  marbleCloseup: {
    id: "marbleCloseup",
    src: "/assets/videos/reel-marble-closeup.mp4",
    poster: "/assets/images/marble-stucco.jpg",
    orientation: "portrait",
    caption: "Close detail of the polished marble-effect topcoat",
  },
  featureGold: {
    id: "featureGold",
    src: "/assets/videos/reel-feature-gold.mp4",
    poster: "/assets/images/feature-wall-marble.jpg",
    orientation: "portrait",
    caption: "Full-height gold-and-brown marble feature wall",
  },
  goldVein: {
    id: "goldVein",
    src: "/assets/videos/reel-gold-vein.mp4",
    poster: "/assets/images/gold-vein-wall.jpg",
    orientation: "portrait",
    caption: "Hand-traced gilded veining over a matte plaster ground",
  },
  interiorPrep: {
    id: "interiorPrep",
    src: "/assets/videos/reel-interior-prep.mp4",
    poster: "/assets/images/interior-paint-prep.jpg",
    orientation: "portrait",
    caption: "Interior surface preparation and first coat",
  },
  crewApplying: {
    id: "crewApplying",
    src: "/assets/videos/reel-crew-applying.mp4",
    poster: "/assets/images/crew-finishing.jpg",
    orientation: "portrait",
    caption: "Our crew plastering a feature wall on site",
  },
  crewMarble: {
    id: "crewMarble",
    src: "/assets/videos/reel-crew-marble.mp4",
    poster: "/assets/images/crew-marble-effect.jpg",
    orientation: "portrait",
    caption: "Marble-effect base being hand-worked into veining",
  },
};

// Ordered hero reel — landscape clip leads (crispest full-screen), then the
// two most dramatic interior finishes.
export const heroReel = [clips.showcase, clips.featureGold, clips.wall3dLed];

export function getClip(id) {
  return clips[id] ?? null;
}
