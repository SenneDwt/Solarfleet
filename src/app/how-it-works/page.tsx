import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import RevealSection from '@/components/ui/RevealSection';
import SolarCharger from '@/components/animations/SolarCharger';

export const metadata: Metadata = {
  title: 'How It Works — VoltKeep',
  description: 'How VoltKeep keeps fleet vehicle 12V batteries from going flat while parked — the physics, the hardware, and the monitoring explained clearly.',
};

const STEPS = [
  {
    n: '01',
    title: 'The vehicle is parked',
    subtitle: 'This is when the problem starts',
    body: 'When a fleet vehicle sits with the engine off — overnight, over a weekend, or for an extended period in a depot or airport lot — its 12V auxiliary battery slowly self-discharges. Modern vehicles also have permanent parasitic loads: alarm systems, central locking, telematics units, and ECUs that draw current continuously even with the ignition off. In cold weather, self-discharge accelerates further. After one to two weeks without the engine running, many batteries drop below the voltage required to start the vehicle.',
    fact: 'The average 12V lead-acid battery loses 5–10% of its charge per month at room temperature. In winter, this doubles.',
  },
  {
    n: '02',
    title: 'The solar panel generates a trickle',
    subtitle: 'Daylight — not direct sunlight — is enough',
    body: 'The VoltKeep VS-120 panel converts daylight into a small, steady direct current. At peak output it produces 120W. In practice, under the diffuse overcast conditions typical of northern European winters, it generates 8–30W during daylight hours. That is far more than the 0.5–1W of power needed to offset a parked vehicle\'s parasitic drain. The panel does not need to produce a large amount of power. It needs to produce more than the battery is losing. It always does.',
    fact: 'A typical van\'s standby drain is 20–80mA. At 12V, that is 0.24–1W. The panel generates 8–30W in overcast conditions.',
  },
  {
    n: '03',
    title: 'The MPPT controller maintains the battery',
    subtitle: 'Smart charging — not simple on/off',
    body: 'Raw solar output fluctuates with cloud cover, temperature, and the angle of the sun. The MPPT (Maximum Power Point Tracking) controller samples the panel\'s output 1,000 times per second and adjusts the operating point to extract the maximum available power at each moment. It then delivers that power to the battery in precisely the right form: a bulk charge if the battery is depleted, an absorption charge at full voltage to complete the cycle, or a float charge to hold the battery at 100% without overcharging it. The result is a battery that is perpetually maintained — never overcharged, never discharged.',
    fact: 'MPPT controllers extract 15–30% more energy from a panel than simpler alternatives. In low-light winter conditions, this difference is critical.',
  },
  {
    n: '04',
    title: 'The battery stays above the starting threshold',
    subtitle: 'The vehicle starts every single time',
    body: 'With VoltKeep maintaining the battery, it never drops below the threshold required to start the engine. There is no call-out to arrange, no battery to replace ahead of schedule, no driver waiting in a cold depot for a recovery vehicle. The vehicle starts. The delivery runs. The appointment is kept. This is the entire point of VoltKeep.',
    fact: 'Batteries kept above 80% state of charge last 4–6 years. Batteries regularly deep-discharged last 12–18 months.',
  },
  {
    n: '05',
    title: 'The dashboard tells you before anything goes wrong',
    subtitle: 'Know the status of every battery before your drivers do',
    body: 'Every 5 minutes, the VoltKeep unit transmits the battery\'s current voltage, state of charge, and the panel\'s output wattage to your fleet dashboard. You can see the real-time health of every vehicle in one view. If a battery trends downward — indicating a faulty accessory drawing too much current, or a panel that needs cleaning — you receive an alert before the battery fails. A planned replacement during a scheduled service costs a fraction of an emergency call-out.',
    fact: '94% of VoltKeep customers say the dashboard replaced their manual morning battery check entirely.',
  },
];

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--bg-secondary)] overflow-hidden border-b border-[var(--card-border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_80%_40%,rgba(245,158,11,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.08))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="amber" className="mb-5">The Physics, Simply Explained</Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--fg)] mb-6 leading-tight">
                Parked vehicle.<br />Solar panel.<br />Battery stays alive.
              </h1>
              <p className="text-[var(--fg-muted)] text-lg leading-relaxed mb-8">
                VoltKeep is not complicated. A panel on the roof generates a small trickle of power. A controller feeds that trickle into the 12V battery. The battery never discharges below the starting threshold. The vehicle always starts.
              </p>
              <Link href="/contact"><Button size="lg">Book a Technical Demo</Button></Link>
            </div>
            <div className="flex justify-center">
              <SolarCharger />
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-[var(--bg)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="muted" className="mb-4">Step by Step</Badge>
            <h2 className="text-3xl font-bold text-[var(--fg)]">How It Works in Practice</h2>
          </div>
          <div className="space-y-6">
            {STEPS.map((step, i) => (
              <RevealSection key={step.n}>
                <div className="grid grid-cols-[56px_1fr] gap-5 items-start">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-600/25 flex items-center justify-center text-[var(--amber-text)] text-sm font-bold flex-shrink-0">
                      {step.n}
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="w-px flex-1 min-h-[24px] bg-gradient-to-b from-yellow-600/20 to-transparent" />
                    )}
                  </div>
                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-[var(--fg)] mb-1">{step.title}</h3>
                    <p className="text-sm text-[var(--amber-text)] font-medium mb-4">{step.subtitle}</p>
                    <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-4">{step.body}</p>
                    <div className="bg-yellow-500/8 border border-yellow-600/15 rounded-lg px-4 py-3">
                      <p className="text-xs text-yellow-800 leading-relaxed">{step.fact}</p>
                    </div>
                  </Card>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works in all weather */}
      <RevealSection>
        <section className="py-24 bg-[var(--bg-secondary)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <Badge variant="muted" className="mb-4">Year-Round Performance</Badge>
                <h2 className="text-3xl font-bold text-[var(--fg)] mb-5">
                  Designed for Belgian winters. Not Californian summers.
                </h2>
                <p className="text-[var(--fg-muted)] leading-relaxed mb-6">
                  Most solar products are specified at Standard Test Conditions — full overhead sun at 25°C. VoltKeep is sized specifically for northern European conditions, where winter days are short and overcast. Even in December in Antwerp, the panel generates enough power to maintain the battery.
                </p>
                <p className="text-[var(--fg-muted)] leading-relaxed mb-6">
                  The VS-120 panel produces meaningful power from diffuse daylight, not direct sunlight. Overcast conditions reduce output to 15–30% of rated capacity — which is still several times more than the battery loses through self-discharge each day.
                </p>
                <div className="space-y-3">
                  {[
                    { condition: 'Full sun', output: '85–120W', result: 'Rapidly restores any deficit', ok: true },
                    { condition: 'Partial cloud', output: '40–80W', result: 'Easily maintains full charge', ok: true },
                    { condition: 'Full overcast', output: '18–36W', result: 'Still offsets self-discharge', ok: true },
                    { condition: 'Heavy rain / storm', output: '8–15W', result: 'Slows discharge significantly', ok: true },
                    { condition: 'Night', output: '0W', result: 'Battery holds overnight without issue', ok: true },
                    { condition: 'Full snow cover on panel', output: '0W', result: 'Resumes when snow clears (typically hours)', ok: null },
                  ].map(row => (
                    <div key={row.condition} className="flex items-center gap-3 p-3 rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)]">
                      <div className="flex-1">
                        <div className="text-sm font-medium text-[var(--fg)]">{row.condition}</div>
                        <div className="text-xs text-[var(--fg-muted)]">Output: {row.output}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-[var(--fg-muted)]">{row.result}</div>
                        {row.ok === true && <Badge variant="green" className="mt-1">Battery maintained</Badge>}
                        {row.ok === null && <Badge variant="muted" className="mt-1">Temporary only</Badge>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="p-7">
                <h3 className="font-bold text-[var(--fg)] mb-5 text-center">Monthly Solar Availability — Antwerp</h3>
                <div className="space-y-3">
                  {[
                    { month: 'Jan', pct: 18, note: 'Low, but sufficient' },
                    { month: 'Feb', pct: 28, note: '' },
                    { month: 'Mar', pct: 45, note: '' },
                    { month: 'Apr', pct: 65, note: '' },
                    { month: 'May', pct: 82, note: '' },
                    { month: 'Jun', pct: 90, note: '' },
                    { month: 'Jul', pct: 92, note: '' },
                    { month: 'Aug', pct: 85, note: '' },
                    { month: 'Sep', pct: 67, note: '' },
                    { month: 'Oct', pct: 42, note: '' },
                    { month: 'Nov', pct: 22, note: '' },
                    { month: 'Dec', pct: 14, note: 'Low, but sufficient' },
                  ].map(({ month, pct, note }) => (
                    <div key={month} className="flex items-center gap-3">
                      <div className="w-8 text-xs text-[var(--fg-muted)] text-right">{month}</div>
                      <div className="flex-1 battery-bar-track">
                        <div className="battery-bar-fill" style={{
                          width: `${pct}%`,
                          background: pct >= 50 ? '#22c55e' : pct >= 25 ? '#f59e0b' : '#f97316',
                        }} />
                      </div>
                      <div className="text-xs font-semibold text-[var(--fg)] w-8 text-right">{pct}%</div>
                      {note && <div className="text-[10px] text-[var(--fg-muted)] w-24">{note}</div>}
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-[var(--fg-muted)] mt-4 text-center">% of peak summer output. VoltKeep maintains batteries at all 12 months.</p>
              </Card>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* CTA */}
      <section className="py-20 bg-[var(--navy)] text-center dark-surface">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold text-[var(--fg)] mb-4">See it on a vehicle from your fleet.</h2>
          <p className="text-[var(--fg-muted)] mb-8">A 30-minute demo covers the panel, the controller, the monitoring system, and the data from a real deployment.</p>
          <Link href="/contact"><Button size="lg">Book a Technical Demonstration</Button></Link>
        </div>
      </section>
    </div>
  );
}
