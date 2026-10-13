export type NavigationTab = 
  | 'home'
  | 'about'
  | 'courses'
  | 'fees'
  | 'library'
  | 'teachers'
  | 'how-it-works'
  | 'faq'
  | 'contact';

export interface FeePackage {
  id: string;
  name: string;
  badge?: string;
  classesPerWeek: number;
  classesPerMonth: number;
  sessionDuration: string;
  recommended?: boolean;
  prices: {
    USD: number;
    GBP: number;
    EUR: number;
    CAD: number;
    AUD: number;
  };
  billingPeriod: string;
  features: string[];
  idealFor: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  category: 'international' | 'cards' | 'remittance' | 'local';
  badge?: string;
  tagline: string;
  description: string;
  supportedCurrencies: string[];
  instructions: string;
}

export interface LibraryResource {
  id: string;
  title: string;
  arabicTitle?: string;
  category: 'qaida' | 'tajweed' | 'duas' | 'surahs' | 'salah';
  format: 'Interactive Guide' | 'Reference Manual' | 'Cheat Sheet' | 'Study Companion';
  badge: string;
  description: string;
  readTime: string;
  level: 'Beginner' | 'Intermediate' | 'All Levels';
  contentSummary: string[];
  fullContent: {
    sectionTitle: string;
    description: string;
    items?: {
      arabic?: string;
      transliteration?: string;
      translation?: string;
      notes?: string;
      title?: string;
      content?: string;
    }[];
  }[];
}

export interface Course {
  id: string;
  courseSlug?: string;
  title: string;
  arabicTitle?: string;
  category: 'quran' | 'islamic' | 'arabic' | 'special';
  badge: string;
  summary: string;
  description: string;
  duration: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  audience?: string;
  studentCategory: string;
  timing: string;
  teacherInfo: string;
  feeInfo: string;
  illustrationSlug: 'nazra' | 'tajweed' | 'hifz' | 'islamic-studies' | 'tafsir' | 'arabic' | 'hadith' | 'duas' | 'stories' | 'new-muslim';
  colorTheme?: {
    accent: string;
    gradient: string;
    badgeBg: string;
    badgeText: string;
    pillBg: string;
    pillText: string;
    glowClass: string;
    borderAccent: string;
    btnGradient: string;
    popularTag?: string;
  };
  learningPoints: string[];
  keyTopics: string[];
  learningOutcomes: string[];
  weeklyFormat: string;
  whoThisCourseIsFor: string[];
  learningPathway: {
    stage: string;
    title: string;
    description: string;
  }[];
}

export interface Teacher {
  id: string;
  name: string;
  gender: 'male' | 'female';
  title: string;
  specialization: string;
  experience: string;
  teachingCategory: string;
  languages: string[];
  bio: string;
  avatarSeed: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'classes' | 'teachers' | 'students';
}

export interface TrialBookingFormData {
  studentName: string;
  isParentBooking: boolean;
  parentName?: string;
  studentAge: string;
  courseInterest: string;
  teacherPreference: 'male' | 'female' | 'no-preference';
  currentLevel: string;
  preferredTiming: string;
  timezone: string;
  phoneNumber: string;
  notes?: string;
}

export interface StudentScheduleItem {
  id: string;
  day: string;
  date: string;
  time: string;
  duration: string;
  teacherName: string;
  courseName: string;
  status: 'upcoming' | 'completed' | 'rescheduled' | 'live-now';
  meetingRoomUrl?: string;
  focusTopic: string;
}

export interface HomeworkTask {
  id: string;
  title: string;
  surahOrTopic: string;
  ayahRange?: string;
  assignedDate: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  description: string;
  priority: 'high' | 'medium' | 'normal';
  audioReferenceUrl?: string;
  audioDuration?: string;
  submittedAudioUrl?: string;
  submittedNotes?: string;
  submittedDate?: string;
  teacherGrade?: string;
  teacherRemarks?: string;
}

export interface StudentProgressMilestone {
  category: string;
  title: string;
  currentValue: string;
  targetValue: string;
  percentage: number;
  status: 'mastered' | 'in-progress' | 'reviewing';
  notes: string;
}

