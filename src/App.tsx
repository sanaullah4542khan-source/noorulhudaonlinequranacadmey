import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SafirHero } from './components/SafirHero';
import { ThreeStepsSection } from './components/ThreeStepsSection';
import { SafirCoursesSection } from './components/SafirCoursesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { SafirAboutSection } from './components/SafirAboutSection';
import { SafirTeachersSection } from './components/SafirTeachersSection';
import { SafirPricingSection } from './components/SafirPricingSection';
import { PaymentMethodsSection } from './components/PaymentMethodsSection';
import { ParentsSection } from './components/ParentsSection';
import { SafirTestimonialsSection } from './components/SafirTestimonialsSection';
import { SafirContactSection } from './components/SafirContactSection';
import { SafirFooter } from './components/SafirFooter';
import { RevealOnScroll } from './components/RevealOnScroll';
import { AdminLoginModal } from './components/AdminLoginModal';
import { FreeTrialModal } from './components/FreeTrialModal';
import { PwaInstallBanner } from './components/PwaInstallBanner';
import { SAFIR_CONTACT, getSafirWhatsAppUrl } from './data/safirData';
import { USER_IMAGES } from './data/userImages';

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
          <ThreeStepsSection onOpenEnrollment={() => handleOpenFreeTrial()} />
        </RevealOnScroll>

        {/* 4. Complete course catalogue with search, filters and details */}
        <RevealOnScroll direction="up" delay={40}>
          <SafirCoursesSection onOpenFreeTrial={handleOpenFreeTrial} />
        </RevealOnScroll>

        {/* 5. Trust, academy strengths and learning outcomes */}
        <RevealOnScroll direction="up" delay={40}>
          <WhyChooseUsSection onOpenDemo={() => handleOpenFreeTrial()} />
        </RevealOnScroll>

        {/* 6. Academy introduction */}
        <div id="about-us">
          <SafirAboutSection onOpenFreeTrial={() => handleOpenFreeTrial()} />
        </div>

        {/* 7. Qualified teachers */}
        <div id="teachers">
          <SafirTeachersSection onOpenFreeTrial={() => handleOpenFreeTrial()} />
        </div>


        {/* 9. Transparent monthly plans, presented before payment details */}
        <RevealOnScroll direction="up" delay={40}>
          <SafirPricingSection onSelectPlan={() => handleOpenFreeTrial()} />
        </RevealOnScroll>

        {/* 10. Secure payment options for local and international families */}
        <RevealOnScroll direction="up" delay={40}>
          <PaymentMethodsSection onOpenFreeTrial={() => handleOpenFreeTrial()} />
        </RevealOnScroll>

        {/* 11. Parent guidance and progress visibility */}
        <ParentsSection onOpenFreeTrial={() => handleOpenFreeTrial()} />


        {/* 13. Student and parent testimonials */}
        <RevealOnScroll direction="up" delay={40}>
          <SafirTestimonialsSection />
        </RevealOnScroll>


        {/* 9. Contact & Admissions Section */}
        <div id="contact">
          <SafirContactSection />
        </div>
      </main>

      {/* 10. Premium Academy Footer */}
      <SafirFooter onNavigateSection={handleScrollToSection} />

      {/* Modals */}
      {isTrialModalOpen && (
        <FreeTrialModal
          isOpen={isTrialModalOpen}
          onClose={() => setIsTrialModalOpen(false)}
          initialCourseId={selectedCourseForTrial}
        />
      )}

      {isAdminLoginOpen && (
        <AdminLoginModal
          isOpen={isAdminLoginOpen}
          onClose={() => setIsAdminLoginOpen(false)}
        />
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
            src={USER_IMAGES.whatsapp}
            alt="Chat with Noor Ul Huda Academy on WhatsApp"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-2xl hover:scale-110 active:scale-95 transition-all"
          />
        </a>
      </aside>
    </div>
  );
}
