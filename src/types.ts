export interface CourseColorTheme {
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
}

export interface Course {
  id: string;
  courseSlug: string;
  title: string;
  arabicTitle: string;
  category: 'quran' | 'tajweed' | 'hifz' | 'islamic' | 'arabic';
  badge: string;
  illustrationSlug: string;
  studentCategory?: string;
  duration?: string;
  timing?: string;
  teacherInfo?: string;
  feeInfo?: string;
  monthlyFee?: string;
  colorTheme?: CourseColorTheme;
  summary?: string;
  description?: string;
  learningPoints?: string[];
  learningOutcomes?: string[];
  keyTopics?: string[];
  weeklyFormat?: string;
  whoThisCourseIsFor?: string[];
  learningPathway?: {
    stage: string;
    title: string;
    description: string;
  }[];
  prerequisites?: string;
  certification?: string;
  levels?: string;
  curriculum?: string[];
  outcomes?: string[];
  iconName?: string;
  tagline?: string;
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
  photoUrl?: string;
}

export interface LearningJourneyMilestone {
  id: string;
  stageNumber: number;
  title: string;
  arabicTitle?: string;
  subtitle?: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming' | 'locked';
  targetAyahOrLesson: string;
  rewardBadge: string;
  rewardTitle?: string;
  xpReward: number;
  xpPoints?: number;
  juzOrSurah?: string;
  completedLessons?: number;
  totalLessons?: number;
  teacherRemarks?: string;
  dateOrEta?: string;
  dateCompleted?: string;
  estimatedCompletion?: string;
  progressPercentage: number;
  topicsCovered: string[];
  memorizationJuz?: string;
}

export interface StudentLearningJourney {
  currentStage: number;
  totalStages: number;
  completedLessons: number;
  totalLessons: number;
  targetLessons?: number;
  overallProgressPercentage: number;
  overallJourneyPercentage?: number;
  hasanatPoints: number;
  studentLevel: number;
  levelTitle: string;
  streakDays: number;
  currentMilestoneTarget: string;
  nextMilestoneDate: string;
  nextMilestoneTitle?: string;
  nextMilestoneRemainingLessons?: number;
  milestones: LearningJourneyMilestone[];
}

export interface StudentScheduleItem {
  id: string;
  day: string;
  time: string;
  courseName: string;
  teacherName: string;
  link?: string;
  focusTopic?: string;
  name?: string;
  duration?: string;
  date?: string;
  status?: string;
  title?: string;
}

export interface HomeworkTask {
  id: string;
  title: string;
  courseName: string;
  assignedDate: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'completed' | 'graded';
  notes?: string;
  teacherGrade?: string;
  surahOrTopic?: string;
  ayahRange?: string;
  description?: string;
  audioReferenceUrl?: string;
  audioDuration?: string;
  teacherRemarks?: string;
  submittedDate?: string;
}

export interface StudentProfile {
  id: string;
  studentId: string;
  name: string;
  urduName?: string;
  email: string;
  phone: string;
  avatarUrl: string;
  enrolledCourse: string;
  assignedTeacher: any;
  packageType?: string;
  juzProgress?: string;
  attendanceRate: number;
  classesCompleted?: number;
  totalClassesBooked?: number;
  enrollmentDate?: string;
  streakDays?: number;
  currentSabaq?: any;
  currentSabqi?: any;
  currentManzil?: any;
  overallProgressPercentage?: number;
  timezone?: string;
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

export interface LibraryResource {
  id: string;
  title: string;
  arabicTitle?: string;
  category: string;
  level: string;
  readTime: string;
  badge?: string;
  format?: string;
  description: string;
  contentSummary?: string[];
  fullContent?: string;
  keyPoints?: string[];
  recommendedCourseId?: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export type NavigationTab = 'home' | 'about' | 'courses' | 'pricing' | 'payment' | 'testimonials' | 'contact' | 'why-choose-us' | 'teachers' | 'fees' | 'library' | 'how-it-works' | 'faq';

export interface FeePackage {
  id: string;
  name: string;
  badge?: string;
  classesPerWeek: number;
  classesPerMonth: number;
  sessionDuration: string;
  recommended: boolean;
  prices: Record<string, number>;
  popularTag?: string;
  features?: string[];
  summary?: string;
  billingPeriod?: string;
  idealFor?: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  category: string;
  badge: string;
  tagline: string;
  description: string;
  supportedCurrencies: string[];
  instructions: string;
}

export type UserRole = 'student' | 'parent' | 'teacher' | 'admin';

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  studentId?: string;
  avatarUrl?: string;
  urduName?: string;
  phone?: string;
  parentId?: string;
  teacherId?: string;
}

export interface AudioSubmission {
  id: string;
  studentId: string;
  surahOrTopic: string;
  ayahRange?: string;
  date: string;
  audioBlobUrl?: string;
  status: 'pending' | 'graded';
  grade?: string;
  teacherRemarks?: string;
}

export interface AttendanceItem {
  id: string;
  date: string;
  status: 'present' | 'absent' | 'excused';
  topicCovered: string;
}

export interface FeeRecord {
  id: string;
  month: string;
  amount: string;
  status: 'paid' | 'pending';
  receiptUrl?: string;
}

export interface LearningPath {
  id?: string;
  title?: string;
  targetAudience?: string;
  estimatedWeeks?: number;
  modules?: string[];
  studentId?: string;
  studentName?: string;
  ageGroup?: string;
  currentLevel?: string;
  primaryGoal?: string;
  daysPerWeek?: number | string;
  recommendedCourse?: string;
  milestones?: any[];
  [key: string]: any;
}
