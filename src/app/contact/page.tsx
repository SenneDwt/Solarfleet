'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Input from '@/components/ui/Input';
import RevealSection from '@/components/ui/RevealSection';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  fleetSize: string;
  message: string;
  interest: string;
}

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', company: '', email: '',
    phone: '', fleetSize: '', message: '', interest: 'demo',
  });
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!form.firstName.trim()) newErrors.firstName = 'Required';
    if (!form.company.trim()) newErrors.company = 'Required';
    if (!form.email.trim()) newErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.fleetSize) newErrors.fleetSize = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setState('submitting');
    await new Promise(r => setTimeout(r, 1500));
    setState('success');
  }

  function update(field: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm(prev => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
    };
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--bg-secondary)] overflow-hidden border-b border-[var(--card-border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_50%,rgba(245,158,11,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.08))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Badge variant="amber" className="mb-5">Let&apos;s Talk</Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--fg)] mb-6">
              No Obligation.<br />Just Honest Answers.
            </h1>
            <p className="text-[var(--fg-muted)] text-lg leading-relaxed">
              Tell us about your fleet and what&apos;s frustrating you. Our fleet specialists — who are actual former fleet managers — will get back to you within 4 business hours with specific, useful information. No scripts. No hard sell.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--bg)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_440px] gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--fg)] mb-8">Get in Touch</h2>

              {state === 'success' ? (
                <Card className="p-10 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-[var(--fg)] mb-3">Message received!</h3>
                  <p className="text-[var(--fg-muted)] mb-6">
                    Thanks, {form.firstName}. A fleet specialist will contact you at <strong className="text-[var(--fg)]">{form.email}</strong> within 4 business hours.
                  </p>
                  <Button onClick={() => { setState('idle'); setForm({ firstName: '', lastName: '', company: '', email: '', phone: '', fleetSize: '', message: '', interest: 'demo' }); }}>
                    Send Another Message
                  </Button>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Interest selector */}
                  <div className="mb-6">
                    <div className="text-sm font-medium text-[var(--fg)] mb-3">I&apos;m interested in:</div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { value: 'demo', label: '📅 Book a Demo' },
                        { value: 'pilot', label: '🚀 Start a Pilot' },
                        { value: 'audit', label: '🔍 Free Fleet Audit' },
                        { value: 'pricing', label: '💰 Pricing Info' },
                        { value: 'technical', label: '⚙️ Technical Question' },
                      ].map(opt => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setForm(prev => ({ ...prev, interest: opt.value }))}
                          className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                            form.interest === opt.value
                              ? 'bg-yellow-500/20 border-yellow-600/50 text-yellow-800'
                              : 'border-[var(--card-border)] text-[var(--fg-muted)] hover:border-yellow-600/30 hover:text-[var(--fg)]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <Input
                      label="First name *"
                      value={form.firstName}
                      onChange={update('firstName')}
                      error={errors.firstName}
                      placeholder="Pieter"
                      autoComplete="given-name"
                    />
                    <Input
                      label="Last name"
                      value={form.lastName}
                      onChange={update('lastName')}
                      placeholder="Van den Berg"
                      autoComplete="family-name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <Input
                      label="Company *"
                      value={form.company}
                      onChange={update('company')}
                      error={errors.company}
                      placeholder="EuroLogis Express BV"
                      autoComplete="organization"
                    />
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-[var(--fg)]">Fleet size *</label>
                      <select
                        value={form.fleetSize}
                        onChange={update('fleetSize')}
                        className={`w-full rounded-lg border bg-[var(--input-bg)] border-[var(--input-border)] px-4 py-2.5 text-sm text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-600/60 transition-all ${errors.fleetSize ? 'border-red-500/60' : ''}`}
                        aria-label="Fleet size"
                      >
                        <option value="">Select fleet size</option>
                        <option value="1-10">1–10 vehicles</option>
                        <option value="11-50">11–50 vehicles</option>
                        <option value="51-200">51–200 vehicles</option>
                        <option value="201-500">201–500 vehicles</option>
                        <option value="500+">500+ vehicles</option>
                      </select>
                      {errors.fleetSize && <p className="text-xs text-red-400">{errors.fleetSize}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <Input
                      label="Work email *"
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      error={errors.email}
                      placeholder="pieter@eurologis.eu"
                      autoComplete="email"
                    />
                    <Input
                      label="Phone (optional)"
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="+32 3 200 00 00"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="mb-6 flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-[var(--fg)]">Message (optional)</label>
                    <textarea
                      value={form.message}
                      onChange={update('message')}
                      rows={4}
                      placeholder="Tell us about your fleet, your current battery headaches, or any specific questions you have..."
                      className="w-full rounded-lg border bg-[var(--input-bg)] border-[var(--input-border)] px-4 py-2.5 text-sm text-[var(--fg)] placeholder:text-[var(--fg-muted)] focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-600/60 transition-all resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" loading={state === 'submitting'} className="w-full sm:w-auto">
                    {state === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>

                  <p className="text-xs text-[var(--fg-muted)] mt-3">
                    We respond within 4 business hours. No spam. No third-party sharing.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <Card className="p-6">
                <h3 className="font-bold text-[var(--fg)] mb-4">📅 Book a Demo Directly</h3>
                <p className="text-sm text-[var(--fg-muted)] mb-4 leading-relaxed">
                  Prefer to pick a time slot straight away? Book a 30-minute video call with a fleet specialist — no hold music, no PA filter.
                </p>
                <div className="rounded-lg bg-[var(--bg)] border border-[var(--card-border)] p-4 text-center">
                  <div className="text-2xl mb-2">📆</div>
                  <div className="text-sm font-semibold text-[var(--fg)] mb-1">Calendar booking</div>
                  <div className="text-xs text-[var(--fg-muted)] mb-3">Available Mon–Fri, 09:00–18:00 CET</div>
                  <button className="w-full bg-[var(--amber)] text-[var(--navy)] py-2.5 rounded-lg text-sm font-semibold hover:bg-[var(--amber-hover)] transition-colors">
                    Open Booking Calendar
                  </button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-[var(--fg)] mb-4">Contact Details</h3>
                <div className="space-y-3">
                  {[
                    { icon: '📧', label: 'Email', value: 'fleet@voltkeep.eu', href: 'mailto:fleet@voltkeep.eu' },
                    { icon: '📞', label: 'Phone', value: '+32 3 200 12 34', href: 'tel:+3232001234' },
                    { icon: '📍', label: 'Address', value: 'Industrielaan 42, 2000 Antwerp, Belgium', href: null },
                    { icon: '🕐', label: 'Hours', value: 'Mon–Fri, 09:00–18:00 CET', href: null },
                  ].map(item => (
                    <div key={item.label} className="flex gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <div className="text-xs text-[var(--fg-muted)]">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium text-yellow-600 hover:text-yellow-500 transition-colors">{item.value}</a>
                        ) : (
                          <div className="text-sm text-[var(--fg)]">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-green-500/10 border-green-500/20">
                <div className="text-2xl mb-3">🚀</div>
                <h3 className="font-bold text-green-300 mb-2">Free Fleet Audit</h3>
                <p className="text-sm text-green-400/80 leading-relaxed mb-3">
                  Not sure VoltKeep is right for your fleet? Let us audit your current battery costs, failure patterns, and vehicle types — free, no obligation, within 5 working days.
                </p>
                <Link href="/benefits">
                  <button className="text-sm font-semibold text-green-300 hover:text-green-200 transition-colors">
                    Learn about the Fleet Audit →
                  </button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <RevealSection>
        <section className="py-12 bg-[var(--card-bg)] border-t border-[var(--card-border)]">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-xs uppercase tracking-widest font-semibold text-[var(--fg-muted)] mb-6">Why fleet managers trust VoltKeep</p>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { icon: '⚡', title: 'Response in 4 hours', desc: 'Business hours. Real people. No bots.' },
                { icon: '🔄', title: '94% pilot-to-rollout rate', desc: 'Most customers commit after the pilot data is in.' },
                { icon: '🛡', title: 'CE certified hardware', desc: 'Every panel meets EU product safety standards.' },
              ].map(item => (
                <div key={item.title} className="text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-sm text-[var(--fg)]">{item.title}</div>
                  <div className="text-xs text-[var(--fg-muted)] mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>
    </div>
  );
}
