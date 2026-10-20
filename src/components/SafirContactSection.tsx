import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Facebook, Instagram, Linkedin, MessageCircle, Copy, Check, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
import { SAFIR_CONTACT, getSafirWhatsAppUrl } from '../data/safirData';
import { COURSES_DATA } from '../data/coursesData';
import { useLanguage } from '../context/LanguageContext';
import { submitContactInquiry } from '../services/apiService';

export const SafirContactSection: React.FC = () => {
  const { t, isRtl, isArabic, isUrdu } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Quran Recitation (Nazra)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage(
        isArabic
          ? 'يرجى إدخال الاسم ورقم الهاتف أو الواتساب'
          : isUrdu
          ? 'براہ کرم اپنا نام اور فون/واٹس ایپ نمبر درج کریں'
          : 'Please provide both your name and phone/WhatsApp number.'
      );
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage(null);

      await submitContactInquiry({
        name: formData.name.trim(),
        email: formData.email.trim() || undefined,
        phone: formData.phone.trim(),
        course: formData.course,
        message: formData.message.trim() || undefined
      });

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setErrorMessage(
        err.message ||
        (isArabic
          ? 'تعذر إرسال الرسالة في الوقت الحالي. يرجى المحاولة مرة أخرى أو مراسلتنا فوراً عبر واتساب.'
          : isUrdu
          ? 'پیغام بھیجنے میں خرابی پیش آئی، براہ کرم دوبارہ کوشش کریں یا واٹس ایپ پر رابطہ کریں۔'
          : 'Failed to deliver message to our admissions desk. Please retry or contact us directly on WhatsApp.')
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-[#F8F7F1] border-b border-[#DDE5DF]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-heading font-semibold text-[#064E3B] tracking-tight mb-2">
            {t.contact.title}
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full mb-3"></div>
          <p className="font-body font-normal text-xs sm:text-base text-[#53655D]">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-8 border border-[#DDE5DF] shadow-sm text-left rtl:text-right">
            <h3 className="text-lg sm:text-xl font-heading font-semibold text-[#064E3B] mb-1.5 sm:mb-2">
              {t.contact.infoTitle}
            </h3>
            <p className="font-body font-normal text-xs sm:text-sm text-[#53655D] mb-5 sm:mb-6">
              {t.contact.infoDesc}
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {/* Official Academy Email */}
              <div className="flex flex-col gap-2 p-3.5 sm:p-4 rounded-2xl bg-[#064E3B]/5 border border-[#064E3B]/20 transition-all hover:bg-[#064E3B]/10">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5 sm:gap-3.5 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#064E3B] text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      <Mail className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 flex-wrap">
                        <span className="block text-[10.5px] sm:text-[11px] font-bold text-[#064E3B] uppercase tracking-wider">
                          {isArabic ? 'البريد الرسمي للأكاديمية' : isUrdu ? 'سرکاری اکیڈمی ای میل' : 'Official Academy Email'}
                        </span>
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#064E3B] text-[#D4AF37] text-[9.5px] font-bold border border-[#D4AF37]/50 tracking-tight shadow-sm">
                          <ShieldCheck className="w-2.5 h-2.5 text-[#D4AF37]" />
                          OFFICIAL
                        </span>
                      </div>
                      <a
                        href={`mailto:${SAFIR_CONTACT.email}`}
                        className="block text-xs sm:text-sm font-bold text-[#064E3B] hover:text-[#022C22] hover:underline transition-colors break-all"
                        dir="ltr"
                      >
                        {SAFIR_CONTACT.email}
                      </a>
                      {SAFIR_CONTACT.secondaryEmail && (
                        <div className="mt-1 pt-1 border-t border-[#064E3B]/15 flex items-center gap-1.5 text-[10.5px] text-[#53655D]">
                          <span className="font-semibold text-[#17211D]">{isArabic ? 'ثانوي:' : isUrdu ? 'ثانوی:' : 'Secondary:'}</span>
                          <a
                            href={`mailto:${SAFIR_CONTACT.secondaryEmail}`}
                            className="font-medium text-[#53655D] hover:text-[#064E3B] transition-colors break-all"
                            dir="ltr"
                          >
                            {SAFIR_CONTACT.secondaryEmail}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Copy Email Button */}
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(SAFIR_CONTACT.email);
                      setCopiedEmail(true);
                      setTimeout(() => setCopiedEmail(false), 2500);
                    }}
                    className="w-full sm:w-auto p-1.5 sm:p-2 px-2.5 rounded-xl bg-white border border-[#DDE5DF] text-[#064E3B] hover:bg-[#064E3B]/10 transition-colors shadow-sm flex items-center justify-center gap-1.5 text-xs font-semibold flex-shrink-0 cursor-pointer active:scale-95"
                    title="Copy official email"
                    aria-label="Copy official email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-[11px] text-emerald-700 font-bold">{isArabic ? 'تم النسخ' : isUrdu ? 'کاپی ہوگیا' : 'Copied'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#064E3B]" />
                        <span className="text-[11px] font-semibold">{isArabic ? 'نسخ' : isUrdu ? 'کاپی' : 'Copy'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <a
                href={`tel:${SAFIR_CONTACT.cleanPhone}`}
                className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-[#F8F7F1] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#064E3B]/10 border border-[#064E3B]/20 flex items-center justify-center text-[#064E3B] group-hover:bg-[#064E3B] group-hover:text-white transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-[#53655D] uppercase tracking-wider">
                    {t.contact.phoneLabel}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#17211D] group-hover:text-[#064E3B]" dir="ltr">
                    {SAFIR_CONTACT.phone}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-[#f0fdf4] border border-[#dcfce7] flex items-center justify-center text-[#064232] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                    {t.contact.campusLabel}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 leading-snug">
                    {isArabic ? 'أكاديمية إلكترونية - نخدم الطلاب حول العالم' : isUrdu ? 'آن لائن اکیڈمی - عالمی سطح پر طلباء کی خدمت' : SAFIR_CONTACT.address}
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-[#f0fdf4] border border-[#dcfce7] flex items-center justify-center text-[#064232] flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                    {t.contact.hoursLabel}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 leading-snug">
                    {isArabic ? 'متاح 24 ساعة / 7 أيام أسبوعياً' : isUrdu ? '24 گھنٹے / 7 دن کھلا ہے' : '24/7 Flexible Timings Worldwide'}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <span className="block text-xs font-semibold text-[#53655D] mb-3">
                {t.contact.followLabel}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={SAFIR_CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#064E3B]/10 text-[#064E3B] hover:bg-[#064E3B] hover:text-[#D4AF37] flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={SAFIR_CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#064E3B]/10 text-[#064E3B] hover:bg-[#064E3B] hover:text-[#D4AF37] flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={SAFIR_CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#064E3B]/10 text-[#064E3B] hover:bg-[#064E3B] hover:text-[#D4AF37] flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={getSafirWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#064E3B]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Send us a Message Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#DDE5DF] shadow-sm text-left rtl:text-right">
            <h3 className="text-xl font-heading font-semibold text-[#064E3B] mb-1">
              {t.contact.formTitle}
            </h3>
            <p className="font-body font-normal text-xs sm:text-sm text-[#53655D] mb-6">
              {t.contact.formSubtitle}
            </p>

            {isSubmitted ? (
              <div className="bg-[#064E3B]/5 border border-[#064E3B]/20 rounded-2xl p-6 sm:p-8 text-center animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#064E3B] text-[#D4AF37] flex items-center justify-center mx-auto mb-3.5 shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h4 className="text-xl font-heading font-bold text-[#064E3B] mb-2">
                  {isArabic ? 'جزاكم الله خيراً! تم استلام رسالتكم بنجاح' : isUrdu ? 'جزاک اللہ خیراً! آپ کا پیغام موصول ہو گیا' : 'Jazakallah Khair! Message Delivered'}
                </h4>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#064E3B]/10 text-[#064E3B] text-xs font-semibold mb-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#064E3B]" />
                  <span>Delivered to noorulhudaacademy206@gmail.com</span>
                </div>
                <p className="font-body font-normal text-xs sm:text-sm text-[#17211D] max-w-md mx-auto mb-5 leading-relaxed">
                  {isArabic ? (
                    <>شكراً لكم، <strong>{formData.name}</strong>. تلقينا استفساركم بخصوص <strong>{formData.course}</strong> وسنرد عليكم سريعاً على الرقم {formData.phone} أو عبر البريد الإلكتروني.</>
                  ) : isUrdu ? (
                    <>شکریہ، <strong>{formData.name}</strong>۔ ہم نے کورس <strong>{formData.course}</strong> کے متعلق آپ کی تفصیلات وصول کر لی ہیں۔ ہماری ٹیم جلد ہی آپ کے نمبر {formData.phone} پر رابطہ کرے گی۔</>
                  ) : (
                    <>Thank you, <strong>{formData.name}</strong>. We have received your inquiry regarding <strong>{formData.course}</strong>. Our academic team will contact you on {formData.phone} shortly.</>
                  )}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={getSafirWhatsAppUrl(`Assalamu Alaikum, I just submitted the contact form for ${formData.course} (${formData.name})`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs font-nav font-semibold rounded-xl shadow-md hover:bg-[#20ba59] transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{isArabic ? 'فتح المحادثة عبر واتساب' : isUrdu ? 'واٹس ایپ پر فوری تصدیق کریں' : 'Chat Directly on WhatsApp'}</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', course: 'Quran Recitation (Nazra)', message: '' });
                    }}
                    className="px-4 py-2.5 text-xs font-nav font-medium text-[#17211D] hover:text-[#064E3B] border border-[#DDE5DF] hover:bg-[#F8F7F1] rounded-xl cursor-pointer transition-colors"
                  >
                    {isArabic ? 'إرسال رسالة أخرى' : isUrdu ? 'نیا پیغام بھیجیں' : 'Send Another Note'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-semibold block">{errorMessage}</span>
                      <a
                        href={getSafirWhatsAppUrl(`Assalamu Alaikum, I tried submitting the contact form on your website for ${formData.course}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-red-900 underline font-semibold mt-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Or click here to message us directly on WhatsApp (+92 313 0958451)</span>
                      </a>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-nav font-medium text-[#17211D] mb-1">
                      {t.contact.fullNameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder={isArabic ? 'مثال: أحمد خان' : isUrdu ? 'جیسے: احمد خان' : 'e.g. Ahmad Khan'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE5DF] bg-[#F8F7F1] text-xs sm:text-sm font-body font-normal text-[#17211D] focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] disabled:opacity-60"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-nav font-medium text-[#17211D] mb-1">
                      {t.contact.emailInputLabel}
                    </label>
                    <input
                      type="email"
                      disabled={isSubmitting}
                      placeholder={isArabic ? 'مثال: ahmad@example.com' : isUrdu ? 'جیسے: ahmad@example.com' : 'e.g. ahmad@example.com'}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE5DF] bg-[#F8F7F1] text-xs sm:text-sm font-body font-normal text-[#17211D] focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] disabled:opacity-60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-nav font-medium text-[#17211D] mb-1">
                      {t.contact.phoneInputLabel} *
                    </label>
                    <input
                      type="tel"
                      required
                      disabled={isSubmitting}
                      placeholder="+92 313 0958451"
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE5DF] bg-[#F8F7F1] text-xs sm:text-sm font-body font-normal text-[#17211D] focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] disabled:opacity-60"
                    />
                  </div>

                  {/* Course Interest */}
                  <div>
                    <label className="block text-xs font-nav font-medium text-[#17211D] mb-1">
                      {t.contact.courseLabel}
                    </label>
                    <select
                      disabled={isSubmitting}
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE5DF] text-xs sm:text-sm font-body font-normal text-[#17211D] focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] bg-[#F8F7F1] disabled:opacity-60"
                    >
                      {COURSES_DATA.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-nav font-medium text-[#17211D] mb-1">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    disabled={isSubmitting}
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE5DF] bg-[#F8F7F1] text-xs sm:text-sm font-body font-normal text-[#17211D] focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] disabled:opacity-60"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-[#064E3B] hover:bg-[#022C22] disabled:bg-[#064E3B]/70 text-white font-nav font-medium text-sm rounded-xl border border-[#065F46] hover:border-[#D4AF37] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#D4AF37]" />
                      <span>{isArabic ? 'جاري إرسال الرسالة...' : isUrdu ? 'پیغام بھیجا جا رہا ہے...' : 'Sending Message to Admissions...'}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.contact.sendBtn}</span>
                      <Send className="w-4 h-4 rtl:rotate-180 text-[#D4AF37]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
