import { StudentProfile } from '../types';

export const DEMO_STUDENT_PROFILES: Record<string, StudentProfile> = {
  'NUH-8421': {
    studentId: 'NUH-8421',
    name: 'Zayd Ibrahim',
    urduName: 'زید ابراہیم',
    email: 'zayd.ibrahim@example.com',
    avatarUrl: '/student-boy-chin-rehal.jpg',
    enrolledCourse: 'Nazra Quran with Comprehensive Tajweed',
    assignedTeacher: {
      name: 'Qari Safeer Ur Rehman',
      title: 'Senior Qari & Al-Azhar Certified Ustadh',
      avatarUrl: '/teacher-qari.jpg',
      gender: 'male',
      phone: '+92 313 0958451'
    },
    enrollmentDate: 'January 12, 2026',
    packageType: 'Standard Plan (3 Days / Week)',
    timezone: 'America/New_York (EST)',
    attendanceRate: 96,
    classesCompleted: 24,
    totalClassesBooked: 25,
    streakDays: 14,
    overallProgressPercentage: 68,
    currentSabaq: {
      surahName: 'Surah Al-Isra (الإسراء)',
      ayahRange: 'Ayah 23 – 30',
      juzNumber: 15,
      makharijScore: 92,
      status: 'In Progress (Tajweed: Madd Muttasil & Akhfa)'
    },
    currentSabqi: {
      surahName: 'Surah Al-Kahf (الكهف)',
      ayahRange: 'Ayah 1 – 25',
      retentionScore: 95,
      status: 'Reviewed with Ustadh'
    },
    currentManzil: {
      juzCovered: 'Juz 14 (Surah Al-Hijr & An-Nahl)',
      status: 'Cycle 2 Completed'
    },
    tajweedSkills: [
      { skill: 'Makharij al-Huroof (Throat & Tongue Letters)', mastery: 94 },
      { skill: 'Noon Sakinah & Tanween (Izhar, Idgham, Iqlab, Ikhfa)', mastery: 96 },
      { skill: 'Meem Sakinah Rules (Ikhfa Shafawi, Idgham Shafawi)', mastery: 90 },
      { skill: 'Qalqalah Mechanics (Sughra & Kubra)', mastery: 98 },
      { skill: 'Madd Rules (Asli, Munfasil, Muttasil, Lazim)', mastery: 88 },
      { skill: 'Raa & Laam Rules (Tafkheem & Tarqeeq)', mastery: 85 }
    ],
    learningJourney: {
      currentStage: 4,
      totalStages: 6,
      completedLessons: 24,
      targetLessons: 36,
      overallJourneyPercentage: 68,
      hasanatPoints: 1480,
      studentLevel: 5,
      levelTitle: 'Tajweed Explorer & Nazra Hafiz',
      nextMilestoneTitle: 'Surah Al-Isra Full Nazra & Tartil Certification',
      nextMilestoneRemainingLessons: 4,
      milestones: [
        {
          id: 'ms-z1',
          stageNumber: 1,
          title: 'Noorani Qaida & Makharij Foundations',
          arabicTitle: 'مخارج الحروف وقاعدة نورانية',
          subtitle: 'Letter Articulation Points, Harakat & Tanween',
          status: 'completed',
          progressPercentage: 100,
          completedLessons: 8,
          totalLessons: 8,
          juzOrSurah: 'Qaida Lessons 1–17',
          rewardBadge: '🏅',
          rewardTitle: 'Makharij Master Badge',
          xpPoints: 300,
          dateOrEta: 'Completed Feb 2026',
          teacherRemarks: 'MashaAllah fluent throat, tongue and lip letter articulation.',
          topicsCovered: ['Single & Compound Letters', 'Harakat & Tanween', 'Sukoon & Shaddah', 'Madd Asli']
        },
        {
          id: 'ms-z2',
          stageNumber: 2,
          title: 'Juz Amma (Juz 30) Short Surahs Hifz',
          arabicTitle: 'حفظ قصار السور - جزء عم',
          subtitle: 'Surah An-Nas to Surah Ad-Duha with Daily Tartil',
          status: 'completed',
          progressPercentage: 100,
          completedLessons: 10,
          totalLessons: 10,
          juzOrSurah: 'Juz 30 Essential Surahs',
          rewardBadge: '🌟',
          rewardTitle: 'Amma Champion Badge',
          xpPoints: 450,
          dateOrEta: 'Completed April 2026',
          teacherRemarks: 'Flawless memorization with correct Waqf and melodic Tartil.',
          topicsCovered: ['Daily 4 Quls', 'Surah Al-Fatiha Perfect Recitation', 'Ayat-ul-Kursi', 'Surah Al-Ikhlas & Al-Falaq']
        },
        {
          id: 'ms-z3',
          stageNumber: 3,
          title: 'Juz Tabarak (Juz 29) & Fluent Recitation',
          arabicTitle: 'جزء تبارك والترتيل المستمر',
          subtitle: 'Surah Al-Mulk to Al-Mursalat with Melodic Tajweed',
          status: 'completed',
          progressPercentage: 100,
          completedLessons: 6,
          totalLessons: 6,
          juzOrSurah: 'Surah Al-Mulk & Al-Qalam',
          rewardBadge: '📜',
          rewardTitle: 'Tabarak Protector Badge',
          xpPoints: 350,
          dateOrEta: 'Completed July 2026',
          teacherRemarks: 'Strong retention of Surah Al-Mulk with emotional connection.',
          topicsCovered: ['Surah Al-Mulk Memorization', 'Qalqalah Kubra Application', 'Idgham with Ghunnah']
        },
        {
          id: 'ms-z4',
          stageNumber: 4,
          title: 'Current Frontier: Surah Al-Isra & Al-Kahf',
          arabicTitle: 'سورة الإسراء والكهف - المحطة الحالية',
          subtitle: 'Juz 15 Sabaq Recitation & Madd Muttasil Application',
          status: 'in-progress',
          progressPercentage: 68,
          completedLessons: 24,
          totalLessons: 30,
          juzOrSurah: 'Juz 15 (Ayahs 23–30 Active)',
          rewardBadge: '⚡',
          rewardTitle: 'Kahf Beacon Badge',
          xpPoints: 500,
          dateOrEta: 'Target: Next Month',
          teacherRemarks: 'Focusing on Madd Muttasil elongation and clear soft Ikhfa.',
          topicsCovered: ['Surah Al-Isra Ayahs 1–40', 'Surah Al-Kahf Opening 10 Ayahs', 'Madd Muttasil & Munfasil']
        },
        {
          id: 'ms-z5',
          stageNumber: 5,
          title: 'Mid-Quran Recitation & Hifz Assessment',
          arabicTitle: 'تقييم نصف القرآن الكريم',
          subtitle: 'Juz 16 – 18 Oral Exam with Senior Ustadh',
          status: 'upcoming',
          progressPercentage: 25,
          completedLessons: 0,
          totalLessons: 12,
          juzOrSurah: 'Juz 16 to Juz 18',
          rewardBadge: '🎖️',
          rewardTitle: 'Mid-Quran Guardian Badge',
          xpPoints: 600,
          dateOrEta: 'Target: Winter 2026',
          teacherRemarks: 'Comprehensive oral examination with Senior Ustadh.',
          topicsCovered: ['Surah Maryam', 'Surah Ta-Ha', 'Continuous Tartil Flow']
        },
        {
          id: 'ms-z6',
          stageNumber: 6,
          title: 'Khatam-ul-Quran & Golden Tajweed Sanad',
          arabicTitle: 'ختم القرآن الكريم والإجازة',
          subtitle: 'Complete 30 Juz Recitation & Al-Azhar Certified Sanad',
          status: 'locked',
          progressPercentage: 0,
          completedLessons: 0,
          totalLessons: 20,
          juzOrSurah: 'Complete 30 Juz Recitation',
          rewardBadge: '👑',
          rewardTitle: 'Taj-ul-Waqar Golden Crown Sanad',
          xpPoints: 1000,
          dateOrEta: 'Target: Spring 2027',
          teacherRemarks: 'Official Sanad with continuous chain connected to the Prophet ﷺ.',
          topicsCovered: ['Final 30 Juz Khatam Recitation', 'Waqf wa Ibtida Examination', 'Official Academy Certification']
        }
      ]
    },
    schedules: [
      {
        id: 'sch-1',
        day: 'Today',
        date: 'Monday, Sep 21, 2026',
        time: '06:00 PM – 06:30 PM',
        duration: '30 min',
        teacherName: 'Qari Safeer Ur Rehman',
        courseName: 'Nazra Quran with Tajweed',
        status: 'upcoming',
        focusTopic: 'Recitation of Surah Al-Isra Ayahs 26-32 + Madd Muttasil application',
        meetingRoomUrl: 'https://meet.google.com/nuh-quran-class'
      },
      {
        id: 'sch-2',
        day: 'Wednesday',
        date: 'Wednesday, Sep 23, 2026',
        time: '06:00 PM – 06:30 PM',
        duration: '30 min',
        teacherName: 'Qari Safeer Ur Rehman',
        courseName: 'Nazra Quran with Tajweed',
        status: 'upcoming',
        focusTopic: 'Sabqi Revision: Surah Al-Kahf Ayahs 26-45 + Waqf Rules',
        meetingRoomUrl: 'https://meet.google.com/nuh-quran-class'
      },
      {
        id: 'sch-3',
        day: 'Friday',
        date: 'Friday, Sep 25, 2026',
        time: '06:00 PM – 06:30 PM',
        duration: '30 min',
        teacherName: 'Qari Safeer Ur Rehman',
        courseName: 'Nazra Quran with Tajweed',
        status: 'upcoming',
        focusTopic: 'Weekly Tajweed Assessment & Manzil Juz 15 check',
        meetingRoomUrl: 'https://meet.google.com/nuh-quran-class'
      },
      {
        id: 'sch-4',
        day: 'Past Session',
        date: 'Friday, Sep 18, 2026',
        time: '06:00 PM – 06:30 PM',
        duration: '30 min',
        teacherName: 'Qari Safeer Ur Rehman',
        courseName: 'Nazra Quran with Tajweed',
        status: 'completed',
        focusTopic: 'Surah Al-Isra Ayahs 18-25: Filial Piety Ayahs',
        meetingRoomUrl: 'https://meet.google.com/nuh-quran-class'
      }
    ],
    homework: [
      {
        id: 'hw-1',
        title: 'Recite & Record Surah Al-Isra Ayahs 23–26',
        surahOrTopic: 'Surah Al-Isra',
        ayahRange: 'Ayah 23 to 26',
        assignedDate: 'Sep 19, 2026',
        dueDate: 'Sep 21, 2026 (Before Class)',
        status: 'pending',
        priority: 'high',
        description: 'Carefully recite Ayahs 23-26 focusing on the elongation of Madd Muttasil in (جَزَآءً) and maintaining clear soft Ikhfa on Noon Sakinah. Record and submit your voice recording.',
        audioReferenceUrl: 'https://server8.mp3quran.net/minsh/017.mp3',
        audioDuration: '1 min 45 sec'
      },
      {
        id: 'hw-2',
        title: 'Memorize Quranic Dua for Parents with Meaning',
        surahOrTopic: 'Daily Masnoon Dua & Quranic Supplication',
        ayahRange: 'Surah Al-Isra: 24',
        assignedDate: 'Sep 18, 2026',
        dueDate: 'Sep 22, 2026',
        status: 'submitted',
        priority: 'medium',
        description: 'Memorize: رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا (My Lord, have mercy upon them as they brought me up when I was small). Submit voice recitation with English/Urdu translation.',
        submittedDate: 'Sep 19, 2026',
        submittedNotes: 'Alhamdulillah memorized with correct pronunciation of Ha and Raa.',
        teacherGrade: 'A+ (98/100)',
        teacherRemarks: 'MashaAllah excellent pronunciation and sincere recitation! Very proud of your progress Zayd.'
      },
      {
        id: 'hw-3',
        title: 'Review Noorani Qaida Lesson 14: Raa Rules',
        surahOrTopic: 'Noorani Qaida Foundation',
        assignedDate: 'Sep 15, 2026',
        dueDate: 'Sep 18, 2026',
        status: 'graded',
        priority: 'normal',
        description: 'Read and distinguish between heavy Raa (Mufakhkhamah) with Fathah/Dammah and light Raa (Muraqqaqah) with Kasrah.',
        submittedDate: 'Sep 17, 2026',
        submittedNotes: 'Completed 3 revision rounds with mother.',
        teacherGrade: 'A (95/100)',
        teacherRemarks: 'Spot-on differentiation between thick and thin Raa sound. Well done!'
      }
    ],
    recentClassLogs: [
      {
        id: 'log-1',
        date: 'Sep 18, 2026',
        topic: 'Surah Al-Isra (Ayahs 18-25) & Makhraj of Daad (ض)',
        rating: 5,
        teacherNotes: 'Excellent articulation today. Makhraj of Daad is much clearer from the side of the tongue. Keep up the daily 15-minute practice.'
      },
      {
        id: 'log-2',
        date: 'Sep 16, 2026',
        topic: 'Sabqi Revision: Surah Al-Kahf Ayahs 1-15',
        rating: 4.8,
        teacherNotes: 'Fluent recitation. Minor hesitation on Ayah 9 was corrected instantly. Great focus throughout the 30-minute session.'
      },
      {
        id: 'log-3',
        date: 'Sep 14, 2026',
        topic: 'Tajweed Deep-Dive: Qalqalah Letters (ق ط ب ج د)',
        rating: 5,
        teacherNotes: 'Mastered the bouncing echo without adding extra harakah vowel. Ready to advance to intermediate Madd rules.'
      }
    ]
  },
  'NUH-9102': {
    studentId: 'NUH-9102',
    name: 'Maryam Fatima',
    urduName: 'مریم فاطمہ',
    email: 'maryam.fatima@example.com',
    avatarUrl: '/student-boy-holding-quran.jpg',
    enrolledCourse: 'Hifz-ul-Quran (Quran Memorization Program)',
    assignedTeacher: {
      name: 'Ustadha Fatima Zahra',
      title: 'Senior Hafiza & Tajweed Instructor (Ijazah Holder)',
      avatarUrl: '/teacher-online-qari.jpg',
      gender: 'female',
      phone: '+92 313 0958451'
    },
    enrollmentDate: 'August 01, 2025',
    packageType: 'Premium Intensive (5 Days / Week)',
    timezone: 'Europe/London (BST)',
    attendanceRate: 98,
    classesCompleted: 78,
    totalClassesBooked: 80,
    streakDays: 28,
    overallProgressPercentage: 42,
    currentSabaq: {
      surahName: 'Surah Maryam (سورة مريم)',
      ayahRange: 'Ayah 41 – 58',
      juzNumber: 16,
      makharijScore: 98,
      status: 'Memorizing Sabaq Daily (1 Page/Day)'
    },
    currentSabqi: {
      surahName: 'Surah Maryam (سورة مريم)',
      ayahRange: 'Ayah 1 – 40',
      retentionScore: 97,
      status: 'Solid Retention'
    },
    currentManzil: {
      juzCovered: 'Juz 1 to 5 (Full Revision)',
      status: 'Quarter 2 Exam Passed'
    },
    tajweedSkills: [
      { skill: 'Hifz Retention & Fluency Speed', mastery: 96 },
      { skill: 'Madd Rules in Continuous Tartil', mastery: 95 },
      { skill: 'Ghunnah & Ikhfa Precision', mastery: 98 },
      { skill: 'Waqf & Ibtida (Stopping & Starting)', mastery: 92 },
      { skill: 'Mutashabihat (Similar Verses) Mastery', mastery: 89 }
    ],
    learningJourney: {
      currentStage: 4,
      totalStages: 7,
      completedLessons: 78,
      targetLessons: 100,
      overallJourneyPercentage: 78,
      hasanatPoints: 4920,
      studentLevel: 12,
      levelTitle: 'Hafiza Aspirant — Half-Quran Vanguard',
      nextMilestoneTitle: 'Surah Maryam Completion & Juz 16 Sanad Evaluation',
      nextMilestoneRemainingLessons: 6,
      milestones: [
        {
          id: 'ms-m1',
          stageNumber: 1,
          title: 'Foundation Tajweed & Articulation Rules',
          arabicTitle: 'تأسيس التجويد ومخارج الحروف',
          subtitle: 'All 28 Makharij Points & Sifaat al-Huroof Characteristics',
          status: 'completed',
          progressPercentage: 100,
          completedLessons: 12,
          totalLessons: 12,
          juzOrSurah: 'Full Qaida & Pronunciation Mastery',
          rewardBadge: '🏅',
          rewardTitle: 'Precision Articulator Badge',
          xpPoints: 500,
          dateOrEta: 'Completed Sep 2025',
          teacherRemarks: 'Flawless articulation meeting Al-Azhar standard.',
          topicsCovered: ['All 28 Makharij Points', 'Sifaat al-Huroof (Characteristics)', 'Ghunnah Precision']
        },
        {
          id: 'ms-m2',
          stageNumber: 2,
          title: 'Juz Amma & Tabarak (Juz 29 & 30) Complete Hifz',
          arabicTitle: 'حفظ جزئي عم وتبارك كاملين',
          subtitle: 'Surah An-Naba to An-Nas & Surah Al-Mulk to Al-Mursalat',
          status: 'completed',
          progressPercentage: 100,
          completedLessons: 22,
          totalLessons: 22,
          juzOrSurah: 'Juz 29 & Juz 30 Complete (48 Surahs)',
          rewardBadge: '🌟',
          rewardTitle: 'Double Juz Guardian Badge',
          xpPoints: 850,
          dateOrEta: 'Completed Dec 2025',
          teacherRemarks: 'Exemplary memorization with zero prompts required in oral exam.',
          topicsCovered: ['Surah An-Naba to An-Nas (37 Surahs)', 'Surah Al-Mulk to Al-Mursalat (11 Surahs)', 'Waqf Rules']
        },
        {
          id: 'ms-m3',
          stageNumber: 3,
          title: 'Juz 1 to 5 Foundation Memorization',
          arabicTitle: 'حفظ الأجزاء 1 إلى 5 والمراجعة الدورية',
          subtitle: 'Surah Al-Baqarah & Ali Imran with Continuous Manzil Revision',
          status: 'completed',
          progressPercentage: 100,
          completedLessons: 26,
          totalLessons: 26,
          juzOrSurah: 'Surah Al-Baqarah & Ali Imran (Juz 1–5)',
          rewardBadge: '🛡️',
          rewardTitle: 'Baqarah Shield Hafiza Badge',
          xpPoints: 1200,
          dateOrEta: 'Completed May 2026',
          teacherRemarks: 'Passed Quarter 1 & Quarter 2 comprehensive oral reviews with high distinction.',
          topicsCovered: ['Surah Al-Baqarah Full (286 Ayahs)', 'Surah Ali Imran (200 Ayahs)', 'Manzil Daily Cycles']
        },
        {
          id: 'ms-m4',
          stageNumber: 4,
          title: 'Current Frontier: Juz 16 (Surah Maryam & Ta-Ha)',
          arabicTitle: 'المحطة الحالية: الجزء 16 سورة مريم',
          subtitle: 'Active Sabaq: Surah Maryam Ayahs 41–58 & Sabqi Revision',
          status: 'in-progress',
          progressPercentage: 78,
          completedLessons: 18,
          totalLessons: 22,
          juzOrSurah: 'Surah Maryam Ayahs 41–58 Active',
          rewardBadge: '⚡',
          rewardTitle: 'Maryam Melody Hafiza Badge',
          xpPoints: 950,
          dateOrEta: 'Target: Next Week',
          teacherRemarks: 'Outstanding daily retention. 1 page memorized daily with beautiful Tartil.',
          topicsCovered: ['Surah Maryam Ayahs 1–98', 'Surah Ta-Ha Ayahs 1–60', 'Mutashabihat Distinction']
        },
        {
          id: 'ms-m5',
          stageNumber: 5,
          title: 'Nisf-ul-Quran (Half-Quran 15 Juz) Celebration',
          arabicTitle: 'احتفالية نصف القرآن الكريم 15 جزء',
          subtitle: 'Milestone Evaluation with Senior Qari & Family Certificate',
          status: 'upcoming',
          progressPercentage: 40,
          completedLessons: 0,
          totalLessons: 15,
          juzOrSurah: 'Juz 11 to Juz 15 Consolidation',
          rewardBadge: '🌙',
          rewardTitle: 'Nisf-ul-Quran Laureate Badge',
          xpPoints: 1500,
          dateOrEta: 'Target: Dec 2026',
          teacherRemarks: 'Academy ceremony with parents and official certificate of halfway completion.',
          topicsCovered: ['Full 15 Juz Revision Marathon', 'Continuous 1 Juz Recital Without Error']
        },
        {
          id: 'ms-m6',
          stageNumber: 6,
          title: 'Upper Manzil & Mutashabihat Mastery (Juz 17–28)',
          arabicTitle: 'إتقان المتشابهات والمنازل الكبرى',
          subtitle: 'Cross-Surah Ayah Similarities & High-Speed Taraweeh Recall',
          status: 'locked',
          progressPercentage: 0,
          completedLessons: 0,
          totalLessons: 25,
          juzOrSurah: 'Juz 17 – Juz 28',
          rewardBadge: '💎',
          rewardTitle: 'Mutashabihat Expert Badge',
          xpPoints: 1800,
          dateOrEta: 'Target: 2027',
          teacherRemarks: 'Eliminating hesitation in similar verses across the Quran.',
          topicsCovered: ['Cross-Surah Ayah Similarities', 'Rapid Recall in Taraweeh Style']
        },
        {
          id: 'ms-m7',
          stageNumber: 7,
          title: 'Complete Khatam-ul-Quran & Ijazah with Golden Crown',
          arabicTitle: 'ختم القرآن والإجازة بالسند المتصل',
          subtitle: 'Full 30 Juz Memorization from Memory & Al-Azhar Sanad Chain',
          status: 'locked',
          progressPercentage: 0,
          completedLessons: 0,
          totalLessons: 30,
          juzOrSurah: 'All 30 Juz Complete Hifz',
          rewardBadge: '👑',
          rewardTitle: 'Taj-ul-Waqar Complete Hafiza',
          xpPoints: 3000,
          dateOrEta: 'Graduation Ceremony',
          teacherRemarks: 'Ijazah sanad connected to the Prophet Muhammad ﷺ.',
          topicsCovered: ['Complete Recitation from Memory', 'Formal Ijazah Assembly', 'Taj-ul-Waqar Presentation']
        }
      ]
    },
    schedules: [
      {
        id: 'sch-m1',
        day: 'Tomorrow',
        date: 'Tuesday, Sep 22, 2026',
        time: '05:30 PM – 06:15 PM',
        duration: '45 min',
        teacherName: 'Ustadha Fatima Zahra',
        courseName: 'Hifz-ul-Quran Memorization',
        status: 'upcoming',
        focusTopic: 'Hearing Sabaq: Surah Maryam Ayahs 41-55 + Sabqi hearing',
        meetingRoomUrl: 'https://meet.google.com/nuh-quran-class'
      }
    ],
    homework: [
      {
        id: 'hw-m1',
        title: 'Recite New Sabaq 15 Times Before Tomorrow Morning',
        surahOrTopic: 'Surah Maryam',
        ayahRange: 'Ayah 41 to 55',
        assignedDate: 'Sep 21, 2026',
        dueDate: 'Sep 22, 2026',
        status: 'pending',
        priority: 'high',
        description: 'Read the page with looking (Nazra) 10 times with correct tajweed, then recite from memory 5 times without mistakes.'
      }
    ],
    recentClassLogs: [
      {
        id: 'log-m1',
        date: 'Sep 20, 2026',
        topic: 'Hearing Surah Maryam Ayahs 25-40',
        rating: 5,
        teacherNotes: 'MashaAllah zero mistakes in Sabaq. Clear melody and perfect Ghunnah.'
      }
    ]
  }
};

export function getStudentLearningJourney(profile: StudentProfile) {
  if (profile.learningJourney) {
    return profile.learningJourney;
  }
  // Default synthesized journey if custom profile lacks learningJourney
  return DEMO_STUDENT_PROFILES['NUH-8421'].learningJourney!;
}
