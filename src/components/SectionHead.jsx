export default function SectionHead({ index, eyebrow, title, desc, note }) {
  return (
    <div className="sec-head reveal">
      <div className="sec-head-main">
        <span className="eyebrow">
          {index ? `${index} — ` : ""}
          {eyebrow}
        </span>
        <h2 className="sec-title">{title}</h2>
      </div>
      <div className="sec-aside reveal reveal-delay-1">
        {desc && <p className="sec-desc">{desc}</p>}
        {note && <span className="sec-note">{note}</span>}
      </div>
    </div>
  );
}
