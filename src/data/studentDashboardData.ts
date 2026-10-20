import { StudentProfile, StudentLearningJourney } from '../types';

export const DEFAULT_STUDENT_JOURNEY: StudentLearningJourney = {
  currentStage: 4,
  totalStages: 6,
  completedLessons: 24,
  totalLessons: 36,
  overallProgressPercentage: 68,
  hasanatPoints: 1480,
  studentLevel: 5,
  levelTitle: 'Rising Reciter (Makharij & Tajweed)',
  streakDays: 14,
  currentMilestoneTarget: 'Complete Rules of Noon Sakinah & Tanween Examination',
  nextMilestoneDate: 'Upcoming Saturday',
  milestones: [
    {
      id: 'ms-1',
      stageNumber: 1,
      title: 'Makharij al-Huroof (Articulation Points)',
      arabicTitle: 'مخارج الحروف',
      description: 'Mastery of the 17 phoneme origin points (Throat, Tongue, Lips, Nasal Cavity).',
      status: 'completed',
      targetAyahOrLesson: 'Lesson 1 to 6 Mastery',
      rewardBadge: 'Phonetics Pioneer',
      xpReward: 250,
      dateCompleted: 'Completed',
      progressPercentage: 100,
      topicsCovered: ['Throat letters (Halqiyyah)', 'Tongue root & palate letters', 'Lip articulators']
    },
    {
      id: 'ms-2',
      stageNumber: 2,
      title: 'Noon Sakinah & Tanween Laws',
      arabicTitle: 'أحكام النون الساكنة والتنوين',
      description: 'Flawless execution of Izhar, Idgham, Iqlab, and Ikhfa during continuous recitation.',
      status: 'completed',
      targetAyahOrLesson: 'Lesson 7 to 14 Mastery',
      rewardBadge: 'Tajweed Specialist',
      xpReward: 350,
      dateCompleted: 'Completed',
      progressPercentage: 100,
      topicsCovered: ['Izhar Halqi', 'Idgham with & without Ghunnah', 'Iqlab into Meem', 'Ikhfa Haqiqi']
    },
    {
      id: 'ms-3',
      stageNumber: 3,
      title: 'Meem Sakinah & Ghunnah Rules',
      arabicTitle: 'أحكام الميم الساكنة والغنة',
      description: 'Precision timing for Ikhfa Shafawi, Idgham Shafawi, and Izhar Shafawi.',
      status: 'completed',
      targetAyahOrLesson: 'Lesson 15 to 20 Mastery',
      rewardBadge: 'Rhythmic Reader',
      xpReward: 400,
      dateCompleted: 'Completed',
      progressPercentage: 100,
      topicsCovered: ['Ikhfa Shafawi', 'Idgham Mutamathilayn', 'Izhar Shafawi']
    },
    {
      id: 'ms-4',
      stageNumber: 4,
      title: 'Madd Rules (Elongation Cycles)',
      arabicTitle: 'أحكام المدود وأوزانها',
      description: 'Natural, connected, and disconnected elongations (2, 4, 5, and 6 harakah counts).',
      status: 'in-progress',
      targetAyahOrLesson: 'Surah Al-Mulk to Al-Qalam Retain',
      rewardBadge: 'Cadence Laureate',
      xpReward: 500,
      estimatedCompletion: 'In Progress (80%)',
      progressPercentage: 80,
      topicsCovered: ['Madd Asli / Tabee’i', 'Madd Muttasil & Munfasil', 'Madd Lazim (Kalimi & Harfi)']
    },
    {
      id: 'ms-5',
      stageNumber: 5,
      title: 'Waqf & Ibtida (Stopping & Resuming)',
      arabicTitle: 'أحكام الوقف والابتداء',
      description: 'Understanding stopping marks, complete stop (Taam), sufficient (Kafi), and good (Hasan).',
      status: 'locked',
      targetAyahOrLesson: 'Juz 29 Fluent Recitation',
      rewardBadge: 'Breath & Pause Guardian',
      xpReward: 650,
      progressPercentage: 0,
      topicsCovered: ['Signs of Waqf (Mim, Jim, Qala, Sala)', 'Forbidden stops (La)', 'Sakt (pause without breath)']
    },
    {
      id: 'ms-6',
      stageNumber: 6,
      title: 'Graduation & Sanad Recitation Certification',
      arabicTitle: 'إجازة التلاوة والإتقان',
      description: 'Comprehensive oral examination before senior academy scholars with graduation honours.',
      status: 'locked',
      targetAyahOrLesson: 'Full Juz Recitation Assessment',
      rewardBadge: 'Golden Crown of Noor',
      xpReward: 1000,
      progressPercentage: 0,
      topicsCovered: ['Full oral recitation defense', 'Theoretical Tajweed quiz', 'Official Certification']
    }
  ]
};

