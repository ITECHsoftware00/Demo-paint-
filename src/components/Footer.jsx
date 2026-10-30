"use client";

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-bcg">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Studio info */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                fontWeight: "700",
                letterSpacing: "0.04em",
                display: "block",
                marginBottom: "0.75rem",
                color: "#ffffff",
              }}
            >
              DEMO PAINT
            </span>
            <p
              style={{
                color: "rgba(255, 253, 248, 0.78)",
                maxWidth: "420px",
                lineHeight: "1.7",
                marginBottom: "1.25rem",
              }}
            >
              We paint. You relax. We deliver excellence.
              Specialising in house painting, architectural false ceilings, 3D wall panels,
              textured stucco, and precision screeding.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.85rem",
                backgroundColor: "rgba(255, 253, 248, 0.08)",
                borderRadius: "4px",
                fontSize: "0.8125rem",
                fontFamily: "var(--font-mono)",
                marginBottom: "1.5rem",
              }}
            >
              <span>Partnered with:</span>
              <strong style={{ color: "#fff" }}>Armstrong</strong> &amp; <strong style={{ color: "#fff" }}>Slikcoat</strong>
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "var(--neutral--white)", lineHeight: "1.8" }}>
              <p>Email: <a href="mailto:adebisimutiu021@gmail.com" style={{ textDecoration: "underline" }}>adebisimutiu021@gmail.com</a></p>
              <p>Calls: <a href="tel:07037522322">0703 752 2322</a> / <a href="tel:08161220276">0816 122 0276</a></p>
              <p>Office: <a href="tel:07085722638">0708 572 2638</a></p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <span className="mono-tag" style={{ color: "rgba(255, 253, 248, 0.6)", display: "block", marginBottom: "1.25rem" }}>
              Navigation
            </span>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <li>
                <button
                  onClick={() => scrollTo("home")}
                  style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontFamily: "var(--font-heading)", fontSize: "0.9375rem" }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("studio")}
                  style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontFamily: "var(--font-heading)", fontSize: "0.9375rem" }}
                >
                  Our Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("approach")}
                  style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontFamily: "var(--font-heading)", fontSize: "0.9375rem" }}
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("works")}
                  style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontFamily: "var(--font-heading)", fontSize: "0.9375rem" }}
                >
                  Featured Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("finishes")}
                  style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontFamily: "var(--font-heading)", fontSize: "0.9375rem" }}
                >
                  Finishes & Materials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("enquiry")}
                  style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontFamily: "var(--font-heading)", fontSize: "0.9375rem" }}
                >
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & WhatsApp */}
          <div>
            <span className="mono-tag" style={{ color: "rgba(255, 253, 248, 0.6)", display: "block", marginBottom: "1.25rem" }}>
              Services
            </span>
            <div style={{ fontSize: "0.9375rem", color: "rgba(255, 253, 248, 0.8)", lineHeight: "1.8" }}>
              <p>House Painting (Interior & Exterior)</p>
              <p>Architectural False Ceilings & POP</p>
              <p>3D Geometric Wall Panels</p>
              <p>Italian Stucco & Venetian Plaster</p>
              <p>Precision Wall & Floor Screeding</p>
              <div style={{ marginTop: "1.5rem" }}>
                <a
                  href="https://wa.me/2347037522322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                  style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}
                >
                  WhatsApp Us Now →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <span>© 2026 DEMO Paint. All rights reserved.</span>
          <span>Quality Finishes. Lasting Impressions.</span>
        </div>
      </div>
    </footer>
  );
}
