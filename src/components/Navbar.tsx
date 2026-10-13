import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, GraduationCap, Zap, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { SafirLogo } from './SafirLogo';
import { TopBar } from './TopBar';
import { SAFIR_CONTACT, getSafirWhatsAppUrl } from '../data/safirData';
import { useLanguage } from '../context/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: any) => void;
  onOpenFreeTrial: (courseId?: string) => void;
  onOpenStudentDashboard?: () => void;
  onOpenSystemModal?: () => void;
  onOpenAIAssistant?: () => void;
  onOpenLearningPath?: () => void;
  onOpenAdminLogin?: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenFreeTrial,
  onOpenStudentDashboard,
  onOpenSystemModal,
  onOpenAIAssistant,
  onOpenLearningPath,
  onOpenAdminLogin,
  onScrollToSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, isRtl, isArabic, isUrdu } = useLanguage();

  const navLinks = [
    { id: 'three-steps', label: t.nav.home },
    { id: 'about-us', label: t.nav.about },
    { id: 'courses', label: t.nav.courses },
    { id: 'why-choose-us', label: t.nav.whyChooseUs },
    { id: 'teachers', label: t.nav.teachers },
    { id: 'pricing', label: t.nav.pricing },
    { id: 'payment-methods', label: t.nav.payment },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'contact', label: t.nav.contact }
  ];

  const handleLinkClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* 1. Very Top Green Bar with Flag, Phone, Socials, Student Portal, Admin Login and Yellow Trial Button */}
      <TopBar
        onOpenFreeTrial={() => onOpenFreeTrial()}
        onOpenStudentDashboard={onOpenStudentDashboard}
        onOpenSystemModal={onOpenSystemModal}
        onOpenAIAssistant={onOpenAIAssistant}
        onOpenAdminLogin={onOpenAdminLogin}
      />

      {/* 2. Main Navigation Bar */}
      <nav className="bg-[#064232] border-b border-[#0a523f] py-2 sm:py-3.5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Logo Brand with Golden Dome & Crescent */}
          <button
            onClick={() => handleLinkClick('three-steps')}
            className="flex items-center text-left rtl:text-right focus:outline-none min-w-0"
            aria-label="Noor Ul Huda Online Quran Academy Home"
          >
            <SafirLogo variant="light" size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="px-2.5 py-1.5 text-xs xl:text-sm font-nav font-medium text-[#e8f5e9] hover:text-[#facc15] hover:bg-white/5 rounded-md transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle variant="nav" />
            {onOpenAIAssistant && (
              <button
                onClick={onOpenAIAssistant}
                className="px-2.5 py-2 rounded-md bg-[#042d22] hover:bg-[#074735] text-[#facc15] hover:text-white border border-[#facc15]/30 font-nav font-medium text-xs shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                title="AI Quran Learning Assistant & New Muslim Guide"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
                <span>{isArabic ? 'المعلم الذكي' : isUrdu ? 'اے آئی ٹیوٹر' : 'AI Tutor'}</span>
              </button>
            )}
            {onOpenStudentDashboard && (
              <button
                id="navbar-student-dashboard-btn"
                onClick={onOpenStudentDashboard}
                className="px-3 py-2 rounded-md bg-[#042d22] hover:bg-[#074735] text-[#facc15] hover:text-white border border-[#facc15]/30 font-nav font-medium text-xs shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                title="Access Student, Parent & Teacher Portals"
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#facc15]" />
                <span>{isArabic ? 'البوابة' : isUrdu ? 'پورٹل' : 'Portals'}</span>
              </button>
            )}
            {onOpenAdminLogin && (
              <button
                id="navbar-admin-login-btn"
                onClick={onOpenAdminLogin}
                className="px-2.5 sm:px-3 py-2 rounded-md bg-[#042d22] hover:bg-[#074735] text-[#facc15] hover:text-white border border-[#facc15]/50 font-nav font-semibold text-xs shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                title="Authorized Academy Administrator Access"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#facc15] flex-shrink-0" />
                <span>Admin Login</span>
              </button>
            )}
            <button
              onClick={() => onOpenFreeTrial()}
              className="px-3.5 py-2 bg-[#facc15] hover:bg-[#eab308] text-[#13241d] font-nav font-semibold text-xs rounded-md shadow-sm transition-all cursor-pointer"
            >
              {t.nav.bookFreeTrial}
            </button>
          </div>

          {/* Mobile Right Controls: Admin + Trial Button + Hamburger */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">
            {onOpenAdminLogin && (
              <button
                id="navbar-mobile-admin-btn"
                onClick={onOpenAdminLogin}
                className="px-2 py-1.5 rounded-lg bg-[#042d22] text-[#facc15] hover:text-white border border-[#facc15]/50 font-nav text-xs font-semibold flex items-center gap-1 cursor-pointer active:scale-95 shadow-xs"
                title="Admin Login"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#facc15]" />
                <span className="hidden xs:inline">Admin</span>
              </button>
            )}
            {onOpenAIAssistant && (
              <button
                onClick={onOpenAIAssistant}
                className="p-1.5 rounded-lg bg-[#042d22] text-[#facc15] border border-[#facc15]/30"
                title="AI Tutor"
              >
                <Sparkles className="w-4 h-4 text-[#facc15]" />
              </button>
            )}
            <button
              onClick={() => onOpenFreeTrial()}
              className="px-2.5 sm:px-3 py-1.5 bg-[#facc15] hover:bg-[#eab308] text-[#13241d] font-nav font-semibold text-[11px] sm:text-xs rounded-lg shadow-sm transition-all active:scale-95"
            >
              {isArabic ? 'تجربة مجانية' : isUrdu ? 'ٹرائل' : 'Trial'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-[#facc15] hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#facc15]" />
              ) : (
                <div className="space-y-1 w-5 sm:w-6 flex flex-col justify-center">
                  <span className="block h-0.5 w-full bg-[#facc15] rounded-full"></span>
                  <span className="block h-0.5 w-full bg-[#facc15] rounded-full"></span>
                  <span className="block h-0.5 w-full bg-[#facc15] rounded-full"></span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2.5 pt-3 border-t border-[#0a523f] space-y-1 max-h-[75vh] overflow-y-auto">
            {/* Language Switcher in Mobile Drawer */}
            <div className="pb-2">
              <LanguageSwitcher variant="drawer" />
            </div>

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="block w-full text-left rtl:text-right px-3 py-2 text-sm font-nav font-medium text-[#e8f5e9] hover:text-[#facc15] hover:bg-white/5 rounded-md cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#0a523f] flex flex-col gap-2">
              <ThemeToggle variant="mobile" />
              {onOpenAIAssistant && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAIAssistant();
                  }}
                  className="w-full py-2.5 bg-[#042d22] text-[#facc15] border border-[#facc15]/30 font-nav font-medium text-xs rounded-md text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#facc15]" />
                  <span>{isArabic ? '✨ المساعد القرآني الذكي' : isUrdu ? '✨ اے آئی قران ٹیوٹر' : '✨ AI Quran Learning Assistant'}</span>
                </button>
              )}
              {onOpenLearningPath && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLearningPath();
                  }}
                  className="w-full py-2 bg-emerald-950/80 text-emerald-200 border border-emerald-700/50 font-nav font-medium text-xs rounded-md text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-[#c69b32]" />
                  <span>{isArabic ? '🎯 تقييم المسار التعليمي المخصص' : isUrdu ? '🎯 ذاتی لرننگ پاتھ کوئز' : '🎯 Personalized Learning Path Assessment'}</span>
                </button>
              )}
              {onOpenStudentDashboard && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenStudentDashboard();
                  }}
                  className="w-full py-2.5 bg-[#042d22] text-[#facc15] border border-[#facc15]/30 font-nav font-medium text-xs rounded-md text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4 text-[#facc15]" />
                  <span>{isArabic ? '🎓 بوابة الطلاب والمعلمين وأولياء الأمور' : isUrdu ? '🎓 طلباء و اساتذہ پورٹل' : '🎓 Student, Parent & Teacher Portals'}</span>
                </button>
              )}
              {onOpenAdminLogin && (
                <button
                  id="drawer-admin-login-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdminLogin();
                  }}
                  className="w-full py-2.5 bg-[#042d22] hover:bg-[#074735] text-[#facc15] border border-[#facc15]/50 font-nav font-bold text-xs rounded-xl text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <ShieldCheck className="w-4 h-4 text-[#facc15]" />
                  <span>{isArabic ? '🛡️ تسجيل دخول الإدارة' : isUrdu ? '🛡️ ایڈمن لاگ ان (محفوظ کنٹرول)' : '🛡️ Admin Login (Private Console)'}</span>
                </button>
              )}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFreeTrial();
                }}
                className="w-full py-2.5 bg-[#facc15] text-[#13241d] font-nav font-bold text-xs uppercase tracking-wider rounded-md text-center shadow cursor-pointer"
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
