import Reveal from "./Reveal";
import { nav } from "../../lib/editorial";
import { siteConfig } from "../../lib/siteConfig";

const year = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <footer className="mt-20 px-5 pt-10 sm:px-8 md:mt-28 lg:px-12">
      <Reveal className="grid grid-cols-2 gap-x-6 gap-y-9 border-t border-line pt-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <p className="label text-muted">Studio</p>
          <ul className="mt-3 space-y-1.5 text-[16px]">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="label text-muted">Contact</p>
          <ul className="mt-3 space-y-1.5 text-[16px]">
            {siteConfig.phones.map((entry) => (
              <li key={entry.raw}>
                <a href={`tel:${entry.raw}`} className="transition-colors hover:text-ink">
                  {entry.display}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="break-all transition-colors hover:text-ink"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="label text-muted">Visit</p>
          <p className="mt-3 text-[16px]">Osogbo, Nigeria</p>
          <p className="text-[16px] text-espresso/70">{siteConfig.openingHours}</p>
          <p className="mt-3 text-[16px]">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-espresso/25 pb-0.5 transition-colors hover:border-espresso"
            >
              Message on WhatsApp
            </a>
          </p>
        </div>

        <div className="lg:col-span-3 lg:text-right">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-[16px] transition-colors hover:text-ink"
          >
            Start a project
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </Reveal>

      <div className="mt-16 overflow-hidden md:mt-20">
        <span className="wordmark translate-y-[0.12em] select-none whitespace-nowrap text-[clamp(2.75rem,15vw,14rem)] text-espresso">
          DEMO <span className="text-[#166534]">PAINT</span>
        </span>
      </div>

      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 text-[13px] text-muted">
        <p>© {year} DEMO Paint. All rights reserved.</p>
        <p>Finishing studio · Osogbo, Nigeria</p>
      </div>
    </footer>
  );
}
