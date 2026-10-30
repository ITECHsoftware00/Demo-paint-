"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { siteConfig } from "../lib/siteConfig";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = siteConfig.testimonials;

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-[#0B2559]/10" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block bg-[#0B2559] text-white px-4 py-1 rounded-full text-xs font-heading font-extrabold uppercase tracking-widest mb-3">
            VERIFIED FEEDBACK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#0B2559] tracking-tight">
            Client <span className="font-script text-[#0E6B47] text-4xl sm:text-5xl lg:text-6xl font-normal">Stories</span>
          </h2>
          <p className="text-xs font-semibold text-[#0B2559]/60 uppercase tracking-widest mt-2">
            (Client review cards to be populated with real testimonials)
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-[#F7F4EE] rounded-3xl p-8 sm:p-12 border border-[#0B2559]/10 shadow-lg relative">
            <Quote className="w-12 h-12 text-[#EBCB9E] mb-6 opacity-75" />

            <blockquote className="text-lg sm:text-2xl font-normal text-[#0B2559] leading-relaxed mb-8 italic">
              &ldquo;{items[currentIndex].quote}&rdquo;
            </blockquote>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#0B2559]/10">
              <div>
                <h4 className="font-heading font-extrabold text-lg text-[#0B2559]">
                  {items[currentIndex].name}
                </h4>
                <p className="text-xs sm:text-sm text-[#0E6B47] font-semibold">
                  {items[currentIndex].service} • {items[currentIndex].location}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="w-11 h-11 rounded-full bg-white border border-[#0B2559]/20 hover:bg-[#0B2559] hover:text-white flex items-center justify-center text-[#0B2559] transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-heading font-bold text-[#0B2559]/70 px-2">
                  {currentIndex + 1} / {items.length}
                </span>
                <button
                  type="button"
                  onClick={next}
                  className="w-11 h-11 rounded-full bg-white border border-[#0B2559]/20 hover:bg-[#0B2559] hover:text-white flex items-center justify-center text-[#0B2559] transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

