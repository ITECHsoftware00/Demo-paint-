export default function TopBanner() {
  return (
    <div className="top-banner">
      <div className="container top-banner-inner">
        <div className="top-banner-badge">
          <span className="pulse-dot" />
          <span>Open today — quick response on every enquiry</span>
        </div>
        <div className="top-banner-contacts">
          <a href="tel:07037522322" className="top-banner-link">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.1-.27c1.2.49 2.5.75 3.9.75a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1c-9.4 0-17-7.6-17-17a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.36.26 2.68.75 3.89a1 1 0 0 1-.27 1.11l-2.2 2.2Z" />
            </svg>
            0703 752 2322
          </a>
          <span className="top-banner-sep" aria-hidden="true" />
          <a href="tel:08161220276" className="top-banner-link top-banner-phone-alt">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.1-.27c1.2.49 2.5.75 3.9.75a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1c-9.4 0-17-7.6-17-17a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.36.26 2.68.75 3.89a1 1 0 0 1-.27 1.11l-2.2 2.2Z" />
            </svg>
            0816 122 0276
          </a>
          <span className="top-banner-sep top-banner-email" aria-hidden="true" />
          <a
            href="mailto:adebisimutiu021@gmail.com"
            className="top-banner-link top-banner-email"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <rect x="2.5" y="4.5" width="19" height="15" />
              <path d="m3 5.5 9 7 9-7" />
            </svg>
            adebisimutiu021@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
