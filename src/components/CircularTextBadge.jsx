import { useMemo } from "react";

// Stamp-style circular text with ring band and white text (equal character spacing and optional rotation)
const CircularTextBadge = ({ text = "AI * IMAGE * ENHANCER", size = 120, radius = 44, spin = true, duration = 12, className = "" }) => {
  const label = useMemo(() => Array.from(text), [text]);
  const cx = size / 2;
  const cy = size / 2;
  const rOuter = radius + 12;
  const rInner = radius - 12;
  const rMid = (rOuter + rInner) / 2;
  const thickness = rOuter - rInner;

  return (
    <div className={`fixed top-4 left-4 z-50 select-none pointer-events-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true"
        className={spin ? "animate-spin" : undefined}
        style={spin ? { animationDuration: `${duration}s` } : undefined}
      >
        {/* Black band between rings */}
        <circle cx={cx} cy={cy} r={rMid} fill="none" stroke="#000" strokeWidth={thickness} />
        {/* Thin ring outlines */}
        <circle cx={cx} cy={cy} r={rOuter} fill="none" stroke="#000" strokeWidth="1.5" />
        <circle cx={cx} cy={cy} r={rInner} fill="none" stroke="#000" strokeWidth="1" />

        {/* Equally spaced characters along the band */}
        {label.map((ch, i) => {
          const angle = (360 / label.length) * i; // equal spacing
          return (
            <g key={`${i}-${ch}`} transform={`translate(${cx} ${cy}) rotate(${angle})`}>
              <text
                x="0"
                y={-rMid}
                transform="rotate(90)"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="11"
                fontWeight="700"
                fill="#FFFFFF"
              >
                {ch}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default CircularTextBadge;
