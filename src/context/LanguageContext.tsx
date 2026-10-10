import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ur' | 'ar';

export interface Translations {
  topBar: {
    freeTrial: string;
    callUs: string;
    emailUs: string;
    langSwitchTo: string;
  };
  theme: {
    darkMode: string;
    lightMode: string;
    toggleTitle: string;
  };
  nav: {
    home: string;
    about: string;
    courses: string;
    whyChooseUs: string;
    teachers: string;
    pricing: string;
    payment: string;
    testimonials: string;
    contact: string;
    bookFreeTrial: string;
  };
  hero: {
    motto: string;
    headlinePart1: string;
    headlinePart2: string;
    subtitle: string;
    ctaCourses: string;
    ctaTrial: string;
    chatWhatsapp: string;
    cycle1: string;
    cycle2: string;
    cycle3: string;
    cycle4: string;
    cycle5: string;
  };
  threeSteps: {
    title: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    ctaEnroll: string;
    tag1: string;
    tag2: string;
    tag3: string;
  };
  courses: {
    title: string;
    subtitle: string;
    enrollNow: string;
    viewDetails: string;
    exploreAll: string;
    closeModal: string;
  };
  whyChooseUs: {
    title: string;
    subtitle: string;
    ctaDemo: string;
    stats: {
      courses: string;
      coursesDesc: string;
      experience: string;
      experienceDesc: string;
      tutors: string;
      tutorsDesc: string;
      world: string;
      worldDesc: string;
      verified: string;
      worldwide: string;
    };
    features: {
      freeTrial: { title: string; subtitle: string };
      qaida: { title: string; subtitle: string };
      quranReading: { title: string; subtitle: string };
      tajweed: { title: string; subtitle: string };
      hifz: { title: string; subtitle: string };
    };
  };
  teachers: {
    title: string;
    subtitle: string;
    scheduleBtn: string;
    teachers: {
      sheikhSalman: { name: string; role: string; bio: string };
      qariSafeer: { name: string; role: string; bio: string };
      qariAbdulSamad: { name: string; role: string; bio: string };
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    monthly: string;
    mostPopular: string;
    save: string;
    getStarted: string;
    savingsTitle: string;
    savingsSubtitle: string;
    monthlySavings: string;
    annualSavings: string;
    familyDiscount: string;
  };
  about: {
    title: string;
    subtitle: string;
    missionTitle: string;
    missionText: string;
    missionP1: string;
    missionP2: string;
    visionTitle: string;
    visionText: string;
    visionP1: string;
    visionP2: string;
    pillarHistory: string;
    pillarHistoryText: string;
    historyTitle: string;
    historyText: string;
    pillarApproach: string;
    pillarApproachText: string;
    approachTitle: string;
    approachText: string;
    pillarCommitment: string;
    pillarCommitmentText: string;
    commitmentTitle: string;
    commitmentText: string;
    ctaContact: string;
    learnMoreBtn: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    showcaseTitle: string;
    showcaseSubtitle: string;
    items: {
      ahmed: { author: string; role: string; quote: string };
      sarah: { author: string; role: string; quote: string };
      fatima: { author: string; role: string; quote: string };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    infoTitle: string;
    infoDesc: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    hoursLabel: string;
    campusLabel: string;
    followLabel: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    fullNameLabel: string;
    emailInputLabel: string;
    phoneInputLabel: string;
    courseLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    sending: string;
    successMsg: string;
  };
  trialModal: {
    title: string;
    subtitle: string;
    fullName: string;
    email: string;
    whatsapp: string;
    course: string;
    ageGroup: string;
    preferredTime: string;
    submit: string;
    close: string;
    successTitle: string;
    successDesc: string;
    noCardNeeded: string;
  };
  library: {
    exploreBtn: string;
    hideBtn: string;
  };
  payment: {
    viewBtn: string;
    hideBtn: string;
    tag: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    officialBankBadge: string;
    officialBankTitle: string;
    officialBankSubtitle: string;
    bankNameLabel: string;
    branchLabel: string;
    accountTitleLabel: string;
    accountNumberLabel: string;
    ibanLabel: string;
    copyAcc: string;
    copyIban: string;
    copyAll: string;
    copyAllDone: string;
    copyAccNumber: string;
    copied: string;
    swiftLabel: string;
    raastLabel: string;
    mobileWalletsTitle: string;
    mobileWalletsSubtitle: string;
    faqTag: string;
    faqTitle: string;
    faqSubtitle: string;
    sendReceiptWhatsapp: string;
    whatsappVerificationNote: string;
    shariahBadge: string;
    instantTransferBadge: string;
    workflowTitle: string;
    workflowSubtitle: string;
    instructionsTitle: string;
  };
  footer: {
    description: string;
    aboutText: string;
    quickLinks: string;
    coursesTitle: string;
    contactInfo: string;
    allRightsReserved: string;
    motto: string;
    privacy: string;
    terms: string;
    copyright: string;
  };
}

const enTranslations: Translations = {
    topBar: {
      freeTrial: 'GET YOUR FREE TRIAL',
      callUs: 'Call Us',
      emailUs: 'Email',
      langSwitchTo: 'اردو'
    },
    theme: {
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      toggleTitle: 'Toggle Dark / Light Theme'
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      courses: 'Courses',
      whyChooseUs: 'Why Choose Us',
      teachers: 'Teachers',
      pricing: 'Pricing',
      payment: 'Payment & Bank',
      testimonials: 'Testimonials',
      contact: 'Contact',
      bookFreeTrial: 'Book Free Trial'
    },
    hero: {
      motto: 'Start Where You Are. Grow From There.',
      headlinePart1: 'Learn Holy Quran Online With',
      headlinePart2: 'Certified Teachers',
      subtitle: 'Interactive one-on-one live classes for kids and adults. Master Quran recitation with proper Tajweed, memorize Surahs with structured Hifz guidance, and learn Masnoon Duas from certified tutors worldwide.',
      ctaCourses: 'Quran Online Courses',
      ctaTrial: 'Book Free 3 Days Trial',
      chatWhatsapp: 'Chat on WhatsApp:',
      cycle1: 'Learn Quran',
      cycle2: 'Understand Meaning',
      cycle3: 'Practice Tajweed',
      cycle4: 'Daily Duas',
      cycle5: 'Live by Guidance'
    },
    threeSteps: {
      title: 'Begin Learning Quran Now in 3 Easy Steps',
      step1Title: 'Seamless Online Registration',
      step1Desc: 'Your registration process will be complete once you have provided us with these essential credentials.',
      step2Title: 'Schedule Time For Free Trial',
      step2Desc: 'Upon receiving your Quran learning request, we will promptly contact you to schedule a free trial class.',
      step3Title: 'Embark On Your Journey With Us',
      step3Desc: 'Initiate your learning process by logging in with the credentials we provide you and start taking your first class.',
      ctaEnroll: 'Enroll Yourself Now',
      tag1: 'Quick Form',
      tag2: 'Any Time Slot',
      tag3: 'Instant Start'
    },
    courses: {
      title: 'Our Featured Courses',
      subtitle: 'Comprehensive Quranic, Tajweed, and Islamic curricula designed for kids, adults, and beginners worldwide.',
      enrollNow: 'Enroll Now',
      viewDetails: 'View Details',
      exploreAll: 'Explore All Courses',
      closeModal: 'Close'
    },
    whyChooseUs: {
      title: 'Why Choose Us',
      subtitle: 'Trusted by hundreds of families worldwide for authentic, reliable, and engaging Quran education.',
      ctaDemo: 'Book Your Free Demo Today',
      stats: {
        courses: 'COURSES',
        coursesDesc: 'Specialized curricula from Qaida to Advanced Tajweed & Hifz',
        experience: 'YEARS OF EXPERIENCE',
        experienceDesc: 'Consistent daily routines and proven student excellence',
        tutors: 'QUALIFIED TUTORS',
        tutorsDesc: 'Certified, dedicated 1-on-1 male & female instructors',
        world: 'THE WORLD',
        worldDesc: 'Empowering students across USA, UK, Canada, Australia & beyond',
        verified: 'Verified',
        worldwide: 'Worldwide'
      },
      features: {
        freeTrial: { title: 'Free Trial', subtitle: 'Start your journey risk-free' },
        qaida: { title: 'Qaida', subtitle: 'Build strong foundations' },
        quranReading: { title: 'Quran Reading', subtitle: 'Read fluently with confidence' },
        tajweed: { title: 'Tajweed', subtitle: 'Perfect your pronunciation' },
        hifz: { title: 'Hifz', subtitle: 'Achieve mastery & memorization' }
      }
    },
    teachers: {
      title: 'Our Qualified Teachers',
      subtitle: 'Learn from certified Huffaz, Alims, and Tajweed scholars dedicated to personal student growth.',
      scheduleBtn: 'Schedule Class with Teacher',
      teachers: {
        sheikhSalman: {
          name: 'Sheikh Salman Qasmi',
          role: 'Quran Recitation Specialist',
          bio: 'With over 15 years of dedicated experience in teaching Tajweed and Quranic recitation, Qari Salman has guided countless students in perfecting their recitation with precision, clarity, and devotion.'
        },
        qariSafeer: {
          name: 'Qari Safeer',
          role: 'Hifz Program Director',
          bio: 'Qari Safeer has memorized the entire Quran and has successfully guided hundreds of students through the Hifz program with patience, expertise, and personalized retention methods.'
        },
        qariAbdulSamad: {
          name: 'Qari Abdul Samad Khan',
          role: 'Islamic Studies Scholar',
          bio: 'Qari Abdul Samad Khan is a distinguished scholar of Islamic Studies, specializing in Fiqh and Islamic history, dedicated to spreading authentic knowledge and mentoring students spiritually.'
        }
      }
    },
    pricing: {
      title: 'Choose Your Learning Plan',
      subtitle: 'All plans include one-on-one sessions with qualified teachers and flexible scheduling',
      monthly: '/month',
      mostPopular: 'Most Popular',
      save: 'Save',
      getStarted: 'Get Started',
      savingsTitle: 'See How Much You Can Save',
      savingsSubtitle: 'Affordable packages designed to fit any family budget',
      monthlySavings: 'Monthly Savings',
      annualSavings: 'Annual Savings',
      familyDiscount: 'Family Discount'
    },
    about: {
      title: 'About Noor Ul Huda Online Quran Academy',
      subtitle: 'Dedicated to authentic Quranic education, accessible worldwide with qualified scholars.',
      missionTitle: 'Our Mission',
      missionText: 'Noor Ul Huda Online Quran Academy was established with a clear vision: to make authentic Islamic education accessible to everyone, regardless of their location or background. Our name, which signifies "Light of Guidance," reflects our commitment to representing and spreading the teachings of the Holy Quran with integrity, wisdom, and compassion.',
      missionP1: 'Noor Ul Huda Online Quran Academy was established with a clear vision: to make authentic Islamic education accessible to everyone, regardless of their location or background. Our name, which signifies "Light of Guidance," reflects our commitment to representing and spreading the teachings of the Holy Quran with integrity, wisdom, and compassion.',
      missionP2: 'We believe that Islamic education should be comprehensive, covering not just recitation but also understanding, implementation, and appreciation of the Quran teachings. Our curriculum is carefully designed to cater to different learning levels.',
      visionTitle: 'Our Vision',
      visionText: 'We understand that each student is unique, with different learning styles, goals, and schedules. That is why we offer flexible learning options, including one-on-one sessions and customized pacing. Our student-centered approach ensures everyone receives the attention needed to succeed.',
      visionP1: 'At Noor Ul Huda Online Quran Academy, we understand that each student is unique, with different learning styles, goals, and schedules. That is why we offer flexible learning options, including one-on-one sessions and customized pacing.',
      visionP2: 'Our commitment extends beyond just teaching the Quran. We aim to develop well-rounded Muslims who understand their faith, practice its teachings, and contribute positively to their communities.',
      pillarHistory: 'Our History',
      pillarHistoryText: 'Dedicated to providing high-quality Islamic education through both traditional and modern teaching methods, led by certified Huffaz and Alims.',
      historyTitle: 'Our History',
      historyText: 'Dedicated to providing high-quality Islamic education through both traditional and modern teaching methods, led by certified Huffaz and Alims.',
      pillarApproach: 'Our Approach',
      pillarApproachText: 'A personalized, one-on-one learning environment that adapts to your family schedule, pace, and individual learning goals.',
      approachTitle: 'Our Approach',
      approachText: 'A personalized, one-on-one learning environment that adapts to your family schedule, pace, and individual learning goals.',
      pillarCommitment: 'Our Commitment',
      pillarCommitmentText: 'Empowering students across the globe to build a deep, lifelong relationship with the words and message of Allah Almighty.',
      commitmentTitle: 'Our Commitment',
      commitmentText: 'Empowering students across the globe to build a deep, lifelong relationship with the words and message of Allah Almighty.',
      ctaContact: 'Contact Our Academic Team',
      learnMoreBtn: 'Contact Us to Learn More'
    },
    testimonials: {
      title: 'What Our Students & Parents Say',
      subtitle: 'Hear from our global family of students and parents thriving in their Quran journey.',
      showcaseTitle: 'Student Learning Showcase',
      showcaseSubtitle: 'Real students participating in active live 1-on-1 recitation sessions worldwide.',
      items: {
        ahmed: {
          author: 'Mohammed Ali',
          role: 'Online Quran & Tajweed Student',
          quote: "I've been studying with Noor Ul Huda Online Quran Academy for over a year now, and the progress I've made in my Quran recitation is remarkable. My teacher is patient, knowledgeable, and truly cares about my development."
        },
        sarah: {
          author: 'Young Hasan (Parent: Fatima Al-Zahra)',
          role: 'Nazra & Qaida Student (UK)',
          quote: 'Finding teachers who could keep my young son engaged while teaching proper Makharij was tough until we joined Noor Ul Huda Online Quran Academy. His teacher is patient, encouraging, and gives undivided attention.'
        },
        fatima: {
          author: 'Zainab & Ayesha (Parent: Tariq Mahmood)',
          role: 'Hifz & Islamic Studies (USA)',
          quote: 'Having flexible weekend and evening slots with certified female Quran tutors made all the difference for my daughters. Their Tajweed rules and love for Surah memorization blossomed rapidly.'
        }
      }
    },
    contact: {
      title: 'Get In Touch With Us',
      subtitle: 'Have questions about classes, teachers, or custom schedules? Our team is available 24/7.',
      infoTitle: 'Contact Information',
      infoDesc: 'Have questions about courses, schedules, or our trial program? Reach out to us through any of these channels.',
      phoneLabel: 'Phone & WhatsApp',
      emailLabel: 'Official Email',
      addressLabel: 'Academy Location',
      hoursLabel: 'Academic Hours',
      campusLabel: 'Global Digital Campus',
      followLabel: 'Follow Us Online',
      formTitle: 'Send Us a Direct Message',
      formSubtitle: 'Fill out this quick form and our admissions team will respond within a few hours.',
      nameLabel: 'Full Name',
      fullNameLabel: 'Full Name',
      emailInputLabel: 'Email Address',
      phoneInputLabel: 'WhatsApp / Phone Number',
      courseLabel: 'Interested Course',
      messageLabel: 'Your Message or Inquiries',
      messagePlaceholder: 'Please tell us about student age, current Quran level, and any scheduling preferences...',
      sendBtn: 'Send Message',
      sending: 'Sending...',
      successMsg: 'Thank you! Your inquiry has been received. We will contact you via WhatsApp/Email shortly.'
    },
    trialModal: {
      title: 'Book Your Free 3-Day Trial Class',
      subtitle: 'Experience live 1-on-1 personalized Quran learning with no commitment.',
      fullName: 'Student / Parent Name',
      email: 'Email Address',
      whatsapp: 'WhatsApp Number (with country code)',
      course: 'Select Desired Course',
      ageGroup: 'Student Age Group',
      preferredTime: 'Preferred Time Slot',
      submit: 'Confirm Free Trial Booking',
      close: 'Close',
      successTitle: 'Free Trial Requested Successfully!',
      successDesc: 'Our coordinator will reach out to you via WhatsApp within a few hours to arrange your first class.',
      noCardNeeded: '100% Free • No Credit Card Required • Male & Female Tutors'
    },
    library: {
      exploreBtn: 'Explore Digital Library Resources',
      hideBtn: 'Hide Islamic Library Resources'
    },
    payment: {
      viewBtn: 'View Accepted Payment Methods',
      hideBtn: 'Hide Payment Methods',
      tag: 'Verified Islamic Banking & Global Checkout',
      title: 'Fee Payment & Official',
      titleHighlight: 'Bank Details',
      subtitle: 'Easily pay monthly tuition via our official Meezan Bank account in Pakistan, or through international remittance services including Remitly, Western Union, Ria, and RAAST / EasyPaisa / JazzCash.',
      officialBankBadge: 'Official Academy Bank Account',
      officialBankTitle: 'Meezan Bank - Direct Transfer / IBFT',
      officialBankSubtitle: 'Transfer directly using any Pakistani banking app, ATM, RAAST, 1Link, or international SWIFT wire.',
      bankNameLabel: 'Bank Name',
      branchLabel: 'Branch / Centre',
      accountTitleLabel: 'Account Title',
      accountNumberLabel: 'Account Number',
      ibanLabel: 'IBAN (International Bank Account Number)',
      copyAcc: 'Copy Account No',
      copyIban: 'Copy IBAN',
      copyAll: 'Copy All Bank Details',
      copyAllDone: 'All Details Copied!',
      copyAccNumber: 'Copy to Clipboard',
      copied: 'Copied!',
      swiftLabel: 'SWIFT / BIC Code',
      raastLabel: 'RAAST ID (Instant Free Transfer)',
      mobileWalletsTitle: 'EasyPaisa & JazzCash Direct Transfer',
      mobileWalletsSubtitle: 'Instant local transfers in Pakistan directly via mobile wallet',
      faqTag: 'Payment & Billing FAQ',
      faqTitle: 'Frequently Asked',
      faqSubtitle: 'Clear answers about payment confirmation, refund policies, currency conversion, and scheduling flexibility.',
      sendReceiptWhatsapp: 'Send Payment Receipt on WhatsApp',
      whatsappVerificationNote: 'After completing the transfer, kindly share your transaction screenshot or reference number with our billing coordinator for immediate confirmation.',
      shariahBadge: '100% Shariah Compliant',
      instantTransferBadge: 'RAAST & 1Link Instant Verification',
      workflowTitle: 'How Payment Works at Noor Ul Huda',
      workflowSubtitle: 'Transparent, simple, and safe four-step tuition enrollment process',
      instructionsTitle: 'Payment Instructions'
    },
    footer: {
      description: 'Noor Ul Huda Online Quran Academy is an international online Quran institute dedicated to teaching the Holy Quran with proper Tajweed, Hifz, and Islamic studies to students of all ages across the globe.',
      aboutText: 'Dedicated to providing quality Quranic and Islamic education through authentic, one-on-one virtual classrooms worldwide.',
      quickLinks: 'Quick Links',
      coursesTitle: 'Our Courses',
      contactInfo: 'Contact Information',
      allRightsReserved: 'All rights reserved.',
      motto: 'Start Where You Are. Grow From There.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: 'Noor Ul Huda Online Quran Academy'
    }
};

const urTranslations: Translations = {
    topBar: {
      freeTrial: 'مفت ٹرائل حاصل کریں',
      callUs: 'کال کریں',
      emailUs: 'ای میل',
      langSwitchTo: 'English'
    },
    theme: {
      darkMode: 'ڈارک موڈ',
      lightMode: 'لائٹ موڈ',
      toggleTitle: 'ڈارک / لائٹ موڈ تبدیل کریں'
    },
    nav: {
      home: 'صفحۂ اول',
      about: 'ہمارے بارے میں',
      courses: 'کورسز',
      whyChooseUs: 'ہمیں کیوں منتخب کریں',
      teachers: 'اساتذہ کرام',
      pricing: 'فیس و پلانز',
      payment: 'ادائیگی و بینک اکاؤنٹ',
      testimonials: 'آراء و تاثرات',
      contact: 'رابطہ',
      bookFreeTrial: 'مفت ٹرائل بک کریں'
    },
    hero: {
      motto: 'جہاں ہیں وہیں سے شروع کریں، اور آگے بڑھتے رہیں۔',
      headlinePart1: 'مستند و تجربہ کار اساتذہ کے ساتھ آن لائن',
      headlinePart2: 'قرآن پاک سیکھیں',
      subtitle: 'بچوں اور بڑوں کے لیے ون آن ون انفرادی کلاسز۔ درست تجوید کے ساتھ تلاوتِ قرآن، منظم حفظ اور مسنون دعائیں اپنے پسندیدہ وقت پر گھر بیٹھے سیکھیں۔',
      ctaCourses: 'آن لائن قرآن کورسز',
      ctaTrial: '3 دن کا مفت ٹرائل بک کریں',
      chatWhatsapp: 'واٹس ایپ پر رابطہ کریں:',
      cycle1: 'قرآن سیکھیں',
      cycle2: 'مفہوم سمجھیں',
      cycle3: 'تجوید کی مشق',
      cycle4: 'مسنون دعائیں',
      cycle5: 'تعلیمات پر عمل'
    },
    threeSteps: {
      title: 'صرف 3 آسان مراحل میں قرآن پاک سیکھنا شروع کریں',
      step1Title: 'آسان آن لائن رجسٹریشن',
      step1Desc: 'مطلوبہ معلومات فراہم کرنے کے بعد آپ کے داخلے کا عمل فوری طور پر مکمل ہو جائے گا۔',
      step2Title: 'مفت ٹرائل کلاس کا وقت منتخب کریں',
      step2Desc: 'درخواست موصول ہوتے ہی ہماری ٹیم آپ کے پسندیدہ وقت کے مطابق مفت ٹرائل کلاس شیڈول کرے گی۔',
      step3Title: 'ہمارے ساتھ تعلیمی سفر کا آغاز کریں',
      step3Desc: 'فراہم کردہ لاگ ان کی مدد سے اپنی پہلی کلاس میں شامل ہوں اور باقاعدہ سیکھنا شروع کریں۔',
      ctaEnroll: 'ابھی اپنا داخلہ کروائیں',
      tag1: 'فوری فارم',
      tag2: 'مرضی کا وقت',
      tag3: 'فوری آغاز'
    },
    courses: {
      title: 'ہمارے مقبول کورسز',
      subtitle: 'بچوں، خواتین اور ہر عمر کے افراد کے لیے مکمل، مستند اور جامع قرآنی و اسلامی نصاب۔',
      enrollNow: 'داخلہ لیں',
      viewDetails: 'تفصیلات دیکھیں',
      exploreAll: 'تمام کورسز دیکھیں',
      closeModal: 'بند کریں'
    },
    whyChooseUs: {
      title: 'ہمیں کیوں منتخب کریں؟',
      subtitle: 'مستند، محفوظ اور بااعتماد قرآنی تعلیم کے لیے دنیا بھر کے سینکڑوں خاندانوں کا اولین انتخاب۔',
      ctaDemo: 'آج ہی اپنا مفت ڈیمو بک کریں',
      stats: {
        courses: 'کورسز',
        coursesDesc: 'نورانی قاعدہ سے لے کر اعلیٰ تجوید اور حفظ القرآن تک مکمل رہنمائی',
        experience: 'سالہ تعلیمی تجربہ',
        experienceDesc: 'شاندار تعلیمی ریکارڈ اور انفرادی توجہ کے ساتھ تدریس',
        tutors: 'مستند اساتذہ',
        tutorsDesc: 'مستند اور تجربہ کار مرد اور خواتین قراء و معلمات',
        world: 'دنیا بھر میں',
        worldDesc: 'امریکہ، برطانیہ، کینیڈا، آسٹریلیا اور دنیا کے تمام ممالک میں خدمات',
        verified: 'تصدیق شدہ',
        worldwide: 'عالمی سطح پر'
      },
      features: {
        freeTrial: { title: 'مفت ٹرائل', subtitle: 'بغیر کسی فیس کے آزمائشی کلاس لیں' },
        qaida: { title: 'نورانی قاعدہ', subtitle: 'حروف اور اعراب کی مضبوط بنیاد' },
        quranReading: { title: 'ناظرہ قرآن', subtitle: 'روانی اور اعتماد کے ساتھ تلاوت' },
        tajweed: { title: 'تجوید القرآن', subtitle: 'مخارج اور صفات کی مکمل درستگی' },
        hifz: { title: 'حفظ القرآن', subtitle: 'منظم اور آسان حفظ کا طریقہ کار' }
      }
    },
    teachers: {
      title: 'ہمارے مستند و تجربہ کار اساتذہ',
      subtitle: 'مستند حفاظ کرام، علماء عظام اور ماہر تجوید اساتذہ جو ہر طالب علم کی ذاتی رہنمائی کے لیے وقف ہیں۔',
      scheduleBtn: 'استاد کے ساتھ کلاس کا وقت طے کریں',
      teachers: {
        sheikhSalman: {
          name: 'شیخ سلمان قاسمی',
          role: 'ماہرِ تجوید و قراءت',
          bio: 'تجوید اور قراءت کی تدریس میں 15 سال سے زائد کا تجربہ رکھتے ہیں اور بے شمار طلباء کو درست مخارج کے ساتھ تلاوت کی تربیت دے چکے ہیں۔'
        },
        qariSafeer: {
          name: 'قاری سفیر',
          role: 'ڈائریکٹر حفظ پروگرام',
          bio: 'مکمل قرآن مجید کے حافظ ہیں اور سینکڑوں طلباء کو حفظ کے مراحل کامیابی سے طے کروا چکے ہیں، ان کا تدریسی طریقہ کار انتہائی مشفقانہ ہے۔'
        },
        qariAbdulSamad: {
          name: 'قاری عبد الصمد خان',
          role: 'اسکالر اسلامی تعلیمات',
          bio: 'اسلامک اسٹڈیز، فقہ اور تاریخِ اسلام کے ماہر اسکالر ہیں جو طلباء کی اخلاقی و دینی تربیت میں گہری مہارت رکھتے ہیں۔'
        }
      }
    },
    pricing: {
      title: 'اپنا تعلیمی پلان منتخب کریں',
      subtitle: 'تمام پلانز میں کوالیفائیڈ اساتذہ کے ساتھ ون آن ون کلاسز اور لچکدار اوقات شامل ہیں',
      monthly: '/ماہانہ',
      mostPopular: 'سب سے مقبول',
      save: 'بچت کریں',
      getStarted: 'شروع کریں',
      savingsTitle: 'دیکھیں آپ کتنی بچت کر سکتے ہیں',
      savingsSubtitle: 'ہر خاندان کے بجٹ کے مطابق مناسب اور کفایتی پیکیجز',
      monthlySavings: 'ماہانہ بچت',
      annualSavings: 'سالانہ بچت',
      familyDiscount: 'فیملی رعایت'
    },
    about: {
      title: 'نور الہدیٰ آن لائن قران اکیڈمی کے بارے میں',
      subtitle: 'دنیا بھر کے مسلمانوں تک مستند قرآنی اور اسلامی تعلیم پہنچانے کا قابلِ اعتماد ادارہ۔',
      missionTitle: 'ہمارا مشن',
      missionText: 'نور الہدیٰ آن لائن قران اکیڈمی کا قیام اس واضح وژن کے ساتھ عمل میں آیا کہ دنیا کے کسی بھی کونے میں موجود مسلمانوں تک قرآن کریم کی صحیح اور مستند تعلیم باآسانی پہنچائی جا سکے۔ "نور الہدیٰ" یعنی ہدایت کی روشنی، ہم حکمت، اخلاص اور خلوص کے ساتھ قرآنی تعلیمات عام کرنے کے لیے پرعزم ہیں۔',
      missionP1: 'نور الہدیٰ آن لائن قران اکیڈمی کا قیام اس واضح وژن کے ساتھ عمل میں آیا کہ دنیا کے کسی بھی کونے میں موجود مسلمانوں تک قرآن کریم کی صحیح اور مستند تعلیم باآسانی پہنچائی جا سکے۔',
      missionP2: 'ہماری کوشش ہے کہ اسلامی تعلیم ہمہ جہت ہو جس میں نہ صرف تلاوت بلکہ قرآن کے احکام کی تفہیم اور اس پر عمل پیرا ہونا بھی شامل ہو۔ ہمارا نصاب ہر سطح کے طالب علم کے مطابق ترتیب دیا گیا ہے۔',
      visionTitle: 'ہمارا وژن',
      visionText: 'ہم سمجھتے ہیں کہ ہر طالب علم کی سیکھنے کی رفتار اور وقت مختلف ہوتا ہے۔ اس لیے ہم ون آن ون انفرادی کلاسز اور لچکدار نظام الاوقات فراہم کرتے ہیں تاکہ ہر طالب علم کو مطلوبہ رہنمائی مل سکے۔',
      visionP1: 'نور الہدیٰ اکیڈمی میں ہم جانتے ہیں کہ ہر طالب علم کی انفرادی ضروریات مختلف ہوتی ہیں۔ اس لیے ہم ون آن ون کلاسز اور لچکدار اوقات کے ذریعے خصوصی رہنمائی فراہم کرتے ہیں۔',
      visionP2: 'ہماری وابستگی صرف تدریس تک محدود نہیں بلکہ ایسے باعمل مسلمان تیار کرنا ہے جو اپنے دین کی تعلیمات کو روزمرہ زندگی میں اپنائیں اور معاشرے کے بہترین فرد بنیں۔',
      pillarHistory: 'ہماری تاریخ',
      pillarHistoryText: 'روایتی اور جدید تدریسی طریقوں کے ذریعے اعلیٰ معیار کی اسلامی تعلیم، جس کی قیادت مستند حفاظ اور علماء کر رہے ہیں۔',
      historyTitle: 'ہماری تاریخ',
      historyText: 'روایتی اور جدید تدریسی طریقوں کے ذریعے اعلیٰ معیار کی اسلامی تعلیم، جس کی قیادت مستند حفاظ اور علماء کر رہے ہیں۔',
      pillarApproach: 'ہمارا طریقہ تدریس',
      pillarApproachText: 'ایک طالب علم کے لیے ایک استاد کی سہولت، تاکہ توجہ اور وقت صرف اسی کی بہتری پر صرف ہو۔',
      approachTitle: 'ہمارا طریقہ تدریس',
      approachText: 'ایک طالب علم کے لیے ایک استاد کی سہولت، تاکہ توجہ اور وقت صرف اسی کی بہتری پر صرف ہو۔',
      pillarCommitment: 'ہمارا عزم',
      pillarCommitmentText: 'دنیا بھر کے طلباء کو اللہ تعالیٰ کے پاک کلام کے ساتھ ایک گہرا اور دائمی روحانی رشتہ قائم کرنے میں مدد فراہم کرنا۔',
      commitmentTitle: 'ہمارا عزم',
      commitmentText: 'دنیا بھر کے طلباء کو اللہ تعالیٰ کے پاک کلام کے ساتھ ایک گہرا اور دائمی روحانی رشتہ قائم کرنے میں مدد فراہم کرنا۔',
      ctaContact: 'ہماری اکیڈمک ٹیم سے رابطہ کریں',
      learnMoreBtn: 'مزید معلومات کے لیے ہم سے رابطہ کریں'
    },
    testimonials: {
      title: 'ہمارے طلباء اور والدین کی آراء',
      subtitle: 'جانئے کہ دنیا بھر سے ہمارے طلباء اور والدین ہمارے تدریسی معیار کے بارے میں کیا کہتے ہیں۔',
      showcaseTitle: 'طلباء کی لائیو تعلیمی جھلکیاں',
      showcaseSubtitle: 'دنیا بھر کے مختلف ممالک سے ہمارے طلباء کی آن لائن ون آن ون کلاسز کا عملی منظر۔',
      items: {
        ahmed: {
          author: 'محمد علی',
          role: 'آن لائن تجوید و قرآن کے طالب علم',
          quote: 'میں نور الہدیٰ آن لائن قران اکیڈمی سے ایک سال سے پڑھ رہا ہوں۔ میرے استاد نہ صرف بہت صابر اور با علم ہیں بلکہ میری تلاوت کی روزانہ اصلاح کرتے ہیں۔'
        },
        sarah: {
          author: 'حسن کے والد (فاطمہ الزہراء)',
          role: 'ناظرہ و قاعدہ کے طالب علم (برطانیہ)',
          quote: 'میرے چھوٹے بیٹے کو دلچسپی کے ساتھ مخارج سکھانا بہت مشکل کام تھا لیکن یہاں کے استاد نے نہایت پیار اور توجہ سے اسے بہت جلد روانی سے پڑھنا سکھا دیا۔'
        },
        fatima: {
          author: 'زینب اور عائشہ (والد: طارق محمود)',
          role: 'حفظ و اسلامیات کی طالبات (امریکہ)',
          quote: 'مستند معلمات (خواتین اساتذہ) کی زیرِ نگرانی میری بیٹیوں نے تجوید اور سورتوں کے حفظ میں بہترین کارکردگی کا مظاہرہ کیا۔ ہم بے حد مطمئن ہیں۔'
        }
      }
    },
    contact: {
      title: 'ہم سے رابطہ کریں',
      subtitle: 'کلاسز، اوقات یا کسی بھی سوال کے لیے ہماری ٹیم 24 گھنٹے آپ کی خدمت کے لیے حاضر ہے۔',
      infoTitle: 'رابطے کی معلومات',
      infoDesc: 'کورسز، کلاس اوقات یا ٹرائل پروگرام کے حوالے سے ہم سے ان ذرائع پر رابطہ کر سکتے ہیں۔',
      phoneLabel: 'فون اور واٹس ایپ',
      emailLabel: 'سرکاری ای میل',
      addressLabel: 'اکیڈمی کا پتہ',
      hoursLabel: 'کلاسوں کے اوقات',
      campusLabel: 'عالمی ڈیجیٹل کیمپس',
      followLabel: 'ہمیں سوشل میڈیا پر فالو کریں',
      formTitle: 'ہمیں براہ راست پیغام بھیجیں',
      formSubtitle: 'نیچے دیا گیا فارم پُر کریں، ہماری ٹیم چند ہی گھنٹوں میں آپ کو جواب دے گی۔',
      nameLabel: 'پورا نام',
      fullNameLabel: 'پورا نام',
      emailInputLabel: 'ای میل ایڈریس',
      phoneInputLabel: 'واٹس ایپ / موبائل نمبر',
      courseLabel: 'پسندیدہ کورس',
      messageLabel: 'آپ کا پیغام یا سوالات',
      messagePlaceholder: 'طالب علم کی عمر، موجودہ تعلیمی معیار اور وقت کے متعلق آگاہ فرمائیں...',
      sendBtn: 'پیغام بھیجیں',
      sending: 'ارسال کیا جا رہا ہے...',
      successMsg: 'شکریہ! آپ کا پیغام موصول ہو چکا ہے۔ ہماری ٹیم جلد آپ سے واٹس ایپ یا ای میل پر رابطہ کرے گی۔'
    },
    trialModal: {
      title: '3 دن کا مفت ٹرائل بک کریں',
      subtitle: 'بغیر کسی معاوضے اور بغیر کسی پیشگی فیس کے ون آن ون لائیو کلاس کا تجربہ کریں۔',
      fullName: 'طالب علم یا سرپرست کا نام',
      email: 'ای میل ایڈریس',
      whatsapp: 'واٹس ایپ نمبر (ملکی کوڈ کے ساتھ)',
      course: 'مطلوبہ کورس کا انتخاب',
      ageGroup: 'طالب علم کی عمر',
      preferredTime: 'پسندیدہ وقت',
      submit: 'مفت ٹرائل بک کریں',
      close: 'بند کریں',
      successTitle: 'مفت ٹرائل کی درخواست موصول ہوگئی!',
      successDesc: 'ہمارا نمائندہ کلاس کا وقت طے کرنے کے لیے جلد آپ سے واٹس ایپ پر رابطہ کرے گا۔',
      noCardNeeded: '100% مفت • کسی کریڈٹ کارڈ کی ضرورت نہیں • مرد اور خواتین اساتذہ'
    },
    library: {
      exploreBtn: 'ڈیجیٹل اسلامک لائبریری وسائل دیکھیں',
      hideBtn: 'اسلامک لائبریری وسائل چھپائیں'
    },
    payment: {
      viewBtn: 'ادائیگی کے تمام طریقے دیکھیں',
      hideBtn: 'ادائیگی کے طریقے چھپائیں',
      tag: 'مستند اسلامی بینکنگ اور عالمی ادائیگی',
      title: 'فیس کی ادائیگی اور سرکاری',
      titleHighlight: 'بینک اکاؤنٹ کی تفصیلات',
      subtitle: 'آپ پاکستان میں ہمارے آفیشل میزان بینک اکاؤنٹ میں باآسانی فیس جمع کروا سکتے ہیں، نیز بیرون ملک سے ترسیل زر (Remitly, Western Union, Ria) یا RAAST / ایزی پیسہ / جاز کیش کے ذریعے بھی ادائیگی ممکن ہے۔',
      officialBankBadge: 'اکیڈمی کا سرکاری بینک اکاؤنٹ',
      officialBankTitle: 'میزان بینک - براہ راست اکاؤنٹ ٹرانسفر / IBFT',
      officialBankSubtitle: 'پاکستان کی کسی بھی بینکنگ ایپ، ایزی پیسہ، جاز کیش، RAAST، 1Link، یا بین الاقوامی وائر ٹرانسفر سے رقم منتقل کریں۔',
      bankNameLabel: 'بینک کا نام',
      branchLabel: 'برانچ / سینٹر',
      accountTitleLabel: 'اکاؤنٹ کا عنوان (ٹائٹل)',
      accountNumberLabel: 'اکاؤنٹ نمبر',
      ibanLabel: 'IBAN (بین الاقوامی بینک اکاؤنٹ نمبر)',
      copyAcc: 'اکاؤنٹ نمبر کاپی کریں',
      copyIban: 'IBAN کاپی کریں',
      copyAll: 'بینک کی تمام تفصیلات کاپی کریں',
      copyAllDone: 'تمام تفصیلات کاپی ہو گئیں!',
      copyAccNumber: 'کاپی کریں',
      copied: 'کاپی ہو گیا!',
      swiftLabel: 'SWIFT / BIC کوڈ',
      raastLabel: 'راست (RAAST) آئی ڈی (فوری مفت ٹرانسفر)',
      mobileWalletsTitle: 'ایزی پیسہ اور جاز کیش براہ راست ٹرانسفر',
      mobileWalletsSubtitle: 'پاکستان میں موبائل والٹ کے ذریعے فوری اور آسان فیس کی ادائیگی',
      faqTag: 'فیس اور ادائیگی سے متعلق سوالات',
      faqTitle: 'اکثر پوچھے گئے سوالات',
      faqSubtitle: 'فیس کی تصدیق، ریفنڈ پالیسی، کرنسی کے تبادلے اور کلاسز کے شیڈول سے متعلق اہم جوابات۔',
      sendReceiptWhatsapp: 'واٹس ایپ پر رسید ارسال کریں',
      whatsappVerificationNote: 'رقم منتقلی کے بعد فوری تصدیق اور کلاسز کے شیڈول کے لیے رسید کا اسکرین شاٹ ہمارے واٹس ایپ پر ارسال فرمائیں۔',
      shariahBadge: '100% شریعہ کے مطابق اسلامی بینکنگ',
      instantTransferBadge: 'RAAST اور 1Link فوری تصدیق',
      workflowTitle: 'نور الہدیٰ اکیڈمی میں فیس ادائیگی کا آسان طریقہ',
      workflowSubtitle: 'شفاف، محفوظ اور مرحلہ وار چار قدمی طریقہ کار',
      instructionsTitle: 'ادائیگی کی ہدایات'
    },
    footer: {
      description: 'نور الہدیٰ آن لائن قران اکیڈمی ایک بین الاقوامی آن لائن ادارہ ہے جو درست تجوید، حفظ القرآن اور بنیادی اسلامی علوم کی تدریس کے لیے دنیا بھر میں خدمات پیش کر رہا ہے۔',
      aboutText: 'دنیا بھر میں اعلیٰ درجے کے ون آن ون ورچوئل کلاس رومز کے ذریعے مستند قرآنی و اسلامی تعلیم کی فراہمی کے لیے وقف۔',
      quickLinks: 'فوری لنکس',
      coursesTitle: 'ہمارے کورسز',
      contactInfo: 'رابطے کی معلومات',
      allRightsReserved: 'تمام حقوق محفوظ ہیں۔',
      motto: 'جہاں ہیں وہیں سے شروع کریں، اور آگے بڑھتے رہیں۔',
      privacy: 'رازداری کی پالیسی',
      terms: 'شرائط و ضوابط',
      copyright: 'نور الہدیٰ آن لائن قران اکیڈمی'
    }
};

const arTranslations: Translations = {
  topBar: {
    freeTrial: 'احجز حصتك التجريبية مجاناً',
    callUs: 'اتصل بنا',
    emailUs: 'البريد الإلكتروني',
    langSwitchTo: 'English'
  },
  theme: {
    darkMode: 'الوضع الداكن',
    lightMode: 'الوضع الفاتح',
    toggleTitle: 'تبديل المظهر الداكن / الفاتح'
  },
  nav: {
    home: 'الرئيسية',
    about: 'من نحن',
    courses: 'الدورات التعليمية',
    whyChooseUs: 'لماذا نحن',
    teachers: 'المعلمون',
    pricing: 'الأسعار والرسوم',
    payment: 'طرق الدفع والتحويل',
    testimonials: 'آراء الطلاب',
    contact: 'اتصل بنا',
    bookFreeTrial: 'احجز تجربة مجانية'
  },
  hero: {
    motto: 'ابدأ من حيث أنت، وارتقِ في مسيرتك القرآنية',
    headlinePart1: 'تعلم القرآن الكريم عبر الإنترنت مع',
    headlinePart2: 'نخبة المعلمين والمعلمات المجازين',
    subtitle: 'حصص تفاعلية فردية ومباشرة (1-لـ-1) للأطفال والكبار والمهتدين الجدد حول العالم. أتقن تلاوة القرآن بأحكام التجويد ومخارج الحروف، واحفظ السور وفق خطة حفظ منتظمة، وتعلم الأدعية المأثورة والعلوم الإسلامية بأوقات مرنة على مدار الساعة.',
    ctaCourses: 'استكشف الدورات المتاحة',
    ctaTrial: 'احجز تجربة مجانية 3 أيام',
    chatWhatsapp: 'تواصل مباشرة عبر واتساب:',
    cycle1: 'تعلم القرآن',
    cycle2: 'فهم وتدبر',
    cycle3: 'إتقان التجويد',
    cycle4: 'الأدعية المأثورة',
    cycle5: 'العمل بالهداية'
  },
  threeSteps: {
    title: 'ابدأ رحلتك القرآنية الآن في 3 خطوات ميسرة',
    step1Title: 'تسجيل إلكتروني سهل وفوري',
    step1Desc: 'تكتمل عملية التسجيل بمجرد تزويدنا بالبيانات الأساسية وتحديد المستوى المناسب للطالب.',
    step2Title: 'تحديد موعد الحصة التجريبية المجانية',
    step2Desc: 'فور استلام طلبك، يتواصل معك منسق الأكاديمية لاختيار الأوقات الأنسب لجدولك اليومي.',
    step3Title: 'انطلق في رحلتك التعليمية معنا',
    step3Desc: 'ابدأ حصتك الأولى عبر فصولنا الرقمية التفاعلية مع معلمك الشخصي بكل راحة وسهولة.',
    ctaEnroll: 'سجل الآن مجاناً',
    tag1: 'استمارة سريعة',
    tag2: 'أي وقت يناسبك',
    tag3: 'بداية فورية'
  },
  courses: {
    title: 'دوراتنا التعليمية المتميزة',
    subtitle: 'مناهج متكاملة لتعليم القرآن الكريم، التجويد، الحفظ، والعلوم الإسلامية للأطفال والكبار والمهتدين الجدد.',
    enrollNow: 'سجل الآن',
    viewDetails: 'عرض التفاصيل',
    exploreAll: 'استكشف جميع الدورات',
    closeModal: 'إغلاق'
  },
  whyChooseUs: {
    title: 'لماذا تختار أكاديمية نور الهدى؟',
    subtitle: 'موثوقة لدى مئات العائلات المسلمة حول العالم لتعليم قرآني أصيل وتفاعلي ميسر.',
    ctaDemo: 'احجز حصتك التجريبية المجانية اليوم',
    stats: {
      courses: 'دورة تعليمية',
      coursesDesc: 'مناهج متخصصة من القاعدة النورانية وحتى الإجازة وحفظ القرآن كاملاً',
      experience: 'سنوات خبرة موثقة',
      experienceDesc: 'جداول تعليمية منتظمة ونتائج متقدمة مع الطلاب حول العالم',
      tutors: 'معلماً ومعلمة مجازين',
      tutorsDesc: 'نخبة من الحفاظ والعلماء المتخصصين في التعليم الفردي المباشر',
      world: 'حول العالم',
      worldDesc: 'خدمة طلابنا في أمريكا، بريطانيا، كندا، أستراليا، والدول العربية',
      verified: 'معتمد',
      worldwide: 'عالمياً'
    },
    features: {
      freeTrial: { title: 'تجربة مجانية', subtitle: 'ابدأ بثقة تامة دون أي التزام' },
      qaida: { title: 'القاعدة النورانية', subtitle: 'تأسيس متين لمخارج الحروف والتهجئة' },
      quranReading: { title: 'ناظرة القرآن', subtitle: 'قراءة طلقة وسليمة برسم المصحف' },
      tajweed: { title: 'أحكام التجويد', subtitle: 'إتقان التلاوة كما أنزلت' },
      hifz: { title: 'حفظ القرآن الكريم', subtitle: 'متابعة يومية ومراجعة متقنة للحفاظ' }
    }
  },
  teachers: {
    title: 'نخبة المعلمين والمعلمات المجازين',
    subtitle: 'تعلم على أيدي معلمين ومعلمات من حفظة كتاب الله وأصحاب الإجازات والأسانيد المتصلة.',
    scheduleBtn: 'احجز موعداً مع المعلم',
    teachers: {
      sheikhSalman: {
        name: 'الشيخ سلمان القاسمي',
        role: 'أخصائي التلاوة والتجويد والإجازات',
        bio: 'خبرة تزيد عن 15 عاماً في تدريس أحكام التجويد ومخارج الحروف وإتقان التلاوة برواية حفص عن عاصم، وتوجيه الطلاب نحو الطلاقة والإتقان.'
      },
      qariSafeer: {
        name: 'القارئ سفير',
        role: 'مشرف برنامج حفظ القرآن الكريم',
        bio: 'حافظ لكتاب الله بالسند المتصل، ساعد مئات الطلاب في إتمام حفظ القرآن ومراجعته بنظام الحفظ والمراجعة القريبة والبعيدة.'
      },
      qariAbdulSamad: {
        name: 'القارئ عبد الصمد خان',
        role: 'أستاذ العلوم الإسلامية والفقه',
        bio: 'عالم متخصص في الفقه والدراسات الإسلامية والسيرة النبوية الشريفة، حريص على غرس القيم والأخلاق الإسلامية في نفوس الطلاب.'
      }
    }
  },
  pricing: {
    title: 'اختر باقة التعلم المناسبة لك',
    subtitle: 'تشمل جميع الخطط حصصاً فردية مباشرة مع معلمين مجازين وأوقاتاً مرنة تناسب أسرتك',
    monthly: '/شهرياً',
    mostPopular: 'الأكثر طلباً',
    save: 'خصم',
    getStarted: 'ابدأ الآن',
    savingsTitle: 'اكتشف كم يمكنك أن توفر معنا',
    savingsSubtitle: 'باقات اقتصادية وميسرة صُممت لتلائم ميزانية كل عائلة',
    monthlySavings: 'التوفير الشهري',
    annualSavings: 'التوفير السنوي',
    familyDiscount: 'خصم العائلات والأشقاء'
  },
  about: {
    title: 'عن أكاديمية نور الهدى لتعليم القرآن الكريم',
    subtitle: 'صرح تعليمي قرآني عالمي يقدم تعليماً إسلامياً أصيلاً عبر فصول افتراضية فردية ومباشرة.',
    missionTitle: 'رسالتنا',
    missionText: 'تأسست أكاديمية نور الهدى برؤية واضحة: إتاحة التعليم الإسلامي والقرآني الأصيل لكل مسلم ومسلمة في أي مكان في العالم. ويعكس اسمنا "نور الهدى" التزامنا بنشر هدي كتاب الله بالحكمة والموعظة الحسنة والاهتمام الفردي بكل طالب.',
    missionP1: 'تأسست أكاديمية نور الهدى برؤية واضحة: إتاحة التعليم الإسلامي والقرآني الأصيل لكل مسلم ومسلمة في أي مكان في العالم. ويعكس اسمنا "نور الهدى" التزامنا بنشر هدي كتاب الله بالحكمة والموعظة الحسنة والاهتمام الفردي بكل طالب.',
    missionP2: 'نؤمن بأن التعليم القرآني يجب أن يكون شاملاً، لا يقتصر على القراءة فقط بل يمتد إلى فهم المعاني، والتحلي بآداب القرآن والعمل به. تم إعداد مناهجنا بعناية لتناسب مختلف الأعمار والمستويات.',
    visionTitle: 'رؤيتنا',
    visionText: 'ندرك أن لكل طالب قدراته ووقته الخاص. لذلك نوفر جداول زمنية مرنة على مدار 24 ساعة، وحصصاً فردية تماماً تضمن تركيز المعلم الكامل على إتقان الطالب وتقدمه المستمر.',
    visionP1: 'في أكاديمية نور الهدى، نعتني بكل طالب وفق مستواه وقدرته الاستيعابية، مما يمنحه البيئة المثالية لحفظ القرآن وتلاوته بصورة صحيحة وبثقة عالية.',
    visionP2: 'يمتد هدفنا إلى بناء شخصية المسلم المعتز بدينه، المتقن لكتاب ربه، المتخلق بأخلاق النبي صلى الله عليه وسلم، ليكون نافعاً لأمته ومجتمعه.',
    pillarHistory: 'مسيرتنا',
    pillarHistoryText: 'سنوات من العطاء في تعليم كتاب الله وسنة نبيه بأحدث الوسائل التكنولوجية التفاعلية مع نخبة المعلمين.',
    historyTitle: 'مسيرتنا وتاريخنا',
    historyText: 'سنوات من العطاء في تعليم كتاب الله وسنة نبيه بأحدث الوسائل التكنولوجية التفاعلية مع نخبة المعلمين.',
    pillarApproach: 'منهجيتنا',
    pillarApproachText: 'تعليم فردي مباشر (واحد لواحد) يتكيف مع جدولك اليومي وسرعة تعلمك وأهدافك الشخصية.',
    approachTitle: 'منهجيتنا التعليمية',
    approachText: 'تعليم فردي مباشر (واحد لواحد) يتكيف مع جدولك اليومي وسرعة تعلمك وأهدافك الشخصية.',
    pillarCommitment: 'التزامنا',
    pillarCommitmentText: 'تمكين الطلاب في كل مكان من بناء علاقة وثيقة ومستمرة مع كلام الله عز وجل علماً وعملاً.',
    commitmentTitle: 'التزامنا تجاهكم',
    commitmentText: 'تمكين الطلاب في كل مكان من بناء علاقة وثيقة ومستمرة مع كلام الله عز وجل علماً وعملاً.',
    ctaContact: 'تواصل مع الإدارة التعليمية',
    learnMoreBtn: 'تواصل لمعرفة المزيد'
  },
  testimonials: {
    title: 'ماذا يقول أولياء الأمور وطلابنا؟',
    subtitle: 'تجارب حقيقية لعائلات مسلمة حول العالم تخوض رحلة التعلم المباركة مع أكاديمية نور الهدى.',
    showcaseTitle: 'معرض إنجازات الطلاب',
    showcaseSubtitle: 'نماذج حية لطلابنا أثناء حصص التلاوة الفردية المباشرة مع المعلمين.',
    items: {
      ahmed: {
        author: 'محمد علي',
        role: 'طالب في دورة أحكام التجويد وتصحيح التلاوة',
        quote: 'أدرس في أكاديمية نور الهدى منذ أكثر من عام، وكان التحسن في نطق الحروف والتلاوة مذهلاً بفضل الله ثم صبر المعلم ودقته العالية في التوجيه.'
      },
      sarah: {
        author: 'والدة الطالب حسن (فاطمة الزهراء)',
        role: 'طالب في القاعدة النورانية وحفظ جزء عم (بريطانيا)',
        quote: 'كان من الصعب العثور على معلم يجمع بين الصبر وجذب اهتمام طفلي وتعليمه المخارج الصحيحة حتى سجلنا في أكاديمية نور الهدى. نلمس اهتماماً فردياً رائعاً في كل حصة.'
      },
      fatima: {
        author: 'والد الطالبتين زينب وعائشة (طارق محمود)',
        role: 'طالبتان في دورة الحفظ والدراسات الإسلامية (الولايات المتحدة)',
        quote: 'توفير حصص في أوقات مسائية وعطلات نهاية الأسبوع مع معلمات مجازات كان الحل المثالي لابنتَيّ. أحكام التجويد وحب القرآن أصبح جزءاً من يومهما.'
      }
    }
  },
  contact: {
    title: 'تواصل معنا واستفسر في أي وقت',
    subtitle: 'فريق الإدارة والقبول متاح للإجابة على جميع استفساراتكم حول الدورات والأسعار والمواعيد.',
    infoTitle: 'معلومات الاتصال المباشر',
    infoDesc: 'يسعدنا تواصلكم معنا عبر الهاتف، الواتساب، البريد الإلكتروني، أو من خلال النموذج أدناه.',
    phoneLabel: 'الهاتف وواتساب',
    emailLabel: 'البريد الإلكتروني الرسمي',
    addressLabel: 'مقر إدارة الأكاديمية',
    hoursLabel: 'ساعات العمل والإشراف',
    campusLabel: 'الحرم الرقمي العالمي',
    followLabel: 'تابعونا على وسائل التواصل',
    formTitle: 'أرسل لنا رسالة مباشرة',
    formSubtitle: 'املأ النموذج وسيقوم فريق التسجيل بالتواصل معك خلال ساعات قليلة.',
    nameLabel: 'الاسم الكامل',
    fullNameLabel: 'الاسم الكامل للطالب أو ولي الأمر',
    emailInputLabel: 'البريد الإلكتروني',
    phoneInputLabel: 'رقم الواتساب / الهاتف مع رمز الدولة',
    courseLabel: 'الدورة المرغوبة',
    messageLabel: 'رسالتك أو ملاحظاتك',
    messagePlaceholder: 'اكتب لنا عن عمر الطالب، مستواه الحالي في القراءة، والأوقات المفضلة للحصص...',
    sendBtn: 'إرسال الرسالة',
    sending: 'جاري الإرسال...',
    successMsg: 'شكراً لك! تم استلام رسالتك بنجاح، وسنتواصل معك عبر واتساب أو البريد قريباً بإذن الله.'
  },
  trialModal: {
    title: 'احجز حصتك التجريبية المجانية (3 أيام)',
    subtitle: 'جرب متعة التعلم الفردي المباشر للقرآن الكريم مع معلم مجاز دون أي التزام مالي مسبق.',
    fullName: 'اسم الطالب أو ولي الأمر',
    email: 'البريد الإلكتروني',
    whatsapp: 'رقم الواتساب (مع رمز الدولة)',
    course: 'اختر الدورة المناسبة',
    ageGroup: 'الفئة العمرية للطالب',
    preferredTime: 'الوقت المفضل للحصة',
    submit: 'تأكيد حجز التجربة المجانية',
    close: 'إغلاق',
    successTitle: 'تم طلب الحصة التجريبية بنجاح!',
    successDesc: 'سيتواصل معك منسق الأكاديمية عبر واتساب خلال ساعات قليلة لترتيب موعد حصتك الأولى.',
    noCardNeeded: 'مجاناً 100% • لا يلزم بطاقة بنكية • متوفر معلمون ومعلمات'
  },
  library: {
    exploreBtn: 'استكشف مصادر المكتبة الإسلامية',
    hideBtn: 'إخفاء مصادر المكتبة'
  },
  payment: {
    viewBtn: 'عرض طرق الدفع والتحويل المعتمدة',
    hideBtn: 'إخفاء طرق الدفع',
    tag: 'معاملات مصرفية إسلامية معتمدة وآمنة',
    title: 'طرق دفع الرسوم والبيانات',
    titleHighlight: 'البنكية الرسمية',
    subtitle: 'يمكنك سداد الرسوم الشهرية بسهولة عبر حسابنا الرسمي في بنك ميزان، أو عبر خدمات التحويل الدولي المعتمدة مثل Remitly وWestern Union وRia ومحافظ RAAST وEasyPaisa وJazzCash.',
    officialBankBadge: 'الحساب البنكي الرسمي للأكاديمية',
    officialBankTitle: 'بنك ميزان (Meezan Bank) - تحويل مباشر IBFT',
    officialBankSubtitle: 'يمكن التحويل من أي بنك داخل باكستان أو عبر حوالات السويفت الدولية من أي دولة في العالم.',
    bankNameLabel: 'اسم البنك',
    branchLabel: 'الفرع / المركز الرقمي',
    accountTitleLabel: 'اسم صاحب الحساب',
    accountNumberLabel: 'رقم الحساب',
    ibanLabel: 'رقم الآيبان الدولي (IBAN)',
    copyAcc: 'نسخ رقم الحساب',
    copyIban: 'نسخ الآيبان',
    copyAll: 'نسخ كافة البيانات البنكية',
    copyAllDone: 'تم نسخ جميع البيانات!',
    copyAccNumber: 'نسخ إلى الحافظة',
    copied: 'تم النسخ!',
    swiftLabel: 'رمز السويفت (SWIFT / BIC)',
    raastLabel: 'معرف راست (RAAST ID للتحويل الفوري)',
    mobileWalletsTitle: 'محافظ إيزي بيسا وجاز كاش (EasyPaisa & JazzCash)',
    mobileWalletsSubtitle: 'تحويل محلي فوري ومجاني داخل باكستان عبر المحافظ الإلكترونية',
    faqTag: 'الأسئلة الشائعة حول الدفع',
    faqTitle: 'استفسارات متكررة حول السداد',
    faqSubtitle: 'إجابات واضحة حول تأكيد الدفع، سياسة الاسترداد، تحويل العملات ومرونة المواعيد.',
    sendReceiptWhatsapp: 'إرسال إشعار التحويل عبر واتساب',
    whatsappVerificationNote: 'بعد إتمام التحويل، يرجى إرسال صورة الإشعار أو رقم العملية لمنسق الحسابات لتأكيد التسجيل فوراً.',
    shariahBadge: 'متوافق 100% مع الشريعة الإسلامية',
    instantTransferBadge: 'تحقق فوري عبر RAAST و1Link',
    workflowTitle: 'كيف تتم عملية التسجيل والدفع؟',
    workflowSubtitle: 'خطوات بسيطة وشفافة تضمن راحة وسهولة تامة لأولياء الأمور والطلاب',
    instructionsTitle: 'تعليمات الدفع والسداد'
  },
  footer: {
    description: 'أكاديمية نور الهدى لتعليم القرآن الكريم صرح تعليمي عالمي متخصص في تدريس القرآن الكريم بالتجويد والحفظ والعلوم الإسلامية لمختلف الأعمار حول العالم.',
    aboutText: 'نهدف إلى تقديم تعليم قرآني متميز وأصيل عبر حصص فردية افتراضية مباشرة مع نخبة المعلمين والمعلمات.',
    quickLinks: 'روابط سريعة',
    coursesTitle: 'دوراتنا التعليمية',
    contactInfo: 'معلومات الاتصال',
    allRightsReserved: 'جميع الحقوق محفوظة.',
    motto: 'ابدأ من حيث أنت، وارتقِ في مسيرتك القرآنية.',
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
    copyright: 'أكاديمية نور الهدى لتعليم القرآن الكريم'
  }
};

export const translations: Record<Language, Translations> = {
  en: enTranslations,
  ur: urTranslations,
  ar: arTranslations
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  isUrdu: boolean;
  isArabic: boolean;
  tLocale: (en: string, ur: string, ar: string) => string;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'noor_ul_huda_language';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'ur' || saved === 'en' || saved === 'ar') {
        return saved as Language;
      }
    } catch {
      // ignore
    }
    return 'en';
  });

  const isRtl = language === 'ur' || language === 'ar';
  const isUrdu = language === 'ur';
  const isArabic = language === 'ar';

  const tLocale = (en: string, ur: string, ar: string) => {
    if (language === 'ar') return ar;
    if (language === 'ur') return ur;
    return en;
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ur' : language === 'ur' ? 'ar' : 'en');
  };

  useEffect(() => {
    // Synchronize html dir and lang attributes
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    if (isRtl) {
      document.documentElement.classList.add('rtl-mode');
      document.body.classList.add('rtl-mode');
    } else {
      document.documentElement.classList.remove('rtl-mode');
      document.body.classList.remove('rtl-mode');
    }
  }, [language, isRtl]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    isRtl,
    isUrdu,
    isArabic,
    tLocale,
    t: translations[language]
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
