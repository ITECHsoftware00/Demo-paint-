export default function Arrow({ size = 13, className = "" }) {
  return (
    <svg
      className={`arrow ${className}`}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M3 13L13 3M13 3H5.5M13 3V10.5" strokeLinecap="square" />
    </svg>
  );
}
