import type { Metadata } from 'next';
import Link from 'next/link';
import SolarCharger from '@/components/animations/SolarCharger';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import RevealSection from '@/components/ui/RevealSection';
import FeatureIcon from '@/components/ui/FeatureIcon';
import { FEATURES, CASE_STUDIES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'VoltKeep: Fleet Batteries That Never Go Flat',
  description:
    'VoltKeep mounts a solar panel to any fleet vehicle and keeps the 12V battery topped up while it is parked. No more dead batteries. No more vehicles that refuse to start.',
};

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-[var(--bg-secondary)] border-b border-[var(--card-border)]">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 via-white to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_70%_30%,rgba(245,158,11,0.12),transparent_65%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Copy */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.75rem] font-extrabold leading-[1.08] tracking-tight text-[var(--fg)] mb-7">
                Your fleet.<br />
                Dead batteries.<br />
                <span className="text-[var(--amber)]">Not anymore.</span>
              </h1>

              <p className="text-lg text-[var(--fg-muted)] leading-relaxed mb-8">
                VoltKeep attaches a solar panel to any fleet vehicle. While it sits in your depot, airport, or long-stay lot, the panel keeps the 12V battery fully charged. The vehicle starts every time, without fail.
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
                  <Button variant="secondary" size="lg">See How It Works</Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-8">
                {[
                  { n: '120W', label: 'Peak solar panel output' },
                  { n: '3–5×', label: 'Longer battery lifespan' },
                  { n: '45 min', label: 'Installation time' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="text-2xl font-extrabold text-[var(--amber)] stat-value">{s.n}</div>
                    <div className="text-xs text-[var(--fg-muted)] mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Animation */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[400px] animate-float">
                <SolarCharger />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product specs bar ────────────────────────────────── */}
      <section className="bg-[var(--amber)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '120W', label: 'Monocrystalline panel output' },
              { value: 'IP67', label: 'Fully sealed, all conditions' },
              { value: '5 min', label: 'Live battery reporting interval' },
              { value: '5 yr', label: 'Maximum warranty' },
            ].map(stat => (
              <div key={stat.label} className="text-center text-[var(--navy)]">
                <div className="text-3xl sm:text-4xl font-extrabold stat-value tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-medium opacity-70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────────── */}
      <RevealSection>
        <section className="py-24 bg-[var(--bg)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="muted" className="mb-4">The Problem</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] mb-4">
                Every fleet has the same problem.<br />Nobody talks about it.
              </h2>
              <p className="text-[var(--fg-muted)] max-w-2xl mx-auto text-lg">
                Vehicles sit in your depot overnight. Over the weekend. At an airport lot for a week. Quietly, their batteries self-discharge. Monday morning: three vans that will not start.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Battery replacement',
                  cost: '€120–180',
                  desc: 'A battery that is regularly deep-discharged lasts 12–18 months instead of 4–6 years. Most fleets replace batteries far more often than they should.',
                },
                {
                  title: 'Recovery call-out',
                  cost: '€200–300',
                  desc: 'Roadside assistance, a recovery vehicle, or a technician dispatched to a depot. Then the driver still starts late. Per incident, per vehicle.',
                },
                {
                  title: 'Operational downtime',
                  cost: '€400+/day',
                  desc: 'A van that will not start misses deliveries, breaks appointment schedules, and triggers penalty clauses. The battery is cheap. The downtime is not.',
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
        <section className="py-24 bg-[var(--bg-secondary)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="amber" className="mb-5">The Solution</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] mb-5">
                  One panel. Battery never goes flat. Vehicle always starts.
                </h2>
                <p className="text-[var(--fg-muted)] leading-relaxed mb-8">
                  VoltKeep attaches a 120W solar panel to the roof of any fleet vehicle. A smart charge controller continuously feeds a small, steady trickle into the 12V battery, exactly enough to offset natural self-discharge and keep the battery at full charge indefinitely, no matter how long the vehicle sits.
                </p>
                <div className="space-y-4">
                  {[
                    { title: 'Vehicle is parked', desc: 'The engine is off. The battery is slowly losing charge.' },
                    { title: 'Panel generates power', desc: 'Sunlight, even diffuse winter light, hits the panel and produces electricity.' },
                    { title: 'Controller maintains the battery', desc: 'A precise trickle keeps the battery fully charged. It never drops low enough to cause a no-start.' },
                    { title: 'Driver turns the key', desc: 'The vehicle starts. Every time. Without exception.' },
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
                    <Button variant="outline">Full Explainer</Button>
                  </Link>
                </div>
              </div>
              <div>
                <Card className="p-7 border border-[var(--card-border)]">
                  <div className="text-xs font-semibold text-[var(--amber-text)] tracking-widest uppercase mb-5">VS-120 at a Glance</div>
                  {[
                    ['Panel output', '120W peak monocrystalline'],
                    ['Charge controller', 'Smart MPPT, no overcharge risk'],
                    ['Mounting', 'No drill holes, adhesive bond rated 80 km/h'],
                    ['Weather protection', 'IP67, fully sealed, all conditions'],
                    ['Monitoring', 'LTE-M cellular, 5-min reporting intervals'],
                    ['Installation time', '40–60 minutes per vehicle'],
                    ['Vehicle compatibility', 'Any van, truck, or car with metal roof'],
                    ['Warranty', 'Up to 5 years depending on plan'],
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
            <div className="text-center mb-14">
              <Badge variant="amber" className="mb-4">What You Get</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] mb-4">
                Built for the depot, not the showroom.
              </h2>
              <p className="text-[var(--fg-muted)] max-w-xl mx-auto">
                VoltKeep was designed around one question: what does a fleet manager actually need? Not theoretical solar performance, reliable battery protection, every day, on every vehicle.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {FEATURES.map((feature) => (
                <Card key={feature.title} className="p-5 group" hover>
                  <div className="w-9 h-9 rounded-lg bg-yellow-500/10 border border-yellow-600/20 flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
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
        <section className="py-24 bg-[var(--bg)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="muted" className="mb-4">Proven Results</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--fg)]">
                Fleets that stopped losing sleep over dead batteries.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {CASE_STUDIES.map(cs => (
                <Card key={cs.id} className="p-7 flex flex-col" hover>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/15 border border-yellow-600/25 flex items-center justify-center text-[var(--amber-text)] font-bold text-sm">
                      {cs.logo}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[var(--fg)]">{cs.company}</div>
                      <div className="text-xs text-[var(--fg-muted)]">{cs.industry}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="rounded-lg bg-[var(--bg-secondary)] p-3 text-center">
                      <div className="text-xl font-extrabold text-[var(--amber-text)] stat-value">€{(cs.annualSaving / 1000).toFixed(0)}K</div>
                      <div className="text-[10px] text-[var(--fg-muted)] mt-0.5">Saved per year</div>
                    </div>
                    <div className="rounded-lg bg-[var(--bg-secondary)] p-3 text-center">
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
            <div className="text-center mt-10">
              <Link href="/case-studies">
                <Button variant="outline">Read Full Case Studies</Button>
              </Link>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden bg-[var(--bg-secondary)] border-t border-[var(--card-border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_50%_35%,rgba(245,158,11,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--fg)] mb-6 leading-tight">
            Your next dead battery<br />should be your <span className="text-gradient">last one.</span>
          </h2>
          <p className="text-[var(--fg-muted)] text-lg mb-10 max-w-xl mx-auto">
            Book a 30-minute call with a fleet specialist. We will audit your current battery failure rate and show you exactly what VoltKeep prevents.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Book a Free Fleet Audit</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="secondary" size="lg">View Pricing</Button>
            </Link>
          </div>
          <p className="text-xs text-[var(--fg-muted)] mt-6">No commitment required.</p>
        </div>
      </section>
    </div>
  );
}
