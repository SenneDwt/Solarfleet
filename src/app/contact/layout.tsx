import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Demo — VoltKeep',
  description: 'Book a free fleet audit or 30-minute demo with a VoltKeep fleet specialist. Response within 4 business hours. No scripts, no hard sell.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
