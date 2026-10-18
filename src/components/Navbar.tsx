import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, ShieldCheck, Mail, Sparkles, BookOpen } from 'lucide-react';
import { SafirLogo } from './SafirLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { SAFIR_CONTACT, getSafirWhatsAppUrl } from '../data/safirData';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenFreeTrial: (courseId?: string) => void;
  onOpenAdminLogin: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenFreeTrial,
  onOpenAdminLogin,
  onScrollToSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, isRtl, isUrdu, isArabic } = useLanguage();

  const navLinks = [
    { id: 'hero', label: t.nav.home },
    { id: 'about-us', label: t.nav.about },
    { id: 'courses', label: t.nav.courses },
    { id: 'why-choose-us', label: t.nav.whyChooseUs },
    { id: 'teachers', label: t.nav.teachers },
    { id: 'library', label: 'Library' }
  ];

  const handleLinkClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* 1. Top Bar */}
      <div className="bg-[#04241b] text-white border-b border-[#0d644d] text-xs py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Left contact items */}
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <a
              href={`tel:${SAFIR_CONTACT.cleanPhone}`}
              className="flex items-center gap-1.5 font-medium hover:text-[#facc15] transition-colors truncate"
              dir="ltr"
            >
              <span className="text-sm select-none">🇵🇰</span>
              <span className="font-semibold text-[11px] sm:text-xs text-[#e8f5e9] truncate">
                {SAFIR_CONTACT.phone}
              </span>
            </a>

            <a
              href={`mailto:${SAFIR_CONTACT.email}`}
              className="hidden md:flex items-center gap-1.5 text-[11px] sm:text-xs text-[#e8f5e9] hover:text-[#facc15] transition-colors truncate"
              dir="ltr"
            >
              <Mail className="w-3.5 h-3.5 text-[#facc15] flex-shrink-0" />
              <span className="truncate">{SAFIR_CONTACT.email}</span>
            </a>

            <a
              href={getSafirWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#25D366] hover:text-white transition-colors text-[11px] font-semibold"
              title="WhatsApp Direct Contact"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>

          {/* Right items: Language Switcher + Admin Login */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <LanguageSwitcher variant="topbar" />

            <button
              onClick={onOpenAdminLogin}
              className="flex bg-[#064232] hover:bg-[#0a523f] text-[#facc15] hover:text-white border border-[#facc15]/50 font-medium px-2 py-1 sm:px-3 sm:py-1 rounded-md text-[10.5px] sm:text-xs tracking-wide transition-all items-center gap-1.5 shadow-sm cursor-pointer"
              title="Academy Administrator Access"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#facc15] flex-shrink-0" />
              <span>Admin Login</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav className="bg-[#064232] border-b border-[#0a523f] py-2 sm:py-3 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Logo Brand */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center text-left rtl:text-right focus:outline-none min-w-0"
            aria-label="Noor Ul Huda Online Quran Academy Home"
          >
            <SafirLogo variant="light" size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="px-2.5 py-1.5 text-xs xl:text-sm font-medium text-[#e8f5e9] hover:text-[#facc15] hover:bg-white/5 rounded-md transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => onOpenFreeTrial()}
              className="px-4 py-2 bg-[#facc15] hover:bg-[#eab308] text-[#13241d] font-bold text-xs rounded-lg shadow-sm transition-all cursor-pointer transform hover:scale-105 active:scale-95"
            >
              {t.nav.bookFreeTrial}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => onOpenFreeTrial()}
              className="px-2.5 py-1.5 bg-[#facc15] hover:bg-[#eab308] text-[#13241d] font-bold text-xs rounded-lg shadow-sm"
            >
              {isArabic ? 'تجربة مجانية' : isUrdu ? 'مفت ٹرائل' : 'Free Trial'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#facc15] hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#facc15]" /> : <Menu className="w-6 h-6 text-[#facc15]" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2.5 pt-3 border-t border-[#0a523f] space-y-1">
            <div className="pb-2">
              <LanguageSwitcher variant="drawer" />
            </div>

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="block w-full text-left rtl:text-right px-3 py-2 text-sm font-medium text-[#e8f5e9] hover:text-[#facc15] hover:bg-white/5 rounded-md cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdminLogin();
                }}
                className="w-full py-2.5 bg-[#04241b] hover:bg-[#074735] text-[#facc15] border border-[#facc15]/50 font-bold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-[#facc15]" />
                <span>Admin Login</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFreeTrial();
                }}
                className="w-full py-2.5 bg-[#facc15] text-[#13241d] font-bold text-xs rounded-xl text-center shadow cursor-pointer uppercase tracking-wider"
              >
                {t.nav.bookFreeTrial}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
