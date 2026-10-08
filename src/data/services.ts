export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  features: string[];
  statValue: string;
  statLabel: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'industrial-leasing',
    title: 'Industrial Warehouse Leasing',
    iconName: 'Warehouse',
    tagline: 'Precision tenant representation & landlord leasing',
    description: 'We represent top global 3PLs, logistics providers, e-commerce giants, and institutional property owners in negotiating high-yield industrial leases across New Jersey.',
    features: [
      'Tenant & Landlord Representation',
      'Lease Structuring & Option Analysis',
      'High-Bay & Cold Storage Advisory',
      'Competitive Submarket Benchmarking'
    ],
    statValue: '5.2M+ SF',
    statLabel: 'Leased & Managed'
  },
  {
    id: 'land-development',
    title: 'Strategic Land Acquisition & Build-to-Suit',
    iconName: 'Building2',
    tagline: 'Unlocking prime parcels & entitled development sites',
    description: 'From site selection to zoning approvals, we guide industrial developers and end-users through ground-up development, land assemblages, and brownfield redevelopments.',
    features: [
      'Off-Market Land Assemblage',
      'Zoning & Environmental Due Diligence',
      'Build-to-Suit Logistics Design',
      'Municipal Incentive & PILOT Navigation'
    ],
    statValue: '120+ Acres',
    statLabel: 'Industrial Land Entitled'
  },
  {
    id: 'truck-logistics',
    title: 'Truck Terminal & Fleet Logistics Brokerage',
    iconName: 'Truck',
    tagline: 'Specialized infrastructure for freight and drayage operators',
    description: 'Recognized statewide for expertise in specialized logistics assets including maintenance bays, cross-dock truck terminals, trailer drops, and port container yards.',
    features: [
      'Cross-Dock Facility Leasing',
      'Heavy Truck Yard Permitting',
      'Port Drayage Depot Siting',
      'Intermodal Rail Corridor Access'
    ],
    statValue: '450+ Bays',
    statLabel: 'Truck Terminal Capacity'
  },
  {
    id: 'capital-markets',
    title: 'Capital Markets & Investment Advisory',
    iconName: 'TrendingUp',
    tagline: 'Institutional transaction advisory & asset disposition',
    description: 'Empowering real estate investors, private equity funds, and corporate owner-users to maximize asset value through strategic acquisitions, sales, and sale-leasebacks.',
    features: [
      'Single & Multi-Tenant Investment Sales',
      'Corporate Sale-Leaseback Advisory',
      'Capital Structure & Debt Placement',
      'Valuation & Underwriting Analysis'
    ],
    statValue: '$1.2B+',
    statLabel: 'Transaction Volume'
  }
];
