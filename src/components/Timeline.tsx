"use client";

import { siteConfig } from "../lib/siteConfig";

export default function Timeline() {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-[#0B2559]/10" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#0B2559] text-white px-4 py-1 rounded-full text-xs font-heading font-extrabold uppercase tracking-widest mb-3">
            HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#0B2559] tracking-tight">
            Our 5-Step <span className="font-script text-[#0E6B47] text-4xl sm:text-5xl lg:text-6xl font-normal">Process</span>
          </h2>
          <p className="text-base sm:text-lg text-[#0B2559]/75 mt-3">
            A structured workflow ensures zero surprises, immaculate surfaces, and on-time completion.
          </p>
        </div>

        {/* Timeline Grid (Horizontal on desktop, vertical on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {siteConfig.processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative flex flex-col items-start bg-[#F7F4EE] p-6 rounded-2xl border border-[#0B2559]/10 hover:border-[#0E6B47] transition-all"
            >
              {/* Step Number Circle */}
              <div className="w-12 h-12 rounded-full bg-[#0B2559] text-white flex items-center justify-center font-heading font-black text-lg mb-4 shadow-md">
                <span className="text-[#EBCB9E]">{step.step}</span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-heading font-extrabold text-[#0B2559] mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#0B2559]/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

