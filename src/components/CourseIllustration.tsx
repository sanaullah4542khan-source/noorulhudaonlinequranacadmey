import React from 'react';
import { BookOpen, Sparkles, Award, Star, Compass, Heart, GraduationCap, ShieldCheck, Sun } from 'lucide-react';

interface CourseIllustrationProps {
  slug?: string;
  className?: string;
}

export const CourseIllustration: React.FC<CourseIllustrationProps> = ({
  slug = 'nazra',
  className = 'w-full h-40'
}) => {
  const getIcon = () => {
    switch (slug) {
      case 'hifz':
        return <Award className="w-12 h-12 text-amber-300" />;
      case 'tajweed':
        return <Sparkles className="w-12 h-12 text-emerald-300" />;
      case 'duas':
        return <Heart className="w-12 h-12 text-rose-300" />;
      case 'tafsir':
        return <BookOpen className="w-12 h-12 text-sky-300" />;
      case 'arabic':
        return <GraduationCap className="w-12 h-12 text-indigo-300" />;
      case 'islamic-studies':
        return <Compass className="w-12 h-12 text-teal-300" />;
      case 'new-muslim':
        return <Sun className="w-12 h-12 text-amber-400" />;
      default:
        return <BookOpen className="w-12 h-12 text-emerald-300" />;
    }
  };

  return (
    <div className={`relative flex items-center justify-center bg-gradient-to-br from-[#064232] to-[#0a5c47] p-6 overflow-hidden ${className}`}>
      {/* Decorative Islamic Geometric Patterns */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#facc15_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-2">
        <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-inner">
          {getIcon()}
        </div>
        <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest">
          Noor Ul Huda
        </span>
      </div>
    </div>
  );
};
