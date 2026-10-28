/**
 * Noor Ul Huda Online Quran Academy - Contact & Brand Configuration
 */

export const SAFIR_CONTACT = {
  name: 'Noor Ul Huda Online Quran Academy',
  phone: '+92 313 0958451',
  cleanPhone: '923130958451',
  email: 'noorulhudaacademy206@gmail.com',
  secondaryEmail: 'sanaullah4542khan@gmail.com',
  whatsappNumber: '+92 313 0958451',
  cleanWhatsAppNumber: '923130958451',
  address: 'Noor Ul Huda Online Quran Academy, Global Academic Hub',
  facebook: 'https://facebook.com/noorulhudaacademy',
  instagram: 'https://instagram.com/noorulhudaacademy',
  linkedin: 'https://linkedin.com/company/noorulhudaacademy',
  whatsappReceiptNumber: '+92 313 0958451'
};

export const ABOUT_PILLARS = [
  {
    iconName: 'book',
    title: 'Our History',
    text: 'Founded with a pure intention to make authentic Quranic education accessible to Muslims worldwide with certified scholars.'
  },
  {
    iconName: 'graduation-cap',
    title: 'Our Approach',
    text: 'Personalized 1-on-1 live interactive sessions designed around each student’s unique pace, learning style, and schedule.'
  },
  {
    iconName: 'globe',
    title: 'Our Commitment',
    text: 'Dedicated to preserving Tajweed precision, fostering Islamic values, and providing unwavering mentorship for all ages.'
  }
];

export const TEACHERS_LIST = [
  {
    id: '1',
    name: 'Sheikh Salman Al-Azhari',
    role: 'Senior Tajweed & Qira’at Instructor',
    bio: 'Graduate of Al-Azhar University holding Ijazah in Hafs ‘an ‘Asim. Over 12 years of experience teaching students worldwide.',
    image: '/teacher-sheikh-yaser.jpg'
  },
  {
    id: '2',
    name: 'Qari Muhammad Safeer',
    role: 'Quran Memorization (Hifz) Specialist',
    bio: 'Certified Hafiz with Sanad. Expert in helping children and youth build strong retention cycles and beautiful Tartil recitation.',
    image: '/teacher-jihad-muhammad.jpg'
  },
  {
    id: '3',
    name: 'Ustadhah Fatima Zahra',
    role: 'Female Quran & Tajweed Mentor',
    bio: 'Dedicated scholar guiding sisters, children, and beginners with patience, empathy, and structured pronunciation exercises.',
    image: '/teacher-sheikh-yaser.jpg'
  }
];

export const getSafirWhatsAppUrl = (customMessage?: string): string => {
  const cleanNumber = SAFIR_CONTACT.cleanPhone;
  const message =
    customMessage ||
    'Assalamu Alaikum, I would like to inquire about online Quran classes and book a 3-day free trial with Noor Ul Huda Online Quran Academy.';
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};

export const THREE_STEPS = [
  {
    id: 1,
    title: 'Register & Book Free Trial',
    description: 'Fill in our short form or reach out directly via WhatsApp. Zero credit card needed.'
  },
  {
    id: 2,
    title: 'Attend 1-on-1 Evaluation Session',
    description: 'Meet your assigned qualified scholar who will assess your reading level and design a custom plan.'
  },
  {
    id: 3,
    title: 'Begin Regular Interactive Classes',
    description: 'Start regular sessions on your own preferred weekly schedule with complete teacher dedication.'
  }
];

export const WHY_CHOOSE_STATS = [
  { number: '12+', image: '/tutor-teaching-student.jpg', label: 'Courses', description: 'Comprehensive Quran & Islamic Tracks' },
  { number: '10+', image: '/student-reading-rehal.jpg', label: 'Experience', description: 'Over a Decade of Scholarly Teaching' },
  { number: '50+', image: '/teacher-sheikh-yaser.jpg', label: 'Tutors', description: 'Certified Male & Female Scholars' },
  { number: '25+', label: 'Global Students', description: 'Serving Muslims Across 25+ Countries' }
];

export const WHY_CHOOSE_FEATURES = [
  { id: '1', iconName: 'heart', title: 'Free Trial Classes', subtitle: 'Experience real 1-on-1 classes before committing.' },
  { id: '2', iconName: 'book-open', title: 'Noorani Qaida & Basics', subtitle: 'Strong phonetic foundation for young children and beginners.' },
  { id: '3', iconName: 'book-text', title: 'Nazra Quran Reading', subtitle: 'Fluent recitation with confidence and proper breathing pauses.' },
  { id: '4', iconName: 'mic', title: 'Tajweed Rules & Rules', subtitle: 'Phonetic perfection from certified scholars holding Ijazah.' },
  { id: '5', iconName: 'star', title: 'Hifz Memorization', subtitle: 'Structured retention, revisions, and daily Sabaq/Sabqi routines.' }
];

