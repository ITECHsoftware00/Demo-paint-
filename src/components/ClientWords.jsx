"use client";

export default function ClientWords() {
  const testimonials = [
    {
      quote:
        "“We approached DEMO to handle the interior Venetian plastering and full exterior weather coatings for our waterfront rebuild. Their problem-solving skills and surface prep are in a league of their own. You can feel the depth of the plaster under changing daylight, and their communication throughout the 8-week build was completely transparent.”",
      author: "David & Claire Henderson",
      role: "Private Homeowners — The Keppel Residence",
    },
    {
      quote:
        "“As general contractors on high-end coastal homes, our biggest headache is trade coordination and patchy finishes that fail under raking light. Working with DEMO was effortless. Their crew turned up on schedule, masked everything immaculately, and delivered knife-edge shadow lines on the ceilings that our architect raved about.”",
      author: "Marcus Vance",
      role: "Managing Director, Vance Architectural Constructions",
    },
    {
      quote:
        "“The gilded marble-effect feature wall in our master retreat exceeded all expectations. It looks like a solid quarried stone slab yet feels warm and organic to the touch. They provided real 30cm sample boards beforehand so we were 100% confident in the sheen and tone before application began.”",
      author: "Elena Rostova",
      role: "Interior Architecture Client — Byron Bay Hinterland",
    },
    {
      quote:
        "“Their dustless vacuum sanding rigs made it possible to renovate our penthouse without contaminating the rest of the unit or triggering building fire alarms. Flawless Level 5 screeding and spotless daily cleanup. We wouldn’t use anyone else.”",
      author: "Julian & Sophie Thorne",
      role: "Penthouse Residents — Main Beach",
    },
  ];

  return (
    <section className="section section-beige" id="words">
      <div className="container">
        <p className="mono-tag" style={{ marginBottom: "1rem" }}>
          06 / Client Words
        </p>

        <div style={{ maxWidth: "700px", marginBottom: "3.5rem" }}>
          <h2>Words from homeowners, architects, and builders.</h2>
        </div>

        <div className="client-words-slider">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <blockquote className="testimonial-quote">
                {t.quote}
              </blockquote>
              <div className="testimonial-author-meta">
                <span className="testimonial-author-name">{t.author}</span>
                <span className="testimonial-author-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

