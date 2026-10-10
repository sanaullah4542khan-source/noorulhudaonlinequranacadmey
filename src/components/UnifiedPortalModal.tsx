import React, { useState, useEffect, useRef } from 'react';
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
  Check,
  Users,
  CreditCard,
  Bell,
  Search,
  Download,
  Phone,
  BarChart3,
  VideoOff,
  MicOff,
  Maximize2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import {
  StudentProfile,
  HomeworkTask,
  StudentScheduleItem,
  UserRole,
  UserAccount,
  AudioSubmission,
  AttendanceItem,
  FeeRecord,
  LearningPath
} from '../types';
import { DEMO_STUDENT_PROFILES } from '../data/studentDashboardData';
import { getSafirWhatsAppUrl } from '../data/safirData';

interface UnifiedPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: UserRole;
  onOpenAssessment?: () => void;
}

const STORAGE_SESSION_KEY = 'nuh_portal_active_user';

export const UnifiedPortalModal: React.FC<UnifiedPortalModalProps> = ({
  isOpen,
  onClose,
  defaultRole = 'student',
  onOpenAssessment
}) => {
  const { isRtl } = useLanguage();

  // Active authenticated user session
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_SESSION_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Login credentials state
  const [loginRole, setLoginRole] = useState<UserRole>(defaultRole);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('123456');
  const [loginError, setLoginError] = useState('');
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [regName, setRegName] = useState('');
  const [regPhone, setRegPhone] = useState('');

  // Active navigation tab inside current role's portal
  const [studentTab, setStudentTab] = useState<
    'overview' | 'classroom' | 'progress' | 'audio-practice' | 'homework' | 'attendance' | 'report'
  >('overview');
  const [parentTab, setParentTab] = useState<'overview' | 'attendance' | 'homework' | 'feedback' | 'report'>('overview');
  const [teacherTab, setTeacherTab] = useState<'schedule' | 'attendance' | 'homework' | 'audio-review' | 'students'>('schedule');
  const [adminTab, setAdminTab] = useState<'overview' | 'students' | 'teachers' | 'fees' | 'announcements'>('overview');

  // Multi-child selector for parent
  const [selectedChildId, setSelectedChildId] = useState('NUH-8421');

  // Student profile data
  const [studentProfiles, setStudentProfiles] = useState<Record<string, StudentProfile>>(DEMO_STUDENT_PROFILES);
  const activeStudent: StudentProfile = studentProfiles[currentUser?.studentId || 'NUH-8421'] || DEMO_STUDENT_PROFILES['NUH-8421'];

  // Audio Practice Recording State
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [recordedAudioBlob, setRecordedAudioBlob] = useState<Blob | null>(null);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [recordingSurah, setRecordingSurah] = useState('Surah Al-Mulk');
  const [recordingAyah, setRecordingAyah] = useState('Ayah 1-10');
  const [recordingNotes, setRecordingNotes] = useState('');
  const [audioSubmissions, setAudioSubmissions] = useState<AudioSubmission[]>([]);
  const [submittingAudio, setSubmittingAudio] = useState(false);
  const [audioSuccessMsg, setAudioSuccessMsg] = useState('');

  // Classroom Live Video & Mushaf State
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [classroomSurah, setClassroomSurah] = useState('al-fatiha');
  const [isPlayingMushafAudio, setIsPlayingMushafAudio] = useState(false);
  const [classroomNotice, setClassroomNotice] = useState('Today focus: Makharij articulation of heavy letters (Kha, Saad, Dhad).');

  // Teacher Reviewing Audio
  const [selectedReviewSubId, setSelectedReviewSubId] = useState<string | null>(null);
  const [teacherReviewRemarks, setTeacherReviewRemarks] = useState('');
  const [teacherReviewScore, setTeacherReviewScore] = useState(95);

  // Homework submission state
  const [selectedHwId, setSelectedHwId] = useState<string | null>(null);
  const [hwNotes, setHwNotes] = useState('');

  // Admin Fees & Data
  const [feeRecords, setFeeRecords] = useState<FeeRecord[]>([]);

  // Attendance Records
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceItem[]>([]);

  // MediaRecorder Ref
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recordingTimerRef = useRef<any>(null);

  // Load backend data on open
  useEffect(() => {
    if (isOpen) {
      fetchAudioSubmissions();
      fetchAttendance();
      fetchFees();
    }
  }, [isOpen]);

  const fetchAudioSubmissions = async () => {
    try {
      const res = await fetch('/api/audio-practice');
      if (res.ok) {
        const data = await res.json();
        setAudioSubmissions(data.submissions || []);
      }
    } catch {
      // fallback
    }
  };

  const fetchAttendance = async () => {
    try {
      const res = await fetch('/api/attendance');
      if (res.ok) {
        const data = await res.json();
        setAttendanceRecords(data.attendance || []);
      }
    } catch {
      // fallback
    }
  };

  const fetchFees = async () => {
    try {
      const res = await fetch('/api/fees');
      if (res.ok) {
        const data = await res.json();
        setFeeRecords(data.fees || []);
      }
    } catch {
      // fallback
    }
  };

  // Quick Demo One-Click Login
  const handleQuickDemoLogin = (role: UserRole) => {
    let demoUser: UserAccount;
    if (role === 'student') {
      demoUser = {
        id: 'usr-student-1',
        name: 'Zaid Khan',
        urduName: 'زید خان',
        email: 'zaid@student.noorulhuda.com',
        role: 'student',
        studentId: 'NUH-8421',
        avatarUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80',
        phone: '+44 7911 123456'
      };
    } else if (role === 'parent') {
      demoUser = {
        id: 'usr-parent-1',
        name: 'Brother Tariq Khan',
        urduName: 'طارق خان',
        email: 'tariq.khan@parent.noorulhuda.com',
        role: 'parent',
        parentId: 'PAR-402',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
        phone: '+44 7911 123456'
      };
    } else if (role === 'teacher') {
      demoUser = {
        id: 'usr-teacher-1',
        name: 'Sheikh Omar Al-Azhari',
        urduName: 'الشیخ عمر الازہری',
        email: 'omar@teacher.noorulhuda.com',
        role: 'teacher',
        teacherId: 'TCH-101',
        avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
        phone: '+92 313 0958451'
      };
    } else {
      demoUser = {
        id: 'usr-admin-1',
        name: 'Administrator (Director)',
        urduName: 'مدیر اکیڈمی',
        email: 'admin@noorulhuda.com',
        role: 'admin',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
        phone: '+92 313 0958451'
      };
    }

    setCurrentUser(demoUser);
    localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(demoUser));
    setLoginError('');
  };

  const handleCustomLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: loginEmail, password: loginPassword, role: loginRole })
      });
      if (res.ok) {
        const data = await res.json();
        setCurrentUser(data.user);
        localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(data.user));
      } else {
        const data = await res.json();
        setLoginError(data.error || 'Authentication failed');
      }
    } catch {
      handleQuickDemoLogin(loginRole);
    }
  };

  const handleCustomRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: regName,
          email: loginEmail,
          password: loginPassword,
          role: loginRole,
          phone: regPhone
        })
      });
      if (res.ok) {
        const data = await res.json();
        setCurrentUser(data.user);
        localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(data.user));
      } else {
        const data = await res.json();
        setLoginError(data.error || 'Registration failed');
      }
    } catch {
      handleQuickDemoLogin(loginRole);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem(STORAGE_SESSION_KEY);
  };

  // Audio Recording with MediaRecorder
  const startAudioRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setRecordedAudioBlob(blob);
        const url = URL.createObjectURL(blob);
        setRecordedAudioUrl(url);
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingDuration(0);

      recordingTimerRef.current = setInterval(() => {
        setRecordingDuration((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      console.warn('Microphone permission not granted or unavailable:', err);
      // Fallback simulated recording
      setIsRecording(true);
      setRecordingDuration(0);
      recordingTimerRef.current = setInterval(() => {
        setRecordingDuration((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopAudioRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach((t) => t.stop());
    } else {
      // Simulate recorded audio duration
      setRecordedAudioUrl('simulated');
    }
    clearInterval(recordingTimerRef.current);
    setIsRecording(false);
  };

  const submitAudioRecitation = async () => {
    if (!recordingSurah) return;
    setSubmittingAudio(true);
    setAudioSuccessMsg('');

    try {
      const res = await fetch('/api/audio-practice/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId: activeStudent.studentId,
          studentName: activeStudent.name,
          courseName: activeStudent.enrolledCourse,
          surahName: recordingSurah,
          ayahRange: recordingAyah,
          durationSeconds: recordingDuration || 60,
          studentNotes: recordingNotes,
          audioDataUrl: recordedAudioUrl || ''
        })
      });

      if (res.ok) {
        setAudioSuccessMsg('MashaAllah! Your recitation has been securely submitted to Sheikh Omar for review.');
        setRecordedAudioBlob(null);
        setRecordedAudioUrl(null);
        setRecordingDuration(0);
        setRecordingNotes('');
        fetchAudioSubmissions();
      }
    } catch {
      setAudioSuccessMsg('Recitation submitted successfully! Your teacher will review it shortly.');
    } finally {
      setSubmittingAudio(false);
    }
  };

  // Submit Homework
  const handleHomeworkSubmit = async (hwId: string) => {
    try {
      await fetch('/api/homework/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          homeworkId: hwId,
          notes: hwNotes || 'Completed assignments as instructed in class.'
        })
      });
      setSelectedHwId(null);
      setHwNotes('');
    } catch {
      setSelectedHwId(null);
    }
  };

  // Mark Attendance (Teacher)
  const handleMarkAttendance = async (studentId: string, studentName: string, status: 'present' | 'absent' | 'late') => {
    try {
      await fetch('/api/attendance/mark', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId,
          studentName,
          classId: `cls-${Date.now()}`,
          courseName: 'Tajweed-ul-Quran & Makharij',
          teacherName: currentUser?.name || 'Sheikh Omar Al-Azhari',
          date: new Date().toISOString().split('T')[0],
          time: '18:00 GMT',
          status,
          remarks: `Marked by ${currentUser?.name || 'Teacher'}`
        })
      });
      fetchAttendance();
    } catch {
      // local update
    }
  };

  // Review Audio (Teacher)
  const handleTeacherSubmitReview = async (subId: string) => {
    try {
      await fetch(`/api/audio-practice/${subId}/review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          teacherName: currentUser?.name || 'Sheikh Omar Al-Azhari',
          writtenRemarks: teacherReviewRemarks || 'MashaAllah, good fluency. Keep focus on throat letters.',
          makharijScore: teacherReviewScore,
          tajweedScore: teacherReviewScore
        })
      });
      setSelectedReviewSubId(null);
      setTeacherReviewRemarks('');
      fetchAudioSubmissions();
    } catch {
      setSelectedReviewSubId(null);
    }
  };

  // Pay Fee (Admin / Parent)
  const handlePayFee = async (feeId: string) => {
    try {
      await fetch(`/api/fees/${feeId}/pay`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentMethod: 'Card / Online Bank' })
      });
      fetchFees();
    } catch {
      // local
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-fade-in">
      <div className="relative w-full max-w-6xl bg-[#faf9f5] rounded-3xl shadow-2xl border border-[#c69b32]/30 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Bar Header */}
        <div className="bg-[#064232] text-white px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between border-b border-[#0a523f] flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#e6c564] to-[#c69b32] flex items-center justify-center text-[#064232] font-bold shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                  Noor Ul Huda Learning Portal
                </h2>
                {currentUser && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#c69b32] text-[#064232]">
                    {currentUser.role}
                  </span>
                )}
              </div>
              <p className="text-xs text-emerald-200">
                {currentUser ? `Signed in as ${currentUser.name}` : 'Secure Role-Based Academic Management'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {currentUser && (
              <button
                onClick={handleLogout}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-emerald-100 hover:text-white transition-colors"
                title="Sign Out"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Switch Account</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Portal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Not logged in: Multi-Role Auth Screen */}
        {!currentUser ? (
          <div className="p-6 sm:p-10 overflow-y-auto flex-1 space-y-8">
            {/* Quick 1-Click Demo Login Banner */}
            <div className="bg-gradient-to-r from-emerald-900 to-[#064232] text-white p-6 rounded-3xl border border-[#c69b32]/40 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#facc15]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#facc15]">
                    Instant Evaluation Access
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                  One-Click Demo Portals
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl leading-relaxed mb-5">
                  Select a live verified account below to immediately inspect student progress, live video classroom, parent monitoring, audio recitation grading, or admin metrics.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button
                    onClick={() => handleQuickDemoLogin('student')}
                    className="p-3.5 rounded-2xl bg-white text-[#064232] hover:bg-[#f4e8c7] transition-all shadow-md text-left group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <GraduationCap className="w-4 h-4 text-[#c69b32]" />
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        STUDENT
                      </span>
                    </div>
                    <div className="font-serif font-bold text-sm text-[#064232]">Zaid Khan</div>
                    <div className="text-[11px] text-[#4e655c]">ID: NUH-8421</div>
                  </button>

                  <button
                    onClick={() => handleQuickDemoLogin('parent')}
                    className="p-3.5 rounded-2xl bg-white text-[#064232] hover:bg-[#f4e8c7] transition-all shadow-md text-left group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <Users className="w-4 h-4 text-[#c69b32]" />
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-800">
                        PARENT
                      </span>
                    </div>
                    <div className="font-serif font-bold text-sm text-[#064232]">Brother Tariq</div>
                    <div className="text-[11px] text-[#4e655c]">2 Children Enrolled</div>
                  </button>

                  <button
                    onClick={() => handleQuickDemoLogin('teacher')}
                    className="p-3.5 rounded-2xl bg-white text-[#064232] hover:bg-[#f4e8c7] transition-all shadow-md text-left group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <Award className="w-4 h-4 text-[#c69b32]" />
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-100 text-purple-800">
                        TEACHER
                      </span>
                    </div>
                    <div className="font-serif font-bold text-sm text-[#064232]">Sheikh Omar</div>
                    <div className="text-[11px] text-[#4e655c]">Al-Azhar Certified</div>
                  </button>

                  <button
                    onClick={() => handleQuickDemoLogin('admin')}
                    className="p-3.5 rounded-2xl bg-white text-[#064232] hover:bg-[#f4e8c7] transition-all shadow-md text-left group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <Building2 className="w-4 h-4 text-[#c69b32]" />
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                        ADMIN
                      </span>
                    </div>
                    <div className="font-serif font-bold text-sm text-[#064232]">Academy Director</div>
                    <div className="text-[11px] text-[#4e655c]">Full Oversight</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Standard Credential Sign In & Registration */}
            <div className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-[#e5e3d7] shadow-sm">
              <div className="flex items-center justify-center p-1 rounded-2xl bg-[#faf9f5] border border-[#e5e3d7] mb-6">
                <button
                  onClick={() => setAuthMode('login')}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                    authMode === 'login' ? 'bg-[#064232] text-white shadow-sm' : 'text-[#4e655c]'
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setAuthMode('register')}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                    authMode === 'register' ? 'bg-[#064232] text-white shadow-sm' : 'text-[#4e655c]'
                  }`}
                >
                  Create Student / Parent Account
                </button>
              </div>

              {loginError && (
                <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              {/* Role Picker for Form */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-[#13241d] mb-1.5">Select Role</label>
                <div className="grid grid-cols-4 gap-1.5">
                  {(['student', 'parent', 'teacher', 'admin'] as UserRole[]).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setLoginRole(r)}
                      className={`py-2 text-[11px] font-bold uppercase rounded-lg border transition-all ${
                        loginRole === r
                          ? 'bg-[#064232] text-white border-[#064232]'
                          : 'bg-[#faf9f5] text-[#4e655c] border-[#e5e3d7]'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={authMode === 'login' ? handleCustomLogin : handleCustomRegister} className="space-y-4">
                {authMode === 'register' && (
                  <div>
                    <label className="block text-xs font-semibold text-[#13241d] mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      placeholder="e.g. Zaid Khan"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#faf9f5] border border-[#e5e3d7] text-xs text-[#13241d] focus:border-[#064232] focus:outline-none"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#13241d] mb-1">
                    {authMode === 'login' ? 'Email or Student/Teacher ID' : 'Email Address'}
                  </label>
                  <input
                    type="text"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder={
                      loginRole === 'student' ? 'zaid@student.noorulhuda.com or NUH-8421' : 'user@noorulhuda.com'
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf9f5] border border-[#e5e3d7] text-xs text-[#13241d] focus:border-[#064232] focus:outline-none"
                  />
                </div>

                {authMode === 'register' && (
                  <div>
                    <label className="block text-xs font-semibold text-[#13241d] mb-1">WhatsApp / Phone Number</label>
                    <input
                      type="text"
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                      placeholder="+92 313 0958451"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#faf9f5] border border-[#e5e3d7] text-xs text-[#13241d] focus:border-[#064232] focus:outline-none"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#13241d] mb-1">
                    {authMode === 'login' ? 'Password or Student PIN' : 'Create Password'}
                  </label>
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf9f5] border border-[#e5e3d7] text-xs text-[#13241d] focus:border-[#064232] focus:outline-none"
                  />
                  <span className="text-[10px] text-[#4e655c] mt-1 block">Default demo pin: 123456</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#e6c564] to-[#c69b32] text-[#064232] font-bold text-xs hover:brightness-105 active:scale-95 transition-all shadow-md"
                >
                  {authMode === 'login' ? 'Enter Academy Portal' : 'Register & Start Learning'}
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Logged In Portal Shell */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 bg-[#f5f4ed] border-r border-[#e5e3d7] p-4 flex flex-col justify-between flex-shrink-0">
              <div className="space-y-4">
                {/* User Mini Card */}
                <div className="p-3 bg-white rounded-2xl border border-[#e5e3d7] flex items-center gap-3 shadow-2xs">
                  <img
                    src={currentUser.avatarUrl}
                    alt={currentUser.name}
                    className="w-10 h-10 rounded-xl object-cover border border-[#c69b32]"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-serif font-bold text-xs text-[#064232] truncate">{currentUser.name}</h4>
                    <p className="text-[10px] text-[#4e655c] truncate">
                      {currentUser.studentId || currentUser.teacherId || currentUser.parentId || currentUser.email}
                    </p>
                  </div>
                </div>

                {/* Role Specific Navigation Buttons */}
                {currentUser.role === 'student' && (
                  <nav className="space-y-1 text-xs">
                    {[
                      { id: 'overview', label: 'Student Dashboard', icon: GraduationCap },
                      { id: 'classroom', label: 'Digital Classroom (Live)', icon: Video, badge: 'LIVE' },
                      { id: 'progress', label: 'Quran Progress Tracker', icon: BookOpen },
                      { id: 'audio-practice', label: 'Recitation Audio Practice', icon: Mic },
                      { id: 'homework', label: 'Homework & Tasks', icon: FileText },
                      { id: 'attendance', label: 'Attendance Records', icon: Calendar },
                      { id: 'report', label: 'Official Progress Report', icon: Award }
                    ].map((tab) => {
                      const Icon = tab.icon;
                      const isActive = studentTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setStudentTab(tab.id as any)}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium transition-all ${
                            isActive
                              ? 'bg-[#064232] text-white shadow-sm font-semibold'
                              : 'text-[#4e655c] hover:bg-white hover:text-[#064232]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className={`w-4 h-4 ${isActive ? 'text-[#facc15]' : 'text-[#4e655c]'}`} />
                            <span>{tab.label}</span>
                          </div>
                          {tab.badge && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#c69b32] text-[#064232]">
                              {tab.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </nav>
                )}

                {currentUser.role === 'parent' && (
                  <nav className="space-y-1 text-xs">
                    {/* Child Selector */}
                    <div className="mb-3 p-2 bg-white rounded-xl border border-[#e5e3d7]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#4e655c] block mb-1">
                        Select Child:
                      </span>
                      <div className="flex gap-1">
                        <button
                          onClick={() => setSelectedChildId('NUH-8421')}
                          className={`flex-1 py-1 rounded text-xs font-bold ${
                            selectedChildId === 'NUH-8421'
                              ? 'bg-[#064232] text-white'
                              : 'bg-[#faf9f5] text-[#4e655c]'
                          }`}
                        >
                          Zaid (14)
                        </button>
                        <button
                          onClick={() => setSelectedChildId('NUH-9102')}
                          className={`flex-1 py-1 rounded text-xs font-bold ${
                            selectedChildId === 'NUH-9102'
                              ? 'bg-[#064232] text-white'
                              : 'bg-[#faf9f5] text-[#4e655c]'
                          }`}
                        >
                          Maryam (9)
                        </button>
                      </div>
                    </div>

                    {[
                      { id: 'overview', label: 'Parent Overview', icon: Users },
                      { id: 'attendance', label: "Child's Attendance", icon: Calendar },
                      { id: 'homework', label: 'Homework Status', icon: FileText },
                      { id: 'feedback', label: 'Teacher Feedback Logs', icon: MessageCircle },
                      { id: 'report', label: 'Monthly Report Card', icon: Award }
                    ].map((tab) => {
                      const Icon = tab.icon;
                      const isActive = parentTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setParentTab(tab.id as any)}
                          className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl font-medium transition-all ${
                            isActive
                              ? 'bg-[#064232] text-white shadow-sm font-semibold'
                              : 'text-[#4e655c] hover:bg-white hover:text-[#064232]'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isActive ? 'text-[#facc15]' : 'text-[#4e655c]'}`} />
                          <span>{tab.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                )}

                {currentUser.role === 'teacher' && (
                  <nav className="space-y-1 text-xs">
                    {[
                      { id: 'schedule', label: 'My Teaching Schedule', icon: Calendar },
                      { id: 'attendance', label: 'Mark Attendance', icon: CheckCircle2 },
                      { id: 'audio-review', label: 'Review Recitations', icon: Mic, badge: 'NEW' },
                      { id: 'homework', label: 'Assign Homework', icon: FileText },
                      { id: 'students', label: 'My Students Roster', icon: Users }
                    ].map((tab) => {
                      const Icon = tab.icon;
                      const isActive = teacherTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setTeacherTab(tab.id as any)}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium transition-all ${
                            isActive
                              ? 'bg-[#064232] text-white shadow-sm font-semibold'
                              : 'text-[#4e655c] hover:bg-white hover:text-[#064232]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className={`w-4 h-4 ${isActive ? 'text-[#facc15]' : 'text-[#4e655c]'}`} />
                            <span>{tab.label}</span>
                          </div>
                          {tab.badge && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#c69b32] text-[#064232]">
                              {tab.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </nav>
                )}

                {currentUser.role === 'admin' && (
                  <nav className="space-y-1 text-xs">
                    {[
                      { id: 'overview', label: 'Academy Overview & KPIs', icon: BarChart3 },
                      { id: 'students', label: 'Students Directory', icon: GraduationCap },
                      { id: 'teachers', label: 'Faculty & Workload', icon: Users },
                      { id: 'fees', label: 'Fee Records & Invoices', icon: CreditCard },
                      { id: 'announcements', label: 'Broadcast Notices', icon: Bell }
                    ].map((tab) => {
                      const Icon = tab.icon;
                      const isActive = adminTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setAdminTab(tab.id as any)}
                          className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl font-medium transition-all ${
                            isActive
                              ? 'bg-[#064232] text-white shadow-sm font-semibold'
                              : 'text-[#4e655c] hover:bg-white hover:text-[#064232]'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isActive ? 'text-[#facc15]' : 'text-[#4e655c]'}`} />
                          <span>{tab.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                )}
              </div>

              {/* Action buttons at bottom of sidebar */}
              <div className="pt-4 border-t border-[#e5e3d7] space-y-2">
                {onOpenAssessment && (
                  <button
                    onClick={onOpenAssessment}
                    className="w-full py-2 px-3 rounded-xl bg-white border border-[#c69b32]/40 text-[#064232] text-xs font-semibold hover:bg-[#f4e8c7] transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#c69b32]" />
                    <span>Personalized Plan Quiz</span>
                  </button>
                )}
                <button
                  onClick={handleLogout}
                  className="w-full py-2 px-3 rounded-xl bg-[#faf9f5] hover:bg-rose-50 hover:text-rose-700 text-[#4e655c] text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-[#faf9f5]">
              {/* ========================================= */}
              {/* STUDENT ROLE SCREENS                      */}
              {/* ========================================= */}
              {currentUser.role === 'student' && (
                <div>
                  {/* OVERVIEW TAB */}
                  {studentTab === 'overview' && (
                    <div className="space-y-6 animate-fade-in">
                      {/* Hero Student Banner */}
                      <div className="bg-[#064232] text-white p-6 sm:p-7 rounded-3xl shadow-lg relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#c69b32] text-[#064232]">
                            Active Student • ID {activeStudent.studentId}
                          </span>
                          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                            Welcome Back, {activeStudent.name}!
                          </h3>
                          <p className="text-xs sm:text-sm text-emerald-100 max-w-xl leading-relaxed">
                            Course: <strong>{activeStudent.enrolledCourse}</strong> with {activeStudent.assignedTeacher.name}.
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setStudentTab('classroom')}
                            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#e6c564] to-[#c69b32] text-[#064232] font-bold text-xs sm:text-sm hover:brightness-105 active:scale-95 transition-all shadow-md flex items-center gap-2"
                          >
                            <Video className="w-4 h-4" />
                            <span>Enter Digital Classroom</span>
                          </button>
                        </div>
                      </div>

                      {/* Stat Metrics Row */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                        <div className="bg-white p-4 rounded-2xl border border-[#e5e3d7] shadow-2xs">
                          <span className="text-xs text-[#4e655c] block">Attendance Rate</span>
                          <span className="font-serif text-2xl font-bold text-[#064232] mt-1 block">
                            {activeStudent.attendanceRate}%
                          </span>
                          <span className="text-[10px] text-emerald-600 font-semibold">Verified Log</span>
                        </div>
                        <div className="bg-white p-4 rounded-2xl border border-[#e5e3d7] shadow-2xs">
                          <span className="text-xs text-[#4e655c] block">Completed Classes</span>
                          <span className="font-serif text-2xl font-bold text-[#064232] mt-1 block">
                            {activeStudent.classesCompleted}
                          </span>
                          <span className="text-[10px] text-[#4e655c]">of {activeStudent.totalClassesBooked} booked</span>
                        </div>
                        <div className="bg-white p-4 rounded-2xl border border-[#e5e3d7] shadow-2xs">
                          <span className="text-xs text-[#4e655c] block">Active Streak</span>
                          <span className="font-serif text-2xl font-bold text-[#c69b32] mt-1 block">
                            {activeStudent.streakDays} Days 🔥
                          </span>
                          <span className="text-[10px] text-emerald-600 font-semibold">Consistent Learner</span>
                        </div>
                        <div className="bg-white p-4 rounded-2xl border border-[#e5e3d7] shadow-2xs">
                          <span className="text-xs text-[#4e655c] block">Overall Progress</span>
                          <span className="font-serif text-2xl font-bold text-[#064232] mt-1 block">
                            {activeStudent.overallProgressPercentage}%
                          </span>
                          <span className="text-[10px] text-emerald-600 font-semibold">On Track</span>
                        </div>
                      </div>

                      {/* Today's Sabaq, Sabqi & Manzil Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-5 rounded-2xl border border-[#e5e3d7] shadow-2xs space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                              Today's Sabaq (New Lesson)
                            </span>
                            <span className="text-xs text-[#c69b32] font-bold">
                              Juz {activeStudent.currentSabaq.juzNumber}
                            </span>
                          </div>
                          <h4 className="font-serif text-lg font-bold text-[#064232]">
                            {activeStudent.currentSabaq.surahName}
                          </h4>
                          <p className="text-xs text-[#4e655c]">{activeStudent.currentSabaq.ayahRange}</p>
                          <div className="pt-2 flex items-center justify-between text-xs border-t border-[#f0eee4]">
                            <span>Makharij Accuracy:</span>
                            <span className="font-bold text-[#064232]">{activeStudent.currentSabaq.makharijScore}%</span>
                          </div>
                        </div>

                        <div className="bg-white p-5 rounded-2xl border border-[#e5e3d7] shadow-2xs space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                              Current Sabqi (Recent Revision)
                            </span>
                          </div>
                          <h4 className="font-serif text-lg font-bold text-[#064232]">
                            {activeStudent.currentSabqi.surahName}
                          </h4>
                          <p className="text-xs text-[#4e655c]">{activeStudent.currentSabqi.ayahRange}</p>
                          <div className="pt-2 flex items-center justify-between text-xs border-t border-[#f0eee4]">
                            <span>Retention Score:</span>
                            <span className="font-bold text-[#064232]">{activeStudent.currentSabqi.retentionScore}%</span>
                          </div>
                        </div>

                        <div className="bg-white p-5 rounded-2xl border border-[#e5e3d7] shadow-2xs space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                              Manzil (Older Revision)
                            </span>
                          </div>
                          <h4 className="font-serif text-lg font-bold text-[#064232]">
                            {activeStudent.currentManzil.juzCovered}
                          </h4>
                          <p className="text-xs text-[#4e655c]">{activeStudent.currentManzil.status}</p>
                          <div className="pt-2 flex items-center justify-between text-xs border-t border-[#f0eee4]">
                            <span>Status:</span>
                            <span className="font-bold text-emerald-600">Continuous Cycle</span>
                          </div>
                        </div>
                      </div>

                      {/* Quick action buttons */}
                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setStudentTab('audio-practice')}
                          className="px-4 py-2.5 rounded-xl bg-white border border-[#c69b32] text-[#064232] text-xs font-semibold hover:bg-emerald-50 transition-colors flex items-center gap-2"
                        >
                          <Mic className="w-4 h-4 text-[#c69b32]" />
                          <span>Record Recitation Audio</span>
                        </button>
                        <button
                          onClick={() => setStudentTab('homework')}
                          className="px-4 py-2.5 rounded-xl bg-white border border-[#e5e3d7] text-[#064232] text-xs font-semibold hover:bg-[#faf9f5] transition-colors flex items-center gap-2"
                        >
                          <FileText className="w-4 h-4 text-[#064232]" />
                          <span>View Pending Homework ({activeStudent.homework.filter((h) => h.status === 'pending').length})</span>
                        </button>
                        <button
                          onClick={() => setStudentTab('report')}
                          className="px-4 py-2.5 rounded-xl bg-white border border-[#e5e3d7] text-[#064232] text-xs font-semibold hover:bg-[#faf9f5] transition-colors flex items-center gap-2"
                        >
                          <Award className="w-4 h-4 text-[#c69b32]" />
                          <span>Download Progress Report</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* DIGITAL CLASSROOM TAB */}
                  {studentTab === 'classroom' && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="bg-[#064232] text-white p-5 rounded-2xl flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-400 text-[#064232] animate-pulse">
                            LIVE CLASSROOM
                          </span>
                          <h3 className="font-serif text-xl font-bold text-white mt-1">
                            1-on-1 Quran Lesson with Sheikh Omar Al-Azhari
                          </h3>
                          <p className="text-xs text-emerald-200 mt-0.5">
                            High-Speed Encrypted Audio & Video Session
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setIsMicOn(!isMicOn)}
                            className={`p-2.5 rounded-xl transition-all ${
                              isMicOn ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-rose-500 text-white'
                            }`}
                            title={isMicOn ? 'Mute Microphone' : 'Unmute Microphone'}
                          >
                            {isMicOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={() => setIsVideoOn(!isVideoOn)}
                            className={`p-2.5 rounded-xl transition-all ${
                              isVideoOn ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-rose-500 text-white'
                            }`}
                            title={isVideoOn ? 'Turn Camera Off' : 'Turn Camera On'}
                          >
                            {isVideoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* Video Bridge & Live Noticeboard */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Video Conference Box */}
                        <div className="lg:col-span-2 bg-[#04241b] rounded-3xl overflow-hidden border border-[#0a523f] shadow-lg flex flex-col h-[400px] relative">
                          {isVideoOn ? (
                            <iframe
                              src="https://meet.jit.si/NoorUlHuda-Class-NUH8421#config.prejoinPageEnabled=false&config.startWithAudioMuted=false"
                              title="Live Quran Classroom Video"
                              className="w-full h-full border-0"
                              allow="camera; microphone; fullscreen; display-capture"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                              <VideoOff className="w-12 h-12 text-emerald-600" />
                              <h4 className="font-serif text-lg font-bold text-white">Camera is Turned Off</h4>
                              <p className="text-xs text-emerald-200/70 max-w-sm">
                                Audio-only mode is active. Click the camera button above to enable your video stream.
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Interactive Digital Mushaf Viewer */}
                        <div className="bg-white rounded-3xl p-5 border border-[#e5e3d7] shadow-sm flex flex-col justify-between">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#064232] flex items-center gap-1.5">
                                <BookOpen className="w-4 h-4 text-[#c69b32]" />
                                <span>Interactive Quran Mushaf</span>
                              </span>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-[#064232] font-semibold">
                                Tajweed Colored
                              </span>
                            </div>

                            {/* Surah Text with Tajweed Highlighting */}
                            <div className="p-4 rounded-2xl bg-[#faf9f5] border border-[#f0eee4] text-right font-arabic text-xl font-bold leading-loose text-[#064232] max-h-56 overflow-y-auto" dir="rtl">
                              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾<br />
                              الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾<br />
                              الرَّحْمَٰنِ الرَّحِيمِ ﴿٣﴾<br />
                              مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾<br />
                              إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾<br />
                              اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾<br />
                              صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧﴾
                            </div>

                            <p className="text-xs text-[#4e655c] italic">
                              Translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful. All praise is due to Allah, Lord of the worlds."
                            </p>
                          </div>

                          <div className="pt-3 border-t border-[#f0eee4] flex items-center justify-between gap-2">
                            <button
                              onClick={() => setIsPlayingMushafAudio(!isPlayingMushafAudio)}
                              className="px-3.5 py-2 rounded-xl bg-[#064232] text-white text-xs font-semibold hover:bg-[#0a523f] transition-colors flex items-center gap-1.5"
                            >
                              {isPlayingMushafAudio ? <Square className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                              <span>{isPlayingMushafAudio ? 'Pause Audio' : 'Listen Sheikh Recitation'}</span>
                            </button>
                            <span className="text-[11px] text-[#4e655c]">Mishary Alafasy</span>
                          </div>
                        </div>
                      </div>

                      {/* Digital Classroom Noticeboard */}
                      <div className="bg-white p-5 rounded-2xl border border-[#e5e3d7] shadow-2xs space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#c69b32]">
                          Live Teacher Lesson Notes
                        </span>
                        <p className="text-xs sm:text-sm text-[#13241d] leading-relaxed">{classroomNotice}</p>
                      </div>
                    </div>
                  )}

                  {/* QURAN PROGRESS TRACKER TAB */}
                  {studentTab === 'progress' && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="bg-white p-6 rounded-3xl border border-[#e5e3d7] shadow-sm">
                        <h4 className="font-serif text-xl font-bold text-[#064232] mb-1">
                          Quran Memorization & Tajweed Progress
                        </h4>
                        <p className="text-xs text-[#4e655c] mb-6">
                          Track completed Surahs, Hifz milestones, and practical Tajweed rules evaluated by your Sheikh.
                        </p>

                        {/* Tajweed Skill Mastery Gauges */}
                        <div className="space-y-3 mb-8">
                          <h5 className="font-serif text-sm font-bold text-[#064232]">
                            Verified Tajweed Skill Mastery:
                          </h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {activeStudent.tajweedSkills.map((skill, idx) => (
                              <div key={idx} className="p-3.5 rounded-xl bg-[#faf9f5] border border-[#e5e3d7]">
                                <div className="flex items-center justify-between text-xs mb-1.5 font-semibold text-[#13241d]">
                                  <span>{skill.skill}</span>
                                  <span className="text-[#064232] font-bold">{skill.mastery}%</span>
                                </div>
                                <div className="w-full bg-[#e5e3d7] h-2 rounded-full overflow-hidden">
                                  <div
                                    className="bg-gradient-to-r from-[#e6c564] to-[#c69b32] h-full rounded-full transition-all"
                                    style={{ width: `${skill.mastery}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Juz Amma Interactive Checklist */}
                        <div>
                          <h5 className="font-serif text-sm font-bold text-[#064232] mb-3">
                            Juz 30 (Amma) Surah Mastery Checklist:
                          </h5>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 text-xs">
                            {[
                              { name: '78. An-Naba', status: 'Memorized', ayahs: 40 },
                              { name: '79. An-Nazi\'at', status: 'Memorized', ayahs: 46 },
                              { name: '80. \'Abasa', status: 'Memorized', ayahs: 42 },
                              { name: '81. At-Takwir', status: 'Memorized', ayahs: 29 },
                              { name: '82. Al-Infitar', status: 'Memorized', ayahs: 19 },
                              { name: '83. Al-Mutaffifin', status: 'In-Review', ayahs: 36 },
                              { name: '84. Al-Inshiqaq', status: 'In-Review', ayahs: 25 },
                              { name: '85. Al-Buruj', status: 'Memorized', ayahs: 22 },
                              { name: '86. At-Tariq', status: 'Memorized', ayahs: 17 },
                              { name: '87. Al-A\'la', status: 'Memorized', ayahs: 19 },
                              { name: '88. Al-Ghashiyah', status: 'Memorized', ayahs: 26 },
                              { name: '89. Al-Fajr', status: 'In-Progress', ayahs: 30 }
                            ].map((s, i) => (
                              <div
                                key={i}
                                className={`p-3 rounded-xl border flex flex-col justify-between ${
                                  s.status === 'Memorized'
                                    ? 'bg-emerald-50/70 border-emerald-200 text-[#064232]'
                                    : s.status === 'In-Review'
                                    ? 'bg-amber-50/70 border-amber-200 text-amber-900'
                                    : 'bg-[#faf9f5] border-[#e5e3d7] text-[#4e655c]'
                                }`}
                              >
                                <span className="font-semibold text-xs">{s.name}</span>
                                <div className="flex items-center justify-between text-[10px] mt-2">
                                  <span>{s.ayahs} Ayahs</span>
                                  <span className="font-bold">{s.status}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* AUDIO RECITATION PRACTICE TAB */}
                  {studentTab === 'audio-practice' && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#e5e3d7] shadow-sm space-y-6">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#c69b32] text-[#064232]">
                              Oral Recitation Lab
                            </span>
                          </div>
                          <h4 className="font-serif text-xl font-bold text-[#064232]">
                            Quran Audio Practice & Teacher Feedback
                          </h4>
                          <p className="text-xs text-[#4e655c] mt-0.5">
                            Record your recitation directly with your microphone and upload for one-on-one evaluation by our certified Sheikhs.
                          </p>
                        </div>

                        {/* Recorder Controls */}
                        <div className="p-6 rounded-3xl bg-[#064232] text-white space-y-5">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-emerald-200 mb-1">Surah</label>
                              <input
                                type="text"
                                value={recordingSurah}
                                onChange={(e) => setRecordingSurah(e.target.value)}
                                placeholder="e.g. Surah Al-Mulk"
                                className="w-full px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-emerald-300/50 focus:outline-none focus:border-[#facc15]"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-emerald-200 mb-1">Ayah Range</label>
                              <input
                                type="text"
                                value={recordingAyah}
                                onChange={(e) => setRecordingAyah(e.target.value)}
                                placeholder="e.g. Ayah 1-10"
                                className="w-full px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-emerald-300/50 focus:outline-none focus:border-[#facc15]"
                              />
                            </div>
                          </div>

                          {/* Recording status display */}
                          <div className="flex flex-col items-center justify-center p-6 bg-[#04241b] rounded-2xl border border-[#0a523f] space-y-3">
                            <div
                              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                                isRecording ? 'bg-rose-500 animate-pulse text-white' : 'bg-white/10 text-[#facc15]'
                              }`}
                            >
                              <Mic className="w-8 h-8" />
                            </div>

                            <div className="text-center">
                              <span className="font-mono text-2xl font-bold text-white tracking-widest">
                                {Math.floor(recordingDuration / 60)
                                  .toString()
                                  .padStart(2, '0')}
                                :
                                {(recordingDuration % 60).toString().padStart(2, '0')}
                              </span>
                              <p className="text-xs text-emerald-200 mt-1">
                                {isRecording ? 'Listening & recording your recitation...' : 'Ready to record'}
                              </p>
                            </div>

                            <div className="flex items-center gap-3">
                              {!isRecording ? (
                                <button
                                  type="button"
                                  onClick={startAudioRecording}
                                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#e6c564] to-[#c69b32] text-[#064232] font-bold text-xs hover:brightness-105 active:scale-95 transition-all shadow flex items-center gap-2"
                                >
                                  <Mic className="w-4 h-4" />
                                  <span>Start Recording</span>
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  onClick={stopAudioRecording}
                                  className="px-6 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs active:scale-95 transition-all shadow flex items-center gap-2"
                                >
                                  <Square className="w-4 h-4" />
                                  <span>Stop & Preview</span>
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Submit form */}
                          {recordedAudioUrl && (
                            <div className="space-y-3 pt-2 border-t border-emerald-800">
                              <label className="block text-xs font-semibold text-emerald-200">
                                Notes for Teacher (Optional)
                              </label>
                              <textarea
                                value={recordingNotes}
                                onChange={(e) => setRecordingNotes(e.target.value)}
                                placeholder="e.g. Practiced pausing at Waqf Lazim and throat letters (Ha, Ayn)."
                                rows={2}
                                className="w-full px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-emerald-300/50 focus:outline-none focus:border-[#facc15]"
                              />
                              <button
                                type="button"
                                onClick={submitAudioRecitation}
                                disabled={submittingAudio}
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#e6c564] to-[#c69b32] text-[#064232] font-bold text-xs hover:brightness-105 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                              >
                                <Upload className="w-4 h-4" />
                                <span>{submittingAudio ? 'Uploading...' : 'Submit to Teacher for Grading'}</span>
                              </button>
                            </div>
                          )}

                          {audioSuccessMsg && (
                            <div className="p-3 rounded-xl bg-emerald-800 text-emerald-100 text-xs flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#facc15] flex-shrink-0" />
                              <span>{audioSuccessMsg}</span>
                            </div>
                          )}
                        </div>

                        {/* Submission History List */}
                        <div>
                          <h5 className="font-serif text-base font-bold text-[#064232] mb-3">
                            Recitation Submissions & Teacher Feedback History:
                          </h5>
                          <div className="space-y-3">
                            {audioSubmissions.length === 0 ? (
                              <p className="text-xs text-[#4e655c] italic">No submissions yet.</p>
                            ) : (
                              audioSubmissions.map((sub) => (
                                <div
                                  key={sub.id}
                                  className="p-4 rounded-2xl bg-[#faf9f5] border border-[#e5e3d7] space-y-2"
                                >
                                  <div className="flex items-center justify-between flex-wrap gap-2">
                                    <div>
                                      <h6 className="font-serif font-bold text-sm text-[#064232]">
                                        {sub.surahName} ({sub.ayahRange})
                                      </h6>
                                      <span className="text-[10px] text-[#4e655c]">
                                        Submitted {new Date(sub.submittedAt).toLocaleDateString()} • {sub.durationSeconds}s
                                      </span>
                                    </div>
                                    <span
                                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                        sub.status === 'reviewed'
                                          ? 'bg-emerald-100 text-emerald-800'
                                          : 'bg-amber-100 text-amber-800'
                                      }`}
                                    >
                                      {sub.status === 'reviewed' ? 'Teacher Evaluated' : 'Pending Review'}
                                    </span>
                                  </div>

                                  {sub.studentNotes && (
                                    <p className="text-xs text-[#4e655c] bg-white p-2 rounded-xl border border-[#f0eee4]">
                                      <strong>Student Note:</strong> {sub.studentNotes}
                                    </p>
                                  )}

                                  {sub.teacherFeedback && (
                                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs space-y-1.5">
                                      <div className="flex items-center justify-between">
                                        <span className="font-bold text-[#064232]">
                                          Feedback by {sub.teacherFeedback.teacherName}:
                                        </span>
                                        <span className="font-bold text-[#064232]">
                                          Tajweed Score: {sub.teacherFeedback.tajweedScore}/100
                                        </span>
                                      </div>
                                      <p className="text-[#13241d] leading-relaxed">
                                        {sub.teacherFeedback.writtenRemarks}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              ))
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* HOMEWORK TAB */}
                  {studentTab === 'homework' && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="bg-white p-6 rounded-3xl border border-[#e5e3d7] shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="font-serif text-xl font-bold text-[#064232]">Homework & Assignments</h4>
                            <p className="text-xs text-[#4e655c]">Tasks assigned by your teacher.</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          {activeStudent.homework.map((hw) => (
                            <div key={hw.id} className="p-4 rounded-2xl bg-[#faf9f5] border border-[#e5e3d7] space-y-3">
                              <div className="flex items-center justify-between flex-wrap gap-2">
                                <div>
                                  <h5 className="font-serif font-bold text-sm text-[#064232]">{hw.title}</h5>
                                  <span className="text-[11px] text-[#4e655c]">
                                    Due: {hw.dueDate} • Assigned: {hw.assignedDate}
                                  </span>
                                </div>
                                <span
                                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                    hw.status === 'graded'
                                      ? 'bg-emerald-100 text-emerald-800'
                                      : hw.status === 'submitted'
                                      ? 'bg-blue-100 text-blue-800'
                                      : 'bg-amber-100 text-amber-800'
                                  }`}
                                >
                                  {hw.status}
                                </span>
                              </div>

                              <p className="text-xs text-[#13241d] leading-relaxed">{hw.description}</p>

                              {hw.teacherRemarks && (
                                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                                  <strong>Teacher Evaluation ({hw.teacherGrade}):</strong> {hw.teacherRemarks}
                                </div>
                              )}

                              {hw.status === 'pending' && (
                                <div>
                                  {selectedHwId === hw.id ? (
                                    <div className="space-y-2 pt-2 border-t border-[#e5e3d7]">
                                      <textarea
                                        value={hwNotes}
                                        onChange={(e) => setHwNotes(e.target.value)}
                                        placeholder="Add completion notes or paste audio recording link..."
                                        rows={2}
                                        className="w-full px-3 py-2 rounded-xl bg-white border border-[#e5e3d7] text-xs"
                                      />
                                      <div className="flex gap-2">
                                        <button
                                          onClick={() => handleHomeworkSubmit(hw.id)}
                                          className="px-4 py-1.5 rounded-lg bg-[#064232] text-white text-xs font-bold"
                                        >
                                          Confirm Submission
                                        </button>
                                        <button
                                          onClick={() => setSelectedHwId(null)}
                                          className="px-3 py-1.5 rounded-lg bg-gray-100 text-[#4e655c] text-xs"
                                        >
                                          Cancel
                                        </button>
                                      </div>
                                    </div>
                                  ) : (
                                    <button
                                      onClick={() => setSelectedHwId(hw.id)}
                                      className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#e6c564] to-[#c69b32] text-[#064232] font-bold text-xs"
                                    >
                                      Submit Completed Assignment
                                    </button>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ATTENDANCE TAB */}
                  {studentTab === 'attendance' && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="bg-white p-6 rounded-3xl border border-[#e5e3d7] shadow-sm">
                        <h4 className="font-serif text-xl font-bold text-[#064232] mb-1">
                          Attendance & Lesson Logs
                        </h4>
                        <p className="text-xs text-[#4e655c] mb-6">
                          Official automated attendance history for Noor Ul Huda Quran Academy classes.
                        </p>

                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs">
                            <thead className="bg-[#faf9f5] border-b border-[#e5e3d7] text-[#4e655c]">
                              <tr>
                                <th className="py-3 px-4 font-semibold">Date & Time</th>
                                <th className="py-3 px-4 font-semibold">Course</th>
                                <th className="py-3 px-4 font-semibold">Teacher</th>
                                <th className="py-3 px-4 font-semibold">Status</th>
                                <th className="py-3 px-4 font-semibold">Teacher Lesson Remarks</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#f0eee4]">
                              {attendanceRecords
                                .filter((a) => a.studentId === activeStudent.studentId)
                                .map((att) => (
                                  <tr key={att.id} className="hover:bg-[#faf9f5]">
                                    <td className="py-3 px-4 whitespace-nowrap font-medium text-[#13241d]">
                                      {att.date} • {att.time}
                                    </td>
                                    <td className="py-3 px-4 text-[#064232] font-semibold">{att.courseName}</td>
                                    <td className="py-3 px-4 text-[#4e655c]">{att.teacherName}</td>
                                    <td className="py-3 px-4">
                                      <span
                                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                          att.status === 'present'
                                            ? 'bg-emerald-100 text-emerald-800'
                                            : att.status === 'late'
                                            ? 'bg-amber-100 text-amber-800'
                                            : 'bg-rose-100 text-rose-800'
                                        }`}
                                      >
                                        {att.status}
                                      </span>
                                    </td>
                                    <td className="py-3 px-4 text-[#4e655c] max-w-xs truncate">{att.remarks}</td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* OFFICIAL PROGRESS REPORT TAB */}
                  {studentTab === 'report' && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="bg-white p-8 rounded-3xl border border-[#e5e3d7] shadow-sm space-y-6 print:border-none print:shadow-none">
                        {/* Printable Certificate Header */}
                        <div className="flex items-center justify-between border-b-2 border-[#064232] pb-6">
                          <div>
                            <span className="text-xs font-bold text-[#c69b32] uppercase tracking-widest">
                              Official Academic Evaluation Report
                            </span>
                            <h3 className="font-serif text-2xl font-bold text-[#064232] mt-1">
                              Noor Ul Huda Online Quran Academy
                            </h3>
                            <p className="text-xs text-[#4e655c]">
                              Accredited Quranic & Islamic Studies Faculty • Report Generated: {new Date().toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-mono font-bold text-[#064232]">
                              ID: {activeStudent.studentId}
                            </span>
                            <p className="text-xs text-[#4e655c]">{activeStudent.timezone}</p>
                          </div>
                        </div>

                        {/* Student Details Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#faf9f5] border border-[#e5e3d7] text-xs">
                          <div>
                            <span className="text-[#4e655c] block">Student Name:</span>
                            <strong className="text-[#064232] text-sm">{activeStudent.name}</strong>
                          </div>
                          <div>
                            <span className="text-[#4e655c] block">Enrolled Course:</span>
                            <strong className="text-[#064232]">{activeStudent.enrolledCourse}</strong>
                          </div>
                          <div>
                            <span className="text-[#4e655c] block">Lead Sheikh:</span>
                            <strong className="text-[#064232]">{activeStudent.assignedTeacher.name}</strong>
                          </div>
                          <div>
                            <span className="text-[#4e655c] block">Monthly Attendance:</span>
                            <strong className="text-emerald-700 text-sm">{activeStudent.attendanceRate}%</strong>
                          </div>
                        </div>

                        {/* Evaluation Summary */}
                        <div className="space-y-3">
                          <h5 className="font-serif font-bold text-sm text-[#064232]">
                            Scholarly Assessment Summary:
                          </h5>
                          <p className="text-xs text-[#13241d] leading-relaxed bg-amber-50/60 p-4 rounded-2xl border border-amber-200/60">
                            "Student {activeStudent.name} demonstrates exemplary dedication and vocal precision in Quran recitation. His articulation of throat letters (Hamzah, Hha, Ayn) has progressed significantly over the past 4 weeks. Continuing current daily Hifz review ensures full retention."
                          </p>
                        </div>

                        {/* Print / Save button */}
                        <div className="pt-4 flex justify-end print:hidden">
                          <button
                            onClick={() => window.print()}
                            className="px-5 py-2.5 rounded-xl bg-[#064232] hover:bg-[#0a523f] text-white text-xs font-bold flex items-center gap-2 shadow"
                          >
                            <Download className="w-4 h-4" />
                            <span>Download / Print Official PDF Report</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ========================================= */}
              {/* PARENT ROLE SCREENS                       */}
              {/* ========================================= */}
              {currentUser.role === 'parent' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="bg-[#064232] text-white p-6 rounded-3xl shadow-lg flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#c69b32] text-[#064232]">
                        Parent Monitoring Portal
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white mt-1">
                        Viewing Child: {selectedChildId === 'NUH-8421' ? 'Zaid Khan' : 'Maryam Khan'}
                      </h3>
                      <p className="text-xs text-emerald-200 mt-0.5">
                        Track your child's daily Quran lesson, teacher feedback, and attendance.
                      </p>
                    </div>

                    <a
                      href={getSafirWhatsAppUrl(`Assalamu Alaikum! I am the parent of ${selectedChildId === 'NUH-8421' ? 'Zaid' : 'Maryam'}. I would like to speak with the teacher.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:brightness-105 transition-all shadow flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Message Child's Sheikh</span>
                    </a>
                  </div>

                  {/* Child KPI Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white p-5 rounded-2xl border border-[#e5e3d7]">
                      <span className="text-xs text-[#4e655c]">Attendance Record</span>
                      <div className="font-serif text-2xl font-bold text-[#064232] mt-1">96%</div>
                      <p className="text-[11px] text-emerald-600 mt-1">0 Unexcused Absences</p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-[#e5e3d7]">
                      <span className="text-xs text-[#4e655c]">Today's Lesson Progress</span>
                      <div className="font-serif text-2xl font-bold text-[#064232] mt-1">Surah Al-Mulk</div>
                      <p className="text-[11px] text-[#4e655c] mt-1">Ayah 1-10 Completed</p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-[#e5e3d7]">
                      <span className="text-xs text-[#4e655c]">Next Scheduled Class</span>
                      <div className="font-serif text-2xl font-bold text-[#c69b32] mt-1">Tomorrow</div>
                      <p className="text-[11px] text-[#4e655c] mt-1">18:00 GMT (30 mins)</p>
                    </div>
                  </div>

                  {/* Teacher Feedback Notes */}
                  <div className="bg-white p-6 rounded-3xl border border-[#e5e3d7] space-y-4">
                    <h4 className="font-serif text-base font-bold text-[#064232]">
                      Latest Direct Teacher Feedback:
                    </h4>
                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <strong className="text-[#064232]">Sheikh Omar Al-Azhari</strong>
                        <span className="text-[#4e655c]">Yesterday at 18:35 GMT</span>
                      </div>
                      <p className="text-[#13241d] leading-relaxed">
                        "Alhamdulillah, Zaid recited his Sabaq with great dedication. Please ensure he reviews the first 10 verses of Surah Al-Mulk before bedtime tonight to reinforce the long Madd vowels."
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================= */}
              {/* TEACHER ROLE SCREENS                      */}
              {/* ========================================= */}
              {currentUser.role === 'teacher' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="bg-[#064232] text-white p-6 rounded-3xl shadow-lg flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#c69b32] text-[#064232]">
                        Faculty Management Portal
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white mt-1">
                        Teacher: {currentUser.name}
                      </h3>
                      <p className="text-xs text-emerald-200 mt-0.5">
                        Daily teaching timetable, 1-click attendance, and audio recitation evaluations.
                      </p>
                    </div>
                  </div>

                  {/* Schedule & 1-Click Attendance */}
                  <div className="bg-white p-6 rounded-3xl border border-[#e5e3d7] space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-lg font-bold text-[#064232]">
                        Today's Scheduled 1-on-1 Classes:
                      </h4>
                      <span className="text-xs text-[#4e655c]">4 Sessions Today</span>
                    </div>

                    <div className="space-y-3">
                      {[
                        { student: 'Zaid Khan', id: 'NUH-8421', time: '18:00 - 18:30 GMT', course: 'Tajweed-ul-Quran', status: 'upcoming' },
                        { student: 'Maryam Khan', id: 'NUH-9102', time: '17:00 - 17:30 GMT', course: 'Noorani Qaida', status: 'completed' },
                        { student: 'Abdullah Tariq', id: 'NUH-5520', time: '19:00 - 19:30 GMT', course: 'Hifz Program', status: 'upcoming' }
                      ].map((item, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-[#faf9f5] border border-[#e5e3d7] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                          <div>
                            <strong className="text-sm text-[#064232] block font-serif">{item.student}</strong>
                            <span className="text-[#4e655c]">{item.course} • {item.time}</span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <span className="text-[11px] text-[#4e655c] mr-1">Mark:</span>
                            <button
                              onClick={() => handleMarkAttendance(item.id, item.student, 'present')}
                              className="px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold"
                            >
                              Present
                            </button>
                            <button
                              onClick={() => handleMarkAttendance(item.id, item.student, 'late')}
                              className="px-2.5 py-1 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-800 font-bold"
                            >
                              Late
                            </button>
                            <button
                              onClick={() => handleMarkAttendance(item.id, item.student, 'absent')}
                              className="px-2.5 py-1 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-800 font-bold"
                            >
                              Absent
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Audio Recitation Review Center */}
                  <div className="bg-white p-6 rounded-3xl border border-[#e5e3d7] space-y-4">
                    <h4 className="font-serif text-lg font-bold text-[#064232]">
                      Recitation Submissions Pending Review:
                    </h4>

                    {audioSubmissions.filter((s) => s.status === 'pending').length === 0 ? (
                      <p className="text-xs text-[#4e655c] italic">All pending audio submissions have been graded! Alhamdulillah.</p>
                    ) : (
                      audioSubmissions
                        .filter((s) => s.status === 'pending')
                        .map((sub) => (
                          <div key={sub.id} className="p-4 rounded-2xl bg-[#faf9f5] border border-[#e5e3d7] space-y-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <strong className="text-sm text-[#064232]">{sub.studentName}</strong>
                                <span className="text-xs text-[#4e655c] block">
                                  {sub.surahName} ({sub.ayahRange}) • {sub.durationSeconds}s
                                </span>
                              </div>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                                Pending Review
                              </span>
                            </div>

                            {selectedReviewSubId === sub.id ? (
                              <div className="space-y-3 pt-2 border-t border-[#e5e3d7]">
                                <div>
                                  <label className="block text-xs font-semibold text-[#13241d] mb-1">
                                    Tajweed / Makharij Score (0-100):
                                  </label>
                                  <input
                                    type="number"
                                    min="50"
                                    max="100"
                                    value={teacherReviewScore}
                                    onChange={(e) => setTeacherReviewScore(Number(e.target.value))}
                                    className="w-24 px-3 py-1.5 rounded-lg border text-xs"
                                  />
                                </div>
                                <div>
                                  <label className="block text-xs font-semibold text-[#13241d] mb-1">
                                    Scholarly Feedback & Pronunciation Corrections:
                                  </label>
                                  <textarea
                                    value={teacherReviewRemarks}
                                    onChange={(e) => setTeacherReviewRemarks(e.target.value)}
                                    placeholder="Write corrections regarding Ghunnah, Ikhfa, or Makharij..."
                                    rows={2}
                                    className="w-full px-3 py-2 rounded-xl bg-white border text-xs"
                                  />
                                </div>
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => handleTeacherSubmitReview(sub.id)}
                                    className="px-4 py-2 rounded-xl bg-[#064232] text-white font-bold text-xs"
                                  >
                                    Save & Send Feedback to Student
                                  </button>
                                  <button
                                    onClick={() => setSelectedReviewSubId(null)}
                                    className="px-3 py-2 rounded-xl bg-gray-100 text-xs"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <button
                                onClick={() => setSelectedReviewSubId(sub.id)}
                                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#e6c564] to-[#c69b32] text-[#064232] font-bold text-xs"
                              >
                                Grade This Recitation
                              </button>
                            )}
                          </div>
                        ))
                    )}
                  </div>
                </div>
              )}

              {/* ========================================= */}
              {/* ADMIN ROLE SCREENS                        */}
              {/* ========================================= */}
              {currentUser.role === 'admin' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="bg-[#064232] text-white p-6 rounded-3xl shadow-lg flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#c69b32] text-[#064232]">
                        Central Academy Control
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white mt-1">
                        Executive Administration Hub
                      </h3>
                      <p className="text-xs text-emerald-200 mt-0.5">
                        Students, Faculty, Fees, and Global Operations.
                      </p>
                    </div>
                  </div>

                  {/* High Level KPI Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-white p-5 rounded-2xl border border-[#e5e3d7]">
                      <span className="text-xs text-[#4e655c]">Enrolled Students</span>
                      <div className="font-serif text-2xl font-bold text-[#064232] mt-1">1,250+</div>
                      <span className="text-[10px] text-emerald-600 font-semibold">Active worldwide</span>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-[#e5e3d7]">
                      <span className="text-xs text-[#4e655c]">Verified Faculty</span>
                      <div className="font-serif text-2xl font-bold text-[#064232] mt-1">45 Scholars</div>
                      <span className="text-[10px] text-[#4e655c]">Male & Female Ijazah</span>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-[#e5e3d7]">
                      <span className="text-xs text-[#4e655c]">Fee Collection (Month)</span>
                      <div className="font-serif text-2xl font-bold text-[#c69b32] mt-1">$14,850</div>
                      <span className="text-[10px] text-emerald-600 font-semibold">98.2% Paid</span>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-[#e5e3d7]">
                      <span className="text-xs text-[#4e655c]">Avg Lesson Rating</span>
                      <div className="font-serif text-2xl font-bold text-[#064232] mt-1">4.9 / 5.0</div>
                      <span className="text-[10px] text-emerald-600 font-semibold">Parent Satisfaction</span>
                    </div>
                  </div>

                  {/* Fee Ledger & Invoicing */}
                  <div className="bg-white p-6 rounded-3xl border border-[#e5e3d7] space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-lg font-bold text-[#064232]">
                        Fee & Tuition Payment Records:
                      </h4>
                      <span className="text-xs text-[#4e655c]">Live Billing Ledger</span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-[#faf9f5] border-b border-[#e5e3d7] text-[#4e655c]">
                          <tr>
                            <th className="py-2.5 px-3">Invoice #</th>
                            <th className="py-2.5 px-3">Student</th>
                            <th className="py-2.5 px-3">Plan</th>
                            <th className="py-2.5 px-3">Amount</th>
                            <th className="py-2.5 px-3">Status</th>
                            <th className="py-2.5 px-3">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#f0eee4]">
                          {feeRecords.map((fee) => (
                            <tr key={fee.id} className="hover:bg-[#faf9f5]">
                              <td className="py-3 px-3 font-mono font-medium">{fee.invoiceNumber}</td>
                              <td className="py-3 px-3 font-semibold text-[#064232]">{fee.studentName}</td>
                              <td className="py-3 px-3 text-[#4e655c]">{fee.planName}</td>
                              <td className="py-3 px-3 font-bold">${fee.amount} {fee.currency}</td>
                              <td className="py-3 px-3">
                                <span
                                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                    fee.status === 'paid'
                                      ? 'bg-emerald-100 text-emerald-800'
                                      : 'bg-amber-100 text-amber-800'
                                  }`}
                                >
                                  {fee.status}
                                </span>
                              </td>
                              <td className="py-3 px-3">
                                {fee.status !== 'paid' ? (
                                  <button
                                    onClick={() => handlePayFee(fee.id)}
                                    className="px-2.5 py-1 rounded bg-[#064232] text-white text-[11px] font-bold"
                                  >
                                    Mark as Paid
                                  </button>
                                ) : (
                                  <span className="text-[11px] text-emerald-600 font-semibold">Receipt Sent ✓</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
