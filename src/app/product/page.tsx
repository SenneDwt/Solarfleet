import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import RevealSection from '@/components/ui/RevealSection';

export const metadata: Metadata = {
  title: 'Product: VoltKeep VS-120 Solar Panel',
  description: 'Technical specifications, retrofit process, and vehicle compatibility for the VoltKeep VS-120 fleet solar charging panel.',
};

const SPECS = [
  { group: 'Electrical', items: [
    ['Peak Output Power', '120W'],
    ['Cell Type', 'Monocrystalline PERC'],
    ['Efficiency', '22.1%'],
    ['Voltage (Vmp)', '18.2V'],
    ['Current (Imp)', '6.59A'],
    ['Open Circuit Voltage (Voc)', '22.8V'],
    ['Short Circuit Current (Isc)', '7.1A'],
    ['Controller Type', 'MPPT 20A'],
    ['Battery Compatibility', '12V / 24V (auto-detect)'],
    ['Charge Termination', 'Smart float / absorption'],
  ]},
  { group: 'Physical', items: [
    ['Dimensions', '1,240 × 540 × 6 mm'],
    ['Weight', '2.4 kg'],
    ['Frame', 'Frameless (aerodynamic low-profile)'],
    ['Mounting', 'AeroLock adhesive + optional rail kit'],
    ['Glass', 'Anti-reflective tempered 3.2mm'],
    ['Cell Count', '36 × PERC mono cells'],
  ]},
  { group: 'Environmental & Certifications', items: [
    ['IP Rating', 'IP67'],
    ['Operating Temperature', '−40°C to +85°C'],
    ['Wind Load', 'Tested to 130 km/h'],
    ['Hail Resistance', '25mm at 23 m/s (IEC 61215)'],
    ['Certifications', 'CE, IEC 61215, IEC 61730, UN 38.3'],
    ['Salt Mist / Humidity', 'IEC 61701 Grade 6 (marine-grade)'],
  ]},
  { group: 'Connectivity & Monitoring', items: [
    ['IoT Module', 'LTE-M cellular (global SIM)'],
    ['Reporting Interval', 'Every 5 minutes'],
    ['Data Points', 'Battery V, SoC %, solar W, panel temp, location'],
    ['Dashboard Access', 'Web browser + REST API'],
    ['Alert Types', 'Low SoC, panel fault, offline vehicle'],
    ['Battery Life (Module)', '3 years standby on internal cell'],
  ]},
];

const COMPATIBLE_VEHICLES = [
  { category: 'Large Vans', examples: ['Ford Transit', 'Mercedes-Benz Sprinter', 'Volkswagen Crafter', 'Iveco Daily'], note: 'All roof configurations' },
  { category: 'Medium Vans', examples: ['Renault Master', 'Fiat Ducato', 'Citroën Relay', 'Peugeot Boxer'], note: 'Standard & high-roof' },
  { category: 'Compact Vans', examples: ['Ford Transit Custom', 'Vauxhall Vivaro', 'Renault Trafic', 'VW Transporter'], note: 'Metal roof required' },
  { category: 'Light Trucks', examples: ['MAN TGE', 'Mercedes Atego', 'DAF LF', 'Renault D-Series'], note: 'Cab roof + body' },
  { category: 'Cars & SUVs', examples: ['Any vehicle with flat/composite roof area ≥ 1.0m²'], note: 'Assessment required' },
  { category: 'Electric Vehicles', examples: ['Mercedes eSprinter', 'Ford E-Transit', 'VW e-Crafter', 'Renault Master E-Tech'], note: '12V auxiliary battery supported' },
];

