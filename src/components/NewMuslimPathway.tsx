import React from 'react';
import { Heart, Compass, CheckCircle2, BookOpen, Shield, MessageCircle, ArrowRight } from 'lucide-react';
import newMuslimImage from '../assets/images/new_muslim_journey_1789130252096.jpg';

interface NewMuslimPathwayProps {
  onOpenTrial: () => void;
}

export const NewMuslimPathway: React.FC<NewMuslimPathwayProps> = ({ onOpenTrial }) => {
  const steps = [
    {
      step: 'Step 1',
      title: 'Gentle Arabic Alphabet & Sounds',
      desc: 'Learn the letters and pronunciation from ground zero without overwhelm, using simple phonetics and english transliteration.'
    },
    {
      step: 'Step 2',
      title: 'Practical Salah (Prayer) Masterclass',
      desc: 'Understand the postures (Ruku, Sujood), step-by-step Wudu (ablution), and recite the core prayers with transliteration and translation.'
    },
    {
      step: 'Step 3',
      title: 'Daily Duas & Spiritual Shield',
      desc: 'Memorize essential everyday supplications: before eating, entering home, waking up, seeking peace, and morning/evening protection.'
    },
    {
      step: 'Step 4',
      title: 'Islamic Beliefs & Everyday Guidance',
      desc: 'Grounded understanding of Tawhid (Oneness of God), Prophethood, the Quran, Halal principles, and respectful navigation of family life.'
    }
  ];

  const academyWhatsAppUrl = 'https://wa.me/923130958451?text=' + encodeURIComponent('Assalamu Alaikum, I am interested in the New Muslim Guidance & Foundation program at Noor Ul Huda Academy.');

  return (
    <section id="new-muslim-guidance" className="py-20 lg:py-28 bg-[#f5f4ed] relative overflow-hidden">
      {/* Subtle background ornament */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c69b32]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Visual Asset & Reassurance Badge */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Outer Framed Card */}
              <div className="p-3 rounded-3xl bg-white shadow-xl border border-[#e5e3d7]">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#04241b]">
                  <img
                    src={newMuslimImage}
                    alt="Welcoming Islamic study setting with Quran translation, phonetics notebook and warm illumination"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase tracking-wider text-[#e6c564] font-semibold block">
                      Dedicated One-on-One Mentorship
                    </span>
                    <span className="text-sm font-serif font-bold">
                      A Patient, Non-Judgmental Space
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-[#faf9f5] rounded-xl mt-3 border border-[#f0eee4] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#064232]/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-[#064232]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#064232]">Sisters & Brothers Mentors</div>
                      <div className="text-[11px] text-[#4e655c]">Male with Male, Female with Female</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#c69b32] bg-[#c69b32]/10 px-2.5 py-1 rounded-md">
                    100% Free Trial
                  </span>
                </div>
              </div>

              {/* Decorative side accent */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-2 border-[#c69b32]/40 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Right Column: Narrative & Detailed Roadmap */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c69b32]/15 border border-[#c69b32]/30 mb-4">
              <Compass className="w-4 h-4 text-[#997217]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#795a12]">
                Special Dedicated Pathway
              </span>
            </div>

            <h2
              id="new-muslim-headline"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#064232] tracking-tight mb-5"
            >
              New Muslim Guidance & <br />
              <span className="text-[#c69b32] font-serif italic">Step-by-Step Foundations</span>
            </h2>

            <p className="text-base sm:text-lg text-[#4e655c] leading-relaxed mb-6">
              Embracing Islam is a blessed journey of the heart. You don’t have to know everything on day one. At Noor Ul Huda Academy, new Muslims receive patient, compassionate one-on-one mentorship that meets you exactly where you are.
            </p>

            {/* Step-by-Step Roadmap Cards */}
            <div className="space-y-3.5 mb-8">
              {steps.map((s, idx) => (
                <div
                  key={s.step}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-[#e5e3d7] shadow-sm flex items-start gap-4 hover:border-[#c69b32]/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#064232] text-[#f4e8c7] font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#064232] mb-1">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4e655c] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reassurance Callouts & CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="new-muslim-trial-btn"
                onClick={onOpenTrial}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#064232] bg-gradient-to-r from-[#e6c564] to-[#c69b32] hover:brightness-105 active:scale-95 shadow-md text-sm transition-all"
              >
                <span>Book a Gentle Free Foundation Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="new-muslim-whatsapp-btn"
                href={academyWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-[#064232] bg-white border border-[#e5e3d7] hover:bg-[#faf9f5] text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Ask a Mentor Privately on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
