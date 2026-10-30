"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import Reveal from "./Reveal";
import { footage } from "../../lib/editorial";

const noop = () => () => {};

/**
 * The label reads the element's own paused flag rather than what we last asked
 * for: autoplay can start before hydration, and a stall or a blocked autoplay
 * should never leave the control claiming the opposite of the picture.
 */
export default function SiteFootage() {
  const videoRef = useRef(null);

  const subscribe = useCallback((onChange) => {
    const node = videoRef.current;
    if (!node) return noop();
    node.addEventListener("play", onChange);
    node.addEventListener("pause", onChange);
    node.addEventListener("ended", onChange);
    return () => {
      node.removeEventListener("play", onChange);
      node.removeEventListener("pause", onChange);
      node.removeEventListener("ended", onChange);
    };
  }, []);

  const playing = useSyncExternalStore(
    subscribe,
    () => !!videoRef.current && !videoRef.current.paused,
    () => false
  );

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) node.pause();
  }, []);

  const toggle = () => {
    const node = videoRef.current;
    if (!node) return;
    if (node.paused) node.play();
    else node.pause();
  };

  return (
    <section className="pt-20 md:pt-28">
      <div className="px-5 sm:px-8 lg:px-12">
        <Reveal className="flex items-baseline justify-between gap-6 border-b border-line pb-4">
          <h2 className="label">{footage.label}</h2>
          <p className="meta">{footage.aside}</p>
        </Reveal>
      </div>

      <Reveal
        delay={80}
        className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 px-5 sm:px-8 md:mt-10 md:grid-cols-2 md:items-center lg:grid-cols-12 lg:gap-x-10 lg:px-12"
      >
        <div className="lg:col-span-4">
          <p className="text-[24px] leading-[1.28] tracking-[-0.015em]">
            {footage.claim}
          </p>
          <p className="mt-5 max-w-[42ch] text-[16px] leading-[1.6] text-espresso/75">
            {footage.body}
          </p>
          <div className="mt-8 flex items-center gap-6 text-[13px] text-muted">
            <button
              type="button"
              onClick={toggle}
              className="text-[16px] text-espresso underline decoration-espresso/30 underline-offset-4 transition-colors hover:decoration-espresso"
            >
              {playing ? "Pause" : "Play"}
            </button>
            <span>{footage.meta}</span>
          </div>
        </div>

        <figure className="order-first md:order-none lg:col-span-5 lg:col-start-8">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#241d17]">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={footage.poster}
              aria-label={footage.videoAlt}
            >
              <source src={footage.video} type="video/mp4" />
            </video>
          </div>
          <figcaption className="mt-3 max-w-[46ch] text-[13px] leading-[1.5] text-muted">
            {footage.caption}
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
