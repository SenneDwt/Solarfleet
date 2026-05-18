import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

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
        <div className="absolute inset-0 bg-[linear-gradient(rgba(250,250,250,0.8),rgba(250,250,250,0.08))]" />
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

      {/* Case studies — coming soon */}
      <section className="py-24 bg-[var(--bg)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--fg-muted)] text-lg">
            Case studies are being prepared. Check back soon.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center dark-surface" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1a3a6b 100%)' }}>
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
