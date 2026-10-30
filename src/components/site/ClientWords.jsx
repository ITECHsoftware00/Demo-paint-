"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { words } from "../../lib/editorial";

export default function ClientWords() {
  const [index, setIndex] = useState(0);
  const total = words.items.length;
  const item = words.items[index];

  const step = (direction) =>
    setIndex((current) => (current + direction + total) % total);

  return (
    <section id="words" className="px-5 pt-20 sm:px-8 md:pt-28 lg:px-12">
      <Reveal className="flex items-baseline justify-between gap-6 border-b border-line pb-4">
        <h2 className="label">{words.label}</h2>
        <p className="meta">
          {index + 1} of {total}
        </p>
      </Reveal>

      <div className="mt-9 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 md:gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e6e0d5]">
            <Image
              key={item.image}
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="animate-[fade-in_700ms_ease_both] object-cover"
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="meta">{item.project}</p>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => step(-1)}
                className="group inline-flex items-center gap-2 text-[13px] text-espresso/75 transition-colors hover:text-espresso"
              >
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                >
                  ←
                </span>
                Previous
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="group inline-flex items-center gap-2 text-[13px] text-espresso/75 transition-colors hover:text-espresso"
              >
                Next
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div aria-live="polite">
            <blockquote key={index} className="animate-[fade-in_600ms_ease_both]">
              <p className="text-[clamp(1.25rem,2.2vw,1.5rem)] leading-[1.4] tracking-[-0.02em]">
                {item.quote}
              </p>
              <footer className="mt-9 flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-[16px]">{item.name}</span>
                <span className="meta">{item.place}</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
