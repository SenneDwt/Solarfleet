'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import RevealSection from '@/components/ui/RevealSection';
import { CASE_STUDIES } from '@/lib/constants';

export default function BenefitsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--bg-secondary)] overflow-hidden border-b border-[var(--card-border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_80%,rgba(245,158,11,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.08))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="amber" className="mb-5">The Business Case</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--fg)] mb-6">
            What a Dead Battery Actually Costs You.
          </h1>
          <p className="text-[var(--fg-muted)] text-lg max-w-2xl mx-auto">
            Most fleet managers underestimate this number. Once you add up replacements, call-outs, driver time, and missed deliveries, the real cost per incident is significant.
          </p>
        </div>
      </section>

      {/* Cost breakdown */}
      <RevealSection>
        <section className="py-24 bg-[var(--bg)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge variant="muted" className="mb-4">Cost Per Incident</Badge>
              <h2 className="text-3xl font-bold text-[var(--fg)]">The Full Cost of One Dead Battery</h2>
              <p className="text-[var(--fg-muted)] mt-3 max-w-xl mx-auto">
                Fleet managers often budget for the battery itself. The battery is the smallest part of the cost.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {[
                { label: 'New battery', low: 120, high: 180, note: 'Plus the old one disposed of' },
                { label: 'Recovery or call-out', low: 200, high: 300, note: 'Technician or roadside assistance' },
                { label: 'Driver downtime', low: 80, high: 160, note: 'Waiting time billed at hourly rate' },
                { label: 'Missed delivery / SLA', low: 0, high: 1000, note: 'Penalty clauses and rebooking costs' },
              ].map(item => (
                <Card key={item.label} className="p-6">
                  <div className="text-2xl font-extrabold text-[var(--fg)] stat-value mb-1">
                    €{item.low}–{item.high}
                  </div>
                  <div className="font-semibold text-sm text-[var(--fg)] mb-2">{item.label}</div>
                  <div className="text-xs text-[var(--fg-muted)]">{item.note}</div>
                </Card>
              ))}
            </div>
            <Card variant="highlight" className="p-8 max-w-2xl mx-auto text-center">
              <div className="text-xs font-semibold tracking-widest uppercase text-[var(--amber-text)] mb-3">Total cost per incident</div>
              <div className="text-5xl font-extrabold text-[var(--fg)] stat-value mb-2">€400–1,640</div>
              <p className="text-sm text-[var(--fg-muted)]">
                The average fleet sees 0.8 dead battery incidents per vehicle per year. For a 50-vehicle fleet, that is 40 incidents annually, a cost of <strong className="text-[var(--fg)]">€16,000–65,000</strong> that VoltKeep eliminates.
              </p>
            </Card>
          </div>
        </section>
      </RevealSection>

      {/* Comparison */}
      <RevealSection>
        <section className="py-24 bg-[var(--bg-secondary)]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="amber" className="mb-4">Side by Side</Badge>
              <h2 className="text-3xl font-bold text-[var(--fg)]">With VoltKeep vs Without</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Without */}
              <Card className="p-7 border-red-200">
                <h3 className="font-bold text-[var(--fg)] mb-5 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                  Without VoltKeep
                </h3>
                <div className="space-y-3">
                  {[
                    'Battery slowly discharges during extended parking',
                    'Driver arrives to a vehicle that will not start',
                    'Call-out or roadside recovery is dispatched',
                    'Battery replaced, often ahead of its natural end of life',
                    'Deliveries missed, appointments rescheduled',
                    'This repeats 0.8 times per vehicle per year on average',
                    'No advance warning before failure occurs',
                  ].map(item => (
                    <div key={item} className="flex gap-3 text-sm text-[var(--fg-muted)]">
                      <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
              {/* With */}
              <Card className="p-7 border-green-200 bg-green-50/50">
                <h3 className="font-bold text-[var(--fg)] mb-5 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                  With VoltKeep
                </h3>
                <div className="space-y-3">
                  {[
                    'Solar panel continuously offsets battery self-discharge',
                    'Battery remains at full charge regardless of parking duration',
                    'Vehicle starts first time, every time',
                    'Battery replacement interval extends 3–5×',
                    'Every delivery and appointment runs as planned',
                    'Zero reactive call-outs for battery-related failures',
                    'Dashboard alerts you if a battery trends downward',
                  ].map(item => (
                    <div key={item} className="flex gap-3 text-sm text-[var(--fg-muted)]">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Fleet size context */}
      <RevealSection>
        <section className="py-24 bg-[var(--bg)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="muted" className="mb-4">By Fleet Size</Badge>
              <h2 className="text-3xl font-bold text-[var(--fg)]">What VoltKeep is Worth to Your Operation</h2>
              <p className="text-[var(--fg-muted)] mt-3 max-w-xl mx-auto">
                These figures are based on 0.8 incidents per vehicle per year at an average cost of €700 per incident, conservative industry figures.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="data-table w-full max-w-3xl mx-auto">
                <thead>
                  <tr>
                    <th className="pl-6 text-left">Fleet size</th>
                    <th className="text-left">Incidents per year</th>
                    <th className="text-left">Estimated annual cost</th>
                    <th className="pr-6 text-left">VoltKeep eliminates</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: '10 vehicles', incidents: 8, cost: '€5,600', saving: '€5,600' },
                    { size: '25 vehicles', incidents: 20, cost: '€14,000', saving: '€14,000' },
                    { size: '50 vehicles', incidents: 40, cost: '€28,000', saving: '€28,000' },
                    { size: '100 vehicles', incidents: 80, cost: '€56,000', saving: '€56,000' },
                    { size: '250 vehicles', incidents: 200, cost: '€140,000', saving: '€140,000' },
                    { size: '500 vehicles', incidents: 400, cost: '€280,000', saving: '€280,000' },
                  ].map(row => (
                    <tr key={row.size}>
                      <td className="pl-6 font-semibold text-[var(--fg)]">{row.size}</td>
                      <td className="text-[var(--fg-muted)]">{row.incidents}</td>
                      <td className="font-semibold text-red-500">{row.cost}</td>
                      <td className="pr-6 font-semibold text-green-600">{row.saving}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-xs text-[var(--fg-muted)] mt-4">
              Savings figures are gross. VoltKeep plan cost is deducted on top of hardware. <Link href="/pricing" className="text-[var(--amber-text)] hover:underline">See pricing.</Link>
            </p>
          </div>
        </section>
      </RevealSection>

      {/* Battery lifespan */}
      <RevealSection>
        <section className="py-24 bg-[var(--bg-secondary)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <Badge variant="amber" className="mb-4">Battery Lifespan</Badge>
                <h2 className="text-3xl font-bold text-[var(--fg)] mb-5">Replace Batteries Every 5 Years, Not Every 18 Months</h2>
                <p className="text-[var(--fg-muted)] leading-relaxed mb-6">
                  The primary cause of premature battery failure is deep discharge. When a battery drops below 50% state of charge repeatedly, the lead plates sulphate and capacity degrades rapidly. Most fleet batteries that are replaced early are technically fine, they simply were not maintained above their safe operating threshold.
                </p>
                <p className="text-[var(--fg-muted)] leading-relaxed mb-6">
                  VoltKeep keeps state of charge above 80% at all times. Batteries maintained in this range typically last 4–6 years instead of 12–18 months. For a 100-vehicle fleet replacing 80 batteries a year at €150 each, that alone is a saving of €60,000 per year before call-outs and downtime are considered.
                </p>
                <div className="flex gap-8">
                  <div>
                    <div className="text-3xl font-extrabold text-red-400 stat-value">12–18 mo</div>
                    <div className="text-xs text-[var(--fg-muted)] mt-1">Typical lifespan without protection</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-green-500 stat-value">4–6 yr</div>
                    <div className="text-xs text-[var(--fg-muted)] mt-1">With VoltKeep maintaining charge</div>
                  </div>
                </div>
              </div>
              <Card className="p-7">
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-muted)] mb-5">Battery State of Charge Over Time</div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-[var(--fg-muted)] mb-1">
                      <span>Without VoltKeep, 2 weeks parked</span>
                      <span className="text-red-500 font-semibold">38%</span>
                    </div>
                    <div className="battery-bar-track">
                      <div className="battery-bar-fill" style={{ width: '38%', background: '#ef4444' }} />
                    </div>
                    <div className="text-[10px] text-red-400 mt-1">Below starting threshold. Vehicle will not start.</div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-[var(--fg-muted)] mb-1">
                      <span>Without VoltKeep, 3 days parked</span>
                      <span className="text-[var(--amber-text)] font-semibold">71%</span>
                    </div>
                    <div className="battery-bar-track">
                      <div className="battery-bar-fill" style={{ width: '71%', background: '#eab308' }} />
                    </div>
                    <div className="text-[10px] text-[var(--amber-text)] mt-1">Marginal. Will start today, but degrading.</div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-[var(--fg-muted)] mb-1">
                      <span>With VoltKeep, 2 weeks parked</span>
                      <span className="text-green-600 font-semibold">96%</span>
                    </div>
                    <div className="battery-bar-track">
                      <div className="battery-bar-fill" style={{ width: '96%', background: '#22c55e' }} />
                    </div>
                    <div className="text-[10px] text-green-500 mt-1">Fully maintained. Ready to start immediately.</div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-[var(--fg-muted)] mb-1">
                      <span>With VoltKeep, 1 month parked</span>
                      <span className="text-green-600 font-semibold">94%</span>
                    </div>
                    <div className="battery-bar-track">
                      <div className="battery-bar-fill" style={{ width: '94%', background: '#22c55e' }} />
                    </div>
                    <div className="text-[10px] text-green-500 mt-1">Still fully maintained. No degradation.</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Results from customers */}
      <RevealSection>
        <section className="py-24 bg-[var(--bg)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="muted" className="mb-4">Customer Results</Badge>
              <h2 className="text-3xl font-bold text-[var(--fg)]">What Our Customers Actually Saved</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {CASE_STUDIES.map(cs => (
                <Card key={cs.id} className="p-6">
                  <div className="font-bold text-[var(--fg)] mb-1">{cs.company}</div>
                  <div className="text-xs text-[var(--fg-muted)] mb-4">{cs.fleetSize} vehicles · {cs.industry}</div>
                  <div className="text-3xl font-extrabold text-[var(--amber-text)] stat-value mb-1">€{(cs.annualSaving / 1000).toFixed(0)}K</div>
                  <div className="text-sm text-[var(--fg-muted)] mb-4">saved per year</div>
                  {cs.results.slice(0, 2).map(r => (
                    <div key={r.metric} className="text-xs text-[var(--fg-muted)] flex gap-2 mb-1">
                      <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {r.metric}: {r.before} → <span className="text-green-600 font-semibold">{r.after}</span>
                    </div>
                  ))}
                  <div className="mt-4 pt-4 border-t border-[var(--card-border)]">
                    <div className="text-xs text-[var(--fg-muted)]">ROI achieved in <strong className="text-[var(--fg)]">{cs.roiMonths} months</strong></div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/case-studies"><Button variant="outline">Full Case Studies</Button></Link>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* CTA */}
      <section className="py-20 bg-[var(--navy)] text-center dark-surface">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold text-[var(--fg)] mb-4">Want the Numbers for Your Specific Fleet?</h2>
          <p className="text-[var(--fg-muted)] mb-8">
            Our Customer Success team will model your actual battery failure costs and show you what VoltKeep is worth to your operation, free, no obligation.
          </p>
          <Link href="/contact"><Button size="lg">Request a Custom Analysis</Button></Link>
        </div>
      </section>
    </div>
  );
}
