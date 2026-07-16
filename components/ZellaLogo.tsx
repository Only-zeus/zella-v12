type ZellaLogoProps = {
  size?: number;
  className?: string;
  label?: string;
};
 
export default function ZellaLogo({
  size = 38,
  className = "",
  label,
}: ZellaLogoProps) {
  return (
    <span
      className={`brand-symbol ${className}`}
      style={{ width: size, height: size }}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
    >
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <defs>
          <linearGradient
            id="zella-logo-gradient"
            x1="7"
            y1="7"
            x2="41"
            y2="41"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#66A3FF" />
            <stop offset="0.48" stopColor="#24D9FF" />
            <stop offset="1" stopColor="#A66BFF" />
          </linearGradient>
        </defs>
 
        <path
          d="M13.25 8.5H39L26.9 23.25H37.5L17.4 40H8.5L21.15 24.8H10.5L25.4 8.5H13.25Z"
          fill="url(#zella-logo-gradient)"
        />
      </svg>
    </span>
  );
}