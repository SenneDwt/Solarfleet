'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import RevealSection from '@/components/ui/RevealSection';
import { FAQ_ITEMS } from '@/lib/constants';

function AccordionItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-[var(--card-border)] rounded-xl overflow-hidden bg-[var(--card-bg)] transition-all duration-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[var(--fg)] pr-4">{question}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-[var(--card-border)] flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-yellow-600 border-yellow-600 rotate-45' : 'bg-transparent'}`}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#0a1628' : 'currentColor'} strokeWidth="3" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="px-6 pb-5">
          <div className="section-divider mb-5" />
          <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--bg-secondary)] overflow-hidden text-center border-b border-[var(--card-border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_35%,rgba(245,158,11,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.08))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="muted" className="mb-5">FAQ</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--fg)] mb-6">
            Questions Fleet Managers Actually Ask
          </h1>
          <p className="text-[var(--fg-muted)] text-lg max-w-2xl mx-auto">
            No marketing fluff. Straight answers to the objections, concerns, and technical questions we hear most from fleet operators considering VoltKeep.
          </p>
        </div>
      </section>

      {/* FAQ items */}
      <section className="py-24 bg-[var(--bg)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <RevealSection key={i}>
                <AccordionItem
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Not answered */}
      <RevealSection>
        <section className="py-16 bg-[var(--card-bg)]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-3">Didn&apos;t Find Your Answer?</h2>
            <p className="text-[var(--fg-muted)] mb-6">
              Our team includes former fleet managers who&apos;ve asked every possible question. If it&apos;s not here, they&apos;ll know the answer within the hour.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact"><Button size="md">Ask a Specific Question</Button></Link>
              <a href="mailto:fleet@voltkeep.eu">
                <Button variant="outline" size="md">fleet@voltkeep.eu</Button>
              </a>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* CTA */}
      <section className="py-20 bg-[var(--navy)] text-center dark-surface">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold text-[var(--fg)] mb-4">Ready to Stop Answering Questions and Start Eliminating Failures?</h2>
          <p className="text-[var(--fg-muted)] mb-8">
            Book a 30-minute demo. We&apos;ll show you the panel, the dashboard, and the numbers — with no commitment required.
          </p>
          <Link href="/contact"><Button size="lg">Book a Free Demo</Button></Link>
        </div>
      </section>
    </div>
  );
}
