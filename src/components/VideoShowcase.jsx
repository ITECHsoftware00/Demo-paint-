import SectionHead from "./SectionHead";
import Arrow from "./Arrow";

export default function VideoShowcase() {
  return (
    <section className="video-section" id="video">
      <div className="container">
        <SectionHead
          index="04"
          eyebrow="On-site film"
          title={
            <>
              The work, <em>in motion.</em>
            </>
          }
          desc="A behind-the-scenes walkthrough of our crew executing surface preparation, screeding and final finish coats."
          note="Recorded on site"
        />

        <div className="video-frame wipe-reveal">
          <div className="video-container">
            <div className="video-badge">
              <span className="rec-dot" aria-hidden="true" />
              <span>Recorded on site</span>
            </div>

            <video
              controls
              playsInline
              preload="metadata"
              poster="/assets/images/duplex-prep.jpeg"
            >
              <source src="/assets/videos/project-showcase.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="video-meta">
            <div>
              <h3 className="video-meta-title">Full project walkthrough</h3>
              <p className="video-meta-sub">
                From raw screeding to the completed architectural duplex.
              </p>
            </div>
            <a
              href="https://wa.me/2348161220276?text=Hello%20DEMO%20Paint,%20I%20watched%20your%20project%20video%20and%20want%20to%20discuss%20my%20building"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              Consult on WhatsApp
              <Arrow size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
