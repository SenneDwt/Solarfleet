'use client';

const vehicles = [
  { name: 'Transit Alpha', location: 'Depot A · Antwerp', pct: 96 },
  { name: 'Sprinter-01',   location: 'Depot B · Ghent',   pct: 92 },
  { name: 'Daily Express', location: 'Depot A · Antwerp', pct: 94 },
  { name: 'Crafter Heavy', location: 'Brussels',           pct: 76 },
  { name: 'Vivaro North',  location: 'Bruges',             pct: 58 },
];

function barColor(pct: number) {
  if (pct >= 80) return '#22c55e';
  if (pct >= 60) return '#ffc800';
  return '#f87171';
}

function pctColor(pct: number) {
  if (pct >= 80) return '#16a34a';
  if (pct >= 60) return '#92400e';
  return '#dc2626';
}

export default function SolarCharger() {
  return (
    <div className="relative px-5 pt-6 pb-8">

      {/* Floating top-right badge */}
      <div className="absolute top-0 right-0 z-10 bg-[#ffc800] rounded-2xl shadow-[0_4px_20px_rgba(255,200,0,0.45)] px-4 py-2.5">
        <div className="text-sm font-extrabold text-[#0a1628] leading-none">IP67</div>
        <div className="text-[10px] font-semibold text-[#0a1628]/60 mt-0.5">Fully sealed</div>
      </div>

      {/* Main dashboard card */}
      <div className="bg-white rounded-2xl border border-black/[0.07] shadow-[0_24px_56px_rgba(0,0,0,0.11),0_8px_16px_rgba(0,0,0,0.06)] p-5 mt-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#64748b]">
            Fleet Battery Status
          </span>
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-green-700 bg-green-50 border border-green-200/80 rounded-full px-2.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Live
          </span>
        </div>

        {/* Vehicle rows */}
        <div className="space-y-4">
          {vehicles.map((v) => (
            <div key={v.name}>
              <div className="flex items-baseline justify-between mb-1.5">
                <div className="flex items-baseline gap-2 min-w-0">
                  <span className="text-[13px] font-semibold text-[#0f172a] truncate">{v.name}</span>
                  <span className="text-[11px] text-[#94a3b8] shrink-0">{v.location}</span>
                </div>
                <span className="text-[12px] font-bold tabular-nums ml-3 shrink-0" style={{ color: pctColor(v.pct) }}>
                  {v.pct}%
                </span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${v.pct}%`, background: barColor(v.pct) }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-black/[0.05] flex items-center justify-between">
          <span className="text-[11px] text-[#94a3b8]">15 vehicles monitored</span>
          <span className="text-[11px] font-semibold text-green-600">0 incidents today</span>
        </div>
      </div>

      {/* Floating bottom-left stat */}
      <div className="absolute bottom-0 left-0 z-10 bg-white rounded-2xl border border-black/[0.07] shadow-[0_8px_28px_rgba(0,0,0,0.09)] px-4 py-3">
        <div className="text-[22px] font-extrabold text-[#0a1628] tabular-nums leading-none">3–5×</div>
        <div className="text-[11px] text-[#64748b] mt-0.5">longer battery life</div>
      </div>

    </div>
  );
}
