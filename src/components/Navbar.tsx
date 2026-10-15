import React from 'react';
import { Phone, MapPin, Clock, Menu, X, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'menu', label: 'Menu' },
    { id: 'coffee-tea', label: 'Coffee & Tea' },
    { id: 'food-snacks', label: 'Food & Snacks' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact & Visit' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top subtle info ribbon */}
      <div className="bg-[#242321] text-[#F7F0E5] text-xs py-2 px-4 border-b border-[#35231F]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#D7A45B]">
              <Clock className="w-3.5 h-3.5" />
              <span>Opens at 6:00 PM</span>
            </span>
            <span className="text-[#F7F0E5]/40">|</span>
            <span className="flex items-center gap-1 text-[#F7F0E5]/80">
              <MapPin className="w-3.5 h-3.5" />
              <span>Okara, Pakistan</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-[#F7F0E5]/80 hidden sm:inline">
              Dine-in & Takeout
            </span>
            <span className="text-[#F7F0E5]/40 hidden sm:inline">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-[#D7A45B] hover:underline font-medium hidden sm:inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#35231F] text-[#F7F0E5] shadow-md border-b border-[#594037]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          {/* Brand Wordmark (Zone 1) */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A45B] rounded p-1 -ml-1 shrink-0"
            aria-label="Evening Hours Tea and Coffee Home"
          >
            <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#F7F0E5] group-hover:text-[#D7A45B] transition-colors leading-tight">
              Evening Hours
            </span>
            <span className="block text-[11px] font-sans tracking-widest text-[#D7A45B] uppercase font-medium">
              Tea & Coffee · Okara
            </span>
          </button>

          {/* Desktop Nav Links (Zone 2) */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-6 text-sm font-medium text-[#F7F0E5]/90"
          >
            {navLinks.map((link) => {
              const isActive = currentRoute === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`cursor-pointer whitespace-nowrap transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D7A45B] rounded ${
                    isActive
                      ? 'text-[#D7A45B] border-b-2 border-[#D7A45B] font-semibold'
                      : 'hover:text-[#D7A45B]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Primary Action Button (Zone 3) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('menu')}
              className="cursor-pointer text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded border border-[#D7A45B]/60 text-[#D7A45B] hover:bg-[#D7A45B]/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A45B]"
            >
              Explore Menu
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="cursor-pointer inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded bg-[#D7A45B] text-[#35231F] hover:bg-[#e0b473] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Cafe</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              aria-label="Call cafe now"
              className="sm:hidden p-2 rounded text-[#D7A45B] hover:bg-[#594037]/60"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-[#F7F0E5] hover:text-[#D7A45B] hover:bg-[#594037]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A45B]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="xl:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-4/5 max-w-sm h-full bg-[#35231F] text-[#F7F0E5] p-6 flex flex-col justify-between shadow-2xl border-l border-[#594037]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#594037]">
                <div>
                  <span className="font-serif text-xl font-bold text-[#F7F0E5]">
                    Evening Hours
                  </span>
                  <p className="text-xs text-[#D7A45B] tracking-wider uppercase">
                    Tea & Coffee · Okara
                  </p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#F7F0E5] hover:text-[#D7A45B] rounded"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = currentRoute === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full text-left px-3 py-3 rounded text-base font-medium flex items-center justify-between transition-colors ${
                        isActive
                          ? 'bg-[#594037] text-[#D7A45B] font-semibold'
                          : 'text-[#F7F0E5]/90 hover:bg-[#594037]/50 hover:text-[#D7A45B]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-60" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-[#594037] space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-[#D7A45B] text-[#35231F] font-semibold text-sm hover:bg-[#e0b473] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <div className="text-center text-xs text-[#F7F0E5]/70 pt-2">
                <p>Opens at 6:00 PM · Dine-in & Takeout</p>
                <p className="mt-1">Google code: {BUSINESS_INFO.locationCode}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
