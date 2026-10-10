import { Course } from '../types';

/**
 * Noor Ul Huda Online Quran Academy
 * Configurable WhatsApp Contact Number
 */
export const ACADEMY_WHATSAPP_NUMBER = '+923130958451';

/**
 * Generate course-specific WhatsApp inquiry link
 */
export const getCourseWhatsAppUrl = (courseTitle: string, customNumber = ACADEMY_WHATSAPP_NUMBER): string => {
  const cleanNumber = customNumber.replace(/[^0-9]/g, '');
  const message = `Assalamu Alaikum, I am interested in the ${courseTitle} course at Noor Ul Huda Online Quran Academy.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * 10 Comprehensive Academic Courses with Colorful Theming, Arabic Calligraphy, & Structured Pathways
 */
export const COURSES_DATA: Course[] = [
  // 1. Nazra Quran
  {
    id: 'nazra-quran',
    courseSlug: 'nazra-quran',
    title: 'Nazra Quran',
    arabicTitle: 'ناظِرَة القُرْآن الكريم',
    category: 'quran',
    badge: 'Foundational Recitation',
    illustrationSlug: 'nazra',
    studentCategory: 'Kids 5–12 & Adults',
    duration: '3–6 months, flexible',
    timing: 'Classes available 24/7 across time zones',
    teacherInfo: 'Taught by certified male & female Qaris/Qariras',
    feeInfo: 'Starting from $36/month — flexible packages available',
    colorTheme: {
      accent: '#059669',
      gradient: 'from-[#064e3b] via-[#096b52] to-[#043327]',
      badgeBg: 'bg-emerald-500/15 border-emerald-500/30',
      badgeText: 'text-emerald-700',
      pillBg: 'bg-emerald-50 border-emerald-200',
      pillText: 'text-emerald-800',
      glowClass: 'card-glow-emerald',
      borderAccent: 'hover:border-emerald-500/50',
      btnGradient: 'from-emerald-600 via-emerald-700 to-emerald-800',
      popularTag: 'Most Popular'
    },
    summary: 'Master fluent reading of the Holy Quran directly from the Arabic text with correct pronunciation, letter recognition, and complete confidence from scratch.',
    description: 'Designed for beginners and those looking to eliminate hesitations in their recitation. Starting from Noorani Qaida phonetics through joined letters, harakat, sukoon, and progressing into full Quranic text reading at a steady, rhythmic pace with individualized teacher feedback.',
    learningPoints: [
      'Master individual Arabic letters and precise articulation points (Makharij)',
      'Accurately recognize joint letter forms, vowels (Harakat), Sukoon, and Tanween',
      'Eliminate hesitation and stuttering when reading full Quranic sentences',
      'Progress smoothly through Juz Amma into reading any Surah in the Holy Quran independently'
    ],
    keyTopics: [
      'Arabic alphabet recognition & articulation points (Makharij al-Huroof)',
      'Joining letters, short vowels (Fatha, Kasra, Damma) and long vowels (Madd)',
      'Rules of Sukoon (Jazm), Tanween (Nunation), and Shaddah (Tashdeed)',
      'Guided eye-tracking and syllable pacing across short and long Ayahs',
      'Daily verbal repetition and stamina building with a dedicated mentor'
    ],
    learningOutcomes: [
      'Read any Surah of the Holy Quran independently with smooth phonetic flow',
      'Eliminate common stumbling, letter confusion, and mispronunciations',
      'Build sustained recitation stamina and a loving spiritual connection with Allah’s Book'
    ],
    weeklyFormat: '2 to 5 one-on-one sessions per week (30 or 45 mins)',
    whoThisCourseIsFor: [
      'Children aged 5+ starting their first Quran reading journey',
      'Adults who never learned Arabic or want to fix reading hesitations',
      'Anyone needing a patient, step-by-step foundation from Noorani Qaida to full Mushaf'
    ],
    learningPathway: [
      {
        stage: 'Stage 1: Alphabet & Phonetics',
        title: 'Letter Isolation & Sound Recognition',
        description: 'Complete familiarity with all 29 Arabic letters, throat and tongue articulation points, and vowel symbols.'
      },
      {
        stage: 'Stage 2: Compound Letters & Syllables',
        title: 'Joining Forms & Rhythmic Phonics',
        description: 'Reading two- and three-letter words, long vowels (Madd), and silent letter rules.'
      },
      {
        stage: 'Stage 3: Juz Amma Recitation',
        title: 'Short Surahs with Word-by-Word Coaching',
        description: 'Reading Surah An-Nas to Surah An-Naba with direct teacher correction and sentence rhythm.'
      },
      {
        stage: 'Stage 4: Complete Mushaf Fluency',
        title: 'Independent Quran Reading',
        description: 'Reciting longer Surahs (Surah Al-Baqarah, Surah Yasin) with natural flow, poise, and confidence.'
      }
    ]
  },

  // 2. Quran with Tajweed
  {
    id: 'quran-with-tajweed',
    courseSlug: 'quran-with-tajweed',
    title: 'Quran with Tajweed',
    arabicTitle: 'القُرْآن الكريم بِالتَّجْوِيد',
    category: 'quran',
    badge: 'Melodious & Exact Rules',
    illustrationSlug: 'tajweed',
    studentCategory: 'Kids, Teens & Adults',
    duration: '6–12 months, flexible',
    timing: 'Classes available 24/7 across time zones',
    teacherInfo: 'Taught by Ijazah-certified male & female Qaris',
    feeInfo: 'Starting from $36/month — flexible packages available',
    colorTheme: {
      accent: '#2563eb',
      gradient: 'from-[#1e3a8a] via-[#1e40af] to-[#0f172a]',
      badgeBg: 'bg-blue-500/15 border-blue-500/30',
      badgeText: 'text-blue-700',
      pillBg: 'bg-blue-50 border-blue-200',
      pillText: 'text-blue-800',
      glowClass: 'card-glow-blue',
      borderAccent: 'hover:border-blue-500/50',
      btnGradient: 'from-blue-600 via-indigo-700 to-blue-800',
      popularTag: 'Essential Mastery'
    },
    summary: 'Perfect your recitation according to the authentic rules of Tajweed preserved from the Prophet Muhammad (ﷺ). Elevate your pronunciation and beautify your tone.',
    description: 'A deep dive into classical Tajweed principles. Students master precise oral articulation points (Makharij), letter characteristics (Sifat), rules of Nun/Meem Sakinah, Madd prolongations, and stopping rules (Waqf) with live acoustic feedback.',
    learningPoints: [
      'Master the 17 throat, tongue, and lip articulation points (Makharij)',
      'Apply exact rules of Nun Sakinah and Tanween (Izhar, Idgham, Iqlab, Ikhfa)',
      'Control various durations of Madd (2, 4, 5, and 6 Harakat) with precision',
      'Recite with beautiful Tarteel rhythm, proper stopping (Waqf), and breath control'
    ],
    keyTopics: [
      'The 17 physical articulation points of the vocal tract (Makharij al-Huroof)',
      'Intrinsic and conditional letter qualities (Sifat Lazimah & Aridah)',
      'Rules of Nun Sakinah, Tanween, Meem Sakinah, and Ghunnah',
      'Types of elongation (Madd Asli, Munfasil, Muttasil, Lazim)',
      'Stopping, pausing, and restarting rules (Ahkam al-Waqf wal-Ibtida)'
    ],
    learningOutcomes: [
      'Eliminate subtle errors (Lahn Khafi) and major pronunciation faults (Lahn Jali)',
      'Recite the Quran with the authentic melodious cadence of the blessed Sahabah',
      'Identify Tajweed symbols and rules automatically while looking at any Mushaf text'
    ],
    weeklyFormat: '2 to 5 one-on-one sessions per week (30 or 45 mins)',
    whoThisCourseIsFor: [
      'Intermediate readers who can read Arabic but want to perfect their pronunciation',
      'Anyone wanting to beautify their voice and recite according to classical Sunnah',
      'Students preparing for advanced Hifz or Ijazah certification'
    ],
    learningPathway: [
      {
        stage: 'Stage 1: Makharij Diagnostics',
        title: 'Vocal Organs & Phonetic Precision',
        description: 'Systematic diagnosis of throat, tongue, palate, and lip positions for each Arabic letter.'
      },
      {
        stage: 'Stage 2: Nun & Meem Rules',
        title: 'Nasalization & Merging Mechanics',
        description: 'Complete mastery of Izhar, Idgham, Iqlab, and Ikhfa across repetitive recitation drills.'
      },
      {
        stage: 'Stage 3: Prolongations (Madd)',
        title: 'Rhythmic Timings & Elongation Control',
        description: 'Understanding required, permissible, and connected Madd durations (2 to 6 counts).'
      },
      {
        stage: 'Stage 4: Melodious Tarteel',
        title: 'Fluent Artful Recitation',
        description: 'Integrating all rules in seamless recitation with proper pauses, starts, and tone control.'
      }
    ]
  },

  // 3. Hifz-ul-Quran
  {
    id: 'hifz-ul-quran',
    courseSlug: 'hifz-ul-quran',
    title: 'Hifz-ul-Quran',
    arabicTitle: 'حِفْظُ القُرْآن الكريم',
    category: 'quran',
    badge: 'Systematic Memorization',
    illustrationSlug: 'hifz',
    studentCategory: 'Dedicated Kids & Adults',
    duration: '1–3 years, self-paced',
    timing: 'Flexible slots morning, evening & weekends',
    teacherInfo: 'Taught by certified Huffaz with chain of transmission (Sanad)',
    feeInfo: 'Starting from $36/month — flexible packages available',
    colorTheme: {
      accent: '#7c3aed',
      gradient: 'from-[#4c1d95] via-[#5b21b6] to-[#2e1065]',
      badgeBg: 'bg-purple-500/15 border-purple-500/30',
      badgeText: 'text-purple-700',
      pillBg: 'bg-purple-50 border-purple-200',
      pillText: 'text-purple-800',
      glowClass: 'card-glow-purple',
      borderAccent: 'hover:border-purple-500/50',
      btnGradient: 'from-purple-600 via-purple-700 to-indigo-900',
      popularTag: 'Lifelong Honor'
    },
    summary: 'Embark on the blessed journey of memorizing the Holy Quran by heart with a proven, structured 3-tier revision methodology and compassionate guidance.',
    description: 'Our Hifz program employs the time-tested classical 3-step system: Sabaq (new daily lesson), Sabqi (recent revision), and Manzil (cumulative retention). Each student receives a personalized pace tailored to their cognitive capacity with daily accountability.',
    learningPoints: [
      'Master the 3-step memorization system: Sabaq, Sabqi, and Manzil',
      'Solidify long-term retention without forgetting previously memorized Surahs',
      'Overcome Mutashabihat (verses with similar phrasing) across different Surahs',
      'Cultivate mental discipline, elevated memory, and deep reverence for the Quran'
    ],
    keyTopics: [
      'Personalized daily Sabaq intake (quarter page, half page, or full page)',
      'Sub-recent revision (Sabqi) covering the current Juz and preceding chapters',
      'Permanent retention cycles (Manzil) rotating across all memorized portions',
      'Mutashabihat identification and navigational anchors across the Quran',
      'Spiritual etiquette (Adab), intention (Niyyah), and daily lifestyle habits of a Hafiz'
    ],
    learningOutcomes: [
      'Memorize selected Surahs, specific Juz (such as Juz Amma/Tabarak), or the full 30 Juz',
      'Recite memorized portions on demand during Salah or Tarawih without hesitation',
      'Earn the immense reward and dignity promised to the Huffaz of the Ummah'
    ],
    weeklyFormat: '3 to 5 intensive one-on-one sessions per week (45 or 60 mins)',
    whoThisCourseIsFor: [
      'Children and youth capable of fluent reading looking to memorize part or all of the Quran',
      'Adults committed to memorizing Surah Al-Kahf, Surah Al-Mulk, Surah Yasin, or full Juz',
      'Former Huffaz seeking structured Muraja’ah (revision) to regain lost portions'
    ],
    learningPathway: [
      {
        stage: 'Stage 1: Juz Amma & Foundation',
        title: 'Short Surahs & Memory Calibration',
        description: 'Memorizing the 30th Juz while training cognitive memory retention routines and Tajweed perfection.'
      },
      {
        stage: 'Stage 2: Juz Tabarak & Core Surahs',
        title: 'Expanding Memory Capacity',
        description: 'Memorizing the 29th Juz and prominent Surahs (Al-Kahf, Yasin, Ar-Rahman, Al-Waqiah).'
      },
      {
        stage: 'Stage 3: Consecutive Juz Intake',
        title: 'Systematic Continuous Memorization',
        description: 'Progressive progression through the Mushaf with daily Sabaq, Sabqi, and Manzil reviews.'
      },
      {
        stage: 'Stage 4: Complete Quran Revision (Dawrah)',
        title: 'Consolidation & Certification',
        description: 'Reciting entire quarters in single sittings to secure unshakeable retention and Sanad evaluation.'
      }
    ]
  },

  // 4. Basic Islamic Studies
  {
    id: 'basic-islamic-studies',
    courseSlug: 'basic-islamic-studies',
    title: 'Basic Islamic Studies',
    arabicTitle: 'الدِّرَاسَات الإِسْلامِيَّة',
    category: 'islamic',
    badge: 'Essential Knowledge (Fard Ayn)',
    illustrationSlug: 'islamic-studies',
    studentCategory: 'Children, Teens & Reverts',
    duration: '4–8 months, flexible',
    timing: 'Classes available 24/7 across time zones',
    teacherInfo: 'Taught by certified Islamic Studies graduates & scholars',
    feeInfo: 'Starting from $36/month — flexible packages available',
    colorTheme: {
      accent: '#0d9488',
      gradient: 'from-[#0f766e] via-[#115e59] to-[#042f2e]',
      badgeBg: 'bg-teal-500/15 border-teal-500/30',
      badgeText: 'text-teal-700',
      pillBg: 'bg-teal-50 border-teal-200',
      pillText: 'text-teal-800',
      glowClass: 'card-glow-teal',
      borderAccent: 'hover:border-teal-500/50',
      btnGradient: 'from-teal-600 via-teal-700 to-teal-800',
      popularTag: 'Best for Kids'
    },
    summary: 'Build a firm foundation of everyday Islamic knowledge: the 5 Pillars of Islam, 6 Articles of Faith, Wudu, practical Salah, Halal and Haram, and Islamic manners.',
    description: 'An essential curriculum that grounds students in core Islamic fundamentals. Designed to be interactive, practical, and age-appropriate, ensuring youth and adults understand not just how to practice Islam, but the spiritual wisdom behind every act of worship.',
    learningPoints: [
      'Understand the 5 Pillars of Islam and the 6 Articles of Faith (Aqeedah)',
      'Perform complete Wudu, Ghusl, and practical 5 daily Salah step-by-step with zero errors',
      'Memorize the Arabic Tashahhud, Durood Ibrahim, and prayers recited within Salah',
      'Understand daily Halal and Haram boundaries, modesty, honesty, and prophetic Akhlaq'
    ],
    keyTopics: [
      'Core Islamic Creed (Aqeedah): Tawheed, Angels, Books, Messengers, Day of Judgment, Qadar',
      'Purification (Taharah): Wudu rules, nullifiers, dry ablution (Tayammum)',
      'Practical Prayer (Salah): Times, conditions, physical postures, recitations',
      'Fasting (Sawm), Zakah principles, and pilgrimage (Hajj) essentials',
      'Islamic character, honoring parents, respecting elders, and good companionship'
    ],
    learningOutcomes: [
      'Pray 5 daily Salah independently and accurately with full confidence in recitations',
      'Possess a clear, coherent Islamic worldview grounded in authentic Sunni scholarship',
      'Instill pride, confidence, and love in the student’s Muslim identity in modern environments'
    ],
    weeklyFormat: '2 to 3 one-on-one sessions per week (30 or 45 mins)',
    whoThisCourseIsFor: [
      'Young Muslim children (ages 6–14) needing foundational Islamic upbringing',
      'Teenagers seeking sound clarity on Aqeedah, ethics, and modern life questions',
      'Adults or new Muslims wanting to verify their fundamental religious obligations (Fard Ayn)'
    ],
    learningPathway: [
      {
        stage: 'Stage 1: Aqeedah & The Pillars',
        title: 'Who is Allah? Core Beliefs & Creed',
        description: 'Tawheed, the 6 Articles of Faith, and understanding our divine purpose on earth.'
      },
      {
        stage: 'Stage 2: Taharah & Salah Mechanics',
        title: 'Purification & The Daily Conversation with Allah',
        description: 'Step-by-step physical demonstration of Wudu and each Rak’ah of Salah with meanings.'
      },
      {
        stage: 'Stage 3: Sawm, Zakah & Daily Ethics',
        title: 'Living Islam in Society',
        description: 'Ramadan etiquette, generosity, honesty, Halal eating, and protecting the tongue.'
      },
      {
        stage: 'Stage 4: Prophetic Akhlaq & Family',
        title: 'Manners of the Believer',
        description: 'Honoring parents, neighbor rights, maintaining good character, and resisting peer pressure.'
      }
    ]
  },

  // 5. Tafsir-e-Quran
  {
    id: 'tafsir-e-quran',
    courseSlug: 'tafsir-e-quran',
    title: 'Tafsir-e-Quran',
    arabicTitle: 'تَفْسِير القُرْآن العَظِيم',
    category: 'quran',
    badge: 'Context & Meaning',
    illustrationSlug: 'tafsir',
    studentCategory: 'Teens & Adults',
    duration: '6–18 months, modular',
    timing: 'Classes available 24/7 across time zones',
    teacherInfo: 'Taught by qualified Alim / Alimah scholars with Tafsir credentials',
    feeInfo: 'Starting from $36/month — flexible packages available',
    colorTheme: {
      accent: '#be123c',
      gradient: 'from-[#881337] via-[#9f1239] to-[#4c0519]',
      badgeBg: 'bg-rose-500/15 border-rose-500/30',
      badgeText: 'text-rose-700',
      pillBg: 'bg-rose-50 border-rose-200',
      pillText: 'text-rose-800',
      glowClass: 'card-glow-rose',
      borderAccent: 'hover:border-rose-500/50',
      btnGradient: 'from-rose-600 via-rose-700 to-rose-900',
      popularTag: 'Deep Wisdom'
    },
    summary: 'Unlock the profound meanings, historical context, and spiritual wisdom of the Quran. Move beyond recitation to heartfelt comprehension of Allah’s message.',
    description: 'Transform your relationship with the Holy Quran. Drawing from classical exegeses (Ibn Kathir, Al-Qurtubi, Al-Jalalayn, As-Sa’di) alongside modern pedagogical approaches, students study why verses were revealed (Asbab an-Nuzul) and how to apply their guidance in today’s world.',
    learningPoints: [
      'Understand the historical occasions of revelation (Asbab an-Nuzul)',
      'Analyze linguistic nuances, parables, and thematic structures across Surahs',
      'Synthesize classical scholarly interpretations with practical modern lifestyle lessons',
      'Experience deep spiritual presence (Khushu) during Quranic recitation in daily prayers'
    ],
    keyTopics: [
      'Thematic overview of selected Surahs (Surah Al-Fatihah, Juz Amma, Surah Al-Baqarah, Yusuf, Al-Kahf)',
      'Historical context of Meccan versus Medinan revelations',
      'Prophetic parables, metaphors, and rhetorical eloquence (Balaghah) in the Quran',
      'Islamic jurisprudence (Ahkam) derived directly from key Quranic passages',
      'Contemporary reflections and ethical applications for Muslim families today'
    ],
    learningOutcomes: [
      'Understand what the Imam is reciting in prayer without relying constantly on translations',
      'Appreciate the cohesive miracles and interconnected themes of Quranic chapters',
      'Derive daily solace, spiritual energy, and clear moral compass from Allah’s speech'
    ],
    weeklyFormat: '2 to 4 one-on-one sessions per week (45 mins)',
    whoThisCourseIsFor: [
      'Reciters who want to understand the words they read every day',
      'Parents seeking to explain Quranic values and stories accurately to their children',
      'Seekers of spiritual depth looking to invigorate their prayers and inner peace'
    ],
    learningPathway: [
      {
        stage: 'Stage 1: Surah Al-Fatihah & Juz Amma',
        title: 'The Great Openers & The Day of Judgment',
        description: 'Verse-by-verse exploration of the Surahs recited most often in our five daily prayers.'
      },
      {
        stage: 'Stage 2: Stories of the Prophets (Yusuf, Maryam)',
        title: 'Human Drama, Patience & Divine Wisdom',
        description: 'Studying the most beautiful narratives and their profound psychological and moral insights.'
      },
      {
        stage: 'Stage 3: Surah Al-Kahf & End-Time Guidance',
        title: 'The 4 Trials & Spiritual Protection',
        description: 'Analyzing the Cave, the Two Gardens, Musa and Khidr, and Dhul-Qarnayn.'
      },
      {
        stage: 'Stage 4: Major Medinan Surahs',
        title: 'Building Society & Islamic Law',
        description: 'Exploring Surah Al-Baqarah and Ali ‘Imran: communal ethics, family law, and spiritual steadfastness.'
      }
    ]
  },

  // 6. Quranic Arabic Courses
  {
    id: 'quranic-arabic',
    courseSlug: 'quranic-arabic',
    title: 'Quranic Arabic Courses',
    arabicTitle: 'اللُّغَة العَرَبِيَّة القُرْآنِيَّة',
    category: 'arabic',
    badge: 'Language & Grammar',
    illustrationSlug: 'arabic',
    studentCategory: 'Teens & Adults',
    duration: '6–12 months, comprehensive',
    timing: 'Classes available 24/7 across time zones',
    teacherInfo: 'Taught by native Arabic speakers and university-trained linguists',
    feeInfo: 'Starting from $36/month — flexible packages available',
    colorTheme: {
      accent: '#4338ca',
      gradient: 'from-[#3730a3] via-[#4338ca] to-[#1e1b4b]',
      badgeBg: 'bg-indigo-500/15 border-indigo-500/30',
      badgeText: 'text-indigo-700',
      pillBg: 'bg-indigo-50 border-indigo-200',
      pillText: 'text-indigo-800',
      glowClass: 'card-glow-indigo',
      borderAccent: 'hover:border-indigo-500/50',
      btnGradient: 'from-indigo-600 via-indigo-700 to-indigo-900',
      popularTag: 'Direct Comprehension'
    },
    summary: 'Decode the language of the Quran. Learn core grammar (Nahw), word morphology (Sarf), and high-frequency Quranic vocabulary to understand the text in its original beauty.',
    description: 'Tired of relying on English translations? This course uses a direct, high-frequency methodology focusing on the 85% most repeated Quranic words. Students acquire foundational grammar and root system mechanics to comprehend sentences as they are being read.',
    learningPoints: [
      'Master the 3-letter root word derivation system (Sarf) of the Arabic language',
      'Learn the top 500 words that make up over 80% of the entire Quranic vocabulary',
      'Understand core Arabic sentence structures (Nominal & Verbal sentences — Nahw)',
      'Translate short and medium Ayahs directly without looking at English translations'
    ],
    keyTopics: [
      'Arabic word classification: Ism (Noun), Fi’l (Verb), and Harf (Particle)',
      'The 3 grammatical states (Marfoo’, Mansoob, Majroor) and grammatical markers (I’rab)',
      'Verb tenses: Past (Madi), Present/Future (Mudari’), and Imperative (Amr)',
      'Pronouns, attached suffixes, possessive constructs (Idafah), and adjectives (Sifah)',
      'Live translation workshops breaking down verses from Surah Al-Baqarah and Juz Amma'
    ],
    learningOutcomes: [
      'Directly understand significant portions of the Quran during daily and Tarawih prayers',
      'Recognize grammatical patterns and root words effortlessly across different Surahs',
      'Unlock the deep linguistic elegance and rhetorical marvels of the Arabic language'
    ],
    weeklyFormat: '2 to 4 one-on-one sessions per week (45 mins)',
    whoThisCourseIsFor: [
      'Students who can read Arabic text but have zero comprehension of the vocabulary',
      'Dedicated learners wishing to bridge the gap between recitation and understanding',
      'University students or professionals seeking a systematic, non-intimidating Arabic track'
    ],
    learningPathway: [
      {
        stage: 'Stage 1: Roots & 80% Quranic Vocabulary',
        title: 'The High-Frequency Quranic Lexicon',
        description: 'Learning the most repeated nouns, prepositions, pronouns, and verbs in the Mushaf.'
      },
      {
        stage: 'Stage 2: Morphology (Sarf) & Verb Patterns',
        title: 'The 10 Classical Verb Forms',
        description: 'How a 3-letter root derives multiple shades of meaning across different verb templates.'
      },
      {
        stage: 'Stage 3: Grammar (Nahw) & Sentence Syntax',
        title: 'Sentence Architecture & Case Endings',
        description: 'Nominal and verbal sentence mechanics, Subject, Object, and prepositions.'
      },
      {
        stage: 'Stage 4: Direct Ayah Translation Lab',
        title: 'Independent Translation & Synthesis',
        description: 'Analyzing continuous passages from the Quran and parsing grammar in real time.'
      }
    ]
  },

  // 7. Masnoon Duas
  {
    id: 'masnoon-duas',
    courseSlug: 'masnoon-duas',
    title: 'Masnoon Duas',
    arabicTitle: 'الأَدْعِيَة المَأْثُورَة وَالأَذْكَار',
    category: 'islamic',
    badge: 'Daily Supplications & Adhkar',
    illustrationSlug: 'duas',
    studentCategory: 'Kids, Families & Adults',
    duration: '2–4 months, practical',
    timing: 'Classes available 24/7 across time zones',
    teacherInfo: 'Taught by compassionate male & female teachers',
    feeInfo: 'Starting from $36/month — flexible packages available',
    colorTheme: {
      accent: '#4f46e5',
      gradient: 'from-[#312e81] via-[#3730a3] to-[#1e1b4b]',
      badgeBg: 'bg-indigo-500/15 border-indigo-500/30',
      badgeText: 'text-indigo-700',
      pillBg: 'bg-indigo-50 border-indigo-200',
      pillText: 'text-indigo-800',
      glowClass: 'card-glow-indigo',
      borderAccent: 'hover:border-indigo-500/50',
      btnGradient: 'from-indigo-600 via-indigo-700 to-indigo-800',
      popularTag: 'Daily Protection'
    },
    summary: 'Equip yourself and your family with the spiritual fortress of authentic daily supplications (Hisn al-Muslim). Memorize, understand, and implement morning and evening remembrances.',
    description: 'Dua is the essence of worship. This practical course guides students to memorize the authentic daily supplications taught by the Prophet (ﷺ), correct their Arabic pronunciation, understand their profound meanings, and establish consistent morning and evening protection routines.',
    learningPoints: [
      'Memorize essential daily Duas: waking up, sleeping, eating, entering home/mosque, traveling',
      'Master the authentic Morning and Evening Adhkar (remembrances) for divine protection',
      'Understand the literal meanings and emotional significance behind each supplication',
      'Learn Ayat al-Kursi and the 3 Quls with correct Tajweed and spiritual reflection'
    ],
    keyTopics: [
      'The spiritual benefits and etiquette of making Dua (Adab ad-Dua)',
      'Daily routine supplications (bathroom, dressing, leaving house, vehicle, meals)',
      'Morning and evening fortresses against anxiety, depression, envy, and evil eye (Hasad)',
      'Duas for distress, sorrow, seeking forgiveness (Sayyid al-Istighfar), and gratitude',
      'Practicing remembrance (Dhikr) after the 5 daily prayers (Tasbeeh Fatimi)'
    ],
    learningOutcomes: [
      'Transform daily repetitive routines into continuous acts of rewarded worship',
      'Attain deep tranquility, protection, and emotional resilience through constant Dhikr',
      'Instill spontaneous prayer habits in children and family life'
    ],
    weeklyFormat: '2 to 3 one-on-one sessions per week (30 mins)',
    whoThisCourseIsFor: [
      'Children building their first memory bank of Islamic habits',
      'Adults dealing with life stress, anxiety, or seeking peace through divine remembrance',
      'Families desiring to revive the Sunnah of Duas inside their homes'
    ],
    learningPathway: [
      {
        stage: 'Stage 1: The Daily Routine Duas',
        title: 'Morning to Night Supplications',
        description: 'Waking up, entering/leaving the house, eating, drinking, traveling, and preparing for sleep.'
      },
      {
        stage: 'Stage 2: The Fortress of Morning & Evening',
        title: 'Morning & Evening Protective Adhkar',
        description: 'Ayat al-Kursi, Al-Mu’awwidhatayn, Sayyid al-Istighfar, and supplications for safety.'
      },
      {
        stage: 'Stage 3: Prayers in Times of Need',
        title: 'Duas for Anxiety, Illness & Forgiveness',
        description: 'Duas for healing (Ruqyah), Istikharah (seeking guidance), and asking for Jannatul Firdaus.'
      },
      {
        stage: 'Stage 4: Post-Salah Dhikr & Sustained Habit',
        title: 'Consistency & Spiritual Life',
        description: 'Establishing lifelong Dhikr habits after daily prayers and in idle moments.'
      }
    ]
  }
];
