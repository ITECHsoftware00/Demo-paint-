"use client";

import { useState } from "react";
import Arrow from "./Arrow";

const SERVICES_LIST = [
  "House Painting (Interior & Exterior)",
  "Ceiling & POP Designs",
  "3D Wall Panels",
  "Stucco & Venetian Plaster",
  "Wallpaper & Accent Walls",
  "Screeding – General Contractor",
];

export default function ProjectEnquiry() {
  const [selectedService, setSelectedService] = useState(SERVICES_LIST[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section section-beige" id="enquiry">
      <div className="container">
        <p className="mono-tag" style={{ marginBottom: "1rem" }}>
          06 / Project Enquiry & Contact
        </p>

        <div style={{ maxWidth: "760px", marginBottom: "3rem" }}>
          <h2>Request a quote, or just ask.</h2>
          <p className="p-lead" style={{ color: "var(--neutral--charcoal)", marginTop: "1rem" }}>
            Ready to upgrade your home, duplex or commercial space? Speak directly with DEMO Paint
            or share your project details below. We reply within 24 hours.
          </p>
        </div>

        {/* Quick Contact Numbers Bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "var(--neutral--white)",
              border: "1px solid var(--border--subtle)",
              borderRadius: "4px",
            }}
          >
            <span className="mono-tag">Direct Call / WhatsApp</span>
            <p style={{ fontSize: "1.25rem", fontWeight: "600", marginTop: "0.5rem" }}>
              <a href="tel:07037522322" style={{ color: "var(--neutral--black)", textDecoration: "none" }}>
                0703 752 2322
              </a>
            </p>
            <a
              href="https://wa.me/2348161220276"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.875rem", color: "#16a34a", textDecoration: "underline", display: "inline-block", marginTop: "0.25rem" }}
            >
              Open WhatsApp Chat →
            </a>
          </div>

          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "var(--neutral--white)",
              border: "1px solid var(--border--subtle)",
              borderRadius: "4px",
            }}
          >
            <span className="mono-tag">Alternative Lines</span>
            <p style={{ fontSize: "1.1rem", fontWeight: "500", marginTop: "0.5rem" }}>
              <a href="tel:08161220276" style={{ color: "var(--neutral--black)", textDecoration: "none", display: "block" }}>
                0816 122 0276
              </a>
              <a href="tel:07085722638" style={{ color: "var(--neutral--black)", textDecoration: "none", display: "block", marginTop: "0.2rem" }}>
                0708 572 2638
              </a>
            </p>
          </div>

          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "var(--neutral--white)",
              border: "1px solid var(--border--subtle)",
              borderRadius: "4px",
            }}
          >
            <span className="mono-tag">Email Enquiries</span>
            <p style={{ fontSize: "1rem", fontWeight: "600", marginTop: "0.5rem", wordBreak: "break-all" }}>
              <a href="mailto:adebisimutiu021@gmail.com" style={{ color: "var(--neutral--black)", textDecoration: "none" }}>
                adebisimutiu021@gmail.com
              </a>
            </p>
            <span style={{ fontSize: "0.8125rem", color: "var(--ink-secondary)", display: "block", marginTop: "0.25rem" }}>
              24-hour turnaround
            </span>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="enquiry-form-card">
          {submitted ? (
            <div style={{ padding: "3rem 1rem", textAlign: "center" }}>
              <span className="mono-tag" style={{ color: "var(--terracota)" }}>
                ENQUIRY RECEIVED
              </span>
              <h3 style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                Thank you, {formData.name || "valued client"}!
              </h3>
              <p style={{ maxWidth: "540px", margin: "0 auto 2rem auto", color: "var(--neutral--charcoal)" }}>
                We have received your request for <strong>{selectedService}</strong>.
                Our team will review your project details and contact you via phone ({formData.phone})
                or email ({formData.email}) within 24 hours.
              </p>
              <button
                className="btn btn-outline"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", phone: "", details: "" });
                }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Service Selection */}
              <div className="form-group">
                <label className="form-label">Select Service Interested In</label>
                <div className="form-chip-group">
                  {SERVICES_LIST.map((srv) => (
                    <button
                      type="button"
                      key={srv}
                      className={`form-chip ${selectedService === srv ? "selected" : ""}`}
                      onClick={() => setSelectedService(srv)}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div>
                  <label className="form-label" htmlFor="client-name">
                    Your Name *
                  </label>
                  <input
                    id="client-name"
                    required
                    type="text"
                    className="form-input"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="client-phone">
                    Phone Number *
                  </label>
                  <input
                    id="client-phone"
                    required
                    type="tel"
                    className="form-input"
                    placeholder="e.g. 0703 752 2322"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="client-email">
                    Email Address *
                  </label>
                  <input
                    id="client-email"
                    required
                    type="email"
                    className="form-input"
                    placeholder="adebisimutiu021@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="form-group">
                <label className="form-label" htmlFor="client-details">
                  Project Details (Scope, Location, Timeline) *
                </label>
                <textarea
                  id="client-details"
                  required
                  rows={4}
                  className="form-textarea"
                  placeholder="Share details regarding your room size, house type, location, and preferred timeline..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                <a
                  href="https://wa.me/2348161220276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  💬 Chat Instantly on WhatsApp
                </a>

                <button type="submit" className="btn btn-primary" style={{ padding: "0.95rem 2.5rem" }}>
                  Submit Quote Request
                  <Arrow size={14} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
