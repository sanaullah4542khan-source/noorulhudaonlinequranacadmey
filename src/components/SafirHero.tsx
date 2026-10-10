import React from 'react';
import { BookOpen, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Award, Star, Users, Video } from 'lucide-react';
import { SAFIR_CONTACT, getSafirWhatsAppUrl } from '../data/safirData';
import { useLanguage } from '../context/LanguageContext';

interface SafirHeroProps {
  onOpenFreeTrial: () => void;
  onExploreCourses: () => void;
}

export const SafirHero: React.FC<SafirHeroProps> = ({
  onOpenFreeTrial,
  onExploreCourses
}) => {
  const { t, isRtl, isArabic, isUrdu } = useLanguage();

  return (
    <section className="relative bg-[#064232] text-white pt-4 sm:pt-8 lg:pt-10 pb-10 sm:pb-16 lg:pb-24 overflow-hidden border-b border-[#0a523f]">
      {/* Background Geometric Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-geo-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M30 0 L60 30 L30 60 L0 30 Z M30 10 L50 30 L30 50 L10 30 Z"
                fill="none"
                stroke="#facc15"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-geo-pattern)" />
        </svg>
      </div>

      {/* Subtle radial ambient glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[350px] bg-gradient-to-b from-[#facc15]/15 via-[#0b513f]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            3. BISMILLAH: ELEGANT NASTALEEQ CALLIGRAPHIC HEADER
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-1.5 sm:py-2.5 rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-md border border-[#facc15]/40 shadow-lg max-w-full">
            <span className="text-[#facc15] text-[10px] sm:text-xs select-none">✦</span>
            <p
              className="font-nastaliq text-lg sm:text-3xl lg:text-4xl text-[#facc15] tracking-normal sm:tracking-wide leading-relaxed drop-shadow-sm truncate"
              dir="rtl"
              style={{ fontFamily: "'Noto Nastaliq Urdu', 'Amiri', 'Traditional Arabic', serif" }}
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <span className="text-[#facc15] text-[10px] sm:text-xs select-none">✦</span>
          </div>
          <span className="text-[10px] sm:text-xs text-emerald-200/80 uppercase tracking-wider sm:tracking-widest font-nav font-medium mt-1.5 sm:mt-2 text-center px-2">
            {isArabic ? 'بسم الله الرحمن الرحيم' : isUrdu ? 'اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے' : 'In the Name of Allah, the Most Gracious, the Most Merciful'}
          </span>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            HERO MAIN GRID: 2 COLUMNS (REFERENCE PROPORTIONS)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & Features (lg:col-span-7) */}
          <div className="lg:col-span-7 text-left rtl:text-right space-y-4 sm:space-y-6">
            
            {/* Academy Certification Pill with Official Logo */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#04241b]/90 border border-[#facc15]/50 shadow-md max-w-full">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white p-0.5 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src="/noor-ul-huda-logo.svg"
                  alt="Noor Ul Huda Academy Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[10.5px] sm:text-xs font-nav font-medium text-[#facc15] tracking-wide truncate">
                {isArabic
                  ? 'أكاديمية نور الهدى لتعليم القرآن • حصص فردية مباشرة 100%'
                  : isUrdu
                  ? 'نور الہدیٰ آن لائن قرآن اکیڈمی • سند یافتہ اساتذہ'
                  : 'Noor Ul Huda Quran Academy • 100% Live 1-on-1 Sessions'}
              </span>
            </div>

            {/* Main Headline (Poppins SemiBold / Cairo) */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold tracking-tight text-white leading-tight sm:leading-[1.15]">
              {isArabic ? (
                <>
                  تعلم القرآن الكريم عبر الإنترنت مع <span className="text-[#facc15] relative inline-block">
                    نخبة المعلمين المجازين
                    <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#facc15]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                    </svg>
                  </span>
                </>
              ) : isUrdu ? (
                <>
                  گھر بیٹھے مستند اساتذہ سے <span className="text-[#facc15]">قرآن مجید</span> تجوید کے ساتھ سیکھیں
                </>
              ) : (
                <>
                  Learn the Holy Quran Online with <span className="text-[#facc15] relative inline-block">
                    World-Class Tutors
                    <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#facc15]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                    </svg>
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline */}
            <p className="font-body font-normal text-xs sm:text-base lg:text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
              {isArabic
                ? 'حصص تفاعلية فردية ومباشرة (1-لـ-1) للأطفال والكبار والمهتدين الجدد. أتقن تلاوة القرآن بأحكام التجويد ومخارج الحروف، واحفظ السور وفق جدول منظم بأوقات مرنة على مدار 24 ساعة من راحة منزلك.'
                : isUrdu
                ? 'بچوں، بڑوں اور ابتدائی طلباء کے لیے ون ٹو ون انٹرایکٹو کلاسز۔ اپنی پسند کے اوقات میں نورانی قاعدہ، ناظرہ، تجوید، حفظ اور بنیادی اسلامی علوم میں مہارت حاصل کریں۔'
                : 'Personalized 1-on-1 private classes for kids, adults, and beginners. Master Noorani Qaida, Tajweed, Hifz, and Islamic Studies at your preferred time from the comfort of your home.'}
            </p>

            {/* 4 Feature Points Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-1">
              {[
                {
                  en: 'Live 1-on-1 Interactive Video Sessions',
                  ur: '100% لائیو پرائیویٹ ون ٹو ون کلاسز',
                  ar: 'حصص فيديو تفاعلية فردية ومباشرة 100%'
                },
                {
                  en: 'Certified Male & Female Native Tutors',
                  ur: 'مستند اور تجربہ کار مرد و خواتین قراء',
                  ar: 'معلمون ومعلمات من الحفاظ وأصحاب الإجازات'
                },
                {
                  en: 'Flexible 24/7 Scheduling Across Time Zones',
                  ur: 'چوبیس گھنٹے اپنی مرضی کے لچکدار اوقات',
                  ar: 'مواعيد مرنة 24/7 تلائم كافة الدول والمناطق'
                },
                {
                  en: '3-Day Free Trial — No Credit Card Needed',
                  ur: '3 دن کا مفت ٹرائل — مکمل اطمینان کی ضمانت',
                  ar: 'تجربة مجانية 3 أيام — دون بطاقة بنكية'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 sm:gap-2.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#facc15] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-white/95 font-body font-normal">
                    {isArabic ? item.ar : isUrdu ? item.ur : item.en}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-2">
              {/* Primary Golden CTA */}
              <button
                onClick={onOpenFreeTrial}
                className="w-full sm:w-auto px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#facc15] via-[#fcd34d] to-[#eab308] hover:from-[#eab308] hover:to-[#ca8a04] text-[#13241d] font-nav font-semibold text-xs sm:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isArabic ? 'احجز تجربة مجانية 3 أيام' : isUrdu ? '3 روزہ مفت ٹرائل حاصل کریں' : 'Book 3-Day Free Trial'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              {/* Secondary Course Explore */}
              <button
                onClick={onExploreCourses}
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl bg-[#0a523f] hover:bg-[#0e644d] text-white font-nav font-medium text-xs sm:text-sm border border-[#facc15]/50 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#facc15]" />
                <span>{isArabic ? 'استكشف كافة الدورات' : isUrdu ? 'تمام کورسز دیکھیں' : 'Explore Courses'}</span>
              </button>
            </div>

            {/* Quick WhatsApp Connect */}
            <div className="pt-0.5">
              <a
                href={getSafirWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-[11.5px] sm:text-sm font-nav font-medium transition-all shadow-sm"
                title="Direct WhatsApp Support"
                dir="ltr"
              >
                <img
                  src="/whatsapp-circle-button.png"
                  alt="WhatsApp"
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover flex-shrink-0"
                />
                <span className="truncate">
                  {isArabic ? 'تواصل عبر واتساب:' : isUrdu ? 'واٹس ایپ رابطہ:' : 'WhatsApp Support:'}{' '}
                  <strong className="text-[#facc15] font-semibold">{SAFIR_CONTACT.phone}</strong>
                </span>
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg text-center sm:text-left rtl:sm:text-right">
              <div>
                <div className="text-lg sm:text-2xl font-heading font-bold text-[#facc15]">5,000+</div>
                <div className="text-[10px] sm:text-[11px] text-emerald-100/70 font-body font-normal">
                  {isArabic ? 'طالب وطالبة' : isUrdu ? 'کامیاب طلباء' : 'Graduated Students'}
                </div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-heading font-bold text-[#facc15]">4.9 / 5.0</div>
                <div className="text-[10px] sm:text-[11px] text-emerald-100/70 font-body font-normal">
                  {isArabic ? 'نسبة رضا أولياء الأمور' : isUrdu ? 'والدین کا اعتماد' : 'Parent Satisfaction'}
                </div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-heading font-bold text-[#facc15]">50+</div>
                <div className="text-[10px] sm:text-[11px] text-emerald-100/70 font-body font-normal">
                  {isArabic ? 'معلماً ومعلمة مجازين' : isUrdu ? 'سند یافتہ قراء' : 'Certified Scholars'}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Illustration & Digital Classroom (lg:col-span-5) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Backing Frame with Golden Border */}
              <div className="absolute -inset-1 sm:-inset-2 rounded-3xl bg-gradient-to-tr from-[#facc15]/30 via-transparent to-[#059669]/40 blur-xl pointer-events-none" />
              
              {/* Main Illustration Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#04241b] border-2 border-[#facc15]/50 shadow-2xl group">
                <img
                  src="/hero-online-classroom.jpg"
                  alt="Online Quran Learning Live Classroom with Certified Teachers"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  width={640}
                  height={427}
                />

                {/* Live Session Active Indicator Overlay */}
                <div className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#064232]/95 backdrop-blur-md border border-[#facc15]/60 text-[10px] sm:text-xs font-nav font-semibold text-white shadow-md">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>{isArabic ? '● حصة مباشرة 1-لـ-1' : isUrdu ? '● لائیو کلاس' : '● Live 1-on-1'}</span>
                </div>

                {/* Floating Certificate / Sanad Badge */}
                <div className="absolute bottom-2.5 left-2.5 rtl:left-auto rtl:right-2.5 bg-white/95 text-[#064232] rounded-xl p-2 sm:p-2.5 shadow-xl border border-[#c69b32]/40 flex items-center gap-2 max-w-[190px] sm:max-w-[240px]">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#064232] text-[#facc15] flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] sm:text-[11px] font-bold font-heading leading-tight truncate">
                      {isArabic ? 'شهادة تجويد وسند متصل' : isUrdu ? 'مستند تجوید سرٹیفکیٹ' : 'Tajweed & Sanad Ijazah'}
                    </span>
                    <span className="block text-[8.5px] sm:text-[9.5px] text-gray-600 font-body truncate">
                      {isArabic ? 'معتمدة عالمياً' : isUrdu ? 'عالمی سطح پر تسلیم شدہ' : 'Internationally Accredited'}
                    </span>
                  </div>
                </div>

                {/* Floating Student Thumbnail in corner */}
                <div className="absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 hidden sm:flex items-center gap-1.5 bg-[#064232]/90 backdrop-blur-md border border-white/20 rounded-full py-0.5 px-2 shadow-lg">
                  <img
                    src="/boy-reading-quran.jpg"
                    alt="Child Quran Student"
                    className="w-6 h-6 rounded-full object-cover border border-[#facc15]"
                  />
                  <span className="text-[10px] text-white font-nav font-medium pr-0.5">
                    {isArabic ? 'للأطفال والكبار' : isUrdu ? 'بچوں کے لیے' : 'Kid-Friendly'}
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
