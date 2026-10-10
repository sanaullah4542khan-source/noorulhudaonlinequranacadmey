import React from 'react';
import { 
  HeartHandshake, 
  GraduationCap, 
  Users, 
  Calendar, 
  FileCheck2, 
  Sparkles, 
  BookOpen, 
  ShieldCheck 
} from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPillars = [
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#c69b32]" />,
      title: 'Student-Centered Learning',
      desc: 'Our curriculum adapts to your learning pace and rhythm, rather than forcing you to conform to an arbitrary class schedule.'
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-[#c69b32]" />,
      title: 'Qualified Teachers',
      desc: 'Instructors with deep theoretical knowledge of Tajweed and practical experience guiding non-Arabic speakers.'
    },
    {
      icon: <Users className="w-5 h-5 text-[#c69b32]" />,
      title: 'One-to-One Classes',
      desc: 'Private direct mentorship with zero peer pressure. Every minute of class time is dedicated solely to your recitation.'
    },
    {
      icon: <Calendar className="w-5 h-5 text-[#c69b32]" />,
      title: 'Flexible Scheduling',
      desc: 'Classes offered across morning, afternoon, evening, and weekend slots with easy rescheduling options when life gets busy.'
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-[#c69b32]" />,
      title: 'Personalized Learning Plans',
      desc: 'Clear, custom-built weekly roadmaps aligned with your starting level, memory capacity, and personal aspirations.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#c69b32]" />,
      title: 'Progress-Focused Teaching',
      desc: 'Systematic reviews and retention drills (Sabaq, Sabqi, and Manzil) ensure what you learn remains locked in your heart.'
    },
    {
      icon: <BookOpen className="w-5 h-5 text-[#c69b32]" />,
      title: 'Quran + Islamic Studies',
      desc: 'A complete holistic education covering recitation, Tajweed, Duas, Hadith, Salah, and prophetic character building.'
    }
  ];

  return (
    <section id="trust" className="py-20 lg:py-28 bg-[#faf9f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064232]/10 border border-[#064232]/20 mb-4">
            <ShieldCheck className="w-4 h-4 text-[#064232]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#064232]">
              Our Foundation of Trust
            </span>
          </div>

          <h2
            id="trust-headline"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#064232] tracking-tight mb-5"
          >
            Built on Integrity, <br className="hidden sm:inline" />
            <span className="text-[#c69b32] font-serif italic">Patience & Genuine Care</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4e655c] leading-relaxed">
            At Noor Ul Huda, we view teaching the Holy Quran as a sacred trust (Amanah). We do not rely on inflated claims or artificial gimmicks; our standard is rooted in genuine educational craftsmanship and sincere dedication to every student.
          </p>
        </div>

        {/* 7 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPillars.map((p, idx) => (
            <div
              key={p.title}
              className={`bg-white rounded-3xl p-6 sm:p-7 border border-[#e5e3d7] shadow-sm hover:shadow-md transition-all ${
                idx === trustPillars.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-11 h-11 rounded-2xl bg-[#064232]/10 flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#064232] mb-2">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4e655c] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
