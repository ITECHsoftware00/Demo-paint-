"use client";

import { MessageSquare } from "lucide-react";
import { siteConfig } from "../lib/siteConfig";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hello DEMO Paint, I saw your website and would like to ask about your painting and finishing services."
  );

  return (
    <aside
      aria-label="Direct contact options"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      <a
        href={`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#0E6B47] hover:bg-[#0B2559] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#0E6B47]/40"
        aria-label="Chat directly on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 text-[#EBCB9E] shrink-0" />
        <span className="hidden sm:inline font-heading font-extrabold text-sm tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}

