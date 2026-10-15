import React, { useState } from 'react';
import { Phone, Search, Info, Coffee, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import {
  BUSINESS_INFO,
  MENU_CATEGORIES,
  MENU_PRESENTATION_ITEMS,
  MenuCategoryItem,
} from '../data/businessData';

interface MenuPageProps {
  onNavigate: (route: string) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = MENU_PRESENTATION_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.presentationType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.notes.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pt-8">
      {/* 1. Menu Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#594037]">
            Evening Selections
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#35231F] leading-tight">
            Menu Offerings & Beverages
          </h1>
          <p className="text-base sm:text-lg text-[#594037] leading-relaxed">
            Explore the drink and snack categories available at Evening Hours Tea and Coffee. Crafted fresh daily for evening dine-in and takeout in Okara.
          </p>
        </div>
      </section>

      {/* 2. Transparent Menu Status & Owner Notice Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#594037]/10 border border-[#594037]/25 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-start gap-3.5">
            <Info className="w-5 h-5 text-[#35231F] shrink-0 mt-0.5" />
            <div className="space-y-2 text-xs sm:text-sm text-[#35231F]">
              <h3 className="font-serif text-lg font-bold text-[#35231F]">
                Fresh Daily Rotating Menu & Direct Pricing Notice
              </h3>
              <p className="leading-relaxed">
                Specific individual item selections and daily evening specials rotate to ensure freshness upon order.
              </p>
              <p className="leading-relaxed text-[#594037]">
                To verify today&apos;s exact menu items, special brews, or to place an immediate takeout order for pickup, please call the cafe directly at{' '}
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="font-bold text-[#35231F] underline hover:text-[#D7A45B]"
                >
                  {BUSINESS_INFO.phone}
                </a>
                .
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-[#594037]">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D7A45B]" /> Dine-in Welcome
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D7A45B]" /> Takeout Service Available
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D7A45B]" /> Opens Daily at 6:00 PM
            </span>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Tabs & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-8 border-b border-[#594037]/20">
          {/* Functional Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {MENU_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`cursor-pointer px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A45B] ${
                    isSelected
                      ? 'bg-[#35231F] text-[#F7F0E5] shadow-sm'
                      : 'bg-white/80 text-[#594037] hover:bg-white hover:text-[#35231F] border border-[#594037]/15'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#594037] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search drinks & snacks..."
              className="w-full bg-white text-xs text-[#242321] pl-10 pr-4 py-2.5 rounded-lg border border-[#594037]/20 focus:outline-none focus:ring-2 focus:ring-[#D7A45B] placeholder:text-[#594037]/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#594037] hover:text-[#35231F]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 4. Menu Items Grid */}
        <div className="pt-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-white/60 rounded-2xl border border-[#594037]/15 space-y-3">
              <Coffee className="w-10 h-10 text-[#594037]/60 mx-auto" />
              <h4 className="font-serif text-xl font-bold text-[#35231F]">
                No menu items match your search
              </h4>
              <p className="text-xs text-[#594037]">
                Try adjusting your search query or reset the category filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-2 text-xs font-semibold text-[#D7A45B] bg-[#35231F] px-4 py-2 rounded hover:bg-[#594037] cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#594037]/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  {item.image && (
                    <div className="relative h-52 overflow-hidden bg-[#35231F]/5">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#35231F]/90 text-[#F7F0E5] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                        {item.categoryLabel}
                      </div>
                    </div>
                  )}

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-semibold tracking-wider text-[#D7A45B] uppercase block">
                        {item.presentationType}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#35231F]">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#594037] leading-relaxed pt-1">
                        {item.notes}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#594037]/10 flex items-center justify-between">
                      <div className="text-xs text-[#594037]">
                        <span className="block text-[10px] uppercase text-[#594037]/70 font-semibold">
                          Service
                        </span>
                        <span className="font-medium text-[#35231F]">
                          Dine-in & Takeout
                        </span>
                      </div>

                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded bg-[#35231F] text-[#F7F0E5] hover:bg-[#594037] transition-colors"
                      >
                        <Phone className="w-3 h-3 text-[#D7A45B]" />
                        <span>Call to Inquire</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. Takeout & Foodpanda Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#35231F] text-[#F7F0E5] rounded-2xl p-8 sm:p-10 border border-[#594037]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D7A45B]">
                Ordering Takeout
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F0E5]">
                How to Order for Takeout or Inquire
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F0E5]/80 leading-relaxed">
                Foodpanda.pk is listed as an ordering platform for Evening Hours Tea and Coffee, but an exact restaurant URL has not been supplied. For the freshest preparation and immediate service, call the cafe directly at{' '}
                <strong className="text-[#D7A45B]">{BUSINESS_INFO.phone}</strong>. Our staff can prepare your tea, coffee, and snacks before you arrive.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full text-center px-6 py-3.5 rounded bg-[#D7A45B] text-[#35231F] font-semibold text-xs uppercase tracking-wider hover:bg-[#e0b473] transition-colors shadow-md inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call to Order</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full text-center px-6 py-3.5 rounded bg-[#594037] text-[#F7F0E5] font-semibold text-xs uppercase tracking-wider hover:bg-[#6c4e43] border border-[#D7A45B]/30 transition-colors"
              >
                Visit Location in Okara
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
