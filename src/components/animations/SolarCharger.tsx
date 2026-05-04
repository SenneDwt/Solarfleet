'use client';

export default function SolarCharger() {
  return (
    <div
      className="relative w-full select-none"
      style={{ maxWidth: 420 }}
      aria-label="Animated diagram: solar energy flows from sun through roof panel into a fleet car battery"
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
          <linearGradient id="carGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3d70" />
            <stop offset="100%" stopColor="#0d2040" />
          </linearGradient>
          <linearGradient id="carSideGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#243d6e" />
            <stop offset="100%" stopColor="#0f2240" />
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

        {/* ── Dashed flow line: sun → panel ────────────────────── */}
        <line x1="210" y1="96" x2="210" y2="178"
          stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5">
          <animate attributeName="strokeDashoffset" values="18;0" dur="0.8s" repeatCount="indefinite" />
        </line>

        {/* ── Particles: sun → car roof ─────────────────────────── */}
        {[0, 0.8, 1.6].map((delay, i) => (
          <circle key={i} r="5.5" cx="210" fill="#fbbf24" filter="url(#ptGlow)">
            <animate attributeName="cy" from="105" to="335"
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

        {/* ── Dashed flow: panel → car roof ────────────────────── */}
        <line x1="210" y1="260" x2="210" y2="337"
          stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.4">
          <animate attributeName="strokeDashoffset" values="18;0" dur="0.8s" begin="0.3s" repeatCount="indefinite" />
        </line>

        {/* ── Car / Sedan ───────────────────────────────────────── */}
        {/*   Facing right: front = right, rear = left              */}
        <g transform="translate(28, 318)">

          {/* Ground shadow */}
          <ellipse cx="185" cy="174" rx="170" ry="8" fill="#0a1628" opacity="0.18" />

          {/* Wheels (drawn first so body overlaps top of wheel) */}
          {/* Rear wheel */}
          <circle cx="80" cy="148" r="26" fill="#0a1628" stroke="#334155" strokeWidth="2.5" />
          <circle cx="80" cy="148" r="13" fill="#162e52" />
          {[0,60,120,180,240,300].map(a => {
            const rad = (a * Math.PI) / 180;
            return <line key={a}
              x1={80 + Math.cos(rad) * 5} y1={148 + Math.sin(rad) * 5}
              x2={80 + Math.cos(rad) * 12} y2={148 + Math.sin(rad) * 12}
              stroke="#27508a" strokeWidth="1.8" strokeLinecap="round" />;
          })}
          <circle cx="80" cy="148" r="4" fill="#334155" />
          {/* Front wheel */}
          <circle cx="308" cy="148" r="26" fill="#0a1628" stroke="#334155" strokeWidth="2.5" />
          <circle cx="308" cy="148" r="13" fill="#162e52" />
          {[0,60,120,180,240,300].map(a => {
            const rad = (a * Math.PI) / 180;
            return <line key={a}
              x1={308 + Math.cos(rad) * 5} y1={148 + Math.sin(rad) * 5}
              x2={308 + Math.cos(rad) * 12} y2={148 + Math.sin(rad) * 12}
              stroke="#27508a" strokeWidth="1.8" strokeLinecap="round" />;
          })}
          <circle cx="308" cy="148" r="4" fill="#334155" />

          {/* ── Car body silhouette (sedan profile) ──────────────── */}
          {/* Lower body / door sills */}
          <path
            d="M 16,120 L 16,98 Q 17,88 28,86 L 48,80 L 62,62 L 88,26 L 116,14 L 306,14 L 320,26 L 340,60 L 356,80 L 366,86 Q 372,88 372,98 L 372,120 L 16,120 Z"
            fill="url(#carGrad)" stroke="#27508a" strokeWidth="1.5"
          />

          {/* Roof highlight strip */}
          <rect x="116" y="14" width="190" height="5" rx="2" fill="#2a4e85" opacity="0.5" />

          {/* Windshield (front / right) */}
          <path
            d="M 306,14 L 320,26 L 340,60 L 306,60 Z"
            fill="#60a5fa" opacity="0.22" stroke="#60a5fa" strokeWidth="0.8" strokeOpacity="0.4"
          />

          {/* Rear window (back / left) */}
          <path
            d="M 116,14 L 88,26 L 62,62 L 116,62 Z"
            fill="#60a5fa" opacity="0.16" stroke="#60a5fa" strokeWidth="0.8" strokeOpacity="0.3"
          />

          {/* Side glass (centre cabin) */}
          <rect x="120" y="18" width="182" height="42" rx="3"
            fill="#60a5fa" opacity="0.12" stroke="#60a5fa" strokeWidth="0.8" strokeOpacity="0.2" />

          {/* Door divider */}
          <line x1="210" y1="62" x2="210" y2="120" stroke="#1e3d70" strokeWidth="1.5" />

          {/* Door handles */}
          <rect x="222" y="94" width="22" height="6" rx="3" fill="#334155" />
          <rect x="145" y="94" width="22" height="6" rx="3" fill="#334155" />

          {/* Headlight (front/right) */}
          <rect x="356" y="74" width="16" height="8" rx="3" fill="#fef08a" opacity="0.9">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" />
          </rect>

          {/* Taillight (rear/left) */}
          <rect x="16" y="74" width="12" height="8" rx="2" fill="#ef4444" opacity="0.65" />

          {/* Front bumper grille */}
          <rect x="368" y="88" width="9" height="16" rx="2" fill="#0a1628" stroke="#334155" strokeWidth="0.8" />

          {/* Rear bumper bar */}
          <rect x="11" y="100" width="10" height="14" rx="2" fill="#0f2240" stroke="#334155" strokeWidth="0.8" />

          {/* Solar panel mount strip on roof */}
          <rect x="108" y="10" width="208" height="5" rx="2.5" fill="#1a3360" stroke="#334155" strokeWidth="0.8" />

          {/* VoltKeep badge on door */}
          <text x="186" y="82" textAnchor="middle" fill="#f59e0b" fontSize="7.5" fontWeight="700" fontFamily="system-ui" opacity="0.9">VOLTKEEP</text>
          <text x="186" y="94" textAnchor="middle" fill="#8ba6c4" fontSize="6" fontFamily="system-ui" opacity="0.6">VS-120</text>

          {/* Wheel arch recesses (drawn over body to show arch) */}
          <path d="M 50,120 A 32,14 0 0 1 110,120" fill="#0a1628" opacity="0.35" />
          <path d="M 278,120 A 32,14 0 0 1 338,120" fill="#0a1628" opacity="0.35" />

          {/* ── Battery (inside car, overlaid on body) ──────────── */}
          <g transform="translate(118, 68)">
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
