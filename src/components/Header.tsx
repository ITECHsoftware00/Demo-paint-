"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "../lib/siteConfig";
import { LogoMark } from "./DecorativeSVG";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Paints", href: "#paints" },
    { label: "Process", href: "#process" },
    { label: "Gallery", href: "#gallery" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F4EE]/95 backdrop-blur-md shadow-sm border-b border-[#0B2559]/10 py-3"
          : "bg-[#F7F4EE] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0E6B47] rounded-lg"
          >
            <LogoMark className="w-10 h-10 sm:w-11 sm:h-11 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-[#0B2559]">
                  DEMO
                </span>
                <span className="font-script text-[#0E6B47] text-2xl font-bold">
                  Paint
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#0B2559]/70 font-semibold -mt-1">
                Finishing Contractor
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-semibold text-[#0B2559] hover:text-[#0E6B47] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0E6B47] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phones[0].raw}`}
              className="flex items-center gap-2 text-sm font-bold text-[#0B2559] hover:text-[#0E6B47] px-3 py-2 rounded-full border border-[#0B2559]/20 hover:border-[#0E6B47]"
            >
              <Phone className="w-4 h-4 text-[#0E6B47]" />
              <span>{siteConfig.phones[0].display}</span>
            </a>
            <a
              href="#quote"
              className="bg-[#0B2559] hover:bg-[#0E6B47] text-white font-heading font-bold text-sm uppercase tracking-wide px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#0B2559] hover:bg-[#0B2559]/5 focus:outline-none focus:ring-2 focus:ring-[#0E6B47]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 text-[#0B2559]" />
            ) : (
              <Menu className="w-7 h-7 text-[#0B2559]" />
            )}
          </button>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[#0B2559]/10 pb-5 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-bold text-[#0B2559] hover:text-[#0E6B47] py-2 px-3 rounded-lg hover:bg-[#0B2559]/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#0B2559] text-white font-heading font-bold py-3 rounded-xl shadow-md text-base"
              >
                Get a Free Quote
              </a>
              <a
                href={`tel:${siteConfig.phones[0].raw}`}
                className="w-full text-center border-2 border-[#0E6B47] text-[#0E6B47] font-heading font-bold py-2.5 rounded-xl text-base flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call {siteConfig.phones[0].display}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

