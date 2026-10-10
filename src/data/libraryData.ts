import { LibraryResource } from '../types';

export const LIBRARY_RESOURCES: LibraryResource[] = [
  {
    id: 'noorani-qaida-guide',
    title: 'Noorani Qaida Complete Study Guide',
    arabicTitle: 'القاعدة النورانية',
    category: 'qaida',
    format: 'Interactive Guide',
    badge: 'Core Foundation',
    description: 'The premier classical pedagogical manual for non-Arabic speakers to master individual Arabic letters, joint letters, Harakat (vowels), Sukoon, and basic phonetics.',
    readTime: '15 min overview',
    level: 'Beginner',
    contentSummary: [
      '29 Individual Arabic letters with English phonetic equivalents',
      'Letter transformations: Initial, Medial, and Final connecting forms',
      'Short vowels: Fatha (Zabar), Kasra (Zer), and Damma (Pesh)',
      'Tanween (Double vowels) and Sukoon (Jazm) connecting exercises',
      'Rules of Tashdeed (Shaddah) and elongation (Madd Asli)'
    ],
    fullContent: [
      {
        sectionTitle: 'Lesson 1: The Arabic Alphabet (Huroof Mufradat)',
        description: 'Mastering the 29 isolated letters with precise throat, tongue, and lip articulation.',
        items: [
          {
            arabic: 'ا ب ت ث ج ح خ',
            transliteration: 'Alif, Ba, Ta, Tha, Jeem, Haa, Khaa',
            notes: 'Pay special attention to "Tha" (soft tongue between teeth) versus "Ta", and "Haa" (from mid-throat) versus "Khaa" (top of throat).'
          },
          {
            arabic: 'د ذ ر ز س ش ص ض',
            transliteration: 'Dal, Dhal, Raa, Zaa, Seen, Sheen, Saad, Daad',
            notes: '"Saad" and "Daad" are full-mouth heavy (Mufakhkham) letters, requiring the back of the tongue to rise to the soft palate.'
          },
          {
            arabic: 'ط ظ ع غ ف ق ك ل م ن و هـ ء ي',
            transliteration: 'Taa, Dhaa, Ayn, Ghayn, Faa, Qaaf, Kaaf, Laam, Meem, Noon, Wow, Haa, Hamzah, Yaa',
            notes: '"Ayn" originates from the middle of the throat, distinctly different from "Hamzah" which comes from the deep throat.'
          }
        ]
      },
      {
        sectionTitle: 'Lesson 2: Short Vowels (Al-Harakat)',
        description: 'Vowels are read quickly without dragging or stretching.',
        items: [
          {
            arabic: 'بَ - بِ - بُ',
            transliteration: 'Ba (Fatha) - Bi (Kasra) - Bu (Damma)',
            notes: 'A Fatha sounds like "u" in "cup". Kasra sounds like "i" in "pin". Damma sounds like "oo" in "book".'
          }
        ]
      },
      {
        sectionTitle: 'Lesson 3: Tanween (Nunation) & Sukoon',
        description: 'Tanween produces a hidden noon sound (an, in, un) at the end of a noun.',
        items: [
          {
            arabic: 'بً - بٍ - بٌ',
            transliteration: 'Ban - Bin - Bun',
            notes: 'Practice keeping the sound crisp before transitioning into Tajweed Izhar or Ikhfa.'
          }
        ]
      }
    ]
  },
  {
    id: 'makharij-tajweed-chart',
    title: 'Makharij al-Huroof (Phonetic Articulation Points)',
    arabicTitle: 'مخارج الحروف وصفاتها',
    category: 'tajweed',
    format: 'Cheat Sheet',
    badge: 'Phonetics Essential',
    description: 'A detailed anatomical reference breakdown of the 5 major articulation areas and 17 specific vocal points required to recite the Quran without foreign accent corruption.',
    readTime: '12 min reference',
    level: 'Intermediate',
    contentSummary: [
      'Al-Jawf (Empty throat/mouth cavity): The 3 letters of Madd (ا، و، ي)',
      'Al-Halq (The Throat): 6 letters across lower, middle, and upper regions',
      'Al-Lisaan (The Tongue): 10 specific exit points for 18 letters',
      'Ash-Shafataan (The Lips): 4 letters (Fa, Ba, Meem, Wow)',
      'Al-Khayshoom (The Nasal Cavity): The origin point for Ghunnah'
    ],
    fullContent: [
      {
        sectionTitle: '1. Al-Halq (The Throat Letters - 6 Letters)',
        description: 'Divided into 3 distinct zones where sounds originate.',
        items: [
          {
            title: 'Bottom of Throat (Aqsa al-Halq)',
            arabic: 'ء - هـ',
            transliteration: 'Hamzah (ء) and Haa (هـ)',
            notes: 'Nearest to the chest and vocal cords. Soft and effortless.'
          },
          {
            title: 'Middle of Throat (Wast al-Halq)',
            arabic: 'ع - ح',
            transliteration: 'Ayn (ع) and Haa (ح)',
            notes: 'Constriction of the epiglottis. Haa is clean, breathy, and dry; Ayn is deep and resonant.'
          },
          {
            title: 'Top of Throat (Adna al-Halq)',
            arabic: 'غ - خ',
            transliteration: 'Ghayn (غ) and Khaa (خ)',
            notes: 'Nearest to the mouth. Heavy letters accompanied by a slight friction sound without gargling.'
          }
        ]
      },
      {
        sectionTitle: '2. Al-Lisaan (The Tongue Points - Heavy Letters)',
        description: 'Mastering the letters of Isti\'la (elevation) that require fullness.',
        items: [
          {
            title: 'The Heavy Seven (خص ضغط قظ)',
            arabic: 'خ ص ض غ ط ق ظ',
            transliteration: 'Khaa, Saad, Daad, Ghayn, Taa, Qaaf, Dhaa',
            notes: 'The back of the tongue elevates towards the roof of the mouth, giving the letter a resonant, rich, majestic acoustic quality.'
          }
        ]
      }
    ]
  },
  {
    id: 'rules-of-noon-sakinah',
    title: 'Rules of Nun Sakinah & Tanween',
    arabicTitle: 'أحكام النون الساكنة والتنوين',
    category: 'tajweed',
    format: 'Reference Manual',
    badge: 'Core Tajweed Rule',
    description: 'The four fundamental phonetic transitions in Tajweed: Izhar (Clarity), Idgham (Merging), Iqlab (Conversion), and Ikhfa (Concealment).',
    readTime: '10 min study',
    level: 'Intermediate',
    contentSummary: [
      'Izhar Halqi: Clear articulation before the 6 throat letters',
      'Idgham: Merging with Ghunnah (يَنْمُو) and without Ghunnah (ل، ر)',
      'Iqlab: Turning Nun into Meem before the letter Ba (ب)',
      'Ikhfa Haqiqi: Concealing the Nun sound with 15 remaining letters'
    ],
    fullContent: [
      {
        sectionTitle: '1. Izhar (Clear Pronunciation)',
        description: 'When Nun Sakinah or Tanween is followed by any of the 6 throat letters (ء هـ ع ح غ خ), it is pronounced clearly without extra nasal hum.',
        items: [
          {
            arabic: 'مَنْ ءَامَنَ - أَنْعَمْتَ - مَنْ خَشِيَ',
            transliteration: 'Man aamana - An\'amta - Man khashiya',
            notes: 'Notice the sharp, distinct, natural Nun sound.'
          }
        ]
      },
      {
        sectionTitle: '2. Idgham (Merging into the Next Letter)',
        description: 'Divided into Idgham with Ghunnah (letters: ي ن م و) and Idgham without Ghunnah (letters: ل ر).',
        items: [
          {
            arabic: 'مَن يَقُولُ (With Ghunnah) | مِن رَّبِّهِمْ (Without Ghunnah)',
            transliteration: 'May-yaqool | Mir-rabbihim',
            notes: 'In "Mir-rabbihim", the Nun merges 100% into the Raa with zero nasal sound.'
          }
        ]
      },
      {
        sectionTitle: '3. Iqlab (Conversion)',
        description: 'When followed by the letter Ba (ب), the Nun turns into a hidden Meem with 2 counts of Ghunnah.',
        items: [
          {
            arabic: 'مِنۢ بَعْدِ - أَنۢبِئْهُم',
            transliteration: 'Mim-ba\'di - Ambi\'hum',
            notes: 'Light contact between lips; do not press them forcefully.'
          }
        ]
      }
    ]
  },
  {
    id: 'forty-rabbana-duas',
    title: '40 Rabbana Duas from the Holy Quran',
    arabicTitle: 'أربعون دعاء ربنا من القرآن الكريم',
    category: 'duas',
    format: 'Study Companion',
    badge: 'Spiritual Gems',
    description: 'A curated compilation of the 40 profound supplications beginning with "Rabbana" (Our Lord) revealed in the Holy Quran, with complete Arabic, transliteration, and spiritual commentary.',
    readTime: '20 min reading',
    level: 'All Levels',
    contentSummary: [
      'Duas for guidance, steadfastness, and forgiveness',
      'Duas for righteous family, children, and spouses (Surah Al-Furqan 74)',
      'Duas for relief from hardship, trials, and debts',
      'Duas for success in this world and the Hereafter (Surah Al-Baqarah 201)'
    ],
    fullContent: [
      {
        sectionTitle: 'Core Supplications for Daily Life',
        description: 'Frequently recited supplications from the Holy Quran with translations.',
        items: [
          {
            title: 'Dua for Good in Both Worlds (Surah Al-Baqarah: 201)',
            arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
            transliteration: 'Rabbana aatina fid-dunya hasanatan wa fil-aakhirati hasanatan wa qina \'adhaaban-naar',
            translation: '"Our Lord, give us in this world that which is good and in the Hereafter that which is good and protect us from the punishment of the Fire."',
            notes: 'The most frequent supplication made by Prophet Muhammad ﷺ.'
          },
          {
            title: 'Dua for Steadfast Faith (Surah Ali \'Imran: 8)',
            arabic: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ',
            transliteration: 'Rabbana la tuzigh quloobana ba\'da idh hadaytana wa hab lana mil-ladunka rahmah, innaka antal-Wahhab',
            translation: '"Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower."',
            notes: 'Essential prayer to preserve faith during trials and modern doubts.'
          },
          {
            title: 'Dua for Righteous Family & Offspring (Surah Al-Furqan: 74)',
            arabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
            transliteration: 'Rabbana hab lana min azwajina wa dhurriyyatina qurrata a\'yunin waj\'alna lil-muttaqeena imama',
            translation: '"Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us an example for the righteous."',
            notes: 'Beloved supplication made by parents for their children.'
          }
        ]
      }
    ]
  },
  {
    id: 'morning-evening-adhkar',
    title: 'Morning & Evening Adhkar (Fortress of the Muslim)',
    arabicTitle: 'أذكار الصباح والمساء من حصن المسلم',
    category: 'duas',
    format: 'Interactive Guide',
    badge: 'Daily Protection',
    description: 'Authentic prophetic morning and evening remembrances that provide spiritual serenity, divine protection from evil, anxiety, and unseen harm.',
    readTime: '15 min practice',
    level: 'All Levels',
    contentSummary: [
      'Ayat al-Kursi (The Verse of the Throne) & Virtues',
      'The 3 Quls (Surah Al-Ikhlas, Al-Falaq, An-Nas) recited 3 times',
      'Sayyid al-Istighfar: The master supplication for repentance',
      'Duas for health in hearing, sight, and body'
    ],
    fullContent: [
      {
        sectionTitle: 'Key Morning & Evening Supplications',
        description: 'Recited after Fajr prayer until sunrise, and after Asr prayer until sunset.',
        items: [
          {
            title: 'Sayyid al-Istighfar (Chief of Seeking Forgiveness)',
            arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
            transliteration: 'Allahumma Anta Rabbi la ilaha illa Anta, khalaqtani wa ana \'abduka, wa ana \'ala \'ahdika wa wa\'dika mastata\'tu, a\'oodhu bika min sharri ma sana\'tu, aboo\'u laka bi ni\'matika \'alayya, wa aboo\'u bi dhanbi faghfir li fa innahu la yaghfirudh-dhunooba illa Anta.',
            translation: '"O Allah, You are my Lord, none has the right to be worshipped but You. You created me and I am Your servant, and I abide by Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favors upon me and I confess my sins, so forgive me, for none forgives sins but You."',
            notes: 'The Prophet ﷺ said whoever recites this with firm conviction and dies that day/night enters Paradise.'
          },
          {
            title: 'Protection from All Harm (Recite 3 Times)',
            arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
            transliteration: 'Bismillahil-ladhi la yadurru ma\'as-mihi shay\'un fil-ardi wa la fis-samaa\'i wa Huwas-Samee\'ul-\'Aleem.',
            translation: '"In the Name of Allah, with Whose Name nothing can cause harm in the earth or in the heavens, and He is the All-Hearing, the All-Knowing."',
            notes: 'Recite three times every morning and evening for divine safeguarding.'
          }
        ]
      }
    ]
  },
  {
    id: 'salah-step-by-step',
    title: 'Step-by-Step Illustrated Salah Guide',
    arabicTitle: 'كيفية صلاة النبي ﷺ خطوة بخطوة',
    category: 'salah',
    format: 'Interactive Guide',
    badge: 'Practical Worship',
    description: 'A comprehensive beginner and children-friendly guide to performing the five daily Islamic prayers exactly according to the authentic Sunnah of Prophet Muhammad ﷺ.',
    readTime: '18 min guide',
    level: 'Beginner',
    contentSummary: [
      'Wudu (Ablution) prerequisites and spiritual cleanliness',
      'Takbirat al-Ihram, Qiyam, and Surah Al-Fatiha',
      'Ruku (Bowing) and Sujood (Prostration) postures and phrases',
      'Tashahhud (At-Tahiyyat) and concluding Tasleem'
    ],
    fullContent: [
      {
        sectionTitle: '1. Preparation & Opening (Takbeer)',
        description: 'Stand facing the Qiblah with sincere intention in the heart.',
        items: [
          {
            title: 'Takbirat al-Ihram',
            arabic: 'اللَّهُ أَكْبَرُ',
            transliteration: 'Allahu Akbar',
            translation: '"Allah is the Greatest."',
            notes: 'Raise both hands up to earlobe or shoulder level, thumbs aligned.'
          },
          {
            title: 'The Opening Supplication (Dua al-Istiftah)',
            arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَىٰ جَدُّكَ، وَلَا إِلَٰهَ غَيْرُكَ',
            transliteration: 'Subhanakal-lahumma wa bihamdika, wa tabarakas-muka, wa ta\'ala jadduka, wa la ilaha ghayruk.',
            translation: '"Glory be to You, O Allah, and praise. Blessed is Your Name and exalted is Your Majesty, and there is no deity worthy of worship besides You."'
          }
        ]
      },
      {
        sectionTitle: '2. Bowing (Ruku) & Prostration (Sujood)',
        description: 'The physical postures of deep humility and submission.',
        items: [
          {
            title: 'In Ruku (Bowing - Recite 3 times)',
            arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
            transliteration: 'Subhana Rabbiyal-\'Adheem',
            translation: '"Glory be to my Lord, the Magnificent."'
          },
          {
            title: 'Rising from Ruku',
            arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ • رَبَّنَا وَلَكَ الْحَمْدُ',
            transliteration: 'Sami\'Allahu liman hamidah • Rabbana wa lakal-hamd',
            translation: '"Allah hears whoever praises Him • Our Lord, to You belongs all praise."'
          },
          {
            title: 'In Sujood (Prostrating - Recite 3 times)',
            arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَىٰ',
            transliteration: 'Subhana Rabbiyal-A\'la',
            translation: '"Glory be to my Lord, the Most High."'
          }
        ]
      }
    ]
  },
  {
    id: 'juz-amma-companion',
    title: 'Juz Amma (30th Juz) Recitation Companion',
    arabicTitle: 'جزء عم مع الترجمة وأحكام التجويد',
    category: 'surahs',
    format: 'Study Companion',
    badge: 'Most Recited',
    description: 'A study guide for the 37 short Surahs of the 30th Juz (from Surah An-Naba to Surah An-Nas). Ideal for daily prayer recitation, children’s memorization, and Tajweed practice.',
    readTime: '25 min study',
    level: 'All Levels',
    contentSummary: [
      'Surah An-Nas, Al-Falaq, Al-Ikhlas, and Al-Kawthar complete breakdown',
      'Thematic overview: The Day of Judgment, accountability, and gratitude',
      'Phonetic pause and stopping signs marked on each verse',
      'Recommended daily memorization schedule for children'
    ],
    fullContent: [
      {
        sectionTitle: '1. Surah Al-Ikhlas (Sincerity - Chapter 112)',
        description: 'Equal to one-third of the Quran in reward and foundational monotheism (Tawhid).',
        items: [
          {
            arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ۝',
            transliteration: 'Qul Huwallahu Ahad. Allahus-Samad. Lam yalid wa lam yoolad. Wa lam yakul-lahu kufuwan ahad.',
            translation: '1. Say, "He is Allah, [who is] One, 2. Allah, the Eternal Refuge. 3. He neither begets nor is born, 4. Nor is there to Him any equivalent."',
            notes: 'Pronounce the Qalqalah (bouncing sound) on the Dal (د) at the end of every Ayah when stopping: Ahad, Samad, Yoolad, Ahad.'
          }
        ]
      },
      {
        sectionTitle: '2. Surah Al-Falaq (The Daybreak - Chapter 113)',
        description: 'Seeking refuge in the Lord of Daybreak from all created evil and envy.',
        items: [
          {
            arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ۝',
            transliteration: 'Qul a\'oodhu bi Rabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin-naffathati fil-\'uqad. Wa min sharri hasidin idha hasad.',
            translation: '1. Say, "I seek refuge in the Lord of daybreak 2. From the evil of that which He created 3. And from the evil of darkness when it settles 4. And from the evil of the blowers in knots 5. And from the evil of an envier when he envies."',
            notes: 'Ensure clean Ikhfa on "min sharri" with subtle nasalization.'
          }
        ]
      }
    ]
  },
  {
    id: 'stop-signs-quran-guide',
    title: 'Guide to Quranic Pause & Stop Marks (Al-Waqf)',
    arabicTitle: 'علامات الوقف في المصحف الشريف',
    category: 'tajweed',
    format: 'Cheat Sheet',
    badge: 'Recitation Etiquette',
    description: 'A clear explanation of the miniature Arabic symbols placed above Quranic verses guiding where to stop, where to continue, and where breathing pauses are mandatory or forbidden.',
    readTime: '8 min reference',
    level: 'Intermediate',
    contentSummary: [
      'م (Meem): Waqf Lazim - Compulsory stop to preserve correct meaning',
      'لا (Laa): Do not stop; stopping here distorts or breaks the meaning',
      'ج (Jeem): Waqf Jaiz - Permissible to stop or continue',
      'صلى (Sad-Laam-Yaa): Better to continue (Al-Waslu Awla)',
      'قلى (Qaaf-Laam-Yaa): Better to stop (Al-Waqfu Awla)'
    ],
    fullContent: [
      {
        sectionTitle: 'Universal Stop Marks (Ahkam al-Waqf)',
        description: 'Standard markings recognized across the King Fahd Complex Mushaf and international printings.',
        items: [
          {
            title: 'م (Meem Lazim) - Mandatory Stop',
            notes: 'If you do not stop here, the grammar merges with the following word and alters the theological meaning.'
          },
          {
            title: 'لا (Laa) - Prohibited Stop',
            notes: 'Do not pause here unless out of breath; if you pause, back up one word and re-recite.'
          },
          {
            title: 'ج (Jeem) - Neutral / Permissible Stop',
            notes: 'Both stopping and continuing are equally sound without penalty.'
          },
          {
            title: 'قلى (Qaaf-Laam) - Preferred to Stop',
            notes: 'Stopping is preferred to breathe and reflect, though continuing is allowed.'
          },
          {
            title: 'صلى (Saad-Laam) - Preferred to Continue',
            notes: 'Continuing is preferred for grammatical flow, though stopping is allowed.'
          },
          {
            title: '∴ ∴ (Three Dots - Mu\'anaqah)',
            notes: 'Appears in pairs. If you stop at the first set of three dots, you MUST continue through the second without stopping.'
          }
        ]
      }
    ]
  }
];
