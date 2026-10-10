import React from 'react';
import { Globe, Check } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  variant?: 'topbar' | 'compact' | 'drawer';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'topbar' }) => {
  const { language, setLanguage } = useLanguage();

  const handleSwitch = (newLang: Language) => {
    if (language !== newLang) {
      setLanguage(newLang);
    }
  };

  if (variant === 'drawer') {
    return (
      <div className="w-full bg-[#04241b] p-1.5 rounded-xl border border-[#0d644d] flex items-center justify-between gap-1 text-xs">
        <div className="flex items-center gap-1.5 px-2 text-[#facc15] font-medium">
          <Globe className="w-4 h-4 text-[#facc15]" />
          <span className="text-[11px] uppercase tracking-wider text-emerald-200">Language:</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => handleSwitch('en')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-all flex items-center gap-1 ${
              language === 'en'
                ? 'bg-[#facc15] text-[#064232] font-bold shadow-sm'
                : 'text-emerald-200 hover:text-white hover:bg-white/10'
            }`}
          >
            <span>English</span>
          </button>
          <button
            type="button"
            onClick={() => handleSwitch('ur')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-all flex items-center gap-1 ${
              language === 'ur'
                ? 'bg-[#facc15] text-[#064232] font-bold shadow-sm'
                : 'text-emerald-200 hover:text-white hover:bg-white/10'
            }`}
          >
            <span style={{ fontFamily: "'Amiri', 'Noto Nastaliq Urdu', serif" }}>اردو</span>
          </button>
          <button
            type="button"
            onClick={() => handleSwitch('ar')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-all flex items-center gap-1 ${
              language === 'ar'
                ? 'bg-[#facc15] text-[#064232] font-bold shadow-sm'
                : 'text-emerald-200 hover:text-white hover:bg-white/10'
            }`}
          >
            <span style={{ fontFamily: "'Cairo', 'Amiri', serif" }}>العربية</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="inline-flex items-center bg-[#042f23] p-0.5 sm:p-1 rounded-full border border-[#0d644d] shadow-inner text-[11px] sm:text-xs"
      role="group"
      aria-label="Language selection"
    >
      <div className="flex items-center px-1.5 text-[#facc15] opacity-90 hidden xs:flex">
        <Globe className="w-3.5 h-3.5" />
      </div>

      {/* English Button */}
      <button
        type="button"
        onClick={() => handleSwitch('en')}
        className={`px-2.5 py-0.5 sm:py-1 rounded-full font-semibold transition-all duration-200 flex items-center gap-1 ${
          language === 'en'
            ? 'bg-[#facc15] text-[#064232] shadow-sm scale-100 font-bold'
            : 'text-[#a7d7c5] hover:text-white hover:bg-white/5'
        }`}
        aria-pressed={language === 'en'}
        title="Switch to English"
      >
        <span>English</span>
        {language === 'en' && <Check className="w-3 h-3 stroke-[3]" />}
      </button>

      {/* Urdu Button */}
      <button
        type="button"
        onClick={() => handleSwitch('ur')}
        className={`px-2 py-0.5 sm:py-1 rounded-full font-semibold transition-all duration-200 flex items-center gap-1 font-serif ${
          language === 'ur'
            ? 'bg-[#facc15] text-[#064232] shadow-sm scale-100 font-bold'
            : 'text-[#a7d7c5] hover:text-white hover:bg-white/5'
        }`}
        aria-pressed={language === 'ur'}
        title="اردو میں تبدیل کریں"
      >
        <span className="text-xs sm:text-sm leading-none pt-0.5" style={{ fontFamily: "'Amiri', 'Noto Nastaliq Urdu', serif" }}>
          اردو
        </span>
        {language === 'ur' && <Check className="w-3 h-3 stroke-[3]" />}
      </button>

      {/* Arabic Button */}
      <button
        type="button"
        onClick={() => handleSwitch('ar')}
        className={`px-2 py-0.5 sm:py-1 rounded-full font-semibold transition-all duration-200 flex items-center gap-1 font-arabic ${
          language === 'ar'
            ? 'bg-[#facc15] text-[#064232] shadow-sm scale-100 font-bold'
            : 'text-[#a7d7c5] hover:text-white hover:bg-white/5'
        }`}
        aria-pressed={language === 'ar'}
        title="التحويل إلى العربية"
      >
        <span className="text-xs sm:text-sm leading-none pt-0.5">
          عربي
        </span>
        {language === 'ar' && <Check className="w-3 h-3 stroke-[3]" />}
      </button>
    </div>
  );
};
