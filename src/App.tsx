import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { SafirHero } from './components/SafirHero';
import { ThreeStepsSection } from './components/ThreeStepsSection';
import { SafirCoursesSection } from './components/SafirCoursesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { SafirTeachersSection } from './components/SafirTeachersSection';
import { SafirPricingSection } from './components/SafirPricingSection';
import { SafirAboutSection } from './components/SafirAboutSection';
import { SafirTestimonialsSection } from './components/SafirTestimonialsSection';
import { SafirContactSection } from './components/SafirContactSection';
import { SafirFooter } from './components/SafirFooter';
import { PaymentMethodsSection } from './components/PaymentMethodsSection';
import { RevealOnScroll } from './components/RevealOnScroll';
import { SAFIR_CONTACT, getSafirWhatsAppUrl } from './data/safirData';
import { MessageCircle, BookOpen, CreditCard, ChevronUp, GraduationCap, ShieldCheck, ArrowRight, Zap, Activity, Sparkles, Compass } from 'lucide-react';
import { useTheme } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';
import { UnifiedPortalModal } from './components/UnifiedPortalModal';
import { AIAssistantDrawer } from './components/AIAssistantDrawer';
import { LearningPathWizard } from './components/LearningPathWizard';
import { PwaInstallBanner } from './components/PwaInstallBanner';

// Lazy-load heavy modals and auxiliary sections for Moment Speed performance
const FreeTrialModal = lazy(() => import('./components/FreeTrialModal').then(m => ({ default: m.FreeTrialModal })));
const LibrarySection = lazy(() => import('./components/LibrarySection').then(m => ({ default: m.LibrarySection })));
const HighVersionSystemModal = lazy(() => import('./components/HighVersionSystemModal').then(m => ({ default: m.HighVersionSystemModal })));

