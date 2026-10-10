import React from 'react';
import { 
  ClipboardCheck, 
  UserSquare, 
  Sparkles, 
  FileText, 
  MonitorPlay, 
  LineChart, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface HowItWorksProps {
  onOpenTrial: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenTrial }) => {
  const steps = [
    {
      num: '01',
      title: 'Assessment',
      subtitle: 'Free 30-Minute Diagnostic',
      desc: 'An experienced teacher listens to your current recitation, diagnoses phonetic articulation, and listens closely to your personal learning aspirations.',
      icon: <ClipboardCheck className="w-6 h-6 text-[#c69b32]" />
    },
    {
      num: '02',
      title: 'Student Profile',
      subtitle: 'Holistic Evaluation',
      desc: 'We document your exact availability across timezones, age considerations, learning pace preferences, and whether you prefer male or female faculty.',
      icon: <UserSquare className="w-6 h-6 text-[#c69b32]" />
    },
    {
      num: '03',
      title: 'Teacher Matching',
      subtitle: 'Dedicated 1-on-1 Faculty',
      desc: 'We match you with a certified instructor whose pedagogical style, language fluency, and schedule match your profile for maximum rapport.',
      icon: <Sparkles className="w-6 h-6 text-[#c69b32]" />
    },
    {
      num: '04',
      title: 'Personal Learning Plan',
      subtitle: 'Tailored Milestones',
      desc: 'You receive a clear, milestone-driven roadmap detailing weekly objectives, core Surahs or topics, and realistic timelines for mastery.',
      icon: <FileText className="w-6 h-6 text-[#c69b32]" />
    },
    {
      num: '05',
      title: 'Live Classes',
      subtitle: 'Interactive Screen Learning',
      desc: 'Attend interactive one-to-one video lessons from the comfort of home, utilizing digital Quran highlighters and real-time audio guidance.',
      icon: <MonitorPlay className="w-6 h-6 text-[#c69b32]" />
    },
    {
      num: '06',
      title: 'Progress Review',
      subtitle: 'Transparent Feedback',
      desc: 'Receive regular updates, lesson notes, and periodic retention checks so parents and students always know exactly where they stand.',
      icon: <LineChart className="w-6 h-6 text-[#c69b32]" />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#faf9f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064232]/10 border border-[#064232]/20 mb-4">
            <ShieldCheck className="w-4 h-4 text-[#064232]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#064232]">
              Transparent Process
            </span>
          </div>

          <h2
            id="how-it-works-headline"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#064232] tracking-tight mb-5"
          >
            How Your Learning Journey <br className="hidden sm:inline" />
            <span className="text-[#c69b32] font-serif italic">Unfolds Seamlessly</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4e655c] leading-relaxed">
            From your very first free trial to lifelong recitation confidence, our 6-step framework guarantees structure, transparency, and peace of mind.
          </p>
        </div>

        {/* 6 Steps Grid with Connecting Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="bg-white rounded-3xl p-7 border border-[#e5e3d7] shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between group hover:border-[#c69b32]/50"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#064232]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="font-mono text-3xl font-bold text-[#064232]/20 group-hover:text-[#c69b32] transition-colors">
                    {step.num}
                  </span>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-[#c69b32] block mb-1">
                  {step.subtitle}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#064232] mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4e655c] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f4f3eb] flex items-center justify-between text-xs text-[#064232] font-medium">
                <span>Phase {idx + 1} of 6</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c69b32]" />
              </div>
            </div>
          ))}
        </div>

        {/* Trial Callout Box */}
        <div className="bg-gradient-to-r from-[#064232] to-[#042f24] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Ready to take Step 1 today?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100">
              Your free assessment class takes just 30 minutes, requires no credit card, and gives you a complete picture of your recitation path.
            </p>
          </div>
          <button
            onClick={onOpenTrial}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-[#064232] bg-gradient-to-r from-[#e6c564] to-[#c69b32] hover:brightness-105 active:scale-95 shadow-lg text-sm transition-all whitespace-nowrap"
          >
            <span>Book Your Free Step 1 Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