export interface SafirCourse {
  id: string;
  image: string;
  title: string;
  titleAr?: string;
  titleUr?: string;
  arabicTitle: string;
  badge: string;
  category: string;
  description: string;
  descriptionAr?: string;
  descriptionUr?: string;
  bullets?: string[];
  bulletsAr?: string[];
  bulletsUr?: string[];
  summary?: string;
  studentCategory?: string;
  duration?: string;
  lessons?: number;
  featured?: boolean;
}

export const SAFIR_COURSES: SafirCourse[] = [
  {
    id: 'nazra-recitation',
    image: 'courseNazra',
    title: 'Nazra Quran Reading',
    titleAr: 'تلاوة القرآن الكريم (نظرة)',
    titleUr: 'ناظرہ قرآن کریم',
    arabicTitle: 'القراءة والتلاوة الصحيحة',
    badge: 'Popular',
    category: 'quran',
    description: 'From Qaida to fluent reading, one teacher with one child — with correct pronunciation from the very first lesson, and a weekly WhatsApp report so you can follow exactly what your child learned.',
    descriptionAr: 'تعلم قراءة القرآن الكريم من مخارج الحروف الأساسية إلى التلاوة السليمة المتقنة.',
    descriptionUr: 'قاعدہ سے روانی سے پڑھنے تک، ایک استاد ایک بچے کے ساتھ — پہلے سبق سے درست تلفظ، اور ہفتہ وار واٹس ایپ رپورٹ سے آپ دیکھ سکیں گے کہ بچے نے کیا سیکھا۔',
    bullets: ['Complete Noorani Qaida phonetics', 'Letter connections & pronunciation', 'Fluent Tartil reading exercises'],
    bulletsAr: ['القاعدة النورانية ومخارج الحروف', 'اتصال الحروف والضبط الصوتي', 'تدريبات التلاوة والترتيل'],
    bulletsUr: ['نورانی قاعدہ کی مکمل مشق', 'حروف کی پہچان اور ملاپ', 'ترتیل کے ساتھ روانی سے تلاوت'],
    duration: '3-6 Months'
  },
  {
    id: 'quran-tajweed',
    image: 'courseTajweed',
    title: 'Tajweed Rules & Perfection',
    titleAr: 'أحكام التجويد والإتقان',
    titleUr: 'تجوید و حسن قرات',
    arabicTitle: 'أحكام التجويد والإتقان',
    badge: 'Certified',
    category: 'quran',
    description: 'Tajweed taught rule by rule, with patient correction in every 1-on-1 class — Makharij, Noon & Meem Sakinah and Madd — so your child\'s recitation improves visibly, and the weekly WhatsApp report shows you that progress.',
    descriptionAr: 'إتقان أحكام النون والميم الساكنة والمدود مع نخبة القراء والمشايخ المجازين.',
    descriptionUr: 'تجوید قاعدہ بہ قاعدہ، ہر ون آن ون کلاس میں صبر سے اصلاح کے ساتھ — مخارج، نون و میم ساکنہ اور مدود — تاکہ بچے کی تلاوت میں بہتری نظر آئے، اور ہفتہ وار واٹس ایپ رپورٹ آپ کو یہ پیشرفت دکھائے۔',
    bullets: ['17 Articulation points (Makharij)', 'Rules of Noon & Meem Sakinah', 'Madd cycles & stopping rules (Waqf)'],
    bulletsAr: ['مخارج الحروف السبعة عشر', 'أحكام النون والميم الساكنة', 'المدود وأحكام الوقف والابتداء'],
    bulletsUr: ['17 مخارج الحروف کی عملی مشق', 'نون و میم ساکنہ کے احکام', 'مدود اور وقف کے اصول'],
    duration: '6 Months'
  },
  {
    id: 'hifz-ul-quran',
    image: '/course-hifz.jpg',
    title: 'Quran Memorization (Hifz)',
    titleAr: 'تحفيظ القرآن الكريم',
    titleUr: 'حفظ القرآن الکریم',
    arabicTitle: 'تحفيظ القرآن الكريم',
    badge: 'Comprehensive',
    category: 'hifz',
    description: 'A steady Hifz plan built around your child: new Sabaq, Sabqi and Manzil revision every day, in a private 1-on-1 class — with a weekly WhatsApp report so you always know how much is memorised and how firmly it is retained.',
    descriptionAr: 'برنامج تحفيظ منهجي يشمل الحفظ الجديد والمراجعة القريبة والبعيدة مع التثبيت.',
    descriptionUr: 'بچے کے مطابق مستقل حفظ کا منصوبہ: روزانہ نیا سبق، سبقی اور منزل کی دہرائی، نجی ون آن ون کلاس میں — اور ہفتہ وار واٹس ایپ رپورٹ سے آپ کو ہمیشہ معلوم رہے کہ کتنا حفظ ہوا اور کتنا پکا ہے۔',
    bullets: ['Daily Sabaq retention', 'Sabqi near-cycle revision', 'Manzil long-term retention tracking'],
    bulletsAr: ['تسميع الحفظ الجديد يومياً', 'مراجعة الماضي القريب (سبقي)', 'مراجعة وتثبيت المحفوظ الدائم (منزل)'],
    bulletsUr: ['روزانہ نیا سبق یاد کرنا', 'قریبی دہرائی (سبقی)', 'پختہ یادداشت کے لیے منزل کا نظام'],
    duration: '1-3 Years'
  },
  {
    id: 'basic-islamic-studies',
    image: 'courseIslamic',
    title: 'Islamic Studies & Aqeedah',
    titleAr: 'الدراسات الإسلامية والعقيدة',
    titleUr: 'بنیادی دینی تعلیمات و عقائد',
    arabicTitle: 'الدراسات الإسلامية',
    badge: 'Foundational',
    category: 'islamic',
    description: 'The basics every Muslim child should know, taught gently and clearly — Taharah, Salah, Seerah, Hadith and Islamic manners — in a private 1-on-1 class at your family\'s time, with a weekly WhatsApp report on what was covered.',
    descriptionAr: 'دراسة مبادئ الإسلام، فقه الطهارة والصلاة، السيرة النبوية، والآداب والأخلاق الإسلامية.',
    descriptionUr: 'ہر مسلمان بچے کے لیے ضروری بنیادی دین، نرمی اور وضاحت سے — طہارت، نماز، سیرت، حدیث اور اسلامی اخلاق — خاندان کے وقت پر نجی ون آن ون کلاس میں، اور ہفتہ وار واٹس ایپ رپورٹ میں پڑھائے گئے اسباق کی تفصیل۔',
    bullets: ['Correct Salah & Taharah Fiqh', 'Authentic Islamic Creed (Aqeedah)', 'Prophetic manners & ethics (Adab)'],
    bulletsAr: ['فقه الصلاة والطهارة عملياً', 'العقيدة الإسلامية الصحيحة', 'الآداب والأخلاق النبوية الشريفة'],
    bulletsUr: ['نماز و طہارت کی عملی تربیت', 'درست اسلامی عقائد', 'سیرت نبوی اور اسلامی اخلاق'],
    duration: 'Flexible'
  },
  {
    id: 'daily-supplications-duas',
    image: 'courseDuas',
    title: 'Masnoon Duas & Daily Adhkar',
    titleAr: 'الأدعية المأثورة والأذكار اليومية',
    titleUr: 'مسنون دعائیں اور اذکار',
    arabicTitle: 'الأدعية المأثورة والأذكار',
    badge: 'Essential',
    category: 'duas',
    description: 'The duas of everyday life, learned with their meanings — morning and evening Adhkar and daily routines — so your child can use them, not just recite them, with progress shown in the weekly WhatsApp report.',
    descriptionAr: 'حفظ وفهم الأدعية النبوية اليومية وأذكار الصباح والمساء.',
    descriptionUr: 'روزمرہ زندگی کی دعائیں، ان کے معانی کے ساتھ — صبح و شام کے اذکار اور روزمرہ کے معمولات — تاکہ بچہ صرف پڑھے نہیں، انہیں استعمال بھی کر سکے، اور پیشرفت ہفتہ وار واٹس ایپ رپورٹ میں نظر آئے۔',
    bullets: ['Morning & evening Adhkar', 'Duas for daily routines', 'Tajweed pronunciation of Arabic Duas'],
    bulletsAr: ['أذكار الصباح والمساء المأثورة', 'أدعية الأحوال اليومية والمناسبات', 'النطق العربي السليم للتضرع'],
    bulletsUr: ['صبح و شام کے حفاظتی اذکار', 'روزمرہ مسنون دعائیں', 'درست عربی تلفظ اور فہم'],
    duration: '2 Months'
  }
];

