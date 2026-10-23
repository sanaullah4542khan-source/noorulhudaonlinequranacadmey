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
    { id: 'pricing', label: t.nav.pricing },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'contact', label: t.nav.contact || 'Contact' }
  ];

  const handleLinkClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* 1. Top Bar in Deep Forest Green */}
      <div className="bg-[#022C22] text-white border-b border-[#065F46] text-xs py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Left contact items */}
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <a
              href={`tel:${SAFIR_CONTACT.cleanPhone}`}
              className="flex items-center gap-1.5 font-medium text-white hover:text-[#D4AF37] transition-colors truncate"
              dir="ltr"
            >
              <span className="text-sm select-none">🇵🇰</span>
              <span className="font-semibold text-[11px] sm:text-xs text-white truncate">
                {SAFIR_CONTACT.phone}
              </span>
            </a>

            <a
              href={`mailto:${SAFIR_CONTACT.email}`}
              className="hidden md:flex items-center gap-1.5 text-[11px] sm:text-xs text-white/90 hover:text-[#D4AF37] transition-colors truncate"
              dir="ltr"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
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
              className="flex bg-[#064E3B] hover:bg-[#065F46] text-[#D4AF37] hover:text-white border border-[#D4AF37]/50 font-medium px-2 py-1 sm:px-3 sm:py-1 rounded-md text-[10.5px] sm:text-xs tracking-wide transition-all items-center gap-1.5 shadow-sm cursor-pointer"
              title="Academy Administrator Access"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
              <span>Admin Login</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar in Primary Dark Emerald Green */}
      <nav className="bg-[#064E3B] border-b border-[#022C22] py-2.5 sm:py-3.5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Logo Brand */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center text-left rtl:text-right focus:outline-none min-w-0"
            aria-label="Noor Ul Huda Online Quran Academy Home"
          >
            <SafirLogo variant="dark" size="md" />
          </button>

          {/* Desktop Navigation Links: Clean White with Gold Hover */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-white hover:text-[#D4AF37] hover:bg-white/5 rounded-md transition-all cursor-pointer relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-center rounded-full" />
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenFreeTrial()}
              className="px-4 py-2 bg-[#D4AF37] hover:bg-[#b89728] text-[#17211D] font-bold text-xs rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:scale-[1.02] active:scale-95"
            >
              {t.nav.bookFreeTrial}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => onOpenFreeTrial()}
              className="px-3 py-1.5 bg-[#D4AF37] hover:bg-[#b89728] text-[#17211D] font-bold text-xs rounded-lg shadow-sm"
            >
              {isArabic ? 'تجربة مجانية' : isUrdu ? 'مفت ٹرائل' : 'Free Trial'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:text-[#D4AF37] hover:bg-white/10 focus:outline-none border border-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D4AF37]" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#065F46] bg-[#022C22] p-4 rounded-2xl shadow-xl space-y-2 animate-fade-in">
            <div className="pb-2 border-b border-[#065F46]">
              <LanguageSwitcher variant="drawer" />
            </div>

            <div className="py-1 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="block w-full text-left rtl:text-right px-3 py-2 text-sm font-medium text-white hover:text-[#D4AF37] hover:bg-white/5 rounded-lg cursor-pointer transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-[#065F46] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdminLogin();
                }}
                className="w-full py-2.5 bg-[#064E3B] hover:bg-[#065F46] text-[#D4AF37] border border-[#D4AF37]/50 font-bold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Admin Login</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFreeTrial();
                }}
                className="w-full py-2.5 bg-[#D4AF37] hover:bg-[#b89728] text-[#17211D] font-bold text-xs rounded-xl text-center shadow-md cursor-pointer uppercase tracking-wider transition-all"
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
