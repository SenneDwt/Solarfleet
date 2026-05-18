import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import RevealSection from '@/components/ui/RevealSection';

export const metadata: Metadata = {
  title: 'About VoltKeep: Our Story & Mission',
  description: 'VoltKeep was built to permanently solve the dead battery problem in commercial fleets.',
};

const VALUES = [
  { icon: '🔬', title: 'Engineered, not improvised', desc: 'VoltKeep was designed from scratch for commercial fleet conditions, not adapted from a garden shed solar kit. Physics-first thinking in everything we build.' },
  { icon: '📊', title: 'Data over assumptions', desc: 'Every recommendation we make is backed by fleet performance data. If we can\'t show you the numbers, we don\'t say it.' },
  { icon: '🤝', title: 'Outcomes over installations', desc: 'We don\'t count panels sold. We count dead batteries prevented. Customer success is measured in operational metrics, not contract signatures.' },
  { icon: '🌿', title: 'Sustainability is structural', desc: 'Reducing alternator load and extending battery life reduces both fuel consumption and battery waste. We track and report our environmental impact.' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 border-b border-[var(--card-border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--fg)] mb-8 leading-tight">
              Started by a fleet manager.<br />Built for fleet managers.
            </h1>
            <p className="text-[var(--fg-muted)] text-xl leading-relaxed mb-5">
              It started in a depot at −12°C, when the third van of the day refused to start.
            </p>
            <p className="text-[var(--fg-muted)] text-lg leading-relaxed">
              VoltKeep exists because the dead battery problem is solved by physics, not by hoping for the best. Solar trickle charging works. The MPPT controller handles the chemistry. The battery never goes flat.
            </p>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <RevealSection>
        <section className="py-24 bg-[var(--bg)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="muted" className="mb-4">Why We Exist</Badge>
                <h2 className="text-3xl font-bold text-[var(--fg)] mb-6">The Problem Nobody Was Solving</h2>
                <div className="space-y-4 text-[var(--fg-muted)] leading-relaxed">
                  <p>Commercial fleet vehicles are modern engineering marvels,sophisticated engine management, telematics, advanced driver assistance. But every single one of them carries a critical single point of failure: a 12V lead-acid auxiliary battery that nobody talks about until it kills a vehicle on a Monday morning.</p>
                  <p>Jump-start contractors on speed dial. Spare batteries stockpiled in depots. Drivers dispatched with portable boosters. All of it is treatment, not prevention.</p>
                  <p>The solution is solar trickle charging. The physics are straightforward. The engineering challenge was making it robust enough for a commercial vehicle operating in all conditions, with enough intelligence to monitor and report, and simple enough to retrofit at scale without disrupting fleet operations.</p>
                  <p>That is what VoltKeep is.</p>
                </div>
              </div>
              <Card className="p-8">
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-muted)] mb-6">The case for prevention</div>
                <div className="space-y-5">
                  {[
                    { label: 'Battery replacement cost', value: '€120–180' },
                    { label: 'Recovery call-out cost', value: '€200–300' },
                    { label: 'Operational downtime', value: '€400+/day' },
                    { label: 'ECU faults & workshop visits', value: 'Hidden cost' },
                  ].map(item => (
                    <div key={item.label} className="flex justify-between items-center border-b border-[var(--card-border)] pb-4 last:border-0 last:pb-0">
                      <span className="text-sm text-[var(--fg-muted)]">{item.label}</span>
                      <span className="text-sm font-bold text-[var(--amber-text)]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Mission */}
      <RevealSection>
        <section className="py-24 bg-[var(--card-bg)]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="amber" className="mb-6">Mission</Badge>
            <blockquote className="text-2xl sm:text-3xl font-bold text-[var(--fg)] leading-relaxed mb-8">
              &ldquo;Make the dead battery a historical artefact of fleet management, something future fleet managers read about in old trade magazines.&rdquo;
            </blockquote>
            <p className="text-[var(--fg-muted)] text-lg max-w-3xl mx-auto">
              That&apos;s not a marketing line. It&apos;s the goal we measure ourselves against every quarter.
            </p>
          </div>
        </section>
      </RevealSection>

      {/* Values */}
      <RevealSection>
        <section className="py-24 bg-[var(--card-bg)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge variant="muted" className="mb-4">What We Stand For</Badge>
              <h2 className="text-3xl font-bold text-[var(--fg)]">Our Operating Principles</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {VALUES.map(v => (
                <Card key={v.title} className="p-6">
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="font-bold text-[var(--fg)] mb-2">{v.title}</h3>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{v.desc}</p>
                </Card>
              ))}
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
          <h2 className="text-3xl font-extrabold text-[var(--fg)] mb-4">Talk to the Team</h2>
          <p className="text-[var(--fg-muted)] mb-8">30 minutes. We cover the panel, the controller, the BMS, and what it means for your operation.</p>
          <Link href="/contact"><Button size="lg">Get in Touch</Button></Link>
        </div>
      </section>
    </div>
  );
}
