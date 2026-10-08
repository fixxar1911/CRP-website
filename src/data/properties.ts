export interface Property {
  id: string;
  title: string;
  category: 'Industrial Warehouse' | 'Truck Terminal' | 'Development Land' | 'Manufacturing & Flex';
  location: string;
  submarket: 'Edison / Raritan Center' | 'Turnpike Exit 8A' | 'Port Newark / Elizabeth' | 'Meadowlands Corridor' | 'I-287 / Central NJ';
  sqft: number;
  availableSqft: string;
  clearHeight: string;
  dockDoors: number;
  driveInDoors: number;
  power: string;
  parking: string;
  image: string;
  status: 'Available Now' | 'Build-to-Suit' | 'Under Development' | 'Leased';
  featured: boolean;
  highlights: string[];
  description: string;
}

export const PROPERTIES_DATA: Property[] = [
  {
    id: 'crp-edison-logistics-center',
    title: 'Edison Gateway Logistics Hub',
    category: 'Industrial Warehouse',
    location: '100 Executive Drive, Edison, NJ 08837',
    submarket: 'Edison / Raritan Center',
    sqft: 450000,
    availableSqft: '120,000 - 450,000 SF',
    clearHeight: "40' Clear",
    dockDoors: 54,
    driveInDoors: 4,
    power: '4,000 Amps, 480V, 3-Phase',
    parking: '180 Trailer Stalls / 240 Auto Stalls',
    image: '/images/hero_industrial_park.jpg',
    status: 'Available Now',
    featured: true,
    highlights: [
      'ESFR Sprinkler System',
      'Immediate Access to I-95 / NJ Turnpike Exit 10',
      '60-foot Concrete Apron',
      'LEED Certified Gold Building Spec'
    ],
    description: 'State-of-the-art Class-A cross-dock industrial logistics facility situated in prime Edison corridor. Engineered for high-throughput e-commerce and regional distribution.'
  },
  {
    id: 'crp-port-elizabeth-terminal',
    title: 'Port Elizabeth Fleet & Logistics Terminal',
    category: 'Truck Terminal',
    location: '450 Corbin Street, Elizabeth, NJ 07201',
    submarket: 'Port Newark / Elizabeth',
    sqft: 85000,
    availableSqft: '85,000 SF + 12 Acre Yard',
    clearHeight: "28' Clear",
    dockDoors: 42,
    driveInDoors: 6,
    power: '2,000 Amps, 480V',
    parking: '220 Heavy Truck / Trailer Spots',
    image: '/images/warehouse_interior.jpg',
    status: 'Available Now',
    featured: true,
    highlights: [
      'Less than 1.5 Miles from Port Newark Container Terminals',
      'Fully Fenced, Paved, and Guard-Gated Secure Compound',
      'On-site Maintenance Bay with Heavy Vehicle Lifts',
      'Zoned Heavy Industrial (I-3)'
    ],
    description: 'Premier port-adjacent truck terminal and container storage depot. Ideal for international drayage, fleet maintenance, and last-mile distribution into NYC metro area.'
  },
  {
    id: 'crp-exit8a-mega-park',
    title: 'Exit 8A Advanced Distribution Park',
    category: 'Industrial Warehouse',
    location: '250 Station Road, Cranbury, NJ 08512',
    submarket: 'Turnpike Exit 8A',
    sqft: 680000,
    availableSqft: '250,000 - 680,000 SF',
    clearHeight: "42' Clear",
    dockDoors: 88,
    driveInDoors: 8,
    power: '6,000 Amps, 480V, 3-Phase',
    parking: '290 Trailer Stalls / 410 Auto Stalls',
    image: '/images/hero_industrial_park.jpg',
    status: 'Under Development',
    featured: true,
    highlights: [
      'Super-Flat Concrete Floor (FF/FL 50/35)',
      'Sub-divisible to 250k SF Blocks',
      'Solar-Ready Roof Installation',
      'Dual Utility Feeds for High Reliability'
    ],
    description: 'Next-generation mega logistics hub in New Jersey’s legendary Exit 8A corridor. Designed for cold storage retrofit or high-bay automated material handling systems.'
  },
  {
    id: 'crp-meadowlands-fulfillment',
    title: 'Meadowlands Metro Last-Mile Center',
    category: 'Manufacturing & Flex',
    location: '88 Meadowlands Parkway, Secaucus, NJ 07094',
    submarket: 'Meadowlands Corridor',
    sqft: 175000,
    availableSqft: '45,000 - 175,000 SF',
    clearHeight: "32' Clear",
    dockDoors: 24,
    driveInDoors: 2,
    power: '2,500 Amps, 480V',
    parking: '95 Trailer / 160 Auto',
    image: '/images/office_commercial.jpg',
    status: 'Available Now',
    featured: false,
    highlights: [
      '8 Minutes to Lincoln Tunnel / Manhattan Access',
      'Fully Air-Conditioned Warehouse Area',
      'High-Image Glass Office Facade',
      'Outside Storage Capability'
    ],
    description: 'High-visibility last-mile fulfillment hub offering strategic proximity to Manhattan consumers. Features modern executive office spaces combined with high-clearance warehousing.'
  },
  {
    id: 'crp-central-nj-industrial-land',
    title: 'Piscataway Industrial Development Site',
    category: 'Development Land',
    location: 'Route 287 & Centennial Ave, Piscataway, NJ 08854',
    submarket: 'I-287 / Central NJ',
    sqft: 520000,
    availableSqft: 'Build-to-Suit up to 520,000 SF',
    clearHeight: "Custom (up to 45')",
    dockDoors: 70,
    driveInDoors: 6,
    power: 'Heavy Utility Power Available',
    parking: 'Expandable Yard & Parking',
    image: '/images/industrial_land.jpg',
    status: 'Build-to-Suit',
    featured: true,
    highlights: [
      '42 Acres Prime Fully-Entitled Industrial Site',
      'Direct Interchange Access to Interstate 287',
      'PILOT Tax Incentive Options Available',
      'Site Plan Approved for Immediate Groundbreaking'
    ],
    description: 'Fully entitled industrial parcel ready for custom build-to-suit logistics, advanced manufacturing, or specialized cold-chain facility construction.'
  },
  {
    id: 'crp-raritan-tech-flex',
    title: 'Raritan Bay Industrial & Tech Park',
    category: 'Manufacturing & Flex',
    location: '300 Meadow Road, Woodbridge, NJ 07095',
    submarket: 'Edison / Raritan Center',
    sqft: 195000,
    availableSqft: '35,000 - 195,000 SF',
    clearHeight: "30' Clear",
    dockDoors: 28,
    driveInDoors: 4,
    power: '5,000 Amps Heavy Power',
    parking: '120 Auto / 40 Trailer',
    image: '/images/warehouse_interior.jpg',
    status: 'Available Now',
    featured: false,
    highlights: [
      'Heavy Industrial Zoning with Chemical / Tech Clearance',
      'Natural Gas Line Service',
      'Heavy Floor Load Capacity (600 lbs/SF)',
      'Rail Spur Connection Available'
    ],
    description: 'Versatile manufacturing and flex facility with heavy infrastructure, robust power capacity, and direct freight rail connectivity in Central New Jersey.'
  }
];
