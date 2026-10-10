import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PwaInstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const { isArabic, isUrdu, isRtl } = useLanguage();

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Check if dismissed before
      const dismissed = localStorage.getItem('nuh_pwa_dismissed');
      if (!dismissed) {
        setShowBanner(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setShowBanner(false);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('nuh_pwa_dismissed', 'true');
  };

  if (isInstalled || !showBanner) return null;

  return (
    <aside
      aria-label="Install App"
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`fixed bottom-20 ${
        isRtl ? 'right-4 sm:right-6' : 'left-4 sm:left-6'
      } z-40 max-w-sm w-[calc(100vw-2rem)] bg-[#064232] text-white p-4 rounded-2xl shadow-2xl border border-[#c69b32]/40 backdrop-blur-md text-left rtl:text-right`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e6c564] to-[#c69b32] flex items-center justify-center flex-shrink-0 text-[#064232] shadow-md">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#facc15]">
                {isArabic ? 'تطبيق الأكاديمية' : isUrdu ? 'اکیڈمی ایپ' : 'App Experience'}
              </span>
              <span className="px-1.5 py-0.2 text-[9px] rounded bg-[#0a523f] text-emerald-200">PWA</span>
            </div>
            <h4 className="text-sm font-semibold text-white mt-0.5">
              {isArabic ? 'تثبيت تطبيق نور الهدى' : isUrdu ? 'نور الہدیٰ ایپ انسٹال کریں' : 'Install Noor Ul Huda App'}
            </h4>
            <p className="text-xs text-emerald-100/80 mt-1 leading-relaxed">
              {isArabic
                ? 'ثبت التطبيق على شاشتك الرئيسية للوصول السريع بدون اتصال وتذكير مواعيد الحصص.'
                : isUrdu
                ? 'ہوم اسکرین پر انسٹال کریں تاکہ آف لائن رسائی اور تیز رفتار کلاسز حاصل ہوں۔'
                : 'Install on your home screen for quick offline access, live lesson reminders, and faster loading.'}
            </p>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="text-emerald-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-3.5 flex items-center gap-2">
        <button
          onClick={handleInstallClick}
          className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-[#e6c564] to-[#c69b32] hover:brightness-105 active:scale-95 text-[#064232] text-xs font-bold transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{isArabic ? 'تثبيت الآن' : isUrdu ? 'انسٹال کریں' : 'Install Web App'}</span>
        </button>
        <button
          onClick={handleDismiss}
          className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium text-emerald-200 transition-colors cursor-pointer"
        >
          {isArabic ? 'لاحقاً' : isUrdu ? 'بعد میں' : 'Maybe Later'}
        </button>
      </div>
    </aside>
  );
};
