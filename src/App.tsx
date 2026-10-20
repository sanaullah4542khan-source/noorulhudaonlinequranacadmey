import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SafirHero } from './components/SafirHero';
import { SafirAboutSection } from './components/SafirAboutSection';
import { SafirTeachersSection } from './components/SafirTeachersSection';
import { ClassExperience } from './components/ClassExperience';
import { ParentsSection } from './components/ParentsSection';
import { LibrarySection } from './components/LibrarySection';
import { SafirContactSection } from './components/SafirContactSection';
import { SafirFooter } from './components/SafirFooter';
import { AdminLoginModal } from './components/AdminLoginModal';
import { FreeTrialModal } from './components/FreeTrialModal';
import { CourseDetailModal } from './components/CourseDetailModal';
import { PwaInstallBanner } from './components/PwaInstallBanner';
import { COURSES_DATA } from './data/coursesData';
import { Course } from './types';
import { SAFIR_CONTACT, getSafirWhatsAppUrl } from './data/safirData';
import { useLanguage } from './context/LanguageContext';
import { Sparkles, MessageCircle, BookOpen, Award, CheckCircle2, Star, ArrowRight, ShieldCheck } from 'lucide-react';

export default function App() {
  const { isArabic, isUrdu, isRtl } = useLanguage();
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedCourseForTrial, setSelectedCourseForTrial] = useState<string | undefined>(undefined);
  const [selectedCourseDetail, setSelectedCourseDetail] = useState<Course | null>(null);
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
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col font-sans antialiased bg-[#F8F7F1] text-[#17211D] selection:bg-[#064E3B] selection:text-white">
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

        {/* 3. About Us Section */}
        <div id="about-us">
          <SafirAboutSection onOpenFreeTrial={() => handleOpenFreeTrial()} />
        </div>

        {/* 4. Courses Grid Section */}
        <section id="courses" className="py-16 sm:py-20 bg-white border-b border-[#DDE5DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#064E3B]/10 text-[#064E3B] border border-[#064E3B]/20">
                {isArabic ? 'المناهج والدورات' : isUrdu ? 'جامع قرآنی کورسز' : 'Our Academic Programs'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#064E3B] mt-3">
                {isArabic
                  ? 'دورات تعليمية فردية مع نخبة القراء والمجازين'
                  : isUrdu
                  ? 'سند یافتہ اساتذہ کے ساتھ 1-آن-1 انفرادی آن لائن کلاسز'
                  : 'Tailored 1-on-1 Quran & Islamic Studies Courses'}
              </h2>
              <p className="text-sm sm:text-base text-[#17211D]/80 mt-3 leading-relaxed">
                {isArabic
                  ? 'برامج مصممة للأطفال والكبار ومسلمي العالم مع مرونة تامة في الأوقات'
                  : isUrdu
                  ? 'بچوں، خواتین اور نو مسلم بھائی بہنوں کے لیے خصوصی نصاب اور 24 گھنٹے لچکدار اوقات'
                  : 'Comprehensive curricula tailored for children, adult brothers and sisters, and new Muslims worldwide.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {COURSES_DATA.map((course) => (
                <div
                  key={course.id}
                  className="bg-[#F8F7F1] rounded-3xl border border-[#DDE5DF] p-6 shadow-xs hover:shadow-xl hover:border-[#D4AF37]/60 transition-all flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#064E3B] text-[#D4AF37] border border-[#D4AF37]/30">
                        {course.badge}
                      </span>
                      {course.arabicTitle && (
                        <span className="font-arabic text-sm text-[#064E3B] font-bold">
                          {course.arabicTitle}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#064E3B] group-hover:text-[#065F46] transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#17211D]/80 leading-relaxed line-clamp-3">
                      {course.summary || course.description}
                    </p>

                    <div className="pt-2 text-xs text-[#17211D]/70 space-y-1">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <strong className="text-[#17211D]">{course.duration}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>For:</span>
                        <strong className="text-[#17211D]">{course.studentCategory}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#DDE5DF] flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedCourseDetail(course)}
                      className="text-xs font-bold text-[#064E3B] hover:text-[#D4AF37] transition-colors underline cursor-pointer"
                    >
                      {isArabic ? 'تفاصيل الدورة' : isUrdu ? 'کورس کی تفصیل' : 'Course Details'}
                    </button>
                    <button
                      onClick={() => handleOpenFreeTrial(course.id)}
                      className="px-4 py-2 rounded-xl bg-[#064E3B] text-white hover:bg-[#065F46] border border-[#064E3B] text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer"
                    >
                      {isArabic ? 'احجز تجربة' : isUrdu ? 'ٹرائل لیں' : 'Free Trial'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Teachers Section */}
        <div id="teachers">
          <SafirTeachersSection onOpenFreeTrial={() => handleOpenFreeTrial()} />
        </div>

        {/* 6. Learning Experience & Classroom */}
        <div id="why-choose-us">
          <ClassExperience onOpenFreeTrial={() => handleOpenFreeTrial()} />
        </div>

        {/* 7. Parents Section */}
        <ParentsSection onOpenFreeTrial={() => handleOpenFreeTrial()} />

        {/* 8. Islamic Digital Library & Knowledge Vault */}
        <div id="library">
          <LibrarySection onOpenFreeTrial={handleOpenFreeTrial} />
        </div>

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

      {selectedCourseDetail && (
        <CourseDetailModal
          course={selectedCourseDetail}
          onClose={() => setSelectedCourseDetail(null)}
          onOpenFreeTrial={(id) => {
            setSelectedCourseDetail(null);
            handleOpenFreeTrial(id);
          }}
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
          <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all">
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          </span>
        </a>
      </aside>
    </div>
  );
}
