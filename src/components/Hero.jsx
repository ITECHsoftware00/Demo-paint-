"use client";

export default function Hero() {
  return (
    <section className="hero-bcg-exact" id="home">
      {/* Background: Exact 1-to-1 BCG Mediterranean White Villa Visual */}
      <div className="hero-bcg-bg-wrapper" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/bcg-hero-reference.jpg"
          alt="BCG Building Design Modern Architectural Home"
          className="hero-bcg-bg-img"
        />
        {/* Precise lighting scrims matching the reference site */}
        <div className="hero-bcg-top-scrim" />
        <div className="hero-bcg-bottom-scrim" />
      </div>

      {/* Exact BCG Lower-Left Headline */}
      <div className="hero-bcg-content-wrap">
        <div className="container">
          <h1 className="hero-bcg-exact-headline">
            Designing beautiful homes that
            <br />
            work as well as they look.
          </h1>
        </div>
      </div>
    </section>
  );
}
