"use client";

import { useState } from "react";
import SectionHead from "./SectionHead";
import Arrow from "./Arrow";

export default function ContactSection({ selectedService }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    details: "",
  });
  const [serviceChoice, setServiceChoice] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const service = serviceChoice || selectedService || "House Painting";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setServiceChoice("");
    setFormData({
      name: "",
      phone: "",
      email: "",
      details: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <SectionHead
          index="05"
          eyebrow="Let's connect"
          title={
            <>
              Request an estimate, <em>or just ask.</em>
            </>
          }
          desc="Ready to upgrade your home, duplex or office? Speak directly with our team, or share your project details below."
          note="Replies within 24 hours"
        />

        <div className="contact-grid">
          <div>
            <div className="contact-rows">
              <div className="contact-row reveal-item" data-stagger="0">
                <span className="contact-row-label">Phone</span>
                <div className="contact-row-value">
                  <a href="tel:07037522322">0703 752 2322</a>
                  <a href="tel:08161220276">0816 122 0276</a>
                  <a href="tel:07085722638">0708 572 2638</a>
                </div>
                <span className="contact-row-arrow" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.1-.27c1.2.49 2.5.75 3.9.75a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1c-9.4 0-17-7.6-17-17a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.36.26 2.68.75 3.89a1 1 0 0 1-.27 1.11l-2.2 2.2Z" />
                  </svg>
                </span>
              </div>

              <div className="contact-row reveal-item" data-stagger="1">
                <span className="contact-row-label">Email</span>
                <div className="contact-row-value">
                  <a href="mailto:adebisimutiu021@gmail.com">
                    adebisimutiu021@gmail.com
                  </a>
                  <small>
                    Send building plans or architectural specs for detailed
                    tenders.
                  </small>
                </div>
                <span className="contact-row-arrow" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="2.5" y="4.5" width="19" height="15" />
                    <path d="m3 5.5 9 7 9-7" />
                  </svg>
                </span>
              </div>

              <div className="contact-row reveal-item" data-stagger="2">
                <span className="contact-row-label">WhatsApp</span>
                <div className="contact-row-value">
                  <a
                    href="https://wa.me/2348161220276?text=Hello%20DEMO%20Paint,%20I'd%20like%20to%20send%20photos%20for%20an%20instant%20quote"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Send photos, get an estimate
                  </a>
                  <small>
                    Share wall photos and rough measurements for a same-day
                    response.
                  </small>
                </div>
                <span className="contact-row-arrow" aria-hidden="true">
                  <Arrow size={14} />
                </span>
              </div>
            </div>

            <p className="contact-note reveal-item" data-stagger="3">
              <strong>Prefer to talk it through?</strong> Call either line and
              you will reach the team that will actually run your project — not
              a call centre.
            </p>
          </div>

          <div className="form-panel">
            <div className="form-panel-head">
              <h3>Project brief</h3>
              <p>
                Tell us about your space and requirements. We will reply within
                24 hours with next steps.
              </p>
            </div>

            {submitted ? (
              <div className="form-success">
                <span className="form-success-mark" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <h4>Thank you, {formData.name || "valued client"}.</h4>
                  <p>
                    Your request for <em>{service}</em> has been received. We
                    will contact you shortly at{" "}
                    {formData.phone || formData.email || "your provided details"}.
                  </p>
                  <button type="button" onClick={resetForm}>
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="quoteForm">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your name</label>
                    <div className="field-wrap">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="e.g. Adebisi Mutiu"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <div className="field-wrap">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="e.g. 0703 752 2322"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service required</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={service}
                      onChange={(e) => setServiceChoice(e.target.value)}
                    >
                      <option value="House Painting">House Painting (Interior / Exterior)</option>
                      <option value="Ceiling & POP">Ceiling &amp; POP False Ceiling</option>
                      <option value="3D Wall Panels">3D Wall Panels</option>
                      <option value="Stucco & Plaster">Stucco &amp; Textured Plaster</option>
                      <option value="Wallpaper & Accent Walls">Wallpaper &amp; Accent Walls</option>
                      <option value="Screeding — General Contractor">Screeding — General Contractor</option>
                      <option value="Full Duplex Turnkey Finishing">Full Duplex Turnkey Finishing</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="details">Project details &amp; location</label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    required
                    placeholder="Room count, property size, location, desired start date, or specific finish requirements."
                    value={formData.details}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn btn-dark btn-block">
                    Submit quote request
                    <Arrow size={12} />
                  </button>
                </div>

                <p className="form-legal">
                  By submitting you agree to be contacted about this enquiry.
                  No details are shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
