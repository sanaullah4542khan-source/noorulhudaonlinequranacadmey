import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { SafirLogo } from './SafirLogo';
import { SAFIR_CONTACT, getSafirWhatsAppUrl } from '../data/safirData';
import { useLanguage } from '../context/LanguageContext';

interface SafirFooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenStudentDashboard?: () => void;
  onOpenSystemModal?: () => void;
  onOpenAIAssistant?: () => void;
  onOpenLearningPath?: () => void;
}

export const SafirFooter: React.FC<SafirFooterProps> = ({
  onNavigateSection,
  onOpenStudentDashboard,
  onOpenSystemModal,
  onOpenAIAssistant,
  onOpenLearningPath
}) => {
  const { t, isRtl, isArabic, isUrdu } = useLanguage();

  return (
    <footer className="bg-[#064232] text-white pt-10 sm:pt-14 pb-8 sm:pb-10 border-t border-[#0a523f]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12 text-left rtl:text-right">
          {/* Col 1: Logo & About Tagline */}
          <div className="sm:col-span-2">
            <div className="mb-3 sm:mb-4">
              <SafirLogo variant="light" size="lg" />
            </div>
            <p className="font-body font-normal text-xs sm:text-sm text-[#a7d7c5] max-w-sm mb-4 sm:mb-5 leading-relaxed">
              {t.footer.aboutText}
            </p>

            {/* Global Classroom Platform Badge */}
            {onOpenSystemModal && (
              <button
                onClick={onOpenSystemModal}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#04241b] border border-[#facc15]/40 text-[#facc15] hover:bg-[#073628] text-xs font-nav font-medium mb-4 sm:mb-5 transition-all shadow-sm cursor-pointer group"
                title={isArabic ? 'مواصفات الفصول الافتراضية عالية الجودة' : isUrdu ? 'کلاس روم سسٹم کی تفصیلات' : 'View Classroom Platform Performance & Specs'}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="group-hover:underline">
                  {isArabic
                    ? '⚡ منصة الفصول التفاعلية • 99.9% جاهزية'
                    : isUrdu
                    ? '⚡ لائیو انٹرایکٹو کلاس روم • 99.9% دستیابی'
                    : '⚡ Global Classroom Platform • 99.9% Uptime'}
                </span>
              </button>
            )}

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href={SAFIR_CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0a523f] text-[#facc15] hover:bg-[#facc15] hover:text-[#064232] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SAFIR_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0a523f] text-[#facc15] hover:bg-[#facc15] hover:text-[#064232] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SAFIR_CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0a523f] text-[#facc15] hover:bg-[#facc15] hover:text-[#064232] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={getSafirWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0a523f] text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider text-[#facc15] mb-3 sm:mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-[#e8f5e9] font-nav font-medium">
              <li>
                <button
                  onClick={() => onNavigateSection('three-steps')}
                  className="hover:text-[#facc15] transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('about-us')}
                  className="hover:text-[#facc15] transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('courses')}
                  className="hover:text-[#facc15] transition-colors cursor-pointer"
                >
                  {t.nav.courses}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('pricing')}
                  className="hover:text-[#facc15] transition-colors cursor-pointer"
                >
                  {t.nav.pricing}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('payment-methods')}
                  className="hover:text-[#facc15] transition-colors cursor-pointer"
                >
                  {t.nav.payment}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('testimonials')}
                  className="hover:text-[#facc15] transition-colors cursor-pointer"
                >
                  {t.nav.testimonials}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-[#facc15] transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
              {onOpenAIAssistant && (
                <li>
                  <button
                    onClick={onOpenAIAssistant}
                    className="text-[#facc15] hover:underline font-nav font-medium flex items-center gap-1.5 transition-colors cursor-pointer mt-1"
                  >
                    <span>{isArabic ? '✨ المعلم القرآني الذكي' : isUrdu ? '✨ اے آئی قران ٹیوٹر' : '✨ AI Quran Learning Tutor'}</span>
                  </button>
                </li>
              )}
              {onOpenLearningPath && (
                <li>
                  <button
                    onClick={onOpenLearningPath}
                    className="text-[#a7d7c5] hover:text-[#facc15] font-nav font-medium flex items-center gap-1.5 transition-colors cursor-pointer mt-0.5"
                  >
                    <span>{isArabic ? '🎯 تقييم المسار التعليمي المخصص' : isUrdu ? '🎯 ذاتی لرننگ پاتھ کوئز' : 'Personalized Learning Path'}</span>
                  </button>
                </li>
              )}
              {onOpenStudentDashboard && (
                <li>
                  <button
                    onClick={onOpenStudentDashboard}
                    className="text-[#facc15] hover:underline font-nav font-medium flex items-center gap-1.5 transition-colors cursor-pointer mt-1"
                  >
                    <span>{isArabic ? '🎓 بوابة الطلاب والمعلمين' : isUrdu ? '🎓 طلباء و اساتذہ پورٹل' : 'Student & Parent Portals'}</span>
                    <span className="text-[9.5px] px-1.5 py-0.5 rounded bg-[#facc15] text-[#064232] font-semibold">LOGIN</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h4 className="text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider text-[#facc15] mb-3 sm:mb-4">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#e8f5e9]">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 text-[#facc15] flex-shrink-0 mt-0.5" />
                <span className="font-body font-normal text-xs sm:text-sm">{SAFIR_CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 text-[#facc15] flex-shrink-0" />
                <a
                  href={`tel:${SAFIR_CONTACT.cleanPhone}`}
                  className="hover:text-[#facc15] font-nav font-medium text-xs sm:text-sm transition-colors"
                  dir="ltr"
                >
                  {SAFIR_CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="w-4 h-4 text-[#facc15] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col min-w-0">
                  <a
                    href={`mailto:${SAFIR_CONTACT.email}`}
                    className="hover:text-[#facc15] font-nav font-medium text-xs sm:text-sm transition-colors break-all"
                    dir="ltr"
                  >
                    {SAFIR_CONTACT.email}
                  </a>
                  {SAFIR_CONTACT.secondaryEmail && (
                    <a
                      href={`mailto:${SAFIR_CONTACT.secondaryEmail}`}
                      className="hover:text-[#facc15] font-nav font-normal text-[11px] text-[#a7d7c5] transition-colors break-all"
                      dir="ltr"
                    >
                      {SAFIR_CONTACT.secondaryEmail}
                    </a>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-[#0a523f] flex flex-col sm:flex-row items-center justify-center text-center">
          <p className="text-[11px] sm:text-xs text-[#a7d7c5] font-body font-normal">
            &copy; {new Date().getFullYear()} Noor Ul Huda Online Quran Academy. {t.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
};
