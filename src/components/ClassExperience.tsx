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

export const ClassExperience: React.FC = () => {
  const pillars = [
    {
      icon: <Users className="w-6 h-6 text-[#c69b32]" />,
      title: 'Live One-to-One Learning',
      desc: '100% undivided instructor attention. Every single vowel, hesitation, and breath pause is guided and refined in real time without crowd distractions.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#c69b32]" />,
      title: 'Male & Female Qualified Teachers',
      desc: 'Cultural and religious comfort is strictly preserved. Sisters and young girls learn with female Ustadhahs, and brothers with male scholars.'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#c69b32]" />,
      title: 'Flexible Global Timings',
      desc: 'Classes are available 24/7 across US, UK, Canada, Australia, and European time zones. Easily reschedule whenever illness or family events arise.'
    },
    {
      icon: <Sliders className="w-6 h-6 text-[#c69b32]" />,
      title: 'Personalized Learning Pace',
      desc: 'Fast learners are never held back by a classroom average; students who need extra time on difficult Makharij receive all the patient care they need.'
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-[#c69b32]" />,
      title: 'Regular Progress Reviews',
      desc: 'Structured digital logs keep track of every verse completed, Tajweed milestones achieved, and next steps for both students and parents.'
    },
    {
      icon: <Home className="w-6 h-6 text-[#c69b32]" />,
      title: 'Learn From Home in Peace',
      desc: 'No stressful commutes or safety concerns. Students learn in the quiet sanctuary of their own home on laptop, desktop, tablet, or smartphone.'
    }
  ];

  return (
    <section id="class-experience" className="py-20 lg:py-28 bg-[#faf9f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064232]/10 border border-[#064232]/20 mb-4">
            <Laptop className="w-4 h-4 text-[#064232]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#064232]">
              The Virtual Classroom
            </span>
          </div>

          <h2
            id="experience-headline"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#064232] tracking-tight mb-5"
          >
            One-to-One Live Online <br className="hidden sm:inline" />
            <span className="text-[#c69b32] font-serif italic">Quran Classes</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4e655c] leading-relaxed">
            Engineered for optimum student engagement, spiritual warmth, and technical clarity. Designed for children, teens, and adult learners of all backgrounds.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-3xl p-7 border border-[#e5e3d7] shadow-sm hover:shadow-md transition-all hover:border-[#c69b32]/40"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#064232]/10 flex items-center justify-center mb-5">
                {p.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#064232] mb-3">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4e655c] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Audience Breakdown: Children, Teens, Adults */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#e5e3d7] shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c69b32] block mb-1">
              Inclusive Education
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#064232]">
              Suitable for Children, Teens, & Adults
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#faf9f5] border border-[#f0eee4]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#064232] block mb-2">
                For Children (Ages 4 - 12)
              </span>
              <p className="text-xs sm:text-sm text-[#4e655c] leading-relaxed mb-4">
                Patience-driven, interactive approach with screen annotations, gentle encouragement, and short focused sessions to foster lifelong love for the Quran.
              </p>
              <ul className="space-y-1.5 text-xs text-[#13241d]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#064232]" />
                  <span>Noorani Qaida & short Surahs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#064232]" />
                  <span>Daily Duas & basic manners</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf9f5] border border-[#f0eee4]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#064232] block mb-2">
                For Teens & Youth (Ages 13 - 19)
              </span>
              <p className="text-xs sm:text-sm text-[#4e655c] leading-relaxed mb-4">
                Engaging discussions connecting Quranic themes to modern challenges, peer pressure, identity, and moral resilience with youthful scholars.
              </p>
              <ul className="space-y-1.5 text-xs text-[#13241d]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#064232]" />
                  <span>Tajweed precision & Hifz options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#064232]" />
                  <span>Prophetic Seerah & moral answers</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf9f5] border border-[#f0eee4]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#064232] block mb-2">
                For Adults & Professionals
              </span>
              <p className="text-xs sm:text-sm text-[#4e655c] leading-relaxed mb-4">
                Flexible early morning or evening scheduling. Respectful, non-judgmental environment for beginners, Tajweed polishers, or Tafsir reflections.
              </p>
              <ul className="space-y-1.5 text-xs text-[#13241d]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#064232]" />
                  <span>Zero embarrassment policy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#064232]" />
                  <span>Flexible rescheduling around work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
