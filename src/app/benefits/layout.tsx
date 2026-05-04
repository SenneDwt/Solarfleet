import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Benefits & ROI Calculator: VoltKeep',
  description: 'Calculate your fleet\'s annual savings from eliminating dead batteries with VoltKeep solar charging. Enter your fleet size and see your ROI in seconds.',
};

export default function BenefitsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
