"use client";

import { CheckCircle2, Award, Sparkles } from "lucide-react";
import { siteConfig } from "../lib/siteConfig";

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24 bg-[#0B2559] text-white relative overflow-hidden" id="why-us">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0E6B47]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EBCB9E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Large Pull Line */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#EBCB9E] px-4 py-1.5 rounded-full text-xs font-heading font-extrabold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE DEMO PAINT DIFFERENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-tight text-white mb-6">
            &ldquo;We paint. <span className="font-script text-[#EBCB9E] font-normal text-4xl sm:text-6xl lg:text-7xl">You relax.</span> We deliver excellence.&rdquo;
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-normal">
            We hold ourselves to uncompromising standards on every single project, from single feature rooms to multi-unit residential complexes.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.whyPoints.map((pt, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-[#EBCB9E] transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#0E6B47] flex items-center justify-center text-white mb-5 shadow-inner">
                <CheckCircle2 className="w-6 h-6 text-[#EBCB9E]" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                {pt.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

