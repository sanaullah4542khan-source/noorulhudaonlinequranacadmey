import React from 'react';
import { BookOpen, Volume2, Moon, AudioLines, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TajweedGuideSectionProps {
  onOpenFreeTrial: () => void;
}

// A short, genuinely helpful beginner guide to Tajweed rules, written for
// parents who are deciding how to learn Quran online. All rules stated here
// are standard Tajweed rules; nothing about the academy is invented.
export const TajweedGuideSection: React.FC<TajweedGuideSectionProps> = ({ onOpenFreeTrial }) => {
  const { isUrdu } = useLanguage();

  const content = isUrdu
    ? {
        eyebrow: 'تجوید گائیڈ',
        title: 'آن لائن قرآن سیکھیں: تجوید کی بنیادی باتیں',
        intro:
          'تجوید کا مطلب ہے قرآن مجید کو صحیح تلفظ اور قواعد کے ساتھ پڑھنا۔ آپ کو سب کچھ ایک دن میں سیکھنے کی ضرورت نہیں — ہر بچہ ان چار بنیادی باتوں سے شروع کرتا ہے، اور ہماری ون آن ون کلاس میں استاد ہر قاعدہ صبر سے، ایک ایک کر کے سکھاتا ہے۔',
        cards: [
          {
            icon: <Volume2 className="w-5 h-5 text-[#c69b32]" />,
            title: 'مخارج: حروف کہاں سے نکلتے ہیں',
            desc: 'ہر عربی حرف منہ یا گلے کی ایک خاص جگہ سے ادا ہوتا ہے۔ مخارج سیکھنا درست تلفظ کی پہلی سیڑھی ہے — اسی سے قاری کی آواز صاف اور صحیح ہوتی ہے۔'
          },
          {
            icon: <Moon className="w-5 h-5 text-[#c69b32]" />,
            title: 'نون ساکنہ اور تنوین کے چار احکام',
            desc: 'نون ساکنہ یا تنوین کے بعد آنے والے حرف کے حساب سے چار صورتیں ہوتی ہیں: اظہار (واضح پڑھنا)، ادغام (ملا کر پڑھنا)، اقلاب (میم میں بدلنا) اور اخفاء (چھپا کر پڑھنا)۔'
          },
          {
            icon: <BookOpen className="w-5 h-5 text-[#c69b32]" />,
            title: 'میم ساکنہ کے تین احکام',
            desc: 'میم ساکنہ کے بعد میم آئے تو ادغام شفوی، باء آئے تو اخفاء شفوی، اور کسی اور حرف کے ساتھ اظہار شفوی ہوتا ہے۔ یہ قاعدہ روزانہ کی تلاوت میں بار بار آتا ہے۔'
          },
          {
            icon: <AudioLines className="w-5 h-5 text-[#c69b32]" />,
            title: 'مد: کھینچ کر پڑھنا',
            desc: 'مد کا مطلب ہے آواز کو کھینچ کر پڑھنا۔ سب سے بنیادی مد، مدِ طبعی، دو حرکات کے برابر ہوتی ہے۔ مد سیکھنے سے تلاوت میں روانی اور خوبصورتی آتی ہے۔'
          }
        ],
        note: 'ہماری کلاس میں ہر قاعدہ عملی مشق کے ساتھ سکھایا جاتا ہے، اور ہفتہ وار واٹس ایپ رپورٹ سے والدین دیکھ سکتے ہیں کہ بچے نے کیا سیکھا۔',
        ctaHint: 'پہلے خود دیکھیں — بچے کے لیے مفت ٹرائل کلاس بک کریں۔',
        cta: 'مفت ٹرائل کلاس بک کریں'
      }
    : {
        eyebrow: 'Tajweed Guide',
        title: 'Learn Quran Online: Tajweed Basics Every Beginner Should Know',
        intro:
          'Tajweed simply means reciting the Holy Quran with correct pronunciation and rules. Nobody learns it all in one day — every child starts with these four basics, and in our 1-on-1 class the teacher goes through each rule patiently, one at a time.',
        cards: [
          {
            icon: <Volume2 className="w-5 h-5 text-[#c69b32]" />,
            title: 'Makharij: Where Each Letter Comes From',
            desc: 'Every Arabic letter is pronounced from a specific point in the mouth or throat. Learning the Makharij is the first step to clear, correct pronunciation — and to a recitation that sounds right.'
          },
          {
            icon: <Moon className="w-5 h-5 text-[#c69b32]" />,
            title: 'Noon Saakinah & Tanween: Four Rules',
            desc: 'Depending on the letter that follows a Noon Saakinah or Tanween, one of four rules applies: Izhar (clear pronunciation), Idgham (merging), Iqlab (changing into Meem) and Ikhfa (light concealment).'
          },
          {
            icon: <BookOpen className="w-5 h-5 text-[#c69b32]" />,
            title: 'Meem Saakinah: Three Rules',
            desc: 'After a Meem Saakinah, a Meem brings Idgham Shafawi, a Baa brings Ikhfa Shafawi, and any other letter brings Izhar Shafawi. This rule appears again and again in daily recitation.'
          },
          {
            icon: <AudioLines className="w-5 h-5 text-[#c69b32]" />,
            title: 'Madd: Lengthening the Sound',
            desc: 'Madd means stretching a vowel sound. The most basic form, Madd Tabeei, is stretched for two counts. Learning Madd gives recitation its flow and beauty.'
          }
        ],
        note: 'In our classes each rule is taught with live practice and correction, and the weekly WhatsApp report shows parents exactly what their child learned.',
        ctaHint: 'See it for yourself — book a free trial class for your child today.',
        cta: 'Book a Free Trial Class'
      };

  return (
    <section id="tajweed-guide" className="py-20 lg:py-28 bg-[#064E3B]/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064E3B]/10 border border-[#064E3B]/20 mb-4">
            <BookOpen className="w-4 h-4 text-[#064E3B]" />
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
        </div>
      </div>
    </section>
  );
};
