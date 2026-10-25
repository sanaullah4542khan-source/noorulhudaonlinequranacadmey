import React from 'react';
import { BookOpenCheck, UserCheck, MonitorPlay, Clock3, FileText, ShieldCheck, ArrowRight } from 'lucide-react';

interface ParentGuideSectionProps {
  onOpenFreeTrial: () => void;
}

export const ParentGuideSection: React.FC<ParentGuideSectionProps> = ({ onOpenFreeTrial }) => {
  const checklist = [
    {
      icon: <UserCheck className="w-5 h-5 text-[#c69b32]" />,
      title: 'One-on-One Attention',
      desc: 'In a 1-on-1 class your child is never lost in a crowd. The teacher corrects every letter and recitation on the spot, so progress is steady week after week.'
    },
    {
      icon: <BookOpenCheck className="w-5 h-5 text-[#c69b32]" />,
      title: 'Qualified Male & Female Teachers',
      desc: 'Ask who will teach your child. We have both male and female Quran teachers, so families can choose the teacher their child is most comfortable with.'
    },
    {
      icon: <MonitorPlay className="w-5 h-5 text-[#c69b32]" />,
      title: 'A Free Trial Class First',
      desc: 'Never pay before you have seen a real class. A free trial lets your child meet the teacher, try the lesson style, and lets you judge the quality yourself.'
    },
    {
      icon: <Clock3 className="w-5 h-5 text-[#c69b32]" />,
      title: 'Timing That Fits Your Family',
      desc: 'Online classes should work around school, homework and family time — not the other way round. Choose days and times that suit your child, with easy rescheduling.'
    },
    {
      icon: <FileText className="w-5 h-5 text-[#c69b32]" />,
      title: 'Visible Progress Reports',
      desc: 'You should always know what your child learned this week. We send parents a weekly WhatsApp progress report, so nothing about your child\u2019s learning stays hidden.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#c69b32]" />,
      title: 'Safe Learning at Home',
      desc: 'Classes happen at home, on your own device, with you nearby. There is no travel, no waiting outside a classroom, and full peace of mind for parents.'
    }
  ];

  return (
    <section id="parents-guide" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064E3B]/10 border border-[#064E3B]/20 mb-4">
            <BookOpenCheck className="w-4 h-4 text-[#064E3B]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#064E3B]">
              Parent Guide
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#064E3B] tracking-tight mb-5">
            How to Choose Online Quran Classes for Kids
          </h2>
          <p className="text-base sm:text-lg text-[#17211D]/70 leading-relaxed">
            Every parent wants the same thing: a teacher their child loves, lessons that actually
            stick, and honest updates on progress. Before you enrol anywhere, check these six things —
            they are exactly what we built Noor Ul Huda Online Quran Academy around.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {checklist.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#064E3B]/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-[#064E3B]/10 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#064E3B] mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base text-[#17211D]/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#17211D]/70 mb-5">
            See it for yourself — book a free trial class for your child today.
          </p>
          <button
            onClick={onOpenFreeTrial}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#064E3B] text-white font-semibold shadow-lg hover:bg-[#04382b] transition-colors"
          >
            Book a Free Trial Class
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