export const ACADEMY_BANK_DETAILS = {
  bankName: 'Meezan Bank Ltd',
  branch: 'Meezan Digital Centre',
  branchCode: '0030',
  accountTitle: 'SANAULLAH',
  accountNumber: '00300114398034',
  iban: 'PK59MEZN0000300114398034',
  swiftCode: 'MEZNPKKA',
  raastId: '03130958451',
  easyPaisaNumber: '0313 0958451',
  easyPaisaTitle: 'Sanaullah Khan',
  jazzCashNumber: '0313 0958451',
  jazzCashTitle: 'Sanaullah Khan',
  cleanPhone: '923130958451',
  whatsappReceiptNumber: '+92 313 0958451'
};

export const LEARNING_PLANS = [
  {
    id: 'basic',
    name: 'Basic Plan',
    tagline: 'Ideal for beginners and young children starting out',
    price: 45,
    originalPrice: 60,
    discountPercentage: 25,
    popular: false,
    duration: 'Monthly',
    classesPerWeek: 2,
    classesPerMonth: 8,
    sessionDuration: '30 min',
    features: [
      { text: '2 Classes per week (30 min per session)', included: true },
      { text: '1-on-1 Dedicated certified scholar', included: true },
      { text: 'Monthly student progress report', included: true },
      { text: 'Flexible schedule selection', included: true },
      { text: '24/7 Academic WhatsApp support', included: false }
    ]
  },
  {
    id: 'standard',
    name: 'Standard Plan',
    tagline: 'Most popular choice for steady learning & Tajweed',
    price: 60,
    originalPrice: 80,
    discountPercentage: 25,
    popular: true,
    duration: 'Monthly',
    classesPerWeek: 3,
    classesPerMonth: 12,
    sessionDuration: '30 min',
    features: [
      { text: '3 Classes per week (30 min per session)', included: true },
      { text: '1-on-1 Dedicated certified scholar', included: true },
      { text: 'Monthly student progress report', included: true },
      { text: 'Flexible schedule selection', included: true },
      { text: '24/7 Academic WhatsApp support', included: true }
    ]
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    tagline: 'Intensive memorization (Hifz) & master recitation',
    price: 85,
    originalPrice: 100,
    discountPercentage: 15,
    popular: false,
    duration: 'Monthly',
    classesPerWeek: 5,
    classesPerMonth: 20,
    sessionDuration: '30 min',
    features: [
      { text: '5 Classes per week (30 min per session)', included: true },
      { text: '1-on-1 Elite scholar holding Ijazah', included: true },
      { text: 'Weekly detailed monitoring & recordings', included: true },
      { text: 'Priority scheduling & time adjustments', included: true },
      { text: '24/7 Dedicated academic mentorship', included: true }
    ]
  }
];

