import React, { useState } from 'react';
import { 
  Target, 
  Calendar, 
  Layers, 
  UserCheck, 
  Sliders, 
  Brain, 
  HeartHandshake, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Compass
} from 'lucide-react';

interface DifferentiationProps {
  onOpenTrial: () => void;
}

export const Differentiation: React.FC<DifferentiationProps> = ({ onOpenTrial }) => {
  // Interactive student scenario selector to showcase real personalization
  const [selectedProfileIndex, setSelectedProfileIndex] = useState(0);

  const studentProfiles = [
    {
      id: 'child-beginner',
      badge: 'Young Learner (Age 6-9)',
      title: 'Zainab, Age 7 — Starting Noorani Qaida',
      level: 'Absolute Beginner',
      goals: 'Master Arabic alphabet sounds, join letters, recite short Surahs for prayer',
      schedule: '3 days/week, 30 mins after school',
      teacherAssigned: 'Female Ustadhah specializing in early childhood patience & positive encouragement',
      customPlan: 'Visual phonetic games, letter recognition flashcards, 5 mins of daily dua repetition, praise-based milestone certificates.',
      resultOutcomes: 'Smooth transition to Juz Amma within 5 months without stress or fatigue.'
    },
    {
      id: 'adult-tajweed',
      badge: 'Adult Professional',
      title: 'Tariq, Age 34 — Tajweed & Pronunciation Refinement',
      level: 'Can read, but unsure of exact rules',
      goals: 'Correct deep throat letters (Haa, Ayn, Ghayn), master Ikhfa/Idgham rules, gain Khushoo',
      schedule: '2 days/week, 45 mins evening after work',
      teacherAssigned: 'Senior Qari with deep classical background and analytical teaching style',
      customPlan: 'Acoustic waveform breakdowns, anatomical diagrams of Makharij, direct Surah Al-Mulk recitation feedback, audio recordings.',
      resultOutcomes: 'Reciting with melodic confidence, precise stopping rules, and deep inner peace.'
    },
    {
      id: 'sister-hifz',
      badge: 'Youth Hifz Pathway',
      title: 'Maryam, Age 14 — Structured Quran Memorization',
      level: 'Fluent Reciter with solid Tajweed',
      goals: 'Memorize Surah Al-Baqarah and continue Juz-by-Juz with long-term retention',
      schedule: '4 days/week, 45 mins early morning',
      teacherAssigned: 'Female Hafizah with structured retention discipline (Sabaq, Sabqi, Manzil)',
      customPlan: 'Quarter-page daily Sabaq, 10-page weekly rolling revision, Mutashabihat (similar verse) tracking sheets.',
      resultOutcomes: 'Secure memorization that does not fade, tested weekly with zero gaps.'
    },
    {
      id: 'new-muslim',
      badge: 'New Muslim Sister / Brother',
      title: 'David (Dawud), Age 28 — Foundation & Salah Practice',
      level: 'Recent Revert / Starting From Zero',
      goals: 'Learn to pray 5 daily Salah with correct wording, understand meanings, read first Arabic letters',
      schedule: '2 days/week, 45 mins flexible weekend/evening',
      teacherAssigned: 'Compassionate mentor who understands the reversion journey and questions',
      customPlan: 'English transliteration audio guides, step-by-step physical Salah postures, gentle letter recognition, open Q&A.',
      resultOutcomes: 'Confidence standing in communal prayer, feeling deeply connected and welcomed.'
    }
  ];

  const currentProfile = studentProfiles[selectedProfileIndex];

  const processSteps = [
    {
      step: '01',
      tag: 'ASSESS',
      title: 'Diagnostic Evaluation',
      desc: 'We conduct a free 1-on-1 assessment examining phonetic articulation, current reading pace, memory capacity, and personal aspirations.'
    },
    {
      step: '02',
      tag: 'MATCH',
      title: 'Teacher Pairing',
      desc: 'We pair the student with a qualified male or female teacher whose teaching temperament, pace, and expertise align with the student.'
    },
    {
      step: '03',
      tag: 'PLAN',
      title: 'Custom Syllabus',
      desc: 'We design a personalized week-by-week learning roadmap adjusted to the student’s age, school/workload, and target milestones.'
    },
    {
      step: '04',
      tag: 'LEARN',
      title: 'Live 1-on-1 Classes',
      desc: 'Focused private sessions with real-time feedback, interactive digital Quran display, screen annotations, and immediate correction.'
    },
    {
      step: '05',
      tag: 'REVIEW',
      title: 'Systematic Tracking',
      desc: 'Continuous retention drills (Sabqi & Manzil) and monthly evaluations prevent forgetting and ensure foundational mastery.'
    },
    {
      step: '06',
      tag: 'IMPROVE',
      title: 'Dynamic Adaptation',
      desc: 'If a student struggles with a specific rule or progresses faster than expected, we dynamically recalibrate the roadmap in real time.'
    }
  ];

  const considerationFactors = [
    {
      icon: <Target className="w-5 h-5 text-[#c69b32]" />,
      title: 'Current Level',
      desc: 'From learning the very first Arabic letter to advanced Qira’at recitation, no student is forced into a one-size-fits-all lesson.'
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#c69b32]" />,
      title: 'Age & Maturity',
      desc: 'Children require playful patience and gamified encouragement; adults require structured analytical explanations and scheduling dignity.'
    },
    {
      icon: <Compass className="w-5 h-5 text-[#c69b32]" />,
      title: 'Personal Goals',
      desc: 'Whether your objective is fluent daily reading, full Hifz, understanding Salah, or Tajweed mastery, your curriculum reflects your destination.'
    },
    {
      icon: <Sliders className="w-5 h-5 text-[#c69b32]" />,
      title: 'Tajweed Needs',
      desc: 'Individual focus on specific Makharij hurdles (e.g., throat letters or nasalization) without wasting time on what you already know.'
    },
    {
      icon: <Brain className="w-5 h-5 text-[#c69b32]" />,
      title: 'Learning Difficulties',
      desc: 'Special pedagogical patience for students with dyslexia, speech hesitations, attention challenges, or language barriers.'
    },
    {
      icon: <Calendar className="w-5 h-5 text-[#c69b32]" />,
      title: 'Schedule & Timezone',
      desc: 'Classes planned around school, work shifts, and family routines across USA, UK, Europe, Australia, and Middle East time zones.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#c69b32]" />,
      title: 'Learning Preferences',
      desc: 'Choice of male or female teacher, visual aids, bilingual instruction (English/Urdu/Arabic), and preferred session duration.'
    }
  ];

  return (
    <section
      id="unique-differentiation"
      className="py-20 lg:py-28 bg-[#faf9f5] relative overflow-hidden"
    >
      {/* Subtle Islamic pattern background */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064232]/10 border border-[#064232]/20 mb-4">
            <Sparkles className="w-4 h-4 text-[#064232]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#064232]">
              Our Unique Educational Philosophy
            </span>
          </div>

          <h2
            id="differentiation-headline"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#064232] tracking-tight mb-6"
          >
            We don’t just assign a Quran teacher — <br className="hidden sm:inline" />
            <span className="text-[#c69b32] font-serif italic">we build a learning path</span> around every student.
          </h2>

          <p className="text-base sm:text-lg text-[#4e655c] leading-relaxed">
            Every learner carries a distinct background, schedule, and relationship with the Quran. Instead of rigid group classes where students feel either left behind or held back, our entire academy is structured around individualized student care.
          </p>
        </div>

        {/* Visual Process Flow: ASSESS -> MATCH -> PLAN -> LEARN -> REVIEW -> IMPROVE */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c69b32] block mb-1">
              Methodology in Action
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#064232]">
              The 6-Step Noor Ul Huda Learning Architecture
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {processSteps.map((p, idx) => (
              <div
                key={p.tag}
                className="bg-white rounded-2xl p-5 border border-[#e5e3d7] shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between group hover:border-[#c69b32]/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-emerald-800/60">
                      {p.step}
                    </span>
                    <span className="text-[11px] font-bold tracking-wider px-2 py-0.5 rounded-md bg-[#064232] text-[#f4e8c7]">
                      {p.tag}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#064232] mb-2 group-hover:text-[#0b513f]">
                    {p.title}
                  </h4>
                  <p className="text-xs text-[#4e655c] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-[#c69b32]">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* The 7 Personalization Pillars Considered */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#064232] mb-3">
              7 Key Dimensions We Evaluate for Every Student
            </h3>
            <p className="text-sm text-[#4e655c]">
              No two minds learn identically. We intentionally evaluate these factors to ensure high retention and spiritual warmth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {considerationFactors.map((factor, index) => (
              <div
                key={factor.title}
                className={`bg-white rounded-2xl p-6 border border-[#e5e3d7] shadow-sm hover:shadow-md transition-all ${
                  index === considerationFactors.length - 1 ? 'md:col-span-2 lg:col-span-3 xl:col-span-1' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#064232]/10 flex items-center justify-center mb-4">
                  {factor.icon}
                </div>
                <h4 className="font-serif text-lg font-bold text-[#064232] mb-2">
                  {factor.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#4e655c] leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Showcase: Real Learning Journey Simulation */}
        <div className="bg-gradient-to-br from-[#064232] to-[#03291f] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-[#c69b32]/30 relative overflow-hidden">
          <div className="relative z-10">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#f4e8c7] mb-3">
                <Layers className="w-3.5 h-3.5 text-[#d5aa44]" />
                Interactive Journey Simulation
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                See How We Tailor The Experience
              </h3>
              <p className="text-sm sm:text-base text-emerald-100/90">
                Select a student profile below to explore how our 6-step architecture constructs a uniquely tailored educational roadmap:
              </p>
            </div>

            {/* Profile Tab Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
              {studentProfiles.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProfileIndex(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedProfileIndex === idx
                      ? 'bg-gradient-to-r from-[#e6c564] to-[#c69b32] text-[#064232] shadow-md scale-[1.02]'
                      : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'
                  }`}
                >
                  {p.badge}
                </button>
              ))}
            </div>

            {/* Simulated Path Card */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#d5aa44] font-semibold">
                      Profile Case Study
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                      {currentProfile.title}
                    </h4>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-[#d5aa44] font-medium min-w-[90px]">Starting Level:</span>
                      <span className="text-emerald-100">{currentProfile.level}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#d5aa44] font-medium min-w-[90px]">Core Goals:</span>
                      <span className="text-emerald-100">{currentProfile.goals}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#d5aa44] font-medium min-w-[90px]">Schedule:</span>
                      <span className="text-emerald-100">{currentProfile.schedule}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-[#04241b]/80 rounded-xl p-5 border border-[#c69b32]/30 space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#d5aa44] font-semibold block mb-1">
                      Teacher Match & Methodology
                    </span>
                    <p className="text-sm text-white font-medium">
                      {currentProfile.teacherAssigned}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#d5aa44] font-semibold block mb-1">
                      Custom Curriculum & Tools
                    </span>
                    <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                      {currentProfile.customPlan}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-[#f4e8c7]">
                      <Check className="w-4 h-4 text-[#25D366]" />
                      <span>{currentProfile.resultOutcomes}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs sm:text-sm text-emerald-200">
                  Ready to discover what your personalized learning journey looks like?
                </span>
                <button
                  onClick={onOpenTrial}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-[#064232] bg-gradient-to-r from-[#e6c564] to-[#c69b32] hover:brightness-105 active:scale-95 text-xs sm:text-sm shadow-md"
                >
                  <span>Build My Free Learning Path</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
