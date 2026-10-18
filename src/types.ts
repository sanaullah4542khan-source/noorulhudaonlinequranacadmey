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
}

export interface HomeworkTask {
  id: string;
  title: string;
  courseName: string;
  assignedDate: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'completed';
  notes?: string;
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
  assignedTeacher: string;
  juzProgress?: string;
  attendanceRate: number;
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
