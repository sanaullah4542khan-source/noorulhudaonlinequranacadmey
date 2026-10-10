import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  Heart,
  BookOpen,
  HelpCircle,
  ShieldAlert,
  Compass,
  MessageCircle,
  Globe,
  Loader2,
  ExternalLink,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getSafirWhatsAppUrl } from '../data/safirData';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  disclaimer?: string;
  quickActions?: { label: string; action: string }[];
}

interface AIAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFreeTrial?: (courseId?: string) => void;
  onOpenPortal?: () => void;
}

export const AIAssistantDrawer: React.FC<AIAssistantDrawerProps> = ({
  isOpen,
  onClose,
  onOpenFreeTrial,
  onOpenPortal
}) => {
  const { language } = useLanguage();
  const [mode, setMode] = useState<'tutor' | 'new_muslim'>('tutor');
  const [selectedLang, setSelectedLang] = useState<'en' | 'ur' | 'ar'>(
    language === 'ur' ? 'ur' : language === 'ar' ? 'ar' : 'en'
  );
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text:
        selectedLang === 'ur'
          ? 'السلام علیکم! میں نور الہدیٰ آن لائن قران اکیڈمی کا سمارٹ اسسٹنٹ ہوں۔ آپ مجھ سے کورسز، فیس، تجوید کے بنیادی قواعد، یا داخلے کے بارے میں دریافت کر سکتے ہیں۔'
          : selectedLang === 'ar'
          ? 'مرحباً بكم في المساعد الذكي لأكاديمية نور الهدى لتعليم القرآن الكريم. كيف يمكنني إرشادكم اليوم بخصوص الدورات، الرسوم، أو أحكام التجويد؟'
          : 'As-salamu alaykum! Welcome to Noor Ul Huda Quran Academy AI Tutor. I can help guide your Quran learning journey, explain courses and fees, provide Tajweed fundamentals, and support new Muslims.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      disclaimer:
        'AI provides educational guidance. For live Quranic recitation, Makharij evaluation, and legal rulings (Fatwas), please study with our certified Sheikhs.'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const quickPrompts = {
    en: {
      tutor: [
        'What are the monthly course fees?',
        'How do I book a 3-day free trial?',
        'Explain the basic rules of Noon Saakin',
        'What is the daily Hifz routine (Sabak, Sabqi, Manzil)?'
      ],
      new_muslim: [
        'First steps for a new Muslim: where do I begin?',
        'How to perform Wudu (Ablution) step by step?',
        'How do I learn Surah Al-Fatiha easily?',
        'Can I get a patient 1-on-1 mentor for reverts?'
      ]
    },
    ur: {
      tutor: [
        'ماہانہ فیس اور کلاس شیڈول کیا ہے؟',
        'مفت 3 روزہ ٹرائل کیسے بک کریں؟',
        'تجوید کے بنیادی اصول بتائیں',
        'حفظ قران کا روزانہ کا معمول کیا ہے؟'
      ],
      new_muslim: [
        'نئے مسلمان کے لیے اولین رہنمائی',
        'وضو کرنے کا مکمل مسنون طریقہ',
        'سورۃ الفاتحہ سیکھنے کا آسان طریقہ',
        'کیا نو مسلم بھائیوں/بہنوں کے لیے خصوصی استاد ہیں؟'
      ]
    },
    ar: {
      tutor: [
        'ما هي أسعار الباقات الشهرية؟',
        'كيف أحجز حصة تجريبية مجانية؟',
        'ما هي أحكام النون الساكنة والتنوين؟',
        'كيف يتم تنظيم جدول الحفظ والمراجعة؟'
      ],
      new_muslim: [
        'أولى خطوات المسلم الجديد',
        'كيفية الوضوء خطوة بخطوة',
        'تعلم سورة الفاتحة بسهولة',
        'هل يوجد معلمون مخصصون للمهتدين الجدد؟'
      ]
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    const userMsg: Message = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          language: selectedLang,
          mode: mode,
          history: messages.slice(-4).map((m) => ({ role: m.sender, text: m.text }))
        })
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();

      const assistantMsg: Message = {
        id: `asst-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || 'Thank you for your question. Please feel free to ask more or contact our teachers.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        disclaimer: data.disclaimer
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.warn('AI Chat fallback triggered:', err);
      // Client-side graceful fallback
      const fallbackText =
        selectedLang === 'ur'
          ? 'معذرت، رابطہ سست ہے۔ نور الہدیٰ اکیڈمی 1-آن-1 کلاسز پیش کرتی ہے: پریمیم ($85)، اسٹینڈرڈ ($59)، اور بنیادی ($40)۔ آپ ہمارے واٹس ایپ نمبر (+92 313 0958451) پر فوری رابطہ کر سکتے ہیں۔'
          : 'Thank you for reaching out! Noor Ul Huda Quran Academy provides 1-on-1 personalized lessons with certified Sheikhs. Monthly plans start from $40. For instant teacher assignment, contact WhatsApp: +92 313 0958451.';

      const fallbackMsg: Message = {
        id: `asst-${Date.now()}`,
        sender: 'assistant',
        text: fallbackText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        disclaimer: 'For precise Tajweed recitation corrections, consult a certified live teacher.'
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const currentPrompts = quickPrompts[selectedLang][mode];

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#faf9f5] h-full shadow-2xl flex flex-col border-l border-[#c69b32]/30 relative animate-slide-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#064232] text-white px-5 py-4 flex items-center justify-between border-b border-[#0a523f] relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-[#c69b32]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#e6c564] to-[#c69b32] flex items-center justify-center text-[#064232] shadow-md flex-shrink-0">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-tight">
                  Noor Ul Huda AI Assistant
                </h3>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#facc15] text-[#064232]">
                  24/7 LIVE
                </span>
              </div>
              <p className="text-xs text-emerald-200">Quranic Studies & Academic Guidance</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-emerald-100 hover:text-white transition-colors"
              aria-label="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mode Selector & Language Switcher Subbar */}
        <div className="bg-[#f0eee4] px-4 py-2.5 border-b border-[#e5e3d7] flex flex-wrap items-center justify-between gap-2">
          {/* Mode Switcher */}
          <div className="flex items-center p-0.5 rounded-xl bg-white border border-[#e5e3d7] shadow-sm">
            <button
              onClick={() => setMode('tutor')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                mode === 'tutor'
                  ? 'bg-[#064232] text-white shadow-sm'
                  : 'text-[#4e655c] hover:text-[#064232]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Academy Tutor</span>
            </button>
            <button
              onClick={() => setMode('new_muslim')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                mode === 'new_muslim'
                  ? 'bg-[#c69b32] text-[#064232] shadow-sm font-bold'
                  : 'text-[#4e655c] hover:text-[#064232]'
              }`}
            >
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>New Muslim Pathway</span>
            </button>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-1 text-xs">
            <Globe className="w-3.5 h-3.5 text-[#064232]" />
            <button
              onClick={() => setSelectedLang('en')}
              className={`px-2 py-1 rounded-md text-[11px] font-bold ${
                selectedLang === 'en' ? 'bg-[#064232] text-white' : 'text-[#4e655c] hover:bg-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setSelectedLang('ur')}
              className={`px-2 py-1 rounded-md text-[11px] font-bold font-nastaliq ${
                selectedLang === 'ur' ? 'bg-[#064232] text-white' : 'text-[#4e655c] hover:bg-white'
              }`}
            >
              اردو
            </button>
            <button
              onClick={() => setSelectedLang('ar')}
              className={`px-2 py-1 rounded-md text-[11px] font-bold font-arabic ${
                selectedLang === 'ar' ? 'bg-[#064232] text-white' : 'text-[#4e655c] hover:bg-white'
              }`}
            >
              عربي
            </button>
          </div>
        </div>

        {/* New Muslim Welcome Banner (if in that mode) */}
        {mode === 'new_muslim' && (
          <div className="bg-gradient-to-r from-amber-50 to-emerald-50 px-4 py-2.5 border-b border-amber-200/60 flex items-center gap-2.5 text-xs text-[#064232]">
            <Heart className="w-4 h-4 text-[#c69b32] flex-shrink-0" />
            <span className="font-medium">
              Welcome home! Ask gently about prayer, purification, Quran reading, or finding a supportive mentor.
            </span>
          </div>
        )}

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-[#064232] text-white rounded-tr-none'
                    : 'bg-white text-[#13241d] border border-[#e5e3d7] rounded-tl-none'
                }`}
                dir={/[\u0600-\u06FF]/.test(msg.text) ? 'rtl' : 'ltr'}
              >
                <div className="flex items-center gap-1.5 mb-1 opacity-70 text-[10px]">
                  {msg.sender === 'assistant' ? (
                    <>
                      <Bot className="w-3 h-3 text-[#c69b32]" />
                      <span className="font-semibold text-[#064232]">Noor Ul Huda AI</span>
                    </>
                  ) : (
                    <>
                      <User className="w-3 h-3 text-emerald-200" />
                      <span>You</span>
                    </>
                  )}
                  <span>• {msg.timestamp}</span>
                </div>

                <div className="whitespace-pre-line">{msg.text}</div>

                {msg.disclaimer && (
                  <div className="mt-2.5 pt-2 border-t border-amber-100 flex items-start gap-1.5 text-[10.5px] text-amber-800 bg-amber-50/80 p-2 rounded-lg">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>{msg.disclaimer}</span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-[#4e655c] bg-white p-3 rounded-2xl border border-[#e5e3d7] w-fit shadow-sm">
              <Loader2 className="w-4 h-4 text-[#c69b32] animate-spin" />
              <span>Consulting Noor Ul Huda Knowledge Base...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Prompt Chips */}
        <div className="px-4 py-2 bg-[#f5f4ed] border-t border-[#e5e3d7] overflow-x-auto">
          <p className="text-[11px] font-semibold text-[#064232] mb-1.5 flex items-center gap-1">
            <Compass className="w-3 h-3 text-[#c69b32]" />
            <span>Recommended Questions:</span>
          </p>
          <div className="flex items-center gap-1.5 flex-nowrap pb-1">
            {currentPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(p)}
                disabled={isLoading}
                className="whitespace-nowrap px-2.5 py-1 rounded-lg bg-white border border-[#e5e3d7] hover:border-[#c69b32] hover:bg-emerald-50/50 text-[11px] text-[#064232] transition-colors shadow-2xs font-medium"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Human Teacher Escalation Banner */}
        <div className="px-4 py-2 bg-[#064232]/5 border-t border-[#e5e3d7] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px] text-[#064232]">
            <GraduationCap className="w-4 h-4 text-[#c69b32]" />
            <span className="font-medium">Ready for real 1-on-1 human recitation?</span>
          </div>
          <div className="flex items-center gap-1.5">
            {onOpenFreeTrial && (
              <button
                onClick={() => {
                  onClose();
                  onOpenFreeTrial();
                }}
                className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-[#e6c564] to-[#c69b32] text-[#064232] text-[11px] font-bold hover:brightness-105 shadow-sm"
              >
                Book Free Trial
              </button>
            )}
            <a
              href={getSafirWhatsAppUrl('Assalamu Alaikum! I would like to speak directly with an academic advisor.')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-lg text-[#25D366] hover:bg-[#25D366]/10 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3.5 sm:p-4 bg-white border-t border-[#e5e3d7]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={
                selectedLang === 'ur'
                  ? 'اپنا سوال یہاں لکھیں...'
                  : selectedLang === 'ar'
                  ? 'اكتب سؤالك هنا...'
                  : 'Ask about Tajweed rules, courses, fees, or prayers...'
              }
              disabled={isLoading}
              dir={selectedLang === 'ur' || selectedLang === 'ar' ? 'rtl' : 'ltr'}
              className="flex-1 px-4 py-2.5 rounded-xl bg-[#faf9f5] border border-[#e5e3d7] text-xs sm:text-sm text-[#13241d] focus:outline-none focus:border-[#064232] shadow-inner transition-colors"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className="px-4 py-2.5 rounded-xl bg-[#064232] hover:bg-[#085a44] disabled:opacity-50 text-white text-xs font-semibold flex items-center justify-center transition-all shadow-md active:scale-95"
              aria-label="Send Message"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