export const SAVINGS_BREAKDOWN = [
  { title: 'Family Discount', amount: '15% Off', note: 'For 2+ enrolled family members', description: 'Enrolling multiple siblings receives an automatic 15% fee reduction.' },
  { title: 'Bi-Annual Advance', amount: '10% Off', note: 'When paying 6 months upfront', description: 'Advance semester tuition enjoys an additional 10% bonus discount.' },
  { title: 'Full Hifz Sponsorship', amount: 'Flexible', note: 'Special assistance for deserving students', description: 'Subsidized tuition arrangements for orphans and dedicated Hafiz candidates.' }
];

export const TESTIMONIALS_LIST = [
  {
    id: 1,
    name: 'Dr. Tariq Al-Hashimi',
    country: 'United Kingdom',
    role: 'Parent of 2 students (Ages 7 & 10)',
    quote: 'Noor Ul Huda Quran Academy transformed my children’s relationship with the Quran. The teacher is extraordinarily patient, always punctual, and teaches with profound Islamic warmth.',
    course: 'Quran Recitation with Tajweed',
    rating: 5,
    image: '/teacher-sheikh-yaser.jpg'
  },
  {
    id: 2,
    name: 'Sister Maryam Jenkins',
    country: 'United States',
    role: 'Adult Learner & New Muslim',
    quote: 'As a revert to Islam, finding a patient female teacher who could teach me Arabic pronunciation from scratch was a blessing. I am now reading Surah Al-Baqarah with confidence.',
    course: 'Noorani Qaida & Basic Tajweed',
    rating: 5,
    image: '/teacher-jihad-muhammad.jpg'
  },
  {
    id: 3,
    name: 'Brother Zayd Mansoor',
    country: 'Canada',
    role: 'Parent of Hafiz Candidate (Age 12)',
    quote: 'The structured daily Sabaq, Sabqi, and Manzil revision tracking has kept my son motivated and disciplined. 100% recommended for serious Quranic education.',
    course: 'Hifz-ul-Quran Memorization',
    rating: 5,
    image: '/teacher-sheikh-yaser.jpg'
  }
];
