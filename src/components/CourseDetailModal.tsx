import React from 'react';
import { Course } from '../types';
import { CourseIllustration } from './CourseIllustration';
import { getCourseWhatsAppUrl, ACADEMY_WHATSAPP_NUMBER } from '../data/coursesData';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  CheckCircle2,
  Clock,
  Users,
  Calendar,
  Sparkles,
  ArrowRight,
  MessageCircle,
  BadgeCheck,
  Award,
  DollarSign,
  Gift,
  Layers,
  Star
} from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onSelectForTrial: (courseId: string, courseTitle?: string) => void;
  customWhatsAppNumber?: string;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onSelectForTrial,
  customWhatsAppNumber = ACADEMY_WHATSAPP_NUMBER
}) => {
  const { isRtl, isUrdu, isArabic } = useLanguage();
  if (!course) return null;

  const whatsAppUrl = getCourseWhatsAppUrl(course.title, customWhatsAppNumber);
  const theme = course.colorTheme || {
    accent: '#059669',
    gradient: 'from-[#064e3b] via-[#096b52] to-[#043327]',
    badgeBg: 'bg-emerald-500/15 border-emerald-500/30',
    badgeText: 'text-emerald-700',
    pillBg: 'bg-emerald-50 border-emerald-200',
    pillText: 'text-emerald-800',
    glowClass: 'card-glow-emerald',
    borderAccent: 'hover:border-emerald-500/50',
    btnGradient: 'from-emerald-600 via-emerald-700 to-emerald-800',
    popularTag: 'Popular Course'
  };

  return (
    <div
      id="course-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        id="course-detail-modal-card"
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#e5e3d7] overflow-hidden my-6 flex flex-col max-h-[92vh] text-left rtl:text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          id="close-course-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-30 p-2.5 rounded-full bg-black/45 hover:bg-black/75 text-white backdrop-blur-md transition-all shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Hero Area with Bespoke Illustration, Deep Forest Green & Calligraphy */}
        <div className="relative bg-[#022C22] border-b border-[#065F46] text-white p-6 sm:p-8 flex-shrink-0 overflow-hidden">
          {/* Subtle Ambient Radial Shimmers */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#064E3B]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
            {/* Themed SVG Illustration */}
            <div className="w-full sm:w-56 flex-shrink-0 rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-xl bg-[#064E3B]">
              <CourseIllustration slug={course.illustrationSlug} className="w-full h-36 sm:h-44" />
            </div>

            {/* Course Headline Info */}
            <div className="flex-1 text-center sm:text-left rtl:sm:text-right">
              <div className="flex flex-wrap items-center justify-center sm:justify-start rtl:sm:justify-start gap-2 mb-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#064E3B] text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{course.badge}</span>
                </span>
                {theme.popularTag && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D4AF37] text-[#17211D] text-xs font-bold tracking-wide shadow-sm">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{theme.popularTag}</span>
                  </span>
                )}
              </div>

              {/* Arabic Calligraphy Watermark/Subtitle */}
              {course.arabicTitle && (
                <div className="font-arabic text-xl sm:text-2xl text-[#D4AF37] font-bold mb-1">
                  {course.arabicTitle}
                </div>
              )}

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                {course.title}
              </h2>

              <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed">
                {course.summary}
              </p>

              {/* Quick Specs Pill Badges */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start rtl:sm:justify-start gap-2 mt-4 text-[11.5px]">
                <span className="px-3 py-1 rounded-lg bg-white/10 text-white border border-white/20 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {course.duration}
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-white border border-white/20 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {course.studentCategory}
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#064E3B] text-[#D4AF37] border border-[#D4AF37]/50 font-bold">
                  {isArabic ? 'حصص فردية مباشرة (1-لـ-1)' : isUrdu ? 'ون آن ون لائیو کلاسز' : '1-on-1 Live Mentorship'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7 text-left rtl:text-right flex-1 bg-white">
          {/* 1. Course Introduction (Expanded Description) */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#064E3B] mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#D4AF37]" />
              {isArabic ? 'التعريف بالدورة وأهدافها' : isUrdu ? 'کورس کا تعارف اور اہداف' : 'Course Introduction & Objectives'}
            </h3>
            <p className="text-sm text-[#53655D] leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* 2. Who This Course Is For */}
          <div className="p-5 rounded-2xl bg-[#faf9f5] border border-[#e5e3d7]">
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#064232] mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-600" />
              {isArabic ? 'الفئات المستهدفة لهذه الدورة' : isUrdu ? 'یہ کورس کن طلباء کے لیے ہے؟' : 'Who This Course Is For'}
            </h3>
            <ul className="space-y-2">
              {course.whoThisCourseIsFor.map((target, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#13241d]">
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-white text-[10px]"
                    style={{ backgroundColor: theme.accent }}
                  >
                    ✓
                  </span>
                  <span>{target}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. What Students Will Learn (Expanded List with Colorful Numbers) */}
          <div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#064232] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              {isArabic ? 'ماذا سيتعلم الطالب في الدورة؟' : isUrdu ? 'طلباء کیا سیکھیں گے؟' : 'What Students Will Learn'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.learningPoints.map((point, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-xl bg-[#faf9f5] border border-[#e5e3d7] hover:border-emerald-500/40 transition-colors flex items-start gap-2.5 text-xs sm:text-sm text-[#13241d]"
                >
                  <span
                    className="w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs"
                    style={{ backgroundColor: theme.accent }}
                  >
                    {index + 1}
                  </span>
                  <span className="leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Learning Pathway / Structured Milestones */}
          <div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#064232] mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-600" />
              {isArabic ? 'المسار التعليمي ومراحل الإتقان' : isUrdu ? 'تعلیمی مراحل اور سنگِ میل' : 'Structured Learning Pathway & Milestones'}
            </h3>
            <div className="relative pl-6 rtl:pl-0 rtl:pr-6 space-y-4 border-l-2 rtl:border-l-0 rtl:border-r-2 border-amber-400/50 my-2 ml-2 rtl:ml-0 rtl:mr-2">
              {course.learningPathway.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Step Dot */}
                  <div
                    className="absolute -left-[31px] rtl:-left-auto rtl:-right-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-white ring-2 shadow-xs"
                    style={{
                      backgroundColor: theme.accent,
                      borderColor: '#ffffff',
                      boxShadow: '0 0 0 2px #f59e0b'
                    }}
                  />

                  <div className="bg-white p-3.5 rounded-xl border border-[#e5e3d7] shadow-xs">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                        {item.stage}
                      </span>
                      <span className="text-xs font-bold text-[#064232]">— {item.title}</span>
                    </div>
                    <p className="text-xs text-[#4e655c] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Teacher Information & Schedule Note */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-[#faf9f5] border border-[#e5e3d7]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#064232] mb-1">
                <BadgeCheck className="w-4 h-4 text-emerald-600" />
                {isArabic ? 'معلومات المعلمين والمقرئين' : isUrdu ? 'اساتذہ کی معلومات' : 'Teacher Information'}
              </div>
              <p className="text-xs text-[#294236] leading-relaxed">
                {course.teacherInfo}. {isArabic ? 'نخبة من المعلمين والمعلمات الحاصلين على إجازات معتمدة وأسانيد متصلة.' : isUrdu ? 'مرد اور خواتین اساتذہ دونوں دستیاب ہیں جن کے پاس مستند اسناد اور اجازت موجود ہے۔' : 'Both male and female instructors available with verified Ijazah and English fluency.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#faf9f5] border border-[#e5e3d7]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#064232] mb-1">
                <Calendar className="w-4 h-4 text-amber-600" />
                {isArabic ? 'أوقات دراسية مرنة' : isUrdu ? 'لچکدار اوقات کار' : 'Flexible Schedule Note'}
              </div>
              <p className="text-xs text-[#294236] leading-relaxed">
                {course.timing}. {isArabic ? 'اختر الأيام والأوقات التي تناسبك بحرية (من حصتين إلى 5 حصص أسبوعياً).' : isUrdu ? 'اپنے پسندیدہ دن اور اوقات منتخب کریں۔' : 'Pick your preferred days, times, and lesson frequency (2 to 5 days per week).'}
              </p>
            </div>
          </div>

          {/* 6. Free Trial & Fee Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#022C22] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#D4AF37]/40 shadow-md">
            <div className="space-y-1 text-center sm:text-left rtl:sm:text-right">
              <div className="flex items-center justify-center sm:justify-start rtl:sm:justify-start gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                <Gift className="w-4 h-4" />
                <span>{isArabic ? '3 أيام تجربة مجانية كاملة' : isRtl ? '3 دن کا مفت ٹرائل' : '3-Day Free Trial Class'}</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100">
                {isArabic ? 'جرّب الحصة الفردية المباشرة مجاناً دون أي التزام أو بطاقة ائتمانية.' : isRtl ? 'بغیر کسی فیس کے لائیو کلاس کا تجربہ کریں۔ کسی کریڈٹ کارڈ کی ضرورت نہیں۔' : 'Experience the live 1-on-1 session before committing. No credit card required.'}
              </p>
              <div className="text-[11px] text-[#D4AF37]/90 pt-1 flex items-center justify-center sm:justify-start rtl:sm:justify-start gap-1">
                <DollarSign className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{course.feeInfo}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onSelectForTrial(course.id, course.title);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#17211D] bg-[#D4AF37] hover:bg-[#b89728] transition-all shadow-md flex items-center justify-center gap-1.5 flex-shrink-0 cursor-pointer"
            >
              <span>{isArabic ? 'احجز تجربة مجانية' : isUrdu ? 'مفت ٹرائل بک کریں' : 'Book Free Trial'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        </div>

        {/* Modal Footer: Action CTAs */}
        <div className="p-5 sm:p-6 bg-[#F8F7F1] border-t border-[#DDE5DF] flex-shrink-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Strong Enroll Now CTA */}
            <button
              id={`modal-enroll-${course.id}`}
              onClick={() => {
                onClose();
                onSelectForTrial(course.id, course.title);
              }}
              className="w-full py-3.5 px-5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#064E3B] hover:bg-[#022C22] border border-[#065F46] hover:border-[#D4AF37] active:scale-[0.98] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isArabic ? `سجل الآن في ${course.titleAr || course.title}` : isUrdu ? `ابھی ${course.title} میں داخلہ لیں` : `Enroll in ${course.title} Now`}</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37] rtl:rotate-180" />
            </button>

            {/* Dynamic WhatsApp Chat CTA */}
            <a
              id={`modal-whatsapp-${course.id}`}
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#1faa4f] active:scale-[0.98] shadow-md transition-all flex items-center justify-center gap-2 text-center"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{isArabic ? 'تواصل عبر واتساب' : isUrdu ? 'واٹس ایپ پر رابطہ کریں' : 'Chat on WhatsApp'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
