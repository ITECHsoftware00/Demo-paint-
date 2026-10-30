"use client";

import Image from "next/image";
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { siteConfig } from "../lib/siteConfig";
import { BrushUnderline, Brush3D } from "./DecorativeSVG";
import DyeWhorl from "./ui/dye-whorl";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EE] pt-6 pb-16 lg:py-20 min-h-[92vh] flex items-center">
      {/* Interactive WebGL DyeWhorl Fluid Background Simulation */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto opacity-35 z-0">
        <DyeWhorl className="w-full h-full" />
      </div>

      {/* Subtle Dot Grid Accent */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 bg-[#0B2559] text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-heading font-extrabold tracking-wider uppercase mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#EBCB9E]" />
              <span>Specialized Finishing Contractor</span>
            </div>

            {/* Main Headline */}
            <div className="relative mb-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-[#0B2559] leading-[0.98]">
                <span>DEMO</span>{" "}
                <span className="font-script text-[#0E6B47] text-6xl sm:text-7xl lg:text-8xl inline-block -rotate-3 ml-1 sm:ml-2">
                  Paint
                </span>
              </h1>
              {/* Short brush underline beneath */}
              <div className="mt-2 ml-1">
                <BrushUnderline className="w-44 sm:w-60 h-3 sm:h-4" />
              </div>
            </div>

            {/* Tagline */}
            <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B2559] tracking-tight mt-1 mb-3">
              {siteConfig.headline}
            </h2>

            {/* Sentence Description */}
            <p className="text-base sm:text-lg text-[#0B2559]/80 font-normal leading-relaxed max-w-xl mb-8">
              {siteConfig.subheadline}
            </p>

            {/* Two Action Buttons (Always visible on mobile) */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2.5 bg-[#0B2559] hover:bg-[#0E6B47] text-white font-heading font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${siteConfig.phones[0].raw}`}
                className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-[#0E6B47] text-[#0E6B47] hover:text-white border-2 border-[#0E6B47] font-heading font-bold text-base px-7 py-3.5 rounded-full transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now ({siteConfig.phones[0].display})</span>
              </a>
            </div>

            {/* Quick Proof Snippet */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0B2559]/70">
              <CheckCircle2 className="w-4 h-4 text-[#0E6B47]" />
              <span>Free site inspection across Lagos & neighboring states</span>
            </div>
          </div>

          {/* Right Column: Circular Project Photo with Navy Ring + Olive Arc + 3D Brush */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px]">
              {/* Outer Decorative Olive Arc (SVG) */}
              <svg
                className="absolute inset-0 w-full h-full -rotate-45 pointer-events-none"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="#A9B36B"
                  strokeWidth="2.5"
                  strokeDasharray="180 120"
                />
              </svg>

              {/* Navy Ring Container */}
              <div className="absolute inset-3 sm:inset-4 rounded-full p-2.5 sm:p-3 bg-white shadow-2xl border-4 border-[#0B2559] flex items-center justify-center overflow-hidden">
                {/* Circular Project Photo */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#EBCB9E]/20">
                  <Image
                    src="/images/hero.jpg"
                    alt="DEMO Paint Real Project Finish"
                    fill
                    priority
                    sizes="(max-width: 768px) 300px, 420px"
                    className="object-cover object-center"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge on Circle */}
              <div className="absolute top-4 left-0 sm:left-2 bg-[#0B2559] text-white px-3.5 py-1.5 rounded-full text-xs font-heading font-extrabold shadow-md flex items-center gap-1.5 z-20">
                <ShieldCheck className="w-3.5 h-3.5 text-[#EBCB9E]" />
                <span>Premium Standard</span>
              </div>

              {/* 3D-looking Paintbrush Graphic overlapping lower right edge */}
              <div className="absolute -bottom-4 -right-3 sm:-bottom-6 sm:-right-4 z-20 transition-transform hover:rotate-6">
                <Brush3D className="w-24 h-24 sm:w-32 sm:h-32" />
              </div>
            </div>
          </div>
        </div>

        {/* Thin Trust Strip Directly Below Hero */}
        <div className="mt-14 pt-8 border-t border-[#0B2559]/15">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {siteConfig.trustItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-3.5 rounded-xl border border-[#0B2559]/10 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[#0E6B47]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-[#0E6B47]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#0B2559]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#0B2559]/70 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
