import React, { useState, useMemo } from 'react';
import { PROPERTIES_DATA, type Property } from '../data/properties';
import { MapPin, ArrowRight, CheckCircle2, Maximize2, Search } from 'lucide-react';

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
    <section id="properties" className="py-24 bg-[#070b15] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400/90 mb-2">
              Available Inventory & Developments
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-brand">
              Featured Industrial <span className="text-gradient-gold">Properties</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              High-bay distribution centers, cross-dock fleet facilities, and entitled logistics land across prime New Jersey freight arteries.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-slate-400 font-medium">
            Showing <span className="text-white font-semibold">{filteredProperties.length}</span> of {PROPERTIES_DATA.length} Available Assets
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    activeCategory === cat
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                      : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {cat === 'All' ? 'All Asset Types' : cat}
                </button>
              ))}
            </div>

            {/* Submarket & Search Row */}
            <div className="flex items-center gap-3">
              <select
                value={activeSubmarket}
                onChange={(e) => setActiveSubmarket(e.target.value)}
                className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-amber-500/70"
              >
                <option value="All">All NJ Corridors</option>
                {submarkets.filter(s => s !== 'All').map((sub) => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>

              <div className="relative w-full sm:w-56">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Filter keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/70"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length === 0 ? (
          <div className="py-16 text-center rounded-xl bg-slate-900/40 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-1">No matching properties found</h3>
            <p className="text-xs text-slate-400 mb-4">
              Try adjusting your category or corridor filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setActiveSubmarket('All');
                setMinSqftFilter(0);
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-semibold transition-all border border-slate-700"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="rounded-xl overflow-hidden border border-slate-800/90 bg-[#0c1220] flex flex-col group hover:border-slate-700 transition-all duration-300 shadow-lg"
              >
                {/* Card Thumbnail */}
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-amber-400 border border-slate-800 uppercase tracking-wider">
                      {property.category}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold backdrop-blur-md ${
                        property.status === 'Available Now'
                          ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60'
                          : property.status === 'Build-to-Suit'
                          ? 'bg-amber-950/80 text-amber-300 border border-amber-800/60'
                          : 'bg-blue-950/80 text-blue-300 border border-blue-800/60'
                      }`}
                    >
                      {property.status}
                    </span>
                  </div>

                  {/* Bottom Image Location */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{property.location}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2 font-serif-brand">
                      {property.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                      {property.description}
                    </p>

                    {/* Spec Grid */}
                    <div className="grid grid-cols-2 gap-2 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs mb-4">
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">Total Size</span>
                        <span className="font-semibold text-white">{property.availableSqft}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">Clear Height</span>
                        <span className="font-semibold text-amber-400">{property.clearHeight}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">Loading</span>
                        <span className="font-semibold text-white">{property.dockDoors} Docks</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">Corridor</span>
                        <span className="font-semibold text-slate-300 truncate block">{property.submarket}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedPropertyModal(property)}
                      className="flex-1 py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                      <span>Specifications</span>
                    </button>
                    <button
                      onClick={() => onSelectPropertyForTour(property)}
                      className="flex-1 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Inquire / Tour</span>
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
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#0c1220] border border-slate-700 p-6 sm:p-8 text-slate-100 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-slate-800 text-amber-400 text-[11px] font-bold uppercase tracking-wider border border-slate-700">
                  {selectedPropertyModal.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 font-serif-brand">
                  {selectedPropertyModal.title}
                </h3>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{selectedPropertyModal.location}</span>
                </p>
              </div>
              <button
                onClick={() => setSelectedPropertyModal(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative h-60 rounded-lg overflow-hidden mb-5">
              <img
                src={selectedPropertyModal.image}
                alt={selectedPropertyModal.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Detailed Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-lg bg-slate-900/80 border border-slate-800 mb-5 text-xs">
              <div>
                <span className="text-slate-500 font-bold block uppercase text-[10px]">Total Facility</span>
                <span className="text-white font-semibold text-sm">{selectedPropertyModal.sqft.toLocaleString()} SF</span>
              </div>
              <div>
                <span className="text-slate-500 font-bold block uppercase text-[10px]">Available Area</span>
                <span className="text-amber-400 font-semibold text-sm">{selectedPropertyModal.availableSqft}</span>
              </div>
              <div>
                <span className="text-slate-500 font-bold block uppercase text-[10px]">Clear Height</span>
                <span className="text-white font-semibold text-sm">{selectedPropertyModal.clearHeight}</span>
              </div>
              <div>
                <span className="text-slate-500 font-bold block uppercase text-[10px]">Loading Docks</span>
                <span className="text-white font-semibold text-sm">{selectedPropertyModal.dockDoors} Doors</span>
              </div>
              <div>
                <span className="text-slate-500 font-bold block uppercase text-[10px]">Drive-In Access</span>
                <span className="text-white font-semibold text-sm">{selectedPropertyModal.driveInDoors} Doors</span>
              </div>
              <div>
                <span className="text-slate-500 font-bold block uppercase text-[10px]">Power Service</span>
                <span className="text-white font-semibold text-sm">{selectedPropertyModal.power}</span>
              </div>
              <div className="col-span-2 sm:col-span-3 border-t border-slate-800 pt-2.5">
                <span className="text-slate-500 font-bold block uppercase text-[10px]">Parking & Trailer Staging</span>
                <span className="text-slate-300 font-semibold">{selectedPropertyModal.parking}</span>
              </div>
            </div>

            {/* Description & Key Specs */}
            <div className="mb-5 space-y-3">
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Asset Overview</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedPropertyModal.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Key Specifications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedPropertyModal.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-slate-800">
              <button
                onClick={() => {
                  const property = selectedPropertyModal;
                  setSelectedPropertyModal(null);
                  onSelectPropertyForTour(property);
                }}
                className="flex-1 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors text-center"
              >
                Schedule Property Tour
              </button>
              <a
                href="tel:7328000000"
                className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs text-center border border-slate-700"
              >
                Call Leasing Broker
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