export default function App() {
  const { isDark } = useTheme();
  const { isArabic, isUrdu, isRtl } = useLanguage();
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedCourseForTrial, setSelectedCourseForTrial] = useState<string | undefined>(undefined);
  const [isStudentDashboardOpen, setIsStudentDashboardOpen] = useState(false);
  const [isSystemModalOpen, setIsSystemModalOpen] = useState(false);
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);
  const [isLearningPathOpen, setIsLearningPathOpen] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);

  // Background idle preloading for instant zero-latency clicks
  useEffect(() => {
    const preloadResources = () => {
      import('./components/FreeTrialModal');
      import('./components/StudentDashboardModal');
      import('./components/HighVersionSystemModal');
    };

    if ('requestIdleCallback' in window) {
      const handle = (window as any).requestIdleCallback(preloadResources, { timeout: 1500 });
      return () => (window as any).cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(preloadResources, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleOpenFreeTrial = (courseId?: string) => {
    setSelectedCourseForTrial(courseId);
    setIsTrialModalOpen(true);
  };

  const handleOpenStudentDashboard = () => {
    setIsStudentDashboardOpen(true);
  };

  const handleOpenSystemModal = () => {
    setIsSystemModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === 'library') {
      setShowLibrary(true);
      setTimeout(() => {
        const el = document.getElementById('library-section');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    if (sectionId === 'payment' || sectionId === 'payment-methods') {
      const el = document.getElementById('payment-methods');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden flex flex-col font-sans antialiased transition-colors duration-300 ${
        isDark
          ? 'dark bg-[#041c15] text-[#f3f4f6] bg-islamic-dark-pattern'
          : 'bg-[#faf9f5] text-[#13241d]'
      } selection:bg-[#064232] selection:text-[#fefefe]`}
    >
      {/* 1. Header with TopBar & Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenFreeTrial={handleOpenFreeTrial}
        onOpenStudentDashboard={handleOpenStudentDashboard}
        onOpenSystemModal={handleOpenSystemModal}
        onOpenAIAssistant={() => setIsAIAssistantOpen(true)}
        onOpenLearningPath={() => setIsLearningPathOpen(true)}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Page Layout */}
      <main className="flex-grow w-full overflow-x-hidden">
        {/* 2. Hero Section */}
        <SafirHero
          onOpenFreeTrial={() => handleOpenFreeTrial()}
          onExploreCourses={() => handleScrollToSection('courses')}
        />

        {/* 3. "Begin Learning Quran Now in 3 Easy Steps" */}
        <RevealOnScroll direction="up" delay={50}>
          <ThreeStepsSection onOpenEnrollment={() => handleOpenFreeTrial()} />
        </RevealOnScroll>

        {/* 4. "Our Courses" Section */}
        <RevealOnScroll direction="up" delay={50}>
          <SafirCoursesSection onOpenFreeTrial={handleOpenFreeTrial} />
        </RevealOnScroll>

        {/* 5. "Why Choose Us" */}
        <RevealOnScroll direction="up" delay={50}>
          <WhyChooseUsSection onOpenDemo={() => handleOpenFreeTrial()} />
        </RevealOnScroll>

        {/* 6. "Our Certified Quran Teachers" */}
        <RevealOnScroll direction="up" delay={50}>
          <SafirTeachersSection onOpenFreeTrial={() => handleOpenFreeTrial()} />
        </RevealOnScroll>

        {/* 7. Pricing Plans */}
        <RevealOnScroll direction="up" delay={50}>
          <SafirPricingSection onSelectPlan={() => handleOpenFreeTrial()} />
        </RevealOnScroll>

        {/* 8. Official Meezan Bank & Electronic Fee Payment Methods */}
        <RevealOnScroll direction="up" delay={50}>
          <PaymentMethodsSection onOpenFeeVerificationModal={() => handleOpenFreeTrial()} />
        </RevealOnScroll>

        {/* 9. "About Our Academy" */}
        <RevealOnScroll direction="up" delay={50}>
          <SafirAboutSection onOpenFreeTrial={() => handleOpenFreeTrial()} />
        </RevealOnScroll>

        {/* Optional Islamic Digital Library Showcase */}
        {showLibrary && (
          <RevealOnScroll direction="up" delay={50}>
            <div id="library-section">
              <LibrarySection />
            </div>
          </RevealOnScroll>
        )}

        {/* 10. Student & Parent Testimonials */}
        <RevealOnScroll direction="up" delay={50}>
          <SafirTestimonialsSection />
        </RevealOnScroll>

        {/* 11. "Contact Us" */}
        <RevealOnScroll direction="up" delay={50}>
          <SafirContactSection />
        </RevealOnScroll>

        {/* Student Portal Launch Callout Banner */}
        <RevealOnScroll direction="up" delay={50}>
          <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="bg-gradient-to-r from-[#064232] via-[#084e3b] to-[#043326] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl border border-[#facc15]/30">
              <div className="flex items-center gap-3 sm:gap-4 text-center md:text-left rtl:md:text-right flex-col md:flex-row">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#facc15] text-[#064232] flex items-center justify-center flex-shrink-0 shadow-md">
                  <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1.5">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-emerald-200 text-[10.5px] sm:text-xs font-semibold">
                      <ShieldCheck className="w-3 h-3 text-[#facc15]" />
                      <span>{isArabic ? 'بوابة إدارة التعلم LMS' : isUrdu ? 'طلباء و والدین ایل ایم ایس' : 'LMS Student Portal'}</span>
                    </div>
                    <button
                      onClick={handleOpenSystemModal}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#facc15]/20 hover:bg-[#facc15]/30 text-[#facc15] text-[10.5px] sm:text-xs font-semibold border border-[#facc15]/40 transition-all cursor-pointer"
                      title={isArabic ? 'مواصفات الفصول الافتراضية عالية الجودة' : isUrdu ? 'ہائی سپیڈ گلوبل کلاس روم سسٹم' : 'Inspect Noor Ul Huda Classroom System'}
                    >
                      <Zap className="w-3 h-3 text-[#facc15]" />
                      <span>{isArabic ? '✨ فصول تفاعلية مباشرة فائقة السرعة' : isUrdu ? '⚡ لائیو انٹرایکٹو کلاس روم سسٹم' : '⚡ High-Speed Live Classroom Engine'}</span>
                    </button>
                  </div>
                  <h3 className="font-heading text-lg sm:text-2xl font-semibold text-white">
                    {isArabic
                      ? 'هل أنت طالب مسجل في أكاديمية نور الهدى؟'
                      : isUrdu
                      ? 'کیا آپ نور الہدیٰ اکیڈمی کے باقاعدہ طالب علم ہیں؟'
                      : 'Enrolled at Noor Ul Huda Quran Academy?'}
                  </h3>
                  <p className="font-body font-normal text-xs sm:text-sm text-emerald-100/90 mt-1 max-w-xl">
                    {isArabic
                      ? 'سجل دخولك لمتابعة حفظك وتلاوتك، وجداول الحصص الفردية المباشرة، وغرف الفيديو التفاعلية، وتسليم التسميع الصوتي.'
                      : isUrdu
                      ? 'اپنے سبق، سبقی، منزل کی پیشرفت، کلاس کا شیڈول اور لائیو کلاس روم میں شمولیت کے لیے لاگ ان کریں۔'
                      : 'Log in securely to view your Sabaq/Sabqi progress, check upcoming 1-on-1 class schedules, enter live video classrooms, and submit recitation homework.'}
                  </p>
                </div>
              </div>

              <button
                id="banner-open-student-dashboard-btn"
                onClick={handleOpenStudentDashboard}
                className="w-full md:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#facc15] hover:bg-[#eab308] text-[#064232] font-nav font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
              >
                <span>{isArabic ? 'دخول بوابة الطلاب والمعلمين' : isUrdu ? 'طلباء ڈیش بورڈ کھولیں' : 'Launch Student Dashboard'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </section>
        </RevealOnScroll>
      </main>

      {/* 12. Footer Section */}
      <SafirFooter
        onNavigateSection={handleScrollToSection}
        onOpenStudentDashboard={handleOpenStudentDashboard}
        onOpenSystemModal={handleOpenSystemModal}
        onOpenAIAssistant={() => setIsAIAssistantOpen(true)}
        onOpenLearningPath={() => setIsLearningPathOpen(true)}
      />

      {/* 13. Interactive Free Trial Booking Dialog */}
      <Suspense fallback={null}>
        {isTrialModalOpen && (
          <FreeTrialModal
            isOpen={isTrialModalOpen}
            onClose={() => setIsTrialModalOpen(false)}
            initialCourseId={selectedCourseForTrial}
          />
        )}
      </Suspense>

      {/* 14. Advanced Unified Multi-Role Academic Portal (Student, Parent, Teacher, Admin) */}
      {isStudentDashboardOpen && (
        <UnifiedPortalModal
          isOpen={isStudentDashboardOpen}
          onClose={() => setIsStudentDashboardOpen(false)}
          onOpenAssessment={() => setIsLearningPathOpen(true)}
        />
      )}

      {/* 15. Intelligent AI Quran Learning Assistant & New Muslim Pathway Drawer */}
      <AIAssistantDrawer
        isOpen={isAIAssistantOpen}
        onClose={() => setIsAIAssistantOpen(false)}
        onOpenFreeTrial={handleOpenFreeTrial}
        onOpenPortal={handleOpenStudentDashboard}
      />

      {/* 16. Personalized Student Learning Path Diagnostic Assessment Wizard */}
      <LearningPathWizard
        isOpen={isLearningPathOpen}
        onClose={() => setIsLearningPathOpen(false)}
        onOpenFreeTrial={handleOpenFreeTrial}
      />

      {/* 17. High Version System Diagnostics Dialog */}
      <Suspense fallback={null}>
        {isSystemModalOpen && (
          <HighVersionSystemModal
            isOpen={isSystemModalOpen}
            onClose={() => setIsSystemModalOpen(false)}
            onOpenFreeTrial={() => handleOpenFreeTrial()}
          />
        )}
      </Suspense>

      {/* 18. PWA Install Prompt Banner */}
      <PwaInstallBanner />

      {/* 19. Floating AI Quran Tutor Trigger Button (Left on mobile, neatly stacked on desktop - prevents ANY collision with WhatsApp) */}
      <button
        id="floating-ai-tutor-btn"
        onClick={() => setIsAIAssistantOpen(true)}
        className="fixed bottom-4 left-4 sm:bottom-24 sm:right-6 sm:left-auto z-40 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-full bg-[#064232] text-[#facc15] hover:bg-[#074735] border border-[#facc15]/60 shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-1.5 sm:gap-2 cursor-pointer backdrop-blur-md group"
        title={isArabic ? 'المعلم القرآني الذكي' : isUrdu ? 'اے آئی قرآن ٹیوٹر' : 'Ask AI Quran Learning Assistant & New Muslim Guide'}
      >
        <span className="w-2 h-2 rounded-full bg-[#facc15] animate-ping flex-shrink-0" />
        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#facc15] flex-shrink-0" />
        <span className="text-[11px] sm:text-xs font-bold text-white group-hover:text-[#facc15] transition-colors whitespace-nowrap">
          {isArabic ? 'المعلم الذكي' : isUrdu ? 'اے آئی ٹیوٹر' : 'AI Quran Tutor'}
        </span>
      </button>

      {/* 20. Floating WhatsApp Action Button */}
      <aside aria-label="Quick WhatsApp assistance" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <a
          id="floating-whatsapp-fab"
          href={getSafirWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center group cursor-pointer"
          title={`Chat with Noor Ul Huda Online Quran Academy on WhatsApp (${SAFIR_CONTACT.phone})`}
        >
          {/* Subtle pulse ring */}
          <span className="absolute right-0 rtl:right-auto rtl:left-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"></span>

          {/* Floating Pill Label */}
          <div className="hidden sm:flex items-center gap-2 mr-3 rtl:mr-0 rtl:ml-3 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md shadow-xl border border-gray-200 text-left rtl:text-right transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 order-first">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse flex-shrink-0"></span>
            <div>
              <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider leading-none">
                {isArabic ? 'متصل الآن' : isUrdu ? 'آن لائن' : 'Online'}
              </div>
              <div className="text-xs font-bold text-[#064232] group-hover:text-[#25D366] transition-colors leading-tight whitespace-nowrap">
                {isArabic ? 'تواصل عبر واتساب' : isUrdu ? 'واٹس ایپ رابطہ' : 'Chat on WhatsApp'}
              </div>
            </div>
          </div>

          {/* Circular WhatsApp button */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-2xl hover:shadow-[0_12px_35px_rgba(37,211,102,0.5)] transition-all duration-300 transform group-hover:scale-110 active:scale-95 bg-white border-2 border-white flex-shrink-0">
            <img
              src="/whatsapp-circle-button.png"
              alt="Chat with us on WhatsApp"
              className="w-full h-full object-cover"
              width={64}
              height={64}
            />
          </div>
        </a>
      </aside>
    </div>
  );
}
