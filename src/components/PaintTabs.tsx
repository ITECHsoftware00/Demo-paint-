"use client";

import { useState } from "react";
import { Check, Info } from "lucide-react";
import { siteConfig, PaintType } from "../lib/siteConfig";

export default function PaintTabs() {
  const [activeTab, setActiveTab] = useState<
    "Interior" | "Exterior" | "Specialty" | "Protective" | "Preparation"
  >("Interior");

  const filteredPaints = siteConfig.paintTypes.filter(
    (p) => p.category === activeTab
  );

  return (
    <section className="py-16 sm:py-20 bg-[#F7F4EE] border-t border-[#0B2559]/10" id="paints">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-[#0B2559] text-white px-4 py-1 rounded-full text-xs font-heading font-extrabold uppercase tracking-widest mb-3">
            COATING KNOWLEDGE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#0B2559] tracking-tight">
            Paint & Surface <span className="font-script text-[#0E6B47] text-4xl sm:text-5xl lg:text-6xl font-normal">Guide</span>
          </h2>
          <p className="text-base sm:text-lg text-[#0B2559]/75 mt-3">
            Different walls need different paint formulations. Explore the technical paints we supply and apply.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {siteConfig.paintCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full font-heading font-bold text-sm transition-all ${
                activeTab === cat
                  ? "bg-[#0B2559] text-white shadow-md scale-105"
                  : "bg-white text-[#0B2559] hover:bg-[#0E6B47] hover:text-white border border-[#0B2559]/15"
              }`}
            >
              {cat} Paints
            </button>
          ))}
        </div>

        {/* Chips List with Explanations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredPaints.map((item: PaintType, idx: number) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-[#0B2559]/10 shadow-sm hover:border-[#0E6B47] hover:shadow-md transition-all flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-full bg-[#0E6B47]/10 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-[#0E6B47]" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-[#0B2559]">
                  {item.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#0B2559]/80 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advice banner */}
        <div className="mt-10 p-5 rounded-2xl bg-[#EBCB9E]/25 border border-[#EBCB9E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Info className="w-6 h-6 text-[#0B2559] shrink-0" />
            <p className="text-sm text-[#0B2559] font-medium">
              Not sure which paint suits your wall condition or room humidity? We specify the exact compound during our site inspection.
            </p>
          </div>
          <a
            href="#quote"
            className="shrink-0 bg-[#0B2559] hover:bg-[#0E6B47] text-white font-heading font-bold text-xs uppercase px-5 py-2.5 rounded-full"
          >
            Ask Our Specialist
          </a>
        </div>
      </div>
    </section>
  );
}

