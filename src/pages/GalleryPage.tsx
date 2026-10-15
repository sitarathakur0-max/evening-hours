import React, { useState } from 'react';
import { Maximize2, Sparkles, Filter } from 'lucide-react';
import { GALLERY_ITEMS, CafeImage } from '../data/businessData';
import { ImageLightbox } from '../components/ImageLightbox';

export const GalleryPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const categories = ['All', 'Coffee', 'Tea', 'Atmosphere', 'Cold Beverages'];

  const filteredImages = GALLERY_ITEMS.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.category === selectedFilter;
  });

  const handleOpenLightbox = (indexInFiltered: number) => {
    // Find the real index in GALLERY_ITEMS
    const item = filteredImages[indexInFiltered];
    const realIndex = GALLERY_ITEMS.findIndex((img) => img.src === item.src);
    setActiveImageIndex(realIndex >= 0 ? realIndex : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pt-8">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#594037]">
            Visual Moments
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#35231F] leading-tight">
            The Evening Atmosphere
          </h1>
          <p className="text-base sm:text-lg text-[#594037] leading-relaxed">
            Take a visual tour through the textures, steam, rich colors, and warm lighting that define our evening cafe culture in Okara.
          </p>
        </div>
      </section>

      {/* 2. Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#594037]/20">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isSelected = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`cursor-pointer px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A45B] ${
                    isSelected
                      ? 'bg-[#35231F] text-[#F7F0E5] shadow-sm'
                      : 'bg-white/80 text-[#594037] hover:bg-white hover:text-[#35231F] border border-[#594037]/15'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <span className="text-xs text-[#594037]">
            Showing {filteredImages.length} visual {filteredImages.length === 1 ? 'vignette' : 'vignettes'}
          </span>
        </div>

        {/* 3. Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {filteredImages.map((image, idx) => (
            <div
              key={image.title}
              onClick={() => handleOpenLightbox(idx)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#594037]/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#35231F]/5">
                <img
                  src={image.src}
                  alt={image.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 rounded-full bg-[#35231F]/90 text-[#D7A45B] shadow-lg flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider">
                    <Maximize2 className="w-4 h-4" />
                    <span>View Larger</span>
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-[#35231F]/90 text-[#F7F0E5] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                  {image.category}
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="font-serif text-xl font-bold text-[#35231F] group-hover:text-[#594037] transition-colors">
                  {image.title}
                </h3>
                <p className="text-xs text-[#594037] leading-relaxed">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Notice */}
        <div className="mt-12 text-center text-xs text-[#594037]/80 italic">
          Photography shown serves as illustrative commercial representation of the warm evening atmosphere and beverages crafted at Evening Hours Tea and Coffee in Okara.
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={GALLERY_ITEMS}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onSelectIndex={(newIdx) => setActiveImageIndex(newIdx)}
      />
    </div>
  );
};
