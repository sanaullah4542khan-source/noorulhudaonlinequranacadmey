/**
 * Noor Ul Huda Online Quran Academy
 * Complete Website Data & Configurations
 */

export const ACADEMY_INFO = {
  name: 'Noor Ul Huda Online Quran Academy',
  shortName: 'Noor Ul Huda Academy',
  phone: '+92 313 0958451',
  cleanPhone: '923130958451',
  email: 'noorulhudaacademy206@gmail.com',
  officialEmail: 'noorulhudaacademy206@gmail.com',
  secondaryEmail: 'sanaullah4542khan@gmail.com',
  address: 'Muree road barakhau, Islamabad',
  hours: 'Monday - Saturday: 9:00 AM - 8:00 PM',
  facebook: 'https://www.facebook.com/share/1DLyq2vj1q/',
  instagram: 'https://www.instagram.com/sanaullah45327?stkn=MWc1Z24xZWJmZzhp',
  linkedin: 'https://linkedin.com',
  whatsappNumber: '+92 313 0958451'
};

export const ACADEMY_BANK_DETAILS = {
  bankName: 'Meezan Bank',
  branch: 'MEEZAN DIGITAL CENTRE',
  branchCode: '0030',
  accountTitle: 'SANAULLAH',
  accountNumber: '00300114398034',
  iban: 'PK59MEZN0000300114398034',
  swiftCode: 'MEZNPKKA',
  raastId: '03130958451',
  easyPaisaTitle: 'SANAULLAH',
  easyPaisaNumber: '0313 0958451',
  jazzCashTitle: 'SANAULLAH',
  jazzCashNumber: '0313 0958451',
  city: 'Islamabad, Pakistan',
  whatsappReceiptNumber: '+92 313 0958451',
  cleanPhone: '923130958451'
};

// Aliases for compatibility with existing imports
export const SAFIR_CONTACT = ACADEMY_INFO;

export const getSafirWhatsAppUrl = (
  message = 'Assalamu Alaikum, I would like to inquire about Quran classes at Noor Ul Huda Online Quran Academy.'
): string => {
  return `https://wa.me/${ACADEMY_INFO.cleanPhone}?text=${encodeURIComponent(message)}`;
};

export interface StepItem {
  id: number;
  title: string;
  description: string;
  iconName: 'user' | 'clock' | 'book';
}

export const THREE_STEPS: StepItem[] = [
  {
    id: 1,
    title: 'Seamless Online Registration',
    description: 'Your registration process will be complete once you have provided us with these essential credentials.',
    iconName: 'user'
  },
  {
    id: 2,
    title: 'Schedule Time For Free Trial',
    description: 'Upon receiving your Quran learning request, we will promptly contact you to schedule a free trial class.',
    iconName: 'clock'
  },
  {
    id: 3,
    title: 'Embark On Your Journey With Us',
    description: 'Initiate your learning process by logging in with the credentials we provide you and start taking your first class.',
    iconName: 'book'
  }
];

export interface SafirCourse {
  id: string;
  title: string;
  titleUr?: string;
  titleAr?: string;
  arabicTitle?: string;
  description: string;
  descriptionUr?: string;
  descriptionAr?: string;
  image: string;
  bullets: string[];
  bulletsUr?: string[];
  bulletsAr?: string[];
}

