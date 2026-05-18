import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import RevealSection from '@/components/ui/RevealSection';

export const metadata: Metadata = {
  title: 'How It Works — VoltKeep',
  description: 'Flexible solar panel, smart MPPT controller for all battery types, optional BMS monitoring. How VoltKeep keeps fleet batteries from going flat.',
};

const STEPS = [
  {
    n: '01',
    title: 'The vehicle is parked',
    subtitle: 'This is when the problem starts',
    body: 'Parked with the engine off, the battery slowly self-discharges. Modern vehicles draw continuous current from alarms, central locking, and ECUs — even with the ignition off. In cold weather it accelerates. After one to two weeks, many batteries drop below starting voltage. A critically flat battery doesn\'t just cause a no-start: it can wipe ECU memory and trigger fault codes that send vehicles to the workshop unnecessarily.',
    fact: '12V batteries lose 5–10% charge per month at room temperature. In winter, that doubles.',
  },
  {
    n: '02',
    title: 'The flexible panel generates a trickle',
    subtitle: 'Daylight, not direct sunlight',
    body: 'The VoltKeep panel converts daylight into DC current. Available in multiple wattages, it folds flat for transport and attaches to any roof without drill holes. Under full cloud cover in a Belgian winter it still produces several times more power than the battery loses through self-discharge. It doesn\'t need to generate a lot — it just needs to generate more than the battery is losing.',
    fact: 'A parked van draws roughly 0.3–1W in standby. The panel comfortably exceeds this in all but complete darkness.',
  },
  {
    n: '03',
    title: 'The MPPT controller charges correctly for your battery',
    subtitle: 'Every chemistry, no overcharging',
    body: 'The MPPT controller extracts maximum power from the panel and applies the correct charging profile for your battery chemistry — lead-acid, AGM, gel, EFB, or lithium. No manual configuration. It bulk charges when needed, holds at float when full, and never overcharges. The battery stays healthy and lasts significantly longer.',
    fact: 'One controller, any battery type. Built-in overcharge protection extends battery life from 12–18 months to 4–6 years.',
  },
  {
    n: '04',
    title: 'Battery stays at 100% — no boosts, no breakdowns',
    subtitle: 'The vehicle starts, every time',
    body: 'The battery never drops below starting threshold. No call-outs, no roadside recovery, no driver waiting in a cold depot. Because it never goes flat, the vehicle\'s electronics stay stable — no lost ECU memory, no fault codes, no unnecessary workshop visits. The vehicle starts. The delivery runs.',
    fact: 'Batteries held above 80% SOC last 4–6 years. Deep-discharged batteries last 12–18 months — and cost far more than their own replacement price.',
  },
  {
    n: '05',
    title: 'Optional: BMS module monitors every battery in real time',
    subtitle: '1 vehicle or your entire fleet',
    body: 'Add the optional BMS module and it measures SOC, SOH, and voltage at set intervals — transmitting data to your fleet dashboard via a built-in 4G SIM. No gateway, no local network, no setup beyond clipping it to the battery. Scale from a single vehicle to an unlimited fleet. Alerts fire the moment a battery stops charging or starts degrading.',
    fact: 'Each BMS unit operates independently via its own 4G connection. One platform, any fleet size.',
  },
];

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 border-b border-[var(--card-border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--fg)] mb-6 leading-tight">
              Three components.<br />One system.
            </h1>
            <p className="text-[var(--fg-muted)] text-lg leading-relaxed">
              Two components are always included. One is optional. Together they keep every battery fully charged and give you complete visibility over every vehicle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-7 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[var(--fg-muted)] tracking-widest uppercase">01</span>
                <Badge variant="amber">Included</Badge>
              </div>
              <div>
                <h2 className="font-bold text-[var(--fg)] text-base mb-2">Flexible Solar Panel</h2>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                  Available in multiple wattages. Folds flat, attaches to any vehicle roof without drill holes. Works from daylight — even in overcast winter conditions.
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {['Multiple wattages', 'Foldable', 'IP67'].map(tag => (
                  <span key={tag} className="text-[10px] font-medium text-[var(--fg-muted)] px-2 py-0.5 rounded-full border border-[var(--card-border)]">{tag}</span>
                ))}
              </div>
            </Card>

            <Card className="p-7 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[var(--fg-muted)] tracking-widest uppercase">02</span>
                <Badge variant="amber">Included</Badge>
              </div>
              <div>
                <h2 className="font-bold text-[var(--fg)] text-base mb-2">MPPT Charge Controller</h2>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                  Adapts automatically to your battery chemistry — lead-acid, AGM, gel, EFB, or lithium. Charges correctly, prevents overcharging, extends lifespan 3–5×.
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {['All battery types', 'No overcharge', 'IP67'].map(tag => (
                  <span key={tag} className="text-[10px] font-medium text-[var(--fg-muted)] px-2 py-0.5 rounded-full border border-[var(--card-border)]">{tag}</span>
                ))}
              </div>
            </Card>

            <Card className="p-7 flex flex-col gap-5 border-dashed">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[var(--fg-muted)] tracking-widest uppercase">03</span>
                <Badge variant="muted">Optional</Badge>
              </div>
              <div>
                <h2 className="font-bold text-[var(--fg)] text-base mb-2">BMS Monitoring Module</h2>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                  Measures SOC, SOH, and voltage at set intervals. Sends data via built-in 4G SIM to your fleet platform. 1 vehicle to unlimited — no infrastructure needed.
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {['SOC & SOH', '4G SIM built-in', '1 to unlimited'].map(tag => (
                  <span key={tag} className="text-[10px] font-medium text-[var(--fg-muted)] px-2 py-0.5 rounded-full border border-[var(--card-border)]">{tag}</span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {STEPS.map((step, i) => (
              <RevealSection key={step.n}>
                <div className="grid grid-cols-[56px_1fr] gap-5 items-start">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-[var(--amber-soft)] border border-[var(--amber)]/25 flex items-center justify-center text-[var(--amber-text)] text-sm font-bold flex-shrink-0">
                      {step.n}
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="w-px flex-1 min-h-[24px] bg-gradient-to-b from-[var(--amber)]/20 to-transparent" />
                    )}
                  </div>
                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-[var(--fg)] mb-1">{step.title}</h3>
                    <p className="text-xs text-[var(--fg-muted)] font-medium mb-4 uppercase tracking-wide">{step.subtitle}</p>
                    <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-4">{step.body}</p>
                    <div className="bg-[var(--amber-soft)] border border-[var(--amber-border)] rounded-lg px-4 py-3">
                      <p className="text-xs text-[var(--amber-text)] leading-relaxed">{step.fact}</p>
                    </div>
                  </Card>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Weather performance */}
      <RevealSection>
        <section className="py-24 border-t border-[var(--card-border)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-[var(--fg)] mb-5">
                  Designed for Belgian winters.
                </h2>
                <p className="text-[var(--fg-muted)] leading-relaxed mb-4">
                  Most solar products quote peak output at Standard Test Conditions — full sun, 25°C. VoltKeep is sized for northern European conditions: short winter days, persistent cloud cover, temperatures close to zero.
                </p>
                <p className="text-[var(--fg-muted)] leading-relaxed mb-8">
                  The panel produces meaningful power from diffuse daylight, not direct sunlight. Overcast output is still several times more than the battery loses through self-discharge each day. Both panel and controller are IP67 sealed — rain, snow, and depot pressure washing included.
                </p>
                <div className="space-y-2">
                  {[
                    { condition: 'Full sun', result: 'Rapidly restores any deficit', ok: true },
                    { condition: 'Partial cloud', result: 'Easily maintains full charge', ok: true },
                    { condition: 'Full overcast', result: 'Still offsets self-discharge', ok: true },
                    { condition: 'Heavy rain', result: 'Slows discharge significantly', ok: true },
                    { condition: 'Night', result: 'Battery holds overnight without issue', ok: true },
                    { condition: 'Snow cover on panel', result: 'Resumes when snow clears (typically hours)', ok: null },
                  ].map(row => (
                    <div key={row.condition} className="flex items-center justify-between p-3 rounded-lg border border-[var(--card-border)]">
                      <span className="text-sm font-medium text-[var(--fg)]">{row.condition}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-[var(--fg-muted)] hidden sm:block">{row.result}</span>
                        {row.ok === true && <Badge variant="green">Maintained</Badge>}
                        {row.ok === null && <Badge variant="muted">Temporary</Badge>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="p-7">
                <h3 className="font-bold text-[var(--fg)] mb-5">Solar availability by month — Antwerp</h3>
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
                          background: pct >= 50 ? '#22c55e' : pct >= 25 ? '#ffc800' : '#f97316',
                        }} />
                      </div>
                      <div className="text-xs font-semibold text-[var(--fg)] w-8 text-right">{pct}%</div>
                      {note && <div className="text-[10px] text-[var(--fg-muted)] w-24">{note}</div>}
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-[var(--fg-muted)] mt-4">% of peak summer output. Battery is maintained across all 12 months.</p>
              </Card>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* CTA */}
      <section className="py-20 bg-[var(--navy)] text-center dark-surface">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold text-[var(--fg)] mb-4">See it on a vehicle from your fleet.</h2>
          <p className="text-[var(--fg-muted)] mb-8">30 minutes. We cover the panel, the controller, the BMS, and real data from a live deployment.</p>
          <Link href="/contact"><Button size="lg">Book a Technical Demo</Button></Link>
        </div>
      </section>
    </div>
  );
}
