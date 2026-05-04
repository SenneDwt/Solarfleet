'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import RevealSection from '@/components/ui/RevealSection';
import { PRICING_PLANS } from '@/lib/constants';

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--bg-secondary)] overflow-hidden text-center border-b border-[var(--card-border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_35%,rgba(245,158,11,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.08))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="amber" className="mb-5">Transparent Pricing</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--fg)] mb-6">
            Priced to Deliver ROI<br />in Under 12 Months
          </h1>
          <p className="text-[var(--fg-muted)] text-lg max-w-2xl mx-auto mb-8">
            All plans include the hardware. No hidden installation fees. No per-alert charges. Just one monthly cost that pays for itself many times over.
          </p>
          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${!annual ? 'bg-[var(--amber)] text-[var(--navy)]' : 'text-[var(--fg-muted)] hover:text-[var(--fg)]'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${annual ? 'bg-[var(--amber)] text-[var(--navy)]' : 'text-[var(--fg-muted)] hover:text-[var(--fg)]'}`}
            >
              Annual
              <span className={`text-[10px] font-bold rounded-full px-1.5 py-0.5 ${annual ? 'bg-[var(--navy)] text-[var(--amber)]' : 'bg-green-500/20 text-green-400'}`}>
                Save 17%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-[var(--bg)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {PRICING_PLANS.map(plan => (
              <Card
                key={plan.name}
                variant={plan.highlighted ? 'highlight' : 'default'}
                className={`p-8 relative ${plan.highlighted ? 'ring-2 ring-yellow-600/40 lg:-mt-4 lg:mb-4' : ''}`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="amber">{plan.badge}</Badge>
                  </div>
                )}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-[var(--fg)]">{plan.name}</h2>
                  <p className="text-sm text-[var(--fg-muted)] mt-1 leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-6">
                  {plan.priceAnnual === 0 ? (
                    <div>
                      <div className="text-4xl font-extrabold text-[var(--fg)]">Custom</div>
                      <div className="text-sm text-[var(--fg-muted)] mt-1">Contact us for a quote</div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-end gap-1">
                        <span className="text-sm text-[var(--fg-muted)] self-start mt-2">€</span>
                        <span className="text-5xl font-extrabold text-[var(--fg)] stat-value leading-none">
                          {annual ? plan.priceAnnual : plan.priceMonthly}
                        </span>
                        <span className="text-sm text-[var(--fg-muted)] self-end mb-1">/vehicle/mo</span>
                      </div>
                      {annual && (
                        <div className="text-xs text-green-400 mt-1">
                          Billed annually (€{plan.priceAnnual * 12}/vehicle/yr)
                        </div>
                      )}
                      {!annual && (
                        <div className="text-xs text-[var(--fg-muted)] mt-1 line-through">
                          €{plan.priceAnnual}/mo with annual billing
                        </div>
                      )}
                    </div>
                  )}
                  <div className="mt-3">
                    <Badge variant="muted">{plan.vehicles}</Badge>
                  </div>
                </div>

                <Link href="/contact" className="block mb-6">
                  <Button
                    variant={plan.highlighted ? 'primary' : 'outline'}
                    className="w-full"
                    size="md"
                  >
                    {plan.cta}
                  </Button>
                </Link>

                <div className="section-divider mb-5" />

                <ul className="space-y-2.5">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-sm text-[var(--fg-muted)]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <RevealSection>
        <section className="py-16 bg-[var(--card-bg)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[var(--fg)] mb-6 text-center">Pricing Clarity. No Surprises.</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: '✅', title: 'Hardware included', desc: 'The VS-120 panel, MPPT controller, and IoT module are included in all plans. You own the hardware.' },
                { icon: '🔧', title: 'Installation quoted separately', desc: 'Installation is not included in the SaaS fee, it varies by fleet size and location. We provide a fixed quote up front.' },
                { icon: '🔄', title: '30-day pilot, then commit', desc: 'All new customers start with a 30-vehicle pilot at no extra cost. You only commit to a plan if the pilot delivers results.' },
                { icon: '❌', title: 'No lock-in', desc: 'Annual plans can be cancelled with 60 days notice. We keep customers by delivering results, not contractual obligation.' },
              ].map(item => (
                <div key={item.title} className="flex gap-3 p-4 rounded-xl bg-[var(--bg)] border border-[var(--card-border)]">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-sm text-[var(--fg)]">{item.title}</div>
                    <div className="text-xs text-[var(--fg-muted)] mt-1 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* FAQ mini */}
      <RevealSection>
        <section className="py-16 bg-[var(--bg)]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-8">Common Pricing Questions</h2>
            <div className="space-y-4 text-left">
              {[
                {
                  q: 'Can I mix plans across my fleet?',
                  a: 'Yes. You can run some vehicles on Starter and others on Growth, useful if you\'re running a pilot segment. Enterprise customers typically consolidate everything under a single custom agreement.',
                },
                {
                  q: 'What happens when we exceed our vehicle limit?',
                  a: 'You\'ll receive an alert when you\'re within 10% of your plan limit. Adding vehicles beyond the limit automatically upgrades you to the next tier at a pro-rated rate, no service interruption.',
                },
                {
                  q: 'Is there a minimum contract length?',
                  a: 'Monthly plans have no minimum term. Annual plans have a 12-month minimum, with a 60-day early termination window if the product genuinely fails to deliver results.',
                },
              ].map(item => (
                <Card key={item.q} className="p-5">
                  <div className="font-semibold text-sm text-[var(--fg)] mb-2">{item.q}</div>
                  <div className="text-sm text-[var(--fg-muted)] leading-relaxed">{item.a}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* CTA */}
      <section className="py-20 bg-[var(--amber)] text-center">
        <div className="mx-auto max-w-3xl px-4 text-[var(--navy)]">
          <h2 className="text-3xl font-extrabold mb-4">Not Sure Which Plan Fits?</h2>
          <p className="text-lg opacity-70 mb-8">Talk to a fleet specialist. We&apos;ll recommend the right plan based on your fleet size, usage patterns, and goals.</p>
          <Link href="/contact">
            <button className="bg-[var(--navy)] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[var(--navy-light)] transition-colors">
              Get a Personalised Recommendation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
