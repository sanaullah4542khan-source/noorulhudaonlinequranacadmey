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