export default function ProductPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--bg-secondary)] overflow-hidden border-b border-[var(--card-border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_30%_50%,rgba(245,158,11,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.08))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="amber" className="mb-5">VoltKeep VS-120</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--fg)] mb-6 max-w-3xl">
            Engineered for Fleets.<br />Not Adapted from Residential Solar.
          </h1>
          <p className="text-[var(--fg-muted)] text-lg max-w-2xl mb-8 leading-relaxed">
            The VS-120 is the only solar panel designed from the ground up for commercial vehicle deployment, aerodynamic, ruggedised, intelligent, and connected. Every millimetre counts when it lives on your fleet.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact"><Button size="lg">Request a Pilot Install</Button></Link>
            <Link href="/how-it-works"><Button variant="secondary" size="lg">See How It Works</Button></Link>
          </div>
        </div>
      </section>

      {/* Specs */}
      <RevealSection>
        <section className="py-24 bg-[var(--bg)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge variant="muted" className="mb-4">Full Specifications</Badge>
              <h2 className="text-3xl font-bold text-[var(--fg)]">Every Number That Matters</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {SPECS.map(section => (
                <Card key={section.group} className="p-6">
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--amber-text)] mb-4">{section.group}</h3>
                  <div className="space-y-0">
                    {section.items.map(([k, v]) => (
                      <div key={k} className="flex justify-between items-center py-2.5 border-b border-[var(--card-border)] last:border-0">
                        <span className="text-sm text-[var(--fg-muted)]">{k}</span>
                        <span className="text-sm font-semibold text-[var(--fg)] text-right max-w-[55%]">{v}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Retrofit process */}
      <RevealSection>
        <section className="py-24 bg-[var(--card-bg)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge variant="amber" className="mb-4">Installation</Badge>
              <h2 className="text-3xl font-bold text-[var(--fg)] mb-4">Retrofit in 3 Steps</h2>
              <p className="text-[var(--fg-muted)] max-w-xl mx-auto">
                Any VoltKeep-certified installer can complete a full installation in 40–60 minutes. No specialist tools, no vehicle downtime beyond the installation window.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  step: '01',
                  title: 'Panel Bonding',
                  time: '~15 min',
                  icon: '🔲',
                  desc: 'The roof surface is cleaned and primed. The VS-120 panel is positioned using our vehicle-specific template and bonded with AeroLock adhesive (cure time: 30 min, working strength in 2h). No drilling, no penetrations, no roof modifications.',
                  note: 'CE-approved. Does not void vehicle warranty.',
                },
                {
                  step: '02',
                  title: 'Controller Wiring',
                  time: '~20 min',
                  icon: '⚡',
                  desc: 'A single IP67-rated cable routes from the panel through the existing grommet entry point to the MPPT controller, which mounts in the load area. A 2-wire connection to the battery terminals completes the circuit. Smart fusing is included.',
                  note: 'No vehicle wiring loom is touched.',
                },
                {
                  step: '03',
                  title: 'Activation & Commissioning',
                  time: '~10 min',
                  icon: '📡',
                  desc: 'The IoT module registers automatically to the VoltKeep platform. Battery baseline is recorded, panel output confirmed, and the vehicle appears in your fleet dashboard within 5 minutes. Installer uploads a completion certificate.',
                  note: 'Fleet manager receives onboarding email automatically.',
                },
              ].map(step => (
                <Card key={step.step} className="p-6 relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-5xl font-black text-[var(--fg-muted)] opacity-[0.07]">{step.step}</div>
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-[var(--fg)]">{step.title}</h3>
                    <Badge variant="muted">{step.time}</Badge>
                  </div>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-3">{step.desc}</p>
                  <p className="text-xs text-[var(--amber-text)] font-medium">{step.note}</p>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <p className="text-[var(--fg-muted)] text-sm mb-4">Want to train your own workshop team? We offer a half-day certification programme.</p>
              <Link href="/contact"><Button variant="outline">Enquire About Installer Training</Button></Link>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Vehicle compatibility */}
      <RevealSection>
        <section className="py-24 bg-[var(--bg)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge variant="muted" className="mb-4">Compatibility</Badge>
              <h2 className="text-3xl font-bold text-[var(--fg)] mb-4">Works On Your Fleet. All of It.</h2>
              <p className="text-[var(--fg-muted)] max-w-xl mx-auto">
                The VS-120 is compatible with the vast majority of commercial vehicles on European roads. Not sure if your specific model qualifies? Send us your fleet list and we&apos;ll confirm within 24 hours.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {COMPATIBLE_VEHICLES.map(v => (
                <Card key={v.category} className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <h3 className="font-bold text-sm text-[var(--fg)]">{v.category}</h3>
                  </div>
                  <ul className="space-y-1 mb-3">
                    {v.examples.map(e => (
                      <li key={e} className="text-xs text-[var(--fg-muted)]">· {e}</li>
                    ))}
                  </ul>
                  <Badge variant="muted">{v.note}</Badge>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* CTA */}
      <section className="py-20 bg-[var(--amber)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center text-[var(--navy)]">
          <h2 className="text-3xl font-extrabold mb-4">Ready to protect your fleet?</h2>
          <p className="text-lg opacity-70 mb-8 max-w-2xl mx-auto">
            Start with a pilot of 15–30 vehicles. We&apos;ll install, monitor, and deliver a full performance report after one quarter.
          </p>
          <Link href="/contact">
            <button className="bg-[var(--navy)] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[var(--navy-light)] transition-colors">
              Request a Pilot Programme
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
