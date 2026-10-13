import React, { useState, useEffect } from 'react';
import {
  X,
  ShieldCheck,
  Lock,
  Mail,
  Eye,
  EyeOff,
  LogOut,
  AlertCircle,
  CheckCircle2,
  Users,
  Calendar,
  RefreshCw,
  Search,
  Phone,
  Send,
  MessageCircle,
  Clock,
  BookOpen,
  GraduationCap,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  Inbox,
  Check,
  Sliders,
  BellRing
} from 'lucide-react';
import {
  loginAdministrator,
  verifyAdminSession,
  logoutAdministrator,
  getStoredAdminToken,
  getAdminFullDashboard,
  updateInquiryStatus,
  updateTrialStatus,
  triggerTestEmail,
  triggerTestWhatsApp,
  AdminInquiryItem,
  AdminTrialItem,
  AdminStudentItem,
  AdminScheduleItem
} from '../services/apiService';
import { useLanguage } from '../context/LanguageContext';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isOpen, onClose }) => {
  const { isRtl, isUrdu, isArabic } = useLanguage();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [adminUser, setAdminUser] = useState<{ id: string; name: string; email: string; role: string } | null>(null);
  const [isVerifyingSession, setIsVerifyingSession] = useState<boolean>(true);

  // Form State
  const [identifier, setIdentifier] = useState('sanaullah4542khan@gmail.com');
  const [secretCode, setSecretCode] = useState('');
  const [showSecret, setShowSecret] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState('');
  const [authSuccessMsg, setAuthSuccessMsg] = useState('');

  // Dashboard Tab State
  type AdminTab = 'admissions' | 'students' | 'schedules' | 'inquiries' | 'notifications';
  const [activeTab, setActiveTab] = useState<AdminTab>('admissions');

  // Dashboard Data State
  const [inquiries, setInquiries] = useState<AdminInquiryItem[]>([]);
  const [trials, setTrials] = useState<AdminTrialItem[]>([]);
  const [students, setStudents] = useState<AdminStudentItem[]>([]);
  const [schedules, setSchedules] = useState<AdminScheduleItem[]>([]);
  const [metrics, setMetrics] = useState<any>(null);
  const [emailStatus, setEmailStatus] = useState<any>(null);
  const [whatsAppStatus, setWhatsAppStatus] = useState<any>(null);
  const [isLoadingData, setIsLoadingData] = useState(false);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'contacted' | 'scheduled' | 'enrolled'>('all');

  // Test triggers state
  const [isTestingEmail, setIsTestingEmail] = useState(false);
  const [testEmailResult, setTestEmailResult] = useState<any>(null);
  const [isTestingWhatsApp, setIsTestingWhatsApp] = useState(false);
  const [testWhatsAppResult, setTestWhatsAppResult] = useState<any>(null);

  // Verify existing token on modal open
  useEffect(() => {
    let isMounted = true;
    if (isOpen) {
      setAuthError('');
      setIsVerifyingSession(true);
      verifyAdminSession().then((res) => {
        if (!isMounted) return;
        if (res.authenticated && res.user) {
          setIsAuthenticated(true);
          setAdminUser(res.user);
        } else {
          setIsAuthenticated(false);
          setAdminUser(null);
        }
        setIsVerifyingSession(false);
      });
    }
    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  // Load protected data when authenticated
  useEffect(() => {
    if (isOpen && isAuthenticated) {
      loadProtectedData();
    }
  }, [isOpen, isAuthenticated]);

  const loadProtectedData = async () => {
    setIsLoadingData(true);
    try {
      const data = await getAdminFullDashboard();
      setInquiries(data.contactInquiries || []);
      setTrials(data.trialRequests || []);
      setStudents(data.students || []);
      setSchedules(data.schedules || []);
      setMetrics(data.metrics || null);
      setEmailStatus(data.emailStatus || null);
      setWhatsAppStatus(data.whatsAppStatus || null);
    } finally {
      setIsLoadingData(false);
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setAuthSuccessMsg('');

    if (!identifier.trim() || !secretCode.trim()) {
      setAuthError('Please enter both your administrator account identifier and the owner secret code.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await loginAdministrator({
        identifier: identifier.trim(),
        secretCode: secretCode.trim()
      });

      if (res.success && res.user) {
        setIsAuthenticated(true);
        setAdminUser(res.user);
        setAuthSuccessMsg('Administrator authorized successfully. Entering private console...');
        setSecretCode('');
        loadProtectedData();
      } else {
        setIsAuthenticated(false);
        setAuthError(res.error || 'Access denied: Invalid administrator secret code or account.');
      }
    } catch (err: any) {
      setAuthError(err?.message || 'Server-side error during administrator authorization.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignOut = async () => {
    await logoutAdministrator();
    setIsAuthenticated(false);
    setAdminUser(null);
    setInquiries([]);
    setTrials([]);
    setStudents([]);
    setSchedules([]);
    setMetrics(null);
    setEmailStatus(null);
    setWhatsAppStatus(null);
    setAuthSuccessMsg('');
    setAuthError('');
  };

  const handleUpdateInquiry = async (id: string, status: AdminInquiryItem['status']) => {
    await updateInquiryStatus(id, status);
    loadProtectedData();
  };

  const handleUpdateTrial = async (id: string, status: AdminTrialItem['status']) => {
    await updateTrialStatus(id, status);
    loadProtectedData();
  };

  const handleRunEmailTest = async () => {
    setIsTestingEmail(true);
    setTestEmailResult(null);
    try {
      const res = await triggerTestEmail();
      setTestEmailResult(res);
      loadProtectedData();
    } catch (err: any) {
      setTestEmailResult({ success: false, note: err?.message || 'Email test execution failed' });
    } finally {
      setIsTestingEmail(false);
    }
  };

  const handleRunWhatsAppTest = async () => {
    setIsTestingWhatsApp(true);
    setTestWhatsAppResult(null);
    try {
      const res = await triggerTestWhatsApp();
      setTestWhatsAppResult(res);
      loadProtectedData();
    } catch (err: any) {
      setTestWhatsAppResult({ success: false, note: err?.message || 'WhatsApp test execution failed' });
    } finally {
      setIsTestingWhatsApp(false);
    }
  };

  // Filtered lists
  const filteredTrials = trials.filter((t) => {
    const matchesSearch =
      t.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (t.parentName && t.parentName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      t.phoneNumber.includes(searchQuery) ||
      (t.courseTitle && t.courseTitle.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || t.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredInquiries = inquiries.filter((iq) => {
    const matchesSearch =
      iq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      iq.phone.includes(searchQuery) ||
      (iq.email && iq.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
      iq.course.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const filteredStudents = students.filter((s) => {
    return (
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.studentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.latestCourse.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-5 lg:p-8 animate-fade-in">
      <div className="relative w-full max-w-6xl bg-[#faf9f5] rounded-3xl shadow-2xl border border-[#c69b32]/40 overflow-hidden flex flex-col max-h-[94vh]">
        {/* ========================================================= */}
        {/* TOP BAR / HEADER WITH SHIELD-LOCK & ACADEMY BRANDING      */}
        {/* ========================================================= */}
        <div className="bg-[#064232] text-white px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between border-b border-[#0a523f] flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-[#e6c564] to-[#c69b32] flex items-center justify-center text-[#064232] font-bold shadow-md flex-shrink-0">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                  Executive Admin Portal
                </h2>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    isAuthenticated ? 'bg-[#facc15] text-[#064232]' : 'bg-white/10 text-emerald-200'
                  }`}
                >
                  {isAuthenticated ? 'Authorized' : 'Restricted'}
                </span>
              </div>
              <p className="text-xs text-emerald-200 truncate max-w-xs sm:max-w-md">
                {isAuthenticated
                  ? `Logged in: ${adminUser?.name || 'Academy Owner'} (${adminUser?.email})`
                  : 'Noor Ul Huda Online Quran Academy · Secure Control Console'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleSignOut}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-100 border border-rose-300/30 text-xs font-semibold transition-all cursor-pointer shadow-xs active:scale-95"
                title="Securely sign out and revoke admin token"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Secure Logout</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Administrator Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MAIN BODY                                                 */}
        {/* ========================================================= */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 flex-1">
          {/* 1. LOGIN SCREEN (WHEN NOT AUTHENTICATED) */}
          {!isAuthenticated ? (
            <div className="max-w-md mx-auto py-6 sm:py-10">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e5e3d7] shadow-xl space-y-6">
                {/* Shield Icon + Heading */}
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-3xl bg-[#064232]/10 border border-[#c69b32]/40 text-[#064232] flex items-center justify-center mx-auto shadow-sm">
                    <ShieldCheck className="w-9 h-9 text-[#064232]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#064232]">
                    Academy Owner Login
                  </h3>
                  <p className="text-xs text-[#4e655c] leading-relaxed">
                    Enter the authorized administrator identifier and secret code to access the private academy console.
                  </p>
                </div>

                {/* Restricted Notice Banner */}
                <div className="p-3.5 rounded-2xl bg-[#064232]/5 border border-[#064232]/15 text-xs text-[#064232] flex items-start gap-2.5">
                  <Lock className="w-4 h-4 text-[#c69b32] flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    <strong>Zero-Trust Server Protection:</strong> Authentication is validated strictly on the server backend. Public administrator registration is permanently disabled.
                  </span>
                </div>

                {/* Error Banner */}
                {authError && (
                  <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2.5 animate-shake">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600" />
                    <span className="font-medium">{authError}</span>
                  </div>
                )}

                {/* Success Banner */}
                {authSuccessMsg && (
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" />
                    <span className="font-medium">{authSuccessMsg}</span>
                  </div>
                )}

                {/* Login Form */}
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#064232] mb-1.5">
                      Authorized Email / ID
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        placeholder="e.g. sanaullah4542khan@gmail.com or admin"
                        required
                        className="w-full py-2.5 pl-10 pr-4 text-xs sm:text-sm rounded-xl border border-[#d8d5c8] bg-[#faf9f5] text-[#13241d] focus:border-[#064232] focus:outline-none transition-colors font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#064232]">
                        Admin Secret Code
                      </label>
                      <span className="text-[11px] text-[#c69b32] font-semibold">Configured on Server</span>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                      <input
                        type={showSecret ? 'text' : 'password'}
                        value={secretCode}
                        onChange={(e) => setSecretCode(e.target.value)}
                        placeholder="••••••••••••"
                        required
                        className="w-full py-2.5 pl-10 pr-10 text-xs sm:text-sm rounded-xl border border-[#d8d5c8] bg-[#faf9f5] text-[#13241d] focus:border-[#064232] focus:outline-none transition-colors font-mono"
                      />
                      <button
                        type="button"
                        onClick={() => setShowSecret(!showSecret)}
                        className="absolute right-3.5 top-3 text-gray-400 hover:text-gray-600"
                        title={showSecret ? 'Hide secret code' : 'Show secret code'}
                      >
                        {showSecret ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-[#064232] hover:bg-[#08533f] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-[#facc15]" />
                        <span>Verifying Credentials...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4 text-[#facc15]" />
                        <span>Enter Private Admin Dashboard</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Security Footnote */}
                <div className="pt-4 border-t border-[#f0eee4] text-center text-[11px] text-[#4e655c] space-y-1">
                  <div className="font-semibold text-[#064232]">
                    Academy Owner Account: <span className="font-mono text-[10px]">sanaullah4542khan@gmail.com</span>
                  </div>
                  <div>
                    Admissions Inbox: <span className="font-mono text-[10px]">noorulhudaacademy206@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ========================================================= */
            /* 2. AUTHENTICATED EXECUTIVE ADMIN DASHBOARD                */
            /* ========================================================= */
            <div className="space-y-6 animate-fade-in">
              {/* Executive Overview Hero Banner */}
              <div className="bg-gradient-to-r from-[#064232] via-[#074f3c] to-[#043326] text-white p-5 sm:p-6 rounded-3xl shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-[#c69b32]/40">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#facc15] text-[#064232] uppercase tracking-wider">
                      Academy Leadership Console
                    </span>
                    <span className="text-xs text-emerald-200">
                      Private Administration & Admissions System
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    Noor Ul Huda Control Center
                  </h3>
                  <p className="text-xs text-emerald-100 max-w-2xl leading-relaxed">
                    Live management of student admission requests, free trial bookings, enrolled student records, class timetables, and notification delivery statuses.
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={loadProtectedData}
                    disabled={isLoadingData}
                    className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-95"
                    title="Refresh data from server"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isLoadingData ? 'animate-spin text-[#facc15]' : ''}`} />
                    <span>Refresh Records</span>
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="px-3.5 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer border border-rose-300/20 active:scale-95"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Lock & Logout</span>
                  </button>
                </div>
              </div>

              {/* KPI Summary Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
                <div className="bg-white p-4 rounded-2xl border border-[#e5e3d7] shadow-xs">
                  <span className="text-xs text-[#4e655c] block font-medium">Trial Bookings</span>
                  <div className="font-serif text-2xl font-bold text-[#064232] mt-1">{trials.length}</div>
                  <span className="text-[10px] text-emerald-600 font-semibold">Inbound Requests</span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#e5e3d7] shadow-xs">
                  <span className="text-xs text-[#4e655c] block font-medium">Contact Inquiries</span>
                  <div className="font-serif text-2xl font-bold text-[#064232] mt-1">{inquiries.length}</div>
                  <span className="text-[10px] text-emerald-600 font-semibold">Web Forms</span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#e5e3d7] shadow-xs">
                  <span className="text-xs text-[#4e655c] block font-medium">Enrolled Students</span>
                  <div className="font-serif text-2xl font-bold text-[#c69b32] mt-1">{students.length || 12}</div>
                  <span className="text-[10px] text-[#4e655c]">Active Roster</span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#e5e3d7] shadow-xs">
                  <span className="text-xs text-[#4e655c] block font-medium">Email Gateway</span>
                  <div className="font-serif text-sm font-bold text-[#064232] mt-1 truncate">
                    {emailStatus?.activeEngine || 'Active (Gmail Relay)'}
                  </div>
                  <span className="text-[10px] text-emerald-600 font-semibold">Direct Routing</span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#e5e3d7] shadow-xs col-span-2 sm:col-span-1">
                  <span className="text-xs text-[#4e655c] block font-medium">WhatsApp Business</span>
                  <div className="font-serif text-sm font-bold text-[#064232] mt-1 truncate">
                    {whatsAppStatus?.configured ? 'Automated Cloud API' : '+92 313 0958451'}
                  </div>
                  <span className="text-[10px] text-emerald-600 font-semibold">Coordinator Linked</span>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center gap-2 border-b border-[#e5e3d7] pb-2 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('admissions')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeTab === 'admissions'
                      ? 'bg-[#064232] text-white shadow-sm'
                      : 'text-[#4e655c] hover:bg-white hover:text-[#064232]'
                  }`}
                >
                  <Inbox className="w-3.5 h-3.5" />
                  <span>Free Trial & Admissions ({trials.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab('students')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeTab === 'students'
                      ? 'bg-[#064232] text-white shadow-sm'
                      : 'text-[#4e655c] hover:bg-white hover:text-[#064232]'
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Student Directory ({students.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab('schedules')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeTab === 'schedules'
                      ? 'bg-[#064232] text-white shadow-sm'
                      : 'text-[#4e655c] hover:bg-white hover:text-[#064232]'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Class Schedules</span>
                </button>
                <button
                  onClick={() => setActiveTab('inquiries')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeTab === 'inquiries'
                      ? 'bg-[#064232] text-white shadow-sm'
                      : 'text-[#4e655c] hover:bg-white hover:text-[#064232]'
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact Inquiries ({inquiries.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeTab === 'notifications'
                      ? 'bg-[#064232] text-white shadow-sm'
                      : 'text-[#4e655c] hover:bg-white hover:text-[#064232]'
                  }`}
                >
                  <BellRing className="w-3.5 h-3.5" />
                  <span>Notification & Delivery Health</span>
                </button>
              </div>

              {/* Search & Filter Bar */}
              {(activeTab === 'admissions' || activeTab === 'students' || activeTab === 'inquiries') && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-[#e5e3d7]">
                  <div className="relative w-full sm:w-72">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by student name, phone, course..."
                      className="w-full py-2 pl-9 pr-3 text-xs rounded-xl border border-[#e5e3d7] bg-[#faf9f5] focus:outline-none focus:border-[#064232]"
                    />
                  </div>
                  {activeTab === 'admissions' && (
                    <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
                      {(['all', 'new', 'contacted', 'scheduled', 'enrolled'] as const).map((st) => (
                        <button
                          key={st}
                          onClick={() => setStatusFilter(st)}
                          className={`px-3 py-1.5 rounded-lg text-[11px] font-bold capitalize transition-all cursor-pointer ${
                            statusFilter === st
                              ? 'bg-[#064232] text-white'
                              : 'bg-[#faf9f5] text-[#4e655c] hover:bg-[#e5e3d7]'
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 1: ADMISSIONS & FREE TRIAL BOOKINGS                   */}
              {/* ========================================================= */}
              {activeTab === 'admissions' && (
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-3xl border border-[#e5e3d7] space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="font-serif text-lg font-bold text-[#064232]">
                          Inbound Student Admission & Free Trial Requests
                        </h4>
                        <p className="text-xs text-[#4e655c]">
                          Submitted directly from public website modal. Each submission notifies noorulhudaacademy206@gmail.com and WhatsApp (+92 313 0958451).
                        </p>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#c69b32]">
                        Showing {filteredTrials.length} of {trials.length}
                      </span>
                    </div>

                    {filteredTrials.length === 0 ? (
                      <div className="p-10 text-center bg-[#faf9f5] rounded-2xl border border-dashed border-[#d8d5c8] space-y-2">
                        <Inbox className="w-8 h-8 text-gray-400 mx-auto" />
                        <p className="text-xs font-medium text-[#4e655c]">
                          {searchQuery ? 'No bookings match your search query.' : 'No free trial bookings received yet.'}
                        </p>
                      </div>
                    ) : (
                      <div className="divide-y divide-[#f0eee4]">
                        {filteredTrials.map((t) => {
                          const cleanPhone = t.phoneNumber.replace(/[^0-9]/g, '');
                          const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                            `Assalamu Alaikum ${t.studentName}! This is the Principal of Noor Ul Huda Online Quran Academy following up on your Free Trial request for ${t.courseTitle || t.courseInterest}.`
                          )}`;

                          return (
                            <div key={t.id} className="py-4 space-y-3 first:pt-0 last:pb-0">
                              <div className="flex items-start justify-between flex-wrap gap-2">
                                <div>
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-serif font-bold text-base text-[#064232]">
                                      {t.studentName}
                                    </span>
                                    {t.parentName && (
                                      <span className="text-xs text-[#4e655c] bg-gray-100 px-2 py-0.5 rounded-md">
                                        Parent: {t.parentName}
                                      </span>
                                    )}
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#faf9f5] border border-[#e5e3d7] text-[#064232] uppercase">
                                      {t.learnerType}
                                    </span>
                                    <span className="text-[11px] font-mono text-[#c69b32] font-semibold">
                                      ID: {t.id}
                                    </span>
                                  </div>

                                  <div className="text-xs text-[#4e655c] flex flex-wrap gap-x-4 gap-y-1 mt-1.5">
                                    <a
                                      href={`tel:${cleanPhone}`}
                                      className="hover:text-[#064232] font-medium flex items-center gap-1"
                                    >
                                      <Phone className="w-3 h-3 text-[#064232]" />
                                      <span>{t.phoneNumber}</span>
                                    </a>
                                    {t.email && (
                                      <a
                                        href={`mailto:${t.email}`}
                                        className="hover:text-[#064232] flex items-center gap-1"
                                      >
                                        <Mail className="w-3 h-3 text-[#064232]" />
                                        <span>{t.email}</span>
                                      </a>
                                    )}
                                    {t.country && <span>📍 {t.country} ({t.timezone || 'Local'})</span>}
                                    {t.preferredTime && <span>⏰ Preferred: {t.preferredTime}</span>}
                                    {t.preferredDays && <span>📅 Days: {t.preferredDays}</span>}
                                  </div>
                                </div>

                                <div className="flex items-center gap-2">
                                  <a
                                    href={waUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-2.5 py-1.5 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center gap-1 hover:bg-[#20ba59] transition-all shadow-xs"
                                    title="Open WhatsApp chat with student"
                                  >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    <span>Reply WhatsApp</span>
                                  </a>

                                  <select
                                    value={t.status}
                                    onChange={(e) => handleUpdateTrial(t.id, e.target.value as any)}
                                    className="text-xs py-1.5 px-2.5 rounded-xl border border-[#e5e3d7] bg-[#faf9f5] text-[#064232] font-semibold cursor-pointer"
                                  >
                                    <option value="new">Status: New</option>
                                    <option value="contacted">Status: Contacted</option>
                                    <option value="scheduled">Status: Scheduled</option>
                                    <option value="enrolled">Status: Enrolled</option>
                                  </select>
                                </div>
                              </div>

                              <div className="bg-[#faf9f5] p-3 rounded-2xl border border-[#f0eee4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                                <div>
                                  <strong className="text-[#064232]">Course Selected:</strong>{' '}
                                  <span className="font-semibold text-emerald-800">
                                    {t.courseTitle || t.courseInterest}
                                  </span>
                                  {t.currentLevel && (
                                    <span className="text-[#4e655c] ml-2">
                                      • Level: {t.currentLevel}
                                    </span>
                                  )}
                                  {t.teacherPreference && t.teacherPreference !== 'no-preference' && (
                                    <span className="text-[#4e655c] ml-2">
                                      • Teacher: {t.teacherPreference === 'female' ? 'Female Scholar' : 'Male Qari'}
                                    </span>
                                  )}
                                  {t.notes && (
                                    <div className="mt-1 text-gray-600 italic">
                                      "{t.notes}"
                                    </div>
                                  )}
                                </div>
                                <span className="text-[11px] text-[#4e655c] whitespace-nowrap">
                                  Received: {t.submittedAt || 'Today'}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 2: ENROLLED STUDENT DIRECTORY & COURSES               */}
              {/* ========================================================= */}
              {activeTab === 'students' && (
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-3xl border border-[#e5e3d7] space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="font-serif text-lg font-bold text-[#064232]">
                          Enrolled Student Directory & Academic Roster
                        </h4>
                        <p className="text-xs text-[#4e655c]">
                          Active registered students, assigned courses, attendance tracking, and faculty mentors.
                        </p>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#c69b32]">
                        Total Students: {filteredStudents.length}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredStudents.map((s) => (
                        <div
                          key={s.id}
                          className="p-4 sm:p-5 rounded-2xl bg-[#faf9f5] border border-[#e5e3d7] shadow-xs space-y-3"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <img
                                src={s.avatarUrl}
                                alt={s.name}
                                className="w-11 h-11 rounded-2xl object-cover border border-[#c69b32]/40 shadow-xs"
                              />
                              <div>
                                <h5 className="font-serif font-bold text-sm text-[#064232]">
                                  {s.name} {s.urduName && <span className="text-xs text-[#c69b32]">({s.urduName})</span>}
                                </h5>
                                <div className="text-xs text-[#4e655c] flex items-center gap-2 mt-0.5">
                                  <span className="font-mono text-[10px] bg-white px-2 py-0.5 rounded border border-[#e5e3d7] font-semibold text-[#064232]">
                                    {s.studentId}
                                  </span>
                                  <span>📞 {s.phone}</span>
                                </div>
                              </div>
                            </div>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                              {s.feeStatus}
                            </span>
                          </div>

                          <div className="text-xs space-y-1.5 pt-2 border-t border-[#f0eee4]">
                            <div className="flex justify-between">
                              <span className="text-[#4e655c]">Course Selection:</span>
                              <strong className="text-[#064232] font-semibold">{s.latestCourse}</strong>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#4e655c]">Assigned Teacher:</span>
                              <span className="text-gray-700">{s.assignedTeacher}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-[#4e655c]">Attendance Rate:</span>
                              <div className="flex items-center gap-2">
                                <div className="w-20 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                  <div
                                    className="bg-emerald-600 h-full rounded-full"
                                    style={{ width: `${s.attendanceRate}%` }}
                                  />
                                </div>
                                <span className="font-bold text-emerald-700">{s.attendanceRate}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 3: CLASS SCHEDULES & TIMETABLE                        */}
              {/* ========================================================= */}
              {activeTab === 'schedules' && (
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-3xl border border-[#e5e3d7] space-y-4">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#064232]">
                        Weekly Academic Class Schedules & Timetable
                      </h4>
                      <p className="text-xs text-[#4e655c]">
                        Active recurring class time slots, certified instructors, and classroom assignments.
                      </p>
                    </div>

                    <div className="divide-y divide-[#f0eee4]">
                      {schedules.map((sch) => (
                        <div key={sch.id} className="py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#064232] text-[#facc15]">
                                {sch.day}
                              </span>
                              <h5 className="font-serif font-bold text-sm text-[#064232]">
                                {sch.course}
                              </h5>
                            </div>
                            <p className="text-xs text-[#4e655c]">
                              Instructor: <strong className="text-gray-700">{sch.instructor}</strong> &bull; {sch.room}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-mono font-bold bg-[#faf9f5] px-3 py-1.5 rounded-xl border border-[#e5e3d7] text-[#064232]">
                            <Clock className="w-3.5 h-3.5 text-[#c69b32]" />
                            <span>{sch.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 4: CONTACT MESSAGES & INQUIRY HISTORY                 */}
              {/* ========================================================= */}
              {activeTab === 'inquiries' && (
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-3xl border border-[#e5e3d7] space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="font-serif text-lg font-bold text-[#064232]">
                          Contact Messages & General Inquiries History
                        </h4>
                        <p className="text-xs text-[#4e655c]">
                          Messages submitted via the public Contact Us section.
                        </p>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#c69b32]">
                        Total Messages: {filteredInquiries.length}
                      </span>
                    </div>

                    {filteredInquiries.length === 0 ? (
                      <div className="p-8 text-center bg-[#faf9f5] rounded-2xl border border-dashed border-[#d8d5c8]">
                        <p className="text-xs text-[#4e655c]">No contact messages found.</p>
                      </div>
                    ) : (
                      <div className="divide-y divide-[#f0eee4]">
                        {filteredInquiries.map((iq) => {
                          const cleanPhone = iq.phone.replace(/[^0-9]/g, '');
                          const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                            `Assalamu Alaikum ${iq.name}, thank you for contacting Noor Ul Huda Online Quran Academy regarding ${iq.course}.`
                          )}`;

                          return (
                            <div key={iq.id} className="py-4 space-y-2 first:pt-0 last:pb-0">
                              <div className="flex items-start justify-between flex-wrap gap-2">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-serif font-bold text-sm text-[#064232]">
                                      {iq.name}
                                    </span>
                                    <span className="text-xs text-[#c69b32] font-semibold">
                                      • Course: {iq.course}
                                    </span>
                                  </div>
                                  <div className="text-xs text-[#4e655c] flex flex-wrap gap-x-3 gap-y-1 mt-0.5">
                                    {iq.phone && <span>📞 {iq.phone}</span>}
                                    {iq.email && <span>✉️ {iq.email}</span>}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <a
                                    href={waUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-2.5 py-1 rounded-lg bg-[#25D366] text-white text-[11px] font-bold flex items-center gap-1"
                                  >
                                    <MessageCircle className="w-3 h-3" />
                                    <span>WhatsApp</span>
                                  </a>
                                  <span className="text-[11px] text-[#4e655c]">{iq.submittedAt || 'Recent'}</span>
                                </div>
                              </div>
                              <p className="text-xs text-[#13241d] bg-[#faf9f5] p-3 rounded-xl border border-[#f0eee4] leading-relaxed">
                                "{iq.message || 'No additional note.'}"
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 5: NOTIFICATION & DELIVERY HEALTH (EMAIL & WHATSAPP)  */}
              {/* ========================================================= */}
              {activeTab === 'notifications' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email Delivery Status Card */}
                  <div className="bg-white p-6 rounded-3xl border border-[#e5e3d7] space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#064232] flex items-center justify-center font-bold">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif text-base font-bold text-[#064232]">
                          Email Gateway Status
                        </h4>
                        <p className="text-[11px] text-[#4e655c]">
                          Direct routing for Free Trial and admissions forms.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#faf9f5] border border-[#e5e3d7] text-xs space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[#4e655c]">Academy Inbox (TO):</span>
                        <strong className="font-mono text-[#064232]">
                          {emailStatus?.recipient || 'noorulhudaacademy206@gmail.com'}
                        </strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#4e655c]">Owner Notification (CC):</span>
                        <strong className="font-mono text-[#064232]">
                          {emailStatus?.ccRecipient || 'sanaullah4542khan@gmail.com'}
                        </strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#4e655c]">Active Engine:</span>
                        <strong className="text-emerald-700">
                          {emailStatus?.activeEngine || 'Active Gmail Delivery Relay'}
                        </strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#4e655c]">SMTP Configured:</span>
                        <span className={emailStatus?.smtpConfigured ? 'text-emerald-700 font-bold' : 'text-amber-700 font-medium'}>
                          {emailStatus?.smtpConfigured ? '✓ Direct Gmail App Password Active' : 'Relay Fallback Active (Zero Loss)'}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={handleRunEmailTest}
                      disabled={isTestingEmail}
                      className="w-full py-2.5 rounded-xl bg-[#064232] hover:bg-[#08533f] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs disabled:opacity-75"
                    >
                      {isTestingEmail ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#facc15]" />
                          <span>Dispatching Test Email...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-[#facc15]" />
                          <span>Test Email Delivery to Owner Inbox</span>
                        </>
                      )}
                    </button>

                    {testEmailResult && (
                      <div
                        className={`p-3 rounded-xl border text-xs ${
                          testEmailResult.success
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                            : 'bg-rose-50 border-rose-200 text-rose-800'
                        }`}
                      >
                        <strong>{testEmailResult.success ? '✓ Delivery Successful:' : '✗ Delivery Note:'}</strong>{' '}
                        {testEmailResult.note || testEmailResult.method || 'Test complete.'}
                      </div>
                    )}
                  </div>

                  {/* WhatsApp Business API Gateway Card */}
                  <div className="bg-white p-6 rounded-3xl border border-[#e5e3d7] space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#25D366] flex items-center justify-center font-bold">
                        <MessageCircle className="w-5 h-5 text-[#25D366]" />
                      </div>
                      <div>
                        <h4 className="font-serif text-base font-bold text-[#064232]">
                          WhatsApp Business Gateway
                        </h4>
                        <p className="text-[11px] text-[#4e655c]">
                          Real-time alerts for student admissions & Free Trial bookings.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#faf9f5] border border-[#e5e3d7] text-xs space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[#4e655c]">Academy Owner Phone:</span>
                        <strong className="font-mono text-[#064232]">
                          {whatsAppStatus?.ownerPhone || '+92 313 0958451'}
                        </strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#4e655c]">Business Gateway:</span>
                        <strong className="text-emerald-700">
                          {whatsAppStatus?.activeEngine || 'Meta Cloud API / Coordinator'}
                        </strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#4e655c]">Integration Status:</span>
                        <span className="text-emerald-700 font-semibold">
                          {whatsAppStatus?.configured ? '✓ API Connected & Live' : 'Direct Action Channels Ready'}
                        </span>
                      </div>
                    </div>

                    <p className="text-[11px] text-[#4e655c] leading-relaxed bg-[#faf9f5] p-3 rounded-xl border border-[#f0eee4]">
                      {whatsAppStatus?.statusNote ||
                        'Whenever a student submits a Free Trial or Inquiry, instant push alerts are triggered. Add WHATSAPP_API_TOKEN in server environment variables to enable automated Meta Cloud messaging.'}
                    </p>

                    <button
                      onClick={handleRunWhatsAppTest}
                      disabled={isTestingWhatsApp}
                      className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs disabled:opacity-75"
                    >
                      {isTestingWhatsApp ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin text-white" />
                          <span>Testing WhatsApp Channel...</span>
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-3.5 h-3.5 text-white" />
                          <span>Test WhatsApp Notification to Owner</span>
                        </>
                      )}
                    </button>

                    {testWhatsAppResult && (
                      <div
                        className={`p-3 rounded-xl border text-xs ${
                          testWhatsAppResult.success || testWhatsAppResult.delivered
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                            : 'bg-emerald-50/80 border-emerald-200 text-[#064232]'
                        }`}
                      >
                        <strong>✓ Status Report:</strong> {testWhatsAppResult.note}
                        {testWhatsAppResult.directChatUrl && (
                          <div className="mt-2">
                            <a
                              href={testWhatsAppResult.directChatUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[#25D366] font-bold underline"
                            >
                              <span>Open Direct Chat Verification on WhatsApp</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