export const SAFIR_COURSES: SafirCourse[] = [
  {
    id: 'nazra-recitation',
    title: 'Quran Reading / Nazra Quran',
    titleUr: 'ناظرہ قرآن و قراءت',
    titleAr: 'ناظرة وقراءة القرآن الكريم',
    arabicTitle: 'ناظِرَة القُرْآن الكريم',
    description: 'Learn to recite the Holy Quran with correct pronunciation, fluency, and proper articulation. Ideal for kids and adult beginners embarking on their Quran journey.',
    descriptionUr: 'قرآن مجید کو درست مخارج اور روانی کے ساتھ تلاوت کرنا سیکھیں۔ بچوں اور ابتدائی طلباء کے لیے بہترین بنیاد۔',
    descriptionAr: 'تعلم تلاوة القرآن الكريم برسم المصحف مع النطق الصحيح ومخارج الحروف والطلاقة التامة. مناسب للأطفال والمبتدئين الراغبين في بدء رحلتهم مع كتاب الله.',
    image: '/boy-reading-quran.jpg',
    bullets: [
      'Noorani Qaida & Arabic Alphabet Mastery',
      'Letter Recognition & Joining Rules',
      'Smooth Recitation from Surah Al-Fatihah',
      'Daily 1-on-1 Personalized Guidance'
    ],
    bulletsUr: [
      'نورانی قاعدہ اور عربی حروف پر مکمل دسترس',
      'حروف کی شناخت اور جوڑنے کے اصول',
      'سورۃ الفاتحہ سے روانی کے ساتھ تلاوت کا آغاز',
      'روزانہ 1-on-1 انفرادی نگرانی و رہنمائی'
    ],
    bulletsAr: [
      'إتقان القاعدة النورانية وحروف الهجاء',
      'قواعد رسم وضبط الكلمات والحركات',
      'تلاوة متسلسلة تبدأ من سورة الفاتحة',
      'متابعة فردية يومية مع معلم مجاز'
    ]
  },
  {
    id: 'quran-tajweed',
    title: 'Quran with Tajweed',
    titleUr: 'قرآن مع تجوید و مخارج',
    titleAr: 'تلاوة القرآن بأحكام التجويد',
    arabicTitle: 'تِلَاوَة بِالتَّجْوِيد',
    description: 'Master the classical rules of Tajweed to recite the Holy Quran as it was revealed to Prophet Muhammad (PBUH) with precision, rhythm, and devotion.',
    descriptionUr: 'تجوید کے مستند قواعد کے مطابق قرآن پاک کی تلاوت میں مہارت حاصل کریں تاکہ تلاوت ویسے ہو جیسے نازل ہوئی۔',
    descriptionAr: 'إتقان أحكام التجويد النظرية والتطبيقية لتلاوة كتاب الله كما أُنزل على النبي محمد ﷺ بدقة وخشوع وإتقان تام.',
    image: '/tutor-teaching-student.jpg',
    bullets: [
      'Makharij (Points of Articulation)',
      'Rules of Noon Saakin, Meem Saakin & Madd',
      'Sifaat (Letter Characteristics & Echoes)',
      'Ijazah & Pronunciation Certification'
    ],
    bulletsUr: [
      'مخارج الحروف (حروف کی ادائے گی کے مقامات)',
      'نون ساکن، میم ساکن اور مد کے مکمل قواعد',
      'صفات لازمہ و عارضہ (قلقلہ، تفخیم و ترقیق)',
      'تجوید کی تصدیق اور سند کی تیاری'
    ],
    bulletsAr: [
      'مخارج الحروف وصفاتها والهمس والقلقلة',
      'أحكام النون الساكنة والتنوين والميم الساكنة والمدود',
      'مراتب التفخيم والترقيق والوقف والابتداء',
      'شهادة إتقان وتأهيل للإجازة بالسند'
    ]
  },
  {
    id: 'hifz-ul-quran',
    title: 'Hifz-ul-Quran',
    titleUr: 'حفظ القرآن الکریم',
    titleAr: 'برنامج حفظ القرآن الكريم (تحفيظ)',
    arabicTitle: 'حِفْظُ القُرْآن الكريم',
    description: 'Specialized Quran memorization program led by qualified Huffaz. Features structured daily Sabaq (new verses), Sabqi (recent revision), and Manzil (overall revision) with individual memorization retention techniques.',
    descriptionUr: 'مستند حفاظ کرام کی زیر نگرانی قرآن پاک کا منظم حفظ۔ روزانہ سبق، سبقی اور منزل کا بہترین شیڈول۔',
    descriptionAr: 'برنامج متخصص لحفظ كتاب الله كاملاً تحت إشراف نخبة من الحفاظ المجازين، بنظام محكم يجمع بين السبق (الحفظ الجديد) والسبقي (المراجعة القريبة) والمنزل (المراجعة العامة).',
    image: '/course-hifz.jpg',
    bullets: [
      'Customized Daily Memorization Target (Sabaq)',
      'Systematic Revision Strategy (Sabqi & Manzil)',
      'Dedicated Male & Female Certified Huffaz',
      'Spaced Repetition & Formal Hifz Sanad / Certification'
    ],
    bulletsUr: [
      'روزانہ حفظ کی انفرادی مقدار (سبق)',
      'منظم اور پختہ دہرائی (سبقی اور منزل)',
      'مرد و خواتین سند یافتہ اساتذہ',
      'حفظ کی تکمیل پر باضابطہ سند'
    ],
    bulletsAr: [
      'خطة حفظ يومية فردية مخصصة لكل طالب (سبق)',
      'استراتيجية مراجعة وتثبيت دورية (سبقي ومنزل)',
      'معلمون ومعلمات من الحفاظ المتقنين أصحاب الأسانيد',
      'شهادة حفظ معتمدة وتأهيل للسند المتصل'
    ]
  },
  {
    id: 'basic-islamic-studies',
    title: 'Basic Islamic Studies',
    titleUr: 'بنیادی اسلامی تعلیمات',
    titleAr: 'الدراسات والعلوم الإسلامية الأساسية',
    arabicTitle: 'الدِّرَاسَات الإِسْلامِيَّة الأَسَاسِيَّة',
    description: 'Essential Islamic foundational knowledge for every Muslim, covering the pillars of Islam and Iman, step-by-step Salah, and moral ethics.',
    descriptionUr: 'ہر مسلمان کے لیے ضروری اسلامی معلومات: ارکان اسلام و ایمان، نماز کا عملی طریقہ اور اخلاقیات۔',
    descriptionAr: 'المعارف الإسلامية الضرورية لكل مسلم ومسلمة، تشمل أركان الإسلام والإيمان، والعقيدة الصحيحة، وتعليم الصلاة والطهارة عملياً، والآداب والأخلاق النبوية.',
    image: '/course-islamic-studies.jpg',
    bullets: [
      'Pillars of Islam & Articles of Faith (Aqeedah)',
      'Step-by-step Practical Salah & Taharah (Wudu/Ghusl)',
      'Halal & Haram in Everyday Living',
      'Islamic Manners (Adab & Akhlaq)'
    ],
    bulletsUr: [
      'ارکانِ اسلام و عقائد (ایمانیات)',
      'وضو، غسل اور نماز کا مکمل عملی طریقہ',
      'روزمرہ زندگی میں حلال و حرام کے احکام',
      'اسلامی آداب اور نبوی اخلاق'
    ],
    bulletsAr: [
      'أركان الإسلام والإيمان والعقيدة الإسلامية الصافية',
      'تعليم الصلاة عملياً مع الطهارة (الوضوء والغسل)',
      'الحلال والحرام في المعاملات والحياة اليومية',
      'الآداب الإسلامية والأخلاق النبوية الشريفة'
    ]
  },
  {
    id: 'tafsir-quran',
    title: 'Tafsir Quran',
    titleUr: 'تفسیر قرآن مجید',
    titleAr: 'تفسير القرآن الكريم وفهم المعاني',
    arabicTitle: 'تَفْسِيرُ القُرْآنِ الكَرِيم',
    description: 'Deepen your relationship with Allah’s word through word-for-word translation, linguistic context, and thematic exegesis of chosen Surahs.',
    descriptionUr: 'اللہ تعالیٰ کے کلام کے ساتھ گہرا تعلق: لفظی ترجمہ، سیاق و سباق اور منتخب سورتوں کی مفصل تفسیر۔',
    descriptionAr: 'تدبر كلام الله عز وجل من خلال الترجمة كلمة بكلمة، والبيان اللغوي، وأسباب النزول، واستخلاص الدروس والعبر الحياتية لسور القرآن الكريم.',
    image: '/course-tafsir.jpg',
    bullets: [
      'Word-by-word Translation & Vocabulary',
      'Historical Context (Asbab al-Nuzul)',
      'Practical Lessons for Modern Life',
      'Taught by Alimiyyah Degree Holders'
    ],
    bulletsUr: [
      'لفظی و بامحاورہ ترجمہ اور قرآنی لغت',
      'اسباب النزول اور تاریخی پس منظر',
      'عصری زندگی کے لیے قرآنی رہنمائی',
      'فاضل درس نظامی اور مستند علماء کی تدریس'
    ],
    bulletsAr: [
      'ترجمة المفردات القرآنية والدلالات اللغوية',
      'أسباب النزول والسياق التاريخي للآيات',
      'توجيهات قرآنية وتطبيقات عملية للحياة المعاصرة',
      'تدريس من خريجي كليات أصول الدين والدراسات الإسلامية'
    ]
  },
  {
    id: 'arabic-courses',
    title: 'Arabic Courses',
    titleUr: 'عربی زبان کے کورسز',
    titleAr: 'دورات اللغة العربية وقواعدها',
    arabicTitle: 'دَوْرَات اللُّغَة العَرَبِيَّة',
    description: 'Master Arabic from scratch, from reading and writing script to classical Quranic grammar, morphology (Sarf), and conversational fluency.',
    descriptionUr: 'قرآنی عربی زبان کا مکمل کورس: ابتدائی حروف سے لے کر نحو، صرف اور عربی گفتگو تک۔',
    descriptionAr: 'تعلم لغة القرآن الكريم من البداية، بدءاً من القراءة والكتابة والمحادثة وحتى قواعد النحو والصرف وفهم النصوص القرآنية.',
    image: '/course-stories.jpg',
    bullets: [
      'Classical & Modern Standard Arabic',
      'Quranic Arabic Vocabulary & Syntax',
      'Grammar Fundamentals (Nahw & Sarf)',
      'Conversational Dialogue & Comprehension'
    ],
    bulletsUr: [
      'فصیح اور قرآنی عربی زبان کی تعلیم',
      'قرآنی ذخیرہ الفاظ اور جملہ سازی',
      'بنیادی قواعد: نحو اور صرف',
      'عربی فہم اور روزمرہ گفتگو'
    ],
    bulletsAr: [
      'اللغة العربية الفصحى المعاصرة ولغة القرآن',
      'المفردات القرآنية وأساليب التعبير البلاغي',
      'أساسيات قواعد النحو والصرف وتراكيب الجمل',
      'مهارات المحادثة والاستماع والفهم المباشر'
    ]
  },
  {
    id: 'masnoon-duas',
    title: 'Masnoon Duas',
    titleUr: 'مسنون دعائیں اور اذکار',
    titleAr: 'الأدعية المأثورة والأذكار النبوية',
    arabicTitle: 'الأَدْعِيَة المَأْثُورَة وَالأَذْكَار',
    description: 'Learn and memorize daily authentic supplications, morning and evening Adhkar from Hisn-ul-Muslim (Fortress of the Muslim), prayers for spiritual protection, and proper etiquettes of Dua.',
    descriptionUr: 'روزمرہ کی مستند مسنون دعائیں، صبح و شام کے اذکار اور حفاظت کی دعائیں یاد کریں۔',
    descriptionAr: 'حفظ وفهم الأدعية النبوية اليومية وأذكار الصباح والمساء من حصن المسلم، وأدعية الحفظ والتحصين وقضاء الحوائج مع بيان فضلها.',
    image: '/man-praying-dua.jpg',
    bullets: [
      'Daily Essential Duas (Waking, Sleeping, Eating, Travel)',
      'Morning & Evening Adhkar (Hisn-ul-Muslim)',
      'Duas for Protection, Health, Ease & Anxiety Relief',
      'Accurate Arabic Pronunciation, Meanings & Virtues'
    ],
    bulletsUr: [
      'روزمرہ کی ضروری دعائیں (جاگنے، سونے، کھانے اور سفر کی)',
      'حصن المسلم سے صبح و شام کے مستند اذکار',
      'پریشانیوں سے نجات، شفا اور روحانی حفاظت کی دعائیں',
      'درست اعراب کے ساتھ تلفظ، معانی اور فضائل'
    ],
    bulletsAr: [
      'أدعية اليوم والليلة (الاستيقاظ، النوم، الطعام، السفر)',
      'أذكار الصباح والمساء الصحيحة (حصن المسلم)',
      'أدعية الحفظ والشفاء وتفريج الكروب والسكينة',
      'النطق الصحيح بالتشكيل، وفهم المعاني والفضائل'
    ]
  }
];

