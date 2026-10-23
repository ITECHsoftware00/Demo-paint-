"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Arrow from "./Arrow";

const projects = [
  {
    id: 1,
    tag: "Residential",
    title: "Luxury Residential Duplex",
    description:
      "Complete interior and exterior transformation with precision wall screeding, anti-fungal weather-shield primer and a double satin topcoat.",
    image: "/assets/images/duplex-finished.jpeg",
    beforeImage: "/assets/images/duplex-prep.jpeg",
  },
  {
    id: 2,
    tag: "Ceiling & POP",
    title: "Architectural POP Ceiling",
    description:
      "Multi-tiered gypsum false ceiling with integrated concealed LED cove troughs and laser-level cornice alignment.",
    image: "/assets/images/pop-ceiling.jpg",
  },
  {
    id: 3,
    tag: "Wall finishes",
    title: "Geometric Feature Wall",
    description:
      "Sculpted acoustic wall panels delivering dramatic dimensional shadow play and a boutique lounge aesthetic.",
    image: "/assets/images/wall-panels-3d.jpg",
  },
  {
    id: 4,
    tag: "Wall finishes",
    title: "Italian Venetian Stucco",
    description:
      "Hand-burnished venetian plaster with delicate metallic undertones, polished to a mirror-smooth marble texture.",
    image: "/assets/images/stucco-texture.jpg",
  },
  {
    id: 5,
    tag: "Residential",
    title: "Exterior Estate Facade",
    description:
      "Multi-storey exterior coating in high-solids elastomeric paint for complete waterproofing and UV protection.",
    image: "/assets/images/exterior-luxury-peach.jpeg",
  },
  {
    id: 6,
    tag: "Commercial",
    title: "Designer Metallic Wallpaper",
    description:
      "Textured vinyl wallpaper with foil geometric accents, hung with zero visible seams and a moisture-resistant adhesive.",
    image: "/assets/images/luxury-wallpaper.jpg",
  },
];

const PRESETS = [0, 25, 50, 75, 100];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const scrollRef = useRef(null);
  const baContainerRef = useRef(null);
  const active = activeIndex === null ? null : projects[activeIndex];

  // Before/After slider logic
  const updateBAPosition = useCallback((clientX) => {
    if (!baContainerRef.current) return;
    const rect = baContainerRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min((offsetX / rect.width) * 100, 100));
    setSliderPos(percentage);
  }, []);

  const handleBAMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleBATouchStart = () => {
    setIsDragging(true);
  };

  const handleBAKeyDown = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setSliderPos((pos) => Math.max(0, pos - 5));
    }
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setSliderPos((pos) => Math.min(100, pos + 5));
    }
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      updateBAPosition(e.clientX);
    };

    const handleTouchMove = (e) => {
      if (!isDragging || !e.touches[0]) return;
      updateBAPosition(e.touches[0].clientX);
    };

    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, updateBAPosition]);

  // Lightbox escape key
  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  // Scroll progress
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollByAmount = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="our-work-section" id="gallery">
      <div className="container">
        {/* Header */}
        <div className="our-work-header">
          <div className="our-work-header-left">
            <span className="our-work-eyebrow">Selected Work</span>
            <h2 className="our-work-title">
              Projects that
              <br />
              define craft.
            </h2>
          </div>
          <div className="our-work-header-right">
            <p className="our-work-desc">
              A curated selection of residential and commercial projects
              showcasing precision finishing, surface preparation, and
              architectural detailing.
            </p>
          </div>
        </div>

        {/* Before/After Featured Showcase */}
        <div className="ba-showcase">
          <div className="ba-showcase-header">
            <span className="our-work-eyebrow">Featured Transformation</span>
            <h3 className="ba-showcase-title">
              Luxury Residential Duplex
            </h3>
            <p className="ba-showcase-desc">
              Precision screeding, primer coat and double satin finish.
              Drag the handle to see the transformation.
            </p>
          </div>

          <div className="ba-showcase-slider">
            <div
              className="ba-slider"
              ref={baContainerRef}
              onMouseDown={handleBAMouseDown}
              onTouchStart={handleBATouchStart}
            >
              <img
                src="/assets/images/duplex-prep.jpeg"
                alt="Duplex before preparation"
                className="ba-image"
                draggable="false"
              />

              <img
                src="/assets/images/duplex-finished.jpeg"
                alt="Duplex after finishing"
                className="ba-image ba-image-after"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                draggable="false"
              />

              <div className="ba-badge ba-badge-before">Before</div>
              <div className="ba-badge ba-badge-after">After</div>

              <div
                className="ba-handle"
                style={{ left: `${sliderPos}%` }}
                role="slider"
                tabIndex={0}
                aria-label="Before and after comparison"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(sliderPos)}
                onKeyDown={handleBAKeyDown}
              >
                <button
                  type="button"
                  className="ba-handle-btn"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                    <path d="M6.5 1 1.5 6l5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                    <path d="m1.5 1 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <span className="ba-hint">Drag to compare</span>
            </div>

            <div className="ba-presets" role="group" aria-label="Comparison presets">
              {PRESETS.map((perc) => (
                <button
                  key={perc}
                  type="button"
                  className={`ba-preset ${
                    Math.round(sliderPos) === perc ? "active" : ""
                  }`}
                  onClick={() => setSliderPos(perc)}
                  aria-pressed={Math.round(sliderPos) === perc}
                >
                  {perc}%
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div className="our-work-scroll-header">
          <span className="our-work-eyebrow">More Projects</span>
          <div className="our-work-nav">
            <button
              type="button"
              className="our-work-nav-btn"
              onClick={() => scrollByAmount(-1)}
              aria-label="Scroll left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="our-work-nav-btn"
              onClick={() => scrollByAmount(1)}
              aria-label="Scroll right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div className="our-work-progress-track">
          <div
            className="our-work-progress-fill"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>

      <div className="our-work-scroll-wrapper">
        <div className="our-work-scroll" ref={scrollRef}>
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className="our-work-card"
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${project.title}`}
            >
              <div className="our-work-card-media">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                <div className="our-work-card-overlay">
                  <span className="our-work-card-overlay-text">View Project</span>
                  <Arrow size={16} />
                </div>
              </div>
              <div className="our-work-card-info">
                <div className="our-work-card-index">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="our-work-card-content">
                  <span className="our-work-card-tag">{project.tag}</span>
                  <h3 className="our-work-card-title">{project.title}</h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActiveIndex(null)}
        >
          <figure
            className="lightbox-figure"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setActiveIndex(null)}
              aria-label="Close preview"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                aria-hidden="true"
              >
                <path d="M3 3l10 10M13 3L3 13" strokeLinecap="round" />
              </svg>
            </button>

            <img
              className="lightbox-media"
              src={active.image}
              alt={active.title}
            />

            <figcaption className="lightbox-caption">
              <div>
                <span className="gallery-tag">{active.tag}</span>
                <h3>{active.title}</h3>
                <p>{active.description}</p>
              </div>
              <span className="lightbox-count">
                {String(projects.findIndex((p) => p.id === active.id) + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
