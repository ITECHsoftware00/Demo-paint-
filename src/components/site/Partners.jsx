import Reveal from "./Reveal";
import { partners } from "../../lib/editorial";

export default function Partners() {
  return (
    <section id="partners" className="px-5 pt-20 sm:px-8 md:pt-28 lg:px-12">
      <Reveal className="flex items-baseline justify-between gap-6 border-b border-line pb-4">
        <h2 className="label">{partners.label}</h2>
        <p className="meta">{partners.aside}</p>
      </Reveal>

      <Reveal delay={80}>
        <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.55] text-espresso/70">
          {partners.note}
        </p>
      </Reveal>

      <Reveal delay={140} className="mt-8 border border-line">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {partners.items.map((partner, index) => (
            <div
              key={partner.name}
              className={`flex flex-col justify-between gap-8 p-6 sm:p-8 ${
                index > 0 ? "border-t border-line md:border-l md:border-t-0" : ""
              }`}
            >
              <div className="flex min-h-[44px] items-center">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.logoAlt}
                    className="max-h-11 w-auto max-w-[220px] object-contain opacity-80 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-[26px] font-medium leading-none tracking-[-0.02em]">
                    {partner.name}
                  </span>
                )}
              </div>
              <div className="flex items-end justify-between gap-6">
                <p className="text-[15px] leading-[1.5] text-espresso/70">
                  {partner.note}
                </p>
                <p className="meta shrink-0">{partner.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
