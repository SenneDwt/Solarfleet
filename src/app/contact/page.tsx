'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Input from '@/components/ui/Input';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  fleetSize: string;
  interest: string;
  message: string;
}

type FormState = 'idle' | 'submitting' | 'success';

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', company: '', email: '',
    fleetSize: '', interest: 'demo', message: '',
  });
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  function validate(): boolean {
    const e: Partial<FormData> = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.company.trim()) e.company = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.fleetSize) e.fleetSize = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setState('submitting');
    await new Promise(r => setTimeout(r, 1200));
    setState('success');
  }

  function update(field: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm(prev => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
    };
  }

  const selectClass = (hasError?: string) =>
    `w-full rounded-lg border bg-[var(--input-bg)] px-4 py-2.5 text-sm text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-[var(--amber)]/50 focus:border-[var(--amber)]/60 transition-all ${hasError ? 'border-red-500/60' : 'border-[var(--input-border)]'}`;

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--bg)] -z-10" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 65% 70% at 5% 60%, rgba(255,200,0,0.13) 0%, transparent 55%), radial-gradient(ellipse 55% 60% at 90% 20%, rgba(255,200,0,0.07) 0%, transparent 50%)',
        }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">

          {/* Left */}
          <div>
            <Badge variant="amber" className="mb-6">Contact</Badge>
            <h1 className="text-4xl font-extrabold text-[var(--fg)] mb-5 leading-tight">
              Talk to the team.
            </h1>
            <p className="text-[var(--fg-muted)] leading-relaxed mb-10">
              Tell us about your fleet and what you&apos;re dealing with. We&apos;ll get back to you within 4 business hours with a straight answer.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: 'Response within 4 hours',
                  desc: 'During business hours, Mon–Fri 09:00–18:00 CET.',
                },
                {
                  title: 'CE certified hardware',
                  desc: 'Every panel and controller meets EU product safety standards.',
                },
                {
                  title: 'Free fleet audit',
                  desc: 'Not sure where to start? We can audit your fleet at no cost.',
                },
              ].map(item => (
                <div key={item.title} className="flex gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[var(--amber-soft)] border border-[var(--amber)]/30 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-[var(--amber-text)]">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--fg)]">{item.title}</div>
                    <div className="text-sm text-[var(--fg-muted)] mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-[var(--card-border)]">
              <div className="text-xs text-[var(--fg-muted)] mb-1">Email us directly</div>
              <a href="mailto:fleet@voltkeep.eu" className="text-sm font-semibold text-[var(--amber)] hover:opacity-80 transition-opacity">
                fleet@voltkeep.eu
              </a>
            </div>
          </div>

          {/* Right — form */}
          {state === 'success' ? (
            <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-10 text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-green-600">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <p className="font-bold text-[var(--fg)] text-lg mb-2">Message received</p>
              <p className="text-sm text-[var(--fg-muted)] mb-6">
                We&apos;ll contact you at <strong className="text-[var(--fg)]">{form.email}</strong> within 4 business hours.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => { setState('idle'); setForm({ firstName: '', lastName: '', company: '', email: '', fleetSize: '', interest: 'demo', message: '' }); }}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8 space-y-5">

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[var(--fg)]">What can we help you with?</label>
                <select value={form.interest} onChange={update('interest')} className={selectClass()} aria-label="Interest">
                  <option value="demo">Book a demo</option>
                  <option value="pilot">Start a pilot</option>
                  <option value="audit">Free fleet audit</option>
                  <option value="technical">Technical question</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input label="First name *" value={form.firstName} onChange={update('firstName')} error={errors.firstName} placeholder="First name" autoComplete="given-name" />
                <Input label="Last name" value={form.lastName} onChange={update('lastName')} placeholder="Last name" autoComplete="family-name" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input label="Company *" value={form.company} onChange={update('company')} error={errors.company} placeholder="Your company" autoComplete="organization" />
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[var(--fg)]">Fleet size *</label>
                  <select value={form.fleetSize} onChange={update('fleetSize')} className={selectClass(errors.fleetSize)} aria-label="Fleet size">
                    <option value="">Select</option>
                    <option value="1-10">1–10 vehicles</option>
                    <option value="11-50">11–50 vehicles</option>
                    <option value="51-200">51–200 vehicles</option>
                    <option value="201-500">201–500 vehicles</option>
                    <option value="500+">500+ vehicles</option>
                  </select>
                  {errors.fleetSize && <p className="text-xs text-red-400 mt-1">{errors.fleetSize}</p>}
                </div>
              </div>

              <Input label="Work email *" type="email" value={form.email} onChange={update('email')} error={errors.email} placeholder="you@company.com" autoComplete="email" />

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[var(--fg)]">Message <span className="text-[var(--fg-muted)] font-normal">(optional)</span></label>
                <textarea
                  value={form.message}
                  onChange={update('message')}
                  rows={3}
                  placeholder="Vehicle types, current issues, anything that helps us prepare..."
                  className="w-full rounded-lg border bg-[var(--input-bg)] border-[var(--input-border)] px-4 py-2.5 text-sm text-[var(--fg)] placeholder:text-[var(--fg-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--amber)]/50 focus:border-[var(--amber)]/60 transition-all resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-[var(--card-border)]">
                <Button type="submit" size="lg" loading={state === 'submitting'}>
                  {state === 'submitting' ? 'Sending...' : 'Send message'}
                </Button>
                <p className="text-xs text-[var(--fg-muted)]">Response within 4 hours.</p>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
