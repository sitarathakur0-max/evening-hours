import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Send,
  AlertCircle,
  HelpCircle,
  MessageSquare,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiryType: 'takeout',
    notes: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = 'Please provide your name';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Please provide a valid phone number';
    } else if (formData.phone.trim().length < 7) {
      errors.phone = 'Please enter a complete phone number';
    }
    if (!formData.notes.trim()) {
      errors.notes = 'Please include details of your inquiry or takeout request';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pt-8">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#594037]">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#35231F] leading-tight">
            Contact & Visit Evening Hours
          </h1>
          <p className="text-base sm:text-lg text-[#594037] leading-relaxed">
            We look forward to welcoming you in Okara. Connect with us directly by phone or find our location as evening begins.
          </p>
        </div>
      </section>

      {/* 2. Primary Information Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Phone */}
          <div className="bg-white rounded-2xl p-7 border border-[#594037]/15 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#35231F] text-[#D7A45B] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#D7A45B] font-semibold block">
                Primary Phone Line
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#35231F]">
                {BUSINESS_INFO.phone}
              </h3>
              <p className="text-xs text-[#594037] leading-relaxed">
                Call for immediate takeout orders, group seating questions, or today&apos;s fresh menu availability.
              </p>
            </div>

            <div className="pt-4 border-t border-[#594037]/10 flex flex-col sm:flex-row gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex-1 text-center py-2.5 px-4 rounded bg-[#35231F] text-[#F7F0E5] text-xs font-semibold uppercase tracking-wider hover:bg-[#594037] transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#D7A45B]" />
                <span>Call Now</span>
              </a>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="py-2.5 px-3 rounded bg-[#F7F0E5] text-[#35231F] hover:bg-[#ebdcc8] transition-colors border border-[#594037]/20 text-xs font-medium inline-flex items-center justify-center gap-1.5 cursor-pointer"
                title="Copy phone number"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Location Code */}
          <div className="bg-white rounded-2xl p-7 border border-[#594037]/15 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#35231F] text-[#D7A45B] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#D7A45B] font-semibold block">
                Location in Okara
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#35231F]">
                {BUSINESS_INFO.location}
              </h3>
              <p className="text-xs text-[#594037] font-mono leading-relaxed">
                Google Maps Code: <strong>{BUSINESS_INFO.locationCode}</strong>
              </p>
              <p className="text-xs text-[#594037]/80">
                Directions link opens Google Maps with the verified Plus Code. (Exact street pin requires on-site confirmation).
              </p>
            </div>

            <div className="pt-4 border-t border-[#594037]/10">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 rounded bg-[#D7A45B] text-[#35231F] text-xs font-semibold uppercase tracking-wider hover:bg-[#e0b473] transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open Google Maps</span>
              </a>
            </div>
          </div>

          {/* Card 3: Hours & Service */}
          <div className="bg-white rounded-2xl p-7 border border-[#594037]/15 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#35231F] text-[#D7A45B] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#D7A45B] font-semibold block">
                Opening Hours
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#35231F]">
                {BUSINESS_INFO.openingTime}
              </h3>
              <p className="text-xs text-[#594037] leading-relaxed">
                Closing hours are not listed in the public business profile. If planning a late evening visit, we recommend calling ahead.
              </p>
              <div className="text-xs text-[#35231F] font-semibold pt-1">
                Services: Dine-in and Takeout
              </div>
            </div>

            <div className="pt-4 border-t border-[#594037]/10 text-xs text-[#594037]">
              <span>Location: <strong>Okara, Punjab, Pakistan</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Inquiry Assistant & Direct Ordering Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-[#594037]/15 shadow-sm space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D7A45B] font-semibold">
                Inquiry & Preparation Helper
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#35231F] mt-1">
                Prepare Your Inquiry or Takeout Note
              </h2>
              <p className="text-xs sm:text-sm text-[#594037] mt-1">
                Fill out the details below to format your message. Because the cafe prioritizes direct telephone communication, you can immediately review and call with this note.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-[#594037]/10 border border-[#594037]/25 space-y-4">
                <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
                  <Check className="w-5 h-5 text-emerald-700" />
                  <span>Inquiry Prepared Successfully!</span>
                </div>
                <div className="text-xs text-[#35231F] space-y-1 bg-white p-4 rounded-lg border border-[#594037]/15">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Contact Phone:</strong> {formData.phone}</p>
                  <p><strong>Request Type:</strong> {formData.inquiryType.toUpperCase()}</p>
                  <p><strong>Details:</strong> {formData.notes}</p>
                </div>
                <p className="text-xs text-[#594037]">
                  To connect directly with Evening Hours Tea and Coffee, click below to place a direct call with your request ready.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#35231F] text-[#F7F0E5] font-semibold text-xs uppercase tracking-wider hover:bg-[#594037]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D7A45B]" />
                    <span>Dial {BUSINESS_INFO.phone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', phone: '', inquiryType: 'takeout', notes: '' });
                    }}
                    className="px-4 py-2.5 rounded bg-white text-[#35231F] text-xs font-semibold hover:bg-neutral-100 border border-[#594037]/20 cursor-pointer"
                  >
                    Create Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#35231F] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Khan"
                    className="w-full px-4 py-2.5 text-xs text-[#242321] rounded-lg border border-[#594037]/20 focus:outline-none focus:ring-2 focus:ring-[#D7A45B]"
                  />
                  {formErrors.name && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#35231F] mb-1">
                    Your Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0300 1234567"
                    className="w-full px-4 py-2.5 text-xs text-[#242321] rounded-lg border border-[#594037]/20 focus:outline-none focus:ring-2 focus:ring-[#D7A45B]"
                  />
                  {formErrors.phone && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#35231F] mb-1">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs text-[#242321] rounded-lg border border-[#594037]/20 focus:outline-none focus:ring-2 focus:ring-[#D7A45B] bg-white"
                  >
                    <option value="takeout">Takeout Order / Pickup Inquiry</option>
                    <option value="dine-in">Dine-in Group / Seating Inquiry</option>
                    <option value="menu">Menu & Availability Question</option>
                    <option value="other">General Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#35231F] mb-1">
                    Details or Items Requested *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Inquiring about tea and coffee for 3 people around 7:30 PM..."
                    className="w-full px-4 py-2.5 text-xs text-[#242321] rounded-lg border border-[#594037]/20 focus:outline-none focus:ring-2 focus:ring-[#D7A45B]"
                  />
                  {formErrors.notes && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.notes}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg bg-[#35231F] text-[#F7F0E5] font-semibold text-xs uppercase tracking-wider hover:bg-[#594037] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#D7A45B]" />
                    <span>Review & Prepare Inquiry</span>
                  </button>
                  <p className="text-[11px] text-[#594037]/70 text-center mt-2">
                    Direct phone communication is verified as the primary operational channel.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right: Operational Clarity & Foodpanda Notice */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#35231F] text-[#F7F0E5] rounded-2xl p-8 border border-[#594037] space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#D7A45B] font-semibold">
                Online Ordering Notice
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F7F0E5]">
                Foodpanda Listing Reference
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F0E5]/80 leading-relaxed">
                Foodpanda.pk is listed as an ordering platform in the cafe&apos;s verified business profile. However, an exact restaurant URL has not been provided.
              </p>
              <p className="text-xs sm:text-sm text-[#F7F0E5]/80 leading-relaxed">
                To guarantee that your order is received accurately and prepared on time without intermediary delays, we strongly recommend calling the cafe directly at{' '}
                <strong className="text-[#D7A45B]">{BUSINESS_INFO.phone}</strong>.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#594037]/15 shadow-sm space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#594037] font-semibold">
                Visiting In Person
              </span>
              <h3 className="font-serif text-xl font-bold text-[#35231F]">
                Planning Your Route
              </h3>
              <p className="text-xs text-[#594037] leading-relaxed">
                The cafe operates in Okara, Pakistan, opening at 6:00 PM. Enter the Google Maps code <strong>RFJC+42, Okara</strong> into your navigation app or use the link below.
              </p>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#35231F] hover:text-[#D7A45B] transition-colors pt-2"
              >
                <span>Open in Google Maps Navigation</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
