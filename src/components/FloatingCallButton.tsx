import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const FloatingCallButton: React.FC = () => {
  return (
    <aside
      aria-label="Quick Phone Contact"
      className="fixed left-4 bottom-6 z-30 md:left-6 md:bottom-8 print:hidden"
    >
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        aria-label={`Call the Cafe at ${BUSINESS_INFO.phone}`}
        className="group relative flex items-center gap-3 bg-[#35231F] text-[#F7F0E5] pl-3.5 pr-4 py-3 rounded-full border border-[#D7A45B]/80 shadow-lg hover:shadow-2xl hover:bg-[#594037] active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#D7A45B] focus-visible:ring-offset-2"
      >
        {/* Animated phone pulse ring / accent */}
        <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#D7A45B] text-[#35231F] shrink-0 group-hover:scale-105 transition-transform">
          <Phone className="w-4 h-4 fill-current" />
        </span>

        {/* Text label - Visible on desktop, accessible on mobile */}
        <div className="flex flex-col text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#D7A45B] leading-none">
            Call the Cafe
          </span>
          <span className="text-xs text-[#F7F0E5] font-mono font-medium hidden sm:inline leading-tight mt-0.5">
            {BUSINESS_INFO.phone}
          </span>
        </div>

        {/* Desktop hover tooltip indicator */}
        <span
          role="tooltip"
          className="pointer-events-none absolute left-0 -top-10 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity bg-[#242321] text-[#F7F0E5] text-[11px] px-2.5 py-1 rounded shadow-md whitespace-nowrap border border-[#594037]"
        >
          Direct telephone line: Opens 6:00 PM
        </span>
      </a>
    </aside>
  );
};
