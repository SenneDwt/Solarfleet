import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import RevealSection from '@/components/ui/RevealSection';
import { TEAM } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About VoltKeep — Our Story & Mission',
  description: 'VoltKeep was founded by a fleet manager and a solar engineer to permanently solve the dead battery problem in commercial fleets.',
};

const MILESTONES = [
  { year: '2021', event: 'VoltKeep founded in Antwerp. First 30-vehicle prototype trial across winter.' },
  { year: '2022', event: 'CE certification achieved. First enterprise customer (EuroLogis Express, 340 vehicles).' },
  { year: '2023', event: 'Expanded to Netherlands and Germany. 2,000 vehicles under management. Seed round closed.' },
  { year: '2024', event: 'Launched Fleet Dashboard v2 with predictive battery health scoring. 5,000 vehicles.' },
  { year: '2025', event: 'Expanded to France and UK. Series A closed. 8,000 vehicles under management.' },
  { year: '2026', event: '10,847 vehicles. Zero battery failures across the entire monitored fleet. ISO 14001 certified.' },
];

const VALUES = [
  { icon: '🔬', title: 'Engineered, not improvised', desc: 'The VS-120 was designed from scratch for commercial fleet conditions — not adapted from a garden shed solar kit. Physics-first thinking in everything we build.' },
  { icon: '📊', title: 'Data over assumptions', desc: 'Every recommendation we make is backed by fleet performance data from thousands of vehicles. If we can\'t show you the numbers, we don\'t say it.' },
  { icon: '🤝', title: 'Outcomes over installations', desc: 'We don\'t count panels sold. We count dead batteries prevented. Customer success is measured in operational metrics, not contract signatures.' },
  { icon: '🌿', title: 'Sustainability is structural', desc: 'Reducing fuel burn and battery waste isn\'t a marketing story — it\'s built into the product. We track and report our environmental impact quarterly.' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 bg-[var(--bg-secondary)] overflow-hidden border-b border-[var(--card-border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_70%,rgba(245,158,11,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.08))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="amber" className="mb-5">Our Story</Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--fg)] mb-8 leading-tight">
              Started by a Fleet Manager.<br />Built for Fleet Managers.
            </h1>
            <p className="text-[var(--fg-muted)] text-xl leading-relaxed mb-6">
              VoltKeep didn&apos;t begin in a Silicon Valley garage or a university lab. It started in an Antwerp depot on a −12°C January morning, when the third van of the day refused to start.
            </p>
            <p className="text-[var(--fg-muted)] text-lg leading-relaxed">
              Matthias Brenner, then Head of Fleet Operations at a 500-van logistics company, called his friend Dr. Sarah Okafor — a solar engineer at Tesla Energy. &ldquo;There has to be a permanent solution to this,&rdquo; he said. Three years later, there is. And it&apos;s protecting over 10,000 vehicles across Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Founding story extended */}
      <RevealSection>
        <section className="py-24 bg-[var(--bg)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="muted" className="mb-4">Why We Exist</Badge>
                <h2 className="text-3xl font-bold text-[var(--fg)] mb-6">The Problem Nobody Was Solving</h2>
                <div className="space-y-4 text-[var(--fg-muted)] leading-relaxed">
                  <p>Commercial fleet vehicles are modern engineering marvels — sophisticated engine management, telematics, advanced driver assistance. But every single one of them carries a critical single point of failure: a 12V lead-acid auxiliary battery that nobody talks about until it kills a vehicle on a Monday morning.</p>
                  <p>Matthias knew this problem intimately. In 15 years of fleet management, he&apos;d seen every version of it. Jump-start contractors on speed dial. Spare batteries stockpiled in depots. Drivers dispatched with portable boosters. All of it was treatment, not prevention.</p>
                  <p>When he connected with Sarah, she immediately identified the solution: solar trickle charging. The physics were straightforward. The engineering challenge was making it robust enough for a commercial vehicle operating in all conditions, with enough intelligence to monitor and report, and simple enough to retrofit at scale without disrupting fleet operations.</p>
                  <p>Two years of prototyping, testing through two winters, and a 30-vehicle pilot later — VoltKeep was ready. Not a single vehicle in the pilot suffered a battery failure. Not one.</p>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-muted)] mb-6">Our Journey</h3>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-600/50 via-yellow-500/30 to-transparent" />
                  <div className="space-y-6 pl-10">
                    {MILESTONES.map(m => (
                      <div key={m.year} className="relative">
                        <div className="absolute -left-[30px] top-1 w-3.5 h-3.5 rounded-full bg-yellow-600 border-2 border-[var(--bg)]" />
                        <div className="text-xs font-bold text-[var(--amber-text)] mb-1">{m.year}</div>
                        <div className="text-sm text-[var(--fg-muted)]">{m.event}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
              &ldquo;Make the dead battery a historical artefact of fleet management — something future fleet managers read about in old trade magazines.&rdquo;
            </blockquote>
            <p className="text-[var(--fg-muted)] text-lg max-w-3xl mx-auto">
              That&apos;s not a marketing line. It&apos;s the goal we measure ourselves against every quarter. We track total battery failures across our entire monitored fleet. The number is zero. It has been zero for over 18 months.
            </p>
          </div>
        </section>
      </RevealSection>

      {/* Team */}
      <RevealSection>
        <section className="py-24 bg-[var(--bg)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge variant="muted" className="mb-4">The Team</Badge>
              <h2 className="text-3xl font-bold text-[var(--fg)]">People Who&apos;ve Lived the Problem</h2>
              <p className="text-[var(--fg-muted)] mt-4 max-w-xl mx-auto">
                Our core team combines decades of fleet operations experience with deep solar engineering expertise. We don&apos;t theorise about your problems — we&apos;ve had them.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map(member => (
                <Card key={member.name} className="p-6">
                  <div className={`w-14 h-14 rounded-xl ${member.background} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-[var(--fg)] mb-0.5">{member.name}</h3>
                  <div className="text-xs text-[var(--amber-text)] font-medium mb-3">{member.role}</div>
                  <p className="text-xs text-[var(--fg-muted)] leading-relaxed">{member.bio}</p>
                </Card>
              ))}
            </div>
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

      {/* Sustainability */}
      <RevealSection>
        <section className="py-24 bg-[var(--bg)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="green" className="mb-4">Sustainability</Badge>
                <h2 className="text-3xl font-bold text-[var(--fg)] mb-6">We Count Every Tonne</h2>
                <p className="text-[var(--fg-muted)] leading-relaxed mb-6">
                  By reducing alternator load across our monitored fleet, VoltKeep prevents measurable diesel consumption — which we track and report quarterly. We also reduce battery manufacturing demand and landfill, as each battery we extend lasts 3–5 years longer.
                </p>
                <div className="space-y-4">
                  {[
                    { metric: '1,240 tonnes', label: 'CO₂ prevented since founding (cumulative)' },
                    { metric: '8,200 batteries', label: 'Not manufactured thanks to extended battery life' },
                    { metric: '3.8M litres', label: 'Diesel not burned due to reduced alternator load' },
                    { metric: 'ISO 14001', label: 'Environmental management system certified, 2026' },
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-green-400">{item.metric}</span>
                        <span className="text-sm text-[var(--fg-muted)] ml-2">{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="p-7 text-center">
                <div className="text-6xl font-extrabold text-gradient stat-value mb-2">1,240t</div>
                <div className="text-lg font-semibold text-[var(--fg)] mb-4">CO₂ Prevented</div>
                <p className="text-sm text-[var(--fg-muted)] mb-6">That&apos;s equivalent to taking 270 petrol cars off the road for a year.</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'ISO 9001', label: 'Quality' },
                    { value: 'ISO 14001', label: 'Environmental' },
                    { value: 'CE', label: 'Compliance' },
                    { value: 'IP67', label: 'Weatherproof' },
                  ].map(cert => (
                    <div key={cert.value} className="rounded-lg bg-[var(--bg)] border border-[var(--card-border)] p-3">
                      <div className="font-bold text-yellow-600">{cert.value}</div>
                      <div className="text-xs text-[var(--fg-muted)] mt-0.5">{cert.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* CTA */}
      <section className="py-20 bg-[var(--navy)] text-center dark-surface">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold text-[var(--fg)] mb-4">Join the Fleets That Made Dead Batteries History</h2>
          <p className="text-[var(--fg-muted)] mb-8">Talk to Matthias, Emma, or any of the team. We&apos;re genuinely easy to reach.</p>
          <Link href="/contact"><Button size="lg">Get in Touch</Button></Link>
        </div>
      </section>
    </div>
  );
}
