export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top reveal">
        <div>
          <h3 className="footer-wordmark">
            DEMO <em>Paint</em>
          </h3>
          <p className="footer-tagline">
            &ldquo;We paint. You relax. We deliver excellence.&rdquo;
          </p>
          <p className="footer-partners">
            Official partner with <span>Armstrong</span> &amp;{" "}
            <span>Slikcoat</span>
          </p>
        </div>

        <div>
          <h4 className="footer-col-title">Navigate</h4>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#transformation">Before &amp; after</a>
            <a href="#gallery">Work</a>
            <a href="#video">Film</a>
          </div>
        </div>

        <div>
          <h4 className="footer-col-title">Get in touch</h4>
          <div className="footer-links">
            <a href="tel:07037522322">0703 752 2322</a>
            <a href="tel:08161220276">0816 122 0276</a>
            <a href="mailto:adebisimutiu021@gmail.com">
              adebisimutiu021@gmail.com
            </a>
            <a href="#contact">Project enquiry</a>
          </div>
        </div>

        <div>
          <h4 className="footer-col-title">Follow</h4>
          <div className="footer-links">
            <a
              href="https://wa.me/2347037522322"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a href="#transformation">Before &amp; after study</a>
            <a href="#video">Project film</a>
            <a href="#home">Back to top</a>
          </div>
        </div>
        </div>
      </div>

      <div className="footer-massive reveal">
        <h2>
          DEMO <em>Paint</em>
        </h2>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} DEMO Paint. All rights reserved.
        </span>
        <span>Quality finishes. Lasting impressions.</span>
      </div>
    </footer>
  );
}
