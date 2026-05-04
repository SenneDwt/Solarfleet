import type { Vehicle, CaseStudy, FAQItem, TeamMember, PricingPlan, NavLink, Feature } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Pricing', href: '/pricing' },
];

export const FEATURES: Feature[] = [
  {
    iconName: 'battery-charging',
    title: 'Battery Never Goes Flat',
    description: 'The solar panel continuously replenishes the 12V battery while the vehicle is parked. Self-discharge is offset before the voltage drops low enough to cause a no-start.',
  },
  {
    iconName: 'shield-check',
    title: 'Always Ready to Start',
    description: 'Whether the vehicle sat for a weekend, a week, or a month, VoltKeep ensures the battery is at full strength when the driver turns the key.',
  },
  {
    iconName: 'trending-up',
    title: '3–5× Battery Lifespan',
    description: 'Deep discharge is the primary cause of premature battery failure. By keeping state of charge above 80%, VoltKeep dramatically reduces degradation and extends replacement intervals.',
  },
  {
    iconName: 'activity',
    title: 'Real-Time Battery Monitoring',
    description: 'Every vehicle reports its battery voltage and health to your fleet dashboard every 5 minutes. Know the status of every vehicle before the driver does.',
  },
  {
    iconName: 'wrench',
    title: 'Retrofits in 45 Minutes',
    description: 'No modifications to the vehicle. No drill holes. No voided warranties. A certified installer attaches the panel and connects a single cable to the battery.',
  },
  {
    iconName: 'sun',
    title: 'Works in Low Light',
    description: 'Even on a fully overcast day, the panel generates enough power to offset battery self-discharge. Designed for northern European conditions year-round.',
  },
  {
    iconName: 'bell',
    title: 'Alerts Before It Becomes a Problem',
    description: 'Set custom voltage thresholds. If a battery trends downward, due to a parasitic drain or panel fault, you get an alert before the vehicle fails to start.',
  },
  {
    iconName: 'clock',
    title: 'Depots, Airports, Long-Stay Lots',
    description: 'VoltKeep was built specifically for vehicles that sit. Overnight, over weekends, over extended parking periods, the panel works whenever daylight reaches it.',
  },
];

