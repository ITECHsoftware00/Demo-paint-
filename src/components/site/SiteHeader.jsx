"use client";

import { useEffect, useState } from "react";
import { nav } from "../../lib/editorial";
import { siteConfig } from "../../lib/siteConfig";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight - 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const readClock = () => {
      const value = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Africa/Lagos",
      }).format(new Date());
      setTime(value);
    };
    readClock();
    const id = window.setInterval(readClock, 30000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          solid && !open ? "bg-cream" : "bg-transparent"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-5 sm:h-[70px] sm:px-8 lg:px-12">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className={`flex items-baseline gap-1.5 text-[16px] transition-colors ${
              solid || open ? "text-espresso" : "text-[#fffdf8]"
            }`}
          >
            <span className="font-semibold tracking-[-0.01em]">DEMO</span>
            <span className="font-normal">PAINT</span>
          </a>

          <p
            className={`hidden text-[13px] tracking-[0.01em] transition-colors md:block ${
              solid || open ? "text-muted" : "text-[#fffdf8]/75"
            }`}
          >
            {time ? `${time} — ` : ""}Osogbo, Nigeria
          </p>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="rounded-full bg-espresso px-4 py-2 text-[13px] font-medium text-cream transition-colors duration-300 hover:bg-[#241d17] active:scale-[0.98]"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {open && (
        <div
          id="site-menu"
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-cream px-5 pb-8 pt-24 sm:px-8 lg:px-12"
        >
          <nav aria-label="Site" className="flex flex-col">
            {nav.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="menu-item border-b border-line py-3 text-[clamp(1.7rem,4.4vw,2.9rem)] leading-[1.08] tracking-[-0.03em] transition-colors hover:text-ink"
                style={{ animationDelay: `${110 + index * 55}ms` }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto grid gap-6 pt-10 sm:grid-cols-3">
            <div>
              <p className="label text-muted">Call</p>
              <ul className="mt-2 space-y-1 text-[16px]">
                {siteConfig.phones.map((phone) => (
                  <li key={phone.raw}>
                    <a href={`tel:${phone.raw}`} className="hover:text-ink">
                      {phone.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label text-muted">Email</p>
              <p className="mt-2 text-[16px]">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">
                  {siteConfig.email}
                </a>
              </p>
            </div>
            <div>
              <p className="label text-muted">Studio hours</p>
              <p className="mt-2 text-[16px]">{siteConfig.openingHours}</p>
              <p className="text-[16px] text-muted">Osogbo, Nigeria</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
