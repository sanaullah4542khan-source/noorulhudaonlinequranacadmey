import React, { useState } from 'react';

interface SafirLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const SafirLogo: React.FC<SafirLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  showText = true
}) => {
  const isLight = variant === 'light';
  const [logoSrc, setLogoSrc] = useState('/noor-ul-huda-logo.svg');

  const dimensionClasses =
    size === 'sm'
      ? 'w-7 h-7 sm:w-8 sm:h-8'
      : size === 'md'
      ? 'w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12'
      : size === 'lg'
      ? 'w-12 h-12 sm:w-16 sm:h-16'
      : 'w-16 h-16 sm:w-24 sm:h-24';

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {/* Official Academy Emblem Badge */}
      <div className={`relative flex-shrink-0 ${dimensionClasses} rounded-xl sm:rounded-2xl p-0.5 sm:p-1 bg-white shadow-sm sm:shadow-md border-2 border-[#D4AF37] hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden`}>
        <img
          src={logoSrc}
          onError={() => setLogoSrc('/noor-ul-huda-logo.png')}
          alt="Noor Ul Huda Online Quran Academy Official Logo"
          className="w-full h-full object-contain"
          loading="eager"
          decoding="async"
          width={48}
          height={48}
        />
      </div>

      {/* Typography for Noor Ul Huda */}
      {showText && (
        <div className="flex flex-col text-left rtl:text-right min-w-0">
          <span
            className={`font-heading font-bold leading-none tracking-tight truncate ${
              isLight ? 'text-white' : 'text-[#064E3B]'
            } ${
              size === 'sm'
                ? 'text-xs sm:text-sm'
                : size === 'lg'
                ? 'text-lg sm:text-2xl'
                : 'text-sm sm:text-base md:text-lg'
            }`}
          >
            Noor Ul Huda
          </span>
          <span
            className={`font-nav tracking-wider sm:tracking-[0.14em] uppercase font-semibold text-[7.5px] sm:text-[9px] md:text-[9.5px] mt-0.5 sm:mt-1 truncate ${
              isLight ? 'text-[#D4AF37]' : 'text-[#065F46]'
            }`}
          >
            Online Quran Academy
          </span>
        </div>
      )}
    </div>
  );
};
