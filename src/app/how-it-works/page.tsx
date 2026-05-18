import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import RevealSection from '@/components/ui/RevealSection';

export const metadata: Metadata = {
  title: 'How It Works: VoltKeep',
  description: 'Flexible solar panel, smart MPPT controller for all battery types, optional BMS monitoring. How VoltKeep keeps fleet batteries from going flat.',
};

const STEPS = [
  {
    n: '01',
    title: 'Vehicle parks. Battery starts draining.',
    stat: '5–10%',
    statLabel: 'charge lost per month',
    desc: 'Even with the engine off, alarms, ECUs and central locking draw current. After a week or two, many batteries drop below starting voltage.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Panel converts daylight to current.',
    stat: 'IP67',
    statLabel: 'rain, snow, pressure wash',
    desc: 'The flexible panel sits on the roof and generates power from daylight, not direct sun. Works through Belgian winters.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
  {
    n: '03',
    title: 'MPPT controller charges the right way.',
    stat: '5 types',
    statLabel: 'lead-acid, AGM, gel, EFB, lithium',
    desc: 'The controller picks the correct profile for your battery chemistry automatically. Bulk charges when needed, floats when full, never overcharges.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="16" height="11" rx="2" /><path d="M22 11v3" />
        <path d="M7 11v3" strokeWidth="2.5" />
        <path d="M11 11v3" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    n: '04',
    title: 'Battery stays full. Driver just starts it.',
    stat: '3–5×',
    statLabel: 'longer battery lifespan',
    desc: 'The battery never drops below starting threshold. The driver gets in and goes. No recovery calls, no fault codes, no lost morning.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 border-b border-[var(--card-border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--fg)] mb-5 leading-tight">
              How it works
            </h1>
            <p className="text-[var(--fg-muted)] text-lg">
              Solar panel on the roof. Smart controller in between. Battery never goes flat.
            </p>
          </div>

          {/* Component cards */}
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                n: '01', label: 'Included', variant: 'amber' as const,
                title: 'Flexible Solar Panel',
                desc: 'Mounts without drill holes. Works from diffuse daylight.',
                tags: ['Multiple wattages', 'Foldable', 'IP67'],
                dashed: false,
              },
              {
                n: '02', label: 'Included', variant: 'amber' as const,
                title: 'MPPT Charge Controller',
                desc: 'Correct profile for every battery type. Overcharge protection built in.',
                tags: ['All battery types', 'Float mode', 'IP67'],
                dashed: false,
              },
              {
                n: '03', label: 'Optional', variant: 'muted' as const,
                title: 'BMS Monitoring Module',
                desc: 'SOC, SOH & voltage per vehicle, sent via 4G. No setup.',
                tags: ['4G SIM built-in', 'Real-time alerts', 'Any fleet size'],
                dashed: true,
              },
            ].map(c => (
              <Card key={c.n} className={`p-6 flex flex-col gap-4 ${c.dashed ? 'border-dashed' : ''}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[var(--fg-muted)] tracking-widest">{c.n}</span>
                  <Badge variant={c.variant}>{c.label}</Badge>
                </div>
                <div>
                  <h2 className="font-bold text-[var(--fg)] mb-1.5">{c.title}</h2>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{c.desc}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {c.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-medium text-[var(--fg-muted)] px-2 py-0.5 rounded-full border border-[var(--card-border)]">{tag}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual steps */}
      <RevealSection>
        <section className="py-24 bg-[var(--bg-secondary)] border-y border-[var(--card-border)]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-[var(--fg)]">What happens, step by step</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {STEPS.map((step) => (
                <div key={step.n} className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[var(--shadow-sm)] p-6 flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--amber-soft)] border border-[var(--amber)]/20 flex items-center justify-center text-[var(--amber-text)]">
                    {step.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-bold text-[var(--fg)] text-sm leading-snug">{step.title}</h3>
                      <span className="text-xs text-[var(--fg-muted)] font-medium opacity-40 flex-shrink-0">{step.n}</span>
                    </div>
                    <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-3">{step.desc}</p>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-extrabold text-[var(--amber-text)]">{step.stat}</span>
                      <span className="text-xs text-[var(--fg-muted)]">{step.statLabel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* BMS add-on */}
            <div className="mt-5 rounded-2xl border border-dashed border-[var(--card-border)] shadow-[var(--shadow-sm)] p-6 flex flex-col sm:flex-row gap-5 items-start bg-[var(--card-bg)]">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--amber-soft)] border border-[var(--amber)]/20 flex items-center justify-center text-[var(--amber-text)]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                  <path d="M7 8h.01M12 8h.01M17 8h.01" strokeWidth="2.5" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-[var(--fg)]">Optional: BMS monitoring</h3>
                  <Badge variant="muted">Add-on</Badge>
                </div>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                  Clip a BMS unit to the battery and it starts reporting SOC, SOH and voltage to your fleet dashboard via built-in 4G. Works on 1 vehicle or 1,000. No gateway, no local network, no configuration.
                </p>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Weather visual */}
      <RevealSection>
        <section className="py-24 bg-[var(--bg-secondary)] border-b border-[var(--card-border)]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[var(--fg)] mb-4">Works through Belgian winters.</h2>
                <p className="text-[var(--fg-muted)] leading-relaxed mb-8">
                  The panel generates from diffuse daylight, not direct sun. Even in January it produces enough to offset daily self-discharge. Both components are IP67, built for rain, snow and depot pressure washing.
                </p>
                <div className="space-y-2">
                  {[
                    { condition: 'Full sun', ok: true },
                    { condition: 'Partial cloud', ok: true },
                    { condition: 'Full overcast', ok: true },
                    { condition: 'Heavy rain', ok: true },
                    { condition: 'Night', ok: true },
                    { condition: 'Snow on panel', ok: null },
                  ].map(row => (
                    <div key={row.condition} className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)]">
                      <span className="text-sm font-medium text-[var(--fg)]">{row.condition}</span>
                      {row.ok === true && <Badge variant="green">Maintained</Badge>}
                      {row.ok === null && <Badge variant="muted">Temporary</Badge>}
                    </div>
                  ))}
                </div>
              </div>

              <Card className="p-6">
                <h3 className="font-semibold text-[var(--fg)] mb-5 text-sm">Solar output by month (Antwerp)</h3>
                <div className="space-y-2.5">
                  {[
                    { month: 'Jan', pct: 18 }, { month: 'Feb', pct: 28 },
                    { month: 'Mar', pct: 45 }, { month: 'Apr', pct: 65 },
                    { month: 'May', pct: 82 }, { month: 'Jun', pct: 90 },
                    { month: 'Jul', pct: 92 }, { month: 'Aug', pct: 85 },
                    { month: 'Sep', pct: 67 }, { month: 'Oct', pct: 42 },
                    { month: 'Nov', pct: 22 }, { month: 'Dec', pct: 14 },
                  ].map(({ month, pct }) => (
                    <div key={month} className="flex items-center gap-3">
                      <div className="w-7 text-xs text-[var(--fg-muted)] text-right shrink-0">{month}</div>
                      <div className="flex-1 h-2 rounded-full bg-[var(--card-border)]">
                        <div className="h-2 rounded-full transition-all" style={{
                          width: `${pct}%`,
                          background: pct >= 50 ? '#22c55e' : pct >= 25 ? '#ffc800' : '#f97316',
                        }} />
                      </div>
                      <div className="text-xs font-semibold text-[var(--fg)] w-8 text-right shrink-0">{pct}%</div>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-[var(--fg-muted)] mt-4">Battery stays maintained across all 12 months.</p>
              </Card>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* CTA */}
      <section
        className="py-20 text-center dark-surface"
        style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1a3a6b 100%)' }}
      >
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold text-[var(--fg)] mb-4">See it on a vehicle from your fleet.</h2>
          <p className="text-[var(--fg-muted)] mb-8">30 minutes. Panel, controller, BMS and what it means for your operation.</p>
          <Link href="/contact"><Button size="lg">Book a Demo</Button></Link>
        </div>
      </section>
    </div>
  );
}
