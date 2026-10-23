"use client";

import * as React from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: number; // duration in seconds
  className?: string;
}

export default function Marquee({
  children,
  pauseOnHover = true,
  direction = "left",
  speed = 30,
  className = "",
  style,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        ...style,
      }}
      {...props}
    >
      <div
        className="flex w-max shrink-0 items-center gap-12 py-4"
        style={{
          animation: `marqueeScroll ${speed}s linear infinite ${
            direction === "right" ? "reverse" : "normal"
          }`,
        }}
      >
        <div
          className="flex shrink-0 items-center gap-12"
          style={{ animationPlayState: pauseOnHover ? "inherit" : undefined }}
        >
          {children}
        </div>
        <div
          className="flex shrink-0 items-center gap-12"
          aria-hidden="true"
          style={{ animationPlayState: pauseOnHover ? "inherit" : undefined }}
        >
          {children}
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        div:hover > div {
          ${pauseOnHover ? "animation-play-state: paused;" : ""}
        }
      `}</style>
    </div>
  );
}
