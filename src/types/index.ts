export interface Vehicle {
  id: string;
  name: string;
  model: string;
  batteryVoltage: number;
  batteryHealth: number;
  panelStatus: 'active' | 'standby' | 'offline';
  solarInput: number;
  status: 'good' | 'warning' | 'critical';
  location: string;
  daysProtected: number;
  trend: 'stable' | 'improving' | 'declining';
}

export interface PricingPlan {
  name: string;
  description: string;
  priceMonthly: number;
  priceAnnual: number;
  vehicles: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  badge?: string;
}

export interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  logo: string;
  fleetSize: number;
  vehicleType: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    before: string;
    after: string;
    improvement: string;
  }[];
  annualSaving: number;
  roiMonths: number;
  quote: string;
  quotee: string;
  quoteeRole: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  background: string;
}

export interface Feature {
  iconName: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
