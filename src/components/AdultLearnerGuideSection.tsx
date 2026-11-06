import React from 'react';
import { GraduationCap, Briefcase, Users, HeartHandshake, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AdultLearnerGuideSectionProps {
  onOpenFreeTrial: () => void;
}

// A short, genuinely helpful guide for adults who want to learn the Quran
// online. Only the academy's real facts are stated: 1-on-1 classes, male and
// female teachers, a free trial, and a weekly WhatsApp progress report. No
// student counts, ages, or outcomes are invented.
export const AdultLearnerGuideSection: React.FC<AdultLearnerGuideSectionProps> = ({ onOpenFreeTrial }) => {
  const { isUrdu } = useLanguage();

  const content = isUrdu
    ? {
        eyebrow: 'بالغ طلبہ کے لیے',
        title: 'بالغ ہو کر آن لائن قرآن سیکھیں: شروع کرنے میں کبھی دیر نہیں ہوتی',
        intro:
          'بہت سے بالغ افراد بچپن میں قرآن سیکھنے کا موقع نہیں پا سکے، کچھ اپنی تجوید بہتر کرنا چاہتے ہیں، اور کچھ نئے مسلمان ہیں جو پہلی بار قرآن پڑھنا چاہتے ہیں۔ آن لائن ون آن ون کلاس میں آپ اپنی رفتار سے، بغیر کسی جھجک کے سیکھتے ہیں — عمر کی کوئی قید نہیں۔',
        cards: [
          {
            icon: <GraduationCap className="w-5 h-5 text-[#c69b32]" />,
            title: 'جہاں ہیں، وہیں سے شروع کریں',
            desc: 'حروفِ تہجی سے قاعدہ شروع کرنا ہو یا تجوید کی اصلاح، استاد آپ کی سطح سے پڑھانا شروع کرتا ہے۔ آپ سے وہی پوچھا جاتا ہے جو آپ جانتے ہیں — کوئی امتحان نہیں، کوئی فیصلہ نہیں۔'
          },
          {
            icon: <Briefcase className="w-5 h-5 text-[#c69b32]" />,
            title: 'نوکری اور گھر کے مطابق وقت',
            desc: 'صبح سویرے یا رات دیر سے، آپ کی سہولت کے مطابق وقت طے ہوتا ہے، بشمول آسٹریلیا، برطانیہ اور امریکہ کے اوقات۔ مصروف دن ہو تو کلاس کا وقت بدلنا بھی ممکن ہے۔'
          },
          {
            icon: <Users className="w-5 h-5 text-[#c69b32]" />,
            title: 'ون آن ون، اپنی رفتار سے',
            desc: 'کلاس میں صرف آپ ہوتے ہیں، اس لیے سبق جتنی بار چاہیں دہرا سکتے ہیں اور ہر سوال بلا جھجک پوچھ سکتے ہیں۔ کلاس روم کا دباؤ نہیں — صرف آپ اور آپ کا استاد۔'
          },
          {
            icon: <HeartHandshake className="w-5 h-5 text-[#c69b32]" />,
            title: 'اپنے بچوں کے ساتھ ساتھ سیکھیں',
            desc: 'بہت سے والدین اپنے بچوں کے ساتھ خود بھی داخلہ لیتے ہیں۔ ہر طالب علم کی اپنی ون آن ون کلاس ہوتی ہے، اور ہر ہفتے واٹس ایپ پر ترقی کی رپورٹ ملتی ہے۔'
          }
        ],
        note: 'پہلے مفت ٹرائل کلاس لیں — اپنے استاد سے ملیں، پڑھانے کی رفتار دیکھیں، پھر فیصلہ کریں۔',
        ctaHint: 'پہلا قدم صرف دس منٹ کا ہے — آج ہی مفت ٹرائل کلاس بک کریں۔',
        cta: 'مفت ٹرائل کلاس بک کریں',
        coursesLink: 'کورسز دیکھیں — قاعدہ، تجوید، حفظ اور اسلامیات، ہر عمر کے لیے، سب ون آن ون۔'
      }
    : {
        eyebrow: 'Adults Welcome',
        title: 'Learn Quran Online as an Adult: It\u2019s Never Too Late to Start',
        intro:
          'Many adults never had the chance to learn the Quran as children. Some want to improve their Tajweed, and some are new Muslims reading the Quran for the first time. In a 1-on-1 online class you learn at your own pace, without embarrassment — there is no age limit on starting.',
        cards: [
          {
            icon: <GraduationCap className="w-5 h-5 text-[#c69b32]" />,
            title: 'Start From Where You Are',
            desc: 'Whether you are starting Qaida from the alphabet or polishing your Tajweed, your teacher begins at your level. You are only ever asked what you already know — no test, no judgement.'
          },
          {
            icon: <Briefcase className="w-5 h-5 text-[#c69b32]" />,
            title: 'A Schedule Around Work and Family',
            desc: 'Early morning or late evening, class times are set around you, including Australia, UK and USA timings. And when a busy day comes up, your class time can be moved.'
          },
          {
            icon: <Users className="w-5 h-5 text-[#c69b32]" />,
            title: '1-on-1, At Your Own Pace',
            desc: 'In a 1-on-1 class you are the only student, so you can repeat a lesson as often as you like and ask every question freely. There is no classroom pressure — just you and your teacher.'
          },
          {
            icon: <HeartHandshake className="w-5 h-5 text-[#c69b32]" />,
            title: 'Learn Alongside Your Children',
            desc: 'Many parents enrol alongside their children. Every learner gets their own 1-on-1 class, and every week a WhatsApp progress report shows what each of you learned.'
          }
        ],
        note: 'Try a free trial class first — meet your teacher, see the pace, and then decide.',
        ctaHint: 'Your first step takes ten minutes — book a free trial class today.',
        cta: 'Book a Free Trial Class',
        coursesLink: 'See the courses — Qaida, Tajweed, Hifz and Islamic Studies for every age, all 1-on-1.'
      };

  return (
    <section id="adult-learner-guide" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064E3B]/10 border border-[#064E3B]/20 mb-4">
            <GraduationCap className="w-4 h-4 text-[#064E3B]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#064E3B]">
              {content.eyebrow}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#064E3B] tracking-tight mb-5">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-[#17211D]/70 leading-relaxed">
            {content.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.cards.map((item) => (
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
          <p className="text-[#17211D]/70 mb-2 max-w-2xl mx-auto">{content.note}</p>
          <p className="text-[#17211D]/70 mb-5">{content.ctaHint}</p>
          <button
            onClick={onOpenFreeTrial}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#064E3B] text-white font-semibold shadow-lg hover:bg-[#04382b] transition-colors"
          >
            {content.cta}
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="mt-5 text-sm sm:text-base">
            <a href="#courses" className="font-semibold text-[#064E3B] underline underline-offset-4 hover:text-[#04382b]">
              {content.coursesLink}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