export interface StudentProfile {
  studentId: string;
  name: string;
  urduName?: string;
  email: string;
  avatarUrl?: string;
  enrolledCourse: string;
  assignedTeacher: {
    name: string;
    title: string;
    avatarUrl: string;
    gender: 'male' | 'female';
    phone: string;
  };
  enrollmentDate: string;
  packageType: string;
  timezone: string;
  attendanceRate: number;
  classesCompleted: number;
  totalClassesBooked: number;
  streakDays: number;
  overallProgressPercentage: number;
  currentSabaq: {
    surahName: string;
    ayahRange: string;
    juzNumber: number;
    makharijScore: number;
    status: string;
  };
  currentSabqi: {
    surahName: string;
    ayahRange: string;
    retentionScore: number;
    status: string;
  };
  currentManzil: {
    juzCovered: string;
    status: string;
  };
  tajweedSkills: {
    skill: string;
    mastery: number;
  }[];
  learningJourney?: StudentLearningJourney;
  schedules: StudentScheduleItem[];
  homework: HomeworkTask[];
  recentClassLogs: {
    id: string;
    date: string;
    topic: string;
    rating: number;
    teacherNotes: string;
  }[];
}

export interface LearningJourneyMilestone {
  id: string;
  stageNumber: number;
  title: string;
  arabicTitle: string;
  subtitle: string;
  status: 'completed' | 'in-progress' | 'upcoming' | 'locked';
  progressPercentage: number;
  completedLessons: number;
  totalLessons: number;
  juzOrSurah: string;
  rewardBadge: string;
  rewardTitle: string;
  xpPoints: number;
  dateOrEta?: string;
  teacherRemarks?: string;
  topicsCovered: string[];
}

export interface StudentLearningJourney {
  currentStage: number;
  totalStages: number;
  completedLessons: number;
  targetLessons: number;
  overallJourneyPercentage: number;
  hasanatPoints: number;
  studentLevel: number;
  levelTitle: string;
  nextMilestoneTitle: string;
  nextMilestoneRemainingLessons: number;
  milestones: LearningJourneyMilestone[];
}

export type UserRole = 'student' | 'parent' | 'teacher' | 'admin';

export interface UserAccount {
  id: string;
  name: string;
  urduName?: string;
  email: string;
  role: UserRole;
  studentId?: string;
  teacherId?: string;
  parentId?: string;
  avatarUrl: string;
  phone: string;
}

export interface AudioSubmission {
  id: string;
  studentId: string;
  studentName: string;
  courseName: string;
  surahName: string;
  ayahRange: string;
  audioDataUrl: string;
  durationSeconds: number;
  submittedAt: string;
  status: 'pending' | 'reviewed';
  studentNotes?: string;
  teacherFeedback?: {
    teacherName: string;
    audioDataUrl?: string;
    writtenRemarks: string;
    makharijScore: number;
    tajweedScore: number;
    reviewedAt: string;
  };
}

export interface AttendanceItem {
  id: string;
  studentId: string;
  studentName: string;
  classId: string;
  courseName: string;
  teacherName: string;
  date: string;
  time: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  remarks: string;
}

export interface FeeRecord {
  id: string;
  invoiceNumber: string;
  studentId: string;
  studentName: string;
  planName: string;
  amount: number;
  currency: string;
  status: 'paid' | 'pending' | 'overdue';
  dueDate: string;
  paidDate?: string;
  paymentMethod?: string;
}

export interface NotificationItem {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'class' | 'homework' | 'feedback' | 'fee' | 'system';
  read: boolean;
  createdAt: string;
  link?: string;
}

export interface LearningPath {
  studentId: string;
  studentName: string;
  ageGroup: string;
  currentLevel: 'Beginner (Qaida)' | 'Intermediate (Nazra & Tajweed)' | 'Advanced (Hifz & Tafsir)' | 'New Muslim Foundation';
  primaryGoal: string;
  daysPerWeek: number;
  recommendedCourse: string;
  stage: string;
  milestones: {
    id: string;
    title: string;
    duration: string;
    status: 'completed' | 'in-progress' | 'upcoming';
    description: string;
  }[];
  updatedAt: string;
}


