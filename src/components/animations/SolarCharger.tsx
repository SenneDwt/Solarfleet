'use client';

export default function SolarCharger() {
  return (
    <div
      className="relative w-full select-none"
      style={{ maxWidth: 420 }}
      aria-label="Animated diagram: solar energy flows from sun through roof panel into a fleet van battery"
      role="img"
    >
      <svg
        viewBox="0 0 420 520"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="battGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#16a34a" />
            <stop offset="70%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
          <linearGradient id="panelGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#0a1628" />
          </linearGradient>
          <linearGradient id="vanGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3d70" />
            <stop offset="100%" stopColor="#0d2040" />
          </linearGradient>
          <filter id="sunGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="ptGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <clipPath id="battClip">
            <rect x="3" y="3" width="120" height="44" rx="5" />
          </clipPath>
        </defs>

        {/* ── Sun ─────────────────────────────────────────────── */}
        <g transform="translate(210, 62)">
          <circle r="52" fill="#f59e0b" opacity="0.06">
            <animate attributeName="r" values="48;56;48" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.06;0.10;0.06" dur="3s" repeatCount="indefinite" />
          </circle>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = Math.cos(rad) * 38, y1 = Math.sin(rad) * 38;
            const x2 = Math.cos(rad) * 58, y2 = Math.sin(rad) * 58;
            return (
              <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3"
                  dur="2s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
                <animate attributeName="strokeWidth" values="2.5;4;2.5"
                  dur="2s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
              </line>
            );
          })}
          <circle r="30" fill="#f59e0b" filter="url(#sunGlow)">
            <animate attributeName="r" values="28;31;28" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="-8" cy="-8" r="8" fill="white" opacity="0.15" />
        </g>

        {/* ── Dashed flow: sun → panel ──────────────────────────── */}
        <line x1="210" y1="96" x2="210" y2="178"
          stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5">
          <animate attributeName="strokeDashoffset" values="18;0" dur="0.8s" repeatCount="indefinite" />
        </line>

        {/* ── Energy particles: sun → van roof ─────────────────── */}
        {[0, 0.8, 1.6].map((delay, i) => (
          <circle key={i} r="5.5" cx="210" fill="#fbbf24" filter="url(#ptGlow)">
            <animate attributeName="cy" from="105" to="336"
              dur="2.4s" begin={`${delay}s`} repeatCount="indefinite" calcMode="spline"
              keySplines="0.4 0 0.6 1" keyTimes="0;1" />
            <animate attributeName="opacity" values="0;1;1;0"
              keyTimes="0;0.06;0.88;1" dur="2.4s" begin={`${delay}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* ── Solar panel ──────────────────────────────────────── */}
        <g transform="translate(80, 178)">
          <rect width="260" height="75" rx="6" fill="url(#panelGrad)" stroke="#334155" strokeWidth="1.5">
            <animate attributeName="filter" values="none;drop-shadow(0 0 6px #f59e0b40);none"
              dur="3s" repeatCount="indefinite" />
          </rect>
          {[65, 130, 195].map(x => (
            <line key={x} x1={x} y1="6" x2={x} y2="69" stroke="#1e3a5f" strokeWidth="1" />
          ))}
          <line x1="6" y1="37" x2="254" y2="37" stroke="#1e3a5f" strokeWidth="1" />
          {[0, 1, 2, 3].map(col => [0, 1].map(row => (
            <rect key={`${col}-${row}`} x={col * 65 + 6} y={row * 38 + 6}
              width="53" height="25" rx="3" fill="#1a3f6f" opacity="0.7" />
          )))}
          <text x="130" y="90" textAnchor="middle" fill="#8ba6c4" fontSize="11" fontFamily="system-ui">
            VoltKeep VS-120 · 120W Monocrystalline
          </text>
        </g>

        {/* ── Dashed flow: panel → van roof ────────────────────── */}
        <line x1="210" y1="260" x2="210" y2="337"
          stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.4">
          <animate attributeName="strokeDashoffset" values="18;0" dur="0.8s" begin="0.3s" repeatCount="indefinite" />
        </line>

        {/* ── Cargo van (delivery van / Transit style) ──────────── */}
        {/* Faces right, front on right, rear on left */}
        <g transform="translate(28, 318)">

          {/* Ground shadow */}
          <ellipse cx="188" cy="176" rx="170" ry="8" fill="#0a1628" opacity="0.18" />

          {/* Rear wheel */}
          <circle cx="82" cy="150" r="26" fill="#0a1628" stroke="#334155" strokeWidth="2.5" />
          <circle cx="82" cy="150" r="13" fill="#162e52" />
          {[0,60,120,180,240,300].map(a => {
            const rad = (a * Math.PI) / 180;
            return <line key={a}
              x1={82 + Math.cos(rad) * 5} y1={150 + Math.sin(rad) * 5}
              x2={82 + Math.cos(rad) * 12} y2={150 + Math.sin(rad) * 12}
              stroke="#27508a" strokeWidth="1.8" strokeLinecap="round" />;
          })}
          <circle cx="82" cy="150" r="4" fill="#334155" />

          {/* Front wheel */}
          <circle cx="308" cy="150" r="26" fill="#0a1628" stroke="#334155" strokeWidth="2.5" />
          <circle cx="308" cy="150" r="13" fill="#162e52" />
          {[0,60,120,180,240,300].map(a => {
            const rad = (a * Math.PI) / 180;
            return <line key={a}
              x1={308 + Math.cos(rad) * 5} y1={150 + Math.sin(rad) * 5}
              x2={308 + Math.cos(rad) * 12} y2={150 + Math.sin(rad) * 12}
              stroke="#27508a" strokeWidth="1.8" strokeLinecap="round" />;
          })}
          <circle cx="308" cy="150" r="4" fill="#334155" />

          {/* === Van body: flat-roof delivery van profile === */}
          {/*
              Flat cargo roof from rear (x=12) to x=290.
              Windshield rakes from (290,18) down to (350,52).
              Short hood ledge: (350,52) → (368,52).
              Vertical front face: (368,52) → (368,124).
              Flat bottom closes the path.
          */}
          <path
            d="M 12,124 L 12,18 L 290,18 L 350,52 L 368,52 L 368,124 Z"
            fill="url(#vanGrad)"
            stroke="#27508a"
            strokeWidth="1.5"
          />

          {/* Cargo / cab divider */}
          <line x1="264" y1="18" x2="264" y2="124" stroke="#152e5a" strokeWidth="2" />

          {/* Windshield glass */}
          <path
            d="M 270,22 L 288,22 L 347,52 L 347,118 L 270,118 Z"
            fill="#60a5fa"
            opacity="0.20"
            stroke="#60a5fa"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />

          {/* Rear side window */}
          <rect x="16" y="24" width="52" height="38" rx="3"
            fill="#60a5fa" opacity="0.12" stroke="#60a5fa" strokeWidth="0.8" strokeOpacity="0.25" />

          {/* Cargo panel area */}
          <rect x="72" y="24" width="184" height="58" rx="3"
            fill="#172d52" opacity="0.20" stroke="#1a3360" strokeWidth="0.8" />

          {/* Sliding door vertical crease */}
          <line x1="180" y1="24" x2="180" y2="118" stroke="#1a3360" strokeWidth="1.2" />

          {/* Door handle */}
          <rect x="190" y="84" width="26" height="7" rx="3.5" fill="#334155" />
          <rect x="191" y="85" width="8" height="5" rx="2.5" fill="#475569" />

          {/* Headlight (front/right) */}
          <path d="M 350,56 L 366,56 L 366,68 L 350,68 Z" rx="2"
            fill="#fef08a" opacity="0.85">
            <animate attributeName="opacity" values="0.65;0.95;0.65" dur="2.5s" repeatCount="indefinite" />
          </path>
          {/* DRL accent below headlight */}
          <rect x="350" y="70" width="16" height="4" rx="1" fill="#fef08a" opacity="0.40" />

          {/* Taillight (rear/left) */}
          <rect x="12" y="72" width="9" height="26" rx="2" fill="#ef4444" opacity="0.65" />
          <rect x="12" y="72" width="9" height="10" rx="2" fill="#fbbf24" opacity="0.45" />

          {/* Front bumper */}
          <rect x="364" y="102" width="14" height="18" rx="3" fill="#0a1628" stroke="#334155" strokeWidth="0.8" />

          {/* Rear bumper */}
          <rect x="8" y="110" width="10" height="16" rx="2" fill="#0f2240" stroke="#334155" strokeWidth="0.8" />

          {/* Wheel arch recesses */}
          <path d="M 54,124 A 32,13 0 0 1 112,124" fill="#0a1628" opacity="0.50" />
          <path d="M 280,124 A 32,13 0 0 1 338,124" fill="#0a1628" opacity="0.50" />

          {/* Sill strip */}
          <rect x="12" y="116" width="356" height="8" rx="2" fill="#0d1e3a" stroke="#1a3360" strokeWidth="0.5" />

          {/* Solar panel mount rail on flat roof */}
          <rect x="16" y="14" width="260" height="5" rx="2.5" fill="#1a3360" stroke="#334155" strokeWidth="0.8" />

          {/* Brand lettering on cargo door */}
          <text x="126" y="60" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="700" fontFamily="system-ui" opacity="0.9">VOLTKEEP</text>
          <text x="126" y="70" textAnchor="middle" fill="#8ba6c4" fontSize="6" fontFamily="system-ui" opacity="0.6">VS-120</text>

          {/* === Battery schematic inside cargo area === */}
          <g transform="translate(70, 46)">
            <rect width="126" height="50" rx="7" fill="none" stroke="#475569" strokeWidth="2" />
            <rect x="48" y="-9" width="28" height="10" rx="3" fill="#475569" />
            <rect x="3" y="3" width="120" height="44" rx="5" fill="#0a1628" />
            <g clipPath="url(#battClip)">
              <rect x="3" y="3" width="86" height="44" rx="5" fill="url(#battGrad)">
                <animate attributeName="width" values="60;108;60" dur="4s" repeatCount="indefinite"
                  calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" keyTimes="0;0.5;1" />
              </rect>
            </g>
            <text x="63" y="31" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="system-ui">96%</text>
            <text x="63" y="43" textAnchor="middle" fill="white" fontSize="8" opacity="0.7" fontFamily="system-ui">CHARGING</text>
          </g>
        </g>

        {/* ── Status indicator ─────────────────────────────────── */}
        <g transform="translate(210, 500)">
          <rect x="-78" y="-13" width="156" height="23" rx="11.5" fill="#22c55e" opacity="0.12" />
          <circle cx="-58" cy="-1.5" r="4" fill="#22c55e">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <text x="0" y="3" textAnchor="middle" fill="#22c55e" fontSize="10.5" fontWeight="600" fontFamily="system-ui">
            Battery Healthy · Actively Charging
          </text>
        </g>
      </svg>
    </div>
  );
}
