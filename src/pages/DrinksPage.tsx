import React from 'react';
import { Phone, Clock, Coffee, Sparkles, Check, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, CAFE_IMAGES } from '../data/businessData';

interface DrinksPageProps {
  onNavigate: (route: string) => void;
}

export const DrinksPage: React.FC<DrinksPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 sm:space-y-28 pt-8">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#594037]">
            Craft & Brewing
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#35231F] leading-tight">
            The Coffee & Tea Experience
          </h1>
          <p className="text-base sm:text-lg text-[#594037] leading-relaxed">
            Evenings call for warm cups, rich aromas, and steaming pots. Explore how tea and coffee take center stage each night at Evening Hours Tea and Coffee.
          </p>
        </div>
      </section>

      {/* 2. Evening Tea Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border border-[#594037]/20">
            <img
              src={CAFE_IMAGES.teaServing}
              alt="Artisanal hot tea chai poured steaming from copper kettle into cup"
              referrerPolicy="no-referrer"
              className="w-full h-[380px] sm:h-[460px] object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D7A45B]">
              Tradition & Comfort
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#35231F] leading-tight">
              Freshly Steamed Evening Tea
            </h2>
            <p className="text-sm sm:text-base text-[#594037] leading-relaxed">
              In Pakistan, evening tea is more than a beverage; it is a beloved social anchor. Poured hot with deep color, balanced milk, and aromatic spices, tea at Evening Hours is served fresh to warm cooler Punjab nights.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#35231F] text-[#D7A45B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#35231F]">Piped Steaming Hot</h4>
                  <p className="text-xs text-[#594037]">Slow-simmered for robust flavor and rich fragrance.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#35231F] text-[#D7A45B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#35231F]">Dine-in or Fresh Takeout</h4>
                  <p className="text-xs text-[#594037]">Enjoy in our relaxed evening setting or take away in insulated cups.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#35231F] text-[#D7A45B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#35231F]">Freshly Prepared Nightly</h4>
                  <p className="text-xs text-[#594037]">Brewed fresh upon order starting at 6:00 PM.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#35231F] text-[#F7F0E5] font-semibold text-xs uppercase tracking-wider hover:bg-[#594037] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D7A45B]" />
                <span>Call to Inquire Today&apos;s Tea Brew</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Evening Coffee Craft Section */}
      <section className="bg-white py-16 sm:py-24 border-y border-[#594037]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D7A45B]">
                Roasted Aroma
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#35231F] leading-tight">
                Rich Crema & Fresh Coffee Brews
              </h2>
              <p className="text-sm sm:text-base text-[#594037] leading-relaxed">
                Whether you seek a strong black brew to recharge or a velvety milk coffee with smooth micro-foam, our evening coffee offerings deliver comfort and depth for every coffee enthusiast.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F7F0E5]/60 border border-[#594037]/15">
                  <h4 className="font-serif text-base font-bold text-[#35231F] mb-1">
                    Hot Brewed Coffee
                  </h4>
                  <p className="text-xs text-[#594037]">
                    Prepared fresh on order with golden crema and rich body.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F0E5]/60 border border-[#594037]/15">
                  <h4 className="font-serif text-base font-bold text-[#35231F] mb-1">
                    Cold Coffee Blends
                  </h4>
                  <p className="text-xs text-[#594037]">
                    Chilled options for those who enjoy refreshing iced coffee.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('menu')}
                  className="cursor-pointer inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#35231F] hover:text-[#D7A45B] transition-colors"
                >
                  <span>Explore beverage categories</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl border border-[#594037]/20">
              <img
                src={CAFE_IMAGES.coffeeArt}
                alt="Close-up overhead view of coffee crema with latte art"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Serving Details Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#35231F] text-[#F7F0E5] rounded-2xl p-8 sm:p-12 border border-[#594037] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D7A45B]">
              Ready From 6:00 PM Tonight
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F0E5]">
              Looking for a Fresh Hot Cup in Okara?
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F0E5]/80 max-w-xl">
              Call us in advance for quick takeout preparation or walk in for dine-in service.
            </p>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="shrink-0 px-6 py-3.5 rounded bg-[#D7A45B] text-[#35231F] font-semibold text-xs uppercase tracking-wider hover:bg-[#e0b473] transition-colors shadow-md inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
