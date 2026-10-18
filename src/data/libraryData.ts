import { LibraryResource } from '../types';

export const LIBRARY_RESOURCES: LibraryResource[] = [
  {
    id: 'res-qaida-basics',
    title: 'Noorani Qaida Fundamentals & Arabic Alphabet',
    arabicTitle: 'حُرُوفُ الهِجَاءِ وَأَحْكَامُهَا',
    category: 'qaida',
    level: 'Beginner',
    readTime: '5 min read',
    description: 'A structured guide to recognizing, pronouncing, and writing the 29 letters of the Arabic alphabet.',
    keyPoints: [
      '29 Isolated Arabic Letter Forms',
      'Heavy (Musta’liyah) vs Light (Mustafilah) Letters',
      'Basic vowel marks: Fathah, Kasrah, Dammah'
    ],
    recommendedCourseId: 'noorani-qaida'
  },
  {
    id: 'res-tajweed-noon',
    title: 'Rules of Noon Sakinah & Tanween',
    arabicTitle: 'أَحْكَامُ النُّونِ السَّاكِنَةِ وَالتَّنْوِينِ',
    category: 'tajweed',
    level: 'Intermediate',
    readTime: '8 min read',
    description: 'The four essential rules: Izhar (Clarity), Idgham (Merging), Iqlab (Conversion), and Ikhfa (Concealment).',
    keyPoints: [
      'Izhar Halqi: 6 throat letters (Hamzah, Haa, Ayn, Haa, Ghayn, Khaa)',
      'Idgham: Yarmaloon (Yaa, Raa, Meem, Laam, Waw, Noon)',
      'Iqlab: Changing Noon into subtle Meem before Baa',
      'Ikhfa: 15 remaining letters with nasal Ghunnah'
    ],
    recommendedCourseId: 'tajweed-ul-quran'
  },
  {
    id: 'res-daily-duas',
    title: 'Essential Masnoon Duas for Day & Night',
    arabicTitle: 'الأَدْعِيَةُ وَالأَذْكَارُ المَأْثُورَة',
    category: 'duas',
    level: 'All Levels',
    readTime: '6 min read',
    description: 'Prophetic supplications for morning and evening, before eating, entering the home, and before sleeping.',
    keyPoints: [
      'Morning and Evening Adhkar for Divine Protection',
      'Duas before sleep and upon awakening',
      'Etiquette of making sincere Dua'
    ],
    recommendedCourseId: 'masnoon-duas'
  },
  {
    id: 'res-surah-fatiha',
    title: 'Tafsir & Tajweed of Surah Al-Fatihah',
    arabicTitle: 'تَفْسِيرُ وَتَجْوِيدُ سُورَةِ الفَاتِحَةِ',
    category: 'surahs',
    level: 'Foundational',
    readTime: '7 min read',
    description: 'Deep dive into the Seven Oft-Repeated Verses: spiritual meaning and precise Tajweed pronunciation.',
    keyPoints: [
      'Pronouncing the letter Dhad (ض) in "Walad-Dallin"',
      'Madd Lazim 6 Harakah count on Dallin',
      'The covenant of worship and seeking assistance'
    ],
    recommendedCourseId: 'quran-translation'
  },
  {
    id: 'res-salah-guide',
    title: 'Step-by-Step Practical Salah & Purification Guide',
    arabicTitle: 'صِفَةُ الصَّلَاةِ وَالوُضُوءِ',
    category: 'salah',
    level: 'Beginner / Revert',
    readTime: '10 min read',
    description: 'Complete visual and textual breakdown of performing Wudu and the 5 daily obligatory prayers.',
    keyPoints: [
      'Fardh and Sunnah steps of Wudu',
      'Positions: Takbeer, Qiyam, Ruku, Sujood, Tashahhud',
      'Arabic recitations with English translations'
    ],
    recommendedCourseId: 'new-muslim'
  }
];
