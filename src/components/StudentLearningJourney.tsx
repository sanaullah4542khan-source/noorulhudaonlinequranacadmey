import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  Sparkles,
  Flame,
  Star,
  ChevronRight,
  Lock,
  Play,
  Volume2,
  Check,
  Target,
  Trophy,
  BookOpen,
  Calendar,
  GraduationCap,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';
import { StudentProfile, LearningJourneyMilestone, StudentLearningJourney as StudentLearningJourneyType } from '../types';
import { getStudentLearningJourney } from '../data/studentDashboardData';
import { useLanguage } from '../context/LanguageContext';

interface StudentLearningJourneyProps {
  student: StudentProfile;
  isDark?: boolean;
}

export const StudentLearningJourney: React.FC<StudentLearningJourneyProps> = ({
  student,
  isDark = false
}) => {
  const { isRtl, isUrdu, isArabic } = useLanguage();
  const journey: StudentLearningJourneyType = getStudentLearningJourney(student);

  // Interactive gamified state
  const [hasanatBonus, setHasanatBonus] = useState(0);
  const [hasClaimedDaily, setHasClaimedDaily] = useState(false);
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>(() => {
    // Default to the currently in-progress milestone or the first upcoming one
    const active = journey.milestones.find((m) => m.status === 'in-progress');
    return active ? active.id : journey.milestones[0]?.id || '';
  });
  const [showCelebrationToast, setShowCelebrationToast] = useState<string | null>(null);
  const [filterView, setFilterView] = useState<'all' | 'in-progress' | 'completed'>('all');

  // Mini Ayah Quiz state
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quizSelectedOption, setQuizSelectedOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizSuccess, setQuizSuccess] = useState(false);

  const totalHasanat = journey.hasanatPoints + hasanatBonus;
  const selectedMilestone = journey.milestones.find((m) => m.id === selectedMilestoneId) || journey.milestones[0];

  const handleClaimDailyHasanat = () => {
    if (hasClaimedDaily) return;
    setHasanatBonus((prev) => prev + 25);
    setHasClaimedDaily(true);
    setShowCelebrationToast(
      isArabic
        ? 'ما شاء الله! حصلت على +25 حسنة لمداومتك اليومية على تلاوة القرآن الكريم!'
        : isUrdu
        ? 'ماشاءاللہ! روزانہ تلاوت قرآن کی لگن پر آپ نے +25 حسنات حاصل کیں!'
        : 'MashaAllah! +25 Hasanat Points claimed for daily Quran recitation practice!'
    );
    setTimeout(() => setShowCelebrationToast(null), 4500);
  };

  const handleAnswerQuiz = (optionIdx: number) => {
    if (quizSubmitted) return;
    setQuizSelectedOption(optionIdx);
    setQuizSubmitted(true);
    // Correct option is 0 (Surah Al-Isra)
    if (optionIdx === 0) {
      setQuizSuccess(true);
      setHasanatBonus((prev) => prev + 50);
      setShowCelebrationToast(
        isArabic
          ? 'إجابة صحيحة وممتازة! +50 حسنة أضيفت إلى رصيدك!'
          : isUrdu
          ? 'درست جواب! +50 حسنات آپ کے سیکھنے کے سفر میں شامل ہو گئیں!'
          : 'Correct Answer! +50 Hasanat Points awarded to your learning journey!'
      );
      setTimeout(() => setShowCelebrationToast(null), 5000);
    } else {
      setQuizSuccess(false);
    }
  };

  const filteredMilestones = journey.milestones.filter((m) => {
    if (filterView === 'completed') return m.status === 'completed';
    if (filterView === 'in-progress') return m.status === 'in-progress' || m.status === 'upcoming';
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Toast Notification for Hasanat Celebration */}
      {showCelebrationToast && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-[#064232] via-[#085a44] to-[#043326] text-white border-2 border-[#facc15] shadow-xl flex items-center justify-between gap-4 animate-bounce-short">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#facc15] text-[#064232] flex items-center justify-center font-bold text-lg flex-shrink-0">
              🌟
            </div>
            <div>
              <div className="text-xs font-bold text-[#facc15] uppercase tracking-wider">
                {isArabic ? 'إنجاز قرآني مبارك' : isUrdu ? 'قرآنی کامیابی' : 'Hifz & Learning Reward'}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-emerald-50 mt-0.5">
                {showCelebrationToast}
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowCelebrationToast(null)}
            className="text-white/80 hover:text-white text-xs px-2 py-1 rounded bg-white/10"
          >
            ✕
          </button>
        </div>
      )}

      {/* 1. TOP GAMIFIED HERO STRIP */}
      <div
        className={`p-6 sm:p-7 rounded-3xl border shadow-md relative overflow-hidden ${
          isDark
            ? 'bg-gradient-to-br from-[#062c21] via-[#042018] to-[#031812] border-[#0e4e3c]'
            : 'bg-gradient-to-br from-[#064232] via-[#074c3a] to-[#043024] text-white border-[#c69b32]/40 shadow-lg'
        }`}
      >
        {/* Subtle Islamic geometric star watermark */}
        <div className="absolute -top-12 -right-12 w-48 h-48 opacity-10 pointer-events-none select-none text-white text-9xl">
          ۞
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-xl">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-emerald-200">
                {isArabic ? 'رحلة حفظ وتعلم القرآن الكريم' : isUrdu ? 'قرآنی تعلیمی سفر' : 'Quranic Learning & Hifz Journey'}
              </span>
              <span className="text-emerald-400">·</span>
              <span className="text-emerald-200 font-mono">
                Level {journey.studentLevel}: {journey.levelTitle}
              </span>
            </div>

            <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              {isArabic ? (
                <>المسار التعليمي والتدرج في الحفظ</>
              ) : isUrdu ? (
                <>تعلیمی منازل اور حفظ القرآن کا روڈ میپ</>
              ) : (
                <>Student Learning Journey & Hifz Milestones</>
              )}
            </h3>

            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-body">
              {isArabic ? (
                <>تتبع الدروس المنجزة والمراحل القادمة في حفظ القرآن الكريم مع التقييم المستمر من الشيخ المجاز.</>
              ) : isUrdu ? (
                <>مکمل شدہ اسباق، موجودہ منزل اور آئندہ حفظ سنگِ میل کا انٹرایکٹو گیمفائیڈ ٹریکر۔</>
              ) : (
                <>Track completed lessons, master upcoming Hifz milestones, and earn Hasanat badges on your verified learning pathway.</>
              )}
            </p>
          </div>

          {/* Gamified Stat Badges Island */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto">
            {/* Hasanat XP Points */}
            <div className="flex-1 sm:flex-initial p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center min-w-[110px]">
              <div className="flex items-center justify-center gap-1 text-[11px] text-emerald-200 font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#facc15]" />
                <span>Hasanat XP</span>
              </div>
              <div className="font-mono text-xl sm:text-2xl font-black text-[#facc15] mt-0.5">
                {totalHasanat.toLocaleString()}
              </div>
              <div className="text-[10px] text-emerald-200/80">Points Earned</div>
            </div>

            {/* Completed Lessons */}
            <div className="flex-1 sm:flex-initial p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center min-w-[110px]">
              <div className="flex items-center justify-center gap-1 text-[11px] text-emerald-200 font-bold uppercase tracking-wider">
                <BookOpen className="w-3 h-3 text-[#facc15]" />
                <span>Lessons</span>
              </div>
              <div className="font-mono text-xl sm:text-2xl font-black text-white mt-0.5">
                {journey.completedLessons} <span className="text-xs text-emerald-300 font-normal">/ {journey.targetLessons}</span>
              </div>
              <div className="text-[10px] text-emerald-200/80">
                {Math.round((journey.completedLessons / journey.targetLessons) * 100)}% Complete
              </div>
            </div>

            {/* Streak Multiplier */}
            <div className="flex-1 sm:flex-initial p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center min-w-[110px]">
              <div className="flex items-center justify-center gap-1 text-[11px] text-emerald-200 font-bold uppercase tracking-wider">
                <Flame className="w-3 h-3 text-orange-400" />
                <span>Streak</span>
              </div>
              <div className="font-mono text-xl sm:text-2xl font-black text-orange-300 mt-0.5">
                {student.streakDays}d 🔥
              </div>
              <div className="text-[10px] text-emerald-200/80">1.5x Bonus Multiplier</div>
            </div>
          </div>
        </div>

        {/* 2. PROGRESS BAR ALONG THE JOURNEY */}
        <div className="mt-6 pt-5 border-t border-white/15 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-emerald-100 flex-wrap gap-2">
            <span className="flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-[#facc15]" />
              <span>
                {isRtl ? 'المرحلة الحالية:' : 'Current Active Stage:'}{' '}
                <strong className="text-white">
                  Stage {journey.currentStage} of {journey.totalStages}
                </strong>
              </span>
            </span>
            <span className="font-mono font-bold text-[#facc15]">
              {journey.overallJourneyPercentage}% Overall Progress
            </span>
          </div>

          <div className="w-full h-3.5 bg-black/30 rounded-full p-0.5 overflow-hidden border border-white/20">
            <div
              className="h-full bg-gradient-to-r from-[#e6c564] via-[#facc15] to-[#25d366] rounded-full transition-all duration-1000 shadow-sm relative"
              style={{ width: `${journey.overallJourneyPercentage}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
            </div>
          </div>

          {/* Next milestone prompt with action */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-emerald-200 pt-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-bold text-[#facc15]">Next Target:</span>
              <span className="text-white font-medium">{journey.nextMilestoneTitle}</span>
              <span className="text-emerald-300/80">
                ({journey.nextMilestoneRemainingLessons} lessons to evaluation)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleClaimDailyHasanat}
                disabled={hasClaimedDaily}
                className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm ${
                  hasClaimedDaily
                    ? 'bg-white/20 text-emerald-200 cursor-default opacity-80'
                    : 'bg-[#facc15] hover:bg-[#e6c564] text-[#064232] cursor-pointer active:scale-95'
                }`}
                title="Claim your daily Quran practice points"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{hasClaimedDaily ? '✓ Daily Bonus Claimed' : 'Claim Daily Practice (+25 XP)'}</span>
              </button>

              <button
                onClick={() => setIsQuizOpen(!isQuizOpen)}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center gap-1 border border-white/20 transition-all cursor-pointer"
                title="Test Ayah retention in a mini-quiz"
              >
                <Trophy className="w-3.5 h-3.5 text-[#facc15]" />
                <span>{isQuizOpen ? 'Close Challenge' : 'Daily Ayah Quiz (+50 XP)'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Interactive Ayah Retention Quiz Drawer (Gamification Feature) */}
      {isQuizOpen && (
        <div
          className={`p-5 rounded-3xl border shadow-md transition-all ${
            isDark ? 'bg-[#042018] border-[#0e4e3c]' : 'bg-white border-[#e5e3d7]'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-[#facc15] text-[#064232] text-[10px] font-extrabold uppercase">
                Daily Hifz Challenge
              </span>
              <h4 className="font-heading text-sm sm:text-base font-semibold text-[#064232] dark:text-white">
                Test Your Ayah Retention & Earn +50 Hasanat
              </h4>
            </div>
            <button
              onClick={() => setIsQuizOpen(false)}
              className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-white"
            >
              Close
            </button>
          </div>

          <p className="text-xs sm:text-sm text-[#4e655c] dark:text-emerald-200/90 mb-4">
            Which Surah begins with the blessed Ayah:{' '}
            <span className="font-arabic font-bold text-base text-[#064232] dark:text-[#facc15]">
              « سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى »
            </span>
            ?
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { label: 'Surah Al-Isra (الإسراء)', correct: true },
              { label: 'Surah Al-Kahf (الكهف)', correct: false },
              { label: 'Surah Maryam (مريم)', correct: false }
            ].map((option, idx) => {
              const isSelected = quizSelectedOption === idx;
              let btnStyle = isDark
                ? 'bg-[#062c21] border-[#0a4233] text-white hover:border-[#c69b32]'
                : 'bg-[#faf9f5] border-[#e5e3d7] text-[#13241d] hover:border-[#064232]';

              if (quizSubmitted) {
                if (option.correct) {
                  btnStyle = 'bg-emerald-600 text-white border-emerald-500 font-bold';
                } else if (isSelected && !option.correct) {
                  btnStyle = 'bg-rose-500/20 text-rose-600 border-rose-400';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswerQuiz(idx)}
                  disabled={quizSubmitted}
                  className={`p-3 rounded-2xl border text-xs sm:text-sm font-medium transition-all text-left rtl:text-right flex items-center justify-between cursor-pointer ${btnStyle}`}
                >
                  <span>{option.label}</span>
                  {quizSubmitted && option.correct && <Check className="w-4 h-4 text-white" />}
                </button>
              );
            })}
          </div>

          {quizSubmitted && (
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-white/10 text-xs flex items-center justify-between">
              <span className={quizSuccess ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : 'text-rose-500'}>
                {quizSuccess
                  ? 'MashaAllah, correct! Surah Al-Isra is in Juz 15, matching your current Sabaq.'
                  : 'Try again next time! The correct answer is Surah Al-Isra.'}
              </span>
              <button
                onClick={() => {
                  setQuizSubmitted(false);
                  setQuizSelectedOption(null);
                  setIsQuizOpen(false);
                }}
                className="text-xs text-[#064232] dark:text-[#facc15] font-bold hover:underline"
              >
                Done
              </button>
            </div>
          )}
        </div>
      )}

      {/* 3. INTERACTIVE VISUAL LEARNING JOURNEY PROGRESS BAR / STEPPER */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border shadow-sm ${
          isDark ? 'bg-[#062c21] border-[#0e4e3c]' : 'bg-white border-[#e5e3d7]'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h4 className="font-heading text-lg sm:text-xl font-bold text-[#064232] dark:text-white">
              {isArabic ? 'محطات الحفظ والتقدم القرآني' : isUrdu ? 'قرآنی سنگِ میل اور مراحل' : 'Hifz Milestones & Pathway'}
            </h4>
            <p className="text-xs text-[#4e655c] dark:text-emerald-200/80 mt-0.5">
              Click any milestone node to view completed lessons, teacher remarks, and reward badge status.
            </p>
          </div>

          {/* Filter segment tabs */}
          <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-black/30 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setFilterView('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterView === 'all'
                  ? 'bg-white dark:bg-[#064232] text-[#064232] dark:text-[#facc15] shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-[#064232]'
              }`}
            >
              All ({journey.milestones.length})
            </button>
            <button
              onClick={() => setFilterView('in-progress')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterView === 'in-progress'
                  ? 'bg-white dark:bg-[#064232] text-[#064232] dark:text-[#facc15] shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-[#064232]'
              }`}
            >
              Active / Upcoming
            </button>
            <button
              onClick={() => setFilterView('completed')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterView === 'completed'
                  ? 'bg-white dark:bg-[#064232] text-[#064232] dark:text-[#facc15] shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-[#064232]'
              }`}
            >
              Completed ({journey.milestones.filter((m) => m.status === 'completed').length})
            </button>
          </div>
        </div>

        {/* Visual Connected Step Track (Horizontal on Desktop, Responsive wrapping) */}
        <div className="relative mb-8 pt-2">
          {/* Subtle background connecting line */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-1 bg-gray-200 dark:bg-black/40 z-0 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {filteredMilestones.map((milestone) => {
              const isSelected = selectedMilestoneId === milestone.id;
              const isCompleted = milestone.status === 'completed';
              const isInProgress = milestone.status === 'in-progress';
              const isUpcoming = milestone.status === 'upcoming';
              const isLocked = milestone.status === 'locked';

              return (
                <button
                  key={milestone.id}
                  onClick={() => setSelectedMilestoneId(milestone.id)}
                  className={`p-4 rounded-2xl border text-left rtl:text-right transition-all cursor-pointer flex flex-col justify-between relative group ${
                    isSelected
                      ? isDark
                        ? 'bg-[#042018] border-[#facc15] ring-2 ring-[#facc15]/30 shadow-lg'
                        : 'bg-[#faf9f5] border-[#064232] ring-2 ring-[#064232]/20 shadow-md'
                      : isDark
                      ? 'bg-[#042018]/60 border-[#0a4233] hover:border-[#c69b32]/60'
                      : 'bg-white border-[#e5e3d7] hover:border-[#c69b32]'
                  }`}
                >
                  {/* Active Beacon Pulse on in-progress milestone */}
                  {isInProgress && (
                    <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#facc15] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#facc15]"></span>
                    </span>
                  )}

                  <div>
                    {/* Top Node Indicator & Stage Badge */}
                    <div className="flex items-center justify-between mb-2.5">
                      <div
                        className={`w-9 h-9 rounded-2xl flex items-center justify-center font-bold text-xs shadow-sm transition-transform group-hover:scale-105 ${
                          isCompleted
                            ? 'bg-[#064232] text-[#facc15]'
                            : isInProgress
                            ? 'bg-[#facc15] text-[#064232] ring-2 ring-[#064232]'
                            : isUpcoming
                            ? 'bg-amber-100 text-amber-900 dark:bg-white/10 dark:text-amber-200'
                            : 'bg-gray-100 text-gray-400 dark:bg-black/40 dark:text-gray-500'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-5 h-5 text-[#facc15]" />
                        ) : isInProgress ? (
                          <Target className="w-5 h-5 text-[#064232] animate-spin-slow" />
                        ) : isUpcoming ? (
                          <BookOpen className="w-4 h-4" />
                        ) : (
                          <Lock className="w-4 h-4" />
                        )}
                      </div>

                      <span className="text-[10px] font-mono font-bold text-gray-500 dark:text-emerald-300">
                        Stage {milestone.stageNumber}
                      </span>
                    </div>

                    {/* Milestone Title */}
                    <h5 className="font-heading text-xs sm:text-sm font-bold text-[#064232] dark:text-white line-clamp-2 leading-snug">
                      {milestone.title}
                    </h5>

                    <div className="font-arabic text-[11px] text-[#c69b32] dark:text-[#facc15] truncate mt-0.5">
                      {milestone.arabicTitle}
                    </div>

                    <div className="text-[11px] text-[#4e655c] dark:text-emerald-200/70 truncate mt-1">
                      {milestone.juzOrSurah}
                    </div>
                  </div>

                  {/* Bottom Progress Bar & Status */}
                  <div className="mt-3 pt-2.5 border-t border-gray-100 dark:border-white/5 space-y-1.5">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-gray-500 dark:text-gray-400">
                        {milestone.completedLessons} / {milestone.totalLessons} lessons
                      </span>
                      <span className="font-mono font-bold text-[#064232] dark:text-[#facc15]">
                        {milestone.progressPercentage}%
                      </span>
                    </div>

                    <div className="w-full h-1.5 bg-gray-200 dark:bg-black/40 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isCompleted
                            ? 'bg-[#064232] dark:bg-[#facc15]'
                            : isInProgress
                            ? 'bg-[#facc15]'
                            : 'bg-gray-300 dark:bg-gray-700'
                        }`}
                        style={{ width: `${milestone.progressPercentage}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between pt-0.5">
                      <span
                        className={`text-[10px] font-semibold ${
                          isCompleted
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : isInProgress
                            ? 'text-amber-600 dark:text-[#facc15]'
                            : isUpcoming
                            ? 'text-blue-500'
                            : 'text-gray-400'
                        }`}
                      >
                        {isCompleted ? 'Mastered' : isInProgress ? 'In Progress' : isUpcoming ? 'Next Stage' : 'Locked'}
                      </span>
                      <span className="text-sm" title={milestone.rewardTitle}>
                        {milestone.rewardBadge}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. SELECTED MILESTONE INSPECTION DRAWER CARD */}
        {selectedMilestone && (
          <div
            className={`p-6 rounded-3xl border ${
              isDark ? 'bg-[#042018] border-[#0a4233]' : 'bg-[#faf9f5] border-[#e5e3d7]'
            }`}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#064232] text-[#facc15] flex items-center justify-center font-bold text-2xl shadow-sm border border-[#c69b32]/40">
                  {selectedMilestone.rewardBadge}
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-mono font-bold text-[#c69b32] dark:text-[#facc15]">
                      Stage {selectedMilestone.stageNumber} of {journey.totalStages}
                    </span>
                    <span>·</span>
                    <span className="text-[#4e655c] dark:text-emerald-300">
                      {selectedMilestone.juzOrSurah}
                    </span>
                  </div>
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-[#064232] dark:text-white">
                    {selectedMilestone.title}
                  </h4>
                  <div className="font-arabic text-sm text-[#c69b32] dark:text-[#facc15]">
                    {selectedMilestone.arabicTitle}
                  </div>
                </div>
              </div>

              {/* Status pill & XP reward */}
              <div className="flex items-center gap-3 self-stretch md:self-auto justify-between md:justify-end">
                <div className="text-right rtl:text-left">
                  <div className="text-[10px] text-gray-500 dark:text-emerald-300 uppercase font-semibold">Reward XP</div>
                  <div className="font-mono text-sm sm:text-base font-black text-[#064232] dark:text-[#facc15]">
                    +{selectedMilestone.xpPoints} Hasanat
                  </div>
                </div>

                <div
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
                    selectedMilestone.status === 'completed'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200'
                      : selectedMilestone.status === 'in-progress'
                      ? 'bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-[#facc15]'
                      : 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300'
                  }`}
                >
                  {selectedMilestone.status === 'completed'
                    ? '✓ Stage Mastered'
                    : selectedMilestone.status === 'in-progress'
                    ? '⚡ Current Active Stage'
                    : selectedMilestone.status === 'upcoming'
                    ? 'Target Stage'
                    : '🔒 Future Milestone'}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4e655c] dark:text-emerald-200/90 leading-relaxed mb-4">
              {selectedMilestone.subtitle}
            </p>

            {/* Curriculum Topics / Key Surahs Grid */}
            <div className="mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#064232] dark:text-emerald-300 block mb-2">
                Curriculum Focus & Surahs Covered in this Stage:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedMilestone.topicsCovered.map((topic, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#062c21] border border-[#e5e3d7] dark:border-[#0e4e3c] text-xs font-medium text-[#13241d] dark:text-emerald-100 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#facc15]" />
                    <span>{topic}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Teacher Remarks / Assessment Note */}
            {selectedMilestone.teacherRemarks && (
              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#062c21] border border-[#e5e3d7] dark:border-[#0e4e3c] text-xs flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-[#c69b32] dark:text-[#facc15] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#064232] dark:text-white">Teacher's Academic Remark: </span>
                  <span className="text-[#4e655c] dark:text-emerald-200/90 italic">
                    "{selectedMilestone.teacherRemarks}"
                  </span>
                  {selectedMilestone.dateOrEta && (
                    <span className="block text-[11px] text-gray-500 dark:text-emerald-300 mt-1">
                      Timeline: {selectedMilestone.dateOrEta}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
