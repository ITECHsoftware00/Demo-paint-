"use client";

import { useEffect, useState } from "react";
import Arrow from "./Arrow";

const heroImages = [
  "/assets/images/duplex-finished.jpeg",
  "/assets/images/pop-ceiling.jpg",
  "/assets/images/exterior-luxury-peach.jpeg",
  "/assets/images/luxury-wallpaper.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-premium" id="home">
      {/* Background image carousel */}
      <div className="hero-bg-wrapper" aria-hidden="true">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`hero-bg-slide ${index === currentImage ? "active" : ""} ${
              index === (currentImage + heroImages.length - 1) % heroImages.length
                ? "prev"
                : ""
            }`}
          >
            <img src={src} alt="" loading={index === 0 ? "eager" : "lazy"} />
          </div>
        ))}
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content container">
        <div className="hero-main">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            Professional Finishing Studio
          </p>

          <h1 className="hero-title">
            Surfaces that
            <br />
            <em>speak quality.</em>
          </h1>
        </div>

        <div className="hero-aside">
          <p className="hero-desc">
            From precision screeding to showroom-grade finishes, we transform
            residential and commercial spaces with craftsmanship that lasts.
          </p>

          <div className="hero-ctas">
            <a href="#contact" className="btn btn-dark hero-btn-primary">
              Start a project
              <Arrow size={14} />
            </a>
            <a href="#gallery" className="hero-btn-secondary">
              View our work
              <Arrow size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Image indicators */}
      <div className="hero-indicators">
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`hero-indicator ${index === currentImage ? "active" : ""}`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
