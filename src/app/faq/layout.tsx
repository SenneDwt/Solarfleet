import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — VoltKeep Fleet Solar',
  description: 'Honest answers to the questions fleet managers ask most about VoltKeep solar charging panels. Covers installation, compatibility, ROI, and monitoring.',
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
