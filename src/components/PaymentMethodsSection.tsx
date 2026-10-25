import React, { useState } from 'react';
import { PAYMENT_METHODS, PAYMENT_STEPS, PAYMENT_FAQS } from '../data/paymentData';
import { ACADEMY_BANK_DETAILS, getSafirWhatsAppUrl } from '../data/safirData';
import { useLanguage } from '../context/LanguageContext';
import { PAYMENT_IMAGE } from '../data/userImagesLazy';
import { WHATSAPP_IMAGE } from '../data/userImagesEager';
import { useTheme } from '../context/ThemeContext';
import { 
  CreditCard, 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  MessageCircle, 
  Globe2, 
  Building2, 
  Smartphone, 
  Copy,
  Check,
  Sparkles,
  BadgeCheck,
  HelpCircle,
  ChevronDown,
  Wallet,
  Landmark,
  FileCheck2
} from 'lucide-react';

interface PaymentMethodsSectionProps {
  onOpenFreeTrial: () => void;
}

type CopiedField = 'acc' | 'iban' | 'title' | 'swift' | 'raast' | 'easypaisa' | 'jazzcash' | 'all' | null;

export const PaymentMethodsSection: React.FC<PaymentMethodsSectionProps> = ({ onOpenFreeTrial }) => {
  const { t, isRtl, isArabic, isUrdu } = useLanguage();
  const { isDark } = useTheme();
  const [copiedField, setCopiedField] = useState<CopiedField>(null);
  const [openFaqId, setOpenFaqId] = useState<string | null>('confirmation-time');

  const handleCopy = (text: string, field: CopiedField) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const getAllBankDetailsText = () => {
    return (
      `Noor Ul Huda Online Quran Academy - Official Payment Details\n` +
      `--------------------------------------------------\n` +
      `• Bank Name: ${ACADEMY_BANK_DETAILS.bankName} (Islamic Banking)\n` +
      `• Branch: ${ACADEMY_BANK_DETAILS.branch} (Branch Code: ${ACADEMY_BANK_DETAILS.branchCode})\n` +
      `• Account Title: ${ACADEMY_BANK_DETAILS.accountTitle}\n` +
      `• Account Number: ${ACADEMY_BANK_DETAILS.accountNumber}\n` +
      `• IBAN: ${ACADEMY_BANK_DETAILS.iban}\n` +
      `• SWIFT / BIC: ${ACADEMY_BANK_DETAILS.swiftCode}\n` +
      `• RAAST ID: ${ACADEMY_BANK_DETAILS.raastId}\n` +
      `• EasyPaisa / JazzCash: ${ACADEMY_BANK_DETAILS.easyPaisaNumber} (Title: ${ACADEMY_BANK_DETAILS.easyPaisaTitle})\n` +
      `• WhatsApp Billing Support: ${ACADEMY_BANK_DETAILS.whatsappReceiptNumber}\n` +
      `--------------------------------------------------\n` +
      `Please send your transaction receipt or screenshot to WhatsApp (+92 313 0958451) for immediate confirmation.`
    );
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const receiptWhatsAppMessage = encodeURIComponent(
    `Assalamu Alaikum! I have sent the tuition fee to Meezan Bank.\n\n` +
    `• Bank: Meezan Bank (${ACADEMY_BANK_DETAILS.branch})\n` +
    `• Account Title: ${ACADEMY_BANK_DETAILS.accountTitle}\n` +
    `• Account Number: ${ACADEMY_BANK_DETAILS.accountNumber}\n` +
    `• IBAN: ${ACADEMY_BANK_DETAILS.iban}\n\n` +
    `Please find my payment slip attached for confirmation.`
  );

  const receiptWhatsAppUrl = `https://wa.me/${ACADEMY_BANK_DETAILS.cleanPhone}?text=${receiptWhatsAppMessage}`;

  const getMethodIcon = (id: string) => {
    switch (id) {
      case 'bank-wire':
        return <Building2 className="w-6 h-6 text-[#064232] dark:text-[#facc15]" />;
      case 'visa-card':
        return <ArrowRight className="w-6 h-6 text-[#064232] dark:text-[#facc15]" />;
      case 'local-pakistan':
        return <Smartphone className="w-6 h-6 text-[#064232] dark:text-[#facc15]" />;
      default:
        return <Building2 className="w-6 h-6 text-[#064232] dark:text-[#facc15]" />;
    }
  };

  return (
    <section 
      id="payment-methods" 
      className={`py-10 sm:py-16 lg:py-24 relative overflow-hidden border-t transition-colors duration-300 ${
        isDark 
          ? 'bg-[#031913] border-[#0d3b2e] text-[#f3f4f6]' 
          : 'bg-white border-[#e5e3d7] text-[#13241d]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064232]/10 dark:bg-[#facc15]/10 border border-[#064232]/20 dark:border-[#facc15]/30 mb-4">
            <Lock className="w-4 h-4 text-[#064232] dark:text-[#facc15]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#064232] dark:text-[#facc15]">
              {t.payment.tag}
            </span>
          </div>

          <h2
            id="payment-methods-headline"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#064232] dark:text-white tracking-tight mb-4"
          >
            {t.payment.title} <span className="text-[#c69b32] dark:text-[#facc15] font-serif italic">{t.payment.titleHighlight}</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4e655c] dark:text-emerald-200/90 leading-relaxed">
            {t.payment.subtitle}
          </p>
        </div>

        {/* 🌟 OFFICIAL PAYMENT ASSURANCE BANNER IMAGE (BEFORE PAYMENT DETAILS) */}
        <div 
          id="payment-details-banner-image"
          className="mb-12 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-[#c69b32]/40 dark:border-[#facc15]/40 relative group"
        >
          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-[#042018]">
            <img
              src={PAYMENT_IMAGE}
              alt="Noor Ul Huda Quran Academy Official Payment Assurance"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              decoding="async"
              width={1024}
              height={384}
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/registration-assurance.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-10 text-left rtl:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#facc15] text-[#041c15] text-xs font-extrabold uppercase tracking-wide w-fit mb-3 shadow-md">
                <ShieldCheck className="w-4 h-4 text-[#041c15]" />
                <span>{isArabic ? '100% دفع رسوم معتمد ومصرفية إسلامية آمنة' : isUrdu ? '100% تصدیق شدہ فیس ادائیگی اور اسلامی بینکنگ' : '100% Verified & Secure Tuition Payment'}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                {isArabic 
                  ? 'أكاديمية نور الهدى لتعليم القرآن - سداد الرسوم والبيانات المصرفية الرسمية'
                  : isUrdu 
                  ? 'نور الہدیٰ آن لائن قرآن اکیڈمی - فیس کی ادائیگی اور سرکاری بینک تفصیلات' 
                  : 'Noor Ul Huda Online Quran Academy — Official Fee Payment & Islamic Banking'}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
                {isArabic 
                  ? 'تتم معالجة كافة الرسوم الشهرية بأمان عبر حسابنا المعتمد في بنك ميزان الإسلامي، أو الحوالات الدولية المباشرة، أو المحافظ الإلكترونية، مع إمكانية إرسال إشعار السداد فوراً عبر واتساب.'
                  : isUrdu 
                  ? 'فیس کی تمام تر ادائیگیاں براہ راست میزان اسلامک بینک کے آفیشل تصدیق شدہ اکاؤنٹ، بین الاقوامی ترسیل زر، یا موبائل بینکنگ میں وصول کی جاتی ہیں۔ ادائیگی کے بعد واٹس ایپ پر رسید بھیج کر فوری تصدیقی سلپ حاصل کریں۔'
                  : 'All monthly tuition payments are securely processed through our verified Meezan Islamic Bank account, international wire remittance, or domestic mobile banking with direct WhatsApp receipt verification.'}
              </p>
            </div>
          </div>
        </div>

        {/* 🌟 FEATURED HERO CARD: OFFICIAL ACADEMY BANK ACCOUNT (MEEZAN BANK) */}
        <div 
          id="meezan-bank-featured-card"
          className="relative bg-gradient-to-br from-[#064232] via-[#084e3b] to-[#043326] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-10 shadow-2xl border-2 border-[#facc15]/40 mb-10 sm:mb-14 overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#facc15]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

          {/* Top Header Badge, Title & Master Copy Button */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 sm:pb-6 border-b border-white/10 mb-6 sm:mb-8">
            <div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 mb-2 sm:mb-2.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#facc15] text-[#13241d] text-[11px] sm:text-xs font-extrabold uppercase tracking-wide shadow-sm">
                  <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#13241d]" />
                  {t.payment.officialBankBadge}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 text-emerald-200 text-[11px] sm:text-xs font-semibold backdrop-blur-sm">
                  <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#facc15]" />
                  {t.payment.shariahBadge}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 text-emerald-200 text-[11px] sm:text-xs font-semibold backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#facc15]" />
                  {t.payment.instantTransferBadge}
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {t.payment.officialBankTitle}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200/90 mt-1 max-w-2xl">
                {t.payment.officialBankSubtitle}
              </p>
            </div>

            {/* Quick Actions & Master Copy All Button */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                id="copy-all-bank-details-btn"
                onClick={() => handleCopy(getAllBankDetailsText(), 'all')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#facc15] hover:bg-[#ebd54c] text-[#13241d] font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer"
                title="Copy all bank account credentials to clipboard"
              >
                {copiedField === 'all' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-800" />
                    <span>{t.payment.copyAllDone}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#13241d]" />
                    <span>{t.payment.copyAll}</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                <Building2 className="w-5 h-5 text-[#facc15]" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-300 block tracking-wider">
                    {t.payment.branchLabel}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    {ACADEMY_BANK_DETAILS.branch} (Code: {ACADEMY_BANK_DETAILS.branchCode})
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Bank Account Details Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            
            {/* 1. Account Title */}
            <div className="bg-black/20 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                    {t.payment.accountTitleLabel}
                  </span>
                  <button
                    id="copy-title-btn"
                    onClick={() => handleCopy(ACADEMY_BANK_DETAILS.accountTitle, 'title')}
                    className="text-[11px] text-emerald-200 hover:text-[#facc15] flex items-center gap-1 transition-colors cursor-pointer"
                    title="Copy Account Title"
                  >
                    {copiedField === 'title' ? (
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <Check className="w-3 h-3" /> {t.payment.copied}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Copy className="w-3 h-3" /> {t.payment.copyAccNumber}
                      </span>
                    )}
                  </button>
                </div>
                <div className="font-mono text-xl sm:text-2xl font-black text-[#facc15] tracking-wider">
                  {ACADEMY_BANK_DETAILS.accountTitle}
                </div>
              </div>
              <span className="text-[11px] text-emerald-200/70 mt-3 block">
                Official Academy Authorized Title
              </span>
            </div>

            {/* 2. Account Number with Inline 'Copy to Clipboard' Button */}
            <div className="bg-black/20 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                    {t.payment.accountNumberLabel}
                  </span>
                  {/* Primary 'Copy to Clipboard' Button next to the Bank Account Number */}
                  <button
                    id="copy-account-number-inline-btn"
                    onClick={() => handleCopy(ACADEMY_BANK_DETAILS.accountNumber, 'acc')}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#facc15] hover:bg-[#ebd54c] text-[#13241d] text-[11px] font-extrabold transition-all shadow-sm active:scale-95 cursor-pointer"
                    title="Copy Account Number to Clipboard"
                  >
                    {copiedField === 'acc' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-900" />
                        <span>{t.payment.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.payment.copyAccNumber}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="font-mono text-xl sm:text-2xl font-black text-white tracking-wider break-all select-all py-1">
                  {ACADEMY_BANK_DETAILS.accountNumber}
                </div>
              </div>
              
              <button
                id="copy-meezan-account-btn"
                onClick={() => handleCopy(ACADEMY_BANK_DETAILS.accountNumber, 'acc')}
                className="mt-3 w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-[#facc15] hover:text-[#13241d] text-xs font-bold text-white transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
              >
                {copiedField === 'acc' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.payment.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.payment.copyAcc}</span>
                  </>
                )}
              </button>
            </div>

            {/* 3. IBAN with 1-Click Copy */}
            <div className="bg-black/20 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex flex-col justify-between md:col-span-2">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                    {t.payment.ibanLabel}
                  </span>
                  <button
                    id="copy-iban-inline-btn"
                    onClick={() => handleCopy(ACADEMY_BANK_DETAILS.iban, 'iban')}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#facc15] hover:text-[#13241d] text-white text-[11px] font-bold transition-all cursor-pointer"
                    title="Copy IBAN to Clipboard"
                  >
                    {copiedField === 'iban' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{t.payment.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.payment.copyAccNumber}</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="font-mono text-base sm:text-lg lg:text-xl font-black text-white tracking-wider break-all select-all py-1">
                  {ACADEMY_BANK_DETAILS.iban}
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] text-emerald-200/80">
                  {t.payment.swiftLabel}: <span className="font-mono font-bold text-[#facc15]">{ACADEMY_BANK_DETAILS.swiftCode}</span> (International Wire)
                </span>
                <button
                  id="copy-meezan-iban-btn"
                  onClick={() => handleCopy(ACADEMY_BANK_DETAILS.iban, 'iban')}
                  className="py-2 px-4 rounded-xl bg-white/10 hover:bg-[#facc15] hover:text-[#13241d] text-xs font-bold text-white transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
                >
                  {copiedField === 'iban' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t.payment.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.payment.copyIban}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Additional Domestic & Instant Channels: RAAST, EasyPaisa, JazzCash */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 pt-4 border-t border-white/10">
            {/* RAAST Instant Transfer */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#facc15] block tracking-wider">
                  RAAST ID (Instant Free Transfer)
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-white">
                  {ACADEMY_BANK_DETAILS.raastId}
                </span>
              </div>
              <button
                id="copy-raast-btn"
                onClick={() => handleCopy(ACADEMY_BANK_DETAILS.raastId, 'raast')}
                className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-[#facc15] hover:text-[#13241d] text-[11px] font-bold text-white transition-all flex items-center gap-1 cursor-pointer"
              >
                {copiedField === 'raast' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedField === 'raast' ? t.payment.copied : t.payment.copyAccNumber}</span>
              </button>
            </div>

            {/* EasyPaisa Mobile Wallet */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-300 block tracking-wider">
                  EasyPaisa Direct Account
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-white">
                  {ACADEMY_BANK_DETAILS.easyPaisaNumber}
                </span>
                <span className="text-[10px] text-emerald-200/70 block">Title: {ACADEMY_BANK_DETAILS.easyPaisaTitle}</span>
              </div>
              <button
                id="copy-easypaisa-btn"
                onClick={() => handleCopy(ACADEMY_BANK_DETAILS.easyPaisaNumber.replace(/\s+/g, ''), 'easypaisa')}
                className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-[#facc15] hover:text-[#13241d] text-[11px] font-bold text-white transition-all flex items-center gap-1 cursor-pointer"
              >
                {copiedField === 'easypaisa' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedField === 'easypaisa' ? t.payment.copied : t.payment.copyAccNumber}</span>
              </button>
            </div>

            {/* JazzCash Mobile Wallet */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-300 block tracking-wider">
                  JazzCash Direct Account
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-white">
                  {ACADEMY_BANK_DETAILS.jazzCashNumber}
                </span>
                <span className="text-[10px] text-emerald-200/70 block">Title: {ACADEMY_BANK_DETAILS.jazzCashTitle}</span>
              </div>
              <button
                id="copy-jazzcash-btn"
                onClick={() => handleCopy(ACADEMY_BANK_DETAILS.jazzCashNumber.replace(/\s+/g, ''), 'jazzcash')}
                className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-[#facc15] hover:text-[#13241d] text-[11px] font-bold text-white transition-all flex items-center gap-1 cursor-pointer"
              >
                {copiedField === 'jazzcash' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedField === 'jazzcash' ? t.payment.copied : t.payment.copyAccNumber}</span>
              </button>
            </div>
          </div>

          {/* Quick WhatsApp Verification Callout */}
          <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] flex-shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                {t.payment.whatsappVerificationNote}
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto flex-shrink-0">
              <a
                id="meezan-send-receipt-whatsapp-btn"
                href={receiptWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <img
                  src={WHATSAPP_IMAGE}
                  alt="WhatsApp"
                  className="w-4 h-4 rounded-full object-cover"
                />
                <span>{t.payment.sendReceiptWhatsapp}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4-Step Payment Workflow */}
        <div className={`rounded-3xl p-6 sm:p-8 border shadow-sm mb-14 transition-colors ${
          isDark 
            ? 'bg-[#062c21] border-[#0e4e3c]' 
            : 'bg-white border-[#e5e3d7]'
        }`}>
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c69b32] dark:text-[#facc15] block mb-1">
              {t.payment.workflowSubtitle}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#064232] dark:text-white">
              {t.payment.workflowTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAYMENT_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className={`p-5 rounded-2xl border flex flex-col justify-between transition-colors ${
                  isDark
                    ? 'bg-[#042018] border-[#0a4233] hover:border-[#facc15]/40'
                    : 'bg-[#faf9f5] border-[#f0eee4] hover:border-[#c69b32]/40'
                }`}
              >
                <div>
                  <span className="font-serif text-2xl font-extrabold text-[#c69b32] dark:text-[#facc15] block mb-2">
                    {step.stepNumber}
                  </span>
                  <h4 className="font-serif text-base font-bold text-[#064232] dark:text-white mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#4e655c] dark:text-emerald-200/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Payment Methods Grid */}
        <div className="mb-14">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#064232] dark:text-white mb-2 text-center">
            {isArabic ? 'قنوات الدفع الرسمية والآمنة المعتمدة' : isUrdu ? 'سرکاری اور محفوظ ادائیگی کے طریقے' : 'Official & Secure Payment Channels'}
          </h3>
          <p className="text-xs sm:text-sm text-[#4e655c] dark:text-emerald-200/80 text-center max-w-2xl mx-auto mb-8">
            {isArabic
              ? 'التحويل المباشر عبر بنك ميزان، الدفع ببطاقات Visa / Mastercard، والمحافظ الإلكترونية المحلية (RAAST / EasyPaisa / JazzCash).'
              : isUrdu 
              ? 'میزان بینک براہ راست منتقلی، Visa / Mastercard کارڈ ادائیگی، اور ملکی موبائل والٹس (RAAST / ایزی پیسہ / جاز کیش)۔'
              : 'Direct Meezan Bank account transfer, secure Visa / Mastercard card payment, and Pakistani mobile wallets (RAAST / EasyPaisa / JazzCash).'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAYMENT_METHODS.map((method) => (
              <div
                key={method.id}
                id={`payment-method-${method.id}`}
                className={`rounded-3xl p-6 sm:p-7 border shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                  isDark
                    ? 'bg-[#062c21] border-[#0e4e3c] hover:border-[#facc15]/40'
                    : 'bg-white border-[#e5e3d7] hover:border-[#c69b32]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#064232]/10 dark:bg-[#facc15]/10 flex items-center justify-center">
                      {getMethodIcon(method.id)}
                    </div>
                    {method.badge && (
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                        isDark 
                          ? 'bg-[#042018] text-[#facc15] border-[#facc15]/30' 
                          : 'bg-[#faf9f5] text-[#997217] border-[#e5e3d7]'
                      }`}>
                        {method.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[#064232] dark:text-white mb-1">
                    {method.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#c69b32] dark:text-[#facc15] mb-3">
                    {method.tagline}
                  </p>
                  <p className="text-xs text-[#4e655c] dark:text-emerald-200/80 leading-relaxed mb-4">
                    {method.description}
                  </p>

                  {/* Instructions Box */}
                  <div className={`p-3.5 rounded-xl border text-xs leading-relaxed mb-4 ${
                    isDark
                      ? 'bg-[#042018] border-[#0a4233] text-emerald-100'
                      : 'bg-[#faf9f5] border-[#f0eee4] text-[#13241d]'
                  }`}>
                    <span className="font-bold text-[#064232] dark:text-[#facc15] block mb-1">
                      {t.payment.instructionsTitle}:
                    </span>
                    <p className="text-[11px] text-[#4e655c] dark:text-emerald-200/90">{method.instructions}</p>
                  </div>
                </div>

                {/* Supported Currencies Badge list */}
                <div className={`pt-3 border-t flex items-center justify-between text-[11px] ${
                  isDark ? 'border-white/10' : 'border-[#f0eee4]'
                }`}>
                  <span className="text-[#4e655c] dark:text-emerald-300 font-medium">Currencies:</span>
                  <span className="font-semibold text-[#064232] dark:text-[#facc15]">
                    {method.supportedCurrencies.join(', ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🌟 PAYMENT ACCORDION & FAQ SECTION */}
        <div 
          id="payment-faq-accordion" 
          className={`rounded-3xl p-6 sm:p-9 border shadow-sm mb-14 transition-colors ${
            isDark 
              ? 'bg-[#062c21] border-[#0e4e3c]' 
              : 'bg-white border-[#e5e3d7]'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064232]/10 dark:bg-[#facc15]/10 border border-[#064232]/20 dark:border-[#facc15]/30 mb-3">
              <HelpCircle className="w-4 h-4 text-[#064232] dark:text-[#facc15]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#064232] dark:text-[#facc15]">
                {t.payment.faqTag}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#064232] dark:text-white mb-3">
              {t.payment.faqTitle} <span className="text-[#c69b32] dark:text-[#facc15] font-serif italic">Payment Questions</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#4e655c] dark:text-emerald-200/80 leading-relaxed">
              {t.payment.faqSubtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {PAYMENT_FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              const question = isArabic ? (faq.questionAr || faq.questionUr) : isUrdu ? faq.questionUr : faq.questionEn;
              const answer = isArabic ? (faq.answerAr || faq.answerUr) : isUrdu ? faq.answerUr : faq.answerEn;

              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? isDark
                        ? 'bg-[#073629] border-[#facc15]/50 shadow-md'
                        : 'bg-[#faf9f5] border-[#c69b32] shadow-sm'
                      : isDark
                        ? 'bg-[#042018] border-[#0a4233] hover:border-[#facc15]/30'
                        : 'bg-white border-[#e5e3d7] hover:border-[#c69b32]/40'
                  }`}
                >
                  <button
                    id={`faq-toggle-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left rtl:text-right gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#064232] dark:text-white leading-snug">
                      {question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? isDark
                            ? 'bg-[#facc15] text-[#064232] rotate-180'
                            : 'bg-[#064232] text-[#facc15] rotate-180'
                          : isDark
                            ? 'bg-white/10 text-gray-300'
                            : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className={`px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                      isDark 
                        ? 'border-white/5 text-emerald-100/90' 
                        : 'border-[#f0eee4] text-[#4e655c]'
                    }`}>
                      <p>{answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Security & Support Guarantee Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#064232] to-[#0a523f] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs text-[#facc15] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#facc15]" />
              <span>Official Academy Verification & Support</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Always Verify Invoices Directly With Our Coordinator
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl leading-relaxed">
              To ensure 100% safety, all tuition payments are coordinated through our verified WhatsApp channel (+92 313 0958451). We provide an immediate digitally signed payment acknowledgment for your records.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 whitespace-nowrap w-full sm:w-auto">
            <a
              id="payment-verify-whatsapp-btn"
              href={getSafirWhatsAppUrl('Assalamu Alaikum! I would like to verify tuition payment for Noor Ul Huda Online Quran Academy.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Billing: +92 313 0958451</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
