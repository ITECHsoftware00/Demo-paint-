"use client";

import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../lib/siteConfig";
import { LogoMark } from "./DecorativeSVG";

export default function Footer() {
  return (
    <footer className="bg-[#0B2559] text-white" id="contact">
      {/* Full-width Navy Contact Bar with Round Green Icons */}
      <div className="bg-[#081B42] border-b border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {/* Phone 1 */}
            <a
              href={`tel:${siteConfig.phones[0].raw}`}
              className="flex items-center gap-4 group p-3 rounded-2xl hover:bg-white/5 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#0E6B47] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-[#EBCB9E]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-white/60 font-semibold block">
                  Primary Line
                </span>
                <span className="font-heading font-extrabold text-base text-white group-hover:text-[#EBCB9E] transition-colors">
                  {siteConfig.phones[0].display}
                </span>
              </div>
            </a>

            {/* Phone 2 */}
            <a
              href={`tel:${siteConfig.phones[1].raw}`}
              className="flex items-center gap-4 group p-3 rounded-2xl hover:bg-white/5 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#0E6B47] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-[#EBCB9E]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-white/60 font-semibold block">
                  Secondary Line
                </span>
                <span className="font-heading font-extrabold text-base text-white group-hover:text-[#EBCB9E] transition-colors">
                  {siteConfig.phones[1].display}
                </span>
              </div>
            </a>

            {/* Phone 3 */}
            <a
              href={`tel:${siteConfig.phones[2].raw}`}
              className="flex items-center gap-4 group p-3 rounded-2xl hover:bg-white/5 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#0E6B47] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-[#EBCB9E]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-white/60 font-semibold block">
                  Office Desk
                </span>
                <span className="font-heading font-extrabold text-base text-white group-hover:text-[#EBCB9E] transition-colors">
                  {siteConfig.phones[2].display}
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 group p-3 rounded-2xl hover:bg-white/5 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#0E6B47] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-[#EBCB9E]" />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs uppercase tracking-wider text-white/60 font-semibold block">
                  Direct Email
                </span>
                <span className="font-heading font-bold text-sm text-white group-hover:text-[#EBCB9E] transition-colors truncate block">
                  {siteConfig.email}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark className="w-10 h-10" />
              <div className="flex items-baseline gap-1">
                <span className="font-heading font-extrabold text-2xl text-white">
                  DEMO
                </span>
                <span className="font-script text-[#EBCB9E] text-2xl">
                  Paint
                </span>
              </div>
            </div>
            <p className="text-white/75 text-sm leading-relaxed max-w-sm mb-6">
              A premium, trustworthy finishing contractor delivering house painting, POP ceilings, Travertino textures, stucco, and screeding across Nigeria.
            </p>
            <p className="font-heading font-bold text-[#EBCB9E] text-base italic mb-4">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#EBCB9E] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li><a href="#services" className="hover:text-[#EBCB9E]">House Painting (Interior & Exterior)</a></li>
              <li><a href="#services" className="hover:text-[#EBCB9E]">POP Ceiling Finishing</a></li>
              <li><a href="#services" className="hover:text-[#EBCB9E]">Travertino Stone Wall Finish</a></li>
              <li><a href="#services" className="hover:text-[#EBCB9E]">Travertino Screeding</a></li>
              <li><a href="#services" className="hover:text-[#EBCB9E]">Italian Stucco & Venetian Plaster</a></li>
              <li><a href="#services" className="hover:text-[#EBCB9E]">3D Sculpted Feature Walls</a></li>
              <li><a href="#services" className="hover:text-[#EBCB9E]">Wallpaper Installation</a></li>
            </ul>
          </div>

          {/* Working Hours & Service Scope */}
          <div className="lg:col-span-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#EBCB9E] mb-4">
              Working Hours & Scope
            </h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#EBCB9E] shrink-0 mt-0.5" />
                <span>{siteConfig.openingHours}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EBCB9E] shrink-0 mt-0.5" />
                <span>Operating across Lagos, Ogun, Ibadan & Abuja (projects on appointment)</span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0E6B47] hover:bg-[#EBCB9E] hover:text-[#0B2559] text-white px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-3">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Designed for Excellence. Built with Code.
          </p>
        </div>
      </div>
    </footer>
  );
}

