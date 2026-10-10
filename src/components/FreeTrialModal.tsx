import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { SAFIR_CONTACT } from '../data/safirData';
import { useLanguage } from '../context/LanguageContext';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourseId?: string;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({
  isOpen,
  onClose,
  initialCourseId
}) => {
  const { t, isRtl, isUrdu, isArabic } = useLanguage();
  const [studentName, setStudentName] = useState('');
  const [learnerType, setLearnerType] = useState<'child' | 'adult' | 'beginner'>('child');
  const [courseInterest, setCourseInterest] = useState<string>(initialCourseId || 'nazra-quran');
  const [teacherPreference, setTeacherPreference] = useState<'female' | 'male' | 'no-preference'>('no-preference');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [timezone, setTimezone] = useState('US/Eastern');
  const [preferredDays, setPreferredDays] = useState('Weekdays (Mon-Thu)');
  const [currentLevel, setCurrentLevel] = useState('Complete Beginner (Learning letters)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialCourseId) {
      setCourseInterest(initialCourseId);
    }
  }, [initialCourseId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const text = `Assalamu Alaikum Noor Ul Huda Online Quran Academy!
I would like to book a Free Trial Class.

*Details:*
- Student Name: ${studentName || 'Not specified'}
- Learner Type: ${learnerType.toUpperCase()}
- Course: ${COURSES_DATA.find((c) => c.id === courseInterest)?.title || courseInterest}
- Teacher Preference: ${
      teacherPreference === 'female'
        ? 'Female Ustadhah'
        : teacherPreference === 'male'
        ? 'Male Teacher'
        : 'No Preference'
    }
- Current Level: ${currentLevel}
- Preferred Days: ${preferredDays}
- Timezone: ${timezone}
- Phone/WhatsApp: ${phoneNumber || 'Not specified'}
${notes ? `- Additional Notes: ${notes}` : ''}`;

    return `https://wa.me/${SAFIR_CONTACT.cleanPhone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      id="free-trial-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="free-trial-modal-container"
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#e5e3d7] overflow-hidden my-8 text-left rtl:text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#064232] text-white p-6 sm:p-7 relative">
          <button
            id="close-trial-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 rtl:right-auto rtl:left-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block px-3 py-1 rounded-full bg-[#c69b32] text-[#064232] text-xs font-bold uppercase tracking-wider mb-2">
            {t.trialModal.noCardNeeded}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
            {t.trialModal.title}
          </h3>
          <p className="text-emerald-100 text-xs sm:text-sm">
            {t.trialModal.subtitle}
          </p>
        </div>

        {/* Modal Content */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 max-h-[70vh] overflow-y-auto space-y-5">
            {/* Learner Type Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#064232] mb-2">
                {isRtl ? 'کلاس کس کے لیے ہے؟' : 'Who is the class for?'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'child', label: isRtl ? 'بچے (عمر 4-13)' : 'Child (Age 4-13)' },
                  { id: 'adult', label: isRtl ? 'بڑے / نوجوان' : 'Adult / Teen' },
                  { id: 'beginner', label: isRtl ? 'ابتدائی (زیرو لیول)' : 'Beginner (Zero Level)' }
                ].map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setLearnerType(item.id as any)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      learnerType === item.id
                        ? 'bg-[#064232] text-white border-[#064232] shadow-sm'
                        : 'bg-[#faf9f5] text-[#4e655c] border-[#e5e3d7] hover:bg-[#f1efe8]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Student Full Name */}
            <div>
              <label htmlFor="trial-student-name" className="block text-xs font-semibold text-[#13241d] mb-1">
                {t.trialModal.fullName} *
              </label>
              <input
                id="trial-student-name"
                type="text"
                required
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder={isRtl ? 'مثال: ابراہیم خان' : 'e.g. Ibrahim Khan or Sarah Jenkins'}
                className="w-full px-4 py-2.5 rounded-xl border border-[#e5e3d7] text-sm focus:outline-none focus:border-[#064232] bg-[#faf9f5]"
              />
            </div>

            {/* Course Interest */}
            <div>
              <label htmlFor="trial-course-select" className="block text-xs font-semibold text-[#13241d] mb-1">
                {t.trialModal.course} *
              </label>
              <select
                id="trial-course-select"
                value={courseInterest}
                onChange={(e) => setCourseInterest(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#e5e3d7] text-sm focus:outline-none focus:border-[#064232] bg-[#faf9f5]"
              >
                {COURSES_DATA.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.title} {course.arabicTitle ? `(${course.arabicTitle})` : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Teacher Preference */}
            <div>
              <label className="block text-xs font-semibold text-[#13241d] mb-1">
                {isRtl ? 'استاد کی ترجیح' : 'Teacher Preference'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'no-preference', label: isRtl ? 'کوئی ترجیح نہیں' : 'No Preference' },
                  { id: 'female', label: isRtl ? 'خاتون معلمہ (استاذہ)' : 'Female Ustadhah' },
                  { id: 'male', label: isRtl ? 'مرد قاری / استاد' : 'Male Teacher' }
                ].map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setTeacherPreference(item.id as any)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                      teacherPreference === item.id
                        ? 'bg-[#064232] text-white border-[#064232]'
                        : 'bg-[#faf9f5] text-[#4e655c] border-[#e5e3d7]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact WhatsApp / Phone */}
            <div>
              <label htmlFor="trial-phone" className="block text-xs font-semibold text-[#13241d] mb-1">
                {t.trialModal.whatsapp} *
              </label>
              <input
                id="trial-phone"
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder={isArabic ? 'مثال: 923130958451+' : isUrdu ? 'مثال: 923130958451+' : '+1 (555) 000-0000 or +44 7000 000000'}
                className="w-full px-4 py-2.5 rounded-xl border border-[#e5e3d7] text-sm focus:outline-none focus:border-[#064232] bg-[#faf9f5]"
              />
            </div>

            {/* Preferred Days / Times */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#13241d] mb-1">
                  {isArabic ? 'المستوى الحالي في تلاوة القرآن' : isUrdu ? 'موجودہ سطح' : 'Current Quran Level'}
                </label>
                <select
                  value={currentLevel}
                  onChange={(e) => setCurrentLevel(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#e5e3d7] text-xs focus:outline-none focus:border-[#064232] bg-[#faf9f5]"
                >
                  <option value="Complete Beginner (Learning letters)">{isArabic ? 'مبتدئ تماماً (تعلم الحروف والقاعدة)' : isUrdu ? 'ابتدائی (حروف کی پہچان)' : 'Complete Beginner (Learning letters)'}</option>
                  <option value="Can read slowly with mistakes">{isArabic ? 'قراءة متأنية مع بعض الأخطاء' : isUrdu ? 'آہستہ ناظرہ (غلطیوں کے ساتھ)' : 'Can read slowly with mistakes'}</option>
                  <option value="Fluent reader wanting Tajweed refinement">{isArabic ? 'تلاوة جيدة مع الرغبة في إتقان التجويد' : isUrdu ? 'روانی سے پڑھ سکتے ہیں (تجوید اصلاح)' : 'Fluent reader wanting Tajweed refinement'}</option>
                  <option value="Memorization / Hifz Candidate">{isArabic ? 'الرغبة في حفظ القرآن الكريم' : isUrdu ? 'حفظ القرآن کا امیدوار' : 'Memorization / Hifz Candidate'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#13241d] mb-1">
                  {t.trialModal.preferredTime}
                </label>
                <input
                  type="text"
                  value={preferredDays}
                  onChange={(e) => setPreferredDays(e.target.value)}
                  placeholder={isArabic ? 'مثال: السبت، الإثنين، الأربعاء أو عطلة نهاية الأسبوع' : isUrdu ? 'مثال: پیر، بدھ، جمعہ یا اختتام ہفتہ' : 'e.g. Mon, Wed, Fri or Weekends'}
                  className="w-full px-3 py-2 rounded-xl border border-[#e5e3d7] text-xs focus:outline-none focus:border-[#064232] bg-[#faf9f5]"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-[#e5e3d7] flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                id="submit-trial-request-btn"
                className="flex-1 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-[#064232] bg-gradient-to-r from-[#e6c564] to-[#c69b32] hover:brightness-105 active:scale-95 shadow-md flex items-center justify-center gap-2"
              >
                <span>{t.trialModal.submit}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <a
                id="direct-whatsapp-booking-btn"
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isArabic ? 'الحجز السريع عبر واتساب' : isUrdu ? 'واٹس ایپ پر فوری بکنگ' : 'Book via WhatsApp'}</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#4e655c]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#064232]" />
              <span>{isArabic ? '100% مجاناً • دون أي بطاقة ائتمانية • أوقات مرنة' : isUrdu ? '100% مفت • کوئی کریڈٹ کارڈ مطلوب نہیں • لچکدار اوقات' : 'Zero commitment. No automatic billing. Complete peace of mind.'}</span>
            </div>
          </form>
        ) : (
          /* Confirmation State */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#064232]/10 text-[#064232] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-[#064232]" />
            </div>

            <h4 className="font-serif text-2xl font-bold text-[#064232]">
              {isArabic ? `جزاكم الله خيراً، ${studentName || 'يا طالب العلم'}!` : isUrdu ? `جزاکم اللہ خیراً، ${studentName || 'طالب علم'}!` : `JazakAllahu Khairan, ${studentName || 'Learner'}!`}
            </h4>

            <p className="text-sm text-[#4e655c] max-w-md mx-auto leading-relaxed">
              {t.trialModal.successDesc}
            </p>

            <div className="p-4 rounded-2xl bg-[#faf9f5] border border-[#e5e3d7] max-w-md mx-auto text-xs text-left rtl:text-right space-y-2 text-[#13241d]">
              <div><strong>{t.trialModal.fullName}:</strong> {studentName}</div>
              <div><strong>{isArabic ? 'تفضيل نوع المعلم:' : isUrdu ? 'منتخب استاد کی قسم:' : 'Assigned Teacher Type:'}</strong> {teacherPreference === 'female' ? (isArabic ? 'معلمة فاضلة' : isUrdu ? 'خاتون استاذہ' : 'Female Teacher (Ustadhah)') : teacherPreference === 'male' ? (isArabic ? 'معلم / مقرئ' : isUrdu ? 'مرد قاری' : 'Male Teacher') : (isArabic ? 'أفضل معلم متاح' : isUrdu ? 'بہترین دستیاب استاد' : 'Best Matched Faculty')}</div>
              <div><strong>{isArabic ? 'واتساب الأكاديمية:' : isUrdu ? 'اکیڈمی واٹس ایپ:' : 'Academy WhatsApp:'}</strong> +92 313 0958451</div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isArabic ? 'فتح واتساب الآن للتأكيد الفوري' : isUrdu ? 'واٹس ایپ پر فوری رابطہ کریں' : 'Open in WhatsApp Now to Fast-Track'}</span>
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-5 py-3 rounded-xl font-medium text-xs sm:text-sm text-[#4e655c] hover:bg-black/5"
              >
                {t.trialModal.close}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
