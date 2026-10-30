import Image from "next/image";
import Reveal from "./Reveal";
import MediaVideo from "../ui/MediaVideo";
import { work } from "../../lib/editorial";

export default function Work() {
  return (
    <section id="work" className="px-5 pt-20 sm:px-8 md:pt-28 lg:px-12">
      <Reveal className="flex items-baseline justify-between gap-6 border-b border-line pb-4">
        <h2 className="label">{work.label}</h2>
        <p className="meta">{work.aside}</p>
      </Reveal>

      <div className="mt-9 grid grid-cols-1 gap-x-6 gap-y-12 md:mt-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
        {work.items.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 90}>
            <article className="group">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e6e0d5]">
                {project.clip ? (
                  <div className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]">
                    <MediaVideo clip={project.clip} mode="visible" blurFill />
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
                  />
                )}
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-6">
                <h3 className="text-[18px] leading-snug">{project.title}</h3>
                <p className="meta shrink-0">{project.category}</p>
              </div>
              <p className="mt-2 max-w-[46ch] text-[16px] leading-[1.55] text-espresso/70">
                {project.detail}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
