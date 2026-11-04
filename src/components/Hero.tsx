import React from 'react';
import { Sparkles, ShieldCheck, Clock, Users, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import heroImage from '../assets/images/quran_learning_hero_1789130213689.jpg';

interface HeroProps {
  onOpenFreeTrial: () => void;
  onExploreCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenFreeTrial, onExploreCourses }) => {
  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#064232] via-[#084c3b] to-[#042f24] text-white overflow-hidden"
    >
      {/* Subtle Islamic Geometric Pattern Overlay */}
      <div className="absolute inset-0 bg-islamic-dark-pattern opacity-60 pointer-events-none" />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#c69b32]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full bg-[#0d6e53]/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Subtle Credibility Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#c69b32]/30 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-[#e6c564]" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-[#f4e8c7]">
                Online Quran & Islamic Learning Academy
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-headline"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.15] tracking-tight text-white mb-6"
            >
              A Clearer Path to <br className="hidden sm:inline" />
              <span className="gold-gradient-text font-serif italic">Quran Learning</span>
            </h1>

            {/* Supporting Subtext */}
            <p
              id="hero-subtext"
              className="text-base sm:text-lg md:text-xl text-[#d7e5df] font-normal leading-relaxed max-w-2xl mb-8"
            >
              Learn the Quran and essential Islamic knowledge through a learning path designed around your level, goals, and needs.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                id="hero-cta-trial"
                onClick={onOpenFreeTrial}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[#064232] bg-gradient-to-r from-[#e6c564] via-[#d5aa44] to-[#c69b32] hover:brightness-105 active:scale-[0.98] shadow-lg shadow-[#04241b]/50 transition-all text-base group"
              >
                <span>Start Your Free Trial</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-cta-explore"
                onClick={onExploreCourses}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-[#f4e8c7] bg-white/5 hover:bg-white/10 border border-[#c69b32]/40 backdrop-blur-sm transition-all text-base"
              >
                <span>Explore Courses</span>
                <BookOpen className="w-4 h-4 text-[#d5aa44]" />
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-100">
                <ShieldCheck className="w-4 h-4 text-[#e6c564] flex-shrink-0" />
                <span>Male & Female Teachers</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-100">
                <Users className="w-4 h-4 text-[#e6c564] flex-shrink-0" />
                <span>1-on-1 Live Classes</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-100">
                <Clock className="w-4 h-4 text-[#e6c564] flex-shrink-0" />
                <span>24/7 Flexible Hours</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-[#e6c564] flex-shrink-0" />
                <span>Personalized Path</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Atmosphere */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Decorative Islamic Border Frame */}
              <div className="relative p-2.5 rounded-3xl bg-gradient-to-b from-[#c69b32]/40 via-white/10 to-[#c69b32]/20 shadow-2xl backdrop-blur-md">
                <div className="overflow-hidden rounded-2xl relative aspect-[4/3] sm:aspect-[16/11] bg-[#04241b]">
                  <img
                    src={heroImage}
                    alt="Holy Quran on wooden rehal stand with interactive tablet learning setup"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle inner gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#064232]/80 via-transparent to-black/10" />

                  {/* Visual Tag Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#064232]/90 backdrop-blur-md border border-[#c69b32]/40 text-[11px] font-medium text-[#f4e8c7]">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
                    Live One-to-One Classroom
                  </div>

                  {/* Floating Bottom Card Over Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#064232]/90 backdrop-blur-md border border-white/15 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-[#d5aa44] font-medium tracking-wide">
                          Student-Centered Pedagogy
                        </div>
                        <div className="text-sm font-serif font-semibold text-white">
                          Tajweed Precision & Patient Mentorship
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-emerald-100 font-mono">
                          100% Private
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative subtle backdrop ornament */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 border border-[#c69b32]/30 rounded-3xl -z-10 pointer-events-none hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
