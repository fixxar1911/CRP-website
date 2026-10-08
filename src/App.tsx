import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertyCatalog } from './components/PropertyCatalog';
import { SpaceCalculator } from './components/SpaceCalculator';
import { SubmarketsGuide } from './components/SubmarketsGuide';
import { ServicesSection } from './components/ServicesSection';
import { AboutLeadership } from './components/AboutLeadership';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AmplifyBadgeModal } from './components/AmplifyBadge';
import type { Property } from './data/properties';

export function App() {
  const [selectedPropertyForTour, setSelectedPropertyForTour] = useState<Property | null>(null);
  const [isAmplifyModalOpen, setIsAmplifyModalOpen] = useState<boolean>(false);

  // Search parameters passed from Hero to Property Catalog
  const [catalogCategory, setCatalogCategory] = useState<string>('All');
  const [catalogSubmarket, setCatalogSubmarket] = useState<string>('All');
  const [catalogMinSqft, setCatalogMinSqft] = useState<number>(0);

  const handleHeroSearch = (category: string, submarket: string, minSqft: number) => {
    setCatalogCategory(category);
    setCatalogSubmarket(submarket);
    setCatalogMinSqft(minSqft);
  };

  const handleSelectPropertyForTour = (property: Property) => {
    setSelectedPropertyForTour(property);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSubmarketFilter = (submarketName: string) => {
    setCatalogSubmarket(submarketName);
    const propertiesElem = document.getElementById('properties');
    if (propertiesElem) {
      propertiesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090e1a] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Navbar */}
      <Navbar
        onOpenAmplifyModal={() => setIsAmplifyModalOpen(true)}
        onOpenContactModal={() => {
          const contactElem = document.getElementById('contact');
          if (contactElem) {
            contactElem.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Hero Section */}
      <Hero onSearch={handleHeroSearch} />

      {/* Available Properties Catalog */}
      <PropertyCatalog
        initialCategory={catalogCategory}
        initialSubmarket={catalogSubmarket}
        initialMinSqft={catalogMinSqft}
        onSelectPropertyForTour={handleSelectPropertyForTour}
      />

      {/* Interactive Space Sizing Calculator */}
      <SpaceCalculator onSelectPropertyForTour={handleSelectPropertyForTour} />

      {/* New Jersey Submarkets Guide */}
      <SubmarketsGuide onSelectSubmarketFilter={handleSelectSubmarketFilter} />

      {/* Core Brokerage Services */}
      <ServicesSection
        onOpenContactModal={() => {
          const contactElem = document.getElementById('contact');
          if (contactElem) {
            contactElem.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* About Firm Leadership (Joseph Nitti / Edison HQ) */}
      <AboutLeadership
        onOpenContactModal={() => {
          const contactElem = document.getElementById('contact');
          if (contactElem) {
            contactElem.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Contact & Schedule Tour Section */}
      <ContactSection
        selectedProperty={selectedPropertyForTour}
        onClosePropertyContext={() => setSelectedPropertyForTour(null)}
      />

      {/* Footer */}
      <Footer
        onOpenAmplifyModal={() => setIsAmplifyModalOpen(true)}
        onOpenContactModal={() => {
          const contactElem = document.getElementById('contact');
          if (contactElem) {
            contactElem.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* AWS Amplify Modal Guide */}
      <AmplifyBadgeModal
        isOpen={isAmplifyModalOpen}
        onClose={() => setIsAmplifyModalOpen(false)}
      />
    </div>
  );
}

export default App;
