"use client";

import React from "react";

// House with paintbrush logo mark in a green circle
export function LogoMark({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DEMO Paint Logo"
    >
      {/* Green circular base */}
      <circle cx="50" cy="50" r="48" fill="#0E6B47" />

      {/* House outline */}
      <path
        d="M26 50L50 28L74 50V74H26V50Z"
        fill="#F7F4EE"
        stroke="#0B2559"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* House door */}
      <rect x="44" y="58" width="12" height="16" fill="#0B2559" />

      {/* Paintbrush dipping from roofline */}
      <path
        d="M62 26L74 38L66 46L54 34L62 26Z"
        fill="#EBCB9E"
        stroke="#0B2559"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Brush ferrule and handle */}
      <path
        d="M74 38L84 28C86 26 86 22 84 20C82 18 78 18 76 20L66 30"
        stroke="#0B2559"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Wet paint drip from brush */}
      <path
        d="M54 34C52 40 48 46 48 48C48 50 50 52 52 52C54 52 56 50 56 48C56 44 60 40 60 40"
        fill="#0B2559"
      />
    </svg>
  );
}

// Navy dry-brush splash in corner of hero
export function BrushSplash({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 450 320"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M450 0C380 15 320 40 280 85C240 130 210 180 150 195C100 208 40 180 10 220C-15 255 12 290 60 305C120 325 210 300 280 270C340 245 390 200 420 140C440 100 450 50 450 0Z"
        fill="#0B2559"
        opacity="0.08"
      />
      <path
        d="M450 20C400 45 350 80 320 130C290 180 260 215 200 230C160 240 110 220 90 250C75 272 90 295 130 305C180 318 250 295 310 265C370 235 420 170 450 90V20Z"
        fill="#0E6B47"
        opacity="0.05"
      />
      <circle cx="210" cy="90" r="6" fill="#0B2559" opacity="0.12" />
      <circle cx="160" cy="140" r="4.5" fill="#0B2559" opacity="0.1" />
      <circle cx="290" cy="210" r="5" fill="#0B2559" opacity="0.15" />
      <circle cx="80" cy="210" r="3.5" fill="#0E6B47" opacity="0.12" />
    </svg>
  );
}

// Short brush underline beneath hero headline
export function BrushUnderline({ className = "w-48 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 20"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M3 14C45 6 120 4 237 8C195 13 140 17 65 18C30 18.5 12 17 3 14Z"
        fill="#0E6B47"
      />
      <path
        d="M20 16C70 11 150 9 220 12"
        stroke="#EBCB9E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 3D-looking paintbrush graphic overlapping circle frame
export function Brush3D({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Drop shadow */}
      <ellipse cx="60" cy="105" rx="35" ry="8" fill="#0B2559" opacity="0.25" />

      {/* Brush Handle - Wooden tone with gradient */}
      <path
        d="M60 8C55 8 50 12 50 20L53 50H67L70 20C70 12 65 8 60 8Z"
        fill="#EBCB9E"
        stroke="#0B2559"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Handle contour highlight */}
      <path d="M57 14L59 45" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

      {/* Ferrule (Metal Band) */}
      <rect
        x="48"
        y="50"
        width="24"
        height="18"
        rx="2"
        fill="#CBD5E1"
        stroke="#0B2559"
        strokeWidth="3"
      />
      <line x1="48" y1="59" x2="72" y2="59" stroke="#94A3B8" strokeWidth="2" />

      {/* Bristles (Navy with green paint tip) */}
      <path
        d="M48 68H72L75 92C75 95 72 98 68 98H52C48 98 45 95 45 92L48 68Z"
        fill="#0B2559"
        stroke="#0B2559"
        strokeWidth="3"
      />

      {/* Wet paint on tip (Emerald Green) */}
      <path
        d="M45 88L48 95C50 99 54 100 58 100H62C66 100 70 99 72 95L75 88C72 91 68 93 64 91C60 89 57 91 53 92C49 93 47 90 45 88Z"
        fill="#0E6B47"
      />
      {/* Drip droplet */}
      <circle cx="60" cy="108" r="3.5" fill="#0E6B47" />
    </svg>
  );
}

