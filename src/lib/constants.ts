import type { Vehicle, CaseStudy, FAQItem, TeamMember, PricingPlan, NavLink, Feature } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Dashboard', href: '/dashboard' },
];

export const FEATURES: Feature[] = [
  {
    iconName: 'sun',
    title: 'Flexible & Foldable Solar Panel',
    description: 'Available in multiple wattages. Folds flat for storage and transport, attaches to any vehicle roof without drill holes or permanent modifications.',
  },
  {
    iconName: 'battery-charging',
    title: 'Smart MPPT Charge Controller',
    description: 'Extracts maximum power from the panel at all times and automatically adapts its charging profile to match your battery chemistry.',
  },
  {
    iconName: 'shield-check',
    title: 'All Battery Types Supported',
    description: 'Compatible with lead-acid, AGM, gel, EFB, and lithium batteries. The MPPT controller selects the correct charging profile — no manual configuration required.',
  },
  {
    iconName: 'zap',
    title: 'Overcharge Protection Built In',
    description: 'Once the battery is full, the controller switches to float mode automatically. No overcharging, no heat build-up, no shortened battery lifespan from incorrect charging.',
  },
  {
    iconName: 'wrench',
    title: 'IP67 Fully Sealed',
    description: 'Panel and controller are waterproof and dustproof to IP67. Built for depot conditions: rain, snow, pressure washing, and temperature extremes.',
  },
  {
    iconName: 'activity',
    title: 'Optional BMS Monitoring Module',
    description: 'Add a BMS unit to measure SOC, SOH, and voltage at configurable intervals. Data is transmitted to your fleet platform via a built-in 4G SIM card.',
  },
  {
    iconName: 'trending-up',
    title: 'Scale from 1 to Unlimited',
    description: 'Monitor a single vehicle or an entire fleet. Each BMS unit communicates independently — no local gateway or network infrastructure required.',
  },
  {
    iconName: 'bell',
    title: 'Proactive Failure Alerts',
    description: 'Get notified when a battery stops charging or shows degradation — before the vehicle fails to start and before a breakdown occurs.',
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
    solution: 'VoltKeep flexible solar panels and MPPT controllers were retrofitted across all 340 vans over six weekends. The optional BMS monitoring module was added to the full fleet, giving dispatchers real-time battery SOC, SOH, and voltage for every vehicle before each shift began.',
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
    solution: 'All 85 vehicles received VoltKeep solar panels and MPPT controllers. BMS modules were added to the full fleet, with battery status feeding directly into the operations room and replacing the manual morning walk-around check that previously took 45 minutes per shift.',
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
    solution: 'VoltKeep was selected after a 30-vehicle pilot through the winter of 2023. Zero incidents during the pilot led to full fleet rollout. BMS monitoring data is now used in CityMed\'s duty-of-care compliance reporting.',
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
    question: 'What exactly does VoltKeep include?',
    answer: 'VoltKeep consists of two core components: a flexible, foldable solar panel (available in multiple wattages) and a smart MPPT charge controller. Together they keep your vehicle battery fully charged while parked. Optionally, you can add a BMS monitoring module that measures battery SOC, SOH, and voltage and transmits the data via a built-in 4G SIM card to your fleet dashboard.',
  },
  {
    question: 'Which battery types does VoltKeep support?',
    answer: 'VoltKeep supports all common 12V battery types: lead-acid (flooded), AGM, gel, EFB, and lithium. The MPPT controller automatically detects the battery type and applies the correct charging profile. You do not need to configure anything manually.',
  },
  {
    question: 'Does the MPPT controller prevent overcharging?',
    answer: 'Yes. Overcharge protection is built into the MPPT controller. Once the battery reaches full charge, the controller automatically switches to a float mode that holds the battery at 100% without pushing in additional current. The battery cannot be damaged by overcharging regardless of how long the vehicle is parked.',
  },
  {
    question: 'Is the equipment waterproof?',
    answer: 'Yes. Both the solar panel and the MPPT controller carry an IP67 rating, meaning they are fully sealed against water and dust ingress. They are designed for outdoor commercial use including rain, snow, high-pressure washing, and the temperature extremes typical of depot environments.',
  },
  {
    question: 'What is the BMS module and is it required?',
    answer: 'The BMS (Battery Management System) module is an optional add-on that acts as a battery health monitor. It measures the battery\'s state of charge (SOC), state of health (SOH), and voltage at configurable intervals and transmits the data to your fleet dashboard via a built-in 4G SIM card. It is not required to keep your battery charged — the panel and MPPT controller handle that on their own. The BMS adds visibility, monitoring, and alerting on top.',
  },
  {
    question: 'What does the fleet platform show?',
    answer: 'The platform displays the battery SOC, SOH, and voltage for every vehicle fitted with a BMS module. It updates at regular intervals and sends you an alert if a battery stops charging, falls below a threshold, or shows signs of degradation — before any vehicle fails to start.',
  },
  {
    question: 'How many vehicles can I monitor?',
    answer: 'There is no upper limit. The platform scales from a single BMS unit on one vehicle to thousands of units across a full fleet. Each BMS unit communicates independently via its own built-in 4G SIM card, so there is no central gateway or local network infrastructure required.',
  },
  {
    question: 'Why does a flat battery cause more than just a no-start?',
    answer: 'When a 12V battery drops to a critically low voltage, the vehicle\'s electronic systems — ECUs, control modules, and sensors — can lose memory, reset to factory state, or log fault codes. In some cases this triggers warning lights or requires specialist recalibration. Preventing the battery from going flat eliminates all of this downstream damage entirely, avoiding unnecessary component inspections and replacements.',
  },
  {
    question: 'Does it work on cloudy days and in winter?',
    answer: 'Yes. The flexible monocrystalline panel generates power from diffuse daylight, not direct sunlight. On a fully overcast day it still produces 15–30% of rated output — more than enough to offset battery self-discharge. VoltKeep was designed and tested specifically for northern European conditions and works year-round.',
  },
  {
    question: 'Does it require any modifications to the vehicle?',
    answer: 'No. The panel attaches to the roof without drill holes or permanent modifications. The MPPT controller connects to the battery with two cables. The installation is fully reversible and does not affect the vehicle\'s manufacturer warranty.',
  },
  {
    question: 'What wattages are available?',
    answer: 'The VoltKeep panel is available in multiple wattages to suit different vehicle types, roof sizes, and parking conditions. Contact us to discuss which wattage is the right fit for your fleet.',
  },
  {
    question: 'When will we see a return on the investment?',
    answer: 'For most fleets, ROI is reached within 6–10 months. The primary cost drivers are battery replacement frequency, call-out costs, and operational downtime from vehicles that fail to start. Our team will model this against your actual fleet data at no charge.',
  },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Matthias Brenner',
    role: 'CEO & Co-founder',
    bio: 'Matthias spent 15 years managing a 500-vehicle fleet for a major European logistics operator. After the third dead battery in one morning during a −12°C January, he decided there had to be a permanent solution. He holds an MBA from INSEAD and sits on the board of the Belgian Fleet Association.',
    initials: 'MB',
    background: 'bg-[var(--amber)]',
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
    name: 'Solar Kit',
    description: 'Flexible solar panel and MPPT controller. Keep every battery charged — no monitoring required.',
    priceMonthly: 0,
    priceAnnual: 0,
    vehicles: 'Any number of vehicles',
    features: [
      'Flexible foldable solar panel (multiple wattages)',
      'Smart MPPT charge controller',
      'All battery types supported',
      'Overcharge protection built in',
      'IP67 waterproof & dustproof',
      'No drill holes — fully reversible install',
      'CE certified',
      '2-year hardware warranty',
    ],
    highlighted: false,
    cta: 'Get a Quote',
  },
  {
    name: 'Solar Kit + BMS',
    description: 'Everything in Solar Kit plus battery monitoring, fleet dashboard, and proactive alerts.',
    priceMonthly: 29,
    priceAnnual: 24,
    vehicles: 'Up to 50 vehicles',
    features: [
      'Everything in Solar Kit',
      'BMS monitoring module per vehicle',
      'SOC, SOH & voltage tracking',
      'Built-in 4G SIM card',
      'Fleet dashboard access',
      'Low battery & fault alerts',
      'Configurable reporting intervals',
      '3-year hardware warranty',
      'Email support (4hr response)',
    ],
    highlighted: true,
    cta: 'Book a Demo',
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    description: 'Custom deployments for large fleets with dedicated support, SLA, and full integration.',
    priceMonthly: 0,
    priceAnnual: 0,
    vehicles: 'Unlimited vehicles',
    features: [
      'Everything in Solar Kit + BMS',
      'Dedicated account manager',
      'Custom platform integration',
      'Full REST API access',
      '5-year warranty + swap guarantee',
      'SLA-backed support commitment',
      'On-site installation management',
      'Custom reporting & data exports',
      'White-label dashboard option',
    ],
    highlighted: false,
    cta: 'Contact Sales',
  },
];
