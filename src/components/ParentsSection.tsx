import React from 'react';
import { Heart, CheckCircle2, FileText, Bell, Eye, Target, ArrowRight } from 'lucide-react';
import parentChildImage from '../assets/images/parent_child_learning_1789130232076.jpg';

interface ParentsSectionProps {
  onOpenTrial: () => void;
}

export const ParentsSection: React.FC<ParentsSectionProps> = ({ onOpenTrial }) => {
  const parentPillars = [
    {
      icon: <Eye className="w-5 h-5 text-[#c69b32]" />,
      title: 'Individual Attention',
      desc: 'No getting lost in the crowd. Your child receives the mentor’s undivided attention for every minute of the lesson.'
    },
    {
      icon: <Heart className="w-5 h-5 text-[#c69b32]" />,
      title: 'Age-Appropriate Learning',
      desc: 'Gentle, positive reinforcement methods that build confidence and love for the Book of Allah, rather than fear or pressure.'
    },
    {
      icon: <FileText className="w-5 h-5 text-[#c69b32]" />,
      title: 'Progress Monitoring',
      desc: 'Every milestone—from letter recognition to full Surah fluency—is recorded systematically so you see tangible progress.'
    },
    {
      icon: <Bell className="w-5 h-5 text-[#c69b32]" />,
      title: 'Regular Parent Updates',
      desc: 'Receive direct WhatsApp or portal updates from the instructor detailing homework, accomplishments, and focus points.'
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#c69b32]" />,
      title: 'Teacher Feedback',
      desc: 'Direct open line to talk with the teacher and academic coordinator whenever you have questions about your child.'
    },
    {
      icon: <Target className="w-5 h-5 text-[#c69b32]" />,
      title: 'Clear Learning Goals',
      desc: 'Defined timelines for completing Noorani Qaida, starting Juz Amma, or memorizing daily morning and evening Duas.'
    }
  ];

  return (
    <section id="parents" className="py-20 lg:py-28 bg-[#F8F7F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center mb-16">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064E3B]/10 border border-[#064E3B]/20 mb-4">
              <Heart className="w-4 h-4 text-[#064E3B]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#064E3B]">
                For Conscious Parents
              </span>
            </div>

            <h2
              id="parents-headline"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#064E3B] tracking-tight mb-5"
            >
              A Learning Journey <br />
              <span className="text-[#D4AF37] font-serif italic">Parents Can Understand</span>
            </h2>

            <p className="text-base sm:text-lg text-[#53655D] leading-relaxed mb-8">
              We know how deeply parents care about their children’s Islamic upbringing in a fast-paced world. That is why we eliminate guesswork, providing transparent reports, clear milestones, and teachers who inspire respect and warmth.
            </p>

            {/* Grid of 6 Parent Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {parentPillars.map((p) => (
                <div
                  key={p.title}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-[#DDE5DF] shadow-sm flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#064E3B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-[#064E3B] mb-1">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#53655D] leading-relaxed font-body">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Component */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="p-3 rounded-3xl bg-white shadow-xl border border-[#DDE5DF]">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#022C22]">
                  <img
                    src={parentChildImage}
                    alt="Attentive child learning Quran online with encouraging Muslim mother in bright study room"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#022C22]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block">
                      Parent Peace of Mind
                    </span>
                    <span className="text-sm font-serif font-bold">
                      Safe, Guided, and Joyful Learning at Home
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-[#F8F7F1] border border-[#DDE5DF] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#064E3B]">Parent Portal & Updates</div>
                    <div className="text-[11px] text-[#53655D]">Direct WhatsApp access to your child’s mentor</div>
                  </div>
                  <button
                    onClick={onOpenTrial}
                    className="px-4 py-2 rounded-lg text-xs font-bold text-[#17211D] bg-[#D4AF37] hover:bg-[#b89728] shadow-sm transition-all cursor-pointer"
                  >
                    Try 1st Class
                  </button>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-2 border-[#D4AF37]/40 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
