interface LogoProps {
  size?: number;
  variant?: 'light' | 'dark';
}

export default function Logo({ size = 80, variant = 'dark' }: LogoProps) {
  const textColor = variant === 'light' ? '#0f1114' : '#fdf9f0';
  const ringColor = variant === 'light' ? '#0f1114' : '#d99a1f';
  const innerColor = variant === 'light' ? '#fdf9f0' : '#1a1c21';

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        className="drop-shadow-md"
      >
        {/* Outer ring */}
        <circle cx="60" cy="60" r="58" fill={ringColor} />
        <circle cx="60" cy="60" r="52" fill="none" stroke={textColor} strokeWidth="1.5" />
        <circle cx="60" cy="60" r="48" fill={innerColor} />

        {/* Decorative dots around the inner circle */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x = 60 + 50 * Math.cos(angle);
          const y = 60 + 50 * Math.sin(angle);
          return <circle key={i} cx={x} cy={y} r="1.2" fill={ringColor} />;
        })}

        {/* Cupcake icon */}
        <g transform="translate(60, 42)">
          {/* Cupcake liner */}
          <path
            d="M -14 0 L 14 0 L 11 20 L -11 20 Z"
            fill={ringColor}
            stroke={ringColor}
            strokeWidth="0.5"
          />
          {/* Liner ridges */}
          <path d="M -9 2 L -7 18 M -3 2 L -3 18 M 3 2 L 3 18 M 9 2 L 7 18" stroke={innerColor} strokeWidth="1" fill="none" />
          {/* Frosting swirl */}
          <path
            d="M -15 0 Q -15 -6 -9 -8 Q -8 -14 -2 -12 Q 0 -18 4 -14 Q 10 -14 12 -8 Q 16 -4 14 0 Z"
            fill={ringColor}
            opacity="0.85"
          />
          {/* Cherry on top */}
          <circle cx="0" cy="-14" r="3" fill="#c0241f" />
          <path d="M 0 -17 Q 2 -21 5 -20" stroke={ringColor} strokeWidth="1.2" fill="none" />
        </g>

        {/* "BHURA INDUSTRIES" text along the top arc */}
        <defs>
          <path id="logo-top-arc" d="M 14 60 A 46 46 0 0 1 106 60" fill="none" />
          <path id="logo-bottom-arc" d="M 106 60 A 46 46 0 0 1 14 60" fill="none" />
        </defs>
        <text fill={textColor} fontSize="9" fontWeight="700" letterSpacing="1.5" fontFamily="Source Sans 3, sans-serif">
          <textPath href="#logo-top-arc" startOffset="50%" textAnchor="middle">
            BHURA INDUSTRIES
          </textPath>
        </text>
        <text fill={textColor} fontSize="7" fontWeight="600" letterSpacing="2" fontFamily="Source Sans 3, sans-serif">
          <textPath href="#logo-bottom-arc" startOffset="50%" textAnchor="middle">
            SINCE 1966
          </textPath>
        </text>
      </svg>
    </div>
  );
}
