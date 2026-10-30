import Image from "next/image";
import Reveal from "./Reveal";
import { approach } from "../../lib/editorial";

export default function Approach() {
  return (
    <section id="approach" className="px-5 pt-20 sm:px-8 md:pt-28 lg:px-12">
      <Reveal
        as="h2"
        variant="mask"
        className="max-w-[30ch] text-[clamp(1.7rem,3vw,2.55rem)] font-medium leading-[1.08] tracking-[-0.03em]"
      >
        {approach.statement}
      </Reveal>

      <div className="mt-11 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-2 md:gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <figure>
            <Reveal variant="clip">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e6e0d5] sm:aspect-[4/3]">
                <Image
                  src={approach.image}
                  alt={approach.imageAlt}
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover object-[50%_45%]"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <figcaption className="mt-3 text-[13px] text-muted">
                {approach.imageCaption}
              </figcaption>
            </Reveal>
          </figure>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <Reveal delay={120}>
            <p className="label border-b border-line pb-3">{approach.label}</p>
            <p className="mt-5 text-[16px] leading-[1.6] text-espresso/80">
              {approach.body}
            </p>
          </Reveal>

          <Reveal as="ol" delay={180} className="mt-8 space-y-5">
            {approach.steps.map((step) => (
              <li key={step.title}>
                <h3 className="text-[16px] font-medium leading-snug">
                  {step.title}
                </h3>
                <p className="mt-1 text-[16px] leading-[1.5] text-espresso/70">
                  {step.detail}
                </p>
              </li>
            ))}
          </Reveal>

          <Reveal delay={220} className="mt-9">
            <a
              href={approach.link.href}
              className="link-sweep group inline-flex items-center gap-3 text-[16px]"
            >
              {approach.link.label}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
