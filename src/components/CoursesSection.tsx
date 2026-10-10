import React, { useState } from 'react';
import { Course } from '../types';
import { COURSES_DATA, ACADEMY_WHATSAPP_NUMBER } from '../data/coursesData';
import { CourseTemplateCard } from './CourseTemplateCard';
import { CourseDetailModal } from './CourseDetailModal';
import {
  BookOpen,
  Sparkles,
  Search,
  MessageCircle,
  GraduationCap,
  Languages,
  Heart,
  ShieldCheck,
  ArrowRight,
  Filter
} from 'lucide-react';

interface CoursesSectionProps {
  onOpenFreeTrial: (courseId?: string, courseTitle?: string) => void;
  customWhatsAppNumber?: string;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  onOpenFreeTrial,
  customWhatsAppNumber = ACADEMY_WHATSAPP_NUMBER
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const categories = [
    { id: 'all', label: 'All 10 Courses', icon: BookOpen, color: 'from-emerald-600 to-teal-700', activeBg: 'bg-[#064232]' },
    { id: 'quran', label: 'Quran Studies', icon: BookOpen, color: 'from-emerald-600 to-emerald-800', activeBg: 'bg-[#064e3b]' },
    { id: 'islamic', label: 'Islamic Learning', icon: GraduationCap, color: 'from-teal-600 to-cyan-700', activeBg: 'bg-[#0f766e]' },
    { id: 'arabic', label: 'Quranic Arabic', icon: Languages, color: 'from-indigo-600 to-blue-700', activeBg: 'bg-[#3730a3]' },
    { id: 'special', label: 'Special Pathway', icon: Heart, color: 'from-amber-600 to-orange-700', activeBg: 'bg-[#ea580c]' }
  ];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (course.arabicTitle && course.arabicTitle.includes(searchQuery)) ||
      course.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.studentCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleEnroll = (courseId: string, courseTitle: string) => {
    onOpenFreeTrial(courseId, courseTitle);
  };

  const handleLearnMore = (course: Course) => {
    setSelectedCourse(course);
  };

  return (
    <section id="courses" className="py-20 lg:py-28 bg-[#faf9f5] relative overflow-hidden">
      {/* Decorative Islamic Arabesque Colorful Background Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Star Motifs */}
      <div className="absolute top-12 right-12 text-[#c69b32]/25 text-6xl font-serif select-none pointer-events-none hidden lg:block animate-pulse">
        ۞
      </div>
      <div className="absolute bottom-12 left-12 text-[#064232]/20 text-6xl font-serif select-none pointer-events-none hidden lg:block">
        ۞
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Arabic Hadith & High Typography */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Authentic Arabic Hadith Header */}
          <div className="font-arabic text-xl sm:text-2xl text-[#b45309] font-bold mb-3 tracking-wide select-none drop-shadow-xs">
            « خَيْرُكُمْ مَنْ تَعَلَّمَ القُرْآنَ وَعَلَّمَهُ »
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
              10 Accredited Academic Programs
            </span>
          </div>

          <h2
            id="courses-headline"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#064232] tracking-tight mb-5"
          >
            Structured Online Quran & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b45309] via-[#d97706] to-[#f59e0b] font-serif italic">
              Islamic Studies
            </span> Academy
          </h2>

          <p className="text-base sm:text-lg text-[#4e655c] leading-relaxed">
            Every course is designed with a stage-by-stage learning pathway, certified male and female scholars, interactive whiteboard practice, and flexible 24/7 global scheduling.
          </p>

          {/* Value Proof Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 text-xs text-[#294236]">
            <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 font-semibold text-emerald-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Certified Male & Female Scholars
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 font-semibold text-amber-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              24/7 Global Time Zones
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 font-semibold text-purple-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              3-Day Free Trial (No Card)
            </span>
          </div>
        </div>

        {/* Filter Controls & Live Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Filter Tabs with Colorful Active Styling */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`filter-course-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                    isActive
                      ? `${cat.activeBg} text-white shadow-lg shadow-black/15 scale-102`
                      : 'bg-white text-[#4e655c] hover:bg-emerald-50/50 border border-[#e5e3d7] hover:border-emerald-300'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Live Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-amber-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="course-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, Arabic, topics..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white border border-[#e5e3d7] focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-[#8d9f96] shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-emerald-700 font-semibold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Counter if searching */}
        {searchQuery && (
          <div className="text-xs text-[#4e655c] mb-6 flex items-center justify-between">
            <span>
              Showing <strong>{filteredCourses.length}</strong> course{filteredCourses.length !== 1 ? 's' : ''} for "{searchQuery}"
            </span>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-emerald-700 font-bold underline hover:text-emerald-900"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 10 Courses Grid — Reusable High-Quality Colorful Cards */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredCourses.map((course) => (
              <CourseTemplateCard
                key={course.id}
                course={course}
                onEnroll={(courseId, courseTitle) => handleEnroll(courseId, courseTitle)}
                onLearnMore={handleLearnMore}
                customWhatsAppNumber={customWhatsAppNumber}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#e5e3d7] p-8 max-w-lg mx-auto mb-16 shadow-sm">
            <BookOpen className="w-12 h-12 text-amber-500 mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-xl font-bold text-[#064232] mb-2">No Courses Found</h3>
            <p className="text-xs sm:text-sm text-[#4e655c] mb-4">
              We couldn't find any courses matching your search criteria. Try a different keyword or view all courses.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#064232] text-white text-xs font-semibold"
            >
              View All 10 Courses
            </button>
          </div>
        )}

        {/* Bottom Banner: Custom Learning Plan Consultation */}
        <div className="rounded-3xl bg-gradient-to-br from-[#063327] via-[#094635] to-[#042119] p-8 sm:p-10 text-white relative overflow-hidden border border-amber-400/30 shadow-2xl">
          {/* Subtle Golden Radial Glow */}
          <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-300/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Personalized Consultation</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                Need Help Selecting the Right Course for Your Child or Yourself?
              </h3>
              <p className="text-sm text-emerald-100/90 leading-relaxed">
                Connect directly with our senior academic counselor on WhatsApp. We will assess current recitation level, clarify your goals, and tailor a personalized 1-on-1 syllabus.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => onOpenFreeTrial('nazra-quran', 'General Free Assessment')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#064232] bg-gradient-to-r from-[#fde047] via-[#f59e0b] to-[#d97706] hover:brightness-105 active:scale-95 shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Book 3-Day Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${customWhatsAppNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  'Assalamu Alaikum, I would like guidance on choosing the best course at Noor Ul Huda Online Quran Academy.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/15 hover:bg-white/25 border border-white/25 transition-all flex items-center justify-center gap-2 text-center backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Talk to Academic Advisor</span>
              </a>
            </div>
          </div>
        </div>

        {/* Shared Course Detail Modal */}
        <CourseDetailModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onSelectForTrial={(courseId, courseTitle) => handleEnroll(courseId, courseTitle || selectedCourse?.title || '')}
          customWhatsAppNumber={customWhatsAppNumber}
        />
      </div>
    </section>
  );
};
