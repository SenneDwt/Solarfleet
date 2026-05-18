'use client';

export default function SolarCharger() {
  return (
    <div
      className="relative w-full select-none"
      style={{ maxWidth: 440 }}
      aria-label="Animated diagram: solar energy flows from sun through roof panel into a fleet van battery"
      role="img"
    >
      <svg viewBox="0 0 440 540" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <defs>
          {/* Sun gradients */}
          <radialGradient id="sunCore" cx="50%" cy="40%" r="60%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="1" />
            <stop offset="30%"  stopColor="#fff8cc" stopOpacity="1" />
            <stop offset="65%"  stopColor="#ffc800" stopOpacity="1" />
            <stop offset="100%" stopColor="#ff9f00" stopOpacity="0.85" />
          </radialGradient>
          <radialGradient id="sunAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#ffc800" stopOpacity="0.22" />
            <stop offset="50%"  stopColor="#ffc800" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#ffc800" stopOpacity="0" />
          </radialGradient>

          {/* Battery fill */}
          <linearGradient id="battGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#16a34a" />
            <stop offset="70%"  stopColor="#22c55e" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>

          {/* Solar panel */}
          <linearGradient id="panelGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#0a1628" />
          </linearGradient>

          {/* Van body — slightly lighter at top for depth */}
          <linearGradient id="vanGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#23467e" />
            <stop offset="45%"  stopColor="#1a3464" />
            <stop offset="100%" stopColor="#0c1e44" />
          </linearGradient>

          {/* Van body highlight strip */}
          <linearGradient id="vanSheen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.11" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Filters */}
          <filter id="sunGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="ptGlow" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="panelGlow" x="-10%" y="-20%" width="120%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>

          {/* Battery clip */}
          <clipPath id="battClip">
            <rect x="3" y="3" width="118" height="44" rx="5" />
          </clipPath>
        </defs>

        {/* ── Sun ──────────────────────────────────────────────────── */}
        <g transform="translate(220, 66)">
          {/* Outer pulsing aura */}
          <circle r="72" fill="url(#sunAura)">
            <animate attributeName="r"       values="65;80;65"         dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;1;0.9"        dur="3.2s" repeatCount="indefinite" />
          </circle>

          {/* 8 animated rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = Math.cos(rad) * 36, y1 = Math.sin(rad) * 36;
            const x2 = Math.cos(rad) * 58, y2 = Math.sin(rad) * 58;
            return (
              <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#ffc800" strokeWidth="3.5" strokeLinecap="round">
                <animate attributeName="opacity"      values="0.35;1;0.35"
                  dur="2.1s" begin={`${i * 0.26}s`} repeatCount="indefinite" />
                <animate attributeName="strokeWidth"  values="2;4.2;2"
                  dur="2.1s" begin={`${i * 0.26}s`} repeatCount="indefinite" />
              </line>
            );
          })}

          {/* Sun disc with radial gradient + glow filter */}
          <circle r="29" fill="url(#sunCore)" filter="url(#sunGlow)">
            <animate attributeName="r" values="27;31;27" dur="3.2s" repeatCount="indefinite" />
          </circle>

          {/* Specular highlight */}
          <ellipse cx="-9" cy="-9" rx="9" ry="7" fill="white" opacity="0.18" />
        </g>

        {/* ── Flow line: sun → panel ────────────────────────────────── */}
        <line x1="220" y1="99" x2="220" y2="185"
          stroke="#ffc800" strokeWidth="1.8" strokeDasharray="6 4" opacity="0.55">
          <animate attributeName="strokeDashoffset" values="20;0" dur="0.75s" repeatCount="indefinite" />
        </line>

        {/* ── Energy particles ─────────────────────────────────────── */}
        {[0, 0.85, 1.7].map((delay, i) => (
          <circle key={i} r="5.5" cx="220" fill="#ffc800" filter="url(#ptGlow)">
            <animate attributeName="cy" from="108" to="346"
              dur="2.55s" begin={`${delay}s`} repeatCount="indefinite"
              calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;1" />
            <animate attributeName="opacity" values="0;1;1;0"
              keyTimes="0;0.06;0.88;1"
              dur="2.55s" begin={`${delay}s`} repeatCount="indefinite" />
            <animate attributeName="r" values="3;6;3"
              dur="2.55s" begin={`${delay}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* ── Solar panel ──────────────────────────────────────────── */}
        <g transform="translate(90, 185)">
          {/* Glow behind panel when charging */}
          <rect width="260" height="75" rx="6" fill="#ffc800" opacity="0.04" filter="url(#panelGlow)">
            <animate attributeName="opacity" values="0.03;0.10;0.03" dur="3s" repeatCount="indefinite" />
          </rect>

          <rect width="260" height="75" rx="6" fill="url(#panelGrad)" stroke="#2d4a70" strokeWidth="1.5" />

          {/* Grid lines */}
          {[65, 130, 195].map(x => (
            <line key={x} x1={x} y1="5" x2={x} y2="70" stroke="#1a3556" strokeWidth="1" />
          ))}
          <line x1="5" y1="37" x2="255" y2="37" stroke="#1a3556" strokeWidth="1" />

          {/* Cell fills */}
          {[0, 1, 2, 3].map(col => [0, 1].map(row => (
            <rect key={`${col}-${row}`} x={col * 65 + 5} y={row * 38 + 5}
              width="54" height="27" rx="3" fill="#1a3f6f" opacity="0.7" />
          )))}

          {/* Top sheen */}
          <rect width="260" height="75" rx="6" fill="url(#vanSheen)" />

          <text x="130" y="91" textAnchor="middle" fill="#6b8db5" fontSize="11" fontFamily="system-ui">
            VoltKeep VS-120 · 120W Monocrystalline
          </text>
        </g>

        {/* ── Flow line: panel → van ────────────────────────────────── */}
        <line x1="220" y1="268" x2="220" y2="346"
          stroke="#ffc800" strokeWidth="1.8" strokeDasharray="6 4" opacity="0.45">
          <animate attributeName="strokeDashoffset" values="20;0" dur="0.75s" begin="0.28s" repeatCount="indefinite" />
        </line>

        {/* ── Delivery van ─────────────────────────────────────────── */}
        {/* translate(x, y): x=left margin, y=top of van group */}
        <g transform="translate(25, 326)">

          {/* Ground shadow */}
          <ellipse cx="197" cy="183" rx="186" ry="7.5" fill="#000" opacity="0.13" />

          {/* ── Rear wheel ── */}
          <g transform="translate(80, 155)">
            <circle r="28" fill="#090f1c" stroke="#253650" strokeWidth="2.5" />
            <circle r="21" fill="#0a1628" />
            <circle r="15" fill="#12254a" />
            {[0,60,120,180,240,300].map(a => {
              const r = (a * Math.PI) / 180;
              return <line key={a}
                x1={Math.cos(r)*6} y1={Math.sin(r)*6}
                x2={Math.cos(r)*14} y2={Math.sin(r)*14}
                stroke="#243d68" strokeWidth="2.2" strokeLinecap="round" />;
            })}
            <circle r="5.5" fill="#1a2f52" />
            <circle r="2.5" fill="#253e65" />
          </g>

          {/* ── Front wheel ── */}
          <g transform="translate(314, 155)">
            <circle r="28" fill="#090f1c" stroke="#253650" strokeWidth="2.5" />
            <circle r="21" fill="#0a1628" />
            <circle r="15" fill="#12254a" />
            {[0,60,120,180,240,300].map(a => {
              const r = (a * Math.PI) / 180;
              return <line key={a}
                x1={Math.cos(r)*6} y1={Math.sin(r)*6}
                x2={Math.cos(r)*14} y2={Math.sin(r)*14}
                stroke="#243d68" strokeWidth="2.2" strokeLinecap="round" />;
            })}
            <circle r="5.5" fill="#1a2f52" />
            <circle r="2.5" fill="#253e65" />
          </g>

          {/* ── Van body ──
               Rear: x=12, top=18, bottom=128
               Cargo roof flat to x=278
               Windshield rakes to (340, 56)
               Short cab roof: (340,56)→(366,56)
               Front face: (366,56)→(366,128)
          ── */}
          <path
            d="M 12,128 L 12,18 L 278,18 L 340,56 L 366,56 L 366,128 Z"
            fill="url(#vanGrad)"
            stroke="#243b6a"
            strokeWidth="1.5"
          />

          {/* Body sheen (top highlight) */}
          <path
            d="M 12,18 L 278,18 L 310,36 L 278,28 L 12,28 Z"
            fill="url(#vanSheen)"
          />
          <path
            d="M 278,18 L 340,56 L 366,56 L 366,64 Q 340,60 334,56 L 284,26 Z"
            fill="url(#vanSheen)"
          />

          {/* Cargo / cab divider */}
          <line x1="254" y1="18" x2="254" y2="128" stroke="#162848" strokeWidth="2.5" />

          {/* A-pillar (windshield frame) */}
          <line x1="278" y1="21" x2="338" y2="56" stroke="#162848" strokeWidth="3.5" strokeLinecap="round" />

          {/* Windshield glass */}
          <path d="M 282,22 L 296,22 L 336,55 L 336,122 L 282,122 Z"
            fill="#4a8fd4" opacity="0.22"
            stroke="#5a9fd9" strokeWidth="0.8" strokeOpacity="0.4" />
          {/* Windshield glare */}
          <path d="M 285,26 L 298,26 L 320,42 L 296,42 Z"
            fill="white" opacity="0.07" />

          {/* Rear window */}
          <rect x="16" y="25" width="52" height="38" rx="3"
            fill="#4a8fd4" opacity="0.13" stroke="#5a9fd9" strokeWidth="0.8" strokeOpacity="0.28" />

          {/* Cargo panel surface */}
          <rect x="70" y="25" width="176" height="56" rx="3"
            fill="#172d52" opacity="0.18" stroke="#1e3a6a" strokeWidth="0.8" />

          {/* Sliding door crease */}
          <line x1="176" y1="25" x2="176" y2="120" stroke="#1a3360" strokeWidth="1.5" />
          {/* Door lower panel line */}
          <line x1="70" y1="78" x2="246" y2="78" stroke="#1a3360" strokeWidth="0.8" opacity="0.55" />

          {/* Door handle */}
          <rect x="186" y="86" width="28" height="7" rx="3.5" fill="#1e3254" />
          <rect x="187" y="87" width="10" height="5"  rx="2.5" fill="#283f66" />

          {/* Sill strip */}
          <rect x="12" y="120" width="354" height="8" rx="2" fill="#111f3c" stroke="#1e3360" strokeWidth="0.5" />
          <rect x="12" y="120" width="354" height="3" rx="1" fill="white"   opacity="0.05" />

          {/* Roof rack / rail */}
          <rect x="16" y="13" width="250" height="6" rx="3" fill="#1e3a6a" stroke="#2a4a80" strokeWidth="0.8" />

          {/* Side mirror */}
          <rect x="344" y="44" width="18" height="11" rx="2.5" fill="#162646" stroke="#243b65" strokeWidth="0.8" />
          <rect x="344" y="44" width="18" height="4"  rx="1.5" fill="white" opacity="0.06" />

          {/* Headlight */}
          <rect x="342" y="59" width="22" height="15" rx="3" fill="#ddeeff" opacity="0.88">
            <animate attributeName="opacity" values="0.7;0.95;0.7" dur="2.6s" repeatCount="indefinite" />
          </rect>
          <rect x="342" y="75" width="22" height="4"  rx="2" fill="#aaccff" opacity="0.45" />

          {/* Taillight */}
          <rect x="11" y="72" width="9" height="28" rx="2" fill="#c0392b" opacity="0.7" />
          <rect x="11" y="72" width="9" height="10" rx="2" fill="#ffc800"  opacity="0.5" />

          {/* Front bumper */}
          <rect x="362" y="104" width="14" height="20" rx="4" fill="#0a1628" stroke="#243b65" strokeWidth="0.8" />
          <rect x="362" y="104" width="14" height="5"  rx="2" fill="white"   opacity="0.05" />

          {/* Rear bumper */}
          <rect x="7"   y="112" width="10" height="16" rx="2" fill="#0e1e38" stroke="#243b65" strokeWidth="0.8" />

          {/* Wheel arch recesses */}
          <path d="M 51,128 A 32,12 0 0 1 111,128" fill="#060d1c" opacity="0.6" />
          <path d="M 284,128 A 32,12 0 0 1 344,128" fill="#060d1c" opacity="0.6" />

          {/* Brand text on cargo door */}
          <text x="118" y="58" textAnchor="middle"
            fill="#ffc800" fontSize="8.5" fontWeight="700"
            fontFamily="system-ui, sans-serif" opacity="0.88" letterSpacing="1">VOLTKEEP</text>
          <text x="118" y="69" textAnchor="middle"
            fill="#7a9ab5" fontSize="6.5"
            fontFamily="system-ui" opacity="0.65">VS-120</text>

          {/* ── Battery schematic ── */}
          <g transform="translate(62, 42)">
            {/* Outer casing */}
            <rect width="124" height="50" rx="7"
              fill="none" stroke="#334d70" strokeWidth="1.5" />
            {/* Terminal nub */}
            <rect x="46" y="-8" width="28" height="9" rx="3" fill="#334d70" />
            {/* Inner bg */}
            <rect x="3" y="3" width="118" height="44" rx="5" fill="#06101f" />
            <g clipPath="url(#battClip)">
              <rect x="3" y="3" width="88" height="44" rx="5" fill="url(#battGrad)">
                <animate attributeName="width" values="58;108;58" dur="4.2s" repeatCount="indefinite"
                  calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" keyTimes="0;0.5;1" />
              </rect>
            </g>
            <text x="62" y="31" textAnchor="middle"
              fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui">96%</text>
            <text x="62" y="42" textAnchor="middle"
              fill="rgba(255,255,255,0.6)" fontSize="7.5" fontFamily="system-ui" letterSpacing="0.5">CHARGING</text>
          </g>
        </g>

        {/* ── Status pill ──────────────────────────────────────────── */}
        <g transform="translate(220, 515)">
          <rect x="-82" y="-14" width="164" height="25" rx="12.5"
            fill="#22c55e" opacity="0.10" />
          <rect x="-82" y="-14" width="164" height="25" rx="12.5"
            fill="none" stroke="#22c55e" strokeWidth="0.8" strokeOpacity="0.2" />
          <circle cx="-60" cy="-1.5" r="4" fill="#22c55e">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <text x="6" y="3" textAnchor="middle"
            fill="#22c55e" fontSize="10.5" fontWeight="600" fontFamily="system-ui">
            Battery Healthy · Actively Charging
          </text>
        </g>
      </svg>
    </div>
  );
}
