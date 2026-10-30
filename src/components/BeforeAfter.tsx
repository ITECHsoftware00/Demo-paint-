"use client";

import { useState } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  beforeLabel = "Before Preparation",
  afterLabel = "Finished Surface",
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div
        className="relative aspect-video sm:aspect-[16/10] rounded-2xl overflow-hidden border-4 border-[#0B2559] shadow-2xl select-none cursor-ew-resize"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Full background) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt="After Finish"
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover pointer-events-none"
          />
          <div className="absolute top-4 right-4 bg-[#0E6B47] text-white px-3 py-1 rounded-full text-xs font-heading font-extrabold uppercase shadow-md">
            {afterLabel}
          </div>
        </div>

        {/* Before Image (Clipped overlay) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-[700px] sm:min-w-[900px]">
            <Image
              src={beforeImage}
              alt="Before Finish"
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover pointer-events-none"
            />
          </div>
          <div className="absolute top-4 left-4 bg-[#0B2559] text-white px-3 py-1 rounded-full text-xs font-heading font-extrabold uppercase shadow-md z-10">
            {beforeLabel}
          </div>
        </div>

        {/* Slider Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#0B2559] border-2 border-[#0B2559] shadow-lg flex items-center justify-center font-bold text-xs">
            ◀▶
          </div>
        </div>
      </div>

      {/* Preset Percentage Buttons */}
      <div className="flex items-center justify-between mt-3 text-xs font-heading font-semibold text-[#0B2559]/75 px-1">
        <span>Drag slider to inspect substrate transformation</span>
        <div className="flex gap-2">
          {[25, 50, 75].map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setSliderPosition(p)}
              className={`px-2.5 py-1 rounded-md border text-[11px] ${
                sliderPosition === p
                  ? "bg-[#0B2559] text-white border-[#0B2559]"
                  : "bg-white text-[#0B2559] border-[#0B2559]/20 hover:border-[#0B2559]"
              }`}
            >
              {p}%
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

