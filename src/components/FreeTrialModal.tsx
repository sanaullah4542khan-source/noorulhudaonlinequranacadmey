import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, UserCheck, AlertCircle, Loader2 } from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { SAFIR_CONTACT } from '../data/safirData';
import { useLanguage } from '../context/LanguageContext';
import { submitTrialRequest } from '../services/apiService';

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
  const [parentName, setParentName] = useState('');
  const [learnerType, setLearnerType] = useState<'child' | 'adult' | 'beginner'>('child');
  const [courseInterest, setCourseInterest] = useState<string>(initialCourseId || 'nazra-quran');
  const [teacherPreference, setTeacherPreference] = useState<'female' | 'male' | 'no-preference'>('no-preference');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [preferredTime, setPreferredTime] = useState('Evening (6:00 PM - 8:00 PM)');
  const [country, setCountry] = useState('Pakistan (PKT)');
  const [timezone, setTimezone] = useState('Asia/Karachi');
  const [preferredDays, setPreferredDays] = useState('Weekdays (Mon-Thu)');
  const [currentLevel, setCurrentLevel] = useState('Complete Beginner (Learning letters)');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialCourseId) {
      setCourseInterest(initialCourseId);
    }
  }, [initialCourseId]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !phoneNumber.trim()) {
      setErrorMessage(
        isArabic
          ? 'يرجى إدخال اسم الطالب ورقم الواتساب / الهاتف'
          : isUrdu
          ? 'براہ کرم طالب علم کا نام اور واٹس ایپ نمبر درج کریں'
          : 'Please provide student name and WhatsApp / phone number.'
      );
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage(null);

      const matchedCourse = COURSES_DATA.find((c) => c.id === courseInterest);
      const courseTitle = matchedCourse ? matchedCourse.title : courseInterest;

      await submitTrialRequest({
        studentName: studentName.trim(),
        parentName: parentName.trim() || undefined,
        learnerType,
        courseInterest,
        courseTitle,
        teacherPreference,
        phoneNumber: phoneNumber.trim(),
        email: email.trim() || undefined,
        currentLevel,
        preferredDays,
        preferredTime: preferredTime.trim() || undefined,
        country: country.trim() || undefined,
        timezone,
        notes: notes.trim() || undefined
      });

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Free trial submission error:', err);
      setErrorMessage(
        err.message ||
        (isArabic
          ? 'تعذر حجز التجربة في الوقت الحالي. يرجى المحاولة مجدداً أو الحجز السريع عبر واتساب.'
          : isUrdu
          ? 'ٹرائل بکنگ میں خرابی پیش آئی، براہ کرم دوبارہ کوشش کریں یا واٹس ایپ پر رابطہ کریں۔'
          : 'Failed to submit free trial booking. Please retry or book directly via WhatsApp.')
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppBookingUrl = () => {
    const text = `Assalamu Alaikum Noor Ul Huda Online Quran Academy!
I would like to book a Free Trial Class.

*Details:*
- Student Name: ${studentName || 'Not specified'}
${parentName ? `- Parent/Guardian: ${parentName}` : ''}
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
- Preferred Time: ${preferredTime}
- Preferred Days: ${preferredDays}
- Country / Time Zone: ${country} (${timezone})
- Phone/WhatsApp: ${phoneNumber || 'Not specified'}
${email ? `- Email: ${email}` : ''}
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
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#DDE5DF] overflow-hidden my-8 text-left rtl:text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#022C22] text-white p-6 sm:p-7 relative border-b border-[#065F46]">
          <button
            id="close-trial-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 rtl:right-auto rtl:left-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block px-3 py-1 rounded-full bg-[#D4AF37] text-[#064E3B] text-xs font-bold uppercase tracking-wider mb-2">
            {t.trialModal.noCardNeeded}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
            {t.trialModal.title}
          </h3>
          <p className="text-[#DDE5DF] text-xs sm:text-sm">
            {t.trialModal.subtitle}
          </p>
        </div>

        {/* Modal Content */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 max-h-[70vh] overflow-y-auto space-y-5">
            {/* Error Banner */}
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="font-semibold block">{errorMessage}</span>
                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-red-900 underline font-semibold mt-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Or book directly via WhatsApp (+92 313 0958451)</span>
                  </a>
                </div>
              </div>
            )}

            {/* Learner Type Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#064E3B] mb-2">
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
                    disabled={isSubmitting}
                    onClick={() => setLearnerType(item.id as any)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      learnerType === item.id
                        ? 'bg-[#064E3B] text-white border-[#064E3B] shadow-sm'
                        : 'bg-[#F8F7F1] text-[#17211D]/70 border-[#DDE5DF] hover:bg-white hover:text-[#064E3B]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Student & Parent Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="trial-student-name" className="block text-xs font-semibold text-[#17211D] mb-1">
                  {t.trialModal.fullName} *
                </label>
                <input
                  id="trial-student-name"
                  type="text"
                  required
                  disabled={isSubmitting}
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder={isRtl ? 'مثال: ابراہیم خان' : 'e.g. Ibrahim Khan'}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DDE5DF] text-sm focus:outline-none focus:border-[#064E3B] bg-[#F8F7F1] text-[#17211D] disabled:opacity-60"
                />
              </div>

              <div>
                <label htmlFor="trial-parent-name" className="block text-xs font-semibold text-[#17211D] mb-1">
                  {isArabic ? 'اسم ولي الأمر (اختياري للأطفال)' : isUrdu ? 'والد / سرپرست کا نام (اختیاری)' : 'Parent / Guardian Name'}
                </label>
                <input
                  id="trial-parent-name"
                  type="text"
                  disabled={isSubmitting}
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder={isRtl ? 'مثال: محمد خان' : 'e.g. Muhammad Khan'}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DDE5DF] text-sm focus:outline-none focus:border-[#064E3B] bg-[#F8F7F1] text-[#17211D] disabled:opacity-60"
                />
              </div>
            </div>

            {/* Course Interest */}
            <div>
              <label htmlFor="trial-course-select" className="block text-xs font-semibold text-[#17211D] mb-1">
                {t.trialModal.course} *
              </label>
              <select
                id="trial-course-select"
                disabled={isSubmitting}
                value={courseInterest}
                onChange={(e) => setCourseInterest(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#DDE5DF] text-sm focus:outline-none focus:border-[#064E3B] bg-[#F8F7F1] text-[#17211D] disabled:opacity-60"
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
                    disabled={isSubmitting}
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

            {/* Contact WhatsApp / Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="trial-phone" className="block text-xs font-semibold text-[#13241d] mb-1">
                  {t.trialModal.whatsapp} *
                </label>
                <input
                  id="trial-phone"
                  type="tel"
                  required
                  disabled={isSubmitting}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder={isArabic ? 'مثال: 923130958451+' : isUrdu ? 'مثال: 923130958451+' : '+92 313 0958451 or +1 555-000-0000'}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e5e3d7] text-sm focus:outline-none focus:border-[#064232] bg-[#faf9f5] disabled:opacity-60"
                  dir="ltr"
                />
              </div>

              <div>
                <label htmlFor="trial-email" className="block text-xs font-semibold text-[#13241d] mb-1">
                  {t.trialModal.email}
                </label>
                <input
                  id="trial-email"
                  type="email"
                  disabled={isSubmitting}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="parent@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e5e3d7] text-sm focus:outline-none focus:border-[#064232] bg-[#faf9f5] disabled:opacity-60"
                  dir="ltr"
                />
              </div>
            </div>

            {/* Preferred Time Slot & Country / Timezone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="trial-preferred-time" className="block text-xs font-semibold text-[#13241d] mb-1">
                  {t.trialModal.preferredTime} *
                </label>
                <input
                  id="trial-preferred-time"
                  type="text"
                  disabled={isSubmitting}
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  placeholder="e.g. Evening (6:00 PM - 8:00 PM) or After Maghrib"
                  className="w-full px-3 py-2 rounded-xl border border-[#e5e3d7] text-xs focus:outline-none focus:border-[#064232] bg-[#faf9f5] disabled:opacity-60"
                />
              </div>

              <div>
                <label htmlFor="trial-country" className="block text-xs font-semibold text-[#13241d] mb-1">
                  {isArabic ? 'الدولة / المنطقة الزمنية' : isUrdu ? 'ملک اور ٹائم زون' : 'Country / Time Zone'} *
                </label>
                <input
                  id="trial-country"
                  type="text"
                  disabled={isSubmitting}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="e.g. Pakistan (PKT), USA (EST), UK (GMT), UAE (GST)"
                  className="w-full px-3 py-2 rounded-xl border border-[#e5e3d7] text-xs focus:outline-none focus:border-[#064232] bg-[#faf9f5] disabled:opacity-60"
                />
              </div>
            </div>

            {/* Quran Level & Preferred Days */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#13241d] mb-1">
                  {isArabic ? 'المستوى الحالي في تلاوة القرآن' : isUrdu ? 'موجودہ سطح' : 'Current Quran Level'}
                </label>
                <select
                  disabled={isSubmitting}
                  value={currentLevel}
                  onChange={(e) => setCurrentLevel(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#e5e3d7] text-xs focus:outline-none focus:border-[#064232] bg-[#faf9f5] disabled:opacity-60"
                >
                  <option value="Complete Beginner (Learning letters)">{isArabic ? 'مبتدئ تماماً (تعلم الحروف والقاعدة)' : isUrdu ? 'ابتدائی (حروف کی پہچان)' : 'Complete Beginner (Learning letters)'}</option>
                  <option value="Can read slowly with mistakes">{isArabic ? 'قراءة متأنية مع بعض الأخطاء' : isUrdu ? 'آہستہ ناظرہ (غلطیوں کے ساتھ)' : 'Can read slowly with mistakes'}</option>
                  <option value="Fluent reader wanting Tajweed refinement">{isArabic ? 'تلاوة جيدة مع الرغبة في إتقان التجويد' : isUrdu ? 'روانی سے پڑھ سکتے ہیں (تجوید اصلاح)' : 'Fluent reader wanting Tajweed refinement'}</option>
                  <option value="Memorization / Hifz Candidate">{isArabic ? 'الرغبة في حفظ القرآن الكريم' : isUrdu ? 'حفظ القرآن کا امیدوار' : 'Memorization / Hifz Candidate'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#13241d] mb-1">
                  {isArabic ? 'الأيام المفضلة' : isUrdu ? 'پسندیدہ دن' : 'Preferred Class Days'}
                </label>
                <input
                  type="text"
                  disabled={isSubmitting}
                  value={preferredDays}
                  onChange={(e) => setPreferredDays(e.target.value)}
                  placeholder={isArabic ? 'مثال: السبت، الإثنين، الأربعاء أو عطلة نهاية الأسبوع' : isUrdu ? 'مثال: پیر، بدھ، جمعہ یا اختتام ہفتہ' : 'e.g. Mon-Thu or Weekends'}
                  className="w-full px-3 py-2 rounded-xl border border-[#e5e3d7] text-xs focus:outline-none focus:border-[#064232] bg-[#faf9f5] disabled:opacity-60"
                />
              </div>
            </div>

            {/* Optional Notes */}
            <div>
              <label htmlFor="trial-notes" className="block text-xs font-semibold text-[#13241d] mb-1">
                {isArabic ? 'ملاحظات إضافية أو وقت الحصة المفضل' : isUrdu ? 'اضافی نوٹس یا پسندیدہ وقت' : 'Special Learning Goals / Notes (Optional)'}
              </label>
              <textarea
                id="trial-notes"
                rows={2}
                disabled={isSubmitting}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={isArabic ? 'أي تفاصيل عن الطالب أو الأوقات المناسبة...' : isUrdu ? 'کوئی خاص ہدف یا اوقات کی تفصیل...' : 'Any specific goals, child age, or preferred time slot...'}
                className="w-full px-3 py-2 rounded-xl border border-[#DDE5DF] text-xs focus:outline-none focus:border-[#064E3B] bg-[#F8F7F1] text-[#17211D] disabled:opacity-60"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-[#DDE5DF] flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                id="submit-trial-request-btn"
                className="flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#064E3B] hover:bg-[#065F46] border border-[#D4AF37]/50 active:scale-95 shadow-md flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#D4AF37]" />
                    <span>{isArabic ? 'جاري حجز التجربة...' : isUrdu ? 'ٹرائل محفوظ ہو رہا ہے...' : 'Reserving Free Trial...'}</span>
                  </>
                ) : (
                  <>
                    <span>{t.trialModal.submit}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180 text-[#D4AF37]" />
                  </>
                )}
              </button>

              <a
                id="direct-whatsapp-booking-btn"
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isArabic ? 'الحجز السريع عبر واتساب' : isUrdu ? 'واٹس ایپ پر فوری بکنگ' : 'Book via WhatsApp'}</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#17211D]/70">
              <ShieldCheck className="w-3.5 h-3.5 text-[#064E3B]" />
              <span>{isArabic ? '100% مجاناً • دون أي بطاقة ائتمانية • أوقات مرنة' : isUrdu ? '100% مفت • کوئی کریڈٹ کارڈ مطلوب نہیں • لچکدار اوقات' : 'Zero commitment. No automatic billing. Complete peace of mind.'}</span>
            </div>
          </form>
        ) : (
          /* Confirmation State */
          <div className="p-8 text-center space-y-5 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#064E3B]/10 text-[#064E3B] flex items-center justify-center mx-auto shadow-sm border border-[#064E3B]/20">
              <CheckCircle2 className="w-10 h-10 text-[#064E3B]" />
            </div>

            <h4 className="font-serif text-2xl font-bold text-[#064E3B]">
              {isArabic ? `جزاكم الله خيراً، ${studentName || 'يا طالب العلم'}!` : isUrdu ? `جزاکم اللہ خیراً، ${studentName || 'طالب علم'}!` : `JazakAllahu Khairan, ${studentName || 'Learner'}!`}
            </h4>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#064E3B]/10 text-[#064E3B] text-xs font-semibold border border-[#064E3B]/20">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Free Trial Delivered to noorulhudaacademy206@gmail.com</span>
            </div>

            <p className="text-sm text-[#17211D]/80 max-w-md mx-auto leading-relaxed">
              {t.trialModal.successDesc}
            </p>

            <div className="p-4 rounded-2xl bg-[#F8F7F1] border border-[#DDE5DF] max-w-md mx-auto text-xs text-left rtl:text-right space-y-2 text-[#17211D]">
              <div><strong>{t.trialModal.fullName}:</strong> {studentName} {parentName ? `(Parent: ${parentName})` : ''}</div>
              <div><strong>{isArabic ? 'الدورة المطلوبة:' : isUrdu ? 'منتخب کورس:' : 'Requested Course:'}</strong> {COURSES_DATA.find((c) => c.id === courseInterest)?.title || courseInterest}</div>
              <div><strong>{isArabic ? 'وقت الحصة المفضل:' : isUrdu ? 'پسندیدہ وقت:' : 'Preferred Time:'}</strong> {preferredTime}</div>
              <div><strong>{isArabic ? 'الدولة / المنطقة الزمنية:' : isUrdu ? 'ملک اور ٹائم زون:' : 'Country / Time Zone:'}</strong> {country}</div>
              <div><strong>{isArabic ? 'تفضيل نوع المعلم:' : isUrdu ? 'منتخب استاد کی قسم:' : 'Assigned Teacher Type:'}</strong> {teacherPreference === 'female' ? (isArabic ? 'معلمة فاضلة' : isUrdu ? 'خاتون استاذہ' : 'Female Teacher (Ustadhah)') : teacherPreference === 'male' ? (isArabic ? 'معلم / مقرئ' : isUrdu ? 'مرد قاری' : 'Male Teacher') : (isArabic ? 'أفضل معلم متاح' : isUrdu ? 'بہترین دستیاب استاد' : 'Best Matched Faculty')}</div>
              <div><strong>{isArabic ? 'واتساب الأكاديمية:' : isUrdu ? 'اکیڈمی واٹس ایپ:' : 'Academy WhatsApp:'}</strong> +92 313 0958451</div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isArabic ? 'فتح واتساب الآن للتأكيد الفوري' : isUrdu ? 'واٹس ایپ پر فوری رابطہ کریں' : 'Open in WhatsApp Now to Fast-Track'}</span>
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-[#064E3B] hover:bg-[#064E3B]/10 cursor-pointer border border-[#DDE5DF]"
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
