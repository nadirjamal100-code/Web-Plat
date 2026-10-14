// Animated vector illustration for the About page hero (replaces the photo).
// An original flat-style scene: a small team collaborating around laptops, with a live dashboard, an idea bulb
// and the site's decorative rings, gears and sparkles, all in the brand colours.
const sparkle = 'M0 -10 C2 -3 3 -2 10 0 C3 2 2 3 0 10 C-2 3 -3 2 -10 0 C-3 -2 -2 -3 0 -10Z'

// [x, y, width, colour] for the "code" lines on the dashboard
const codeLines = [
  [245, 138, 120, '#d9c3e4'],
  [259, 156, 84, '#f76680'],
  [259, 174, 112, '#d9c3e4'],
  [245, 192, 64, '#3d63ea'],
  [259, 210, 100, '#d9c3e4'],
  [245, 228, 90, '#f76680'],
]

export default function AboutHeroVector() {
  return (
    <svg
      className="ap-hero__vector"
      viewBox="0 0 720 560"
      role="img"
      aria-label="Illustration of a team of developers and designers collaborating around laptops, with a dashboard, code and ideas"
    >
      <defs>
        <linearGradient id="av-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f76680" />
          <stop offset="1" stopColor="#57007b" />
        </linearGradient>
        <linearGradient id="av-warm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffef5e" />
          <stop offset="1" stopColor="#f7936f" />
        </linearGradient>
        <pattern id="av-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.6" fill="#57007b" fillOpacity="0.4" />
        </pattern>
        <filter id="av-shadow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="8" stdDeviation="9" floodColor="#57007b" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* ---------- backdrop: rings, dotted grids, soft blob ---------- */}
      <g className="av-orbit">
        <circle cx="360" cy="280" r="332" fill="none" stroke="url(#av-grad)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 9" strokeLinecap="round" />
        <circle cx="692" cy="280" r="9" fill="url(#av-grad)" />
        <circle cx="194" cy="567.500" r="7" fill="url(#av-warm)" />
        <circle cx="194" cy="-7.500" r="5" fill="url(#av-grad)" />
      </g>
      <g className="av-orbit av-orbit--rev">
        <circle cx="360" cy="280" r="296" fill="none" stroke="url(#av-warm)" strokeOpacity="0.55" strokeWidth="1.5" strokeDasharray="2 12" strokeLinecap="round" />
        <circle cx="64" cy="280" r="6" fill="url(#av-warm)" />
        <circle cx="508" cy="536.300" r="5" fill="url(#av-grad)" />
      </g>
      <rect className="av-drift" x="606" y="70" width="108" height="96" fill="url(#av-dots)" />
      <rect className="av-drift av-drift--2" x="6" y="396" width="104" height="96" fill="url(#av-dots)" />

      <circle cx="360" cy="292" r="236" fill="#f3eaf8" />
      <circle cx="360" cy="292" r="236" fill="url(#av-grad)" opacity="0.05" />
      <ellipse cx="360" cy="474" rx="290" ry="20" fill="#e6d9ee" opacity="0.85" />

      <circle className="av-float" cx="700" cy="226" r="16" fill="url(#av-grad)" />
      <circle className="av-float av-float--2" cx="22" cy="140" r="22" fill="url(#av-warm)" />

      {/* ---------- dashboard window ---------- */}
      <g className="av-bob">
        <rect x="225" y="92" width="270" height="178" rx="16" fill="#fff" stroke="url(#av-grad)" strokeWidth="2" filter="url(#av-shadow)" />
        <path d="M225 120 V108 a16 16 0 0 1 16-16 H479 a16 16 0 0 1 16 16 V120 Z" fill="url(#av-grad)" />
        <circle cx="243" cy="106" r="4" fill="#fff" opacity="0.9" />
        <circle cx="258" cy="106" r="4" fill="#fff" opacity="0.9" />
        <circle cx="273" cy="106" r="4" fill="#fff" opacity="0.9" />
        {codeLines.map(([x, y, w, c], i) => (
          <rect key={i} className="av-type" style={{ animationDelay: `${-i * 0.55}s` }} x={x} y={y} width={w} height="8" rx="4" fill={c} />
        ))}
        {/* donut chart */}
        <g transform="rotate(-90 440 195)">
          <g className="av-spin-slow">
            <circle cx="440" cy="195" r="36" fill="none" stroke="#f1e8f6" strokeWidth="14" />
            <circle cx="440" cy="195" r="36" fill="none" stroke="#f76680" strokeWidth="14" strokeDasharray="90.500 135.700" />
            <circle cx="440" cy="195" r="36" fill="none" stroke="#57007b" strokeWidth="14" strokeDasharray="79.200 147" strokeDashoffset="-90.500" />
            <circle cx="440" cy="195" r="36" fill="none" stroke="#ffc65e" strokeWidth="14" strokeDasharray="56.500 169.700" strokeDashoffset="-169.700" />
          </g>
        </g>
        <text x="440" y="200" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="14" fill="#57007b">75%</text>
        <rect x="402" y="244" width="24" height="6" rx="3" fill="#f76680" />
        <rect x="432" y="244" width="24" height="6" rx="3" fill="#57007b" />
        <rect x="462" y="244" width="24" height="6" rx="3" fill="#ffc65e" />
      </g>

      {/* ---------- idea bulb above the dashboard ---------- */}
      <g transform="translate(360 50)">
        <g className="av-glow" stroke="#f7b955" strokeWidth="3" strokeLinecap="round">
          <line x1="0" y1="-24" x2="0" y2="-33" />
          <line x1="12" y1="-20.800" x2="16.500" y2="-28.600" />
          <line x1="-12" y1="-20.800" x2="-16.500" y2="-28.600" />
          <line x1="20.800" y1="-12" x2="28.600" y2="-16.500" />
          <line x1="-20.800" y1="-12" x2="-28.600" y2="-16.500" />
        </g>
        <circle r="16" fill="url(#av-warm)" />
        <path d="M-5 5 L-2 -3 L2 5 L5 -3" fill="none" stroke="#fff" strokeOpacity="0.9" strokeWidth="1.800" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="-7" y="14" width="14" height="7" rx="3" fill="#cbd5e0" />
        <rect x="-5" y="21" width="10" height="4" rx="2" fill="#a0aec0" />
      </g>

      {/* ---------- standing teammate on the left, presenting ---------- */}
      <g>
        <rect x="86" y="350" width="12" height="118" rx="6" fill="#2d3748" />
        <rect x="102" y="350" width="12" height="118" rx="6" fill="#2d3748" />
        <ellipse cx="92" cy="470" rx="12" ry="5" fill="#1a202c" />
        <ellipse cx="110" cy="470" rx="12" ry="5" fill="#1a202c" />
        <rect x="78" y="278" width="44" height="84" rx="20" fill="#ffb35e" />
        <path d="M82 292 L74 336" stroke="#ffb35e" strokeWidth="11" strokeLinecap="round" fill="none" />
        <circle cx="73" cy="341" r="6" fill="#c68a5e" />
        <g className="av-breathe">
          <rect x="94" y="268" width="12" height="12" rx="5" fill="#c68a5e" />
          <circle cx="100" cy="254" r="18" fill="#c68a5e" />
          <path d="M82 252 a18 18 0 0 1 36 0 c-8 -4 -20 -9 -36 0Z" fill="#1f1a24" />
          <circle cx="94" cy="257" r="1.800" fill="#1f1a24" />
          <circle cx="106" cy="257" r="1.800" fill="#1f1a24" />
          <path d="M95 263 q5 4 10 0" fill="none" stroke="#1f1a24" strokeWidth="1.600" strokeLinecap="round" />
        </g>
        <g className="av-wave">
          <path d="M118 292 L170 250" stroke="#ffb35e" strokeWidth="11" strokeLinecap="round" fill="none" />
          <circle cx="174" cy="247" r="6" fill="#c68a5e" />
        </g>
      </g>

      {/* ---------- standing teammate on the right, with a tablet ---------- */}
      <g>
        <rect x="608" y="350" width="12" height="118" rx="6" fill="#2d3748" />
        <rect x="624" y="350" width="12" height="118" rx="6" fill="#2d3748" />
        <ellipse cx="614" cy="470" rx="12" ry="5" fill="#1a202c" />
        <ellipse cx="632" cy="470" rx="12" ry="5" fill="#1a202c" />
        <rect x="600" y="278" width="44" height="84" rx="20" fill="#1fcf93" />
        <path d="M640 292 L646 336" stroke="#1fcf93" strokeWidth="11" strokeLinecap="round" fill="none" />
        <circle cx="647" cy="341" r="6" fill="#f4c7a1" />
        <g className="av-breathe">
          <path d="M602 254 a20 20 0 0 1 40 0 V282 a6 6 0 0 1-6 6 H608 a6 6 0 0 1-6-6Z" fill="#57007b" />
          <rect x="616" y="268" width="12" height="12" rx="5" fill="#f4c7a1" />
          <circle cx="622" cy="254" r="18" fill="#f4c7a1" />
          <path d="M604 252 a18 18 0 0 1 36 0 c-10 -3 -26 -8 -36 0Z" fill="#57007b" />
          <circle cx="616" cy="257" r="1.800" fill="#2d2237" />
          <circle cx="628" cy="257" r="1.800" fill="#2d2237" />
          <path d="M617 263 q5 4 10 0" fill="none" stroke="#2d2237" strokeWidth="1.600" strokeLinecap="round" />
        </g>
        <path d="M604 292 L592 322" stroke="#1fcf93" strokeWidth="11" strokeLinecap="round" fill="none" />
        <rect x="566" y="296" width="30" height="40" rx="5" fill="#fff" stroke="#d9c3e4" strokeWidth="1.500" filter="url(#av-shadow)" />
        <rect x="570" y="300" width="22" height="26" rx="3" fill="url(#av-grad)" opacity="0.9" />
        <rect x="573" y="305" width="14" height="3" rx="1.500" fill="#fff" opacity="0.9" />
        <rect x="573" y="311" width="9" height="3" rx="1.500" fill="#fff" opacity="0.7" />
        <circle cx="591" cy="325" r="6" fill="#f4c7a1" />
      </g>

      {/* ---------- seated teammate, left laptop ---------- */}
      <g className="av-breathe">
        <path d="M227 382 V330 a26 26 0 0 1 26-26 a26 26 0 0 1 26 26 V382 Z" fill="#f76680" />
        <rect x="247" y="296" width="12" height="12" rx="5" fill="#f1c19c" />
        <circle cx="253" cy="284" r="18" fill="#f1c19c" />
        <path d="M235 282 a18 18 0 0 1 36 0 c-8 -4 -20 -9 -36 0Z" fill="#2d2237" />
        <circle cx="247" cy="287" r="1.800" fill="#2d2237" />
        <circle cx="259" cy="287" r="1.800" fill="#2d2237" />
        <path d="M248 293 q5 4 10 0" fill="none" stroke="#2d2237" strokeWidth="1.600" strokeLinecap="round" />
      </g>

      {/* ---------- seated teammate, right laptop ---------- */}
      <g className="av-breathe av-breathe--2">
        <path d="M441 382 V330 a26 26 0 0 1 26-26 a26 26 0 0 1 26 26 V382 Z" fill="#3d63ea" />
        <path d="M447 284 a20 20 0 0 1 40 0 V312 a6 6 0 0 1-6 6 H453 a6 6 0 0 1-6-6Z" fill="#3b2a2a" />
        <rect x="461" y="296" width="12" height="12" rx="5" fill="#8d5a3b" />
        <circle cx="467" cy="284" r="18" fill="#8d5a3b" />
        <path d="M449 282 a18 18 0 0 1 36 0 c-10 -3 -26 -8 -36 0Z" fill="#3b2a2a" />
        <circle cx="461" cy="287" r="1.800" fill="#1f1a24" />
        <circle cx="473" cy="287" r="1.800" fill="#1f1a24" />
        <path d="M462 293 q5 4 10 0" fill="none" stroke="#1f1a24" strokeWidth="1.600" strokeLinecap="round" />
      </g>

      {/* chat bubble from the right teammate */}
      <g className="av-bob av-bob--2">
        <path d="M514 272 L497 288 L526 273 Z" fill="#fff" filter="url(#av-shadow)" />
        <rect x="505" y="244" width="52" height="30" rx="15" fill="#fff" filter="url(#av-shadow)" />
        <circle className="av-dot" cx="521" cy="259" r="3" fill="url(#av-grad)" />
        <circle className="av-dot" style={{ animationDelay: '0.2s' }} cx="531" cy="259" r="3" fill="url(#av-grad)" />
        <circle className="av-dot" style={{ animationDelay: '0.4s' }} cx="541" cy="259" r="3" fill="url(#av-grad)" />
      </g>

      {/* ---------- table ---------- */}
      <rect x="168" y="398" width="10" height="74" rx="3" fill="#3b2a4d" />
      <rect x="542" y="398" width="10" height="74" rx="3" fill="#3b2a4d" />
      <rect x="140" y="380" width="440" height="18" rx="9" fill="url(#av-grad)" />

      {/* laptops */}
      <rect x="213" y="324" width="80" height="52" rx="6" fill="#2d3748" />
      <rect x="218" y="329" width="70" height="42" rx="3" fill="#1a202c" />
      <rect className="av-blink" x="224" y="335" width="34" height="4" rx="2" fill="#f76680" />
      <rect className="av-blink" style={{ animationDelay: '-0.9s' }} x="224" y="344" width="46" height="4" rx="2" fill="#67e0f7" />
      <rect className="av-blink" style={{ animationDelay: '-1.8s' }} x="224" y="353" width="28" height="4" rx="2" fill="#ffef5e" />
      <rect x="203" y="372" width="100" height="8" rx="4" fill="#cbd5e0" />

      <rect x="427" y="324" width="80" height="52" rx="6" fill="#2d3748" />
      <rect x="432" y="329" width="70" height="42" rx="3" fill="#1a202c" />
      <rect className="av-blink" style={{ animationDelay: '-0.5s' }} x="438" y="335" width="40" height="4" rx="2" fill="#24e795" />
      <rect className="av-blink" style={{ animationDelay: '-1.4s' }} x="438" y="344" width="24" height="4" rx="2" fill="#ffef5e" />
      <rect className="av-blink" style={{ animationDelay: '-2.2s' }} x="438" y="353" width="46" height="4" rx="2" fill="#f76680" />
      <rect x="417" y="372" width="100" height="8" rx="4" fill="#cbd5e0" />

      {/* mug with steam, and a small plant */}
      <rect x="322" y="360" width="16" height="20" rx="4" fill="#fff" stroke="#d9c3e4" strokeWidth="1.500" />
      <path d="M338 365 h4 a5 5 0 0 1 0 10 h-4" fill="none" stroke="#d9c3e4" strokeWidth="1.500" />
      <path className="av-steam" d="M327 356 q-3 -5 0 -9 q3 -4 0 -8" fill="none" stroke="#cbd5e0" strokeWidth="1.600" strokeLinecap="round" />
      <path className="av-steam av-steam--2" d="M333 356 q-3 -5 0 -9 q3 -4 0 -8" fill="none" stroke="#cbd5e0" strokeWidth="1.600" strokeLinecap="round" />
      <path d="M375 358 H393 L391 380 H377 Z" fill="#f7936f" />
      <g transform="translate(384 358)">
        <g className="av-sway">
          <ellipse cx="0" cy="-14" rx="6" ry="14" fill="#24e795" />
          <ellipse cx="0" cy="-14" rx="6" ry="14" fill="#1fcf93" transform="rotate(-38)" />
          <ellipse cx="0" cy="-14" rx="6" ry="14" fill="#24e795" transform="rotate(38)" />
        </g>
      </g>

      {/* ---------- foreground details: gears, badge, sparkles, pulses ---------- */}
      <g transform="translate(46 522)">
        <g className="av-spin">
          <circle r="21" fill="none" stroke="url(#av-grad)" strokeWidth="8" strokeDasharray="8.250 8.250" />
          <circle r="14" fill="none" stroke="url(#av-grad)" strokeWidth="4" />
          <circle r="4.500" fill="url(#av-grad)" />
        </g>
      </g>
      <g transform="translate(91 540)">
        <g className="av-spin-rev">
          <circle r="13" fill="none" stroke="url(#av-warm)" strokeWidth="6" strokeDasharray="6.800 6.800" />
          <circle r="8.500" fill="none" stroke="url(#av-warm)" strokeWidth="3" />
          <circle r="3" fill="url(#av-warm)" />
        </g>
      </g>

      <g transform="translate(604 2)">
        <g className="av-float">
          <rect width="76" height="54" rx="14" fill="#fff" stroke="url(#av-grad)" strokeWidth="2" filter="url(#av-shadow)" />
          <text x="38" y="35" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="22" fill="url(#av-grad)">
            {'</>'}
          </text>
        </g>
      </g>

      <g transform="translate(24 232)"><path className="av-twinkle" d={sparkle} fill="url(#av-warm)" /></g>
      <g transform="translate(702 320) scale(.8)"><path className="av-twinkle av-twinkle--2" d={sparkle} fill="url(#av-grad)" /></g>
      <g transform="translate(290 44) scale(.7)"><path className="av-twinkle av-twinkle--3" d={sparkle} fill="url(#av-warm)" /></g>
      <g transform="translate(300 544) scale(.9)"><path className="av-twinkle av-twinkle--2" d={sparkle} fill="url(#av-grad)" /></g>

      <circle className="av-pulse" cx="16" cy="332" r="9" fill="none" stroke="url(#av-grad)" strokeWidth="2" />
      <circle className="av-pulse av-pulse--2" cx="708" cy="440" r="7" fill="none" stroke="url(#av-warm)" strokeWidth="2" />
    </svg>
  )
}
