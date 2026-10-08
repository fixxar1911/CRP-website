export interface Submarket {
  id: string;
  name: string;
  keyExit: string;
  avgRent: string;
  vacancyRate: string;
  nycDriveTime: string;
  portDistance: string;
  keyDistinction: string;
  description: string;
  majorCorridors: string[];
}

export const SUBMARKETS_DATA: Submarket[] = [
  {
    id: 'edison-raritan',
    name: 'Edison / Raritan Center Corridor',
    keyExit: 'NJ Turnpike Exit 10 / I-95',
    avgRent: '$16.50 - $19.50 / SF NNN',
    vacancyRate: '2.8%',
    nycDriveTime: '35 mins',
    portDistance: '18 miles',
    keyDistinction: 'CRP Headquarters Base & Top Tri-State Distribution Hub',
    description: 'Central New Jersey’s premier industrial epicenter, boasting unmatched connectivity to the NJ Turnpike, I-287, Garden State Parkway, and Route 1.',
    majorCorridors: ['Raritan Center Parkway', 'Executive Drive', 'Route 1 Corridor', 'I-287 Beltway']
  },
  {
    id: 'exit-8a',
    name: 'NJ Turnpike Exit 8A Logistics Corridor',
    keyExit: 'NJ Turnpike Exit 8A',
    avgRent: '$15.00 - $17.80 / SF NNN',
    vacancyRate: '3.1%',
    nycDriveTime: '50 mins',
    portDistance: '32 miles',
    keyDistinction: 'Northeast Region Mega-Fulfillment Capital',
    description: 'Home to the largest concentration of Class-A mega distribution centers on the East Coast. Engineered specifically for regional 3PL fulfillment and e-commerce giants.',
    majorCorridors: ['Station Road', 'Cranbury South Road', 'Route 130 Corridor', 'Applegarth Road']
  },
  {
    id: 'port-newark-elizabeth',
    name: 'Port Newark & Elizabeth Container Zone',
    keyExit: 'NJ Turnpike Exit 13A / 14',
    avgRent: '$22.00 - $27.00 / SF NNN',
    vacancyRate: '1.9%',
    nycDriveTime: '20 mins',
    portDistance: 'Direct Port Access',
    keyDistinction: 'Highest Density Port Drayage & Container Yards',
    description: 'Adjacent to Maher Terminals, APM Terminals, and Newark Liberty International Airport. Crucial for ocean freight drayage, air cargo, and rapid port clearout.',
    majorCorridors: ['Corbin Street', 'McLean Blvd', 'Doremus Avenue', 'US Highway 1/9']
  },
  {
    id: 'meadowlands',
    name: 'Meadowlands / Last-Mile Metro Zone',
    keyExit: 'NJ Turnpike Exit 16W / 18W',
    avgRent: '$24.00 - $29.50 / SF NNN',
    vacancyRate: '2.2%',
    nycDriveTime: '12 mins',
    portDistance: '12 miles',
    keyDistinction: 'Immediate Same-Day Delivery into NYC 8M+ Consumer Market',
    description: 'Unbeatable proximity to Manhattan via the Lincoln and Holland Tunnels. Dominates last-mile grocery, e-commerce delivery, and media production staging.',
    majorCorridors: ['Meadowlands Parkway', 'Secaucus Road', 'Moonachie Avenue', 'Route 3 Corridor']
  }
];