export interface StatItem {
  number: string;
  label: string;
  highlight?: boolean;
  image?: string;
  description?: string;
}

export const WHY_CHOOSE_STATS: StatItem[] = [
  {
    number: '30+',
    label: 'COURSES',
    image: '/stat-30-courses.jpg',
    description: 'Specialized curricula from Qaida to Advanced Tajweed & Hifz'
  },
  {
    number: '6+',
    label: 'YEARS OF EXPERIENCE',
    image: '/stat-years-experience.jpg',
    description: 'Consistent daily routines and proven student excellence'
  },
  {
    number: '200+',
    label: 'QUALIFIED TUTORS',
    image: '/stat-qualified-tutors.jpg',
    description: 'Certified, dedicated 1-on-1 male & female instructors'
  },
  {
    number: 'All Over',
    label: 'THE WORLD',
    highlight: true,
    description: 'Empowering students across USA, UK, Canada, Australia & beyond'
  }
];

export interface FeatureCardItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'heart-hands' | 'book' | 'quran' | 'mic' | 'star';
}

export const WHY_CHOOSE_FEATURES: FeatureCardItem[] = [
  {
    id: 'free-trial',
    title: 'Free Trial',
    subtitle: 'Start your journey risk-free',
    iconName: 'heart-hands'
  },
  {
    id: 'qaida',
    title: 'Qaida',
    subtitle: 'Build strong foundations',
    iconName: 'book'
  },
  {
    id: 'quran-reading',
    title: 'Quran Reading',
    subtitle: 'Read fluently with confidence',
    iconName: 'quran'
  },
  {
    id: 'tajweed',
    title: 'Tajweed',
    subtitle: 'Perfect your pronunciation',
    iconName: 'mic'
  },
  {
    id: 'hifz',
    title: 'Hifz',
    subtitle: 'Achieve mastery & memorization',
    iconName: 'star'
  }
];

