import React from 'react';
import { Phone, MapPin, Clock, ExternalLink, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#35231F] text-[#F7F0E5] border-t border-[#594037] pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#594037]/60">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-[#F7F0E5]">
              Evening Hours
            </h3>
            <p className="text-xs tracking-widest uppercase text-[#D7A45B] font-semibold">
              Tea & Coffee · Okara, Pakistan
            </p>
            <p className="text-sm text-[#F7F0E5]/80 leading-relaxed">
              A welcoming evening cafe in Okara providing freshly prepared tea, coffee, and evening snacks. Dine-in and takeout service starting at 6:00 PM.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D7A45B] font-bold mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F7F0E5]/85">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#D7A45B] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#D7A45B] transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-[#D7A45B] transition-colors cursor-pointer text-left"
                >
                  Menu & Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('coffee-tea')}
                  className="hover:text-[#D7A45B] transition-colors cursor-pointer text-left"
                >
                  Coffee & Tea
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('food-snacks')}
                  className="hover:text-[#D7A45B] transition-colors cursor-pointer text-left"
                >
                  Food & Snacks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#D7A45B] transition-colors cursor-pointer text-left"
                >
                  Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#D7A45B] transition-colors cursor-pointer text-left"
                >
                  Contact & Visit Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faqs')}
                  className="hover:text-[#D7A45B] transition-colors cursor-pointer text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Service */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#D7A45B] font-bold mb-4">
              Hours & Service
            </h4>
            <div className="space-y-3 text-sm text-[#F7F0E5]/85">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D7A45B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#F7F0E5]">{BUSINESS_INFO.openingTime}</p>
                  <p className="text-xs text-[#F7F0E5]/60 mt-0.5">
                    Closing time not listed; please call to confirm evening hours.
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t border-[#594037]/40">
                <p className="text-xs text-[#D7A45B] uppercase tracking-wider font-semibold mb-1">
                  Service Options
                </p>
                <p className="text-xs text-[#F7F0E5]/80">
                  Dine-in and Takeout available
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#D7A45B] font-bold mb-4">
              Find & Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D7A45B] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="font-mono font-medium text-[#F7F0E5] hover:text-[#D7A45B] transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-[#F7F0E5]/60 mt-0.5">
                    Call for takeout or table inquiries
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-[#594037]/40">
                <MapPin className="w-4 h-4 text-[#D7A45B] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#F7F0E5]">{BUSINESS_INFO.location}</p>
                  <p className="text-xs text-[#F7F0E5]/60 font-mono mt-0.5">
                    Code: {BUSINESS_INFO.locationCode}
                  </p>
                  <a
                    href={BUSINESS_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#D7A45B] hover:underline mt-1 font-medium"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F0E5]/60">
          <p>
            Evening Hours Tea and Coffee · Okara, Punjab, Pakistan · Information verified against public listing
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#D7A45B] hover:text-[#F7F0E5] transition-colors cursor-pointer py-1 px-2 rounded"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
