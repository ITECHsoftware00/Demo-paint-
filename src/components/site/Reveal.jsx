"use client";

import { useEffect, useRef } from "react";

/**
 * Entrance animations, all CSS-driven and reduced-motion aware.
 *
 *   variant="rise"  — fade-and-rise for body copy and cards (default).
 *   variant="mask"  — a title rises out of a clipping band (editorial headings).
 *   variant="clip"  — a media frame wipes in from its top edge.
 *
 * The visible flag is written straight to the node, so an entrance never
 * re-renders the section it wraps. With JavaScript disabled the noscript rule
 * in the layout has already shown the block.
 */
export default function Reveal({
  as: Tag = "div",
  variant = "rise",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => {
      node.dataset.visible = "true";
    };

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.06 }
    );

    observer.observe(node);

    // Safety net: never leave content invisible if the observer cannot fire
    // (printing, full-page capture, or a background tab).
    const fallback = window.setTimeout(show, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  if (variant === "mask") {
    return (
      <Tag
        ref={ref}
        data-visible="false"
        className={`reveal-mask ${className}`}
        style={{ "--delay": `${delay}ms` }}
        {...rest}
      >
        <span className="reveal-mask__inner">{children}</span>
      </Tag>
    );
  }

  const base = variant === "clip" ? "reveal-clip" : "reveal";

  return (
    <Tag
      ref={ref}
      data-visible="false"
      className={`${base} ${className}`}
      style={{ "--delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
