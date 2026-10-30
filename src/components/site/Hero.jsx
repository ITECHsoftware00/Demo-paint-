import Image from "next/image";
import { hero } from "../../lib/editorial";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-espresso"
    >
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="hero-media object-cover object-[52%_36%]"
      />
      {/* Flat scrim so the headline keeps its contrast over the photograph. */}
      <div className="absolute inset-0 bg-[#241d17]/45" />

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-7 sm:px-8 sm:pb-9 lg:px-12 lg:pb-11">
        <h1 className="max-w-[19ch] text-[clamp(2.15rem,4.4vw,3.9rem)] font-medium leading-[0.98] tracking-[-0.035em] text-[#fffdf8]">
          {hero.title.map((line, index) => (
            <span
              key={line}
              className="hero-line"
              style={{ "--i": index }}
            >
              <span className="hero-line__inner">{line}</span>
            </span>
          ))}
        </h1>

        <div className="hero-fade mt-7 flex flex-col gap-6 sm:mt-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-[36ch] text-[16px] leading-[1.5] text-[#fffdf8]/85">
            {hero.intro}
          </p>
          <a
            href={hero.cta.href}
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#f3efe8] px-5 py-3 text-[13px] font-medium text-espresso transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            {hero.cta.label}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>

        <div className="hero-fade mt-8 flex flex-col gap-1.5 text-[13px] text-[#fffdf8]/70 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-6">
          <p>{hero.footerNote}</p>
          <p>{hero.areas}</p>
        </div>
      </div>
    </section>
  );
}
