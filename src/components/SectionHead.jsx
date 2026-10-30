export default function SectionHead({ index, eyebrow, title, desc, note }) {
  return (
    <div className="sec-head">
      <div className="sec-head-main">
        <span className="eyebrow reveal-item" data-stagger="0">
          {index ? `${index} — ` : ""}
          {eyebrow}
        </span>
        <h2 className="sec-title reveal-item" data-stagger="1">{title}</h2>
      </div>
      <div className="sec-aside">
        {desc && <p className="sec-desc reveal-item" data-stagger="2">{desc}</p>}
        {note && <span className="sec-note reveal-item" data-stagger="3">{note}</span>}
      </div>
    </div>
  );
}
