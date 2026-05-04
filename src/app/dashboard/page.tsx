'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import BatteryIndicator from '@/components/animations/BatteryIndicator';
import { VEHICLES } from '@/lib/constants';
import type { Vehicle } from '@/types';

type Status = 'good' | 'warning' | 'critical';
type PanelStatus = 'active' | 'standby' | 'offline';

const STATUS_LABELS: Record<Status, { label: string; badgeVariant: 'green' | 'amber' | 'red' }> = {
  good:     { label: 'Healthy',  badgeVariant: 'green' },
  warning:  { label: 'Monitor',  badgeVariant: 'amber' },
  critical: { label: 'Critical', badgeVariant: 'red'   },
};

const PANEL_LABELS: Record<PanelStatus, { label: string; color: string }> = {
  active:  { label: 'Generating', color: '#22c55e' },
  standby: { label: 'Standby',    color: '#eab308' },
  offline: { label: 'Offline',    color: '#ef4444' },
};

function jitter(v: number, range: number, min = 0, max = 100) {
  return Math.min(max, Math.max(min, v + (Math.random() - 0.5) * range));
}

export default function DashboardPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(VEHICLES);
  const [filter, setFilter] = useState<'all' | Status>('all');
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const tick = useCallback(() => {
    setVehicles(prev => prev.map(v => {
      const newVoltage = Math.round(jitter(v.batteryVoltage * 100, 4, 1150, 1280)) / 100;
      const newHealth = Math.round(jitter(v.batteryHealth, 1.5));
      const newInput = v.panelStatus === 'offline' ? 0 : Math.max(0, Math.round(jitter(v.solarInput, 5)));
      const newStatus: Status = newVoltage >= 12.4 ? 'good' : newVoltage >= 12.0 ? 'warning' : 'critical';
      return { ...v, batteryVoltage: newVoltage, batteryHealth: newHealth, solarInput: newInput, status: newStatus };
    }));
    setLastUpdate(new Date());
  }, []);

  useEffect(() => {
    const id = setInterval(tick, 5000);
    return () => clearInterval(id);
  }, [tick]);

  const filtered = filter === 'all' ? vehicles : vehicles.filter(v => v.status === filter);
  const counts = {
    good:     vehicles.filter(v => v.status === 'good').length,
    warning:  vehicles.filter(v => v.status === 'warning').length,
    critical: vehicles.filter(v => v.status === 'critical').length,
  };
  const avgVoltage = (vehicles.reduce((a, v) => a + v.batteryVoltage, 0) / vehicles.length).toFixed(2);
  const avgHealth = Math.round(vehicles.reduce((a, v) => a + v.batteryHealth, 0) / vehicles.length);

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Demo banner */}
      <div className="bg-yellow-500/10 border-b border-yellow-600/20 px-4 py-2.5 text-center">
        <p className="text-sm text-yellow-800 dark:text-yellow-300">
          <strong>Fleet Dashboard Demo</strong> — Simulated data updating live every 5 seconds.{' '}
          <Link href="/contact" className="underline hover:text-[var(--amber-text)]">Book a demo</Link> to connect your real fleet.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[var(--fg)]">Battery Health Monitor</h1>
            <p className="text-sm text-[var(--fg-muted)] mt-0.5 flex items-center gap-2">
              {vehicles.length} vehicles
              <span className="inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span>Live — {lastUpdate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
              </span>
            </p>
          </div>
          <Link href="/contact"><Button size="sm">Request Full Access</Button></Link>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <Card className="p-4 col-span-1">
            <div className="text-xs text-[var(--fg-muted)] mb-1">Fleet avg. voltage</div>
            <div className="text-2xl font-extrabold text-[var(--fg)] stat-value">{avgVoltage}V</div>
            <div className="text-[10px] text-green-600 mt-0.5">Normal range: 12.4V+</div>
          </Card>
          <Card className="p-4 col-span-1">
            <div className="text-xs text-[var(--fg-muted)] mb-1">Fleet avg. health</div>
            <div className="text-2xl font-extrabold text-[var(--fg)] stat-value">{avgHealth}%</div>
            <div className="mt-2 battery-bar-track">
              <div className="battery-bar-fill" style={{ width: `${avgHealth}%`, background: '#22c55e' }} />
            </div>
          </Card>
          {(['good', 'warning', 'critical'] as Status[]).map(s => (
            <button
              key={s}
              onClick={() => setFilter(filter === s ? 'all' : s)}
              className={`p-4 rounded-xl border text-left transition-all ${filter === s ? 'border-yellow-500 shadow-md bg-[var(--card-bg)]' : 'border-[var(--card-border)] bg-[var(--card-bg)] hover:border-yellow-400'}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full"
                  style={{ background: s === 'good' ? '#22c55e' : s === 'warning' ? '#eab308' : '#ef4444' }} />
                <span className="text-xs text-[var(--fg-muted)] capitalize">{STATUS_LABELS[s].label}</span>
              </div>
              <div className="text-2xl font-extrabold text-[var(--fg)] stat-value">{counts[s]}</div>
              <div className="text-[10px] text-[var(--fg-muted)]">vehicles</div>
            </button>
          ))}
        </div>

        {/* Critical alert */}
        {counts.critical > 0 && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3">
            <svg className="w-5 h-5 text-red-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <div>
              <div className="text-sm font-semibold text-red-700">
                {counts.critical} vehicle{counts.critical !== 1 ? 's' : ''} with critically low battery voltage
              </div>
              <div className="text-xs text-red-500 mt-0.5">
                {vehicles.filter(v => v.status === 'critical').map(v => v.id).join(', ')} — battery may not start
              </div>
            </div>
          </div>
        )}

        {/* Table */}
        <Card className="overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--card-border)]">
            <h2 className="font-semibold text-[var(--fg)] text-sm">
              Per-Vehicle Battery Status
              {filter !== 'all' && <span className="ml-2 text-xs text-[var(--amber-text)] font-normal">filtered: {filter}</span>}
            </h2>
            {filter !== 'all' && (
              <button onClick={() => setFilter('all')} className="text-xs text-[var(--fg-muted)] hover:text-[var(--amber-text)] transition-colors">
                Show all
              </button>
            )}
          </div>
          <div className="overflow-x-auto">
            <table className="data-table w-full">
              <thead>
                <tr>
                  <th className="pl-6 text-left">Vehicle</th>
                  <th className="text-left">Battery Voltage</th>
                  <th className="text-left">Battery Health</th>
                  <th className="text-left">Solar Panel</th>
                  <th className="text-left">Status</th>
                  <th className="text-left">Location</th>
                  <th className="pr-6 text-left">Days Protected</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(v => {
                  const sc = STATUS_LABELS[v.status as Status];
                  const pc = PANEL_LABELS[v.panelStatus as PanelStatus];
                  const voltColor = v.batteryVoltage >= 12.4 ? '#22c55e' : v.batteryVoltage >= 12.0 ? '#eab308' : '#ef4444';
                  return (
                    <tr key={v.id}>
                      <td className="pl-6">
                        <div className="font-semibold text-sm text-[var(--fg)]">{v.id}</div>
                        <div className="text-xs text-[var(--fg-muted)]">{v.name}</div>
                      </td>
                      <td>
                        <span className="font-bold text-sm tabular-nums" style={{ color: voltColor }}>
                          {v.batteryVoltage.toFixed(2)}V
                        </span>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <BatteryIndicator percentage={v.batteryHealth} size="sm" animated={false} />
                          <span className="text-sm font-semibold text-[var(--fg)] tabular-nums">{v.batteryHealth}%</span>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full" style={{ background: pc.color }} />
                          <span className="text-sm text-[var(--fg-muted)]">{pc.label}</span>
                          {v.panelStatus === 'active' && (
                            <span className="text-xs text-[var(--fg-muted)]">({v.solarInput}W)</span>
                          )}
                        </div>
                      </td>
                      <td>
                        <Badge variant={sc.badgeVariant}>{sc.label}</Badge>
                      </td>
                      <td className="text-sm text-[var(--fg-muted)] max-w-[160px] truncate">{v.location}</td>
                      <td className="pr-6 text-sm font-medium text-[var(--fg)] tabular-nums">{v.daysProtected}d</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Bottom stats */}
        <div className="grid sm:grid-cols-3 gap-5 mt-6">
          <Card className="p-5">
            <div className="text-xs text-[var(--fg-muted)] uppercase tracking-widest mb-3">Fleet battery health (30 days)</div>
            <div className="text-3xl font-extrabold text-green-500 stat-value mb-3">Stable</div>
            <div className="flex gap-1 items-end h-10">
              {Array.from({ length: 30 }, (_, i) => (
                <div key={i} className="flex-1 rounded-sm"
                  style={{ height: `${60 + Math.random() * 40}%`, background: i > 26 ? '#eab308' : '#22c55e', opacity: 0.7 + Math.random() * 0.3 }} />
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-[var(--fg-muted)] mt-1">
              <span>30 days ago</span><span>Today</span>
            </div>
          </Card>
          <Card className="p-5">
            <div className="text-xs text-[var(--fg-muted)] uppercase tracking-widest mb-3">Battery failures prevented</div>
            <div className="text-3xl font-extrabold text-[var(--amber-text)] stat-value">0</div>
            <div className="text-xs text-[var(--fg-muted)] mt-1">since VoltKeep installation</div>
            <div className="mt-4 space-y-2">
              {[
                { label: 'No-start incidents', value: '0' },
                { label: 'Emergency call-outs', value: '0' },
                { label: 'Unplanned replacements', value: '0' },
              ].map(row => (
                <div key={row.label} className="flex justify-between text-xs">
                  <span className="text-[var(--fg-muted)]">{row.label}</span>
                  <span className="text-green-600 font-semibold">{row.value}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-5">
            <div className="text-xs text-[var(--fg-muted)] uppercase tracking-widest mb-3">Vehicles requiring attention</div>
            <div className="text-3xl font-extrabold text-[var(--fg)] stat-value">{counts.warning + counts.critical}</div>
            <div className="text-xs text-[var(--fg-muted)] mt-1">out of {vehicles.length} total</div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[var(--fg-muted)]">Monitoring recommended</span>
                <span className="text-[var(--amber-text)] font-semibold">{counts.warning}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[var(--fg-muted)]">Action required</span>
                <span className="text-red-500 font-semibold">{counts.critical}</span>
              </div>
            </div>
          </Card>
        </div>

        <p className="text-center text-xs text-[var(--fg-muted)] mt-8">
          Demo data only. <Link href="/contact" className="text-[var(--amber-text)] hover:underline">Contact us</Link> to connect your actual fleet.
        </p>
      </div>
    </div>
  );
}
