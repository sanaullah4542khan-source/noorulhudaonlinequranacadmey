import React from 'react';
import { Course } from '../types';
import { CourseIllustration } from './CourseIllustration';
import { getCourseWhatsAppUrl, ACADEMY_WHATSAPP_NUMBER } from '../data/coursesData';
import {
  BookOpen,
  Sparkles,
  Award,
  GraduationCap,
  Scroll,
  Languages,
  Library,
  ShieldCheck,
  Compass,
  Heart,
  Clock,
  Globe2,
  Users,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Eye,
  BadgeCheck,
  Star
} from 'lucide-react';

interface CourseTemplateCardProps {
  course: Course;
  onEnroll: (courseId: string, courseTitle: string) => void;
  onLearnMore: (course: Course) => void;
  customWhatsAppNumber?: string;
}

// Map course slugs to distinct Lucide icon components with colorful matching styles
const getCourseIcon = (slug: string, accentColor = '#064232') => {
  switch (slug) {
    case 'nazra':
    case 'nazra-quran':
      return <BookOpen className="w-5 h-5 text-emerald-600" />;
    case 'tajweed':
    case 'quran-with-tajweed':
      return <Sparkles className="w-5 h-5 text-blue-600" />;
    case 'hifz':
    case 'hifz-ul-quran':
      return <Award className="w-5 h-5 text-purple-600" />;
    case 'islamic-studies':
    case 'basic-islamic-studies':
      return <GraduationCap className="w-5 h-5 text-teal-600" />;
    case 'tafsir':
    case 'tafsir-e-quran':
      return <Scroll className="w-5 h-5 text-rose-600" />;
    case 'arabic':
    case 'quranic-arabic':
    case 'quranic-arabic-courses':
      return <Languages className="w-5 h-5 text-indigo-600" />;
    case 'hadith':
    case 'quran-and-hadith':
      return <Library className="w-5 h-5 text-emerald-700" />;
    case 'duas':
    case 'masnoon-duas':
      return <ShieldCheck className="w-5 h-5 text-indigo-600" />;
    case 'stories':
    case 'quranic-prophetic-stories':
      return <Compass className="w-5 h-5 text-orange-600" />;
    case 'new-muslim':
    case 'new-muslim-basics':
    default:
      return <Heart className="w-5 h-5 text-teal-600" />;
  }
};

