import React from 'react';
import { Phone, Mail, MessageCircle, Facebook, Instagram, Linkedin, GraduationCap } from 'lucide-react';
import { SAFIR_CONTACT, getSafirWhatsAppUrl } from '../data/safirData';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

interface TopBarProps {
  onOpenFreeTrial: () => void;
  onOpenStudentDashboard?: () => void;
  onOpenSystemModal?: () => void;
  onOpenAIAssistant?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  onOpenFreeTrial,
  onOpenStudentDashboard,
  onOpenSystemModal,
  onOpenAIAssistant
}) => {
  const { t, isRtl, isArabic, isUrdu } = useLanguage();

  return (
    <div className="bg-[#064232] text-white border-b border-[#0a523f] text-xs py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Phone + WhatsApp + Flag */}
        <div className="flex items-center gap-3 sm:gap-6 min-w-0">
          {/* Phone with Pakistan Flag */}
          <a
            href={`tel:${SAFIR_CONTACT.cleanPhone}`}
            className="flex items-center gap-1.5 font-medium hover:text-[#facc15] transition-colors group truncate"
            title="Call Noor Ul Huda Online Quran Academy"
            dir="ltr"
          >
            <span className="text-sm sm:text-base leading-none select-none" role="img" aria-label="Pakistan">
              🇵🇰
            </span>
            <span className="font-semibold tracking-wide text-[11px] sm:text-xs text-[#e8f5e9] group-hover:text-[#facc15] truncate">
              {SAFIR_CONTACT.phone}
            </span>
          </a>

          {/* Email Address - visible on medium+ screens */}
          <a
            href={`mailto:${SAFIR_CONTACT.email}`}
            className="hidden md:flex items-center gap-1.5 text-[11px] sm:text-xs text-[#e8f5e9] hover:text-[#facc15] transition-colors truncate"
            title={`Official Email: ${SAFIR_CONTACT.email}`}
            aria-label={`Official Email: ${SAFIR_CONTACT.email}`}
            dir="ltr"
          >
            <Mail className="w-3.5 h-3.5 text-[#facc15] flex-shrink-0" />
            <span className="truncate">{SAFIR_CONTACT.email}</span>
          </a>

          {/* AI Assistant Quick Trigger */}
          {onOpenAIAssistant && (
            <button
              onClick={onOpenAIAssistant}
              className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-900/90 text-[#facc15] hover:bg-[#0a4d3b] text-[10px] sm:text-[11px] font-semibold border border-[#facc15]/40 transition-all cursor-pointer shadow-sm"
              title="Open AI Quran Learning Assistant & New Muslim Guide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] animate-pulse" />
              <span>✨ AI Quran Tutor</span>
            </button>
          )}

          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-2.5 text-[#a7d7c5]">
            <a
              href={SAFIR_CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href={SAFIR_CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href={SAFIR_CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={getSafirWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Quick WhatsApp icon for mobile only */}
          <a
            href={getSafirWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden text-[#25D366] hover:scale-110 transition-transform p-0.5"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Theme Toggle, Language Switcher, Desktop Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
          <ThemeToggle variant="topbar" />
          <LanguageSwitcher variant="topbar" />

          {/* Student Portal - Desktop only */}
          {onOpenStudentDashboard && (
            <button
              id="topbar-student-portal-btn"
              onClick={onOpenStudentDashboard}
              className="hidden sm:flex bg-[#042d22] hover:bg-[#074735] text-[#facc15] hover:text-white border border-[#facc15]/30 font-nav font-medium px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-[10.5px] sm:text-xs tracking-wide transition-all transform active:scale-95 items-center gap-1.5 shadow-sm cursor-pointer"
              title="Access Student Learning Dashboard"
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#facc15]" />
              <span>{isArabic ? 'بوابة الطلاب' : isUrdu ? 'طلباء پورٹل' : 'Student Portal'}</span>
            </button>
          )}

          {/* Free Trial Button - Desktop only */}
          <button
            onClick={onOpenFreeTrial}
            className="hidden sm:flex bg-[#facc15] hover:bg-[#eab308] text-[#13241d] font-nav font-medium px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-md text-[10.5px] sm:text-xs tracking-wider uppercase shadow-sm hover:shadow transition-all transform active:scale-95 items-center gap-1.5 cursor-pointer"
          >
            <span>{t.topBar.freeTrial}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
