import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface ThemeToggleProps {
  variant?: 'topbar' | 'nav' | 'mobile';
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ variant = 'topbar', className = '' }) => {
  const { theme, isDark, toggleTheme } = useTheme();
  const { t } = useLanguage();

  if (variant === 'mobile') {
    return (
      <button
        id="mobile-theme-toggle-btn"
        onClick={toggleTheme}
        className={`w-full py-2.5 px-3 rounded-md font-medium text-xs flex items-center justify-between transition-all ${
          isDark
            ? 'bg-[#0f4837] text-[#facc15] hover:bg-[#135a45] border border-[#facc15]/30'
            : 'bg-white/10 text-[#e8f5e9] hover:text-[#facc15] hover:bg-white/15 border border-white/10'
        } ${className}`}
        aria-label={t.theme.toggleTitle}
        title={t.theme.toggleTitle}
      >
        <span className="flex items-center gap-2">
          {isDark ? (
            <Moon className="w-4 h-4 text-[#facc15] fill-[#facc15]/20" />
          ) : (
            <Sun className="w-4 h-4 text-[#facc15]" />
          )}
          <span>{isDark ? t.theme.darkMode : t.theme.lightMode}</span>
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-black/20 text-[#facc15] uppercase tracking-wider font-bold">
          {isDark ? 'ON' : 'OFF'}
        </span>
      </button>
    );
  }

  if (variant === 'nav') {
    return (
      <button
        id="nav-theme-toggle-btn"
        onClick={toggleTheme}
        className={`relative p-2 rounded-lg transition-all flex items-center justify-center focus:outline-none ${
          isDark
            ? 'bg-[#072c21] text-[#facc15] hover:bg-[#09382b] border border-[#facc15]/40 shadow-inner'
            : 'bg-white/10 text-white hover:text-[#facc15] hover:bg-white/15 border border-white/10'
        } ${className}`}
        aria-label={t.theme.toggleTitle}
        title={isDark ? t.theme.lightMode : t.theme.darkMode}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-[#facc15] fill-[#facc15]/30 transform transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Sun className="w-4 h-4 text-[#facc15] transform transition-transform duration-300 hover:rotate-45 scale-100" />
        )}
      </button>
    );
  }

  // Default: 'topbar' variant
  return (
    <button
      id="topbar-theme-toggle-btn"
      onClick={toggleTheme}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all focus:outline-none cursor-pointer ${
        isDark
          ? 'bg-[#0a382b] text-[#facc15] hover:bg-[#0e4838] border border-[#facc15]/30 shadow-sm'
          : 'bg-white/10 text-[#e8f5e9] hover:text-[#facc15] hover:bg-white/15 border border-white/10'
      } ${className}`}
      aria-label={t.theme.toggleTitle}
      title={isDark ? t.theme.lightMode : t.theme.darkMode}
    >
      {isDark ? (
        <>
          <Moon className="w-3.5 h-3.5 text-[#facc15] fill-[#facc15]/30 animate-pulse" />
          <span className="hidden sm:inline font-semibold">{t.theme.darkMode}</span>
        </>
      ) : (
        <>
          <Sun className="w-3.5 h-3.5 text-[#facc15]" />
          <span className="hidden sm:inline">{t.theme.lightMode}</span>
        </>
      )}
    </button>
  );
};
