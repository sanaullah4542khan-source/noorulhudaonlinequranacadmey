import React from 'react';
import { ArrowRight, ShieldCheck, Check, Sparkles, MessageCircle } from 'lucide-react';

interface FreeTrialCtaProps {
  onOpenTrial: () => void;
}

export const FreeTrialCta: React.FC<FreeTrialCtaProps> = ({ onOpenTrial }) => {
  const academyWhatsAppUrl = 'https://wa.me/923130958451?text=' + encodeURIComponent('Assalamu Alaikum, I would like to book a Free Trial Class at Noor Ul Huda Online Quran Academy.');

  return (
    <section id="free-trial-cta" className="py-20 lg:py-24 bg-[#064232] text-white relative overflow-hidden">
      {/* Background Subtle Star Lattice */}
      <div className="absolute inset-0 bg-islamic-dark-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#c69b32]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#0b513f]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#c69b32]/30 mb-6">
          <Sparkles className="w-4 h-4 text-[#e6c564]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#f4e8c7]">
            No Commitment Required
          </span>
        </div>

        <h2
          id="free-trial-cta-headline"
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5"
        >
          Start With a <span className="gold-gradient-text font-serif italic">Free Trial Class</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed mb-8">
          Discover the right learning path for you or your child before committing.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            id="free-trial-banner-btn"
            onClick={onOpenTrial}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-[#064232] bg-gradient-to-r from-[#e6c564] via-[#d5aa44] to-[#c69b32] hover:brightness-105 active:scale-95 shadow-xl text-base transition-all"
          >
            <span>Book Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            id="free-trial-whatsapp-direct"
            href={academyWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-medium text-[#f4e8c7] bg-white/5 hover:bg-white/10 border border-[#c69b32]/40 backdrop-blur-sm text-base transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Book on WhatsApp (+92 313 0958451)</span>
          </a>
        </div>

        {/* Reassuring Real Value Points (No fake urgency or fake countdown) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-3xl mx-auto text-xs sm:text-sm text-emerald-200">
          <div className="flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-[#25D366]" />
            <span>100% Free 30-Minute Session</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-[#25D366]" />
            <span>No Credit Card Required</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-[#25D366]" />
            <span>Male & Female Teachers Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};
