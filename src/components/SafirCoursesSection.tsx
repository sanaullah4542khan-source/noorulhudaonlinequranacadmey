import React, { useState, useMemo } from 'react';
import { SAFIR_COURSES, SafirCourse } from '../data/safirData';
import { COURSE_NAZRA_IMAGE, COURSE_TAJWEED_IMAGE, COURSE_ISLAMIC_IMAGE, COURSE_DUAS_IMAGE } from '../data/userImagesLazy';

// Course images live as keys in safirData so the heavy photo bytes stay out of
// the first-load bundle; resolve them here, inside the lazily loaded section.
const COURSE_IMAGES: Record<string, string> = {
  courseNazra: COURSE_NAZRA_IMAGE,
  courseTajweed: COURSE_TAJWEED_IMAGE,
  courseIslamic: COURSE_ISLAMIC_IMAGE,
  courseDuas: COURSE_DUAS_IMAGE,
};
const resolveCourseImage = (image: string) => COURSE_IMAGES[image] ?? image;
import { COURSES_DATA } from '../data/coursesData';
import { CourseDetailModal } from './CourseDetailModal';
import { Course } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { 
  BookOpen, 
  Sparkles, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Users, 
  Clock, 
  GraduationCap, 
  Layers,
  ChevronRight,
  Filter
} from 'lucide-react';

interface SafirCoursesSectionProps {
  onOpenFreeTrial: (courseId?: string) => void;
}

type CourseCategory = 'all' | 'quran' | 'hifz' | 'islamic' | 'duas';

