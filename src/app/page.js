"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Services from "../components/Services";
import FeaturedProject from "../components/FeaturedProject";
import Gallery from "../components/Gallery";
import VideoShowcase from "../components/VideoShowcase";
import CTABand from "../components/CTABand";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";

export default function Home() {
  const [selectedService, setSelectedService] = useState("");

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll-reveal animation
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Services onSelectService={handleSelectService} />
        <FeaturedProject />
        <Gallery />
        <VideoShowcase />
        <CTABand />
        <ContactSection selectedService={selectedService} />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
