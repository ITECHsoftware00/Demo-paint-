"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [timeStr, setTimeStr] = useState("09:39:56 Gold Coast, AU");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Live real-time studio clock (matching BCG Building Design Gold Coast AU format)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = now.toLocaleTimeString("en-AU", {
          timeZone: "Australia/Brisbane",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        setTimeStr(`${formatted} Gold Coast, AU`);
      } catch {
        setTimeStr("09:39:56 Gold Coast, AU");
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 30;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="navbar-bcg">
        <div className="container">
          <div className="navbar-bcg-inner">
            <div className="navbar-bcg-grid">
              {/* Col 1: BCG Logo (left) */}
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="bcg-brand"
              >
                <span>BCG</span>
                <sup>®</sup>
              </a>

              {/* Col 2: Live Clock (left-center) */}
              <div className="bcg-clock">
                <span>{timeStr}</span>
              </div>

              {/* Col 3: Menu (center-right) */}
              <nav className="bcg-nav-links">
                <a
                  href="#studio"
                  onClick={(e) => handleNavClick(e, "studio")}
                  className="bcg-nav-link"
                >
                  Studio
                </a>
                <a
                  href="#approach"
                  onClick={(e) => handleNavClick(e, "approach")}
                  className="bcg-nav-link"
                >
                  Process
                </a>
                <a
                  href="#works"
                  onClick={(e) => handleNavClick(e, "works")}
                  className="bcg-nav-link"
                >
                  Projects
                </a>
              </nav>

              {/* Col 4: Project Enquiry (right) */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <a
                  href="#enquiry"
                  onClick={(e) => handleNavClick(e, "enquiry")}
                  className="bcg-enquiry-link"
                >
                  Project Enquiry
                </a>

                {/* Mobile Menu Toggle */}
                <button
                  className="mobile-nav-toggle"
                  onClick={() => setMobileOpen(true)}
                  aria-label="Toggle navigation menu"
                >
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <button
          className="mobile-drawer-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <div style={{ marginBottom: "1rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "var(--neutral--gray-subtle)" }}>
            {timeStr}
          </span>
        </div>
        <a
          href="#studio"
          onClick={(e) => handleNavClick(e, "studio")}
          className="mobile-nav-link"
        >
          Studio
        </a>
        <a
          href="#approach"
          onClick={(e) => handleNavClick(e, "approach")}
          className="mobile-nav-link"
        >
          Process
        </a>
        <a
          href="#works"
          onClick={(e) => handleNavClick(e, "works")}
          className="mobile-nav-link"
        >
          Projects
        </a>
        <a
          href="#enquiry"
          onClick={(e) => handleNavClick(e, "enquiry")}
          className="btn btn-primary"
          style={{ marginTop: "1rem" }}
        >
          Project Enquiry
        </a>
      </div>
    </>
  );
}
