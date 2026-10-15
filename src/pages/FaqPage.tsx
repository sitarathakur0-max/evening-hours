import React, { useState } from 'react';
import { ChevronDown, Phone, Search, HelpCircle, CheckCircle2 } from 'lucide-react';
import { FAQS_LIST, BUSINESS_INFO } from '../data/businessData';

interface FaqPageProps {
  onNavigate: (route: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = FAQS_LIST.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-16 sm:space-y-24 pt-8">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#594037]">
            Helpful Answers
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#35231F] leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#594037] leading-relaxed">
            Transparent answers regarding hours, location in Okara, menu ordering, and services at Evening Hours Tea and Coffee.
          </p>
        </div>
      </section>

      {/* 2. Search & Accordions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="w-4 h-4 text-[#594037] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., hours, location, takeout, menu)..."
            className="w-full bg-white text-xs text-[#242321] pl-10 pr-4 py-3 rounded-xl border border-[#594037]/20 focus:outline-none focus:ring-2 focus:ring-[#D7A45B] placeholder:text-[#594037]/50 shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#594037] hover:text-[#35231F]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-[#594037]/15 p-6">
              <HelpCircle className="w-8 h-8 text-[#594037]/60 mx-auto mb-2" />
              <p className="font-serif text-lg font-bold text-[#35231F]">
                No matching questions found
              </p>
              <p className="text-xs text-[#594037] mt-1">
                Please call us directly at {BUSINESS_INFO.phone} for any specific questions.
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="bg-white rounded-xl border border-[#594037]/15 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A45B]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#35231F]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#594037] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#D7A45B]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#594037] leading-relaxed border-t border-[#594037]/10 animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* 3. Direct Contact Help Card */}
        <div className="mt-12 p-8 rounded-2xl bg-[#35231F] text-[#F7F0E5] border border-[#594037] text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#F7F0E5]">
            Have an Unanswered Question?
          </h3>
          <p className="text-xs sm:text-sm text-[#F7F0E5]/80 max-w-lg mx-auto">
            Since daily hours and fresh batches may adjust, our team in Okara is available to answer any questions by telephone starting at 6:00 PM.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#D7A45B] text-[#35231F] font-semibold text-xs uppercase tracking-wider hover:bg-[#e0b473] transition-colors shadow-md"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call the Cafe: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
