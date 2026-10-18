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
