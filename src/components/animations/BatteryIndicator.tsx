'use client';

import { useEffect, useRef, useState } from 'react';

interface BatteryIndicatorProps {
  percentage: number;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export default function BatteryIndicator({
  percentage,
  size = 'md',
  animated = true,
}: BatteryIndicatorProps) {
  const [displayPct, setDisplayPct] = useState(animated ? 0 : percentage);
  const mounted = useRef(false);

  useEffect(() => {
    if (!animated || mounted.current) return;
    mounted.current = true;
    const timeout = setTimeout(() => setDisplayPct(percentage), 200);
    return () => clearTimeout(timeout);
  }, [animated, percentage]);

  const color =
    displayPct >= 80 ? '#22c55e' : displayPct >= 50 ? '#f59e0b' : displayPct >= 20 ? '#f97316' : '#ef4444';

  const sizes = {
    sm: { w: 40, h: 20, nubW: 4, nubH: 8, r: 3, fontSize: 8 },
    md: { w: 64, h: 30, nubW: 5, nubH: 12, r: 4, fontSize: 10 },
    lg: { w: 96, h: 46, nubW: 7, nubH: 18, r: 6, fontSize: 13 },
  };

  const s = sizes[size];
  const fillWidth = Math.max(0, ((s.w - 6) * displayPct) / 100);

  return (
    <svg
      viewBox={`0 0 ${s.w + s.nubW + 4} ${s.h + 4}`}
      width={s.w + s.nubW + 4}
      height={s.h + 4}
      aria-label={`Battery at ${percentage}%`}
      role="img"
    >
      {/* Body */}
      <rect x="2" y="2" width={s.w} height={s.h} rx={s.r} fill="none" stroke="#475569" strokeWidth="1.5" />
      {/* Terminal nub */}
      <rect
        x={s.w + 2}
        y={2 + (s.h - s.nubH) / 2}
        width={s.nubW}
        height={s.nubH}
        rx="2"
        fill="#475569"
      />
      {/* Fill */}
      <rect
        x="4"
        y="4"
        width={fillWidth}
        height={s.h - 4}
        rx={s.r - 1}
        fill={color}
        style={{ transition: animated ? 'width 1s cubic-bezier(0.34,1.56,0.64,1)' : 'none' }}
      />
      {/* Percentage text (lg only) */}
      {size === 'lg' && (
        <text
          x={s.w / 2 + 2}
          y={s.h / 2 + 5}
          textAnchor="middle"
          fill="white"
          fontSize={s.fontSize}
          fontWeight="700"
          fontFamily="system-ui"
        >
          {displayPct}%
        </text>
      )}
    </svg>
  );
}
