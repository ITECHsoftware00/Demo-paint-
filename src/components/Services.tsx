"use client";

import {
  Paintbrush,
  Layers,
  Box,
  Sparkles,
  Gem,
  Maximize2,
  Scroll,
  Hammer,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "../lib/siteConfig";

const iconMap = {
  Paintbrush,
  Layers,
  Box,
  Sparkles,
  Gem,
  Maximize2,
  Scroll,
  Hammer,
};

export default function Services() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block bg-[#0B2559] text-white px-4 py-1 rounded-full text-xs font-heading font-extrabold uppercase tracking-widest mb-3">
            SPECIALIZED ON
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#0B2559] tracking-tight">
            Our Specialist <span className="font-script text-[#0E6B47] text-4xl sm:text-5xl lg:text-6xl font-normal">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-[#0B2559]/75 mt-3">
            High-precision finishing solutions for residential properties, commercial offices, and private developments.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((srv) => {
            const IconComponent = iconMap[srv.iconName as keyof typeof iconMap] || Paintbrush;

            return (
              <div
                key={srv.id}
                className="group relative bg-[#F7F4EE] rounded-2xl p-6 sm:p-7 border border-[#0B2559]/10 hover:border-[#0E6B47] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Round Icon Badge */}
                  <div className="w-14 h-14 rounded-full bg-[#0B2559] group-hover:bg-[#0E6B47] text-white flex items-center justify-center mb-5 transition-colors shadow-md">
                    <IconComponent className="w-7 h-7 text-[#EBCB9E] group-hover:text-white transition-colors" />
                  </div>

                  {/* Title & Subtitle */}
                  <span className="text-xs font-heading font-bold text-[#0E6B47] uppercase tracking-wider block mb-1">
                    {srv.subtitle}
                  </span>
                  <h3 className="text-xl font-heading font-extrabold text-[#0B2559] tracking-tight mb-3">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#0B2559]/80 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-4 border-t border-[#0B2559]/10">
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-1.5 text-sm font-heading font-bold text-[#0B2559] group-hover:text-[#0E6B47] transition-colors"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

