import React, { useState, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { SafirHero } from './components/SafirHero';
import { RevealOnScroll } from './components/RevealOnScroll';
import { PwaInstallBanner } from './components/PwaInstallBanner';
import { SAFIR_CONTACT, getSafirWhatsAppUrl } from './data/safirData';
import { WHATSAPP_IMAGE } from './data/userImagesEager';

// Below-fold sections load in their own chunks after the first paint, so the
// header + hero appear fast instead of waiting for the whole page bundle.
const ThreeStepsSection = lazy(() => import('./components/ThreeStepsSection').then(m => ({ default: m.ThreeStepsSection })));
const SafirCoursesSection = lazy(() => import('./components/SafirCoursesSection').then(m => ({ default: m.SafirCoursesSection })));
const WhyChooseUsSection = lazy(() => import('./components/WhyChooseUsSection').then(m => ({ default: m.WhyChooseUsSection })));
const SafirAboutSection = lazy(() => import('./components/SafirAboutSection').then(m => ({ default: m.SafirAboutSection })));
const SafirPricingSection = lazy(() => import('./components/SafirPricingSection').then(m => ({ default: m.SafirPricingSection })));
const PaymentMethodsSection = lazy(() => import('./components/PaymentMethodsSection').then(m => ({ default: m.PaymentMethodsSection })));
const ParentsSection = lazy(() => import('./components/ParentsSection').then(m => ({ default: m.ParentsSection })));
const SafirTestimonialsSection = lazy(() => import('./components/SafirTestimonialsSection').then(m => ({ default: m.SafirTestimonialsSection })));
const ParentGuideSection = lazy(() => import('./components/ParentGuideSection').then(m => ({ default: m.ParentGuideSection })));
const SafirContactSection = lazy(() => import('./components/SafirContactSection').then(m => ({ default: m.SafirContactSection })));
const SafirFooter = lazy(() => import('./components/SafirFooter').then(m => ({ default: m.SafirFooter })));
const AdminLoginModal = lazy(() => import('./components/AdminLoginModal').then(m => ({ default: m.AdminLoginModal })));
const FreeTrialModal = lazy(() => import('./components/FreeTrialModal').then(m => ({ default: m.FreeTrialModal })));

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedCourseForTrial, setSelectedCourseForTrial] = useState<string | undefined>(undefined);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);

  const handleOpenFreeTrial = (courseId?: string) => {
    setSelectedCourseForTrial(courseId);
    setIsTrialModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col font-sans antialiased bg-white text-[#17211D] selection:bg-[#064E3B] selection:text-white">
      {/* 1. Header with TopBar & Navbar */}
      <Navbar
        onOpenFreeTrial={handleOpenFreeTrial}
        onOpenAdminLogin={() => setIsAdminLoginOpen(true)}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Page Layout */}
      <main className="flex-grow w-full overflow-x-hidden">
        {/* 2. Hero Section */}
        <div id="hero">
          <SafirHero
            onOpenFreeTrial={() => handleOpenFreeTrial()}
            onExploreCourses={() => handleScrollToSection('courses')}
          />
        </div>

        {/* 3. Start learning in three simple steps */}
        <RevealOnScroll direction="up" delay={40}>
          <Suspense fallback={null}>
            <ThreeStepsSection onOpenEnrollment={() => handleOpenFreeTrial()} />
          </Suspense>
        </RevealOnScroll>

        {/* 4. Complete course catalogue with search, filters and details */}
        <RevealOnScroll direction="up" delay={40}>
          <Suspense fallback={null}>
            <SafirCoursesSection onOpenFreeTrial={handleOpenFreeTrial} />
          </Suspense>
        </RevealOnScroll>

        {/* 5. Trust, academy strengths and learning outcomes */}
        <RevealOnScroll direction="up" delay={40}>
          <Suspense fallback={null}>
            <WhyChooseUsSection onOpenDemo={() => handleOpenFreeTrial()} />
          </Suspense>
        </RevealOnScroll>

        {/* 6. Academy introduction */}
        <div id="about-us">
          <Suspense fallback={null}>
            <SafirAboutSection onOpenFreeTrial={() => handleOpenFreeTrial()} />
          </Suspense>
        </div>



        {/* 9. Transparent monthly plans, presented before payment details */}
        <RevealOnScroll direction="up" delay={40}>
          <Suspense fallback={null}>
            <SafirPricingSection onSelectPlan={() => handleOpenFreeTrial()} />
          </Suspense>
        </RevealOnScroll>

        {/* 10. Secure payment options for local and international families */}
        <RevealOnScroll direction="up" delay={40}>
          <Suspense fallback={null}>
            <PaymentMethodsSection onOpenFreeTrial={() => handleOpenFreeTrial()} />
          </Suspense>
        </RevealOnScroll>

        {/* 11. Parent guidance and progress visibility */}
        <Suspense fallback={null}>
          <ParentsSection onOpenFreeTrial={() => handleOpenFreeTrial()} />
        </Suspense>


        {/* 13. Student and parent testimonials */}
        <RevealOnScroll direction="up" delay={40}>
          <Suspense fallback={null}>
            <SafirTestimonialsSection />
          </Suspense>
        </RevealOnScroll>

        {/* 14. Parent guide: choosing online Quran classes for kids */}
        <RevealOnScroll direction="up" delay={40}>
          <Suspense fallback={null}>
            <ParentGuideSection onOpenFreeTrial={() => handleOpenFreeTrial()} />
          </Suspense>
        </RevealOnScroll>


        {/* 9. Contact & Admissions Section */}
        <div id="contact">
          <Suspense fallback={null}>
            <SafirContactSection />
          </Suspense>
        </div>
      </main>

      {/* 10. Premium Academy Footer */}
      <Suspense fallback={null}>
        <SafirFooter onNavigateSection={handleScrollToSection} />
      </Suspense>

      {/* Modals */}
      {isTrialModalOpen && (
        <Suspense fallback={null}>
          <FreeTrialModal
            isOpen={isTrialModalOpen}
            onClose={() => setIsTrialModalOpen(false)}
            initialCourseId={selectedCourseForTrial}
          />
        </Suspense>
      )}

      {isAdminLoginOpen && (
        <Suspense fallback={null}>
          <AdminLoginModal
            isOpen={isAdminLoginOpen}
            onClose={() => setIsAdminLoginOpen(false)}
          />
        </Suspense>
      )}

      {/* PWA Install Banner */}
      <PwaInstallBanner />

      {/* Floating WhatsApp Action Button */}
      <aside aria-label="Quick WhatsApp assistance" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <a
          id="floating-whatsapp-fab"
          href={getSafirWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center group cursor-pointer"
          title={`Chat with Noor Ul Huda Online Quran Academy on WhatsApp (${SAFIR_CONTACT.phone})`}
        >
          <img
            src={WHATSAPP_IMAGE}
            alt="Chat with Noor Ul Huda Academy on WhatsApp"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-2xl hover:scale-110 active:scale-95 transition-all"
          />
        </a>
      </aside>
    </div>
  );
}
