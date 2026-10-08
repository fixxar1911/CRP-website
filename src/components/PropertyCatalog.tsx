import React, { useState, useMemo } from 'react';
import { PROPERTIES_DATA, type Property } from '../data/properties';
import { Building, MapPin, ArrowRight, CheckCircle2, Maximize2, Filter } from 'lucide-react';

interface PropertyCatalogProps {
  initialCategory?: string;
  initialSubmarket?: string;
  initialMinSqft?: number;
  onSelectPropertyForTour: (property: Property) => void;
}

export const PropertyCatalog: React.FC<PropertyCatalogProps> = ({
  initialCategory = 'All',
  initialSubmarket = 'All',
  initialMinSqft = 0,
  onSelectPropertyForTour
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [activeSubmarket, setActiveSubmarket] = useState<string>(initialSubmarket);
  const [minSqftFilter, setMinSqftFilter] = useState<number>(initialMinSqft);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPropertyModal, setSelectedPropertyModal] = useState<Property | null>(null);

  // Filtered properties computation
  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((item) => {
      // Category check
      if (activeCategory !== 'All' && item.category !== activeCategory) {
        return false;
      }
      // Submarket check
      if (activeSubmarket !== 'All' && item.submarket !== activeSubmarket) {
        return false;
      }
      // Min sqft check
      if (minSqftFilter > 0 && item.sqft < minSqftFilter) {
        return false;
      }
      // Search query text check
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesLocation = item.location.toLowerCase().includes(query);
        const matchesDescription = item.description.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocation && !matchesDescription) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, activeSubmarket, minSqftFilter, searchQuery]);

  const categories = [
    'All',
    'Industrial Warehouse',
    'Truck Terminal',
    'Development Land',
    'Manufacturing & Flex'
  ];

  const submarkets = [
    'All',
    'Edison / Raritan Center',
    'Turnpike Exit 8A',
    'Port Newark / Elizabeth',
    'Meadowlands Corridor',
    'I-287 / Central NJ'
  ];

  return (
    <section id="properties" className="py-24 bg-[#070b15] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
              <Building className="w-4 h-4" /> Available Listings & Developments
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-brand">
              Featured Industrial <span className="text-gradient-gold">Properties</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Discover prime logistics parks, high-bay distribution centers, port truck terminals, and entitled land parcels across New Jersey.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs text-slate-400">
            <span className="font-mono bg-slate-900 border border-slate-700/60 px-3 py-1.5 rounded-lg text-amber-300">
              Showing {filteredProperties.length} of {PROPERTIES_DATA.length} Properties
            </span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-10 space-y-4">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-bold uppercase text-slate-500 mr-2 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" /> Type:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-amber-500 to-amber-700 text-slate-950 font-extrabold shadow-lg shadow-amber-500/20'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Submarket & Search Row */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch justify-between">
            {/* Submarket Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              <span className="text-xs font-bold uppercase text-slate-500 mr-2 shrink-0">Region:</span>
              {submarkets.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubmarket(sub)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    activeSubmarket === sub
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                      : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {sub === 'All' ? 'All NJ Corridors' : sub}
                </button>
              ))}
            </div>

            {/* Keyword Search Input */}
            <div className="w-full sm:w-64 relative">
              <input
                type="text"
                placeholder="Search location, spec..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700/70 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length === 0 ? (
          <div className="py-16 text-center rounded-2xl bg-slate-900/50 border border-slate-800">
            <Building className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No matching properties found</h3>
            <p className="text-sm text-slate-400 mb-4">
              Try adjusting your category, submarket corridor, or size filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setActiveSubmarket('All');
                setMinSqftFilter(0);
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold hover:bg-amber-500/20 transition-all"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="glass-card rounded-2xl overflow-hidden flex flex-col group"
              >
                {/* Card Thumbnail Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-[11px] font-extrabold text-amber-400 border border-amber-500/30 uppercase tracking-wider">
                      {property.category}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold backdrop-blur-md shadow-md ${
                        property.status === 'Available Now'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : property.status === 'Build-to-Suit'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                      }`}
                    >
                      {property.status}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Location */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{property.location}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2 font-serif-brand">
                      {property.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mb-5 leading-relaxed">
                      {property.description}
                    </p>

                    {/* Spec Grid Highlights */}
                    <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs mb-5">
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">Total Size</span>
                        <span className="font-semibold text-white">{property.availableSqft}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">Clear Height</span>
                        <span className="font-semibold text-amber-400">{property.clearHeight}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">Dock Doors</span>
                        <span className="font-semibold text-white">{property.dockDoors} Docks</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">Submarket</span>
                        <span className="font-semibold text-slate-300 truncate block">{property.submarket}</span>
                      </div>
                    </div>

                    {/* Bullet Highlights */}
                    <div className="space-y-1.5 mb-6">
                      {property.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedPropertyModal(property)}
                      className="flex-1 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                      <span>Full Specs</span>
                    </button>
                    <button
                      onClick={() => onSelectPropertyForTour(property)}
                      className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-700 text-slate-950 font-bold text-xs hover:brightness-110 transition-all flex items-center justify-center gap-1 shadow-md shadow-amber-500/10"
                    >
                      <span>Request Tour</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Property Details Modal */}
      {selectedPropertyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0e1626] border border-amber-500/40 p-6 sm:p-8 text-slate-100 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  {selectedPropertyModal.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 font-serif-brand">
                  {selectedPropertyModal.title}
                </h3>
                <p className="text-sm text-slate-400 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{selectedPropertyModal.location}</span>
                </p>
              </div>
              <button
                onClick={() => setSelectedPropertyModal(null)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative h-64 rounded-xl overflow-hidden mb-6">
              <img
                src={selectedPropertyModal.image}
                alt={selectedPropertyModal.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Detailed Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 mb-6 text-sm">
              <div>
                <span className="text-xs text-slate-500 font-bold block uppercase">Total Facility Size</span>
                <span className="text-white font-semibold">{selectedPropertyModal.sqft.toLocaleString()} SF</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-bold block uppercase">Available Space</span>
                <span className="text-amber-400 font-semibold">{selectedPropertyModal.availableSqft}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-bold block uppercase">Clear Height</span>
                <span className="text-white font-semibold">{selectedPropertyModal.clearHeight}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-bold block uppercase">Loading Dock Doors</span>
                <span className="text-white font-semibold">{selectedPropertyModal.dockDoors} Doors</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-bold block uppercase">Drive-In Doors</span>
                <span className="text-white font-semibold">{selectedPropertyModal.driveInDoors} Doors</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-bold block uppercase">Power Service</span>
                <span className="text-white font-semibold">{selectedPropertyModal.power}</span>
              </div>
              <div className="col-span-2 sm:col-span-3 border-t border-slate-800 pt-3">
                <span className="text-xs text-slate-500 font-bold block uppercase">Trailer & Automobile Parking</span>
                <span className="text-slate-300 font-semibold">{selectedPropertyModal.parking}</span>
              </div>
            </div>

            {/* Description & All Highlights */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2">Overview</h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">{selectedPropertyModal.description}</p>

              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2">Key Specifications & Amenities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedPropertyModal.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  const property = selectedPropertyModal;
                  setSelectedPropertyModal(null);
                  onSelectPropertyForTour(property);
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-700 text-slate-950 font-bold text-sm hover:brightness-110 transition-all text-center"
              >
                Schedule On-Site Tour
              </button>
              <a
                href="tel:7328000000"
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm text-center border border-slate-700"
              >
                Speak with Leasing Broker
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
