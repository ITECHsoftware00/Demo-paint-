export default function Partners() {
  return (
    <section className="partners" aria-label="Official paint partners">
      <div className="container partners-inner reveal">
        <span className="partners-label">Official partners</span>

        <div className="partner-list">
          <div className="partner-chip">
            <img
              src="/assets/images/armstrong-logo.png"
              alt="Armstrong Paints"
              className="partner-logo"
            />
            <span className="partner-tag">Certified partner</span>
          </div>

          <div className="partner-chip">
            <svg
              className="partner-shield"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M16 3L6 7.5v8c0 7.2 4.2 13.5 10 15.5 5.8-2 10-8.3 10-15.5v-8L16 3z"
                fill="currentColor"
              />
              <path
                d="M16 9c-2.4 3-4.5 5.8-4.5 8.2 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5c0-2.4-2.1-5.2-4.5-8.2z"
                fill="#f4f4f5"
              />
            </svg>
            <span className="partner-name">Slikcoat</span>
            <span className="partner-tag">RC 1845210</span>
          </div>
        </div>
      </div>
    </section>
  );
}
