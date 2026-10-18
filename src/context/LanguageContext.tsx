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
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      courses: 'Our Courses',
      whyChooseUs: 'Why Choose Us',
      teachers: 'Teachers',
      pricing: 'Pricing Plans',
      payment: 'Payment Methods',
      testimonials: 'Testimonials',
      contact: 'Contact Us',
      bookFreeTrial: 'Book Free Trial'
    },
    topBar: {
      freeTrial: 'Book 3-Day Free Trial'
    },
    about: {
      title: 'About Noor Ul Huda Online Quran Academy',
      subtitle: 'Nurturing hearts with the divine light of the Holy Quran worldwide.',
      missionTitle: 'Our Sacred Mission',
      missionP1: 'To provide high-caliber, accessible, and structured Quranic and Islamic education to Muslim families across all continents.',
      missionP2: 'With certified male and female scholars, individualized 1-on-1 pacing, and modern interactive virtual classrooms.',
      visionTitle: 'Our Noble Vision',
      visionP1: 'Building a generation grounded in beautiful Tajweed recitation, profound understanding, and living prophetic character.',
      visionP2: 'Enabling every child, youth, adult, and new Muslim to establish an unbroken bond with the Holy Book of Allah.',
      historyTitle: 'Our History',
      historyText: 'Founded with a pure intention to make authentic Quranic education accessible to Muslims worldwide with certified scholars.',
      approachTitle: 'Our Approach',
      approachText: 'Personalized 1-on-1 live interactive sessions designed around each student’s unique pace, learning style, and schedule.',
      commitmentTitle: 'Our Commitment',
      commitmentText: 'Dedicated to preserving Tajweed precision, fostering Islamic values, and providing unwavering mentorship for all ages.',
      learnMoreBtn: 'Book Free 3-Day Trial'
    },
    teachers: {
      title: 'Our Qualified Teachers & Scholars',
      subtitle: 'Graduates of renowned Islamic universities holding authentic Ijazah in Quran recitation.',
      scheduleBtn: 'Book Class with Teacher',
      teachers: {
        sheikhSalman: {
          name: 'Sheikh Salman Al-Azhari',
          role: 'Senior Tajweed & Qira’at Instructor',
          bio: 'Graduate of Al-Azhar University holding Ijazah in Hafs ‘an ‘Asim. Over 12 years of experience teaching students worldwide.'
        },
        qariSafeer: {
          name: 'Qari Muhammad Safeer',
          role: 'Quran Memorization (Hifz) Specialist',
          bio: 'Certified Hafiz with Sanad. Expert in helping children and youth build strong retention cycles and beautiful Tartil recitation.'
        },
        qariAbdulSamad: {
          name: 'Ustadhah Fatima Zahra',
          role: 'Female Quran & Tajweed Mentor',
          bio: 'Dedicated scholar guiding sisters, children, and beginners with patience, empathy, and structured pronunciation exercises.'
        }
      }
    }
  },
  ur: {
    nav: {
      home: 'صفحہ اول',
      about: 'ہمارے متعلق',
      courses: 'کورسز',
      whyChooseUs: 'ہمیں کیوں منتخب کریں',
      teachers: 'اساتذہ کرام',
      pricing: 'فیس پلانز',
      payment: 'طریقہ ادائیگی',
      testimonials: 'آراء و تاثرات',
      contact: 'رابطہ کریں',
      bookFreeTrial: 'مفت ٹرائل بک کریں'
    },
    topBar: {
      freeTrial: '3 روزہ مفت ٹرائل حاصل کریں'
    },
    about: {
      title: 'نور الہدیٰ آن لائن قران اکیڈمی کا تعارف',
      subtitle: 'قرآن حکیم کے نور سے دلوں کو منور کرنے کا ایک عالمی مرکز۔',
      missionTitle: 'ہمارا مشن',
      missionP1: 'دنیا بھر کے مسلمانوں کے لیے مستند، معیاری اور آسان قرآنی تعلیم کی فراہمی۔',
      missionP2: 'مستند اور سند یافتہ اساتذہ کرام کے ساتھ انفرادی 1-آن-1 کلاسز اور جدید ترین تعلیمی نظام۔',
      visionTitle: 'ہمارا وژن',
      visionP1: 'صحیح مخارج، تجوید اور اسلامی اقدار کے ساتھ قرآن کی تلاوت اور فہم کو عام کرنا۔',
      visionP2: 'ہر بچے اور بڑے کے دل میں کلام الہی کی محبت اور اطاعت کو پروان چڑھانا۔',
      historyTitle: 'ہماری تاریخ',
      historyText: 'خالص نیت اور اخلاص کے ساتھ آن لائن قرآنی تعلیم کا آغاز۔',
      approachTitle: 'ہمارا طریقہ کار',
      approachText: 'ہر طالب علم کی انفرادی صلاحیت کے مطابق مشفقانہ اور معیاری تدریس۔',
      commitmentTitle: 'ہمارا عزم',
      commitmentText: 'تجوید کی باریکیوں اور اسلامی اخلاق کی پختہ تربیت کا مستقل عزم۔',
      learnMoreBtn: 'مفت ٹرائل کلاس بک کریں'
    },
    teachers: {
      title: 'ہمارے مستند اور سند یافتہ اساتذہ',
      subtitle: 'معروف اسلامی یونیورسٹیوں کے فارغ التحصیل اور تجوید و قرآت کی مستند اسناد کے حامل۔',
      scheduleBtn: 'استاد کے ساتھ کلاس بک کریں',
      teachers: {
        sheikhSalman: {
          name: 'الشیخ سلمان الازہری',
          role: 'سینئر تجوید و قراءت انسٹرکٹر',
          bio: 'جامعہ الازہر کے سند یافتہ قاری، جنہیں حفظ اور تجوید سکھانے کا بارہ سالہ تجربہ ہے۔'
        },
        qariSafeer: {
          name: 'قاری محمد سفیر',
          role: 'حفظ القرآن اسپیشلسٹ',
          bio: 'سند یافتہ حافظ قرآن، بچوں کو ترتیل اور روانگی کے ساتھ حفظ کروانے میں ماہر۔'
        },
        qariAbdulSamad: {
          name: 'استاذہ فاطمہ زہراء',
          role: 'خواتین و بچوں کی معلمہ',
          bio: 'بہنوں اور کمسن بچوں کے لیے مشفق اور صابر معلمہ۔'
        }
      }
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      courses: 'الدورات التعليمية',
      whyChooseUs: 'لماذا تختارنا',
      teachers: 'المعلمون المجازون',
      pricing: 'الخطط والرسوم',
      payment: 'طرق الدفع',
      testimonials: 'آراء الطلاب',
      contact: 'اتصل بنا',
      bookFreeTrial: 'احجز تجربة مجانية'
    },
    topBar: {
      freeTrial: 'احجز 3 أيام تجربة مجانية'
    },
    about: {
      title: 'عن أكاديمية نور الهدى لتعليم القرآن الكريم',
      subtitle: 'إنارة القلوب بنور القرآن الكريم في جميع أنحاء العالم.',
      missionTitle: 'رسالتنا التعليمية',
      missionP1: 'تقديم تعليم قرآني وإسلامي متميز وميسر للأسر المسلمة في كافة الدول.',
      missionP2: 'مع نخبة من المعلمين والمعلمات المجازين في القراءات عبر فصول فردية تفاعلية.',
      visionTitle: 'رؤيتنا المستقبلية',
      visionP1: 'تخريج جيل متقن لتلاوة القرآن الكريم بأحكام التجويد متخلق بأخلاق الإسلام.',
      visionP2: 'ربط النشء بكتاب الله تعالى تلاوةً وفهماً وعملاً.',
      historyTitle: 'مسيرتنا',
      historyText: 'تأسست الأكاديمية لخدمة كتاب الله وتيسير تعليمه للمسلمين حول العالم.',
      approachTitle: 'منهجيتنا',
      approachText: 'دروس فردية مباشرة تراعي الفروق الفردية ومرونة المواعيد.',
      commitmentTitle: 'التزامنا',
      commitmentText: 'الحرص التام على الإتقان وتصحيح التلاوة وتنشئة الطلاب على حب القرآن.',
      learnMoreBtn: 'احجز تجربة مجانية'
    },
    teachers: {
      title: 'نخبة من خيرة المعلمين والمعلمات المجازين',
      subtitle: 'خريجو كبرى الجامعات الإسلامية وحاملو الإجازات المسندة في قراءات القرآن الكريم.',
      scheduleBtn: 'احجز درساً مع المعلم',
      teachers: {
        sheikhSalman: {
          name: 'الشيخ سلمان الأزهري',
          role: 'معلم القراءات والتجويد',
          bio: 'خريج جامعة الأزهر الشريف ومجاز في القراءات العشر مع خبرة تزيد عن 12 عاماً.'
        },
        qariSafeer: {
          name: 'القارئ محمد سفير',
          role: 'أخصائي تحفيظ القرآن الكريم',
          bio: 'حافظ متقن بالسند المتصل، متخصص في مراجعة وتثبيت الحفظ للأطفال والشباب.'
        },
        qariAbdulSamad: {
          name: 'الأستاذة فاطمة الزهراء',
          role: 'معلمة القرآن للأخوات والأطفال',
          bio: 'معلمة متميزة في تدريس القاعدة النورانية والتجويد الميسر للأخوات والناشئة.'
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
        t: translations[language]
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
