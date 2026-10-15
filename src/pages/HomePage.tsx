import React from 'react';
import { Phone, MapPin, Clock, ArrowRight, Coffee, Sparkles, Navigation } from 'lucide-react';
import { BUSINESS_INFO, CAFE_IMAGES } from '../data/businessData';

interface HomePageProps {
  onNavigate: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 sm:space-y-28">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-8 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline and CTAs */}
            <div className="lg:col-span-6 space-y-6">
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#594037]">
                <span className="w-2 h-2 rounded-full bg-[#D7A45B]" />
                <span>Evening Cafe in Okara · Opens 6:00 PM</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#35231F] leading-[1.1] text-balance">
                Make Your Evenings a Little More Special.
              </h1>

              <p className="text-base sm:text-lg text-[#594037] leading-relaxed max-w-xl">
                Discover your next favorite cup and enjoy a welcoming cafe experience at Evening Hours Tea and Coffee in Okara.
              </p>

              {/* Service Micro-strip */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#594037] font-medium border-t border-[#594037]/20">
                <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded border border-[#594037]/15">
                  <Clock className="w-3.5 h-3.5 text-[#D7A45B]" />
                  <span>Opens daily at 6:00 PM</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded border border-[#594037]/15">
                  <span>Dine-in & Takeout Available</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('menu')}
                  className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#35231F] text-[#F7F0E5] font-semibold text-sm hover:bg-[#594037] active:scale-95 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A45B]"
                >
                  <span>Explore Our Menu</span>
                  <ArrowRight className="w-4 h-4 text-[#D7A45B]" />
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#D7A45B] text-[#35231F] font-semibold text-sm hover:bg-[#e0b473] active:scale-95 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35231F]"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call the Cafe</span>
                </a>
              </div>
            </div>

            {/* Right Column: Dominant Hero Photograph */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 group">
                <img
                  src={CAFE_IMAGES.hero}
                  alt="Steaming hot freshly brewed coffee cup in a warm evening cafe setting"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[460px] object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#35231F]/90 backdrop-blur-xs text-[#F7F0E5] border border-[#594037]/50 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#D7A45B]">
                      Evening Hours Ambience
                    </p>
                    <p className="font-serif text-base font-bold text-[#F7F0E5]">
                      Freshly Brewed Hot Coffee & Tea
                    </p>
                  </div>
                  <span className="text-xs bg-[#594037] text-[#F7F0E5] px-2.5 py-1 rounded">
                    Dine-in & Takeout
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Menu Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#594037]">
            Carefully Curated
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#35231F]">
            The Evening Offerings
          </h2>
          <p className="text-sm sm:text-base text-[#594037]">
            From steaming cups of slow-brewed tea to rich coffee and refreshing chilled drinks, explore the selections crafted for your evening.
          </p>
        </div>

        {/* 4 Presentation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Tea */}
          <div className="bg-white rounded-xl overflow-hidden border border-[#594037]/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="relative h-48 overflow-hidden">
              <img
                src={CAFE_IMAGES.teaServing}
                alt="Traditional chai poured steaming hot into an artisanal cup"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#35231F]/90 text-[#F7F0E5] text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
                Tea
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#35231F] mb-1">
                  Fresh Evening Tea
                </h3>
                <p className="text-xs text-[#594037] leading-relaxed">
                  Steaming aromatic tea brewed hot to accompany evening conversations.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-[#594037]/80">Dine-in / Takeout</span>
                <button
                  onClick={() => onNavigate('coffee-tea')}
                  className="font-semibold text-[#35231F] hover:text-[#D7A45B] cursor-pointer inline-flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Hot Coffee */}
          <div className="bg-white rounded-xl overflow-hidden border border-[#594037]/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="relative h-48 overflow-hidden">
              <img
                src={CAFE_IMAGES.coffeeArt}
                alt="Hot coffee with velvety golden crema and latte art"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#35231F]/90 text-[#F7F0E5] text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
                Coffee
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#35231F] mb-1">
                  Hot Brewed Coffee
                </h3>
                <p className="text-xs text-[#594037] leading-relaxed">
                  Rich coffee aroma, smooth crema, and comforting warmth for cool evenings.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-[#594037]/80">Dine-in / Takeout</span>
                <button
                  onClick={() => onNavigate('coffee-tea')}
                  className="font-semibold text-[#35231F] hover:text-[#D7A45B] cursor-pointer inline-flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Cold Beverages */}
          <div className="bg-white rounded-xl overflow-hidden border border-[#594037]/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="relative h-48 overflow-hidden">
              <img
                src={CAFE_IMAGES.coldDrink}
                alt="Chilled drink served over ice with mint"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#35231F]/90 text-[#F7F0E5] text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
                Cold Drinks
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#35231F] mb-1">
                  Chilled Beverages
                </h3>
                <p className="text-xs text-[#594037] leading-relaxed">
                  Iced refreshers and chilled drink selections served with crisp ice.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-[#594037]/80">Dine-in / Takeout</span>
                <button
                  onClick={() => onNavigate('menu')}
                  className="font-semibold text-[#35231F] hover:text-[#D7A45B] cursor-pointer inline-flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: Evening Snacks */}
          <div className="bg-white rounded-xl overflow-hidden border border-[#594037]/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="relative h-48 overflow-hidden">
              <img
                src={CAFE_IMAGES.tableSetting}
                alt="Cozy evening table with drinks and snacks"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#35231F]/90 text-[#F7F0E5] text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
                Snacks
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#35231F] mb-1">
                  Cafe Light Fare
                </h3>
                <p className="text-xs text-[#594037] leading-relaxed">
                  Tasty companion bites prepared fresh daily to pair with tea and coffee.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-[#594037]/80">Dine-in / Takeout</span>
                <button
                  onClick={() => onNavigate('food-snacks')}
                  className="font-semibold text-[#35231F] hover:text-[#D7A45B] cursor-pointer inline-flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notice & Full Menu Action */}
        <div className="mt-10 p-5 rounded-xl bg-[#594037]/10 border border-[#594037]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-xs text-[#594037]">
            <span className="font-semibold text-[#35231F] block text-sm mb-0.5">
              Daily Rotating Items & Fresh Availability
            </span>
            <span>
              To verify today&apos;s freshly prepared items, daily specials, and prices, call the cafe or inquire upon arrival.
            </span>
          </div>
          <button
            onClick={() => onNavigate('menu')}
            className="cursor-pointer shrink-0 px-5 py-2.5 rounded bg-[#35231F] text-[#F7F0E5] text-xs font-semibold uppercase tracking-wider hover:bg-[#594037] transition-colors"
          >
            View Full Menu Guide
          </button>
        </div>
      </section>

      {/* 3. Cafe Experience Section */}
      <section className="bg-[#35231F] text-[#F7F0E5] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D7A45B]">
                Evening Cafe Atmosphere
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#F7F0E5]">
                A Place to Pause When the Sun Sets in Okara.
              </h2>
              <p className="text-sm sm:text-base text-[#F7F0E5]/80 leading-relaxed">
                Evening Hours Tea and Coffee opens at 6:00 PM, creating a cozy and welcoming gathering spot for friends, families, and neighbors. Whether you prefer to sit down and unwind in the cafe or take your hot drink on the go, our team prepares every beverage with care.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-[#594037]/40 border border-[#594037]">
                  <p className="text-xs uppercase tracking-wider text-[#D7A45B] font-semibold mb-1">
                    Dine-in Hospitality
                  </p>
                  <p className="text-xs text-[#F7F0E5]/75">
                    Relaxed evening seating for friends and conversations.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#594037]/40 border border-[#594037]">
                  <p className="text-xs uppercase tracking-wider text-[#D7A45B] font-semibold mb-1">
                    Convenient Takeout
                  </p>
                  <p className="text-xs text-[#F7F0E5]/75">
                    Call ahead or order at the counter for fresh takeaway.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="cursor-pointer inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D7A45B] hover:text-[#F7F0E5] transition-colors"
                >
                  <span>Learn more about our evening story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-[#594037]">
                <img
                  src={CAFE_IMAGES.tableSetting}
                  alt="Evening table setting with warm candlelight and hot drinks"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Signature Visual Feature: Beverage Textures & Craft */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#594037]">
            Sensory Craft
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#35231F]">
            Every Cup Tells a Story
          </h2>
          <p className="text-sm text-[#594037]">
            Delicate crema, steaming fragrant chai, and cold refreshments prepared with care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Visual 1: Tea Pour */}
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden shadow-md aspect-4/3 border border-[#594037]/20">
              <img
                src={CAFE_IMAGES.teaServing}
                alt="Traditional tea chai being poured from a copper kettle"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#35231F]">
                Steaming Chai Pour
              </h3>
              <p className="text-xs text-[#594037] leading-relaxed mt-1">
                Slow-brewed and poured piping hot into clay cups as evening settles over Punjab.
              </p>
            </div>
          </div>

          {/* Visual 2: Crema & Latte Art */}
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden shadow-md aspect-4/3 border border-[#594037]/20">
              <img
                src={CAFE_IMAGES.coffeeArt}
                alt="Detailed crema and latte art on freshly prepared coffee"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#35231F]">
                Velvety Crema
              </h3>
              <p className="text-xs text-[#594037] leading-relaxed mt-1">
                Rich roasted notes and velvety textured milk crafted for evening coffee enthusiasts.
              </p>
            </div>
          </div>

          {/* Visual 3: Chilled Beverage */}
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden shadow-md aspect-4/3 border border-[#594037]/20">
              <img
                src={CAFE_IMAGES.coldDrink}
                alt="Refreshing iced drink with condensation droplets"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#35231F]">
                Chilled Refreshment
              </h3>
              <p className="text-xs text-[#594037] leading-relaxed mt-1">
                Ice-cold refreshments served in tall glasses with fresh garnishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Visit & Contact Quick Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#35231F] text-[#F7F0E5] rounded-2xl p-8 sm:p-12 border border-[#594037] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#D7A45B] font-semibold">
                Join Us Tonight
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F0E5]">
                Plan Your Evening Visit
              </h2>
              <p className="text-sm text-[#F7F0E5]/80 leading-relaxed max-w-xl">
                Located in Okara, Pakistan. The cafe opens each evening at 6:00 PM. Whether you are stepping in for a quick takeout cup or staying for conversation, we look forward to serving you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D7A45B] shrink-0" />
                  <span>Google Code: <strong className="text-[#F7F0E5]">{BUSINESS_INFO.locationCode}</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#D7A45B] shrink-0" />
                  <span>Opens daily at <strong className="text-[#F7F0E5]">6:00 PM</strong></span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#D7A45B] text-[#35231F] font-semibold text-sm hover:bg-[#e0b473] transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#594037] text-[#F7F0E5] font-semibold text-sm hover:bg-[#6c4e43] border border-[#D7A45B]/40 transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#D7A45B]" />
                <span>Get Directions (Maps)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
