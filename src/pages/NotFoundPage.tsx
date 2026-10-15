import React from 'react';
import { Coffee, ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (route: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md mx-auto space-y-6 bg-white p-8 sm:p-10 rounded-2xl border border-[#594037]/15 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#35231F] text-[#D7A45B] flex items-center justify-center mx-auto">
          <Coffee className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#D7A45B] font-semibold">
            Page Not Found · 404
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#35231F]">
            Lost in the Evening?
          </h1>
          <p className="text-xs sm:text-sm text-[#594037] leading-relaxed">
            The page you are looking for doesn&apos;t seem to exist. Let&apos;s guide you back to our warm cafe offerings.
          </p>
        </div>
        <div>
          <button
            onClick={() => onNavigate('home')}
            className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded bg-[#35231F] text-[#F7F0E5] font-semibold text-xs uppercase tracking-wider hover:bg-[#594037] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#D7A45B]" />
            <span>Return to Homepage</span>
          </button>
        </div>
      </div>
    </div>
  );
};
