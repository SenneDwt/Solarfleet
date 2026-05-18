import type { Metadata } from 'next';
import Link from 'next/link';
import SolarCharger from '@/components/animations/SolarCharger';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import RevealSection from '@/components/ui/RevealSection';
import FeatureIcon from '@/components/ui/FeatureIcon';
import { FEATURES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'VoltKeep: Fleet Batteries That Never Go Flat',
  description:
    'Flexible solar panel, smart MPPT charger, optional BMS monitoring. Keep every fleet battery fully charged while the vehicle is parked.',
};

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden border-b border-[var(--card-border)]">
        <div className="absolute inset-0 bg-[var(--bg)]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 70% at 5% 60%, rgba(255,200,0,0.14) 0%, transparent 55%), radial-gradient(ellipse 50% 55% at 95% 10%, rgba(255,200,0,0.07) 0%, transparent 50%)',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold leading-[1.12] tracking-tight text-[var(--fg)] mb-7">
                Fleet batteries that <span className="text-[var(--amber)]">start every time.</span>
              </h1>

              <p className="text-lg text-[var(--fg-muted)] leading-relaxed mb-8 max-w-lg">
                A flexible solar panel on the roof feeds a trickle charge to the battery while the vehicle sits. A smart MPPT charger handles any battery type. Add the optional BMS module and you can monitor your entire fleet via 4G.
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
                ].map(s => (
                  <div key={s.label}>
                    <div className="text-2xl font-extrabold text-[var(--navy)] stat-value">{s.n}</div>
                    <div className="text-xs text-[var(--fg-muted)] mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[440px]">
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
                The problem most fleet managers budget for instead of fixing.
              </h2>
              <p className="text-[var(--fg-muted)] max-w-xl text-lg">
                Vehicles sit in the depot over the weekend. Batteries slowly lose charge. Monday morning a driver arrives to a van that won't start, and the day falls apart from there.
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
        <section className="py-24 bg-[var(--bg-secondary)] border-y border-[var(--card-border)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] mb-5">
                  Panel on the roof. Battery never goes flat.
                </h2>
                <p className="text-[var(--fg-muted)] leading-relaxed mb-8">
                  The flexible solar panel feeds a trickle into the battery while the vehicle sits. The MPPT controller handles the chemistry: lead-acid, AGM, gel, EFB, lithium. No overcharging. Battery held at 100%, however long the vehicle is parked.
                </p>
                <div className="space-y-4">
                  {[
                    { title: 'Vehicle is parked', desc: 'Engine off. Battery slowly loses charge through self-discharge and parasitic loads.' },
                    { title: 'Panel generates power', desc: 'Daylight, even winter overcast, hits the panel and produces current.' },
                    { title: 'MPPT charges correctly', desc: 'Right profile for your battery type. No overcharging. Battery stays at 100%.' },
                    { title: 'Driver turns the key', desc: 'The battery is at 100%. The van starts. No boost needed, no fault codes, no lost morning.' },
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
                    ['Overcharge protection', 'Built in, automatic float mode'],
                    ['Weather rating', 'IP67, panel & controller'],
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
        <section className="py-24 bg-[var(--bg)]">
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
                  <div className="w-9 h-9 rounded-xl bg-[var(--amber-soft)] border border-[var(--amber)]/20 flex items-center justify-center mb-4 group-hover:bg-[var(--amber-soft-20)] transition-colors">
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

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="py-24 dark-surface"
        style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1a3a6b 100%)' }}
      >
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
          <p className="text-xs text-[var(--fg-muted)] mt-5 opacity-60">30 minutes. We audit your fleet and show you what changes.</p>
        </div>
      </section>
    </div>
  );
}
