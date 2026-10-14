// Decorative animated vector layer for the hero. Purely visual: hidden from assistive tech and ignores the pointer.
// Same 614 x 546 box as the hero illustration, so it scales with it.
const sparkle = 'M0 -10 C2 -3 3 -2 10 0 C3 2 2 3 0 10 C-2 3 -3 2 -10 0 C-3 -2 -2 -3 0 -10Z'

export default function HeroVector() {
  return (
    <svg className="hero__vector" viewBox="0 0 614 546" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="hv-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f76680" />
          <stop offset="1" stopColor="#57007b" />
        </linearGradient>
        <linearGradient id="hv-warm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffef5e" />
          <stop offset="1" stopColor="#f7936f" />
        </linearGradient>
        <filter id="hv-shadow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="8" stdDeviation="9" floodColor="#57007b" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* slowly rotating dashed orbit with three dots */}
      <g className="hv-orbit">
        <circle cx="307" cy="273" r="255" fill="none" stroke="url(#hv-grad)" strokeOpacity="0.28" strokeWidth="1.5" strokeDasharray="4 9" strokeLinecap="round" />
        <circle cx="562" cy="273" r="8" fill="url(#hv-grad)" />
        <circle cx="179.500" cy="493.800" r="6" fill="url(#hv-warm)" />
        <circle cx="179.500" cy="52.200" r="5" fill="url(#hv-grad)" />
      </g>

      {/* meshing gears, bottom-left */}
      <g transform="translate(58 462)">
        <g className="hv-spin">
          <circle r="21" fill="none" stroke="url(#hv-grad)" strokeWidth="8" strokeDasharray="8.250 8.250" />
          <circle r="14" fill="none" stroke="url(#hv-grad)" strokeWidth="4" />
          <circle r="4.500" fill="url(#hv-grad)" />
        </g>
      </g>
      <g transform="translate(103 494)">
        <g className="hv-spin-rev">
          <circle r="13" fill="none" stroke="url(#hv-warm)" strokeWidth="6" strokeDasharray="6.800 6.800" />
          <circle r="8.500" fill="none" stroke="url(#hv-warm)" strokeWidth="3" />
          <circle r="3" fill="url(#hv-warm)" />
        </g>
      </g>

      {/* floating code badge, top-right */}
      <g transform="translate(500 22)">
        <g className="hv-float">
          <rect width="76" height="54" rx="14" fill="#fff" stroke="url(#hv-grad)" strokeWidth="2" filter="url(#hv-shadow)" />
          <text x="38" y="35" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="22" fill="url(#hv-grad)">
            {'</>'}
          </text>
        </g>
      </g>

      {/* growing bar-chart badge, bottom-right */}
      <g transform="translate(498 452)">
        <g className="hv-float hv-float--2">
          <rect width="82" height="58" rx="14" fill="#fff" stroke="url(#hv-grad)" strokeWidth="2" filter="url(#hv-shadow)" />
          <g>
            <rect className="hv-bar" x="16" y="26" width="12" height="20" rx="3" fill="url(#hv-grad)" />
            <rect className="hv-bar" x="35" y="14" width="12" height="32" rx="3" fill="url(#hv-grad)" />
            <rect className="hv-bar" x="54" y="21" width="12" height="25" rx="3" fill="url(#hv-warm)" />
          </g>
        </g>
      </g>

      {/* twinkling sparkles */}
      <g transform="translate(36 120)"><path className="hv-twinkle" d={sparkle} fill="url(#hv-warm)" /></g>
      <g transform="translate(588 190) scale(.8)"><path className="hv-twinkle hv-twinkle--2" d={sparkle} fill="url(#hv-grad)" /></g>
      <g transform="translate(330 18) scale(.7)"><path className="hv-twinkle hv-twinkle--3" d={sparkle} fill="url(#hv-warm)" /></g>
      <g transform="translate(262 520) scale(.9)"><path className="hv-twinkle hv-twinkle--2" d={sparkle} fill="url(#hv-grad)" /></g>

      {/* pulsing rings */}
      <circle className="hv-pulse" cx="24" cy="300" r="9" fill="none" stroke="url(#hv-grad)" strokeWidth="2" />
      <circle className="hv-pulse hv-pulse--2" cx="596" cy="372" r="7" fill="none" stroke="url(#hv-warm)" strokeWidth="2" />
    </svg>
  )
}
