import Image from "next/image";
import Reveal from "./Reveal";
import { band } from "../../lib/editorial";

export default function StudioBand() {
  return (
    <section className="mt-20 bg-espresso text-cream md:mt-28">
      <div className="grid grid-cols-1 gap-10 px-5 pt-12 sm:px-8 md:grid-cols-12 md:gap-8 md:pt-20 lg:px-12">
        <Reveal className="md:col-span-5 lg:col-span-3">
          <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden bg-[#4a3f35]">
            <Image
              src={band.image}
              alt={band.imageAlt}
              fill
              sizes="(min-width: 768px) 25vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={90} className="md:col-span-7 lg:col-span-4">
          <p className="max-w-[42ch] text-[16px] leading-[1.65] text-cream/85">
            {band.paragraphs[0]}
          </p>
        </Reveal>

        <Reveal delay={160} className="md:col-span-7 md:col-start-6 lg:col-span-4 lg:col-start-9">
          <p className="max-w-[42ch] text-[16px] leading-[1.65] text-cream/85">
            {band.paragraphs[1]}
          </p>
        </Reveal>
      </div>

      <div className="mt-14 overflow-hidden px-5 sm:px-8 md:mt-20 lg:px-12">
        <span className="wordmark translate-y-[0.12em] text-[clamp(4.5rem,21vw,20rem)] text-cream">
          {band.wordmark}
        </span>
      </div>
    </section>
  );
}
