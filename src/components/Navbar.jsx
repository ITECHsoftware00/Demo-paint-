"use client";

import { useState, useEffect } from "react";
import Arrow from "./Arrow";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { id: "home", href: "#home", label: "Home" },
  { id: "services", href: "#services", label: "Services" },
  { id: "transformation", href: "#transformation", label: "Before / After" },
  { id: "gallery", href: "#gallery", label: "Work" },
  { id: "video", href: "#video", label: "Film" },
  { id: "contact", href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <a href="#home" className="brand" onClick={closeMobile}>
            <img
              src="/assets/images/demo-paint-logo.png"
              alt="DEMO PAINT"
              className="brand-logo"
              style={{ height: "40px", width: "auto" }}
            />
          </a>

          <nav className="nav-links" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link ${active === item.id ? "active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <ThemeToggle />
            <button
              type="button"
              className={`mobile-toggle ${mobileOpen ? "open" : ""}`}
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <>
          <div className="drawer-backdrop" onClick={closeMobile} aria-hidden="true" />
          <div className="mobile-drawer" id="mobile-menu">
            <nav className="mobile-drawer-links" aria-label="Mobile">
              {NAV_ITEMS.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="mobile-link"
                  onClick={closeMobile}
                >
                  {item.label}
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </a>
              ))}
            </nav>
            <div className="mobile-drawer-footer">
              <a href="tel:07037522322">0703 752 2322</a>
              <a href="tel:08161220276">0816 122 0276</a>
              <a href="mailto:adebisimutiu021@gmail.com">
                adebisimutiu021@gmail.com
              </a>
              <a
                href="https://wa.me/2347037522322"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
                onClick={closeMobile}
              >
                Chat on WhatsApp
                <Arrow size={12} />
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
