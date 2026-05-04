import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fleet Dashboard Demo: VoltKeep',
  description: 'Live mock fleet dashboard showing per-vehicle battery health, solar input, uptime, and alerts. See what your fleet monitoring could look like.',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
