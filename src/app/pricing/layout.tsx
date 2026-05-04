import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing: VoltKeep Fleet Solar Plans',
  description: 'Transparent B2B pricing for VoltKeep solar fleet charging. Starter, Growth, and Enterprise plans. Hardware included. ROI in under 12 months.',
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
