import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import RevealSection from '@/components/ui/RevealSection';
import { CASE_STUDIES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Case Studies: VoltKeep Fleet Results',
  description: 'Real-world results from fleet operators who eliminated battery failures with VoltKeep solar charging panels.',
};

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--bg-secondary)] overflow-hidden border-b border-[var(--card-border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_35%,rgba(245,158,11,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.08))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="muted" className="mb-5">Real Customers. Real Numbers.</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--fg)] mb-6">
            Fleets That Chose to Stop<br />Gambling on Batteries
          </h1>
          <p className="text-[var(--fg-muted)] text-lg max-w-2xl mx-auto">
            Every case study below uses real operational data from live deployments. Company names are used with explicit permission.
          </p>
        </div>
      </section>

      {/* Aggregate stats */}
      <section className="py-10 bg-[var(--amber)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-[var(--navy)]">
            {[
              { value: '545', label: 'Vehicles across these 3 cases', suffix: '' },
              { value: '€190K', label: 'Combined annual savings', suffix: '' },
              { value: '0', label: 'Battery failures post-install', suffix: '' },
              { value: '7mo', label: 'Average ROI achievement', suffix: '' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold stat-value">{s.value}{s.suffix}</div>
                <div className="text-sm opacity-70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <div className="bg-[var(--bg)]">
        {CASE_STUDIES.map((cs, i) => (
          <RevealSection key={cs.id}>
            <section className={`py-24 ${i % 2 === 1 ? 'bg-[var(--card-bg)]' : 'bg-[var(--bg)]'}`}>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-xl bg-amber-500/15 border border-amber-600/25 flex items-center justify-center text-[var(--amber-text)] font-extrabold text-xl">
                    {cs.logo}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--fg)]">{cs.company}</h2>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="muted">{cs.industry}</Badge>
                      <Badge variant="muted">{cs.fleetSize} vehicles</Badge>
                      <Badge variant="muted">{cs.vehicleType}</Badge>
                    </div>
                  </div>
                  <div className="sm:ml-auto flex gap-4 text-center">
                    <div>
                      <div className="text-2xl font-extrabold text-[var(--amber-text)] stat-value">€{(cs.annualSaving / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-[var(--fg-muted)]">Saved/year</div>
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-green-400 stat-value">{cs.roiMonths}mo</div>
                      <div className="text-xs text-[var(--fg-muted)]">ROI achieved</div>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 mb-10">
                  {/* Challenge & Solution */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-3">The Challenge</h3>
                      <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-3">The VoltKeep Solution</h3>
                      <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{cs.solution}</p>
                    </div>
                    {/* Quote */}
                    <Card className="p-6 border-l-4 border-yellow-600 rounded-l-none">
                      <blockquote className="text-[var(--fg)] italic leading-relaxed mb-3">
                        &ldquo;{cs.quote}&rdquo;
                      </blockquote>
                      <div>
                        <div className="text-sm font-semibold text-[var(--fg)]">{cs.quotee}</div>
                        <div className="text-xs text-[var(--fg-muted)]">{cs.quoteeRole}</div>
                      </div>
                    </Card>
                  </div>

                  {/* Results table */}
                  <Card className="p-6">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-muted)] mb-4">Before vs. After</h3>
                    <div className="space-y-0">
                      <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 pb-3 mb-1 border-b border-[var(--card-border)]">
                        <div className="text-[11px] font-semibold text-[var(--fg-muted)] uppercase">Metric</div>
                        <div className="text-[11px] font-semibold text-red-400 uppercase text-center">Before</div>
                        <div className="text-[11px] font-semibold text-green-400 uppercase text-center">After</div>
                        <div className="text-[11px] font-semibold text-[var(--fg-muted)] uppercase text-right">Change</div>
                      </div>
                      {cs.results.map(result => (
                        <div key={result.metric} className="grid grid-cols-[1fr_auto_auto_auto] gap-2 py-3 border-b border-[var(--card-border)] last:border-0 items-center">
                          <div className="text-sm text-[var(--fg)]">{result.metric}</div>
                          <div className="text-sm text-red-400 font-mono text-center whitespace-nowrap">{result.before}</div>
                          <div className="text-sm text-green-400 font-semibold text-center whitespace-nowrap">{result.after}</div>
                          <div className="text-xs font-medium text-[var(--fg-muted)] text-right whitespace-nowrap">{result.improvement}</div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </section>
          </RevealSection>
        ))}
      </div>

      {/* CTA */}
      <section className="py-20 bg-[var(--navy)] text-center dark-surface">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold text-[var(--fg)] mb-4">Could Your Fleet Be the Next Case Study?</h2>
          <p className="text-[var(--fg-muted)] mb-8">
            Start with a no-commitment pilot. After one quarter, you&apos;ll have your own before/after data to share with your board.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact"><Button size="lg">Start a Pilot Programme</Button></Link>
            <Link href="/benefits"><Button variant="secondary" size="lg">Calculate Your ROI</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
