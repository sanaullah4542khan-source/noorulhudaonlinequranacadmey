import React, { useState } from 'react';
import { LIBRARY_RESOURCES } from '../data/libraryData';
import { LibraryResource } from '../types';
import { 
  BookOpen, 
  Search, 
  BookMarked, 
  Sparkles, 
  Clock, 
  FileText, 
  X, 
  ChevronRight, 
  Download, 
  Check, 
  ArrowRight,
  ExternalLink,
  Layers,
  Heart
} from 'lucide-react';

interface LibrarySectionProps {
  onOpenFreeTrial: (courseId?: string) => void;
}

export const LibrarySection: React.FC<LibrarySectionProps> = ({ onOpenFreeTrial }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeResource, setActiveResource] = useState<LibraryResource | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'qaida', label: 'Qaida & Foundations' },
    { id: 'tajweed', label: 'Tajweed Rules' },
    { id: 'duas', label: 'Duas & Adhkar' },
    { id: 'surahs', label: 'Selected Surahs' },
    { id: 'salah', label: 'Salah Guides' }
  ];

  const filteredResources = LIBRARY_RESOURCES.filter((res) => {
    const matchesCategory = selectedCategory === 'all' || res.category === selectedCategory;
    const matchesSearch = 
      !searchQuery.trim() ||
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (res.arabicTitle && res.arabicTitle.includes(searchQuery)) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleCopyText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="library" className="py-20 lg:py-28 bg-[#faf9f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064232]/10 border border-[#064232]/20 mb-4">
            <BookMarked className="w-4 h-4 text-[#064232]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#064232]">
              Knowledge Treasury
            </span>
          </div>

          <h2
            id="library-headline"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#064232] tracking-tight mb-4"
          >
            Digital Islamic & <br className="hidden sm:inline" />
            <span className="text-[#c69b32] font-serif italic">Quranic Library</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4e655c] leading-relaxed">
            Free, authentic study materials, Tajweed cheat sheets, 40 Rabbana Duas, and daily prayers compiled by our scholarly faculty for independent review and family learning.
          </p>

          {/* Search & Category Filter Bar */}
          <div className="mt-8 space-y-4 max-w-2xl mx-auto">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#4e655c] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                id="library-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g. Noorani Qaida, Tajweed, Duas, Salah, Surah)..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-[#e5e3d7] text-sm text-[#13241d] focus:outline-none focus:border-[#064232] shadow-sm transition-colors"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center justify-center flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  id={`library-cat-btn-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#064232] text-white shadow-sm'
                      : 'bg-white text-[#4e655c] border border-[#e5e3d7] hover:bg-[#f5f4ed] hover:text-[#064232]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              id={`library-item-${res.id}`}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e5e3d7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between hover:border-[#c69b32]/50 group"
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#064232]/10 text-[#064232]">
                    {res.badge}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#4e655c]">
                    <Clock className="w-3 h-3 text-[#c69b32]" />
                    <span>{res.readTime}</span>
                  </span>
                </div>

                {/* Titles */}
                <h3 className="font-serif text-xl font-bold text-[#064232] group-hover:text-[#997217] transition-colors mb-1">
                  {res.title}
                </h3>
                {res.arabicTitle && (
                  <p className="font-arabic text-base text-[#c69b32] mb-3 font-semibold text-right" dir="rtl">
                    {res.arabicTitle}
                  </p>
                )}

                <p className="text-xs text-[#4e655c] leading-relaxed mb-4">
                  {res.description}
                </p>

                {/* Key Bullet Summary */}
                <div className="p-3.5 rounded-2xl bg-[#faf9f5] border border-[#f0eee4] mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#064232] block mb-2">
                    Topics Included:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#13241d]">
                    {res.contentSummary.slice(0, 3).map((pt, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#064232] flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#f0eee4] flex items-center justify-between gap-2">
                <span className="text-[11px] text-[#4e655c] font-medium">
                  {res.format}
                </span>

                <button
                  id={`read-resource-btn-${res.id}`}
                  onClick={() => setActiveResource(res)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-[#064232] bg-gradient-to-r from-[#e6c564] to-[#c69b32] hover:brightness-105 active:scale-95 transition-all shadow-sm flex items-center gap-1.5"
                >
                  <span>Explore Guide</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {filteredResources.length === 0 && (
            <div className="col-span-full p-12 text-center bg-white rounded-3xl border border-[#e5e3d7]">
              <BookOpen className="w-10 h-10 text-[#4e655c] mx-auto mb-3 opacity-50" />
              <h4 className="font-serif text-lg font-bold text-[#064232] mb-1">
                No resources found matching your query
              </h4>
              <p className="text-xs text-[#4e655c] mb-4">
                Try searching for another topic or clear filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-[#064232] bg-[#faf9f5] border border-[#e5e3d7]"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Guided Learning Banner */}
        <div className="p-8 rounded-3xl bg-[#064232] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d5aa44]">
              Personalized Guidance
            </span>
            <h3 className="font-serif text-2xl font-bold text-white">
              Want a Qualified Teacher to Guide You Through These Books?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl leading-relaxed">
              Self-study is wonderful, but the Holy Quran has always been passed down through direct oral recitation with a verified master teacher. Schedule a free live lesson today.
            </p>
          </div>

          <button
            onClick={() => onOpenFreeTrial()}
            className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-[#064232] bg-gradient-to-r from-[#e6c564] to-[#c69b32] hover:brightness-105 active:scale-95 transition-all shadow-md whitespace-nowrap"
          >
            Practice With a Teacher (Free)
          </button>
        </div>
      </div>

      {/* Interactive Reader Modal */}
      {activeResource && (
        <div
          id="library-reader-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
          onClick={() => setActiveResource(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#e5e3d7] overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#064232] text-white p-6 sm:p-7 relative">
              <button
                onClick={() => setActiveResource(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#c69b32] text-[#064232]">
                  {activeResource.format}
                </span>
                <span className="text-xs text-emerald-200">
                  {activeResource.readTime}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                {activeResource.title}
              </h3>
              {activeResource.arabicTitle && (
                <p className="font-arabic text-lg text-[#f4e8c7] font-semibold text-right" dir="rtl">
                  {activeResource.arabicTitle}
                </p>
              )}
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto space-y-6">
              <p className="text-xs sm:text-sm text-[#4e655c] leading-relaxed border-b border-[#f0eee4] pb-4">
                {activeResource.description}
              </p>

              {activeResource.fullContent.map((section, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  <div className="border-l-2 border-[#c69b32] pl-3">
                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#064232]">
                      {section.sectionTitle}
                    </h4>
                    <p className="text-xs text-[#4e655c]">{section.description}</p>
                  </div>

                  {section.items && (
                    <div className="space-y-3">
                      {section.items.map((item, iIdx) => (
                        <div
                          key={iIdx}
                          className="p-4 rounded-2xl bg-[#faf9f5] border border-[#e5e3d7] text-xs text-[#13241d] space-y-2 relative"
                        >
                          {item.title && (
                            <strong className="font-serif text-sm font-bold text-[#064232] block">
                              {item.title}
                            </strong>
                          )}

                          {item.arabic && (
                            <div className="p-3 bg-white rounded-xl border border-[#f0eee4] text-right font-arabic text-lg sm:text-xl font-bold text-[#064232] leading-loose select-all" dir="rtl">
                              {item.arabic}
                            </div>
                          )}

                          {item.transliteration && (
                            <p className="text-xs italic text-[#997217] font-medium">
                              <strong>Pronunciation:</strong> {item.transliteration}
                            </p>
                          )}

                          {item.translation && (
                            <p className="text-xs text-[#13241d] leading-relaxed">
                              <strong>Meaning:</strong> {item.translation}
                            </p>
                          )}

                          {item.notes && (
                            <p className="text-[11px] text-[#4e655c] bg-amber-50/70 p-2.5 rounded-lg border border-amber-100">
                              <strong>Scholarly Note:</strong> {item.notes}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-[#faf9f5] border-t border-[#e5e3d7] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#4e655c]">
                Curated by Noor Ul Huda Faculty
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setActiveResource(null);
                    onOpenFreeTrial();
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-[#064232] bg-gradient-to-r from-[#e6c564] to-[#c69b32] hover:brightness-105 shadow-sm"
                >
                  Practice This with Teacher
                </button>
                <button
                  onClick={() => setActiveResource(null)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-[#4e655c] hover:bg-black/5"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
