import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS_LIST } from '../data/safirData';
import { useLanguage } from '../context/LanguageContext';

export const SafirTestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, isRtl } = useLanguage();

  const current = TESTIMONIALS_LIST[currentIndex];

  const getTestimonialData = (item: typeof TESTIMONIALS_LIST[0]) => {
    if (item.id === 1 && t.testimonials?.items?.ahmed) return t.testimonials.items.ahmed;
    if (item.id === 2 && t.testimonials?.items?.sarah) return t.testimonials.items.sarah;
    if (item.id === 3 && t.testimonials?.items?.fatima) return t.testimonials.items.fatima;
    return item;
  };

  const currentData = getTestimonialData(current);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_LIST.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_LIST.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-[#064232] tracking-tight mb-2">
            {t.testimonials.title}
          </h2>
          <div className="w-16 h-1 bg-[#eab308] mx-auto rounded-full"></div>
        </div>

        {/* Testimonial Card */}
        <div className="bg-[#faf9f5] rounded-2xl p-8 sm:p-12 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative">
          {/* Green Quote Mark */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#064232]">
              <Quote className="w-6 h-6 rotate-180" />
            </div>
          </div>

          {/* Testimonial Quote */}
          <p className="text-base sm:text-xl text-gray-700 font-body font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            &ldquo;{currentData.quote}&rdquo;
          </p>

          {/* Author Info with larger real student portrait */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative">
              <img
                src={current.image}
                alt={currentData.author}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-[#eab308] shadow-md"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -bottom-1 -right-1 rtl:-right-auto rtl:-left-1 w-5 h-5 rounded-full bg-[#064232] text-[#facc15] flex items-center justify-center text-xs font-bold shadow">
                ★
              </span>
            </div>
            <div className="text-center sm:text-left rtl:sm:text-right">
              <h4 className="text-base sm:text-lg font-heading font-semibold text-[#064232]">
                {currentData.author}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 font-body font-normal">
                {currentData.role}
              </p>
            </div>
          </div>

          {/* Previous / Next buttons for desktop */}
          <div className="hidden sm:flex items-center justify-between absolute inset-y-0 -left-5 -right-5 pointer-events-none">
            <button
              onClick={isRtl ? handleNext : handlePrev}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 text-gray-700 hover:text-[#064232] hover:border-[#064232] flex items-center justify-center transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
            </button>
            <button
              onClick={isRtl ? handlePrev : handleNext}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 text-gray-700 hover:text-[#064232] hover:border-[#064232] flex items-center justify-center transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 mb-12">
          {TESTIMONIALS_LIST.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-[#064232]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Student Learning Showcase: All 3 real students in their active learning spots */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <h3 className="text-lg sm:text-xl font-heading font-semibold text-[#064232] mb-2">
            {t.testimonials.showcaseTitle}
          </h3>
          <p className="font-body font-normal text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mb-6">
            {t.testimonials.showcaseSubtitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {TESTIMONIALS_LIST.map((item, idx) => {
              const itemData = getTestimonialData(item);
              return (
                <div
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`cursor-pointer rounded-2xl p-3 border text-left rtl:text-right transition-all duration-300 bg-white ${
                    currentIndex === idx
                      ? 'border-[#064232] shadow-md ring-2 ring-[#064232]/20'
                      : 'border-gray-200 hover:border-[#eab308] hover:shadow-sm'
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-gray-100">
                    <img
                      src={item.image}
                      alt={itemData.author}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 rtl:left-auto rtl:right-2 px-2 py-0.5 rounded-full bg-[#064232]/90 text-[#facc15] text-[10px] font-bold">
                      {isRtl ? `طالب علم ${idx + 1}` : `Student ${idx + 1}`}
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-[#064232] truncate">
                    {itemData.author}
                  </h4>
                  <p className="text-xs text-gray-500 truncate">
                    {itemData.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
