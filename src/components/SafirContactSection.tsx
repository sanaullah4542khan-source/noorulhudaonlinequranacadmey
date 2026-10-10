import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Facebook, Instagram, Linkedin, MessageCircle, Copy, Check, ShieldCheck } from 'lucide-react';
import { SAFIR_CONTACT, SAFIR_COURSES, getSafirWhatsAppUrl } from '../data/safirData';
import { useLanguage } from '../context/LanguageContext';

export const SafirContactSection: React.FC = () => {
  const { t, isRtl, isArabic, isUrdu } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Quran Recitation (Nazra)',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-10 sm:py-16 lg:py-20 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-heading font-semibold text-[#064232] tracking-tight mb-2">
            {t.contact.title}
          </h2>
          <div className="w-16 h-1 bg-[#eab308] mx-auto rounded-full mb-3"></div>
          <p className="font-body font-normal text-xs sm:text-base text-gray-600">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-4 sm:p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.05)] text-left rtl:text-right">
            <h3 className="text-lg sm:text-xl font-heading font-semibold text-[#064232] mb-1.5 sm:mb-2">
              {t.contact.infoTitle}
            </h3>
            <p className="font-body font-normal text-xs sm:text-sm text-gray-600 mb-5 sm:mb-6">
              {t.contact.infoDesc}
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {/* Official Academy Email */}
              <div className="flex flex-col gap-2 p-3 sm:p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 transition-all hover:bg-emerald-50">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5 sm:gap-3.5 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#064232] text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 flex-wrap">
                        <span className="block text-[10.5px] sm:text-[11px] font-bold text-[#064232] uppercase tracking-wider">
                          {isArabic ? 'البريد الرسمي للأكاديمية' : isUrdu ? 'سرکاری اکیڈمی ای میل' : 'Official Academy Email'}
                        </span>
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#facc15] text-[#064232] text-[9.5px] font-black tracking-tight shadow-sm">
                          <ShieldCheck className="w-2.5 h-2.5 text-[#064232]" />
                          OFFICIAL
                        </span>
                      </div>
                      <a
                        href={`mailto:${SAFIR_CONTACT.email}`}
                        className="block text-xs sm:text-sm font-bold text-[#064232] hover:text-[#095742] hover:underline transition-colors break-all"
                        dir="ltr"
                      >
                        {SAFIR_CONTACT.email}
                      </a>
                      {SAFIR_CONTACT.secondaryEmail && (
                        <div className="mt-1 pt-1 border-t border-emerald-200/60 flex items-center gap-1.5 text-[10.5px] text-gray-500">
                          <span className="font-semibold text-gray-600">{isArabic ? 'ثانوي:' : isUrdu ? 'ثانوی:' : 'Secondary:'}</span>
                          <a
                            href={`mailto:${SAFIR_CONTACT.secondaryEmail}`}
                            className="font-medium text-gray-700 hover:text-[#064232] transition-colors break-all"
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
                    className="w-full sm:w-auto p-1.5 sm:p-2 px-2.5 rounded-xl bg-white border border-emerald-200 text-[#064232] hover:bg-emerald-100 transition-colors shadow-sm flex items-center justify-center gap-1.5 text-xs font-semibold flex-shrink-0 cursor-pointer active:scale-95"
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
                        <Copy className="w-3.5 h-3.5 text-[#064232]" />
                        <span className="text-[11px] font-semibold">{isArabic ? 'نسخ' : isUrdu ? 'کاپی' : 'Copy'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <a
                href={`tel:${SAFIR_CONTACT.cleanPhone}`}
                className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-[#f0fdf4] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#f0fdf4] border border-[#dcfce7] flex items-center justify-center text-[#064232] group-hover:bg-[#064232] group-hover:text-white transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                    {t.contact.phoneLabel}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-[#064232]" dir="ltr">
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
                    {isArabic ? 'متاح 24 ساعة / 7 أيام أسبوعياً' : isUrdu ? '24 گھنٹے / 7 دن کھلا ہے' : SAFIR_CONTACT.hours}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <span className="block text-xs font-semibold text-gray-600 mb-3">
                {t.contact.followLabel}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={SAFIR_CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#f0fdf4] text-[#064232] hover:bg-[#064232] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={SAFIR_CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#f0fdf4] text-[#064232] hover:bg-[#064232] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={SAFIR_CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#f0fdf4] text-[#064232] hover:bg-[#064232] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={getSafirWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#f0fdf4] text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Send us a Message Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.05)] text-left rtl:text-right">
            <h3 className="text-xl font-heading font-semibold text-[#064232] mb-1">
              {t.contact.formTitle}
            </h3>
            <p className="font-body font-normal text-xs sm:text-sm text-gray-600 mb-6">
              {t.contact.formSubtitle}
            </p>

            {isSubmitted ? (
              <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#dcfce7] text-[#15803d] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-heading font-semibold text-[#064232] mb-2">
                  {isArabic ? 'جزاكم الله خيراً! تم استلام رسالتكم بنجاح' : isUrdu ? 'جزاک اللہ خیراً! آپ کا پیغام موصول ہو گیا' : 'Jazakallah Khair! Message Received'}
                </h4>
                <p className="font-body font-normal text-xs sm:text-sm text-gray-700 max-w-md mx-auto mb-4">
                  {isArabic ? (
                    <>شكراً لكم، <strong>{formData.name}</strong>. تلقينا استفساركم بخصوص <strong>{formData.course}</strong>. سيتواصل معكم فريقنا التعليمي قريباً على الرقم {formData.phone}.</>
                  ) : isUrdu ? (
                    <>شکریہ، <strong>{formData.name}</strong>۔ ہم نے کورس <strong>{formData.course}</strong> کے متعلق آپ کی درخواست موصول کر لی ہے۔ ہم جلد ہی آپ کے نمبر {formData.phone} پر رابطہ کریں گے۔</>
                  ) : (
                    <>Thank you, <strong>{formData.name}</strong>. We have received your inquiry regarding <strong>{formData.course}</strong>. Our team will contact you on {formData.phone} shortly.</>
                  )}
                </p>
                <div className="flex justify-center gap-3">
                  <a
                    href={getSafirWhatsAppUrl(`Assalamu Alaikum, I just submitted the form for ${formData.course}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-xs font-nav font-medium rounded-lg shadow hover:bg-[#20ba59] transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {isArabic ? 'تواصل عبر واتساب' : isUrdu ? 'واٹس ایپ پر فوری رابطہ کریں' : 'Chat Directly on WhatsApp'}
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', course: 'Quran Recitation (Nazra)', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-nav font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg cursor-pointer"
                  >
                    {isArabic ? 'إرسال رسالة أخرى' : isUrdu ? 'نیا پیغام بھیجیں' : 'Send Another Note'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-nav font-medium text-gray-700 mb-1">
                      {t.contact.fullNameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isArabic ? 'مثال: أحمد خان' : isUrdu ? 'جیسے: احمد خان' : 'e.g. Ahmad Khan'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-body font-normal focus:outline-none focus:ring-2 focus:ring-[#064232]/20 focus:border-[#064232]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-nav font-medium text-gray-700 mb-1">
                      {t.contact.emailInputLabel}
                    </label>
                    <input
                      type="email"
                      placeholder={isArabic ? 'مثال: ahmad@example.com' : isUrdu ? 'جیسے: ahmad@example.com' : 'e.g. ahmad@example.com'}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-body font-normal focus:outline-none focus:ring-2 focus:ring-[#064232]/20 focus:border-[#064232]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-nav font-medium text-gray-700 mb-1">
                      {t.contact.phoneInputLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-body font-normal focus:outline-none focus:ring-2 focus:ring-[#064232]/20 focus:border-[#064232]"
                    />
                  </div>

                  {/* Course Interest */}
                  <div>
                    <label className="block text-xs font-nav font-medium text-gray-700 mb-1">
                      {t.contact.courseLabel}
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-body font-normal focus:outline-none focus:ring-2 focus:ring-[#064232]/20 focus:border-[#064232] bg-white"
                    >
                      {SAFIR_COURSES.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-nav font-medium text-gray-700 mb-1">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-body font-normal focus:outline-none focus:ring-2 focus:ring-[#064232]/20 focus:border-[#064232]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#064232] hover:bg-[#0a523f] text-white font-nav font-medium text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer"
                >
                  <span>{t.contact.sendBtn}</span>
                  <Send className="w-4 h-4 rtl:rotate-180" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
