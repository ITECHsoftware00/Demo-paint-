"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { contact } from "../../lib/editorial";
import { siteConfig } from "../../lib/siteConfig";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = [
      "Hello DEMO Paint, I would like a quote.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Project: ${project || "Not specified yet"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="contact" className="px-5 pt-20 sm:px-8 md:pt-28 lg:px-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal
            as="h2"
            variant="mask"
            className="max-w-[14ch] text-[clamp(1.7rem,3vw,2.55rem)] font-medium leading-[1.04] tracking-[-0.03em]"
          >
            {contact.title}
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 max-w-[34ch] text-[16px] leading-[1.6] text-espresso/80">
              {contact.intro}
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-9 space-y-6">
            <div>
              <p className="label text-muted">Call or WhatsApp</p>
              <ul className="mt-2 space-y-1 text-[16px]">
                {siteConfig.phones.map((entry) => (
                  <li key={entry.raw}>
                    <a
                      href={`tel:${entry.raw}`}
                      className="link-sweep transition-colors hover:text-ink"
                    >
                      {entry.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label text-muted">Email</p>
              <p className="mt-2 text-[16px]">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="link-sweep transition-colors hover:text-ink"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
            <div>
              <p className="label text-muted">Studio hours</p>
              <p className="mt-2 text-[16px]">{siteConfig.openingHours}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={60} className="lg:col-span-7 lg:col-start-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <div>
              <label htmlFor="name" className="label text-muted">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Adaeze Okonkwo"
                className="field mt-1"
              />
            </div>

            <div>
              <label htmlFor="phone" className="label text-muted">
                Phone or WhatsApp
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="0803 000 0000"
                className="field mt-1"
              />
            </div>

            <div>
              <label htmlFor="project" className="label text-muted">
                What are we finishing?
              </label>
              <input
                id="project"
                name="project"
                type="text"
                value={project}
                onChange={(event) => setProject(event.target.value)}
                placeholder="Interior repaint, Travertino wall, 4-bedroom duplex…"
                className="field mt-1"
              />
            </div>

            <button
              type="submit"
              className="group mt-2 flex items-center justify-between border-b border-espresso pb-3 text-left text-[16px] transition-opacity hover:opacity-70"
            >
              Send project details
              <span
                aria-hidden="true"
                className="text-[16px] transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </button>

            <p className="text-[13px] text-muted">
              {contact.formNote} Prefer to talk?{" "}
              <a
                href={`tel:${siteConfig.phones[0].raw}`}
                className="underline decoration-line underline-offset-4 hover:text-espresso"
              >
                {siteConfig.phones[0].display}
              </a>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
