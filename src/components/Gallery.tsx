"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "../lib/siteConfig";
import BeforeAfter from "./BeforeAfter";

const categories = [
  "All",
  "Painting",
  "Stucco",
  "Travertino",
  "Wallpaper",
  "Ceiling",
  "3D",
] as const;

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filteredItems = siteConfig.galleryItems.filter(
    (item) => selectedFilter === "All" || item.category === selectedFilter
  );

  return (
    <section className="py-16 sm:py-20 bg-[#F7F4EE] border-t border-[#0B2559]/10" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-[#0B2559] text-white px-4 py-1 rounded-full text-xs font-heading font-extrabold uppercase tracking-widest mb-3">
            PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#0B2559] tracking-tight">
            Our Project <span className="font-script text-[#0E6B47] text-4xl sm:text-5xl lg:text-6xl font-normal">Gallery</span>
          </h2>
          <p className="text-base sm:text-lg text-[#0B2559]/75 mt-3">
            Real finishes and substrate restorations executed on site.
          </p>
        </div>

        {/* Before / After Slider Component */}
        <div className="mb-14">
          <div className="text-center mb-3">
            <span className="text-xs font-heading font-extrabold text-[#0E6B47] uppercase tracking-wider">
              Featured Substrate Screeding & Finish
            </span>
            <h3 className="text-xl font-heading font-extrabold text-[#0B2559]">
              Interactive Surface Inspection
            </h3>
          </div>
          <BeforeAfter
            beforeImage="/assets/images/duplex-prep.jpeg"
            afterImage="/assets/images/duplex-finished.jpeg"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full font-heading font-bold text-xs sm:text-sm transition-all ${
                selectedFilter === cat
                  ? "bg-[#0B2559] text-white shadow-md"
                  : "bg-white text-[#0B2559] hover:bg-[#0E6B47] hover:text-white border border-[#0B2559]/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#0B2559]/10 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EBCB9E]/20">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#0B2559] text-white px-3 py-1 rounded-full text-xs font-heading font-bold uppercase">
                  {item.category}
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-heading font-bold text-lg text-[#0B2559] mb-1">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#0B2559]/75">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

