import React from 'react';
import { Phone, Clock, Info, Check, ArrowRight, Utensils } from 'lucide-react';
import { BUSINESS_INFO, CAFE_IMAGES } from '../data/businessData';

interface FoodSnacksPageProps {
  onNavigate: (route: string) => void;
}

export const FoodSnacksPage: React.FC<FoodSnacksPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 sm:space-y-28 pt-8">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#594037]">
            Evening Accompaniments
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#35231F] leading-tight">
            Food & Evening Snacks
          </h1>
          <p className="text-base sm:text-lg text-[#594037] leading-relaxed">
            Light bites and companion fare served fresh to complement your hot tea or coffee during evening hours in Okara.
          </p>
        </div>
      </section>

      {/* 2. Visual & Editorial Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border border-[#594037]/20">
            <img
              src={CAFE_IMAGES.tableSetting}
              alt="Table setting with evening tea, coffee, and light snacks"
              referrerPolicy="no-referrer"
              className="w-full h-[380px] sm:h-[460px] object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D7A45B]">
              Carefully Paired
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#35231F] leading-tight">
              Complementing Every Evening Cup
            </h2>
            <p className="text-sm sm:text-base text-[#594037] leading-relaxed">
              No cup of evening chai or coffee is complete without a suitable companion bite. Evening Hours Tea and Coffee provides a selection of cafe snacks and light fare intended to satisfy cravings while you relax or socialize.
            </p>

            <div className="bg-[#594037]/10 p-5 rounded-xl border border-[#594037]/20 space-y-2 text-xs sm:text-sm text-[#35231F]">
              <div className="flex items-center gap-2 font-semibold">
                <Info className="w-4 h-4 text-[#D7A45B] shrink-0" />
                <span>Daily Fresh Preparation & Evening Availability</span>
              </div>
              <p className="leading-relaxed text-[#594037]">
                To ensure quality and freshness, daily snack offerings rotate and are prepared on-site each evening. We invite guests to call ahead or inquire upon arrival for today&apos;s fresh companion items.
              </p>
            </div>

            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-2.5 text-xs text-[#594037] font-medium">
                <Check className="w-4 h-4 text-[#D7A45B]" />
                <span>Available for both dine-in and takeaway</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#594037] font-medium">
                <Check className="w-4 h-4 text-[#D7A45B]" />
                <span>Prepared starting at 6:00 PM nightly</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#594037] font-medium">
                <Check className="w-4 h-4 text-[#D7A45B]" />
                <span>Call ahead for fast takeaway packaging</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#35231F] text-[#F7F0E5] font-semibold text-xs uppercase tracking-wider hover:bg-[#594037] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D7A45B]" />
                <span>Call for Today&apos;s Snack Specials</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded bg-white text-[#35231F] font-semibold text-xs uppercase tracking-wider hover:bg-neutral-50 border border-[#594037]/20 transition-colors cursor-pointer"
              >
                Visit Us in Okara
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Ordering Advice Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#35231F] text-[#F7F0E5] rounded-2xl p-8 sm:p-12 border border-[#594037]">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <Utensils className="w-8 h-8 text-[#D7A45B] mx-auto" />
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F0E5]">
              Hosting an Evening Gathering?
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F0E5]/80 leading-relaxed">
              If you have a group gathering or would like to pick up multiple portions of tea and evening snacks in Okara, call +92 307 0002987 before you arrive so our staff can prepare your order smoothly.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#D7A45B] text-[#35231F] font-semibold text-xs uppercase tracking-wider hover:bg-[#e0b473] transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
