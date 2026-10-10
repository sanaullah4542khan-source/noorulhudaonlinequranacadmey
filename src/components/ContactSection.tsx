import React from 'react';
import { MessageCircle, Phone, Calendar, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

interface ContactSectionProps {
  onOpenTrial: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenTrial }) => {
  const phoneNumber = '+923130958451';
  const displayPhone = '+92 313 0958451';
  const academyWhatsAppUrl = `https://wa.me/923130958451?text=${encodeURIComponent(
    'Assalamu Alaikum! I would like to get in touch with Noor Ul Huda Online Quran Academy to ask questions and schedule a class.'
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#faf9f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064232]/10 border border-[#064232]/20 mb-4">
            <MessageCircle className="w-4 h-4 text-[#064232]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#064232]">
              Get In Touch
            </span>
          </div>

          <h2
            id="contact-headline"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#064232] tracking-tight mb-5"
          >
            Noor Ul Huda <br className="hidden sm:inline" />
            <span className="text-[#c69b32] font-serif italic">Online Quran Academy</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4e655c] leading-relaxed">
            Reach out directly to our academic team to discuss your goals, inquire about teacher availability, or book your free trial session.
          </p>
        </div>

        {/* 3 Dedicated Contact Cards: WhatsApp, Phone, Free Trial */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {/* WhatsApp Card */}
          <div
            id="contact-card-whatsapp"
            className="bg-white rounded-3xl p-8 border border-[#e5e3d7] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group hover:border-[#25D366]/50"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-[#25D366]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#25D366] block mb-1">
                Fastest Response
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#064232] mb-2">
                WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-[#4e655c] leading-relaxed mb-4">
                Chat directly with our academic advisor. Send voice notes, ask questions, or coordinate class timings instantly.
              </p>
              <div className="p-3 rounded-xl bg-[#faf9f5] border border-[#f0eee4] font-mono text-sm font-semibold text-[#064232] mb-6">
                {displayPhone}
              </div>
            </div>

            <a
              id="cta-contact-whatsapp-link"
              href={academyWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <span>Contact Us on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Direct Phone Call / SMS Card */}
          <div
            id="contact-card-phone"
            className="bg-white rounded-3xl p-8 border border-[#e5e3d7] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group hover:border-[#064232]/50"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#064232]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-[#064232]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#064232] block mb-1">
                Direct Line
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#064232] mb-2">
                Direct Call
              </h3>
              <p className="text-xs sm:text-sm text-[#4e655c] leading-relaxed mb-4">
                Call our international telephone number directly to speak with an admissions coordinator regarding course programs.
              </p>
              <div className="p-3 rounded-xl bg-[#faf9f5] border border-[#f0eee4] font-mono text-sm font-semibold text-[#064232] mb-6">
                {displayPhone}
              </div>
            </div>

            <a
              id="cta-contact-phone-link"
              href={`tel:${phoneNumber}`}
              className="w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-[#064232] bg-[#faf9f5] hover:bg-[#f0eee4] border border-[#e5e3d7] flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-[#064232]" />
              <span>Call Us Directly</span>
            </a>
          </div>

          {/* Free Trial Class Card */}
          <div
            id="contact-card-trial"
            className="bg-white rounded-3xl p-8 border border-[#e5e3d7] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group hover:border-[#c69b32]/50"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#c69b32]/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-7 h-7 text-[#997217]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#c69b32] block mb-1">
                Zero Obligation
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#064232] mb-2">
                Free Trial
              </h3>
              <p className="text-xs sm:text-sm text-[#4e655c] leading-relaxed mb-4">
                Experience a complete 1-on-1 private lesson. Receive your reading diagnostic and customized learning path.
              </p>
              <div className="p-3 rounded-xl bg-[#faf9f5] border border-[#f0eee4] text-xs font-semibold text-[#064232] mb-6">
                30-Minute Live Assessment
              </div>
            </div>

            <button
              id="cta-contact-trial-btn"
              onClick={onOpenTrial}
              className="w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-[#064232] bg-gradient-to-r from-[#e6c564] to-[#c69b32] hover:brightness-105 active:scale-95 shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <span>Schedule Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Official Email & Privacy Notice */}
        <div className="max-w-xl mx-auto text-center space-y-2">
          <p className="text-xs sm:text-sm text-[#064232] font-medium leading-relaxed flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-[#064232]" />
            <span>Official Academy Email: <a href="mailto:noorulhudaacademy206@gmail.com" className="font-bold underline hover:text-[#095742]">noorulhudaacademy206@gmail.com</a></span>
          </p>
          <p className="text-xs text-[#4e655c] leading-relaxed flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#064232]" />
            <span>Your contact details are strictly kept private and used only for class scheduling.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
