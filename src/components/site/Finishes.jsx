import Reveal from "./Reveal";
import { finishes } from "../../lib/editorial";

export default function Finishes() {
  return (
    <section id="finishes" className="px-5 pt-20 sm:px-8 md:pt-28 lg:px-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        <Reveal
          as="h2"
          variant="mask"
          className="md:col-span-5 text-[clamp(1.7rem,3vw,2.55rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          {finishes.label}
        </Reveal>
        <Reveal delay={80} className="md:col-span-5 md:col-start-8">
          <p className="text-[16px] leading-[1.6] text-espresso/75">
            {finishes.intro}
          </p>
        </Reveal>
      </div>

      <Reveal delay={60} className="mt-10 md:mt-12">
        <ul>
          {finishes.items.map((item) => (
            <li
              key={item.name}
              className="group border-b border-line transition-colors duration-300 hover:bg-paper"
            >
              <div className="grid grid-cols-1 gap-1 px-2 py-5 md:grid-cols-12 md:items-baseline md:gap-6 md:py-6">
                <h3 className="text-[24px] leading-tight tracking-[-0.015em] transition-transform duration-300 md:col-span-4 md:group-hover:translate-x-1">
                  {item.name}
                </h3>
                <p className="text-[16px] leading-[1.5] text-espresso/70 md:col-span-5">
                  {item.detail}
                </p>
                <p className="meta md:col-span-3 md:text-right">{item.category}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