export function getStudentLearningJourney(profile: StudentProfile): StudentLearningJourney {
  if (profile.learningJourney) {
    return profile.learningJourney;
  }
  return DEFAULT_STUDENT_JOURNEY;
}

export const DEMO_STUDENT_PROFILES: Record<string, StudentProfile> = {
  'NUH-8421': {
    id: 'student-1',
    studentId: 'NUH-8421',
    name: 'Ibrahim Khan',
    urduName: 'ابراہیم خان',
    email: 'ibrahim.k@example.com',
    phone: '+92 313 0958451',
    avatarUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=150',
    enrolledCourse: 'Quran with Tajweed Perfection',
    assignedTeacher: 'Sheikh Salman Al-Azhari',
    juzProgress: 'Juz 28 (Completed Juz 29 & 30)',
    attendanceRate: 98,
    classesCompleted: 24,
    totalClassesBooked: 36,
    enrollmentDate: 'Oct 2023',
    streakDays: 14,
    currentSabaq: 'Surah Al-Mulk (Ayah 1-15)',
    currentSabqi: 'Surah Al-Qalam',
    currentManzil: 'Juz 30 (Full review)',
    overallProgressPercentage: 68,
    timezone: 'Asia/Karachi',
    tajweedSkills: [
      { skill: 'Makharij Pronunciation', mastery: 95 },
      { skill: 'Noon & Meem Sakinah', mastery: 90 },
      { skill: 'Madd Rules', mastery: 80 },
      { skill: 'Waqf Rules', mastery: 75 }
    ],
    learningJourney: DEFAULT_STUDENT_JOURNEY,
    schedules: [
      {
        id: 'sch-1',
        day: 'Monday',
        time: '6:00 PM PKT',
        courseName: 'Tajweed Session',
        teacherName: 'Sheikh Salman Al-Azhari',
        duration: '45 mins',
        focusTopic: 'Madd Elongation with Surah Al-Mulk',
        date: '2026-10-21',
        status: 'upcoming'
      },
      {
        id: 'sch-2',
        day: 'Wednesday',
        time: '6:00 PM PKT',
        courseName: 'Tajweed Session',
        teacherName: 'Sheikh Salman Al-Azhari',
        duration: '45 mins',
        focusTopic: 'Practical recitation exam',
        date: '2026-10-23',
        status: 'upcoming'
      }
    ],
    homework: [
      {
        id: 'hw-1',
        title: 'Memorize Surah Al-Mulk verses 1-10',
        courseName: 'Tajweed Perfection',
        assignedDate: '2026-10-18',
        dueDate: '2026-10-22',
        status: 'pending',
        surahOrTopic: 'Surah Al-Mulk',
        ayahRange: '1-10',
        description: 'Practice Tartil recitation with proper elongation',
        audioReferenceUrl: 'https://example.com/audio/al-mulk.mp3',
        audioDuration: '2:15',
        notes: 'Pay special attention to Ghunnah at verse 2.'
      }
    ],
    recentClassLogs: [
      {
        id: 'log-1',
        date: '2026-10-18',
        topic: 'Madd Muttasil & Munfasil distinction',
        rating: 5,
        teacherNotes: 'Excellent rhythm and accurate breath control.'
      }
    ]
  }
};