export interface TeacherProfile {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const TEACHERS_LIST: TeacherProfile[] = [
  {
    id: 'sheikh-salman',
    name: 'Sheikh Salman Qasmi',
    role: 'Quran Recitation Specialist',
    bio: 'With over 15 years of dedicated experience in teaching Tajweed and Quranic recitation, Qari salman has guided countless students in perfecting their recitation with precision, clarity, and devotion.',
    image: '/teacher-sheikh-yaser.jpg'
  },
  {
    id: 'qari-safeer',
    name: 'Qari Safeer',
    role: 'Hifz Program Director',
    bio: 'Qari Safeer has memorized the entire Quran and has successfully guided hundreds of students through the Hifz program. With his extensive knowledge, teaching expertise, and commitment to excellence, he continues to inspire students on their journey of Quran memorization.',
    image: '/teacher-jihad-muhammad.jpg'
  },
  {
    id: 'qari-abdul-samad',
    name: 'Qari Abdul Samad Khan',
    role: 'Islamic Studies Scholar',
    bio: 'Qari Abdul Samad Khan is a distinguished scholar of Islamic Studies, specializing in Fiqh and Islamic history. With years of dedicated teaching and research, he has contributed greatly to spreading authentic knowledge and guiding students in their academic and spiritual journey.',
    image: '/student-library-night.jpg'
  }
];

export interface LearningPlan {
  id: string;
  name: string;
  originalPrice: number;
  price: number;
  discountPercentage: number;
  tagline: string;
  popular?: boolean;
  features: {
    included: boolean;
    text: string;
  }[];
}

export const LEARNING_PLANS: LearningPlan[] = [
  {
    id: 'standard-plan',
    name: 'Standard Plan',
    originalPrice: 89,
    price: 59,
    discountPercentage: 34,
    tagline: 'Our most popular choice',
    popular: true,
    features: [
      { included: true, text: '3 classes per week (45 mins each)' },
      { included: true, text: 'Comprehensive Tajweed rules' },
      { included: true, text: 'Quran reading & memorization' },
      { included: true, text: 'Weekly progress reports' },
      { included: true, text: 'Access to learning materials' },
      { included: true, text: 'Priority email & chat support' },
      { included: true, text: 'Monthly evaluations' },
      { included: true, text: 'Certificate of completion' },
      { included: false, text: 'Ijazah preparation' }
    ]
  },
  {
    id: 'basic-plan',
    name: 'Basic Plan',
    originalPrice: 59,
    price: 40,
    discountPercentage: 32,
    tagline: 'Perfect for beginners',
    popular: false,
    features: [
      { included: true, text: '2 classes per week (30 mins each)' },
      { included: true, text: 'Basic Tajweed rules' },
      { included: true, text: 'Quran reading fundamentals' },
      { included: true, text: 'Weekly progress reports' },
      { included: true, text: 'Access to learning materials' },
      { included: true, text: 'Email support' },
      { included: false, text: 'Advanced Tajweed' },
      { included: false, text: 'Monthly evaluations' },
      { included: false, text: 'Certificate of completion' }
    ]
  },
  {
    id: 'premium-plan',
    name: 'Premium Plan',
    originalPrice: 129,
    price: 85,
    discountPercentage: 34,
    tagline: 'For serious learners',
    popular: false,
    features: [
      { included: true, text: '5 classes per week (60 mins each)' },
      { included: true, text: 'Advanced Tajweed mastery' },
      { included: true, text: 'Hifz (Memorization) program' },
      { included: true, text: 'Daily progress tracking' },
      { included: true, text: 'Premium learning materials' },
      { included: true, text: '24/7 priority support' },
      { included: true, text: 'Weekly evaluations' },
      { included: true, text: 'Certificate of completion' },
      { included: true, text: 'Ijazah preparation' }
    ]
  }
];

export const SAVINGS_BREAKDOWN = [
  {
    title: 'Monthly Savings',
    amount: '$10-30',
    description: 'Compared to regular pricing'
  },
  {
    title: 'Annual Savings',
    amount: '$120-360',
    description: 'When you commit for a year'
  },
  {
    title: 'Family Discount',
    amount: '15% OFF',
    description: 'For additional family members'
  }
];

export const ABOUT_MISSION = `Noor Ul Huda Online Quran Academy was established with a clear vision: to make authentic Islamic education accessible to everyone, regardless of their location or background. Our name, which signifies "Light of Guidance," reflects our commitment to representing and spreading the teachings of the Holy Quran with integrity, wisdom, and compassion.

We believe that Islamic education should be comprehensive, covering not just recitation but also understanding, implementation, and appreciation of the Quran's teachings. Our curriculum is carefully designed to cater to different learning levels - from complete beginners to advanced students seeking deeper knowledge.`;

export const ABOUT_VISION = `At Noor Ul Huda Online Quran Academy, we understand that each student is unique, with different learning styles, goals, and schedules. That's why we offer flexible learning options, including one-on-one sessions, small group classes, and self-paced online courses. Our student-centered approach ensures that everyone receives the attention and guidance they need to succeed in their Islamic studies journey.

Our commitment extends beyond just teaching the Quran. We aim to develop well-rounded Muslims who understand their faith, practice its teachings, and contribute positively to their communities. Through our holistic approach to education, we strive to nurture individuals who embody Islamic values in their daily lives.`;

export const ABOUT_PILLARS = [
  {
    title: 'Our History',
    iconName: 'book',
    text: 'For over a decade, we have been dedicated to providing high-quality Islamic education through both traditional and modern teaching methods. Our institution brings together qualified teachers who are not only knowledgeable in their fields but also passionate about nurturing the spiritual and intellectual growth of their students.'
  },
  {
    title: 'Our Approach',
    iconName: 'graduation-cap',
    text: 'We believe in a student-centered approach that adapts to individual learning needs. Our flexible programs accommodate different schedules and learning preferences, ensuring that every student can thrive in their Quranic studies.'
  },
  {
    title: 'Our Commitment',
    iconName: 'globe',
    text: 'We are committed to making authentic Islamic education accessible globally. Through our online platform, we reach students from diverse backgrounds, helping them connect with the Quran regardless of their location.'
  }
];

export const TESTIMONIALS_LIST = [
  {
    id: 1,
    quote: "I've been studying with Noor Ul Huda Online Quran Academy for over a year now, and the progress I've made in my Quran recitation is remarkable. My teacher is patient, knowledgeable, and truly cares about my development.",
    author: 'Mohammed Ali',
    role: 'Online Quran & Tajweed Student',
    image: '/student-holding-quran.jpg'
  },
  {
    id: 2,
    quote: 'Finding teachers who could keep my young son engaged while teaching proper Makharij was tough until we joined Noor Ul Huda Online Quran Academy. His teacher is patient, encouraging, and gives undivided attention.',
    author: 'Young Hasan (Parent: Fatima Al-Zahra)',
    role: 'Nazra & Qaida Student (UK)',
    image: '/student-reading-rehal.jpg'
  },
  {
    id: 3,
    quote: 'My child looks forward to every single Quran lesson. Pointing at the words, sounding out the letters, and memorizing Surahs with his dedicated Qari has made his progress so joyful.',
    author: 'Young Rayan & Family',
    role: 'Hifz & Tajweed Student (USA)',
    image: '/student-pointing-quran.jpg'
  }
];
