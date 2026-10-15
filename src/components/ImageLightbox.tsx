import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { CafeImage } from '../data/businessData';

interface ImageLightboxProps {
  images: CafeImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onSelectIndex,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onSelectIndex((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight') {
        onSelectIndex((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onSelectIndex]);

  if (!isOpen || !images[currentIndex]) return null;

  const current = images[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex + 1) % images.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
      className="fixed inset-0 z-50 bg-[#242321]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between text-[#F7F0E5] max-w-6xl mx-auto w-full z-10">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#D7A45B] font-semibold">
            {current.category} · {currentIndex + 1} of {images.length}
          </span>
          <h4 className="font-serif text-lg font-bold text-[#F7F0E5]">{current.title}</h4>
        </div>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-[#35231F] text-[#F7F0E5] hover:text-[#D7A45B] border border-[#594037] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A45B]"
          aria-label="Close image preview"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image View */}
      <div
        className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-[#35231F]/80 text-[#F7F0E5] hover:text-[#D7A45B] hover:bg-[#35231F] border border-[#594037] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A45B]"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={current.src}
          alt={current.alt}
          referrerPolicy="no-referrer"
          className="max-h-[75vh] max-w-full rounded-lg object-contain shadow-2xl border border-[#594037]/40"
        />

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-[#35231F]/80 text-[#F7F0E5] hover:text-[#D7A45B] hover:bg-[#35231F] border border-[#594037] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A45B]"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption */}
      <div
        className="max-w-2xl mx-auto w-full text-center bg-[#35231F]/90 border border-[#594037] px-5 py-3 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-sm text-[#F7F0E5]/90">{current.caption}</p>
        <p className="text-[11px] text-[#F7F0E5]/50 mt-1">
          Illustrative cafe photography for Evening Hours Tea and Coffee
        </p>
      </div>
    </div>
  );
};
