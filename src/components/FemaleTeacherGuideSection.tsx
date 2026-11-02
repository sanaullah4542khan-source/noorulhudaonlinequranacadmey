import React from 'react';
import { HeartHandshake, BookOpen, UserCheck, Clock3, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FemaleTeacherGuideSectionProps {
  onOpenFreeTrial: () => void;
}

// A short, genuinely helpful guide for families looking for a female Quran
// teacher online. Only the academy's real facts are stated: 1-on-1 classes,
// male and female teachers, a free trial, and a weekly WhatsApp progress
// report. No teacher names, counts, or qualifications are invented.
export const FemaleTeacherGuideSection: React.FC<FemaleTeacherGuideSectionProps> = ({ onOpenFreeTrial }) => {
  const { isUrdu } = useLanguage();

  const content = isUrdu
    ? {
        eyebrow: 'خاتون استانی',
        title: 'آن لائن خاتون قرآن استانی: اپنی بیٹی کے لیے درست انتخاب',
        intro:
          'بہت سے خاندان اپنی بیٹیوں، بہنوں یا خود کے لیے خاتون قرآن استانی کو ترجیح دیتے ہیں۔ یہ ایک بالکل جائز اور عام انتخاب ہے — اور آن لائن کلاس میں یہ آسان بھی ہے، کیونکہ بچہ اپنے گھر کی محفوظ ماحول میں، ون آن ون پڑھتا ہے۔',
        cards: [
          {
            icon: <HeartHandshake className="w-5 h-5 text-[#c69b32]" />,
            title: 'آرام اور پردہ، اپنے گھر میں',
            desc: 'بچی اپنے گھر میں، آپ کی موجودگی میں پڑھتی ہے۔ نہ سفر ہے، نہ کسی کلاس روم میں انتظار — اور استانی کا انتخاب خاندان کی اپنی مرضی سے ہوتا ہے۔'
          },
          {
            icon: <BookOpen className="w-5 h-5 text-[#c69b32]" />,
            title: 'مکمل نصاب، وہی معیار',
            desc: 'خاتون استانی کے ساتھ بھی وہی کورسز پڑھائے جاتے ہیں: قاعدہ، تجوید، حفظ اور اسلامیات۔ معیار یا نصاب میں کوئی فرق نہیں، صرف استانی کا انتخاب آپ کا ہوتا ہے۔'
          },
          {
            icon: <UserCheck className="w-5 h-5 text-[#c69b32]" />,
            title: 'ون آن ون توجہ، ہر حرف کی اصلاح',
            desc: 'کلاس میں صرف آپ کا بچہ ہوتا ہے، اس لیے استانی ہر حرف اور ہر آیت کی اصلاح موقع پر کرتی ہے۔ بچہ سوال پوچھنے میں جھجکتا نہیں، اور ترقی ہر ہفتے نظر آتی ہے۔'
          },
          {
            icon: <Clock3 className="w-5 h-5 text-[#c69b32]" />,
            title: 'آپ کے وقت کے مطابق، ہفتہ وار رپورٹ کے ساتھ',
            desc: 'دن اور وقت خاندان کی سہولت سے طے ہوتے ہیں، بشمول آسٹریلیا اور برطانیہ کے اوقات۔ اور ہر ہفتے واٹس ایپ پر ترقی کی رپورٹ ملتی ہے، تاکہ آپ کو معلوم رہے کہ بچے نے کیا سیکھا۔'
          }
        ],
        note: 'پہلے مفت ٹرائل کلاس میں استانی سے ملیں، پڑھانے کا انداز دیکھیں، پھر فیصلہ کریں — ادائیگی سے پہلے کلاس دیکھنا آپ کا حق ہے۔',
        ctaHint: 'پہلے خود دیکھیں — خاتون استانی کے ساتھ مفت ٹرائل کلاس بک کریں۔',
        cta: 'مفت ٹرائل کلاس بک کریں',
        coursesLink: 'بچوں کے لیے ہماری آن لائن قرآن کلاسز دیکھیں — تجوید، حفظ، قاعدہ اور اسلامیات، سب ون آن ون۔'
      }
    : {
        eyebrow: 'Female Quran Teacher',
        title: 'Female Quran Teacher Online: The Right Choice for Your Daughter',
        intro:
          'Many families prefer a female Quran teacher for their daughters, sisters, or themselves. It is a completely normal choice — and an online class makes it easy, because your child learns 1-on-1 in the safety of your own home.',
        cards: [
          {
            icon: <HeartHandshake className="w-5 h-5 text-[#c69b32]" />,
            title: 'Comfort and Privacy, at Home',
            desc: 'Your daughter learns at home, with you nearby. There is no travel and no waiting outside a classroom — and the choice of teacher is your family\u2019s own.'
          },
          {
            icon: <BookOpen className="w-5 h-5 text-[#c69b32]" />,
            title: 'The Full Curriculum, the Same Standard',
            desc: 'With a female teacher your child studies the same courses: Qaida, Tajweed, Hifz and Islamic Studies. The standard and the syllabus do not change — only the teacher is the one you chose.'
          },
          {
            icon: <UserCheck className="w-5 h-5 text-[#c69b32]" />,
            title: '1-on-1 Attention, Every Letter Corrected',
            desc: 'In a 1-on-1 class your child is the only student, so the teacher corrects every letter and every verse on the spot. Children ask questions without hesitation, and progress shows week after week.'
          },
          {
            icon: <Clock3 className="w-5 h-5 text-[#c69b32]" />,
            title: 'Timings That Fit You, With a Weekly Report',
            desc: 'Days and times are set around your family, including Australia and UK timings. And every week a WhatsApp progress report shows you exactly what your child learned.'
          }
        ],
        note: 'Meet the teacher in a free trial class first, see how she teaches, and then decide — seeing a real class before paying is your right.',
        ctaHint: 'See it for yourself — book a free trial class with a female teacher today.',
        cta: 'Book a Free Trial Class',
        coursesLink: 'Browse our online Quran classes for kids — Tajweed, Hifz, Qaida and Islamic Studies, all 1-on-1.'
      };

  return (
    <section id="female-teacher-guide" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064E3B]/10 border border-[#064E3B]/20 mb-4">
            <HeartHandshake className="w-4 h-4 text-[#064E3B]" />
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
