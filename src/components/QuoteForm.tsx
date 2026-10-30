"use client";

import { useState } from "react";
import { MessageSquare, Mail, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../lib/siteConfig";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: siteConfig.services[0].title,
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp prefilled message
    const waText = `Hello DEMO Paint, I would like to request a quote:%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(
      formData.phone
    )}%0A*Service:* ${encodeURIComponent(
      formData.service
    )}%0A*Location:* ${encodeURIComponent(
      formData.location
    )}%0A*Message:* ${encodeURIComponent(formData.message)}`;

    const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${waText}`;

    // Open WhatsApp in new tab
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  const handleEmailFallback = () => {
    const subject = encodeURIComponent(`Project Quote Request - ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nLocation: ${formData.location}\n\nProject Details:\n${formData.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F7F4EE] border-t border-[#0B2559]/10" id="quote">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#0B2559] text-white px-4 py-1 rounded-full text-xs font-heading font-extrabold uppercase tracking-widest mb-3">
            GET STARTED
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#0B2559] tracking-tight">
            Request a Free <span className="font-script text-[#0E6B47] text-4xl sm:text-5xl lg:text-6xl font-normal">Quote</span>
          </h2>
          <p className="text-base sm:text-lg text-[#0B2559]/75 mt-3">
            Tell us about your project. Submitting immediately connects you to our specialist on WhatsApp.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#0B2559]/15 shadow-xl">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#0E6B47]/10 text-[#0E6B47] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-[#0B2559]">
                WhatsApp Window Opened!
              </h3>
              <p className="text-sm sm:text-base text-[#0B2559]/80 max-w-md mx-auto">
                Your quote details have been generated. Click send in WhatsApp to start chatting directly with our team.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-[#0B2559] text-white font-heading font-bold rounded-full text-sm"
                >
                  Edit or Submit Another
                </button>
                <button
                  type="button"
                  onClick={handleEmailFallback}
                  className="px-6 py-3 border border-[#0B2559]/30 text-[#0B2559] font-heading font-bold rounded-full text-sm hover:bg-[#0B2559]/5"
                >
                  Send via Email Instead
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-heading font-bold text-[#0B2559] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Adebayo Ogunlesi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-[#0B2559]/20 bg-[#F7F4EE]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E6B47] text-sm text-[#0B2559]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-heading font-bold text-[#0B2559] mb-2">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0703 752 2322"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-[#0B2559]/20 bg-[#F7F4EE]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E6B47] text-sm text-[#0B2559]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-heading font-bold text-[#0B2559] mb-2">
                    Service Required *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-[#0B2559]/20 bg-[#F7F4EE]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E6B47] text-sm text-[#0B2559]"
                  >
                    {siteConfig.services.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-heading font-bold text-[#0B2559] mb-2">
                    Property Location / Area *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lekki Phase 1, Ikeja, or Abuja"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-[#0B2559]/20 bg-[#F7F4EE]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E6B47] text-sm text-[#0B2559]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-heading font-bold text-[#0B2559] mb-2">
                  Project Details & Scope *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about the property type, room count, existing wall condition, and target completion date..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-[#0B2559]/20 bg-[#F7F4EE]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E6B47] text-sm text-[#0B2559]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0E6B47] hover:bg-[#0B2559] text-white font-heading font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageSquare className="w-5 h-5 text-[#EBCB9E]" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailFallback}
                  className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#0B2559] hover:text-[#0E6B47]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Prefer Email? Click Here</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