export const CourseTemplateCard: React.FC<CourseTemplateCardProps> = ({
  course,
  onEnroll,
  onLearnMore,
  customWhatsAppNumber = ACADEMY_WHATSAPP_NUMBER
}) => {
  const whatsAppUrl = getCourseWhatsAppUrl(course.title, customWhatsAppNumber);
  const theme = course.colorTheme || {
    accent: '#059669',
    gradient: 'from-[#064e3b] via-[#096b52] to-[#043327]',
    badgeBg: 'bg-emerald-500/15 border-emerald-500/30',
    badgeText: 'text-emerald-700',
    pillBg: 'bg-emerald-50 border-emerald-200',
    pillText: 'text-emerald-800',
    glowClass: 'card-glow-emerald',
    borderAccent: 'hover:border-emerald-500/50',
    btnGradient: 'from-emerald-600 via-emerald-700 to-emerald-800',
    popularTag: 'Popular Course'
  };

  return (
    <div
      id={`course-card-${course.id}`}
      className={`group bg-white rounded-3xl border border-[#e5e3d7] ${theme.borderAccent} shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${theme.glowClass} hover:-translate-y-1.5`}
    >
      {/* Top Colorful Accent Line */}
      <div
        className="h-1.5 w-full bg-gradient-to-r"
        style={{
          background: `linear-gradient(90deg, transparent, ${theme.accent}, #fbbf24, transparent)`
        }}
      />

      <div>
        {/* 1. Themed Visual Illustration with Dynamic Badges */}
        <div className="p-3.5 pb-0">
          <div className="relative rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-300">
            <CourseIllustration slug={course.illustrationSlug} className="w-full h-44 sm:h-48" />

            {/* Top Left: Category & Student Badge */}
            <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#fde047] border border-[#f59e0b]/40 text-[11px] font-bold tracking-wider uppercase shadow-sm">
                {course.badge}
              </span>
            </div>

            {/* Top Right: Highlighting Tag (e.g., ★ Most Popular) */}
            {theme.popularTag && (
              <div className="absolute top-3 right-3 z-10">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-[#d97706] to-[#b45309] text-white text-[10.5px] font-bold tracking-wide shadow-md border border-amber-300/40">
                  <Star className="w-3 h-3 fill-amber-300 text-amber-200" />
                  {theme.popularTag}
                </span>
              </div>
            )}

            {/* Quick Preview Hover Button */}
            <button
              onClick={() => onLearnMore(course)}
              id={`quick-preview-${course.id}`}
              className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-black/65 hover:bg-black/85 text-white backdrop-blur-md text-xs font-semibold flex items-center gap-1.5 transition-all opacity-90 group-hover:opacity-100 shadow-md"
              title="View full syllabus and lessons"
              aria-label={`View details for ${course.title}`}
            >
              <Eye className="w-3.5 h-3.5 text-amber-300" />
              <span>Syllabus</span>
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 pb-3">
          {/* Distinct Course Icon + Title Header */}
          <div className="flex items-start gap-3.5 mb-3.5">
            <div
              className={`w-12 h-12 rounded-2xl ${theme.pillBg} border flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform`}
            >
              {getCourseIcon(course.illustrationSlug, theme.accent)}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className={`text-[11px] uppercase tracking-wider font-bold ${theme.badgeText} block`}>
                  {course.studentCategory}
                </span>
                {/* Arabic Calligraphy Subtitle */}
                {course.arabicTitle && (
                  <span className="font-arabic text-sm text-[#8c6a12] font-semibold text-right truncate">
                    {course.arabicTitle}
                  </span>
                )}
              </div>

              <h3 className="font-serif text-xl sm:text-[22px] font-bold text-[#064232] leading-snug group-hover:text-[#0b513f] transition-colors mt-0.5">
                {course.title}
              </h3>
            </div>
          </div>

          {/* Short Professional Description */}
          <p className="text-xs sm:text-sm text-[#4e655c] leading-relaxed mb-4 min-h-[3.6rem]">
            {course.summary}
          </p>

          {/* "What You Will Learn" — Colorful Styled Container with 4 Checkpoints */}
          <div className={`mb-4.5 p-3.5 rounded-2xl ${theme.pillBg} border`}>
            <div className="flex items-center justify-between mb-2.5">
              <h4 className="text-[11.5px] font-bold uppercase tracking-wider text-[#064232] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                What You Will Learn
              </h4>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/80 text-[#064232] border border-[#e5e3d7]">
                {course.learningPoints.length} Milestones
              </span>
            </div>

            <ul className="space-y-2">
              {course.learningPoints.slice(0, 4).map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-[#172e23] leading-relaxed">
                  <CheckCircle2
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: theme.accent }}
                  />
                  <span className="line-clamp-2">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Course Metadata Specs Grid (4 Colorful Badges) */}
          <div className="grid grid-cols-2 gap-2 text-xs mb-4">
            {/* Duration */}
            <div className="p-2.5 rounded-xl bg-white border border-[#e5e3d7] flex items-center gap-2 shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
              </div>
              <div className="truncate">
                <span className="block text-[10px] text-[#6b8277] uppercase font-bold">Duration</span>
                <span className="font-bold text-[#13241d] text-xs truncate block">{course.duration}</span>
              </div>
            </div>

            {/* Audience */}
            <div className="p-2.5 rounded-xl bg-white border border-[#e5e3d7] flex items-center gap-2 shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                <Users className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <div className="truncate">
                <span className="block text-[10px] text-[#6b8277] uppercase font-bold">Target</span>
                <span className="font-bold text-[#13241d] text-xs truncate block">{course.studentCategory}</span>
              </div>
            </div>

            {/* Flexible Timing Note */}
            <div className="p-2.5 rounded-xl bg-white border border-[#e5e3d7] col-span-2 flex items-center gap-2.5 shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                <Globe2 className="w-3.5 h-3.5 text-blue-600" />
              </div>
              <span className="text-[11px] text-[#294236] font-medium leading-tight">
                {course.timing}
              </span>
            </div>

            {/* Teacher Information Line */}
            <div className="p-2.5 rounded-xl bg-white border border-[#e5e3d7] col-span-2 flex items-center gap-2.5 shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center flex-shrink-0">
                <BadgeCheck className="w-3.5 h-3.5 text-purple-600" />
              </div>
              <span className="text-[11px] text-[#294236] font-medium leading-tight">
                {course.teacherInfo}
              </span>
            </div>
          </div>

          {/* Pricing & Trial Trust Ribbon */}
          <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-[#faf9f5] border border-[#e5e3d7] text-xs">
            <span className="font-bold text-[#064232] text-xs">
              From $45/mo <span className="font-normal text-[#4e655c]">• 1-on-1 Classes</span>
            </span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold text-[10.5px]">
              3-Day Free Trial
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer: Dual Action Colorful CTAs */}
      <div className="p-5 sm:p-6 pt-3 border-t border-[#f0eee4] bg-gradient-to-b from-[#faf9f5] to-[#f4f2ea] space-y-2.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* Enroll Now CTA */}
          <button
            id={`enroll-btn-${course.id}`}
            onClick={() => onEnroll(course.id, course.title)}
            className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#064e3b] via-[#096b52] to-[#043327] hover:brightness-110 active:scale-[0.98] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-center group/btn relative overflow-hidden"
          >
            {/* Shimmer light effect */}
            <span className="relative z-10">Enroll Now</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform text-amber-300" />
          </button>

          {/* Chat on WhatsApp CTA */}
          <a
            id={`whatsapp-btn-${course.id}`}
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#25d366] to-[#128c7e] hover:brightness-105 active:scale-[0.98] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-center"
            title={`Chat on WhatsApp about ${course.title}`}
          >
            <div className="relative">
              <MessageCircle className="w-4 h-4 fill-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-white animate-ping" />
            </div>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* View Detailed Syllabus & Learning Pathway */}
        <button
          id={`learn-more-btn-${course.id}`}
          onClick={() => onLearnMore(course)}
          className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-[#064232] bg-white hover:bg-[#064232]/5 border border-[#e5e3d7] hover:border-[#064232]/40 transition-colors flex items-center justify-center gap-1.5 text-center shadow-xs"
        >
          <span>View Full Syllabus & Learning Pathway</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
        </button>
      </div>
    </div>
  );
};
