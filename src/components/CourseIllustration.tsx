import React, { useState } from 'react';

interface CourseIllustrationProps {
  slug: 'nazra' | 'tajweed' | 'hifz' | 'islamic-studies' | 'tafsir' | 'arabic' | 'hadith' | 'duas' | 'stories' | 'new-muslim' | string;
  className?: string;
}

const COURSE_PHOTO_MAP: Record<string, string> = {
  nazra: '/boy-reading-quran.jpg',
  'nazra-quran': '/boy-reading-quran.jpg',
  tajweed: '/tutor-teaching-student.jpg',
  'quran-with-tajweed': '/tutor-teaching-student.jpg',
  hifz: '/course-hifz.jpg',
  'hifz-ul-quran': '/course-hifz.jpg',
  'islamic-studies': '/course-islamic-studies.jpg',
  'basic-islamic-studies': '/course-islamic-studies.jpg',
  tafsir: '/course-tafsir.jpg',
  'tafsir-e-quran': '/course-tafsir.jpg',
  arabic: '/course-stories.jpg',
  'arabic-language': '/course-stories.jpg',
  duas: '/man-praying-dua.jpg',
  'masnoon-duas': '/man-praying-dua.jpg'
};

export const CourseIllustration: React.FC<CourseIllustrationProps> = ({ slug, className = 'w-full h-48' }) => {
  const [imgError, setImgError] = useState(false);
  const photoUrl = COURSE_PHOTO_MAP[slug];

  if (photoUrl && !imgError) {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-gray-900 flex items-center justify-center ${className} group`}>
        <img
          src={photoUrl}
          alt={slug}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />
      </div>
    );
  }

  switch (slug) {
    // 1. Nazra Quran: Emerald, Amber & Glowing Ivory
    case 'nazra':
      return (
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#064e3b] via-[#096b52] to-[#043327] flex items-center justify-center ${className}`}>
          {/* Ambient Colorful Radial Glows */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#fbbf24]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#34d399]/25 rounded-full blur-2xl pointer-events-none" />

          {/* Sacred Arabesque Geometric Grid */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="nazra-grid-hd" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 20 10 L 10 20 L 0 10 Z" fill="none" stroke="#fde68a" strokeWidth="0.6" />
                <circle cx="10" cy="10" r="2.5" fill="#fde68a" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#nazra-grid-hd)" />
          </svg>

          {/* Central Artwork */}
          <svg className="relative z-10 w-52 h-40 drop-shadow-2xl" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="nazra-noor" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#fffbeb" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#fde047" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ca8a04" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="gold-shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fffbeb" />
                <stop offset="35%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              <linearGradient id="page-lum" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#fef3c7" />
              </linearGradient>
            </defs>

            {/* Glowing Noor Aura */}
            <circle cx="100" cy="70" r="58" fill="url(#nazra-noor)" />

            {/* Wooden Rehal / Sacred Quran Stand */}
            <path d="M56 136 L88 106 L112 106 L144 136 L128 144 L100 118 L72 144 Z" fill="#38210f" stroke="url(#gold-shimmer)" strokeWidth="2" />
            <path d="M72 144 L100 118 L128 144 L120 148 L100 128 L80 148 Z" fill="#1c0f06" />
            <circle cx="100" cy="112" r="3" fill="#fde047" />

            {/* Left Quran Page */}
            <path d="M100 98 C72 91 42 84 34 68 C34 46 64 52 97 63 Z" fill="url(#page-lum)" stroke="url(#gold-shimmer)" strokeWidth="1.8" />
            {/* Right Quran Page */}
            <path d="M100 98 C128 91 158 84 166 68 C166 46 136 52 103 63 Z" fill="url(#page-lum)" stroke="url(#gold-shimmer)" strokeWidth="1.8" />
            {/* Spine Fold */}
            <path d="M100 63 L100 99" stroke="#b45309" strokeWidth="3" strokeLinecap="round" />

            {/* Golden Ayah Lines Left */}
            <path d="M48 61 C62 63 76 65 90 68" stroke="#92400e" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M46 69 C60 71 76 74 90 76" stroke="#92400e" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M50 77 C63 79 77 82 88 84" stroke="#92400e" strokeWidth="1.8" strokeLinecap="round" />

            {/* Golden Ayah Lines Right */}
            <path d="M110 68 C124 65 138 63 152 61" stroke="#92400e" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M110 76 C124 74 140 71 154 69" stroke="#92400e" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M112 84 C123 82 137 79 150 77" stroke="#92400e" strokeWidth="1.8" strokeLinecap="round" />

            {/* Golden Bookmark Ribbon */}
            <path d="M100 66 C100 88 107 106 110 124 L104 129 L110 127 L116 129 Z" fill="url(#gold-shimmer)" />

            {/* Floating Multi-Color Harakat & Phonetic Diacritics */}
            <text x="44" y="38" fill="#fde047" fontSize="22" fontFamily="serif" fontWeight="bold" className="animate-pulse">َ</text>
            <text x="142" y="42" fill="#fde047" fontSize="24" fontFamily="serif" fontWeight="bold" className="animate-pulse">ُ</text>
            <text x="96" y="30" fill="#ffffff" fontSize="20" fontFamily="serif" fontWeight="bold">ِ</text>
            <text x="68" y="26" fill="#34d399" fontSize="16" fontFamily="serif" fontWeight="bold">ّ</text>
            <text x="124" y="28" fill="#34d399" fontSize="16" fontFamily="serif" fontWeight="bold">ْ</text>

            {/* Radiant Islamic Stars */}
            <g transform="translate(100, 14) scale(0.9)">
              <polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffffff" />
              <circle cx="0" cy="0" r="2.5" fill="#f59e0b" />
            </g>
            <circle cx="36" cy="40" r="2.5" fill="#fde047" />
            <circle cx="164" cy="42" r="2.5" fill="#fde047" />
          </svg>

          {/* Calligraphic Badge in Arabic */}
          <span className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md text-[11px] font-arabic font-bold text-[#fde68a] border border-[#f59e0b]/40">
            ناظِرَة القُرْآن الكريم
          </span>
        </div>
      );

    // 2. Quran with Tajweed: Deep Royal Sapphire & Persian Cyan & Amber Gold
    case 'tajweed':
      return (
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#0f172a] flex items-center justify-center ${className}`}>
          {/* Ambient Cyan & Gold Glows */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#06b6d4]/25 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#fbbf24]/20 rounded-full blur-2xl pointer-events-none" />

          {/* Acoustic Wave & Star Patterns */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="tajweed-wave-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="8" fill="none" stroke="#67e8f9" strokeWidth="0.5" />
                <path d="M 0 10 Q 10 0 20 10 Q 10 20 0 10" fill="none" stroke="#fde047" strokeWidth="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tajweed-wave-grid)" />
          </svg>

          <svg className="relative z-10 w-52 h-40 drop-shadow-2xl" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cyan-gold-wave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
              <linearGradient id="amber-disc" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="60%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>

            {/* Concentric Resonance Acoustic Waves */}
            <circle cx="100" cy="80" r="66" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="5 7" opacity="0.4" />
            <circle cx="100" cy="80" r="52" stroke="#fde047" strokeWidth="1.5" opacity="0.6" />
            <circle cx="100" cy="80" r="38" stroke="#22d3ee" strokeWidth="2" opacity="0.8" />

            {/* Melodic Vocal Harmonic Oscillations */}
            <path d="M25 80 Q55 45 80 80 T130 80 T175 80" stroke="url(#cyan-gold-wave)" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M35 80 Q65 110 90 80 T140 80 T165 80" stroke="#fef08a" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.9" />

            {/* Central Tajweed Ayah Stop Symbol (Waqf Medallion) */}
            <circle cx="100" cy="80" r="24" fill="#0f172a" stroke="url(#amber-disc)" strokeWidth="2.5" />
            <circle cx="100" cy="80" r="20" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="2 3" />
            <text x="100" y="87" fill="#fef08a" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="serif">ط</text>

            {/* Top Makharij Articulation Markers */}
            <circle cx="100" cy="24" r="6.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
            <line x1="100" y1="31" x2="100" y2="54" stroke="#fde047" strokeWidth="1.8" strokeDasharray="3 3" />

            {/* Bottom Tarteel Marker */}
            <circle cx="100" cy="136" r="6.5" fill="#06b6d4" stroke="#ffffff" strokeWidth="1.5" />
            <line x1="100" y1="106" x2="100" y2="129" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="3 3" />

            <text x="100" y="16" fill="#67e8f9" fontSize="10" textAnchor="middle" letterSpacing="3" fontWeight="bold">MAKHARIJ</text>
            <text x="100" y="153" fill="#fde047" fontSize="10" textAnchor="middle" letterSpacing="3" fontWeight="bold">TARTEEL</text>
          </svg>

          <span className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md text-[11px] font-arabic font-bold text-[#67e8f9] border border-[#38bdf8]/40">
            القُرْآن الكريم بِالتَّجْوِيد
          </span>
        </div>
      );

    // 3. Hifz-ul-Quran: Imperial Royal Amethyst & Celestial Gold
    case 'hifz':
      return (
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#4c1d95] via-[#5b21b6] to-[#2e1065] flex items-center justify-center ${className}`}>
          {/* Ambient Purple & Gold Glows */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#fbbf24]/25 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#c084fc]/30 rounded-full blur-2xl pointer-events-none" />

          {/* 8-Point Rub-el-Hizb Geometric Lattice */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="hifz-star-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="2" y="2" width="16" height="16" fill="none" stroke="#fde047" strokeWidth="0.6" />
                <rect x="2" y="2" width="16" height="16" transform="rotate(45 10 10)" fill="none" stroke="#fde047" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hifz-star-grid)" />
          </svg>

          <svg className="relative z-10 w-52 h-40 drop-shadow-2xl" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="hifz-noor" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#eab308" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#7e22ce" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="crown-shine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="35%" stopColor="#fde047" />
                <stop offset="70%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>

            <circle cx="100" cy="85" r="54" fill="url(#hifz-noor)" />

            {/* Glowing Quran Heart (Chest Retention) */}
            <path d="M100 134 C60 108 48 80 60 62 C70 48 90 52 100 66 C110 52 130 48 140 62 C152 80 140 108 100 134 Z" fill="#2e1065" stroke="url(#crown-shine)" strokeWidth="2.5" />

            {/* Sacred Ayah Inscription Rays inside heart */}
            <path d="M78 82 Q100 88 122 82" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
            <path d="M82 94 Q100 99 118 94" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
            <path d="M90 106 Q100 109 110 106" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />

            {/* Taj of Noor (Crown of Glory for Parents of Hafiz) */}
            <path d="M64 54 L72 30 L88 44 L100 20 L112 44 L128 30 L136 54 Z" fill="url(#crown-shine)" stroke="#92400e" strokeWidth="1.8" />
            <circle cx="72" cy="28" r="4.5" fill="#ffffff" />
            <circle cx="100" cy="18" r="5.5" fill="#ffffff" />
            <circle cx="128" cy="28" r="4.5" fill="#ffffff" />
            <rect x="66" y="52" width="68" height="6" rx="3" fill="#b45309" stroke="#fde047" strokeWidth="1" />

            {/* Top 8-Point Rub-el-Hizb Star */}
            <g transform="translate(100, 8) scale(0.8)">
              <rect x="-8" y="-8" width="16" height="16" fill="#fde047" />
              <rect x="-8" y="-8" width="16" height="16" transform="rotate(45)" fill="#fde047" />
              <circle cx="0" cy="0" r="3" fill="#ffffff" />
            </g>

            {/* Celestial Stars */}
            <circle cx="36" cy="52" r="2.5" fill="#fde047" />
            <circle cx="164" cy="52" r="2.5" fill="#fde047" />
            <circle cx="44" cy="120" r="3" fill="#c084fc" />
            <circle cx="156" cy="120" r="3" fill="#c084fc" />
          </svg>

          <span className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md text-[11px] font-arabic font-bold text-[#fde047] border border-[#f59e0b]/40">
            حِفْظُ القُرْآن الكريم
          </span>
        </div>
      );

    // 4. Basic Islamic Studies: Deep Oasis Teal & Warm Terracotta
    case 'islamic-studies':
      return (
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f766e] via-[#115e59] to-[#042f2e] flex items-center justify-center ${className}`}>
          {/* Ambient Warm Amber & Teal Glows */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#f97316]/25 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#2dd4bf]/25 rounded-full blur-2xl pointer-events-none" />

          {/* Arabesque Arch Patterns */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="studies-arch-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q10 0 20 10 Q10 20 0 10" fill="none" stroke="#fde047" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#studies-arch-grid)" />
          </svg>

          <svg className="relative z-10 w-52 h-40 drop-shadow-2xl" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gold-arch" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="60%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
            </defs>

            {/* Grand Islamic Mihrab Arch */}
            <path d="M46 142 L46 72 C46 40 68 24 100 16 C132 24 154 40 154 72 L154 142 Z" fill="#042f2e" stroke="url(#gold-arch)" strokeWidth="2.5" />
            <path d="M54 142 L54 76 C54 48 72 34 100 26 C128 34 146 48 146 76 L146 142" stroke="#2dd4bf" strokeWidth="1.2" strokeDasharray="3 3" />

            {/* Dome of Worship & Radiant Crescent */}
            <path d="M70 108 C70 82 84 70 100 66 C116 70 130 82 130 108 Z" fill="#0f766e" stroke="url(#gold-arch)" strokeWidth="1.5" />
            <line x1="100" y1="66" x2="100" y2="48" stroke="#fde047" strokeWidth="2" />
            <path d="M103 48 C100 45 98 42 102 40 C106 39 107 42 103 48 Z" fill="#fef08a" />

            {/* The 5 Golden Pillars of Islam */}
            <g transform="translate(58, 108)">
              <rect x="0" y="0" width="12" height="32" rx="2" fill="url(#gold-arch)" />
              <rect x="18" y="0" width="12" height="32" rx="2" fill="url(#gold-arch)" />
              <rect x="36" y="0" width="12" height="32" rx="2" fill="url(#gold-arch)" />
              <rect x="54" y="0" width="12" height="32" rx="2" fill="url(#gold-arch)" />
              <rect x="72" y="0" width="12" height="32" rx="2" fill="url(#gold-arch)" />
            </g>

            <text x="100" y="152" fill="#fef08a" fontSize="9" textAnchor="middle" letterSpacing="2" fontWeight="bold">
              THE 5 PILLARS OF ISLAM
            </text>
          </svg>

          <span className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md text-[11px] font-arabic font-bold text-[#fde047] border border-[#f59e0b]/40">
            الدِّرَاسَات الإِسْلامِيَّة
          </span>
        </div>
      );

    // 5. Tafsir-e-Quran: Rich Velvet Crimson & Illuminated Gold
    case 'tafsir':
      return (
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#881337] via-[#9f1239] to-[#4c0519] flex items-center justify-center ${className}`}>
          {/* Ambient Warm Golden Flame & Amber Glows */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#fbbf24]/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#f43f5e]/25 rounded-full blur-2xl pointer-events-none" />

          {/* Manuscript Geometry Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="tafsir-folio-grid" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="11" cy="11" r="9" fill="none" stroke="#fde047" strokeWidth="0.5" />
                <path d="M2 11 L20 11 M11 2 L11 20" stroke="#fde047" strokeWidth="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tafsir-folio-grid)" />
          </svg>

          <svg className="relative z-10 w-52 h-40 drop-shadow-2xl" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="lamp-fire" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#fef08a" />
                <stop offset="80%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#881337" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="gold-folio" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="60%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#92400e" />
              </linearGradient>
            </defs>

            {/* Illuminated Classical Tafsir Folio */}
            <rect x="38" y="28" width="82" height="105" rx="5" fill="#fefae0" stroke="url(#gold-folio)" strokeWidth="2" />
            <rect x="44" y="34" width="70" height="93" rx="3" fill="none" stroke="#b45309" strokeWidth="1" strokeDasharray="2 2" />

            {/* Classical Quran Surah Header Box */}
            <rect x="48" y="38" width="62" height="16" rx="2" fill="#4c0519" stroke="#f59e0b" strokeWidth="1" />
            <text x="79" y="50" fill="#fef08a" fontSize="11" textAnchor="middle" fontWeight="bold" fontFamily="serif">بِسْمِ اللَّهِ</text>

            {/* Sacred Ayah & Commentary Script Lines */}
            <path d="M48 62 L110 62 M48 68 L110 68 M48 74 L110 74 M48 80 L98 80" stroke="#92400e" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M48 92 L110 92 M48 98 L110 98 M48 104 L110 104 M48 110 L88 110" stroke="#92400e" strokeWidth="1.6" strokeLinecap="round" />

            {/* Hanging Islamic Fanous (Lantern) on the Right */}
            <line x1="154" y1="8" x2="154" y2="44" stroke="#fde047" strokeWidth="2" />
            <circle cx="154" cy="72" r="36" fill="url(#lamp-fire)" />

            {/* Lantern Ornate Cap */}
            <path d="M144 44 L164 44 L159 52 L149 52 Z" fill="url(#gold-folio)" stroke="#78350f" strokeWidth="1.2" />
            {/* Lantern Glass Body */}
            <path d="M147 52 L161 52 L166 74 L161 88 L147 88 L142 74 Z" fill="#4c0519" stroke="url(#gold-folio)" strokeWidth="2" />
            {/* Central Radiant Flame */}
            <ellipse cx="154" cy="70" rx="4.5" ry="8" fill="#ffffff" />
            <ellipse cx="154" cy="70" rx="2.5" ry="5.5" fill="#fef08a" />
            {/* Lantern Base */}
            <path d="M144 88 L164 88 L159 96 L149 96 Z" fill="url(#gold-folio)" stroke="#78350f" strokeWidth="1.2" />
            <circle cx="154" cy="100" r="3" fill="#fde047" />
          </svg>

          <span className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md text-[11px] font-arabic font-bold text-[#fde047] border border-[#f59e0b]/40">
            تَفْسِير القُرْآن العَظِيم
          </span>
        </div>
      );

    // 6. Quranic Arabic Courses: Lapis Lazuli & Royal Indigo & Gold
    case 'arabic':
      return (
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#3730a3] via-[#4338ca] to-[#1e1b4b] flex items-center justify-center ${className}`}>
          {/* Ambient Blue & Gold Glows */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#38bdf8]/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#fbbf24]/25 rounded-full blur-2xl pointer-events-none" />

          {/* Calligraphic Lattice Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="arabic-qalam-grid" width="18" height="18" patternUnits="userSpaceOnUse">
                <path d="M0 9 L9 0 L18 9 L9 18 Z" fill="none" stroke="#93c5fd" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#arabic-qalam-grid)" />
          </svg>

          <svg className="relative z-10 w-52 h-40 drop-shadow-2xl" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="qalam-wood-hd" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="40%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
            </defs>

            {/* Classical Brass Inkwell (Dawat) */}
            <path d="M42 105 C42 90 58 82 75 82 C92 82 108 90 108 105 L108 132 C108 138 92 144 75 144 C58 144 42 138 42 132 Z" fill="#1e1b4b" stroke="#f59e0b" strokeWidth="2.5" />
            <ellipse cx="75" cy="82" rx="22" ry="7" fill="#b45309" stroke="#fde047" strokeWidth="1.5" />
            <ellipse cx="75" cy="82" rx="14" ry="4.5" fill="#030712" />

            {/* Slanted Reed Qalam (Calligraphy Pen) */}
            <g transform="rotate(-34 102 78)">
              <rect x="96" y="16" width="10" height="102" rx="2" fill="url(#qalam-wood-hd)" stroke="#451a03" strokeWidth="1.2" />
              <path d="M96 118 L101 132 L106 118 Z" fill="#291202" />
              <line x1="101" y1="118" x2="101" y2="130" stroke="#fde047" strokeWidth="1" />
            </g>

            {/* Floating Arabic Letters of the Quran */}
            <text x="135" y="45" fill="#fde047" fontSize="32" fontFamily="serif" fontWeight="bold">ا</text>
            <text x="160" y="74" fill="#38bdf8" fontSize="28" fontFamily="serif" fontWeight="bold">ب</text>
            <text x="132" y="110" fill="#fde047" fontSize="30" fontFamily="serif" fontWeight="bold">ع</text>
            <text x="162" y="136" fill="#38bdf8" fontSize="26" fontFamily="serif" fontWeight="bold">م</text>

            {/* Root Grammar Tree Connector Lines */}
            <path d="M126 76 Q142 88 150 72" stroke="#fde047" strokeWidth="1.2" strokeDasharray="3 3" />
            <path d="M150 88 Q138 114 146 124" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 3" />
          </svg>

          <span className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md text-[11px] font-arabic font-bold text-[#38bdf8] border border-[#38bdf8]/40">
            اللُّغَة العَرَبِيَّة القُرْآنِيَّة
          </span>
        </div>
      );

    // 7. Quran & Hadith: Madinah Verdant Green & Rose Gold
    case 'hadith':
      return (
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#047857] via-[#059669] to-[#022c22] flex items-center justify-center ${className}`}>
          {/* Ambient Mint & Rose Gold Glows */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#fb7185]/25 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#6ee7b7]/30 rounded-full blur-2xl pointer-events-none" />

          {/* Prophetic Geometric Star Lattice */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="hadith-dome-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="8" fill="none" stroke="#fde047" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hadith-dome-grid)" />
          </svg>

          <svg className="relative z-10 w-52 h-40 drop-shadow-2xl" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="madinah-dome" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="45%" stopColor="#059669" />
                <stop offset="100%" stopColor="#022c22" />
              </linearGradient>
              <linearGradient id="gold-dome-ring" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>

            {/* The Green Dome of Madinah (Gumbad-e-Khizra) */}
            <path d="M64 112 C64 70 82 46 100 38 C118 46 136 70 136 112 Z" fill="url(#madinah-dome)" stroke="url(#gold-dome-ring)" strokeWidth="2.2" />
            <ellipse cx="109" cy="60" rx="4.5" ry="6" fill="#34d399" stroke="#fde047" strokeWidth="1.2" />

            {/* Sacred Golden Crescent & Spire */}
            <line x1="100" y1="38" x2="100" y2="16" stroke="#fde047" strokeWidth="2.5" />
            <circle cx="100" cy="22" r="3" fill="#ffffff" />
            <circle cx="100" cy="28" r="2.5" fill="#ffffff" />
            <path d="M104 15 C100 13 98 10 102 8 C106 7 107 10 104 15 Z" fill="#fef08a" />

            {/* Marble Base */}
            <rect x="58" y="112" width="84" height="14" rx="2" fill="#fefae0" stroke="#b45309" strokeWidth="1.5" />
            <line x1="58" y1="119" x2="142" y2="119" stroke="#f59e0b" strokeWidth="1" />

            {/* Sunnah & Sahih Ribbon */}
            <path d="M38 136 Q100 148 162 136 L156 148 Q100 158 44 148 Z" fill="url(#gold-dome-ring)" stroke="#78350f" strokeWidth="1" />
            <text x="100" y="147" fill="#022c22" fontSize="9" textAnchor="middle" fontWeight="bold" letterSpacing="2">
              SUNNAH & SAHIH HADITH
            </text>

            {/* Prophetic Olive Branches */}
            <path d="M40 90 Q48 76 44 62" stroke="#fde047" strokeWidth="1.8" fill="none" />
            <ellipse cx="42" cy="72" rx="4.5" ry="2.5" transform="rotate(-30 42 72)" fill="#10b981" stroke="#fef08a" strokeWidth="1" />
            <path d="M160 90 Q152 76 156 62" stroke="#fde047" strokeWidth="1.8" fill="none" />
            <ellipse cx="158" cy="72" rx="4.5" ry="2.5" transform="rotate(30 158 72)" fill="#10b981" stroke="#fef08a" strokeWidth="1" />
          </svg>

          <span className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md text-[11px] font-arabic font-bold text-[#6ee7b7] border border-[#10b981]/40">
            القُرْآن وَالحَدِيث الشَّرِيف
          </span>
        </div>
      );

    // 8. Masnoon Duas: Twilight Indigo & Celestial Gold
    case 'duas':
      return (
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#312e81] via-[#3730a3] to-[#1e1b4b] flex items-center justify-center ${className}`}>
          {/* Ambient Celestial Glows */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#fbbf24]/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#818cf8]/25 rounded-full blur-2xl pointer-events-none" />

          {/* Fortress & Crescent Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="duas-shield-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10 0 C15 5 15 15 10 20 C5 15 5 5 10 0 Z" fill="none" stroke="#fde047" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#duas-shield-grid)" />
          </svg>

          <svg className="relative z-10 w-52 h-40 drop-shadow-2xl" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="dua-dawn-glow" cx="50%" cy="40%" r="48%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#fef08a" />
                <stop offset="80%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#312e81" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Protective Shield Outline (Hisn al-Muslim) */}
            <path d="M100 14 L146 30 C146 76 128 114 100 132 C72 114 54 76 54 30 Z" fill="#1e1b4b" stroke="#f59e0b" strokeWidth="2" opacity="0.7" />

            {/* Radiance of Supplication */}
            <circle cx="100" cy="66" r="46" fill="url(#dua-dawn-glow)" />

            {/* Praying Hands (Supplication Posture) */}
            <path d="M76 122 C70 108 70 82 76 68 C78 63 84 64 85 70 L87 86 L93 86 C96 86 97 80 95 66 C94 58 98 56 101 60 L102 96 C102 110 93 126 76 122 Z" fill="#fefae0" stroke="#b45309" strokeWidth="1.5" />
            <path d="M124 122 C130 108 130 82 124 68 C122 63 116 64 115 70 L113 86 L107 86 C104 86 103 80 105 66 C106 58 102 56 99 60 L98 96 C98 110 107 126 124 122 Z" fill="#fefae0" stroke="#b45309" strokeWidth="1.5" />

            {/* Crescent & Dawn Stars */}
            <path d="M107 28 C102 28 97 24 99 18 C95 21 94 27 98 32 C102 36 108 36 111 32 C108 31 107 29 107 28 Z" fill="#fde047" />
            <circle cx="80" cy="26" r="2" fill="#ffffff" />
            <circle cx="120" cy="22" r="2.5" fill="#ffffff" />

            <text x="100" y="150" fill="#fef08a" fontSize="9" textAnchor="middle" letterSpacing="2" fontWeight="bold">
              HISN AL-MUSLIM • FORTRESS
            </text>
          </svg>

          <span className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md text-[11px] font-arabic font-bold text-[#fde047] border border-[#f59e0b]/40">
            الأَدْعِيَة المَأْثُورَة وَالأَذْكَار
          </span>
        </div>
      );

    // 9. Quranic & Prophetic Stories: Sunset Amber Orange & Oasis Green
    case 'stories':
      return (
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#c2410c] via-[#ea580c] to-[#7c2d12] flex items-center justify-center ${className}`}>
          {/* Ambient Warm Sunset & Green Glows */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#fbbf24]/35 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#34d399]/25 rounded-full blur-2xl pointer-events-none" />

          {/* Star & Dune Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="stories-sunset-grid" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="11" cy="11" r="2.5" fill="#fde047" />
                <path d="M0 22 Q11 11 22 22" fill="none" stroke="#fde047" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stories-sunset-grid)" />
          </svg>

          <svg className="relative z-10 w-52 h-40 drop-shadow-2xl" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ark-wood" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="40%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#7c2d12" />
              </linearGradient>
            </defs>

            {/* Desert Dunes / Mountain of Tur */}
            <path d="M15 124 Q60 104 100 118 T185 112 L185 146 L15 146 Z" fill="#431407" />
            <path d="M35 124 L72 74 L108 124 Z" fill="#7c2d12" stroke="#fde047" strokeWidth="1" />
            <circle cx="72" cy="72" r="6" fill="#fef08a" opacity="0.8" />

            {/* Date Palm */}
            <path d="M40 126 Q44 98 46 86" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
            <path d="M46 86 Q32 82 28 88" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M46 86 Q42 74 36 72" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M46 86 Q54 74 60 72" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M46 86 Q62 82 66 88" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />

            {/* Ark of Prophet Nuh (AS) */}
            <path d="M96 118 C102 104 114 100 146 100 C168 100 176 106 172 118 Z" fill="url(#ark-wood)" stroke="#431407" strokeWidth="2" />
            <rect x="114" y="88" width="34" height="14" rx="2" fill="#fefae0" stroke="#7c2d12" strokeWidth="1.5" />
            <circle cx="122" cy="95" r="2.5" fill="#7c2d12" />
            <circle cx="131" cy="95" r="2.5" fill="#7c2d12" />
            <circle cx="140" cy="95" r="2.5" fill="#7c2d12" />

            {/* Golden Water Waves */}
            <path d="M80 126 Q100 120 120 126 T160 126 T185 126" stroke="#fef08a" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Celestial Stars */}
            <circle cx="115" cy="36" r="2.5" fill="#ffffff" />
            <circle cx="152" cy="42" r="3" fill="#fde047" />
            <circle cx="170" cy="28" r="2" fill="#ffffff" />
            <text x="140" y="66" fill="#fde047" fontSize="12" fontWeight="bold">۞</text>
          </svg>

          <span className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md text-[11px] font-arabic font-bold text-[#fde047] border border-[#f59e0b]/40">
            قَصَصُ الأَنْبِيَاءِ فِي القُرْآن
          </span>
        </div>
      );

    // 10. New Muslim Basics: Radiant Turquoise & Morning Dawn Sunlight
    case 'new-muslim':
    default:
      return (
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d9488] via-[#0f766e] to-[#042f2e] flex items-center justify-center ${className}`}>
          {/* Ambient Warm Golden Sun & Turquoise Glows */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#fde047]/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#5eead4]/30 rounded-full blur-2xl pointer-events-none" />

          {/* Welcome Geometric Gate Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="new-muslim-gate-grid" width="18" height="18" patternUnits="userSpaceOnUse">
                <path d="M9 0 L18 9 L9 18 L0 9 Z" fill="none" stroke="#fde047" strokeWidth="0.6" />
                <circle cx="9" cy="9" r="2" fill="#fde047" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#new-muslim-gate-grid)" />
          </svg>

          <svg className="relative z-10 w-52 h-40 drop-shadow-2xl" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="dawn-sunlight" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="35%" stopColor="#fef08a" />
                <stop offset="70%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="door-gold-shine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="60%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>

            {/* Glowing Golden Sunlight */}
            <circle cx="100" cy="74" r="50" fill="url(#dawn-sunlight)" />

            {/* Grand Welcome Arch */}
            <path d="M58 142 L58 70 C58 40 76 26 100 20 C124 26 142 40 142 70 L142 142 Z" fill="#042f2e" stroke="url(#door-gold-shine)" strokeWidth="2.5" />

            {/* Open Golden Doors */}
            <path d="M60 70 L84 76 L84 140 L60 140 Z" fill="url(#door-gold-shine)" stroke="#78350f" strokeWidth="1.5" />
            <circle cx="80" cy="108" r="2.5" fill="#ffffff" />
            <path d="M140 70 L116 76 L116 140 L140 140 Z" fill="url(#door-gold-shine)" stroke="#78350f" strokeWidth="1.5" />
            <circle cx="120" cy="108" r="2.5" fill="#ffffff" />

            {/* Qiblah Compass in the Pathway */}
            <g transform="translate(100, 76)">
              <circle cx="0" cy="0" r="18" fill="#042f2e" stroke="#fde047" strokeWidth="2" />
              <polygon points="0,-14 4,0 -4,0" fill="#fde047" />
              <polygon points="0,14 4,0 -4,0" fill="#b45309" />
              <circle cx="0" cy="0" r="3" fill="#ffffff" />
            </g>

            {/* Stepping Path */}
            <path d="M88 142 L94 116 L106 116 L112 142 Z" fill="#fefae0" stroke="#f59e0b" strokeWidth="1" />

            <text x="100" y="153" fill="#fef08a" fontSize="9.5" textAnchor="middle" letterSpacing="2.5" fontWeight="bold">
              MARHABAN • WELCOME HOME
            </text>
          </svg>

          <span className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md text-[11px] font-arabic font-bold text-[#5eead4] border border-[#2dd4bf]/40">
            أَسَاسِيَّات المُسْلِم الجَدِيد
          </span>
        </div>
      );
  }
};
