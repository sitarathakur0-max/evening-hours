import React from 'react';
import { Clock, MapPin, Phone, Coffee, Heart, Users } from 'lucide-react';
import { BUSINESS_INFO, CAFE_IMAGES } from '../data/businessData';

interface AboutPageProps {
  onNavigate: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 sm:space-y-28 pt-8">
      {/* 1. Header Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#594037]">
            About Evening Hours
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#35231F] leading-tight">
            Crafting A Warm Gathering Place for Okara&apos;s Evenings.
          </h1>
          <p className="text-base sm:text-lg text-[#594037] leading-relaxed">
            As twilight descends over Punjab, Evening Hours Tea and Coffee opens its doors at 6:00 PM to offer an inviting, unhurried space centered on freshly brewed beverages and neighborly conversation.
          </p>
        </div>
      </section>

      {/* 2. Editorial Dual-Image Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Large Image */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-xl border border-[#594037]/20">
            <img
              src={CAFE_IMAGES.tableSetting}
              alt="Cozy evening cafe seating with hot beverages by the window"
              referrerPolicy="no-referrer"
              className="w-full h-[400px] sm:h-[480px] object-cover"
            />
          </div>

          {/* Secondary Editorial Block with Image */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#594037]/20 h-56 sm:h-64">
              <img
                src={CAFE_IMAGES.teaServing}
                alt="Hot spiced tea being poured into an artisanal cup"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#594037]/15 shadow-sm space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#D7A45B] font-semibold">
                Our Philosophy
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#35231F]">
                The Evening Ritual
              </h3>
              <p className="text-xs sm:text-sm text-[#594037] leading-relaxed">
                Evenings in our culture have always belonged to connection: stepping away from daytime busyness, catching up over a steaming cup of tea or coffee, and savoring small comforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Principles & Facts */}
      <section className="bg-white py-16 border-y border-[#594037]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#594037]">
              Verified Cafe Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#35231F]">
              What Defines Evening Hours
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-[#F7F0E5]/60 border border-[#594037]/15 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#35231F] text-[#D7A45B] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#35231F]">
                Dedicated Evening Hours
              </h3>
              <p className="text-xs text-[#594037] leading-relaxed">
                Opening each evening at 6:00 PM, the cafe is tuned specifically to the relaxed nighttime rhythm of Okara.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F7F0E5]/60 border border-[#594037]/15 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#35231F] text-[#D7A45B] flex items-center justify-center">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#35231F]">
                Tea, Coffee & Light Fare
              </h3>
              <p className="text-xs text-[#594037] leading-relaxed">
                Focusing on comforting hot teas, freshly brewed coffee, chilled drinks, and light companion snacks prepared fresh.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F7F0E5]/60 border border-[#594037]/15 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#35231F] text-[#D7A45B] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#35231F]">
                Dine-in & Takeout Flexibility
              </h3>
              <p className="text-xs text-[#594037] leading-relaxed">
                Choose to sit in for leisurely conversation or grab a hot cup to take along. Call ahead at +92 307 0002987 for fast pickup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Community Hospitality & Welcome */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#35231F] text-[#F7F0E5] rounded-2xl p-8 sm:p-12 border border-[#594037]">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D7A45B] font-semibold">
              Community Hospitality
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F0E5]">
              Welcoming Okara Every Evening
            </h2>
            <p className="text-sm text-[#F7F0E5]/80 leading-relaxed">
              We are proud to serve the community of Okara. Whether you are visiting for the first time or returning for your nightly chai, our focus remains on warm hospitality and quality in every cup.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="cursor-pointer px-6 py-3 rounded bg-[#D7A45B] text-[#35231F] font-semibold text-xs uppercase tracking-wider hover:bg-[#e0b473] transition-colors"
              >
                Find Us in Okara
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-6 py-3 rounded bg-[#594037] text-[#F7F0E5] font-semibold text-xs uppercase tracking-wider hover:bg-[#6c4e43] border border-[#D7A45B]/30 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
