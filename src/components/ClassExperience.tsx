import React from 'react';
import { 
  Users, 
  Clock, 
  Sliders, 
  Home, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Laptop, 
  Headphones, 
  CalendarCheck 
} from 'lucide-react';

interface ClassExperienceProps {
  onOpenFreeTrial?: () => void;
}

export const ClassExperience: React.FC<ClassExperienceProps> = ({ onOpenFreeTrial }) => {
  const pillars = [
    {
      icon: <Users className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Live One-to-One Learning',
      desc: '100% undivided instructor attention. Every single vowel, hesitation, and breath pause is guided and refined in real time without crowd distractions.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Male & Female Qualified Teachers',
      desc: 'Cultural and religious comfort is strictly preserved. Sisters and young girls learn with female Ustadhahs, and brothers with male scholars.'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Flexible Global Timings',
      desc: 'Classes are available 24/7 across US, UK, Canada, Australia, and European time zones. Easily reschedule whenever illness or family events arise.'
    },
    {
      icon: <Sliders className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Personalized Learning Pace',
      desc: 'Fast learners are never held back by a classroom average; students who need extra time on difficult Makharij receive all the patient care they need.'
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Regular Progress Reviews',
      desc: 'Structured digital logs keep track of every verse completed, Tajweed milestones achieved, and next steps for both students and parents.'
    },
    {
      icon: <Home className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Learn From Home in Peace',
      desc: 'No stressful commutes or safety concerns. Students learn in the quiet sanctuary of their own home on laptop, desktop, tablet, or smartphone.'
    }
  ];

  return (
    <section id="class-experience" className="py-20 lg:py-28 bg-[#022C22] text-white relative overflow-hidden border-y border-[#065F46]">
      {/* Subtle background Islamic ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#064E3B]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064E3B] border border-[#D4AF37]/40 mb-4 shadow-sm">
            <Laptop className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              The Virtual Classroom
            </span>
          </div>

          <h2
            id="experience-headline"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5"
          >
            One-to-One Live Online <br className="hidden sm:inline" />
            <span className="text-[#D4AF37] font-serif italic">Quran Classes</span>
          </h2>

          <p className="text-base sm:text-lg text-[#F8F7F1]/85 leading-relaxed">
            Engineered for optimum student engagement, spiritual warmth, and technical clarity. Designed for children, teens, and adult learners of all backgrounds.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-[#064E3B] rounded-2xl p-7 border border-[#065F46] hover:border-[#D4AF37]/60 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#022C22] border border-[#D4AF37]/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {p.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed font-body">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Audience Breakdown: Children, Teens, Adults */}
        <div className="bg-[#064E3B] rounded-3xl p-8 sm:p-10 border border-[#065F46] shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
              Inclusive Education
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Suitable for Children, Teens, & Adults
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#022C22] border border-[#065F46]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-2">
                For Children (Ages 4 - 12)
              </span>
              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed mb-4">
                Patience-driven, interactive approach with screen annotations, gentle encouragement, and short focused sessions to foster lifelong love for the Quran.
              </p>
              <ul className="space-y-1.5 text-xs text-white">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Noorani Qaida & short Surahs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Daily Duas & basic manners</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#022C22] border border-[#065F46]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-2">
                For Teens & Youth (Ages 13 - 19)
              </span>
              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed mb-4">
                Engaging discussions connecting Quranic themes to modern challenges, peer pressure, identity, and moral resilience with youthful scholars.
              </p>
              <ul className="space-y-1.5 text-xs text-white">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Tajweed precision & Hifz options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Prophetic Seerah & moral answers</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#022C22] border border-[#065F46]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-2">
                For Adults & Professionals
              </span>
              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed mb-4">
                Flexible early morning or evening scheduling. Respectful, non-judgmental environment for beginners, Tajweed polishers, or Tafsir reflections.
              </p>
              <ul className="space-y-1.5 text-xs text-white">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Zero embarrassment policy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Flexible rescheduling around work</span>
                </li>
              </ul>
            </div>
          </div>

          {onOpenFreeTrial && (
            <div className="mt-8 text-center pt-4 border-t border-[#065F46]">
              <button
                onClick={onOpenFreeTrial}
                className="px-8 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#b89728] text-[#17211D] font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:scale-[1.02] active:scale-95"
              >
                Experience Live Classroom — Free Trial
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
