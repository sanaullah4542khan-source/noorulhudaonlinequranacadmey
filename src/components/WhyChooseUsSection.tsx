import React from 'react';
import { HeartHandshake, BookText, BookOpen, Mic, Star, ArrowRight, Globe } from 'lucide-react';
import { WHY_CHOOSE_STATS, WHY_CHOOSE_FEATURES } from '../data/safirData';
import { useLanguage } from '../context/LanguageContext';

interface WhyChooseUsSectionProps {
  onOpenDemo: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onOpenDemo }) => {
  const { t, isRtl } = useLanguage();

  const getStatInfo = (idx: number, stat: typeof WHY_CHOOSE_STATS[0]) => {
    if (t.whyChooseUs?.stats) {
      if (idx === 0) return { label: t.whyChooseUs.stats.courses || stat.label, desc: t.whyChooseUs.stats.coursesDesc || stat.description, badge: t.whyChooseUs.stats.verified || 'Verified', worldwide: t.whyChooseUs.stats.worldwide || 'Worldwide' };
      if (idx === 1) return { label: t.whyChooseUs.stats.experience || stat.label, desc: t.whyChooseUs.stats.experienceDesc || stat.description, badge: t.whyChooseUs.stats.verified || 'Verified', worldwide: t.whyChooseUs.stats.worldwide || 'Worldwide' };
      if (idx === 2) return { label: t.whyChooseUs.stats.tutors || stat.label, desc: t.whyChooseUs.stats.tutorsDesc || stat.description, badge: t.whyChooseUs.stats.verified || 'Verified', worldwide: t.whyChooseUs.stats.worldwide || 'Worldwide' };
      return { label: t.whyChooseUs.stats.world || stat.label, desc: t.whyChooseUs.stats.worldDesc || stat.description, badge: t.whyChooseUs.stats.verified || 'Verified', worldwide: t.whyChooseUs.stats.worldwide || 'Worldwide' };
    }
    return { label: stat.label, desc: stat.description, badge: 'Verified', worldwide: 'Worldwide' };
  };

  const getFeatureInfo = (id: string, defTitle: string, defSubtitle: string) => {
    if (id === '1' && t.whyChooseUs?.features?.freeTrial) return t.whyChooseUs.features.freeTrial;
    if (id === '2' && t.whyChooseUs?.features?.qaida) return t.whyChooseUs.features.qaida;
    if (id === '3' && t.whyChooseUs?.features?.quranReading) return t.whyChooseUs.features.quranReading;
    if (id === '4' && t.whyChooseUs?.features?.tajweed) return t.whyChooseUs.features.tajweed;
    if (id === '5' && t.whyChooseUs?.features?.hifz) return t.whyChooseUs.features.hifz;
    return { title: defTitle, subtitle: defSubtitle };
  };

  return (
    <section id="why-choose-us" className="py-10 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-heading font-semibold text-[#064232] tracking-tight mb-2">
            {t.whyChooseUs.title}
          </h2>
          <div className="w-16 h-1 bg-[#eab308] mx-auto rounded-full mb-3"></div>
          <p className="font-body font-normal text-xs sm:text-base text-gray-600">
            {t.whyChooseUs.subtitle}
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-14">
          {WHY_CHOOSE_STATS.map((stat, idx) => {
            const info = getStatInfo(idx, stat);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-[#064232]/20 transition-all duration-300 flex flex-col group"
              >
                {/* Card Image Header */}
                {stat.image ? (
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={stat.image}
                      alt={`${stat.number} ${info.label}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                      width={320}
                      height={240}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                      <span className="text-xl sm:text-3xl font-heading font-semibold tracking-tight drop-shadow-md text-white" dir="ltr">
                        {stat.number}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#064232]/90 border border-[#facc15]/30 text-[#facc15] text-[9.5px] sm:text-[10px] font-nav font-medium">
                        {info.badge}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#064232] via-[#0a523f] to-[#04241b] flex flex-col items-center justify-center text-white p-4 sm:p-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-[#facc15]/30 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                      <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-[#facc15]" />
                    </div>
                    <span className="text-xl sm:text-3xl font-heading font-semibold tracking-tight text-[#facc15]" dir="ltr">
                      {stat.number}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-nav font-medium text-[#a7d7c5] tracking-widest uppercase mt-0.5">
                      {info.worldwide}
                    </span>
                  </div>
                )}

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow text-center items-center">
                  <h3 className="text-xs sm:text-base font-heading font-semibold text-[#064232] uppercase tracking-wider mb-1">
                    {info.label}
                  </h3>
                  {info.desc && (
                    <p className="font-body font-normal text-xs text-gray-500 leading-relaxed">
                      {info.desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 5 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {WHY_CHOOSE_FEATURES.map((feature) => {
            const featInfo = getFeatureInfo(feature.id, feature.title, feature.subtitle);
            return (
              <div
                key={feature.id}
                className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-[#064232]/20 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f0fdf4] text-[#064232] flex items-center justify-center mb-2.5 sm:mb-3 group-hover:bg-[#064232] group-hover:text-white transition-colors duration-300">
                  {feature.iconName === 'heart-hands' && <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />}
                  {feature.iconName === 'book' && <BookText className="w-5 h-5 sm:w-6 sm:h-6" />}
                  {feature.iconName === 'quran' && <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />}
                  {feature.iconName === 'mic' && <Mic className="w-5 h-5 sm:w-6 sm:h-6" />}
                  {feature.iconName === 'star' && <Star className="w-5 h-5 sm:w-6 sm:h-6" />}
                </div>
                <h3 className="text-xs sm:text-base font-heading font-semibold text-[#064232] mb-1">
                  {featInfo.title}
                </h3>
                <p className="font-body font-normal text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                  {featInfo.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#064232] hover:bg-[#0a523f] text-white font-nav font-medium text-xs sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <span>{t.whyChooseUs.ctaDemo}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
};
