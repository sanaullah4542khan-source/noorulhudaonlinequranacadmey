import React, { useState, useEffect } from 'react';
import {
  X,
  Lock,
  User,
  GraduationCap,
  Calendar,
  BookOpen,
  CheckCircle2,
  Clock,
  Mic,
  Volume2,
  Video,
  Award,
  Star,
  LogOut,
  AlertCircle,
  MessageCircle,
  Play,
  Square,
  Upload,
  RefreshCw,
  FileText,
  ChevronRight,
  ShieldCheck,
  Building2,
  Sparkles,
  ExternalLink,
  Check
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { StudentProfile, HomeworkTask, StudentScheduleItem } from '../types';
import { DEMO_STUDENT_PROFILES } from '../data/studentDashboardData';
import { getSafirWhatsAppUrl } from '../data/safirData';
import { StudentLearningJourney } from './StudentLearningJourney';

interface StudentDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STORAGE_SESSION_KEY = 'nuh_student_dashboard_session';

export const StudentDashboardModal: React.FC<StudentDashboardModalProps> = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();
  const { isRtl } = useLanguage();

  // Authentication State
  const [activeStudentId, setActiveStudentId] = useState<string | null>(() => {
    try {
      return localStorage.getItem(STORAGE_SESSION_KEY) || null;
    } catch {
      return null;
    }
  });

  const [studentProfiles, setStudentProfiles] = useState<Record<string, StudentProfile>>(DEMO_STUDENT_PROFILES);
  const [loginInputId, setLoginInputId] = useState('NUH-8421');
  const [loginPin, setLoginPin] = useState('123456');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'progress' | 'schedule' | 'homework' | 'attendance'>('progress');

  // Interactive Live Classroom Simulator Modal
  const [activeClassroomSchedule, setActiveClassroomSchedule] = useState<StudentScheduleItem | null>(null);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);

  // Interactive Homework Submission State
  const [submittingHomeworkId, setSubmittingHomeworkId] = useState<string | null>(null);
  const [homeworkNotes, setHomeworkNotes] = useState('');
  const [isRecordingAudio, setIsRecordingAudio] = useState(false);
  const [recordedAudioDuration, setRecordedAudioDuration] = useState(0);
  const [hasRecordedAudio, setHasRecordedAudio] = useState(false);
  const [submissionSuccessMsg, setSubmissionSuccessMsg] = useState('');

  // Audio Reference Player Simulation
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);

  // Homework Filter
  const [homeworkFilter, setHomeworkFilter] = useState<'all' | 'pending' | 'submitted' | 'graded'>('all');

  const activeStudent: StudentProfile | null = activeStudentId ? studentProfiles[activeStudentId] || null : null;

  // Handle Recording Timer
  useEffect(() => {
    let timer: any;
    if (isRecordingAudio) {
      timer = setInterval(() => {
        setRecordedAudioDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRecordingAudio]);

  if (!isOpen) return null;

  const handleLogin = (idToUse?: string) => {
    const id = idToUse || loginInputId.trim().toUpperCase();
    if (studentProfiles[id]) {
      setActiveStudentId(id);
      try {
        localStorage.setItem(STORAGE_SESSION_KEY, id);
      } catch (err) {
        console.error(err);
      }
      setAuthError('');
    } else {
      setAuthError(isRtl ? 'غلط طالب علم آئی ڈی یا پاس ورڈ درج کیا گیا۔ براہ کرم دوبارہ کوشش کریں۔' : 'Invalid Student ID or PIN. Please use one of the verified demo accounts below.');
    }
  };

  const handleLogout = () => {
    setActiveStudentId(null);
    try {
      localStorage.removeItem(STORAGE_SESSION_KEY);
    } catch (err) {
      console.error(err);
    }
    setActiveClassroomSchedule(null);
    setSubmittingHomeworkId(null);
  };

  const handleStartRecording = () => {
    setIsRecordingAudio(true);
    setRecordedAudioDuration(0);
    setHasRecordedAudio(false);
  };

  const handleStopRecording = () => {
    setIsRecordingAudio(false);
    setHasRecordedAudio(true);
  };

  const handleSubmitHomework = (hwId: string) => {
    if (!activeStudent) return;

    const updatedHomework: HomeworkTask[] = activeStudent.homework.map((hw) => {
      if (hw.id === hwId) {
        return {
          ...hw,
          status: 'submitted',
          submittedDate: 'Just Now',
          submittedNotes: homeworkNotes.trim() || 'Recitation recorded and submitted for Ustadh review.',
          submittedAudioUrl: hasRecordedAudio ? 'recorded_recitation.webm' : undefined
        };
      }
      return hw;
    });

    const updatedProfile: StudentProfile = {
      ...activeStudent,
      homework: updatedHomework
    };

    setStudentProfiles((prev) => ({
      ...prev,
      [activeStudent.studentId]: updatedProfile
    }));

    setSubmittingHomeworkId(null);
    setHomeworkNotes('');
    setHasRecordedAudio(false);
    setRecordedAudioDuration(0);
    setSubmissionSuccessMsg(isRtl ? 'ہوم ورک کامیابی سے ارسال کر دیا گیا ہے! استاد جلد جائزہ لیں گے۔' : 'Homework submitted successfully! Your teacher will review and grade your recitation shortly.');
    setTimeout(() => setSubmissionSuccessMsg(''), 4000);
  };

  const formatSeconds = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div
      id="student-dashboard-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="student-dashboard-title"
    >
      <div
        className={`relative w-full max-w-6xl rounded-3xl shadow-2xl border flex flex-col overflow-hidden transition-all duration-300 max-h-[92vh] ${
          isDark
            ? 'bg-[#031913] border-[#0d3b2e] text-[#f3f4f6]'
            : 'bg-[#faf9f5] border-[#e5e3d7] text-[#13241d]'
        }`}
      >
        {/* Top Header Bar */}
        <div className="bg-[#064232] text-white p-4 sm:p-6 border-b border-[#0a523f] flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#facc15] text-[#064232] flex items-center justify-center shadow-md flex-shrink-0">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-[#facc15] text-[#064232]">
                  {isRtl ? 'محفوظ پورٹل' : 'Secure Portal'}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#facc15]" />
                  256-Bit SSL Encrypted
                </span>
              </div>
              <h2 id="student-dashboard-title" className="font-heading text-lg sm:text-2xl font-semibold text-white tracking-tight mt-0.5">
                {isRtl ? 'نور الہدیٰ آن لائن قرآن اکیڈمی - طلباء کا پورٹل' : 'Noor Ul Huda Student Learning Portal'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {activeStudent && (
              <button
                id="student-logout-btn"
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-red-500/20 text-xs font-semibold text-emerald-100 hover:text-red-200 border border-white/10 transition-colors"
                title="Sign out of student account"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>{isRtl ? 'خروج' : 'Log Out'}</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Student Portal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 flex-1">
          
          {/* ========================================================= */}
          {/* VIEW A: AUTHENTICATION / LOGIN PORTAL SCREEN */}
          {/* ========================================================= */}
          {!activeStudent ? (
            <div className="max-w-xl mx-auto py-8 sm:py-12">
              <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl ${
                isDark ? 'bg-[#062c21] border-[#0e4e3c]' : 'bg-white border-[#e5e3d7]'
              }`}>
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-3xl bg-[#064232]/10 dark:bg-[#facc15]/10 flex items-center justify-center mx-auto mb-4 border border-[#c69b32]/30">
                    <Lock className="w-8 h-8 text-[#064232] dark:text-[#facc15]" />
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-[#064232] dark:text-white mb-2">
                    {isRtl ? 'طلباء و سرپرست لاگ ان' : 'Student & Parent Login'}
                  </h3>
                  <p className="font-body font-normal text-xs sm:text-sm text-[#4e655c] dark:text-emerald-200/80 leading-relaxed">
                    {isRtl 
                      ? 'اپنے تفویض کردہ طالب علم آئی ڈی اور پاس ورڈ کے ذریعے اپنی پیش رفت، کلاس کا شیڈول اور ہوم ورک دیکھیں۔'
                      : 'Enter your enrolled Academy Student ID or PIN to access live classroom schedules, Sabaq & Tajweed progress, and homework.'}
                  </p>
                </div>

                {authError && (
                  <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs sm:text-sm flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{authError}</span>
                  </div>
                )}

                <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#064232] dark:text-emerald-200 mb-1.5">
                      {isRtl ? 'طالب علم آئی ڈی یا ای میل' : 'Student ID or Registered Email'}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 rtl:left-auto rtl:right-3.5 top-3.5 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={loginInputId}
                        onChange={(e) => setLoginInputId(e.target.value)}
                        placeholder="e.g. NUH-8421"
                        className={`w-full py-3 px-10 text-sm rounded-xl border focus:outline-none transition-all font-mono font-medium ${
                          isDark
                            ? 'bg-[#042018] border-[#0a4233] text-white focus:border-[#facc15]'
                            : 'bg-[#faf9f5] border-[#d8d5c8] text-[#13241d] focus:border-[#064232]'
                        }`}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#064232] dark:text-emerald-200 mb-1.5">
                      {isRtl ? 'سیکیورٹی پن / پاس ورڈ' : 'Security PIN / Password'}
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 rtl:left-auto rtl:right-3.5 top-3.5 w-4 h-4 text-gray-400" />
                      <input
                        type="password"
                        value={loginPin}
                        onChange={(e) => setLoginPin(e.target.value)}
                        placeholder="••••••"
                        className={`w-full py-3 px-10 text-sm rounded-xl border focus:outline-none transition-all font-mono ${
                          isDark
                            ? 'bg-[#042018] border-[#0a4233] text-white focus:border-[#facc15]'
                            : 'bg-[#faf9f5] border-[#d8d5c8] text-[#13241d] focus:border-[#064232]'
                        }`}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    id="submit-student-login-btn"
                    className="w-full py-3.5 rounded-xl bg-[#064232] hover:bg-[#08533f] text-white font-bold text-sm tracking-wide transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Lock className="w-4 h-4 text-[#facc15]" />
                    <span>{isRtl ? 'محفوظ پورٹل میں داخل ہوں' : 'Log In to Student Portal'}</span>
                  </button>
                </form>

                {/* 1-Click Fast Test Accounts */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
                  <span className="text-xs font-bold text-gray-500 dark:text-emerald-300 uppercase tracking-wider block mb-3 text-center">
                    {isRtl ? 'آزمائشی اکاؤنٹس (ایک کلک سے کھولیں)' : 'Quick Test Accounts (1-Click Instant Access)'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleLogin('NUH-8421')}
                      className={`p-3 rounded-xl border text-left rtl:text-right transition-all hover:border-[#c69b32] active:scale-95 cursor-pointer flex items-center gap-3 ${
                        isDark ? 'bg-[#042018] border-[#0a4233]' : 'bg-[#faf9f5] border-[#e5e3d7]'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-full bg-[#064232] text-[#facc15] font-bold flex items-center justify-center text-xs flex-shrink-0">
                        ZI
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-xs text-[#064232] dark:text-[#facc15] truncate">Zayd Ibrahim</div>
                        <div className="text-[11px] text-gray-500 dark:text-emerald-200/80 truncate">Nazra & Tajweed (ID: NUH-8421)</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLogin('NUH-9102')}
                      className={`p-3 rounded-xl border text-left rtl:text-right transition-all hover:border-[#c69b32] active:scale-95 cursor-pointer flex items-center gap-3 ${
                        isDark ? 'bg-[#042018] border-[#0a4233]' : 'bg-[#faf9f5] border-[#e5e3d7]'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-full bg-[#c69b32] text-[#13241d] font-bold flex items-center justify-center text-xs flex-shrink-0">
                        MF
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-xs text-[#064232] dark:text-[#facc15] truncate">Maryam Fatima</div>
                        <div className="text-[11px] text-gray-500 dark:text-emerald-200/80 truncate">Hifz Program (ID: NUH-9102)</div>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a
                    href={getSafirWhatsAppUrl('Assalamu Alaikum! I need assistance retrieving my Noor Ul Huda Student Portal login credentials.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#064232] dark:text-[#facc15] hover:underline font-semibold"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
                    <span>{isRtl ? 'پاس ورڈ بھول گئے؟ واٹس ایپ ایڈمن سے رابطہ کریں' : 'Forgot Student ID or PIN? Contact Academic Coordinator'}</span>
                  </a>
                </div>

              </div>
            </div>
          ) : (

            /* ========================================================= */
            /* VIEW B: ACTIVE AUTHENTICATED STUDENT DASHBOARD */
            /* ========================================================= */
            <div className="space-y-6">

              {/* Notification Banner */}
              {submissionSuccessMsg && (
                <div className="p-4 rounded-2xl bg-[#064232] text-white border border-[#facc15]/40 flex items-center justify-between gap-3 shadow-lg animate-bounce-short">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#facc15] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold">{submissionSuccessMsg}</span>
                  </div>
                  <button onClick={() => setSubmissionSuccessMsg('')} className="text-white/80 hover:text-white">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Student Profile Header Strip */}
              <div className={`p-6 rounded-3xl border shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${
                isDark ? 'bg-[#062c21] border-[#0e4e3c]' : 'bg-white border-[#e5e3d7]'
              }`}>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-[#064232] border-2 border-[#facc15] shadow-md flex items-center justify-center text-white font-bold text-xl">
                      {activeStudent.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#25d366] border-2 border-white dark:border-[#062c21] rounded-full" title="Active Student Status"></span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#facc15] text-[#13241d] font-mono text-[11px] font-extrabold tracking-wider">
                        {activeStudent.studentId}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-emerald-300 font-medium">
                        {activeStudent.packageType}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#064232] dark:text-white leading-tight">
                      {activeStudent.name} {activeStudent.urduName && <span className="font-arabic font-normal text-sm text-[#c69b32] dark:text-[#facc15]">({activeStudent.urduName})</span>}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4e655c] dark:text-emerald-200/90 mt-0.5 flex items-center gap-2 flex-wrap">
                      <span className="font-semibold">{activeStudent.enrolledCourse}</span>
                      <span>•</span>
                      <span>Teacher: <strong className="text-[#064232] dark:text-[#facc15]">{activeStudent.assignedTeacher.name}</strong></span>
                    </p>
                  </div>
                </div>

                {/* Quick High-Level Stats */}
                <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
                  <div className="text-center px-3 py-2 rounded-2xl bg-[#064232]/5 dark:bg-white/5 border border-[#064232]/10 dark:border-white/10">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-gray-500 dark:text-emerald-300 block">Attendance</span>
                    <span className="font-mono text-lg sm:text-xl font-black text-[#064232] dark:text-[#facc15]">{activeStudent.attendanceRate}%</span>
                  </div>
                  <div className="text-center px-3 py-2 rounded-2xl bg-[#064232]/5 dark:bg-white/5 border border-[#064232]/10 dark:border-white/10">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-gray-500 dark:text-emerald-300 block">Completed</span>
                    <span className="font-mono text-lg sm:text-xl font-black text-[#064232] dark:text-[#facc15]">{activeStudent.classesCompleted} Sessions</span>
                  </div>
                  <div className="text-center px-3 py-2 rounded-2xl bg-[#064232]/5 dark:bg-white/5 border border-[#064232]/10 dark:border-white/10">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-gray-500 dark:text-emerald-300 block">Streak</span>
                    <span className="font-mono text-lg sm:text-xl font-black text-[#064232] dark:text-[#facc15]">{activeStudent.streakDays} Classes</span>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs Bar */}
              <div className="flex items-center gap-2 border-b border-gray-200 dark:border-white/10 pb-2 overflow-x-auto">
                <button
                  id="tab-progress-btn"
                  onClick={() => setActiveTab('progress')}
                  className={`px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'progress'
                      ? 'bg-[#064232] text-white shadow-md'
                      : 'hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  <Award className="w-4 h-4 text-[#facc15]" />
                  <span>{isRtl ? 'پیش رفت اور تجوید' : 'Progress & Curriculum'}</span>
                </button>

                <button
                  id="tab-schedule-btn"
                  onClick={() => setActiveTab('schedule')}
                  className={`px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'schedule'
                      ? 'bg-[#064232] text-white shadow-md'
                      : 'hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  <Calendar className="w-4 h-4 text-[#facc15]" />
                  <span>{isRtl ? 'کلاس شیڈول اور لائیو روم' : 'Upcoming Schedules'}</span>
                  <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse"></span>
                </button>

                <button
                  id="tab-homework-btn"
                  onClick={() => setActiveTab('homework')}
                  className={`px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'homework'
                      ? 'bg-[#064232] text-white shadow-md'
                      : 'hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-[#facc15]" />
                  <span>{isRtl ? 'تفویض کردہ ہوم ورک' : 'Assigned Homework'}</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-[#facc15] text-[#064232] text-[10px] font-extrabold">
                    {activeStudent.homework.filter((h) => h.status === 'pending').length}
                  </span>
                </button>

                <button
                  id="tab-attendance-btn"
                  onClick={() => setActiveTab('attendance')}
                  className={`px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'attendance'
                      ? 'bg-[#064232] text-white shadow-md'
                      : 'hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#facc15]" />
                  <span>{isRtl ? 'حاضری اور اسباق رپورٹ' : 'Attendance & Logs'}</span>
                </button>
              </div>

              {/* ========================================================= */}
              {/* TAB 1: PROGRESS & CURRICULUM */}
              {/* ========================================================= */}
              {activeTab === 'progress' && (
                <div className="space-y-6">
                  
                  {/* Gamified Learning Journey Progress Bar & Hifz Milestones */}
                  <StudentLearningJourney student={activeStudent} isDark={isDark} />

                  {/* 3 Pillars of Quranic Learning: Sabaq, Sabqi, Manzil */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Sabaq */}
                    <div className={`p-5 rounded-2xl border flex flex-col justify-between ${
                      isDark ? 'bg-[#042018] border-[#0a4233]' : 'bg-[#faf9f5] border-[#e5e3d7]'
                    }`}>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-2 py-0.5 rounded-md bg-[#facc15] text-[#064232] text-[10px] font-extrabold uppercase">
                            Sabaq (New Lesson)
                          </span>
                          <span className="text-xs font-mono font-bold text-[#064232] dark:text-[#facc15]">
                            Score: {activeStudent.currentSabaq.makharijScore}%
                          </span>
                        </div>
                        <h4 className="font-heading text-base font-semibold text-[#064232] dark:text-white">
                          {activeStudent.currentSabaq.surahName}
                        </h4>
                        <p className="font-body font-normal text-xs text-gray-600 dark:text-emerald-200/90 mt-1">
                          {activeStudent.currentSabaq.ayahRange} (Juz {activeStudent.currentSabaq.juzNumber})
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-white/10 text-[11px] text-emerald-700 dark:text-emerald-300 font-medium">
                        Status: {activeStudent.currentSabaq.status}
                      </div>
                    </div>

                    {/* Sabqi */}
                    <div className={`p-5 rounded-2xl border flex flex-col justify-between ${
                      isDark ? 'bg-[#042018] border-[#0a4233]' : 'bg-[#faf9f5] border-[#e5e3d7]'
                    }`}>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-2 py-0.5 rounded-md bg-[#064232] text-emerald-200 text-[10px] font-extrabold uppercase">
                            Sabqi (Recent Revision)
                          </span>
                          <span className="text-xs font-mono font-bold text-[#064232] dark:text-[#facc15]">
                            Retention: {activeStudent.currentSabqi.retentionScore}%
                          </span>
                        </div>
                        <h4 className="font-heading text-base font-semibold text-[#064232] dark:text-white">
                          {activeStudent.currentSabqi.surahName}
                        </h4>
                        <p className="font-body font-normal text-xs text-gray-600 dark:text-emerald-200/90 mt-1">
                          {activeStudent.currentSabqi.ayahRange}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-white/10 text-[11px] text-emerald-700 dark:text-emerald-300 font-medium">
                        Status: {activeStudent.currentSabqi.status}
                      </div>
                    </div>

                    {/* Manzil */}
                    <div className={`p-5 rounded-2xl border flex flex-col justify-between ${
                      isDark ? 'bg-[#042018] border-[#0a4233]' : 'bg-[#faf9f5] border-[#e5e3d7]'
                    }`}>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-2 py-0.5 rounded-md bg-[#c69b32] text-[#13241d] text-[10px] font-extrabold uppercase">
                            Manzil (Long-Term Retention)
                          </span>
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        </div>
                        <h4 className="font-heading text-base font-semibold text-[#064232] dark:text-white">
                          {activeStudent.currentManzil.juzCovered}
                        </h4>
                        <p className="font-body font-normal text-xs text-gray-600 dark:text-emerald-200/90 mt-1">
                          Full Continuous Juz Revision
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-white/10 text-[11px] text-emerald-700 dark:text-emerald-300 font-medium">
                        Status: {activeStudent.currentManzil.status}
                      </div>
                    </div>
                  </div>

                  {/* Tajweed Mastery Progress Matrix */}
                  <div className={`p-6 rounded-3xl border ${
                    isDark ? 'bg-[#062c21] border-[#0e4e3c]' : 'bg-white border-[#e5e3d7]'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-heading text-lg font-semibold text-[#064232] dark:text-white">
                        {isRtl ? 'تجوید اور مخارج کی مہارت کی سطح' : 'Tajweed & Makharij Competency Matrix'}
                      </h4>
                      <span className="text-xs text-gray-500 dark:text-emerald-200/80">Evaluated by Ustadh</span>
                    </div>

                    <div className="space-y-4">
                      {activeStudent.tajweedSkills.map((item, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between text-xs mb-1 font-medium">
                            <span className="text-[#064232] dark:text-white">{item.skill}</span>
                            <span className="font-mono font-bold text-[#c69b32] dark:text-[#facc15]">{item.mastery}%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 dark:bg-black/30 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#064232] dark:bg-[#facc15] rounded-full"
                              style={{ width: `${item.mastery}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 2: UPCOMING SCHEDULES & VIRTUAL CLASSROOM */}
              {/* ========================================================= */}
              {activeTab === 'schedule' && (
                <div className="space-y-6">
                  
                  {/* Next Live Class Callout Card */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#064232] via-[#084e3b] to-[#043326] text-white shadow-xl border-2 border-[#facc15]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#facc15] text-[#064232] text-xs font-black uppercase tracking-wider flex items-center gap-1.5 animate-pulse">
                          <Video className="w-3.5 h-3.5" /> Next Live Session
                        </span>
                        <span className="text-xs text-emerald-200">
                          {activeStudent.schedules[0]?.time} ({activeStudent.timezone.split(' ')[0]})
                        </span>
                      </div>
                      <h4 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
                        {activeStudent.schedules[0]?.courseName}
                      </h4>
                      <p className="font-body font-normal text-xs sm:text-sm text-emerald-100/90 max-w-xl">
                        Focus: <span className="text-[#facc15] font-semibold">{activeStudent.schedules[0]?.focusTopic}</span>
                      </p>
                      <div className="flex items-center gap-2 text-xs text-emerald-200 pt-1">
                        <span>Ustadh: <strong>{activeStudent.assignedTeacher.name}</strong></span>
                        <span>•</span>
                        <span>Duration: {activeStudent.schedules[0]?.duration}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                      <button
                        id="launch-virtual-classroom-btn"
                        onClick={() => setActiveClassroomSchedule(activeStudent.schedules[0])}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#facc15] hover:bg-[#eab308] text-[#064232] font-black text-sm tracking-wide transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Video className="w-4 h-4 text-[#064232]" />
                        <span>Enter 1-on-1 Classroom</span>
                      </button>

                      <a
                        href={getSafirWhatsAppUrl(`Assalamu Alaikum! I would like to request rescheduling of my class scheduled for ${activeStudent.schedules[0]?.date}. Student ID: ${activeStudent.studentId}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-4 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors text-center"
                        title="Reschedule policy: 24h notice appreciated"
                      >
                        Request Reschedule
                      </a>
                    </div>
                  </div>

                  {/* Weekly Scheduled Sessions List */}
                  <div className={`p-6 rounded-3xl border ${
                    isDark ? 'bg-[#062c21] border-[#0e4e3c]' : 'bg-white border-[#e5e3d7]'
                  }`}>
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-heading text-lg font-semibold text-[#064232] dark:text-white">
                        {isRtl ? 'ہفتہ وار کلاسز کا شیڈول' : 'Upcoming Weekly Class Schedule'}
                      </h4>
                      <span className="text-xs text-gray-500 dark:text-emerald-300">Timezone: {activeStudent.timezone}</span>
                    </div>

                    <div className="divide-y divide-gray-200 dark:divide-white/10">
                      {activeStudent.schedules.map((sch) => (
                        <div key={sch.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-start gap-3.5">
                            <div className="w-10 h-10 rounded-2xl bg-[#064232]/10 dark:bg-[#facc15]/10 text-[#064232] dark:text-[#facc15] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-1">
                              <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-xs sm:text-sm text-[#064232] dark:text-white">
                                  {sch.date}
                                </span>
                                <span className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase ${
                                  sch.status === 'upcoming' 
                                    ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200' 
                                    : 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300'
                                }`}>
                                  {sch.status}
                                </span>
                              </div>
                              <p className="text-xs text-[#4e655c] dark:text-emerald-200/90">
                                {sch.focusTopic}
                              </p>
                              <div className="text-[11px] text-gray-400 mt-1 flex items-center gap-2">
                                <Clock className="w-3 h-3" />
                                <span>{sch.time} ({sch.duration})</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 self-end sm:self-center">
                            {sch.status === 'upcoming' && (
                              <button
                                onClick={() => setActiveClassroomSchedule(sch)}
                                className="px-3.5 py-1.5 rounded-xl bg-[#064232] hover:bg-[#095742] text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                              >
                                <Video className="w-3.5 h-3.5 text-[#facc15]" />
                                <span>Join Room</span>
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Assigned Teacher Card */}
                  <div className={`p-6 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
                    isDark ? 'bg-[#042018] border-[#0a4233]' : 'bg-[#faf9f5] border-[#e5e3d7]'
                  }`}>
                    <div className="flex items-center gap-4 text-center sm:text-left rtl:sm:text-right">
                      <div className="w-14 h-14 rounded-2xl bg-[#064232] text-[#facc15] font-bold flex items-center justify-center text-lg shadow-sm flex-shrink-0">
                        {activeStudent.assignedTeacher.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-emerald-300 block">
                          Assigned Academy Teacher
                        </span>
                        <h4 className="font-heading text-lg font-semibold text-[#064232] dark:text-white">
                          {activeStudent.assignedTeacher.name}
                        </h4>
                        <p className="font-body font-normal text-xs text-[#4e655c] dark:text-emerald-200/80">
                          {activeStudent.assignedTeacher.title}
                        </p>
                      </div>
                    </div>

                    <a
                      href={getSafirWhatsAppUrl(`Assalamu Alaikum Ustadh ${activeStudent.assignedTeacher.name}! I have a quick academic question regarding my current Quran Sabaq.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-xs transition-all flex items-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Message Teacher on WhatsApp</span>
                    </a>
                  </div>

                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 3: ASSIGNED HOMEWORK & AUDIO PRACTICE */}
              {/* ========================================================= */}
              {activeTab === 'homework' && (
                <div className="space-y-6">

                  {/* Homework Status Filter Filter Pills */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {(['all', 'pending', 'submitted', 'graded'] as const).map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setHomeworkFilter(filter)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          homeworkFilter === filter
                            ? 'bg-[#064232] text-white shadow-sm'
                            : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>

                  {/* Homework Tasks Cards List */}
                  <div className="space-y-4">
                    {activeStudent.homework
                      .filter((hw) => homeworkFilter === 'all' || hw.status === homeworkFilter)
                      .map((hw) => (
                        <div
                          key={hw.id}
                          className={`p-6 rounded-3xl border transition-all ${
                            isDark ? 'bg-[#062c21] border-[#0e4e3c]' : 'bg-white border-[#e5e3d7]'
                          }`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-2">
                              <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                                hw.status === 'pending'
                                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                  : hw.status === 'submitted'
                                  ? 'bg-blue-100 text-blue-900 border border-blue-300'
                                  : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                              }`}>
                                {hw.status}
                              </span>
                              <span className="text-xs text-gray-500 dark:text-emerald-300">
                                Due: <strong>{hw.dueDate}</strong>
                              </span>
                            </div>

                            {hw.teacherGrade && (
                              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#facc15]/20 text-[#c69b32] dark:text-[#facc15] border border-[#facc15]/40 text-xs font-bold">
                                <Star className="w-3.5 h-3.5 fill-current" />
                                <span>Grade: {hw.teacherGrade}</span>
                              </div>
                            )}
                          </div>

                          <h4 className="font-heading text-lg font-semibold text-[#064232] dark:text-white mb-1">
                            {hw.title}
                          </h4>
                          <p className="text-xs text-[#c69b32] dark:text-[#facc15] font-nav font-medium mb-2">
                            {hw.surahOrTopic} {hw.ayahRange && `• ${hw.ayahRange}`}
                          </p>
                          <p className="font-body font-normal text-xs text-[#4e655c] dark:text-emerald-200/90 leading-relaxed mb-4">
                            {hw.description}
                          </p>

                          {/* Reference Audio Player Simulation */}
                          {hw.audioReferenceUrl && (
                            <div className={`p-3 rounded-2xl border mb-4 flex items-center justify-between gap-3 ${
                              isDark ? 'bg-[#042018] border-[#0a4233]' : 'bg-[#faf9f5] border-[#e5e3d7]'
                            }`}>
                              <div className="flex items-center gap-2.5">
                                <Volume2 className="w-4 h-4 text-[#064232] dark:text-[#facc15]" />
                                <div className="text-xs">
                                  <span className="font-bold text-[#064232] dark:text-white block">Listen to Ustadh Reference Recitation</span>
                                  <span className="text-[10px] text-gray-500 dark:text-emerald-300">Duration: {hw.audioDuration || '1:30 min'}</span>
                                </div>
                              </div>
                              <button
                                onClick={() => setPlayingAudioId(playingAudioId === hw.id ? null : hw.id)}
                                className="px-3 py-1.5 rounded-xl bg-[#064232] text-[#facc15] hover:bg-[#085a44] text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                              >
                                {playingAudioId === hw.id ? (
                                  <>
                                    <Square className="w-3 h-3" /> Stop
                                  </>
                                ) : (
                                  <>
                                    <Play className="w-3 h-3" /> Play Recitation
                                  </>
                                )}
                              </button>
                            </div>
                          )}

                          {/* Teacher Remarks Box for Graded Assignments */}
                          {hw.teacherRemarks && (
                            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-900 dark:text-emerald-200 mb-4">
                              <span className="font-bold block mb-1">Teacher Feedback & Correction Remarks:</span>
                              <p className="italic">"{hw.teacherRemarks}"</p>
                            </div>
                          )}

                          {/* Submission Trigger */}
                          {hw.status === 'pending' ? (
                            <button
                              onClick={() => setSubmittingHomeworkId(hw.id)}
                              className="px-4 py-2.5 rounded-xl bg-[#064232] hover:bg-[#085a44] text-white font-bold text-xs transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                            >
                              <Mic className="w-3.5 h-3.5 text-[#facc15]" />
                              <span>Record & Submit Recitation</span>
                            </button>
                          ) : (
                            <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Submitted on {hw.submittedDate || 'Recent Session'}</span>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>

                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 4: ATTENDANCE & HISTORICAL LESSON LOGS */}
              {/* ========================================================= */}
              {activeTab === 'attendance' && (
                <div className="space-y-6">
                  
                  {/* Attendance Performance Summary */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className={`p-6 rounded-3xl border text-center ${
                      isDark ? 'bg-[#062c21] border-[#0e4e3c]' : 'bg-white border-[#e5e3d7]'
                    }`}>
                      <span className="text-xs uppercase font-bold text-gray-500 dark:text-emerald-300 block mb-1">
                        Punctuality Score
                      </span>
                      <span className="font-heading text-3xl font-semibold text-[#064232] dark:text-[#facc15]">
                        {activeStudent.attendanceRate}%
                      </span>
                      <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-semibold">
                        Outstanding Attendance Record
                      </p>
                    </div>

                    <div className={`p-6 rounded-3xl border text-center ${
                      isDark ? 'bg-[#062c21] border-[#0e4e3c]' : 'bg-white border-[#e5e3d7]'
                    }`}>
                      <span className="text-xs uppercase font-bold text-gray-500 dark:text-emerald-300 block mb-1">
                        Total Sessions Attended
                      </span>
                      <span className="font-heading text-3xl font-semibold text-[#064232] dark:text-[#facc15]">
                        {activeStudent.classesCompleted} / {activeStudent.totalClassesBooked}
                      </span>
                      <p className="text-[11px] text-gray-500 dark:text-emerald-200/80 mt-1">
                        Since {activeStudent.enrollmentDate}
                      </p>
                    </div>

                    <div className={`p-6 rounded-3xl border text-center ${
                      isDark ? 'bg-[#062c21] border-[#0e4e3c]' : 'bg-white border-[#e5e3d7]'
                    }`}>
                      <span className="text-xs uppercase font-bold text-gray-500 dark:text-emerald-300 block mb-1">
                        Current Streak
                      </span>
                      <span className="font-heading text-3xl font-semibold text-[#064232] dark:text-[#facc15]">
                        {activeStudent.streakDays} Classes
                      </span>
                      <p className="text-[11px] text-amber-600 dark:text-amber-400 mt-1 font-semibold">
                        🔥 Daily Consistency Badge
                      </p>
                    </div>
                  </div>

                  {/* Historical Class Session Logs Table */}
                  <div className={`p-6 rounded-3xl border overflow-hidden ${
                    isDark ? 'bg-[#062c21] border-[#0e4e3c]' : 'bg-white border-[#e5e3d7]'
                  }`}>
                    <h4 className="font-heading text-lg font-semibold text-[#064232] dark:text-white mb-4">
                      {isRtl ? 'حالیہ کلاسز کا ریکارڈ اور استاد کے تاثرات' : 'Recent 1-on-1 Class Logs & Teacher Feedback'}
                    </h4>

                    <div className="space-y-3">
                      {activeStudent.recentClassLogs.map((log) => (
                        <div
                          key={log.id}
                          className={`p-4 rounded-2xl border ${
                            isDark ? 'bg-[#042018] border-[#0a4233]' : 'bg-[#faf9f5] border-[#e5e3d7]'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="font-bold text-xs text-[#064232] dark:text-white">
                              {log.date} • {log.topic}
                            </span>
                            <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                              <Star className="w-3.5 h-3.5 fill-current" />
                              <span>{log.rating} / 5</span>
                            </div>
                          </div>
                          <p className="text-xs text-[#4e655c] dark:text-emerald-200/90 leading-relaxed italic">
                            "{log.teacherNotes}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

            </div>
          )}
        </div>

        {/* ========================================================= */}
        {/* MODAL C: INTERACTIVE RECORD & SUBMIT HOMEWORK DRAWER */}
        {/* ========================================================= */}
        {submittingHomeworkId && activeStudent && (
          <div className="fixed inset-0 z-60 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className={`w-full max-w-lg rounded-3xl p-6 sm:p-8 border shadow-2xl ${
              isDark ? 'bg-[#062c21] border-[#0e4e3c] text-white' : 'bg-white border-[#e5e3d7] text-[#13241d]'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Mic className="w-5 h-5 text-[#facc15]" />
                  <h4 className="font-heading text-xl font-semibold">Submit Recitation Assignment</h4>
                </div>
                <button
                  onClick={() => setSubmittingHomeworkId(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-gray-500 dark:text-emerald-200/80 mb-6">
                Recite clearly with proper Tajweed into your microphone, or add submission notes for your teacher.
              </p>

              {/* Voice Recorder Simulator */}
              <div className="p-6 rounded-2xl bg-[#042018] text-white text-center mb-4 border border-[#0a4233]">
                <div className="w-16 h-16 rounded-full bg-[#064232] mx-auto flex items-center justify-center mb-3 border-2 border-[#facc15]/50">
                  <Mic className={`w-8 h-8 ${isRecordingAudio ? 'text-red-400 animate-pulse' : 'text-[#facc15]'}`} />
                </div>

                <div className="font-mono text-2xl font-black text-white mb-2">
                  {formatSeconds(recordedAudioDuration)}
                </div>

                {isRecordingAudio ? (
                  <button
                    onClick={handleStopRecording}
                    className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all flex items-center gap-2 mx-auto active:scale-95 cursor-pointer"
                  >
                    <Square className="w-4 h-4" /> Stop Recording
                  </button>
                ) : (
                  <button
                    onClick={handleStartRecording}
                    className="px-5 py-2 rounded-xl bg-[#facc15] hover:bg-[#eab308] text-[#064232] text-xs font-black transition-all flex items-center gap-2 mx-auto active:scale-95 cursor-pointer"
                  >
                    <Play className="w-4 h-4" /> {hasRecordedAudio ? 'Re-record Recitation' : 'Start Audio Recording'}
                  </button>
                )}

                {hasRecordedAudio && (
                  <div className="text-xs text-emerald-400 font-semibold mt-3 flex items-center justify-center gap-1">
                    <Check className="w-4 h-4" /> Recitation recorded successfully ({formatSeconds(recordedAudioDuration)})
                  </div>
                )}
              </div>

              {/* Text Notes to Teacher */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                  Notes or Questions for Teacher (Optional)
                </label>
                <textarea
                  value={homeworkNotes}
                  onChange={(e) => setHomeworkNotes(e.target.value)}
                  placeholder="e.g. Practiced Madd Muttasil 5 times as instructed. Please review my elongation on Ayah 24."
                  rows={3}
                  className={`w-full p-3 rounded-xl border text-xs focus:outline-none ${
                    isDark
                      ? 'bg-[#042018] border-[#0a4233] text-white'
                      : 'bg-[#faf9f5] border-[#d8d5c8] text-[#13241d]'
                  }`}
                />
              </div>

              <div className="flex items-center gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => setSubmittingHomeworkId(null)}
                  className="px-4 py-2.5 rounded-xl border text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleSubmitHomework(submittingHomeworkId)}
                  className="px-6 py-2.5 rounded-xl bg-[#064232] hover:bg-[#085a44] text-white font-bold text-xs transition-all shadow-md active:scale-95 flex items-center gap-1.5 cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5 text-[#facc15]" />
                  <span>Submit Assignment</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* MODAL D: INTERACTIVE 1-ON-1 VIRTUAL CLASSROOM PREVIEW */}
        {/* ========================================================= */}
        {activeClassroomSchedule && activeStudent && (
          <div className="fixed inset-0 z-60 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
            <div className="w-full max-w-4xl bg-[#041c15] text-white rounded-3xl border border-[#0e4e3c] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
              {/* Classroom Top Bar */}
              <div className="p-4 bg-[#064232] border-b border-[#0a523f] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#25d366] animate-ping"></div>
                  <div>
                    <h4 className="font-heading text-sm sm:text-base font-semibold text-white leading-none">
                      Live 1-on-1 Quran Classroom • {activeClassroomSchedule.courseName}
                    </h4>
                    <span className="text-[11px] font-body text-emerald-200">
                      Ustadh: {activeClassroomSchedule.teacherName} | Student: {activeStudent.name}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveClassroomSchedule(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Classroom Stage */}
              <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 overflow-y-auto">
                {/* Digital Mushaf / Quran Screen */}
                <div className="md:col-span-2 bg-[#02130e] rounded-2xl p-4 sm:p-6 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                      <span className="text-xs font-nav font-medium text-[#facc15]">
                        {activeStudent.currentSabaq.surahName} (Ayahs 23 - 26)
                      </span>
                      <span className="text-[11px] text-emerald-300">Tajweed Tartil Mode</span>
                    </div>

                    <div className="font-arabic text-xl sm:text-2xl lg:text-3xl text-center leading-loose py-4 text-emerald-50 select-none">
                      وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوٓا۟ إِلَّآ إِيَّاهُ وَبِٱلْوَٰلِدَيْنِ إِحْسَٰنًا ۚ
                      <br />
                      إِمَّا يَبْلُغَنَّ عِندَكَ ٱلْكِبَرَ أَحَدُهُمَآ أَوْ كِلَاهُمَا فَلَا تَقُل لَّهُمَآ أُفٍّۢ وَلَا تَنْهَرْهُمَا وَقُل لَّهُمَا قَوْلًا كَرِيمًا
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                    <span>Madd Muttasil (4-5 Harakahs highlighted)</span>
                    <span className="text-[#facc15] font-semibold">Teacher Highlighting Enabled</span>
                  </div>
                </div>

                {/* Video Feeds & Teacher Status */}
                <div className="space-y-4">
                  {/* Teacher Stream Simulator */}
                  <div className="h-44 rounded-2xl bg-[#062c21] border border-white/10 p-3 flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-center justify-between z-10">
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#25d366] text-[#041c15]">
                        Teacher Online
                      </span>
                      <span className="text-[10px] text-emerald-200">1080p HD</span>
                    </div>
                    <div className="text-center z-10">
                      <div className="w-12 h-12 rounded-full bg-[#064232] border-2 border-[#facc15] flex items-center justify-center font-bold text-sm mx-auto mb-1">
                        Ustadh
                      </div>
                      <span className="text-xs font-bold text-white">{activeClassroomSchedule.teacherName}</span>
                    </div>
                    <div className="text-[10px] text-emerald-300 z-10 text-center">Connected via Low-Latency Audio</div>
                  </div>

                  {/* Student Stream Simulator */}
                  <div className="h-40 rounded-2xl bg-[#031913] border border-white/10 p-3 flex flex-col justify-between relative">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-emerald-300">You ({activeStudent.name})</span>
                      <span className="text-[10px] text-gray-400">{isVideoOn ? 'Cam On' : 'Cam Off'}</span>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-full bg-[#c69b32] text-[#13241d] font-bold flex items-center justify-center text-xs mx-auto mb-1">
                        {activeStudent.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <span className="text-xs text-gray-300">Student Microphone {isMicOn ? 'Active' : 'Muted'}</span>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>

              {/* Classroom Control Bar */}
              <div className="p-4 bg-[#031913] border-t border-white/10 flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMicOn(!isMicOn)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                      isMicOn ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-red-500/30 text-red-300'
                    }`}
                  >
                    <Mic className="w-4 h-4" /> {isMicOn ? 'Mute' : 'Unmute'}
                  </button>
                  <button
                    onClick={() => setIsVideoOn(!isVideoOn)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                      isVideoOn ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-red-500/30 text-red-300'
                    }`}
                  >
                    <Video className="w-4 h-4" /> {isVideoOn ? 'Stop Video' : 'Start Video'}
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://meet.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white font-semibold flex items-center gap-1.5"
                  >
                    <span>Open in Google Meet / Zoom</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setActiveClassroomSchedule(null)}
                    className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-xs font-bold text-white transition-colors cursor-pointer"
                  >
                    Leave Classroom
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
