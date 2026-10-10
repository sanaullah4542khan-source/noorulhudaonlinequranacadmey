import React from 'react';
import { NavigationTab } from '../types';
import { BookOpen, MessageCircle, Phone, Heart, ArrowUp } from 'lucide-react';
import { SafirLogo } from './SafirLogo';

interface FooterProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenFreeTrial: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenFreeTrial }) => {
  const phoneNumber = '+923130958451';
  const displayPhone = '+92 313 0958451';
  const academyWhatsAppUrl = `https://wa.me/923130958451?text=${encodeURIComponent(
    'Assalamu Alaikum! I would like to inquire about Noor Ul Huda Online Quran Academy.'
  )}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: NavigationTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'courses', label: 'Courses' },
    { id: 'fees', label: 'Fees & Tuition' },
    { id: 'library', label: 'Islamic Library' },
    { id: 'teachers', label: 'Teachers' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer id="main-footer" className="bg-[#04241b] text-white border-t border-[#c69b32]/20 relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-islamic-dark-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <SafirLogo variant="light" size="md" />
            </div>

            <p className="text-sm text-emerald-100/80 leading-relaxed max-w-sm">
              A personalized path to Quran and Islamic learning.
            </p>

            <p className="text-xs text-emerald-100/60 leading-relaxed max-w-sm">
              Providing sincere, one-to-one mentorship with qualified male and female teachers for children, youth, adults, and new Muslims worldwide.
            </p>

            <div className="pt-2">
              <a
                id="footer-whatsapp-link"
                href={academyWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-xs font-semibold text-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: {displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Col */}
          <div className="lg:col-span-4">
            <h3 className="font-serif text-base font-bold text-white mb-4 tracking-wide">
              Academy Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`footer-nav-${link.id}`}
                  onClick={() => {
                    onSelectTab(link.id);
                    scrollToTop();
                  }}
                  className="text-left text-emerald-100/70 hover:text-[#f4e8c7] py-1.5 transition-colors focus:outline-none"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions & Contact Col */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-base font-bold text-white mb-4 tracking-wide">
              Direct Inquiries
            </h3>
            <p className="text-xs text-emerald-100/70 leading-relaxed">
              Have questions about course placement or teacher availability? Talk directly with an advisor.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-100">
                <Phone className="w-3.5 h-3.5 text-[#d5aa44]" />
                <a href={`tel:${phoneNumber}`} className="hover:underline">
                  {displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-emerald-100">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <a href={academyWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <button
              onClick={onOpenFreeTrial}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#064232] bg-gradient-to-r from-[#e6c564] to-[#c69b32] hover:brightness-105 active:scale-95 transition-all text-center block shadow-md"
            >
              Book a Free Trial Session
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/60">
          <div>
            © {new Date().getFullYear()} Noor Ul Huda Online Quran Academy. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-arabic text-sm text-[#d5aa44]">
              رَّبِّ زِدْنِي عِلْمًا — My Lord, increase me in knowledge.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-emerald-100 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
