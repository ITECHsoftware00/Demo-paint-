import Image from "next/image";
import Reveal from "./Reveal";
import { studio } from "../../lib/editorial";

export default function Studio() {
  return (
    <section id="studio" className="pt-20 md:pt-28">
      <div className="px-5 sm:px-8 lg:px-12">
        <Reveal className="flex items-baseline justify-between gap-6 border-b border-line pb-4">
          <h2 className="label">{studio.label}</h2>
          <p className="meta">{studio.place}</p>
        </Reveal>

        <Reveal
          as="p"
          variant="mask"
          delay={80}
          className="mx-auto mt-14 max-w-[22ch] text-center text-[clamp(1.7rem,3vw,2.55rem)] font-medium leading-[1.03] tracking-[-0.03em] md:mt-20"
        >
          {studio.statement}
        </Reveal>

        <Reveal delay={140} className="mx-auto mt-10 max-w-[54ch] text-center md:mt-12">
          <p className="text-[16px] leading-[1.6] text-espresso/80">
            {studio.body[0]}
          </p>
        </Reveal>
      </div>

      <figure className="mt-12 md:mt-16">
        <Reveal variant="clip">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e6e0d5] sm:aspect-[3/2] lg:aspect-[21/9]">
            <Image
              src={studio.image}
              alt={studio.imageAlt}
              fill
              sizes="100vw"
              className="object-cover object-[50%_42%]"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <figcaption className="mt-3 flex justify-between px-5 text-[13px] text-muted sm:px-8 lg:px-12">
            <span>{studio.imageCaption}</span>
            <span className="hidden sm:inline">{studio.place}</span>
          </figcaption>
        </Reveal>
      </figure>
    </section>
  );
}
