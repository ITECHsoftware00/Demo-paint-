"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import SectionHead from "./SectionHead";

const PRESETS = [0, 25, 50, 75, 100];

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min((offsetX / rect.width) * 100, 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleKeyDown = (e) => {
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
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    };

    const handleTouchMove = (e) => {
      if (!isDragging || !e.touches[0]) return;
      updatePosition(e.touches[0].clientX);
    };

    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <section className="before-after-section" id="transformation">
      <div className="container">
        <SectionHead
          index="02"
          eyebrow="Visual proof"
          title={
            <>
              Before &amp; after, <em>measured in care.</em>
            </>
          }
          desc="Drag the handle to inspect the transformation from raw preparation to a showroom-grade duplex finish."
          note="Drag the handle — or use the presets"
        />

        <div className="ba-frame reveal">
          <div
            className="ba-slider"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
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

            <div className="ba-badge ba-badge-before">Before — prep</div>
            <div className="ba-badge ba-badge-after">After — finished</div>

            <div
              className="ba-handle"
              style={{ left: `${sliderPos}%` }}
              role="slider"
              tabIndex={0}
              aria-label="Before and after comparison"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(sliderPos)}
              onKeyDown={handleKeyDown}
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

          <div className="ba-meta">
            <div>
              <h3 className="ba-meta-title">Luxury residential duplex</h3>
              <p className="ba-meta-sub">
                Precision screeding, primer coat and double satin finish.
              </p>
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
      </div>
    </section>
  );
}
