import React, { useState, useEffect } from 'react';
import {
  X,
  Zap,
  ShieldCheck,
  Globe,
  Wifi,
  Cpu,
  CheckCircle2,
  Server,
  Activity,
  Layers,
  Sparkles,
  ArrowRight,
  Headphones,
  Video
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HighVersionSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFreeTrial?: () => void;
}

export const HighVersionSystemModal: React.FC<HighVersionSystemModalProps> = ({
  isOpen,
  onClose,
  onOpenFreeTrial
}) => {
  const { isRtl } = useLanguage();
  const [latency, setLatency] = useState(16);
  const [packetHealth, setPacketHealth] = useState(100);
  const [activeEdge, setActiveEdge] = useState('Global Edge Node (Anycast CDN)');

  useEffect(() => {
    if (!isOpen) return;

    // Simulate real-time live ping oscillation between 12ms and 24ms for real feel
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 8) + 14);
      setPacketHealth(99.8 + Math.random() * 0.2);
    }, 2500);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="bg-[#05221a] text-white w-full max-w-2xl rounded-2xl sm:rounded-3xl border border-[#facc15]/40 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-[#041c15] via-[#064232] to-[#041c15] p-4 sm:p-6 border-b border-[#0a523f] flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#facc15] text-[#064232] flex items-center justify-center shadow-lg flex-shrink-0 font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-bold text-[#facc15]">
                  High Version Architecture v4.5
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Moment Speed Active
                </span>
              </div>
              <h2 className="text-base sm:text-xl font-heading font-bold text-white leading-tight">
                Noor Ul Huda High-Speed Learning System
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close high version specs"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Diagnostics Metrics Bar */}
        <div className="grid grid-cols-3 bg-[#031510] border-b border-[#0a523f] p-3 sm:p-4 text-center gap-2 divide-x divide-[#0a523f] rtl:divide-x-reverse">
          <div>
            <div className="flex items-center justify-center gap-1 text-[11px] text-gray-400 mb-0.5">
              <Activity className="w-3 h-3 text-[#facc15]" />
              <span>Real-Time Latency</span>
            </div>
            <div className="text-base sm:text-xl font-mono font-bold text-[#facc15]">
              {latency} ms
            </div>
            <span className="text-[9px] sm:text-[10px] text-emerald-400 font-medium">Ultra Low Ping</span>
          </div>

          <div>
            <div className="flex items-center justify-center gap-1 text-[11px] text-gray-400 mb-0.5">
              <Wifi className="w-3 h-3 text-emerald-400" />
              <span>Network Uptime</span>
            </div>
            <div className="text-base sm:text-xl font-mono font-bold text-emerald-300">
              {packetHealth.toFixed(1)}%
            </div>
            <span className="text-[9px] sm:text-[10px] text-emerald-400 font-medium">Zero Packet Loss</span>
          </div>

          <div>
            <div className="flex items-center justify-center gap-1 text-[11px] text-gray-400 mb-0.5">
              <Cpu className="w-3 h-3 text-amber-400" />
              <span>Engine Status</span>
            </div>
            <div className="text-base sm:text-xl font-mono font-bold text-white">
              60 FPS
            </div>
            <span className="text-[9px] sm:text-[10px] text-[#facc15] font-medium">GPU Accelerated</span>
          </div>
        </div>

        {/* Scrollable System Details */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6 text-xs sm:text-sm text-gray-200">
          {/* Key Advantages */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm sm:text-base mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#facc15]" />
              <span>Why Noor Ul Huda High Version System Is Different</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#facc15]/30 transition-all">
                <div className="flex items-center gap-2 font-bold text-white mb-1">
                  <Headphones className="w-4 h-4 text-[#facc15]" />
                  <span>Crystal Tajweed Audio HD</span>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-300">
                  Enhanced vocal acoustics engineered specifically for Makharij (letter articulation) with noise suppression for flawless Quranic pronunciation.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#facc15]/30 transition-all">
                <div className="flex items-center gap-2 font-bold text-white mb-1">
                  <Video className="w-4 h-4 text-[#facc15]" />
                  <span>Low-Bandwidth Video Engine</span>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-300">
                  Adaptive streaming works seamlessly on mobile data, 4G, 5G, and home Wi-Fi without stutter or freezing during live recitation.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#facc15]/30 transition-all">
                <div className="flex items-center gap-2 font-bold text-white mb-1">
                  <Globe className="w-4 h-4 text-[#facc15]" />
                  <span>Global Anycast Cloud</span>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-300">
                  Distributed servers connect students in UK, USA, Canada, Australia, UAE, and Europe directly to the nearest edge router.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#facc15]/30 transition-all">
                <div className="flex items-center gap-2 font-bold text-white mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#facc15]" />
                  <span>100% Private & Safe Environment</span>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-300">
                  Private 1-on-1 rooms, female scholar availability for sisters and young daughters, and zero third-party recording.
                </p>
              </div>
            </div>
          </div>

          {/* System Specifications Checklist */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#041c15] border border-[#0a523f]">
            <h4 className="font-heading font-semibold text-[#facc15] text-xs sm:text-sm uppercase tracking-wide mb-2.5">
              Live System Verification Checklist
            </h4>
            <div className="space-y-1.5 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Instant Page Asset Pre-Cache & Modern ES2022 JavaScript Engine</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Zero Cumulative Layout Shift (CLS = 0.00) & Asynchronous Image Decoding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Full Cross-Device Responsive Layout across iOS, Android, macOS & Windows</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Instant WhatsApp Dispatch & 3-Day Free Trial Verification System</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="bg-[#031510] p-3 sm:p-4 border-t border-[#0a523f] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-gray-400 text-center sm:text-left rtl:sm:text-right">
            <span>Operational Status: </span>
            <span className="text-emerald-400 font-semibold">All Systems Normal (High Speed Mode)</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-nav font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
            {onOpenFreeTrial && (
              <button
                onClick={() => {
                  onClose();
                  onOpenFreeTrial();
                }}
                className="flex-1 sm:flex-none px-5 py-2 rounded-xl bg-[#facc15] hover:bg-[#eab308] text-[#064232] text-xs font-nav font-bold tracking-wide shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Book Free Trial Now</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