export const SafirCoursesSection: React.FC<SafirCoursesSectionProps> = ({ onOpenFreeTrial }) => {
  const { t, isRtl, isArabic, isUrdu } = useLanguage();
  const { isDark } = useTheme();
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<Course | null>(null);
  const [activeCategory, setActiveCategory] = useState<CourseCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Map each course to category
  const getCourseCategory = (id: string): CourseCategory => {
    if (id === 'nazra-recitation' || id === 'quran-tajweed') return 'quran';
    if (id === 'hifz-ul-quran') return 'hifz';
    if (id === 'basic-islamic-studies' || id === 'tafsir-quran') return 'islamic';
    return 'duas';
  };

  // Descriptive Lucide icon for course content card header
  const getCourseCardIcon = (courseId: string) => {
    switch (courseId) {
      case 'nazra-recitation':
        return <BookOpen className="w-5 h-5 text-[#064232] dark:text-[#facc15]" />;
      case 'quran-tajweed':
        return <Award className="w-5 h-5 text-[#064232] dark:text-[#facc15]" />;
      case 'hifz-ul-quran':
        return <GraduationCap className="w-5 h-5 text-[#064232] dark:text-[#facc15]" />;
      case 'basic-islamic-studies':
        return <GraduationCap className="w-5 h-5 text-[#064232] dark:text-[#facc15]" />;
      case 'tafsir-quran':
        return <BookOpen className="w-5 h-5 text-[#064232] dark:text-[#facc15]" />;
      case 'daily-supplications-duas':
      case 'masnoon-duas':
        return <Sparkles className="w-5 h-5 text-[#064232] dark:text-[#facc15]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#064232] dark:text-[#facc15]" />;
    }
  };

  const categories = useMemo(() => [
    { id: 'all' as CourseCategory, labelEn: 'All Courses', labelUr: 'تمام کورسز', labelAr: 'جميع الدورات', count: SAFIR_COURSES.length },
    { id: 'quran' as CourseCategory, labelEn: 'Quran & Tajweed', labelUr: 'ناظرہ و تجوید', labelAr: 'القرآن والتجويد', count: SAFIR_COURSES.filter(c => getCourseCategory(c.id) === 'quran').length },
    { id: 'hifz' as CourseCategory, labelEn: 'Hifz (Memorization)', labelUr: 'حفظ القرآن', labelAr: 'حفظ القرآن الكريم', count: SAFIR_COURSES.filter(c => getCourseCategory(c.id) === 'hifz').length },
    { id: 'islamic' as CourseCategory, labelEn: 'Islamic Studies & Tafsir', labelUr: 'اسلامیات و تفسیر', labelAr: 'الدراسات والتفسير', count: SAFIR_COURSES.filter(c => getCourseCategory(c.id) === 'islamic').length },
    { id: 'duas' as CourseCategory, labelEn: 'Duas & Arabic', labelUr: 'دعائیں و عربی زبان', labelAr: 'الأدعية واللغة العربية', count: SAFIR_COURSES.filter(c => getCourseCategory(c.id) === 'duas').length }
  ], []);

  const filteredCourses = useMemo(() => {
    return SAFIR_COURSES.filter((course) => {
      const matchCategory = activeCategory === 'all' || getCourseCategory(course.id) === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        course.title.toLowerCase().includes(q) ||
        (course.titleAr && course.titleAr.toLowerCase().includes(q)) ||
        (course.arabicTitle && course.arabicTitle.toLowerCase().includes(q)) ||
        (course.titleUr && course.titleUr.toLowerCase().includes(q)) ||
        course.description.toLowerCase().includes(q) ||
        (course.descriptionAr && course.descriptionAr.toLowerCase().includes(q)) ||
        course.bullets.some((b) => b.toLowerCase().includes(q)) ||
        (course.bulletsAr && course.bulletsAr.some((b) => b.toLowerCase().includes(q)));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleOpenDetails = (courseId: string) => {
    const matched = COURSES_DATA.find(
      (c) =>
        c.id === courseId ||
        c.courseSlug === courseId ||
        c.title.toLowerCase().includes(courseId.toLowerCase().split('-')[0])
    );
    if (matched) {
      setSelectedCourseForModal(matched);
    } else {
      const base = COURSES_DATA[0];
      const safirCourse = SAFIR_COURSES.find((c) => c.id === courseId);
      if (safirCourse && base) {
        setSelectedCourseForModal({
          ...base,
          id: safirCourse.id,
          title: isArabic && safirCourse.titleAr ? safirCourse.titleAr : isUrdu && safirCourse.titleUr ? safirCourse.titleUr : safirCourse.title,
          arabicTitle: safirCourse.arabicTitle,
          summary: isArabic && safirCourse.descriptionAr ? safirCourse.descriptionAr : isUrdu && safirCourse.descriptionUr ? safirCourse.descriptionUr : safirCourse.description,
          description: isArabic && safirCourse.descriptionAr ? safirCourse.descriptionAr : isUrdu && safirCourse.descriptionUr ? safirCourse.descriptionUr : safirCourse.description,
          learningPoints: isArabic && safirCourse.bulletsAr ? safirCourse.bulletsAr : isUrdu && safirCourse.bulletsUr ? safirCourse.bulletsUr : safirCourse.bullets
        });
      } else if (base) {
        setSelectedCourseForModal(base);
      }
    }
  };

  return (
    <section 
      id="courses" 
      className={`scroll-mt-24 sm:scroll-mt-28 py-10 sm:py-16 lg:py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark 
          ? 'bg-[#031913] text-[#f3f4f6]' 
          : 'bg-white text-[#13241d]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#064232]/10 dark:bg-[#facc15]/10 border border-[#064232]/20 dark:border-[#facc15]/30 mb-3">
            <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#064232] dark:text-[#facc15]" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#064232] dark:text-[#facc15]">
              {isArabic ? 'المناهج القرآنية والدراسات الإسلامية المعتمدة' : isUrdu ? 'آن لائن قرآن و اسلامی کورسز' : 'Accredited Curriculum & Syllabi'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-semibold text-[#064232] dark:text-white tracking-tight mb-2 sm:mb-3">
            {t.courses.title}
          </h2>

          {/* Yellow / Golden Accent */}
          <div className="w-16 sm:w-20 h-1 bg-[#c69b32] dark:bg-[#facc15] mx-auto rounded-full mb-3"></div>

          <p className="font-body font-normal text-xs sm:text-base text-[#4e655c] dark:text-emerald-200/90 leading-relaxed max-w-2xl mx-auto">
            {t.courses.subtitle}
          </p>

          {/* Value Highlights Pill Row */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 text-[10.5px] sm:text-xs font-nav font-medium">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${
              isDark ? 'bg-[#062c21] border-[#0a4233] text-emerald-200' : 'bg-white border-gray-200 text-[#064232]'
            }`}>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#25d366]" />
              {isArabic ? 'حصص تفاعلية 1-لـ-1' : isUrdu ? '1-on-1 لائیو کلاسز' : '1-on-1 Tutoring'}
            </span>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${
              isDark ? 'bg-[#062c21] border-[#0a4233] text-emerald-200' : 'bg-white border-gray-200 text-[#064232]'
            }`}>
              <Users className="w-3.5 h-3.5 text-[#facc15]" />
              {isArabic ? 'معلمون ومعلمات مجازون' : isUrdu ? 'مرد و خواتین اساتذہ' : 'Male & Female Tutors'}
            </span>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${
              isDark ? 'bg-[#062c21] border-[#0a4233] text-emerald-200' : 'bg-white border-gray-200 text-[#064232]'
            }`}>
              <Clock className="w-3.5 h-3.5 text-[#25d366]" />
              {isArabic ? 'مواعيد مرنة 24/7' : isUrdu ? '24/7 لچکدار اوقات' : '24/7 Flexible Schedule'}
            </span>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${
              isDark ? 'bg-[#062c21] border-[#0a4233] text-emerald-200' : 'bg-white border-gray-200 text-[#064232]'
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
              {isArabic ? '3 أيام تجربة مجانية' : isUrdu ? '3 روزہ مفت ٹرائل' : '3 Days Free Trial'}
            </span>
          </div>
        </div>

        {/* Filter Tabs & Search Controls */}
        <div className="mb-6 sm:mb-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const label = isArabic ? cat.labelAr : isUrdu ? cat.labelUr : cat.labelEn;

              return (
                <button
                  key={cat.id}
                  id={`course-filter-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-nav font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? isDark
                        ? 'bg-[#facc15] text-[#041c15] shadow-md shadow-[#facc15]/20 font-semibold'
                        : 'bg-[#064232] text-white shadow-md font-semibold'
                      : isDark
                        ? 'bg-[#062c21] text-emerald-200 hover:bg-[#0a3d2e] border border-[#0e4e3c]'
                        : 'bg-white text-gray-700 hover:bg-[#f3f1e7] border border-gray-200 shadow-sm'
                  }`}
                >
                  <span>{label}</span>
                  <span className={`text-[9.5px] sm:text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive 
                      ? isDark ? 'bg-[#041c15] text-[#facc15]' : 'bg-white/20 text-white'
                      : isDark ? 'bg-black/30 text-emerald-300' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Box */}
          <div className="relative w-full sm:w-72">
            <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3 rtl:pl-0 rtl:pr-3 flex items-center pointer-events-none text-gray-400">
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <input
              type="text"
              id="course-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isArabic ? 'ابحث عن دورة أو موضوع...' : isUrdu ? 'کورس تلاش کریں...' : 'Search course or topic...'}
              className={`w-full py-1.5 sm:py-2 pl-9 pr-4 rtl:pl-4 rtl:pr-9 rounded-xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 ${
                isDark
                  ? 'bg-[#062c21] border-[#0e4e3c] text-white placeholder-emerald-300/50 focus:ring-[#facc15]'
                  : 'bg-white border-gray-200 text-[#13241d] placeholder-gray-400 focus:ring-[#064232]'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 rtl:right-auto rtl:left-0 pr-3 rtl:pr-0 rtl:pl-3 flex items-center text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Counter if searching or filtered */}
        {(activeCategory !== 'all' || searchQuery) && (
          <div className="mb-4 sm:mb-6 flex items-center justify-between text-xs text-[#4e655c] dark:text-emerald-200">
            <span>
              {isArabic 
                ? `${filteredCourses.length} دورات متاحة` 
                : isUrdu 
                ? `${filteredCourses.length} کورسز دستیاب ہیں` 
                : `Showing ${filteredCourses.length} courses`}
            </span>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-[#064232] dark:text-[#facc15] font-semibold hover:underline cursor-pointer"
            >
              {isArabic ? 'إعادة ضبط الفلاتر' : isUrdu ? 'فلٹر ختم کریں' : 'Reset filters'}
            </button>
          </div>
        )}

        {/* Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className={`text-center py-12 sm:py-16 rounded-3xl border ${
            isDark ? 'bg-[#062c21] border-[#0e4e3c]' : 'bg-white border-gray-200'
          }`}>
            <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-gray-400 mb-3" />
            <h3 className="font-heading text-base sm:text-lg font-semibold text-[#064232] dark:text-white mb-1">
              {isArabic ? 'لم يتم العثور على أي دورة' : isUrdu ? 'کوئی کورس نہیں ملا' : 'No courses found'}
            </h3>
            <p className="font-body text-xs text-gray-500 dark:text-emerald-300/70 mb-4">
              {isArabic 
                ? 'يرجى تجربة كلمة بحث أخرى أو إعادة ضبط التصنيف.' 
                : isUrdu 
                ? 'براہ کرم تلاش کا لفظ تبدیل کریں یا تمام کورسز دیکھیں۔' 
                : 'Try searching with another keyword or reset the category filter.'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[#064232] dark:bg-[#facc15] text-white dark:text-[#041c15] font-nav font-medium text-xs cursor-pointer"
            >
              {isArabic ? 'عرض جميع الدورات' : isUrdu ? 'تمام کورسز دیکھیں' : 'View All Courses'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredCourses.map((course) => {
              const courseTitle = isArabic && course.titleAr ? course.titleAr : isUrdu && course.titleUr ? course.titleUr : course.title;
              const courseDesc = isArabic && course.descriptionAr ? course.descriptionAr : isUrdu && course.descriptionUr ? course.descriptionUr : course.description;
              const courseBullets = isArabic && course.bulletsAr ? course.bulletsAr : isUrdu && course.bulletsUr ? course.bulletsUr : course.bullets;

              return (
                <div
                  key={course.id}
                  id={`course-card-${course.id}`}
                  className={`rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group text-left rtl:text-right ${
                    isDark
                      ? 'bg-[#062c21] border-[#0e4e3c] hover:border-[#facc15]/50'
                      : 'bg-white border-gray-200/80 hover:border-[#064232]/30'
                  }`}
                >
                  {/* Course Top Image & Badges */}
                  <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-gray-900/10">
                    <img
                      src={resolveCourseImage(course.image)}
                      alt={courseTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={220}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/course-nazra.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>

                    {/* Arabic Script Tag */}
                    {course.arabicTitle && (
                      <span
                        dir="rtl"
                        className="absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 px-2.5 py-0.5 rounded-lg bg-[#064232]/95 text-[#facc15] font-nastaliq text-[11px] sm:text-xs font-medium backdrop-blur-md shadow border border-[#facc15]/30"
                      >
                        {course.arabicTitle}
                      </span>
                    )}

                    {/* Free Trial Badge on Image bottom */}
                    <div className="absolute bottom-2.5 left-2.5 rtl:left-auto rtl:right-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/60 text-[#facc15] text-[10.5px] font-nav font-medium backdrop-blur-md">
                      <Sparkles className="w-3 h-3" />
                      <span>{isArabic ? '3 أيام تجربة مجانية' : isUrdu ? '3 روزہ مفت ٹرائل' : '3 Days Free Trial'}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-base sm:text-xl font-semibold text-[#064232] dark:text-white mb-1.5 sm:mb-2 group-hover:text-[#c69b32] dark:group-hover:text-[#facc15] transition-colors leading-snug">
                        {courseTitle}
                      </h3>

                      <p className="font-body font-normal text-xs sm:text-sm text-[#4e655c] dark:text-emerald-200/85 leading-relaxed mb-4 line-clamp-3">
                        {courseDesc}
                      </p>

                      {/* Bullet Points with solid dots */}
                      <div className="mb-4 sm:mb-6 space-y-1.5 sm:space-y-2">
                        <span className="text-[9.5px] sm:text-[10px] uppercase font-nav font-semibold tracking-wider text-[#c69b32] dark:text-[#facc15] block mb-1">
                          {isArabic ? 'أهم مخرجات الدورة:' : isUrdu ? 'کورس کے اہم نکات:' : 'Key Learning Outcomes:'}
                        </span>
                        <ul className="space-y-1 text-xs text-gray-700 dark:text-emerald-100/90 font-body font-normal">
                          {courseBullets.slice(0, 4).map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#064232] dark:bg-[#facc15] mt-1.5 flex-shrink-0"></span>
                              <span className="leading-snug">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-3.5 border-t border-gray-100 dark:border-white/10 flex flex-col sm:flex-row items-stretch gap-2">
                      <button
                        id={`enroll-course-${course.id}-btn`}
                        onClick={() => onOpenFreeTrial(course.id)}
                        className="flex-1 py-2.5 px-4 bg-[#064232] hover:bg-[#0a523f] dark:bg-[#facc15] dark:hover:bg-[#ebd54c] text-white dark:text-[#041c15] font-nav font-medium text-xs sm:text-sm rounded-xl shadow hover:shadow-md transition-all text-center active:scale-[0.98] cursor-pointer"
                      >
                        {t.courses.enrollNow}
                      </button>
                      <button
                        id={`view-details-${course.id}-btn`}
                        onClick={() => handleOpenDetails(course.id)}
                        className={`py-2 px-3 border rounded-xl font-nav font-medium text-xs transition-colors text-center cursor-pointer ${
                          isDark
                            ? 'border-white/20 text-emerald-200 hover:border-[#facc15] hover:text-[#facc15]'
                            : 'border-gray-200 text-gray-700 hover:border-[#064232] hover:text-[#064232]'
                        }`}
                        title="View Course Syllabus & Outline"
                      >
                        {t.courses.viewDetails}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Banner with Consultation WhatsApp */}
        <div className="mt-10 sm:mt-14 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#064232] via-[#094635] to-[#042119] text-white flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl border border-white/10">
          <div className="space-y-1.5 sm:space-y-2 text-center sm:text-left rtl:sm:text-right">
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#facc15] font-nav font-medium uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {isArabic ? 'إرشاد واستشارة تعليمية مخصصة' : isUrdu ? 'ذاتی تعلیمی رہنمائی' : 'Need Help Choosing the Right Course?'}
            </span>
            <h3 className="font-heading text-lg sm:text-2xl font-semibold text-white">
              {isArabic ? 'تقييم مجاني وتوصية بالدورة الأنسب' : isUrdu ? 'ہمارے تعلیمی مشیر سے رہنمائی حاصل کریں' : 'Free Assessment & Course Recommendation'}
            </h3>
            <p className="font-body font-normal text-xs sm:text-sm text-emerald-100 max-w-xl">
              {isArabic 
                ? 'يقوم مستشارونا الأكاديميون بتقييم مستوى التلاوة واقتراح المسار التعليمي الأنسب لك أو لأطفالك بكل دقة.' 
                : isUrdu 
                ? 'اپنے یا اپنے بچوں کے لیے بہترین کورس منتخب کرنے کے لیے ہمارے ماہرین سے مفت مشاورت حاصل کریں۔' 
                : 'Our academic coordinators assess your current Arabic recitation level and recommend the most effective study plan for you or your child.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto flex-shrink-0">
            <button
              id="courses-bottom-free-trial-btn"
              onClick={() => onOpenFreeTrial()}
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#facc15] hover:bg-[#ebd54c] text-[#041c15] font-nav font-medium text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer text-center"
            >
              {t.nav.bookFreeTrial}
            </button>
          </div>
        </div>

      </div>

      {/* Course Detail Modal */}
      {selectedCourseForModal && (
        <CourseDetailModal
          course={selectedCourseForModal}
          isOpen={!!selectedCourseForModal}
          onClose={() => setSelectedCourseForModal(null)}
          onEnroll={(courseId) => {
            setSelectedCourseForModal(null);
            onOpenFreeTrial(courseId);
          }}
        />
      )}
    </section>
  );
};
