import React from 'react';
import { BookOpen, GraduationCap, Globe, ArrowRight } from 'lucide-react';
import { ABOUT_PILLARS } from '../data/safirData';
import { useLanguage } from '../context/LanguageContext';

interface SafirAboutSectionProps {
  onLearnMore?: () => void;
}

export const SafirAboutSection: React.FC<SafirAboutSectionProps> = ({ onLearnMore }) => {
  const { t, isRtl } = useLanguage();

  const getPillarInfo = (idx: number, def: typeof ABOUT_PILLARS[0]) => {
    if (idx === 0 && t.about?.historyTitle) return { title: t.about.historyTitle, text: t.about.historyText };
    if (idx === 1 && t.about?.approachTitle) return { title: t.about.approachTitle, text: t.about.approachText };
    if (idx === 2 && t.about?.commitmentTitle) return { title: t.about.commitmentTitle, text: t.about.commitmentText };
    return def;
  };

  return (
    <section id="about-us" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-[#064E3B] tracking-tight mb-2">
            {t.about.title}
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full mb-4"></div>
          <p className="font-body font-normal text-sm sm:text-base text-[#53655D]">
            {t.about.subtitle}
          </p>
        </div>

        {/* Mission Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <div className="text-left rtl:text-right">
            <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#064E3B] mb-4">
              {t.about.missionTitle}
            </h3>
            <div className="space-y-4 font-body font-normal text-xs sm:text-sm text-[#17211D] leading-relaxed">
              <p>
                {t.about.missionP1}
              </p>
              <p>
                {t.about.missionP2}
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md border border-[#DDE5DF] max-h-80 bg-white">
            <img
              src="/student-holding-quran.jpg"
              alt="Dedicated student of Noor Ul Huda Academy holding the Holy Quran with love and devotion"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width={560}
              height={320}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Vision Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-14 sm:mb-16">
          <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-md border border-[#DDE5DF] max-h-80 bg-white">
            <img
              src="/student-pointing-quran.jpg"
              alt="Young student reading and pointing to Quran verses during one-on-one lesson"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width={560}
              height={320}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2 text-left rtl:text-right">
            <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#064E3B] mb-4">
              {t.about.visionTitle}
            </h3>
            <div className="space-y-4 font-body font-normal text-xs sm:text-sm text-[#17211D] leading-relaxed">
              <p>
                {t.about.visionP1}
              </p>
              <p>
                {t.about.visionP2}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid: Our History, Our Approach, Our Commitment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ABOUT_PILLARS.map((pillar, idx) => {
            const info = getPillarInfo(idx, pillar);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DDE5DF] shadow-sm hover:shadow-md transition-shadow text-left rtl:text-right"
              >
                <div className="w-12 h-12 rounded-xl bg-[#064E3B]/10 text-[#064E3B] flex items-center justify-center mb-4">
                  {pillar.iconName === 'book' && <BookOpen className="w-6 h-6 text-[#D4AF37]" />}
                  {pillar.iconName === 'graduation-cap' && <GraduationCap className="w-6 h-6 text-[#D4AF37]" />}
                  {pillar.iconName === 'globe' && <Globe className="w-6 h-6 text-[#D4AF37]" />}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#064E3B] mb-2 font-heading">
                  {info.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#53655D] leading-relaxed font-body">
                  {info.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        {onLearnMore && (
          <div className="text-center">
            <button
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#064E3B] hover:bg-[#022C22] text-white font-semibold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <span>{t.about.learnMoreBtn}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