export const VEHICLES: Vehicle[] = [
  { id: 'VAN-001', name: 'Transit Alpha', model: 'Ford Transit 2.0', batteryVoltage: 12.71, batteryHealth: 98, panelStatus: 'active', solarInput: 87, status: 'good', location: 'Depot A, Antwerp', daysProtected: 284, trend: 'stable' },
  { id: 'VAN-002', name: 'Transit Beta', model: 'Ford Transit 2.0', batteryVoltage: 12.68, batteryHealth: 95, panelStatus: 'active', solarInput: 79, status: 'good', location: 'Depot A, Antwerp', daysProtected: 241, trend: 'stable' },
  { id: 'VAN-003', name: 'Sprinter-01', model: 'Mercedes Sprinter 314', batteryVoltage: 12.61, batteryHealth: 92, panelStatus: 'active', solarInput: 72, status: 'good', location: 'Depot B, Ghent', daysProtected: 198, trend: 'stable' },
  { id: 'VAN-004', name: 'Sprinter-02', model: 'Mercedes Sprinter 314', batteryVoltage: 12.55, batteryHealth: 89, panelStatus: 'standby', solarInput: 12, status: 'good', location: 'Depot B, Ghent', daysProtected: 176, trend: 'stable' },
  { id: 'TRK-001', name: 'Crafter Heavy', model: 'VW Crafter 35', batteryVoltage: 12.41, batteryHealth: 76, panelStatus: 'active', solarInput: 61, status: 'good', location: 'Long-Stay Lot, Brussels', daysProtected: 312, trend: 'stable' },
  { id: 'VAN-005', name: 'Vivaro North', model: 'Vauxhall Vivaro', batteryVoltage: 12.18, batteryHealth: 58, panelStatus: 'active', solarInput: 44, status: 'warning', location: 'Long-Stay Lot, Bruges', daysProtected: 89, trend: 'declining' },
  { id: 'TRK-002', name: 'Daily Express', model: 'Iveco Daily 35S', batteryVoltage: 12.74, batteryHealth: 94, panelStatus: 'active', solarInput: 88, status: 'good', location: 'Depot A, Antwerp', daysProtected: 156, trend: 'improving' },
  { id: 'VAN-006', name: 'Transit Gamma', model: 'Ford Transit 2.0', batteryVoltage: 12.52, batteryHealth: 87, panelStatus: 'active', solarInput: 66, status: 'good', location: 'Depot C, Charleroi', daysProtected: 221, trend: 'stable' },
  { id: 'VAN-007', name: 'Transit Delta', model: 'Ford Transit Custom', batteryVoltage: 12.59, batteryHealth: 91, panelStatus: 'active', solarInput: 75, status: 'good', location: 'Depot C, Charleroi', daysProtected: 133, trend: 'stable' },
  { id: 'TRK-003', name: 'Boxer Cargo', model: 'Peugeot Boxer 2.2', batteryVoltage: 11.84, batteryHealth: 34, panelStatus: 'offline', solarInput: 0, status: 'critical', location: 'Airport, Zaventem', daysProtected: 412, trend: 'declining' },
  { id: 'VAN-008', name: 'Connect-01', model: 'Ford Transit Connect', batteryVoltage: 12.72, batteryHealth: 96, panelStatus: 'active', solarInput: 90, status: 'good', location: 'Depot A, Antwerp', daysProtected: 67, trend: 'stable' },
  { id: 'VAN-009', name: 'Transporter S', model: 'VW Transporter T6.1', batteryVoltage: 12.48, batteryHealth: 83, panelStatus: 'active', solarInput: 59, status: 'good', location: 'Depot B, Ghent', daysProtected: 189, trend: 'stable' },
  { id: 'VAN-010', name: 'Ducato Max', model: 'Fiat Ducato 2.3', batteryVoltage: 12.23, batteryHealth: 71, panelStatus: 'standby', solarInput: 8, status: 'warning', location: 'Long-Stay Lot, Mechelen', daysProtected: 344, trend: 'declining' },
  { id: 'TRK-004', name: 'Master XL', model: 'Renault Master 2.3', batteryVoltage: 12.54, batteryHealth: 88, panelStatus: 'active', solarInput: 71, status: 'good', location: 'Depot C, Charleroi', daysProtected: 278, trend: 'stable' },
  { id: 'VAN-011', name: 'Vivaro South', model: 'Vauxhall Vivaro', batteryVoltage: 12.64, batteryHealth: 93, panelStatus: 'active', solarInput: 82, status: 'good', location: 'Depot A, Antwerp', daysProtected: 104, trend: 'stable' },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'eurologis',
    company: 'EuroLogis Express',
    industry: 'Last-Mile Logistics',
    logo: 'EL',
    fleetSize: 340,
    vehicleType: 'Ford Transit & Mercedes Sprinter vans',
    challenge: 'EuroLogis operated 340 vans across Belgian depots. Vehicles sat overnight and over weekends, and each winter brought a wave of batteries that had gone flat, vans that drivers arrived to start at 6am and could not. Forty-seven battery failures in a single quarter resulted in missed delivery windows, SLA penalty charges, and replacement costs that added up to over €60,000 per year.',
    solution: 'VoltKeep VS-120 panels were retrofitted across all 340 vans over six weekends. The fleet dashboard was integrated into their existing operations software, giving dispatchers real-time battery voltage for every vehicle before each shift began.',
    results: [
      { metric: 'Dead battery incidents per quarter', before: '47', after: '0', improvement: 'Eliminated' },
      { metric: 'Annual battery replacement cost', before: '€23,460', after: '€4,100', improvement: '83% reduction' },
      { metric: 'SLA penalty exposure per year', before: '€41,000', after: '€0', improvement: 'Fully eliminated' },
      { metric: 'Morning no-start failures', before: '3–5 per week', after: '0', improvement: 'Zero incidents' },
    ],
    annualSaving: 78400,
    roiMonths: 8,
    quote: 'We used to budget for winter breakdowns like they were a fact of life. VoltKeep made that entire line item disappear from our P&L.',
    quotee: 'Pieter Van den Berg',
    quoteeRole: 'Head of Fleet Operations, EuroLogis Express',
  },
  {
    id: 'northernair',
    company: 'Northern Air Services',
    industry: 'Airport Ground Support',
    logo: 'NA',
    fleetSize: 85,
    vehicleType: 'Ground support vehicles, escort cars, maintenance vans',
    challenge: 'Vehicles at Brussels Airport stood on apron stands for 8 to 16 hours between shifts. Cold temperatures and extended parking periods meant that 12% of the fleet was unavailable each morning, drivers arrived to vehicles that would not start. Standby reserves were required, turnarounds were delayed, and battery replacements were running at 34 units per year.',
    solution: 'All 85 vehicles received VoltKeep VS-120 panels. Battery status feeds directly into the operations room, replacing the manual morning walk-around check that previously took 45 minutes per shift.',
    results: [
      { metric: 'Morning vehicle availability', before: '88%', after: '99.8%', improvement: '+11.8pp' },
      { metric: 'Standby reserve vehicles required', before: '11', after: '2', improvement: '82% reduction' },
      { metric: 'Battery replacements per year', before: '34', after: '3', improvement: '91% reduction' },
      { metric: 'No-start incidents per year', before: '23', after: '0', improvement: 'Zero incidents' },
    ],
    annualSaving: 67000,
    roiMonths: 6,
    quote: 'The ops team used to dread winter Monday mornings. Now it\'s a non-event. Every vehicle is ready. Every time.',
    quotee: 'Sandra Kowalczyk',
    quoteeRole: 'VP Ground Operations, Northern Air Services',
  },
  {
    id: 'citymed',
    company: 'CityMed Healthcare Transport',
    industry: 'Medical & Patient Transport',
    logo: 'CM',
    fleetSize: 120,
    vehicleType: 'Patient transport vans, accessible minibuses',
    challenge: 'For CityMed, a vehicle that won\'t start means a patient who misses a dialysis session or a chemotherapy appointment. Three vehicles per month required battery attention during winter, with cascading appointment cancellations and significant staff overtime as drivers waited for recovery.',
    solution: 'VoltKeep was selected after a 30-vehicle pilot through the winter of 2023. Zero incidents during the pilot led to full fleet rollout. Battery health data is now used in CityMed\'s duty-of-care compliance reporting.',
    results: [
      { metric: 'Battery-related vehicle failures per month', before: '3', after: '0', improvement: 'Eliminated' },
      { metric: 'Patient appointment cancellations from vehicle issues', before: '18/year', after: '0', improvement: '100% prevented' },
      { metric: 'Driver overtime due to battery incidents', before: '€12,400/yr', after: '€0', improvement: 'Fully eliminated' },
      { metric: 'Patient satisfaction score', before: '74%', after: '91%', improvement: '+23pp' },
    ],
    annualSaving: 44500,
    roiMonths: 7,
    quote: 'This isn\'t just about saving money on batteries. When a van fails to start at 7am, a patient doesn\'t get to their treatment. VoltKeep removed that risk entirely.',
    quotee: 'Dr. Marie Leclerc',
    quoteeRole: 'Director of Patient Services, CityMed Healthcare',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Why do batteries go flat in parked vehicles?',
    answer: 'Every 12V lead-acid battery self-discharges naturally over time, even with nothing drawing from it. Modern vehicles also have permanent parasitic loads: alarm systems, central locking, telematics, and various ECUs that draw a small but continuous current. In cold weather, self-discharge accelerates. After a week or two without the engine running to recharge, many batteries drop below the voltage needed to start the vehicle.',
  },
  {
    question: 'How much power does VoltKeep actually generate?',
    answer: 'The VS-120 is a 120W peak panel. In typical northern European conditions, it generates an average of 1–8W during daylight hours, depending on cloud cover and sun angle. A parked vehicle\'s parasitic drain is usually 20–80mA, equivalent to 0.24–1W at 12V. So even in overcast conditions, the panel comfortably offsets drain and keeps the battery at full charge.',
  },
  {
    question: 'Does it work on cloudy days and in winter?',
    answer: 'Yes. Monocrystalline panels generate power from diffuse daylight, not direct sunlight. On a fully overcast day, the VS-120 still produces 15–30% of its rated output, more than enough to offset battery self-discharge. We designed and tested specifically for Belgian and Dutch winter conditions. The product works year-round.',
  },
  {
    question: 'Does it require any modifications to the vehicle?',
    answer: 'No. The panel attaches to the roof using our AeroLock adhesive mounting system, no drill holes, no roof penetrations, no changes to the vehicle\'s wiring loom. A single weatherproof cable runs from the panel to the MPPT controller, which connects to the battery with two clips. The installation is fully reversible.',
  },
  {
    question: 'Will it affect the vehicle\'s manufacturer warranty?',
    answer: 'No. Because VoltKeep connects in parallel with the battery, not into the vehicle\'s electrical system, it does not modify any factory-fitted components. CE certification documentation confirms this. We provide a letter for your vehicle records on request.',
  },
  {
    question: 'How long does installation take?',
    answer: 'A single vehicle takes 40–60 minutes for a trained installer. We offer access to a certified installer network across Belgium, Netherlands, Germany, and France. We can also run a half-day certification programme for your own workshop team.',
  },
  {
    question: 'What does the monitoring dashboard show?',
    answer: 'Every 5 minutes, the VoltKeep unit transmits the battery\'s current voltage, state of charge percentage, and the panel\'s output wattage to your fleet dashboard. You can see at a glance which vehicles have healthy batteries, which are trending downward, and which require attention, before any vehicle fails to start.',
  },
  {
    question: 'Can VoltKeep detect when a battery is failing?',
    answer: 'Yes. The monitoring system tracks battery voltage trends over time. A battery that is degrading will show a gradual decline in resting voltage even when the panel is generating power. VoltKeep alerts you to this pattern weeks before the battery fails completely, allowing you to schedule a planned replacement rather than deal with an unexpected no-start.',
  },
  {
    question: 'What warranty does VoltKeep offer?',
    answer: 'Starter plan: 2-year panel warranty. Growth plan: 3 years. Enterprise: 5 years with full replacement guarantee. The MPPT controller and IoT module carry a 2-year warranty across all plans. Monocrystalline panels of this specification typically operate for 20+ years with less than 0.5% annual efficiency degradation.',
  },
  {
    question: 'How long until we see a return on the investment?',
    answer: 'For most fleets, ROI is reached within 6–10 months. The key cost drivers are battery replacement frequency, call-out costs, and the operational impact of vehicles that fail to start. Our Customer Success team will model this against your actual fleet data at no charge.',
  },
  {
    question: 'Can we run a pilot before committing to the full fleet?',
    answer: 'Yes, we recommend it. Our standard pilot is 15–30 vehicles over one quarter. We install, monitor, and deliver a written performance report. Over 94% of pilots convert to a full rollout. Pilot pricing is the same as our Starter plan.',
  },
  {
    question: 'Does VoltKeep integrate with our existing fleet management software?',
    answer: 'Yes. We offer a REST API and pre-built integrations for Verizon Connect, Webfleet, Samsara, and Quartix. Enterprise plan customers can configure custom webhooks so battery health data flows directly into their existing dashboards or maintenance scheduling systems.',
  },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Matthias Brenner',
    role: 'CEO & Co-founder',
    bio: 'Matthias spent 15 years managing a 500-vehicle fleet for a major European logistics operator. After the third dead battery in one morning during a −12°C January, he decided there had to be a permanent solution. He holds an MBA from INSEAD and sits on the board of the Belgian Fleet Association.',
    initials: 'MB',
    background: 'bg-yellow-600',
  },
  {
    name: 'Dr. Sarah Okafor',
    role: 'CTO & Co-founder',
    bio: 'Sarah holds a PhD in Photovoltaic Systems from TU Delft and spent six years developing MPPT algorithms for industrial solar applications. She designed VoltKeep\'s charging controller and leads all hardware and firmware development from our Antwerp R&D lab.',
    initials: 'SO',
    background: 'bg-blue-600',
  },
  {
    name: 'Lars Vandenberghe',
    role: 'Head of Product',
    bio: 'Lars joined from Volvo Trucks where he led connected vehicle services for Northern Europe. He built the VoltKeep Fleet Dashboard from the ground up, informed by hundreds of interviews with fleet managers across logistics, healthcare, and utilities.',
    initials: 'LV',
    background: 'bg-slate-600',
  },
  {
    name: 'Emma Kessler',
    role: 'VP Customer Success',
    bio: 'Emma previously ran fleet operations for a 1,200-vehicle logistics network. She designed our pilot programme framework, which has a 94% conversion rate to full rollout. She understands fleet manager priorities at an operational level.',
    initials: 'EK',
    background: 'bg-indigo-600',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'For smaller fleets starting their first deployment.',
    priceMonthly: 29,
    priceAnnual: 24,
    vehicles: 'Up to 10 vehicles',
    features: [
      'VoltKeep VS-120 panel per vehicle',
      'Real-time battery voltage monitoring',
      'Web dashboard access',
      'Email alerts on low voltage',
      'Standard MPPT controller',
      '2-year panel warranty',
      'Email support (48hr response)',
      'Certified installer network access',
    ],
    highlighted: false,
    cta: 'Start Free Pilot',
  },
  {
    name: 'Growth',
    description: 'Full visibility and priority support for mid-sized fleets.',
    priceMonthly: 24,
    priceAnnual: 20,
    vehicles: 'Up to 100 vehicles',
    features: [
      'Everything in Starter',
      'Battery health trend analysis',
      'SMS and webhook alerts',
      'Predictive failure detection',
      'Maintenance scheduling integration',
      '3-year panel warranty',
      'Priority support (4hr response)',
      'Quarterly performance reports',
      'API access (read)',
    ],
    highlighted: true,
    cta: 'Book a Demo',
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    description: 'Custom deployments for large fleets with dedicated support.',
    priceMonthly: 0,
    priceAnnual: 0,
    vehicles: 'Unlimited vehicles',
    features: [
      'Everything in Growth',
      'Dedicated account manager',
      'Custom TMS / FMS integration',
      'Full REST API access',
      '5-year warranty + swap guarantee',
      'SLA-backed support commitment',
      'On-site installation management',
      'Custom hardware configurations',
      'White-label dashboard option',
    ],
    highlighted: false,
    cta: 'Contact Sales',
  },
];
