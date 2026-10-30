"use client";

import { useEffect, useRef, useState } from "react";

// True only in the browser, and reactive to the OS setting.
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/**
 * MediaVideo — plays a real work clip as a background/ambient element.
 *
 * mode:
 *   "always"  — plays immediately (hero). One of these on screen at a time.
 *   "visible" — plays only while scrolled into view (cards, featured).
 *   "hover"   — plays on pointer hover, pauses + rewinds on leave (bento).
 *
 * Rules baked in: muted + playsInline + loop, no controls, only one decode
 * at a time is asked of the browser (preload="none" until it actually plays),
 * and under prefers-reduced-motion it never loads video — it shows the poster.
 */
export default function MediaVideo({
  clip,
  mode = "visible",
  fit = "cover",
  blurFill = false,
  priority = false,
  active = true,
  className = "",
  rounded = false,
  children,
}) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [hovering, setHovering] = useState(false);
  const reduced = usePrefersReducedMotion();

  // Observe visibility for "visible" mode (and cheap enough to always run).
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const shouldPlay =
    !reduced &&
    active &&
    (mode === "always"
      ? true
      : mode === "hover"
        ? hovering
        : inView);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (shouldPlay) {
      const p = v.play();
      if (p && p.catch) p.catch(() => {}); // ignore autoplay-policy rejections
    } else {
      v.pause();
      if (mode === "hover") {
        try {
          v.currentTime = 0;
        } catch {
          /* noop */
        }
      }
    }
  }, [shouldPlay, mode]);

  const frameStyle = {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    borderRadius: rounded ? "inherit" : 0,
  };

  const mediaStyle = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: fit,
    objectPosition: "center",
  };

  // Reduced motion (or no-JS): a real poster frame, never a video download.
  if (reduced) {
    return (
      <div
        ref={wrapRef}
        className={className}
        style={{ position: "absolute", inset: 0, ...frameStyle }}
      >
        <img src={clip.poster} alt="" aria-hidden="true" style={mediaStyle} />
        {children}
      </div>
    );
  }

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{ position: "absolute", inset: 0, ...frameStyle }}
      onMouseEnter={() => mode === "hover" && setHovering(true)}
      onMouseLeave={() => mode === "hover" && setHovering(false)}
    >
      {blurFill && clip.orientation === "portrait" && (
        <img
          src={clip.poster}
          alt=""
          aria-hidden="true"
          style={{
            ...mediaStyle,
            filter: "blur(28px) saturate(1.2)",
            transform: "scale(1.15)",
          }}
        />
      )}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        poster={clip.poster}
        preload={priority ? "auto" : "none"}
        aria-hidden="true"
        tabIndex={-1}
        style={mediaStyle}
      >
        <source src={clip.src} type="video/mp4" />
      </video>
      {children}
    </div>
  );
}
