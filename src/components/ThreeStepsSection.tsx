import React from 'react';
import { UserCheck, Clock, BookOpen, ArrowRight, ShieldCheck, CheckCircle2, FileCheck } from 'lucide-react';
import { THREE_STEPS } from '../data/safirData';
import { useLanguage } from '../context/LanguageContext';
import { STEP_REGISTER_IMAGE, STEP_SCHEDULE_IMAGE, STEP_START_IMAGE } from '../data/userImagesLazy';

interface ThreeStepsSectionProps {
  onOpenEnrollment: () => void;
}

export const ThreeStepsSection: React.FC<ThreeStepsSectionProps> = ({ onOpenEnrollment }) => {
  const { t, isRtl, isArabic, isUrdu } = useLanguage();

  const stepImages: Record<number, string> = {
    1: STEP_REGISTER_IMAGE,
    2: STEP_SCHEDULE_IMAGE,
    3: STEP_START_IMAGE
  };

  const getStepTitle = (stepId: number, defaultTitle: string) => {
    if (stepId === 1) return t.threeSteps.step1Title;
    if (stepId === 2) return t.threeSteps.step2Title;
    if (stepId === 3) return t.threeSteps.step3Title;
    return defaultTitle;
  };

  const getStepDesc = (stepId: number, defaultDesc: string) => {
    if (stepId === 1) return t.threeSteps.step1Desc;
    if (stepId === 2) return t.threeSteps.step2Desc;
    if (stepId === 3) return t.threeSteps.step3Desc;
    return defaultDesc;
  };

  return (
    <section id="three-steps" className="py-10 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
        {/* Arabic Calligraphy Header */}
        <div className="mb-3 sm:mb-4">
          <p
            className="text-xl sm:text-3xl lg:text-4xl font-nastaliq text-[#064232] tracking-wide"
            dir="rtl"
            style={{ fontFamily: "'Noto Nastaliq Urdu', 'Amiri', 'Traditional Arabic', serif" }}
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
        </div>

        {/* Section Title */}
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#064232] tracking-tight mb-2 sm:mb-3">
          {t.threeSteps.title}
        </h2>

        {/* Split Underline Divider: Left half deep green, right half golden yellow */}
        <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4">
          <div className="h-1 w-10 sm:w-16 bg-[#064232] rounded-full"></div>
          <div className="h-1 w-10 sm:w-16 bg-[#eab308] rounded-full"></div>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-xs sm:text-base text-gray-600 leading-relaxed mb-8 sm:mb-12">
          {isArabic
            ? 'سجل بسهولة عبر نظامنا الإلكتروني الميسر؛ اتبع هذه الخطوات الثلاث البسيطة لبدء رحلتك القرآنية أو تسجيل أطفالك اليوم.'
            : isUrdu
            ? 'ہمارے آسان آن لائن طریقہ کار کے ذریعے آسانی سے رجسٹریشن کروائیں۔ اپنے یا اپنے بچوں کے داخلے کے لیے ان تین آسان مراحل پر عمل کریں۔'
            : 'Get registered effortlessly with our user-friendly online process; just follow the steps to enroll yourself or your children and get started.'}
        </p>

        {/* Official Assurance & Verified Registration Banner */}
        <div className="mb-8 sm:mb-12 max-w-4xl mx-auto bg-gradient-to-r from-[#064232] via-[#084c3b] to-[#042f24] text-white rounded-2xl overflow-hidden shadow-xl border border-[#eab308]/40 text-left rtl:text-right">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            {/* Left Column: Official Assurance Image */}
            <div className="md:col-span-5 relative h-44 sm:h-56 md:h-full min-h-[170px] overflow-hidden">
              <img
                src={STEP_REGISTER_IMAGE}
                alt="Official Academy Registration Assurance and Verified Agreement"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 via-transparent to-transparent" />
              <div className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#064232]/95 backdrop-blur-md border border-[#facc15]/50 text-[10.5px] font-bold text-[#facc15] shadow-sm">
                <ShieldCheck className="w-3 h-3 text-[#facc15]" />
                <span>{isArabic ? 'ضمان رسمي' : isUrdu ? 'سرکاری ضمانت' : 'Official Assurance'}</span>
              </div>
            </div>

            {/* Right Column: Assurance Points */}
            <div className="md:col-span-7 p-4 sm:p-7">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#facc15]/20 border border-[#facc15]/30 text-[#facc15] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2">
                <FileCheck className="w-3 h-3" />
                <span>{isArabic ? 'ضمان التسجيل المعتمد' : isUrdu ? 'تصدیق شدہ رجسٹریشن گارنٹی' : 'Verified Enrollment Guarantee'}</span>
              </div>
              <h3 className="text-base sm:text-xl font-serif font-bold text-white mb-1.5 sm:mb-2">
                {isArabic ? 'اطمئنان تام دون أي التزام مالي مسبق' : isUrdu ? 'بغیر کسی پیشگی فیس کے مکمل اطمینان' : 'Assured & Transparent Registration'}
              </h3>
              <p className="text-xs sm:text-sm text-[#e0f2fe] leading-relaxed mb-3 sm:mb-4">
                {isArabic
                  ? 'قبل بدء الحصص المنتظمة، نضمن لك راحة البال التامة مع معلمين ومعلمات مجازين، و3 أيام تجربة مجانية لتحديد المستوى والمواعيد المناسبة.'
                  : isUrdu
                  ? 'کلاسز شروع کرنے سے قبل ہم مستند علماء اور قراء کرام کی تدریس کے ساتھ مکمل ذہنی سکون اور 3 دن کا مفت ٹرائل فراہم کرتے ہیں۔'
                  : 'Before commencing your classes, we ensure full peace of mind with vetted scholars, zero hidden commitments, and a free 3-day trial before confirming your schedule.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-[11.5px] sm:text-xs text-white">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#facc15] flex-shrink-0" />
                  <span>{isArabic ? 'تجربة مجانية 100% لمدة 3 أيام' : isUrdu ? '100% مفت 3 روزہ ٹرائل' : '100% Free 3-Day Trial'}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#facc15] flex-shrink-0" />
                  <span>{isArabic ? 'معلمون ومعلمات مجازون' : isUrdu ? 'مستند قرآن اساتذہ' : 'Certified Quran Tutors'}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#facc15] flex-shrink-0" />
                  <span>{isArabic ? 'فصول فيديو تفاعلية فردية' : isUrdu ? 'انفرادی لائیو ویڈیو کلاس' : 'Interactive Live Video'}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#facc15] flex-shrink-0" />
                  <span>{isArabic ? 'مرونة تامة في تعديل الأوقات' : isUrdu ? 'اوقات تبدیل کرنے کی سہولت' : 'Guaranteed Rescheduling'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {THREE_STEPS.map((step) => {
            return (
              <div
                key={step.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(6,66,50,0.1)] transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Step Card Visual Thumbnail */}
                <div className="w-full aspect-[16/10] overflow-hidden bg-gray-100 relative">
                  <img
                    src={stepImages[step.id] || STEP_REGISTER_IMAGE}
                    alt={getStepTitle(step.id, step.title)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={250}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5 px-2 py-0.5 rounded-full bg-[#064232]/90 text-[#facc15] text-[10px] sm:text-[11px] font-bold border border-[#facc15]/30 shadow">
                    {isArabic ? `الخطوة ${step.id}` : isUrdu ? `مرحلہ ${step.id}` : `Step ${step.id}`}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-6 flex flex-col items-center flex-grow">
                  {/* Step Icon Badge */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#064232] text-white flex items-center justify-center -mt-9 sm:-mt-11 mb-3 sm:mb-4 border-2 border-white shadow-md relative z-10">
                    {step.id === 1 && <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#facc15]" />}
                    {step.id === 2 && <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#facc15]" />}
                    {step.id === 3 && <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-[#facc15]" />}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-heading font-semibold text-[#064232] mb-1.5 sm:mb-2">
                    {getStepTitle(step.id, step.title)}
                  </h3>

                  {/* Step Description */}
                  <p className="font-body font-normal text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {getStepDesc(step.id, step.description)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button Below Steps */}
        <div className="text-center">
          <button
            onClick={onOpenEnrollment}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#064232] hover:bg-[#0a523f] text-white font-nav font-medium text-xs sm:text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <span>{t.threeSteps.ctaEnroll}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
};
