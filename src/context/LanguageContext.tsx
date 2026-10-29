import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ur' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRtl: boolean;
  isUrdu: boolean;
  isArabic: boolean;
  t: Record<string, any>;
}

const translations = {
  "en": {
    "topBar": {
      "freeTrial": "Book 3-Day Free Trial"
    },
    "theme": {
      "darkMode": "Dark Mode",
      "lightMode": "Light Mode",
      "toggleTitle": "Toggle Dark / Light Theme"
    },
    "nav": {
      "home": "Home",
      "about": "About Us",
      "courses": "Our Courses",
      "whyChooseUs": "Why Choose Us",
      "teachers": "Teachers",
      "pricing": "Pricing Plans",
      "payment": "Payment Methods",
      "testimonials": "Testimonials",
      "contact": "Contact Us",
      "bookFreeTrial": "Book Free Trial"
    },
    "hero": {
      "motto": "Start Where You Are. Grow From There.",
      "headlinePart1": "Learn Holy Quran Online With",
      "headlinePart2": "Certified Teachers",
      "subtitle": "Interactive one-on-one live classes for kids and adults. Master Quran recitation with proper Tajweed, memorize Surahs with structured Hifz guidance, and learn Masnoon Duas from certified tutors worldwide.",
      "ctaCourses": "Quran Online Courses",
      "ctaTrial": "Book Free 3 Days Trial",
      "chatWhatsapp": "Chat on WhatsApp:",
      "cycle1": "Learn Quran",
      "cycle2": "Understand Meaning",
      "cycle3": "Practice Tajweed",
      "cycle4": "Daily Duas",
      "cycle5": "Live by Guidance"
    },
    "threeSteps": {
      "title": "Begin Learning Quran Now in 3 Easy Steps",
      "step1Title": "Seamless Online Registration",
      "step1Desc": "Your registration process will be complete once you have provided us with these essential credentials.",
      "step2Title": "Schedule Time For Free Trial",
      "step2Desc": "Upon receiving your Quran learning request, we will promptly contact you to schedule a free trial class.",
      "step3Title": "Embark On Your Journey With Us",
      "step3Desc": "Initiate your learning process by logging in with the credentials we provide you and start taking your first class.",
      "ctaEnroll": "Enroll Yourself Now",
      "tag1": "Quick Form",
      "tag2": "Any Time Slot",
      "tag3": "Instant Start"
    },
    "courses": {
      "title": "Pick the Right Course for Your Child — From Qaida to Hifz",
      "subtitle": "Every course is 1-on-1, with a certified male or female teacher, at your time zone. Start with a free trial, and follow your child's progress with a weekly WhatsApp report.",
      "enrollNow": "Enroll Now",
      "viewDetails": "View Details",
      "exploreAll": "Explore All Courses",
      "closeModal": "Close"
    },
    "whyChooseUs": {
      "title": "Why Parents Choose Us",
      "subtitle": "One teacher, one child, at your family's time — with a weekly WhatsApp progress report, so you can see your child's Quran progress instead of wondering about it.",
      "ctaDemo": "Book Your Free Demo Today",
      "stats": {
        "courses": "COURSES",
        "coursesDesc": "Specialized curricula from Qaida to Advanced Tajweed & Hifz",
        "experience": "YEARS OF EXPERIENCE",
        "experienceDesc": "Consistent daily routines and proven student excellence",
        "tutors": "QUALIFIED TUTORS",
        "tutorsDesc": "Certified, dedicated 1-on-1 male & female instructors",
        "world": "THE WORLD",
        "worldDesc": "Empowering students across USA, UK, Canada, Australia & beyond",
        "verified": "Verified",
        "worldwide": "Worldwide"
      },
      "features": {
        "freeTrial": {
          "title": "Free Trial",
          "subtitle": "Start your journey risk-free"
        },
        "qaida": {
          "title": "Qaida",
          "subtitle": "Build strong foundations"
        },
        "quranReading": {
          "title": "Quran Reading",
          "subtitle": "Read fluently with confidence"
        },
        "tajweed": {
          "title": "Tajweed",
          "subtitle": "Perfect your pronunciation"
        },
        "hifz": {
          "title": "Hifz",
          "subtitle": "Achieve mastery & memorization"
        }
      }
    },
    "teachers": {
      "title": "Our Qualified Teachers & Scholars",
      "subtitle": "Graduates of renowned Islamic universities holding authentic Ijazah in Quran recitation.",
      "scheduleBtn": "Book Class with Teacher",
      "teachers": {
        "sheikhSalman": {
          "name": "Sheikh Salman Al-Azhari",
          "role": "Senior Tajweed & Qira’at Instructor",
          "bio": "Graduate of Al-Azhar University holding Ijazah in Hafs ‘an ‘Asim. Over 12 years of experience teaching students worldwide."
        },
        "qariSafeer": {
          "name": "Qari Muhammad Safeer",
          "role": "Quran Memorization (Hifz) Specialist",
          "bio": "Certified Hafiz with Sanad. Expert in helping children and youth build strong retention cycles and beautiful Tartil recitation."
        },
        "qariAbdulSamad": {
          "name": "Ustadhah Fatima Zahra",
          "role": "Female Quran & Tajweed Mentor",
          "bio": "Dedicated scholar guiding sisters, children, and beginners with patience, empathy, and structured pronunciation exercises."
        }
      }
    },
    "pricing": {
      "title": "Choose Your Learning Plan",
      "subtitle": "All plans include one-on-one sessions with qualified teachers and flexible scheduling",
      "monthly": "/month",
      "mostPopular": "Most Popular",
      "save": "Save",
      "getStarted": "Get Started",
      "savingsTitle": "See How Much You Can Save",
      "savingsSubtitle": "Affordable packages designed to fit any family budget",
      "monthlySavings": "Monthly Savings",
      "annualSavings": "Annual Savings",
      "familyDiscount": "Family Discount"
    },
    "about": {
      "title": "About Noor Ul Huda Online Quran Academy",
      "subtitle": "Nurturing hearts with the divine light of the Holy Quran worldwide.",
      "missionTitle": "Our Sacred Mission",
      "missionP1": "To provide high-caliber, accessible, and structured Quranic and Islamic education to Muslim families across all continents.",
      "missionP2": "With certified male and female scholars, individualized 1-on-1 pacing, and modern interactive virtual classrooms.",
      "visionTitle": "Our Noble Vision",
      "visionP1": "Building a generation grounded in beautiful Tajweed recitation, profound understanding, and living prophetic character.",
      "visionP2": "Enabling every child, youth, adult, and new Muslim to establish an unbroken bond with the Holy Book of Allah.",
      "historyTitle": "Our History",
      "historyText": "Founded with a pure intention to make authentic Quranic education accessible to Muslims worldwide with certified scholars.",
      "approachTitle": "Our Approach",
      "approachText": "Personalized 1-on-1 live interactive sessions designed around each student’s unique pace, learning style, and schedule.",
      "commitmentTitle": "Our Commitment",
      "commitmentText": "Dedicated to preserving Tajweed precision, fostering Islamic values, and providing unwavering mentorship for all ages.",
      "learnMoreBtn": "Book Free 3-Day Trial"
    },
    "testimonials": {
      "title": "What Our Students & Parents Say",
      "subtitle": "Hear from our global family of students and parents thriving in their Quran journey.",
      "showcaseTitle": "Student Learning Showcase",
      "showcaseSubtitle": "Real students participating in active live 1-on-1 recitation sessions worldwide.",
      "items": {
        "ahmed": {
          "author": "Mohammed Ali",
          "role": "Online Quran & Tajweed Student",
          "quote": "I've been studying with Noor Ul Huda Online Quran Academy for over a year now, and the progress I've made in my Quran recitation is remarkable. My teacher is patient, knowledgeable, and truly cares about my development."
        },
        "sarah": {
          "author": "Young Hasan (Parent: Fatima Al-Zahra)",
          "role": "Nazra & Qaida Student (UK)",
          "quote": "Finding teachers who could keep my young son engaged while teaching proper Makharij was tough until we joined Noor Ul Huda Online Quran Academy. His teacher is patient, encouraging, and gives undivided attention."
        },
        "fatima": {
          "author": "Zainab & Ayesha (Parent: Tariq Mahmood)",
          "role": "Hifz & Islamic Studies (USA)",
          "quote": "Having flexible weekend and evening slots with certified female Quran tutors made all the difference for my daughters. Their Tajweed rules and love for Surah memorization blossomed rapidly."
        }
      }
    },
    "contact": {
      "title": "Get In Touch With Us",
      "subtitle": "Have questions about classes, teachers, or custom schedules? Our team is available 24/7.",
      "infoTitle": "Contact Information",
      "infoDesc": "Have questions about courses, schedules, or our trial program? Reach out to us through any of these channels.",
      "phoneLabel": "Phone & WhatsApp",
      "emailLabel": "Official Email",
      "addressLabel": "Academy Location",
      "hoursLabel": "Academic Hours",
      "campusLabel": "Global Digital Campus",
      "followLabel": "Follow Us Online",
      "formTitle": "Send Us a Direct Message",
      "formSubtitle": "Fill out this quick form and our admissions team will respond within a few hours.",
      "nameLabel": "Full Name",
      "fullNameLabel": "Full Name",
      "emailInputLabel": "Email Address",
      "phoneInputLabel": "WhatsApp / Phone Number",
      "courseLabel": "Interested Course",
      "messageLabel": "Your Message or Inquiries",
      "messagePlaceholder": "Please tell us about student age, current Quran level, and any scheduling preferences...",
      "sendBtn": "Send Message",
      "sending": "Sending...",
      "successMsg": "Thank you! Your inquiry has been received. We will contact you via WhatsApp/Email shortly."
    },
    "trialModal": {
      "title": "Book Your Free 3-Day Trial Class",
      "subtitle": "Experience live 1-on-1 personalized Quran learning with no commitment.",
      "fullName": "Student / Parent Name",
      "email": "Email Address",
      "whatsapp": "WhatsApp Number (with country code)",
      "course": "Select Desired Course",
      "ageGroup": "Student Age Group",
      "preferredTime": "Preferred Time Slot",
      "submit": "Confirm Free Trial Booking",
      "close": "Close",
      "successTitle": "Free Trial Requested Successfully!",
      "successDesc": "Our coordinator will reach out to you via WhatsApp within a few hours to arrange your first class.",
      "noCardNeeded": "100% Free • No Credit Card Required • Male & Female Tutors"
    },
    "library": {
      "exploreBtn": "Explore Digital Library Resources",
      "hideBtn": "Hide Islamic Library Resources"
    },
    "payment": {
      "viewBtn": "View Accepted Payment Methods",
      "hideBtn": "Hide Payment Methods",
      "tag": "Verified Islamic Banking & Global Checkout",
      "title": "Fee Payment & Official",
      "titleHighlight": "Bank Details",
      "subtitle": "Easily pay monthly tuition via our official Meezan Bank account in Pakistan, secure Visa / Mastercard card payment, or RAAST / EasyPaisa / JazzCash.",
      "officialBankBadge": "Official Academy Bank Account",
      "officialBankTitle": "Meezan Bank - Direct Transfer / IBFT",
      "officialBankSubtitle": "Transfer directly using any Pakistani banking app, ATM, RAAST, 1Link, or international SWIFT wire.",
      "bankNameLabel": "Bank Name",
      "branchLabel": "Branch / Centre",
      "accountTitleLabel": "Account Title",
      "accountNumberLabel": "Account Number",
      "ibanLabel": "IBAN (International Bank Account Number)",
      "copyAcc": "Copy Account No",
      "copyIban": "Copy IBAN",
      "copyAll": "Copy All Bank Details",
      "copyAllDone": "All Details Copied!",
      "copyAccNumber": "Copy to Clipboard",
      "copied": "Copied!",
      "swiftLabel": "SWIFT / BIC Code",
      "raastLabel": "RAAST ID (Instant Free Transfer)",
      "mobileWalletsTitle": "EasyPaisa & JazzCash Direct Transfer",
      "mobileWalletsSubtitle": "Instant local transfers in Pakistan directly via mobile wallet",
      "faqTag": "Payment & Billing FAQ",
      "faqTitle": "Frequently Asked",
      "faqSubtitle": "Clear answers about payment confirmation, refund policies, currency conversion, and scheduling flexibility.",
      "sendReceiptWhatsapp": "Send Payment Receipt on WhatsApp",
      "whatsappVerificationNote": "After completing the transfer, kindly share your transaction screenshot or reference number with our billing coordinator for immediate confirmation.",
      "shariahBadge": "100% Shariah Compliant",
      "instantTransferBadge": "RAAST & 1Link Instant Verification",
      "workflowTitle": "How Payment Works at Noor Ul Huda",
      "workflowSubtitle": "Transparent, simple, and safe four-step tuition enrollment process",
      "instructionsTitle": "Payment Instructions"
    },
    "footer": {
      "description": "Noor Ul Huda Online Quran Academy is an international online Quran institute dedicated to teaching the Holy Quran with proper Tajweed, Hifz, and Islamic studies to students of all ages across the globe.",
      "aboutText": "Dedicated to providing quality Quranic and Islamic education through authentic, one-on-one virtual classrooms worldwide.",
      "quickLinks": "Quick Links",
      "coursesTitle": "Our Courses",
      "contactInfo": "Contact Information",
      "allRightsReserved": "All rights reserved.",
      "motto": "Start Where You Are. Grow From There.",
      "privacy": "Privacy Policy",
      "terms": "Terms of Service",
      "copyright": "Noor Ul Huda Online Quran Academy"
    }
  },
  "ur": {
    "topBar": {
      "freeTrial": "3 روزہ مفت ٹرائل حاصل کریں"
    },
    "theme": {
      "darkMode": "ڈارک موڈ",
      "lightMode": "لائٹ موڈ",
      "toggleTitle": "ڈارک / لائٹ موڈ تبدیل کریں"
    },
    "nav": {
      "home": "صفحہ اول",
      "about": "ہمارے متعلق",
      "courses": "کورسز",
      "whyChooseUs": "ہمیں کیوں منتخب کریں",
      "teachers": "اساتذہ کرام",
      "pricing": "فیس پلانز",
      "payment": "طریقہ ادائیگی",
      "testimonials": "آراء و تاثرات",
      "contact": "رابطہ کریں",
      "bookFreeTrial": "مفت ٹرائل بک کریں"
    },
    "hero": {
      "motto": "جہاں ہیں وہیں سے شروع کریں، اور آگے بڑھتے رہیں۔",
      "headlinePart1": "مستند و تجربہ کار اساتذہ کے ساتھ آن لائن",
      "headlinePart2": "قرآن پاک سیکھیں",
      "subtitle": "بچوں اور بڑوں کے لیے ون آن ون انفرادی کلاسز۔ درست تجوید کے ساتھ تلاوتِ قرآن، منظم حفظ اور مسنون دعائیں اپنے پسندیدہ وقت پر گھر بیٹھے سیکھیں۔",
      "ctaCourses": "آن لائن قرآن کورسز",
      "ctaTrial": "3 دن کا مفت ٹرائل بک کریں",
      "chatWhatsapp": "واٹس ایپ پر رابطہ کریں:",
      "cycle1": "قرآن سیکھیں",
      "cycle2": "مفہوم سمجھیں",
      "cycle3": "تجوید کی مشق",
      "cycle4": "مسنون دعائیں",
      "cycle5": "تعلیمات پر عمل"
    },
    "threeSteps": {
      "title": "صرف 3 آسان مراحل میں قرآن پاک سیکھنا شروع کریں",
      "step1Title": "آسان آن لائن رجسٹریشن",
      "step1Desc": "مطلوبہ معلومات فراہم کرنے کے بعد آپ کے داخلے کا عمل فوری طور پر مکمل ہو جائے گا۔",
      "step2Title": "مفت ٹرائل کلاس کا وقت منتخب کریں",
      "step2Desc": "درخواست موصول ہوتے ہی ہماری ٹیم آپ کے پسندیدہ وقت کے مطابق مفت ٹرائل کلاس شیڈول کرے گی۔",
      "step3Title": "ہمارے ساتھ تعلیمی سفر کا آغاز کریں",
      "step3Desc": "فراہم کردہ لاگ ان کی مدد سے اپنی پہلی کلاس میں شامل ہوں اور باقاعدہ سیکھنا شروع کریں۔",
      "ctaEnroll": "ابھی اپنا داخلہ کروائیں",
      "tag1": "فوری فارم",
      "tag2": "مرضی کا وقت",
      "tag3": "فوری آغاز"
    },
    "courses": {
      "title": "اپنے بچے کے لیے صحیح کورس چنیں — قاعدہ سے حفظ تک",
      "subtitle": "ہر کورس ون ٹو ون ہے، سند یافتہ مرد یا خاتون استاد کے ساتھ، آپ کے اپنے ٹائم زون میں۔ مفت ٹرائل سے شروع کریں، اور ہر ہفتے واٹس ایپ رپورٹ سے اپنے بچے کی ترقی دیکھیں۔",
      "enrollNow": "داخلہ لیں",
      "viewDetails": "تفصیلات دیکھیں",
      "exploreAll": "تمام کورسز دیکھیں",
      "closeModal": "بند کریں"
    },
    "whyChooseUs": {
      "title": "والدین ہمیں کیوں منتخب کرتے ہیں؟",
      "subtitle": "ایک استاد، ایک بچہ، آپ کے خاندان کے وقت پر — اور ہفتہ وار واٹس ایپ پیشرفت رپورٹ، تاکہ آپ بچے کی قرآنی ترقی خود دیکھ سکیں، اندازہ نہ لگانا پڑے۔",
      "ctaDemo": "آج ہی اپنا مفت ڈیمو بک کریں",
      "stats": {
        "courses": "کورسز",
        "coursesDesc": "نورانی قاعدہ سے لے کر اعلیٰ تجوید اور حفظ القرآن تک مکمل رہنمائی",
        "experience": "سالہ تعلیمی تجربہ",
        "experienceDesc": "شاندار تعلیمی ریکارڈ اور انفرادی توجہ کے ساتھ تدریس",
        "tutors": "مستند اساتذہ",
        "tutorsDesc": "مستند اور تجربہ کار مرد اور خواتین قراء و معلمات",
        "world": "دنیا بھر میں",
        "worldDesc": "امریکہ، برطانیہ، کینیڈا، آسٹریلیا اور دنیا کے تمام ممالک میں خدمات",
        "verified": "تصدیق شدہ",
        "worldwide": "عالمی سطح پر"
      },
      "features": {
        "freeTrial": {
          "title": "مفت ٹرائل",
          "subtitle": "بغیر کسی فیس کے آزمائشی کلاس لیں"
        },
        "qaida": {
          "title": "نورانی قاعدہ",
          "subtitle": "حروف اور اعراب کی مضبوط بنیاد"
        },
        "quranReading": {
          "title": "ناظرہ قرآن",
          "subtitle": "روانی اور اعتماد کے ساتھ تلاوت"
        },
        "tajweed": {
          "title": "تجوید القرآن",
          "subtitle": "مخارج اور صفات کی مکمل درستگی"
        },
        "hifz": {
          "title": "حفظ القرآن",
          "subtitle": "منظم اور آسان حفظ کا طریقہ کار"
        }
      }
    },
    "teachers": {
      "title": "ہمارے مستند اور سند یافتہ اساتذہ",
      "subtitle": "معروف اسلامی یونیورسٹیوں کے فارغ التحصیل اور تجوید و قرآت کی مستند اسناد کے حامل۔",
      "scheduleBtn": "استاد کے ساتھ کلاس بک کریں",
      "teachers": {
        "sheikhSalman": {
          "name": "الشیخ سلمان الازہری",
          "role": "سینئر تجوید و قراءت انسٹرکٹر",
          "bio": "جامعہ الازہر کے سند یافتہ قاری، جنہیں حفظ اور تجوید سکھانے کا بارہ سالہ تجربہ ہے۔"
        },
        "qariSafeer": {
          "name": "قاری محمد سفیر",
          "role": "حفظ القرآن اسپیشلسٹ",
          "bio": "سند یافتہ حافظ قرآن، بچوں کو ترتیل اور روانگی کے ساتھ حفظ کروانے میں ماہر۔"
        },
        "qariAbdulSamad": {
          "name": "استاذہ فاطمہ زہراء",
          "role": "خواتین و بچوں کی معلمہ",
          "bio": "بہنوں اور کمسن بچوں کے لیے مشفق اور صابر معلمہ۔"
        }
      }
    },
    "pricing": {
      "title": "اپنا تعلیمی پلان منتخب کریں",
      "subtitle": "تمام پلانز میں کوالیفائیڈ اساتذہ کے ساتھ ون آن ون کلاسز اور لچکدار اوقات شامل ہیں",
      "monthly": "/ماہانہ",
      "mostPopular": "سب سے مقبول",
      "save": "بچت کریں",
      "getStarted": "شروع کریں",
      "savingsTitle": "دیکھیں آپ کتنی بچت کر سکتے ہیں",
      "savingsSubtitle": "ہر خاندان کے بجٹ کے مطابق مناسب اور کفایتی پیکیجز",
      "monthlySavings": "ماہانہ بچت",
      "annualSavings": "سالانہ بچت",
      "familyDiscount": "فیملی رعایت"
    },
    "about": {
      "title": "نور الہدیٰ آن لائن قران اکیڈمی کا تعارف",
      "subtitle": "قرآن حکیم کے نور سے دلوں کو منور کرنے کا ایک عالمی مرکز۔",
      "missionTitle": "ہمارا مشن",
      "missionP1": "دنیا بھر کے مسلمانوں کے لیے مستند، معیاری اور آسان قرآنی تعلیم کی فراہمی۔",
      "missionP2": "مستند اور سند یافتہ اساتذہ کرام کے ساتھ انفرادی 1-آن-1 کلاسز اور جدید ترین تعلیمی نظام۔",
      "visionTitle": "ہمارا وژن",
      "visionP1": "صحیح مخارج، تجوید اور اسلامی اقدار کے ساتھ قرآن کی تلاوت اور فہم کو عام کرنا۔",
      "visionP2": "ہر بچے اور بڑے کے دل میں کلام الہی کی محبت اور اطاعت کو پروان چڑھانا۔",
      "historyTitle": "ہماری تاریخ",
      "historyText": "خالص نیت اور اخلاص کے ساتھ آن لائن قرآنی تعلیم کا آغاز۔",
      "approachTitle": "ہمارا طریقہ کار",
      "approachText": "ہر طالب علم کی انفرادی صلاحیت کے مطابق مشفقانہ اور معیاری تدریس۔",
      "commitmentTitle": "ہمارا عزم",
      "commitmentText": "تجوید کی باریکیوں اور اسلامی اخلاق کی پختہ تربیت کا مستقل عزم۔",
      "learnMoreBtn": "مفت ٹرائل کلاس بک کریں"
    },
    "testimonials": {
      "title": "ہمارے طلباء اور والدین کی آراء",
      "subtitle": "جانئے کہ دنیا بھر سے ہمارے طلباء اور والدین ہمارے تدریسی معیار کے بارے میں کیا کہتے ہیں۔",
      "showcaseTitle": "طلباء کی لائیو تعلیمی جھلکیاں",
      "showcaseSubtitle": "دنیا بھر کے مختلف ممالک سے ہمارے طلباء کی آن لائن ون آن ون کلاسز کا عملی منظر۔",
      "items": {
        "ahmed": {
          "author": "محمد علی",
          "role": "آن لائن تجوید و قرآن کے طالب علم",
          "quote": "میں نور الہدیٰ آن لائن قران اکیڈمی سے ایک سال سے پڑھ رہا ہوں۔ میرے استاد نہ صرف بہت صابر اور با علم ہیں بلکہ میری تلاوت کی روزانہ اصلاح کرتے ہیں۔"
        },
        "sarah": {
          "author": "حسن کے والد (فاطمہ الزہراء)",
          "role": "ناظرہ و قاعدہ کے طالب علم (برطانیہ)",
          "quote": "میرے چھوٹے بیٹے کو دلچسپی کے ساتھ مخارج سکھانا بہت مشکل کام تھا لیکن یہاں کے استاد نے نہایت پیار اور توجہ سے اسے بہت جلد روانی سے پڑھنا سکھا دیا۔"
        },
        "fatima": {
          "author": "زینب اور عائشہ (والد: طارق محمود)",
          "role": "حفظ و اسلامیات کی طالبات (امریکہ)",
          "quote": "مستند معلمات (خواتین اساتذہ) کی زیرِ نگرانی میری بیٹیوں نے تجوید اور سورتوں کے حفظ میں بہترین کارکردگی کا مظاہرہ کیا۔ ہم بے حد مطمئن ہیں۔"
        }
      }
    },
    "contact": {
      "title": "ہم سے رابطہ کریں",
      "subtitle": "کلاسز، اوقات یا کسی بھی سوال کے لیے ہماری ٹیم 24 گھنٹے آپ کی خدمت کے لیے حاضر ہے۔",
      "infoTitle": "رابطے کی معلومات",
      "infoDesc": "کورسز، کلاس اوقات یا ٹرائل پروگرام کے حوالے سے ہم سے ان ذرائع پر رابطہ کر سکتے ہیں۔",
      "phoneLabel": "فون اور واٹس ایپ",
      "emailLabel": "سرکاری ای میل",
      "addressLabel": "اکیڈمی کا پتہ",
      "hoursLabel": "کلاسوں کے اوقات",
      "campusLabel": "عالمی ڈیجیٹل کیمپس",
      "followLabel": "ہمیں سوشل میڈیا پر فالو کریں",
      "formTitle": "ہمیں براہ راست پیغام بھیجیں",
      "formSubtitle": "نیچے دیا گیا فارم پُر کریں، ہماری ٹیم چند ہی گھنٹوں میں آپ کو جواب دے گی۔",
      "nameLabel": "پورا نام",
      "fullNameLabel": "پورا نام",
      "emailInputLabel": "ای میل ایڈریس",
      "phoneInputLabel": "واٹس ایپ / موبائل نمبر",
      "courseLabel": "پسندیدہ کورس",
      "messageLabel": "آپ کا پیغام یا سوالات",
      "messagePlaceholder": "طالب علم کی عمر، موجودہ تعلیمی معیار اور وقت کے متعلق آگاہ فرمائیں...",
      "sendBtn": "پیغام بھیجیں",
      "sending": "ارسال کیا جا رہا ہے...",
      "successMsg": "شکریہ! آپ کا پیغام موصول ہو چکا ہے۔ ہماری ٹیم جلد آپ سے واٹس ایپ یا ای میل پر رابطہ کرے گی۔"
    },
    "trialModal": {
      "title": "3 دن کا مفت ٹرائل بک کریں",
      "subtitle": "بغیر کسی معاوضے اور بغیر کسی پیشگی فیس کے ون آن ون لائیو کلاس کا تجربہ کریں۔",
      "fullName": "طالب علم یا سرپرست کا نام",
      "email": "ای میل ایڈریس",
      "whatsapp": "واٹس ایپ نمبر (ملکی کوڈ کے ساتھ)",
      "course": "مطلوبہ کورس کا انتخاب",
      "ageGroup": "طالب علم کی عمر",
      "preferredTime": "پسندیدہ وقت",
      "submit": "مفت ٹرائل بک کریں",
      "close": "بند کریں",
      "successTitle": "مفت ٹرائل کی درخواست موصول ہوگئی!",
      "successDesc": "ہمارا نمائندہ کلاس کا وقت طے کرنے کے لیے جلد آپ سے واٹس ایپ پر رابطہ کرے گا۔",
      "noCardNeeded": "100% مفت • کسی کریڈٹ کارڈ کی ضرورت نہیں • مرد اور خواتین اساتذہ"
    },
    "library": {
      "exploreBtn": "ڈیجیٹل اسلامک لائبریری وسائل دیکھیں",
      "hideBtn": "اسلامک لائبریری وسائل چھپائیں"
    },
    "payment": {
      "viewBtn": "ادائیگی کے تمام طریقے دیکھیں",
      "hideBtn": "ادائیگی کے طریقے چھپائیں",
      "tag": "مستند اسلامی بینکنگ اور عالمی ادائیگی",
      "title": "فیس کی ادائیگی اور سرکاری",
      "titleHighlight": "بینک اکاؤنٹ کی تفصیلات",
      "subtitle": "آپ پاکستان میں ہمارے آفیشل میزان بینک اکاؤنٹ میں باآسانی فیس جمع کروا سکتے ہیں، نیز Visa / Mastercard کارڈ یا RAAST / ایزی پیسہ / جاز کیش کے ذریعے بھی ادائیگی ممکن ہے۔",
      "officialBankBadge": "اکیڈمی کا سرکاری بینک اکاؤنٹ",
      "officialBankTitle": "میزان بینک - براہ راست اکاؤنٹ ٹرانسفر / IBFT",
      "officialBankSubtitle": "پاکستان کی کسی بھی بینکنگ ایپ، ایزی پیسہ، جاز کیش، RAAST، 1Link، یا بین الاقوامی وائر ٹرانسفر سے رقم منتقل کریں۔",
      "bankNameLabel": "بینک کا نام",
      "branchLabel": "برانچ / سینٹر",
      "accountTitleLabel": "اکاؤنٹ کا عنوان (ٹائٹل)",
      "accountNumberLabel": "اکاؤنٹ نمبر",
      "ibanLabel": "IBAN (بین الاقوامی بینک اکاؤنٹ نمبر)",
      "copyAcc": "اکاؤنٹ نمبر کاپی کریں",
      "copyIban": "IBAN کاپی کریں",
      "copyAll": "بینک کی تمام تفصیلات کاپی کریں",
      "copyAllDone": "تمام تفصیلات کاپی ہو گئیں!",
      "copyAccNumber": "کاپی کریں",
      "copied": "کاپی ہو گیا!",
      "swiftLabel": "SWIFT / BIC کوڈ",
      "raastLabel": "راست (RAAST) آئی ڈی (فوری مفت ٹرانسفر)",
      "mobileWalletsTitle": "ایزی پیسہ اور جاز کیش براہ راست ٹرانسفر",
      "mobileWalletsSubtitle": "پاکستان میں موبائل والٹ کے ذریعے فوری اور آسان فیس کی ادائیگی",
      "faqTag": "فیس اور ادائیگی سے متعلق سوالات",
      "faqTitle": "اکثر پوچھے گئے سوالات",
      "faqSubtitle": "فیس کی تصدیق، ریفنڈ پالیسی، کرنسی کے تبادلے اور کلاسز کے شیڈول سے متعلق اہم جوابات۔",
      "sendReceiptWhatsapp": "واٹس ایپ پر رسید ارسال کریں",
      "whatsappVerificationNote": "رقم منتقلی کے بعد فوری تصدیق اور کلاسز کے شیڈول کے لیے رسید کا اسکرین شاٹ ہمارے واٹس ایپ پر ارسال فرمائیں۔",
      "shariahBadge": "100% شریعہ کے مطابق اسلامی بینکنگ",
      "instantTransferBadge": "RAAST اور 1Link فوری تصدیق",
      "workflowTitle": "نور الہدیٰ اکیڈمی میں فیس ادائیگی کا آسان طریقہ",
      "workflowSubtitle": "شفاف، محفوظ اور مرحلہ وار چار قدمی طریقہ کار",
      "instructionsTitle": "ادائیگی کی ہدایات"
    },
    "footer": {
      "description": "نور الہدیٰ آن لائن قران اکیڈمی ایک بین الاقوامی آن لائن ادارہ ہے جو درست تجوید، حفظ القرآن اور بنیادی اسلامی علوم کی تدریس کے لیے دنیا بھر میں خدمات پیش کر رہا ہے۔",
      "aboutText": "دنیا بھر میں اعلیٰ درجے کے ون آن ون ورچوئل کلاس رومز کے ذریعے مستند قرآنی و اسلامی تعلیم کی فراہمی کے لیے وقف۔",
      "quickLinks": "فوری لنکس",
      "coursesTitle": "ہمارے کورسز",
      "contactInfo": "رابطے کی معلومات",
      "allRightsReserved": "تمام حقوق محفوظ ہیں۔",
      "motto": "جہاں ہیں وہیں سے شروع کریں، اور آگے بڑھتے رہیں۔",
      "privacy": "رازداری کی پالیسی",
      "terms": "شرائط و ضوابط",
      "copyright": "نور الہدیٰ آن لائن قران اکیڈمی"
    }
  },
  "ar": {
    "nav": {
      "home": "الرئيسية",
      "about": "من نحن",
      "courses": "الدورات التعليمية",
      "whyChooseUs": "لماذا تختارنا",
      "teachers": "المعلمون المجازون",
      "pricing": "الخطط والرسوم",
      "payment": "طرق الدفع",
      "testimonials": "آراء الطلاب",
      "contact": "اتصل بنا",
      "bookFreeTrial": "احجز تجربة مجانية"
    },
    "topBar": {
      "freeTrial": "احجز 3 أيام تجربة مجانية"
    },
    "about": {
      "title": "عن أكاديمية نور الهدى لتعليم القرآن الكريم",
      "subtitle": "إنارة القلوب بنور القرآن الكريم في جميع أنحاء العالم.",
      "missionTitle": "رسالتنا التعليمية",
      "missionP1": "تقديم تعليم قرآني وإسلامي متميز وميسر للأسر المسلمة في كافة الدول.",
      "missionP2": "مع نخبة من المعلمين والمعلمات المجازين في القراءات عبر فصول فردية تفاعلية.",
      "visionTitle": "رؤيتنا المستقبلية",
      "visionP1": "تخريج جيل متقن لتلاوة القرآن الكريم بأحكام التجويد متخلق بأخلاق الإسلام.",
      "visionP2": "ربط النشء بكتاب الله تعالى تلاوةً وفهماً وعملاً.",
      "historyTitle": "مسيرتنا",
      "historyText": "تأسست الأكاديمية لخدمة كتاب الله وتيسير تعليمه للمسلمين حول العالم.",
      "approachTitle": "منهجيتنا",
      "approachText": "دروس فردية مباشرة تراعي الفروق الفردية ومرونة المواعيد.",
      "commitmentTitle": "التزامنا",
      "commitmentText": "الحرص التام على الإتقان وتصحيح التلاوة وتنشئة الطلاب على حب القرآن.",
      "learnMoreBtn": "احجز تجربة مجانية"
    },
    "teachers": {
      "title": "نخبة من خيرة المعلمين والمعلمات المجازين",
      "subtitle": "خريجو كبرى الجامعات الإسلامية وحاملو الإجازات المسندة في قراءات القرآن الكريم.",
      "scheduleBtn": "احجز درساً مع المعلم",
      "teachers": {
        "sheikhSalman": {
          "name": "الشيخ سلمان الأزهري",
          "role": "معلم القراءات والتجويد",
          "bio": "خريج جامعة الأزهر الشريف ومجاز في القراءات العشر مع خبرة تزيد عن 12 عاماً."
        },
        "qariSafeer": {
          "name": "القارئ محمد سفير",
          "role": "أخصائي تحفيظ القرآن الكريم",
          "bio": "حافظ متقن بالسند المتصل، متخصص في مراجعة وتثبيت الحفظ للأطفال والشباب."
        },
        "qariAbdulSamad": {
          "name": "الأستاذة فاطمة الزهراء",
          "role": "معلمة القرآن للأخوات والأطفال",
          "bio": "معلمة متميزة في تدريس القاعدة النورانية والتجويد الميسر للأخوات والناشئة."
        }
      }
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('nuh_language');
    return (saved === 'ur' || saved === 'ar') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('nuh_language', lang);
  };

  const isRtl = language === 'ur' || language === 'ar';
  const isUrdu = language === 'ur';
  const isArabic = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRtl]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isRtl,
        isUrdu,
        isArabic,
        t: { ...translations.en, ...translations[language] }
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
