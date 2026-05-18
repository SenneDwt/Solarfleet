import type { Metadata } from 'next';
import Link from 'next/link';
import SolarCharger from '@/components/animations/SolarCharger';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import RevealSection from '@/components/ui/RevealSection';
import FeatureIcon from '@/components/ui/FeatureIcon';
import { FEATURES, CASE_STUDIES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'VoltKeep — Fleet Batteries That Never Go Flat',
  description:
    'Flexible solar panel, smart MPPT charger, optional BMS monitoring. Keep every fleet battery fully charged while the vehicle is parked.',
};

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden border-b border-[var(--card-border)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--amber-light)]/50 via-white to-white" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.75rem] font-extrabold leading-[1.08] tracking-tight text-[var(--fg)] mb-7">
                Your fleet.<br />
                Dead batteries.<br />
                <span className="text-[var(--amber)]">Not anymore.</span>
              </h1>

              <p className="text-lg text-[var(--fg-muted)] leading-relaxed mb-8 max-w-lg">
                A flexible solar panel on the roof. A smart MPPT charger that works with every battery type. Add the optional BMS module and monitor your entire fleet via 4G. Zero flat batteries.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/contact">
                  <Button size="lg">
                    Book a Free Fleet Audit
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button variant="secondary" size="lg">How It Works</Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-8">
                {[
                  { n: '3–5×', label: 'Longer battery lifespan' },
                  { n: 'IP67', label: 'Fully sealed' },
                  { n: '0', label: 'Battery failures at monitored fleets' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="text-2xl font-extrabold text-[var(--navy)] stat-value">{s.n}</div>
                    <div className="text-xs text-[var(--fg-muted)] mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[400px] animate-float">
                <SolarCharger />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────────── */}
      <RevealSection>
        <section className="py-24 bg-[var(--bg)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] mb-4">
                Every fleet has this problem.<br />Most just absorb the cost.
              </h2>
              <p className="text-[var(--fg-muted)] max-w-xl text-lg">
                Vehicles sit in the depot. Batteries self-discharge. Monday morning: vans that won't start, drivers waiting, deliveries missed.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Battery replacement',
                  cost: '€120–180',
                  desc: 'Deep discharge shortens battery life from 4–6 years to 12–18 months. Most fleet batteries are replaced years too early.',
                },
                {
                  title: 'Recovery call-out',
                  cost: '€200–300',
                  desc: 'A technician or recovery vehicle to the depot, per incident. The driver still starts the day late.',
                },
                {
                  title: 'Operational downtime',
                  cost: '€400+/day',
                  desc: 'Missed deliveries, broken schedules, penalty clauses. The battery costs €150. The downtime costs ten times that.',
                },
              ].map(item => (
                <Card key={item.title} className="p-7" hover>
                  <div className="text-2xl font-extrabold text-[var(--amber-text)] mb-1 stat-value">{item.cost}</div>
                  <h3 className="text-base font-bold text-[var(--fg)] mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── Solution overview ────────────────────────────────── */}
      <RevealSection>
        <section className="py-24 border-t border-[var(--card-border)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] mb-5">
                  Panel on the roof. Battery never goes flat.
                </h2>
                <p className="text-[var(--fg-muted)] leading-relaxed mb-8">
                  The flexible solar panel feeds a trickle into the battery while the vehicle sits. The MPPT controller handles the chemistry — lead-acid, AGM, gel, EFB, lithium. No overcharging. Battery held at 100%, however long the vehicle is parked.
                </p>
                <div className="space-y-4">
                  {[
                    { title: 'Vehicle is parked', desc: 'Engine off. Battery slowly loses charge through self-discharge and parasitic loads.' },
                    { title: 'Panel generates power', desc: 'Daylight — even winter overcast — hits the panel and produces current.' },
                    { title: 'MPPT charges correctly', desc: 'Right profile for your battery type. No overcharging. Battery stays at 100%.' },
                    { title: 'Driver turns the key', desc: 'Starts first time. No boost, no call-out, no ECU faults from a dead battery.' },
                  ].map((step, i) => (
                    <div key={step.title} className="flex gap-4 items-start">
                      <div className="w-7 h-7 rounded-full bg-[var(--navy)] flex items-center justify-center text-[var(--amber)] text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-[var(--fg)] text-sm">{step.title}</div>
                        <div className="text-sm text-[var(--fg-muted)]">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/how-it-works">
                    <Button variant="outline">Full Technical Explainer</Button>
                  </Link>
                </div>
              </div>
              <div>
                <Card className="p-7">
                  <div className="text-xs font-semibold text-[var(--fg-muted)] tracking-widest uppercase mb-5">System Specifications</div>
                  {[
                    ['Solar panel', 'Flexible & foldable, multiple wattages'],
                    ['Charge controller', 'MPPT, all battery types'],
                    ['Battery compatibility', 'Lead-acid, AGM, gel, EFB, lithium'],
                    ['Overcharge protection', 'Built in — automatic float mode'],
                    ['Weather rating', 'IP67 — panel & controller'],
                    ['Optional BMS', 'SOC, SOH & voltage monitoring'],
                    ['Connectivity', 'Built-in 4G SIM (BMS option)'],
                    ['Monitoring scale', '1 to unlimited vehicles'],
                    ['Warranty', 'Up to 5 years'],
                  ].map(([k, v]) => (
                    <div key={k as string} className="flex justify-between py-2.5 border-b border-[var(--card-border)] last:border-0 gap-4">
                      <span className="text-sm text-[var(--fg-muted)] flex-shrink-0">{k}</span>
                      <span className="text-sm font-semibold text-[var(--fg)] text-right">{v}</span>
                    </div>
                  ))}
                </Card>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── Features ─────────────────────────────────────────── */}
      <RevealSection>
        <section className="py-24 bg-[var(--bg-secondary)] border-y border-[var(--card-border)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] mb-3">
                Built for depots, not showrooms.
              </h2>
              <p className="text-[var(--fg-muted)] max-w-xl">
                Designed for commercial vehicles that sit. Every component is field-tested for fleet conditions.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {FEATURES.map((feature) => (
                <Card key={feature.title} className="p-5 group" hover>
                  <div className="w-9 h-9 rounded-lg bg-[var(--amber-soft)] border border-[var(--amber)]/20 flex items-center justify-center mb-4 group-hover:bg-[var(--amber-soft-20)] transition-colors">
                    <FeatureIcon name={feature.iconName} size={18} className="text-[var(--amber-text)]" />
                  </div>
                  <h3 className="font-bold text-[var(--fg)] mb-2 text-sm leading-snug">{feature.title}</h3>
                  <p className="text-xs text-[var(--fg-muted)] leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── Case study teasers ────────────────────────────────── */}
      <RevealSection>
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--fg)]">
                Results from the field.
              </h2>
              <p className="text-[var(--fg-muted)] mt-3 max-w-lg">Real numbers from live deployments. No projections.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {CASE_STUDIES.map(cs => (
                <Card key={cs.id} className="p-7 flex flex-col" hover>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[var(--amber-soft)] border border-[var(--amber)]/25 flex items-center justify-center text-[var(--amber-text)] font-bold text-sm">
                      {cs.logo}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[var(--fg)]">{cs.company}</div>
                      <div className="text-xs text-[var(--fg-muted)]">{cs.industry}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="rounded-lg border border-[var(--card-border)] p-3 text-center">
                      <div className="text-xl font-extrabold text-[var(--amber-text)] stat-value">€{(cs.annualSaving / 1000).toFixed(0)}K</div>
                      <div className="text-[10px] text-[var(--fg-muted)] mt-0.5">Saved per year</div>
                    </div>
                    <div className="rounded-lg border border-[var(--card-border)] p-3 text-center">
                      <div className="text-xl font-extrabold text-green-600 stat-value">{cs.roiMonths} mo</div>
                      <div className="text-[10px] text-[var(--fg-muted)] mt-0.5">ROI timeline</div>
                    </div>
                  </div>
                  <blockquote className="text-sm text-[var(--fg-muted)] italic leading-relaxed flex-1 mb-4">
                    &ldquo;{cs.quote}&rdquo;
                  </blockquote>
                  <div className="text-xs text-[var(--fg-muted)]">
                    {cs.quotee}, {cs.quoteeRole}
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/case-studies">
                <Button variant="outline">Read Full Case Studies</Button>
              </Link>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--navy)] dark-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--fg)] mb-5 leading-tight">
            Your next dead battery<br />should be your <span className="text-[var(--amber)]">last one.</span>
          </h2>
          <p className="text-[var(--fg-muted)] text-lg mb-8 max-w-lg mx-auto">
            30-minute call with a fleet specialist. We audit your failure rate and show you what VoltKeep prevents.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Book a Free Fleet Audit</Button>
            </Link>
          </div>
          <p className="text-xs text-[var(--fg-muted)] mt-5 opacity-60">No commitment required.</p>
        </div>
      </section>
    </div>
  );
}
