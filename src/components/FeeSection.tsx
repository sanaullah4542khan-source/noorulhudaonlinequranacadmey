import React, { useState } from 'react';
import { 
  FEE_PACKAGES, 
  SUPPORTED_CURRENCIES, 
  SupportedCurrency, 
  FEE_HIGHLIGHTS 
} from '../data/feeData';
import { 
  Check, 
  Sparkles, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Calendar, 
  CreditCard, 
  DollarSign, 
  Layers 
} from 'lucide-react';

interface FeeSectionProps {
  onOpenFreeTrial: (courseId?: string) => void;
}

export const FeeSection: React.FC<FeeSectionProps> = ({ onOpenFreeTrial }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<SupportedCurrency>('USD');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const currentCurrencyInfo = SUPPORTED_CURRENCIES.find((c) => c.code === selectedCurrency)!;

  const academyWhatsAppUrl = 'https://wa.me/923130958451?text=' + encodeURIComponent('Assalamu Alaikum! I would like to inquire about class fee packages and enroll in a free trial at Noor Ul Huda Academy.');

  return (
    <section id="fees" className="py-20 lg:py-28 bg-[#faf9f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064232]/10 border border-[#064232]/20 mb-4">
            <DollarSign className="w-4 h-4 text-[#064232]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#064232]">
              Simple & Honest Tuition
            </span>
          </div>

          <h2
            id="fees-headline"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#064232] tracking-tight mb-4"
          >
            Transparent Fee Plans <br className="hidden sm:inline" />
            <span className="text-[#c69b32] font-serif italic">For Every Family</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4e655c] leading-relaxed">
            All courses — from Noorani Qaida and Tajweed to Hifz, Islamic Studies, and Arabic — are covered under our flexible, monthly one-to-one class packages. Pay nothing until you complete your free trial.
          </p>

          {/* Controls Bar: Currency Selector + View Toggle */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Currency Selector */}
            <div className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-[#e5e3d7] shadow-sm">
              <span className="text-xs font-semibold text-[#4e655c] px-3 hidden sm:inline">
                Currency:
              </span>
              <div className="flex items-center gap-1">
                {SUPPORTED_CURRENCIES.map((cur) => (
                  <button
                    key={cur.code}
                    id={`currency-btn-${cur.code}`}
                    onClick={() => setSelectedCurrency(cur.code)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      selectedCurrency === cur.code
                        ? 'bg-[#064232] text-white shadow-sm'
                        : 'text-[#4e655c] hover:text-[#064232] hover:bg-[#faf9f5]'
                    }`}
                  >
                    <span>{cur.flag}</span>
                    <span>{cur.code}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle (Cards vs Comparison Table) */}
            <div className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-[#e5e3d7] shadow-sm text-xs font-medium text-[#4e655c]">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  viewMode === 'cards'
                    ? 'bg-[#064232] text-white font-bold shadow-sm'
                    : 'hover:text-[#064232]'
                }`}
              >
                Package Cards
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  viewMode === 'table'
                    ? 'bg-[#064232] text-white font-bold shadow-sm'
                    : 'hover:text-[#064232]'
                }`}
              >
                Comparison Table
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Pricing Cards */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 mb-16 items-stretch">
            {FEE_PACKAGES.map((pkg) => {
              const price = pkg.prices[selectedCurrency];
              const isRec = pkg.recommended;

              return (
                <div
                  key={pkg.id}
                  id={`fee-card-${pkg.id}`}
                  className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                    isRec
                      ? 'bg-white border-2 border-[#c69b32] shadow-xl md:-translate-y-2 ring-4 ring-[#c69b32]/10'
                      : 'bg-white border border-[#e5e3d7] shadow-sm hover:shadow-md hover:border-[#c69b32]/40'
                  }`}
                >
                  {/* Top Badge */}
                  {isRec && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#e6c564] to-[#c69b32] text-[#064232] px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{pkg.badge}</span>
                    </div>
                  )}

                  <div>
                    {!isRec && (
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#997217] bg-[#faf9f5] border border-[#f0eee4] px-2.5 py-1 rounded-full mb-3">
                        {pkg.badge}
                      </span>
                    )}

                    <h3 className="font-serif text-xl font-bold text-[#064232] mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#4e655c] leading-relaxed mb-4 min-h-[34px]">
                      {pkg.idealFor}
                    </p>

                    {/* Price Block */}
                    <div className="py-4 my-2 border-y border-[#f0eee4]">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs font-semibold text-[#4e655c]">
                          {currentCurrencyInfo.symbol}
                        </span>
                        <span className="text-4xl font-serif font-extrabold text-[#064232] tracking-tight">
                          {price}
                        </span>
                        <span className="text-xs text-[#4e655c] font-medium ml-1">
                          /{pkg.billingPeriod}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#064232] font-semibold mt-1 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-[#c69b32]" />
                        <span>
                          {pkg.classesPerWeek} Days/Wk ({pkg.classesPerMonth} classes/mo • {pkg.sessionDuration})
                        </span>
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2.5 my-6 text-xs text-[#13241d]">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#064232] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 mt-auto">
                    <button
                      id={`book-fee-btn-${pkg.id}`}
                      onClick={() => onOpenFreeTrial()}
                      className={`w-full py-3 px-4 rounded-xl font-semibold text-xs tracking-wide transition-all flex items-center justify-center gap-2 shadow-sm ${
                        isRec
                          ? 'text-[#064232] bg-gradient-to-r from-[#e6c564] to-[#c69b32] hover:brightness-105 active:scale-95 shadow-md'
                          : 'text-[#064232] bg-[#faf9f5] hover:bg-[#f0eee4] border border-[#e5e3d7]'
                      }`}
                    >
                      <span>Start With Free Trial</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="block text-center text-[10px] text-[#4e655c] mt-2">
                      Zero upfront payment required
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View Mode 2: Structured Comparison Table */}
        {viewMode === 'table' && (
          <div className="bg-white rounded-3xl border border-[#e5e3d7] shadow-sm overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#064232] text-white">
                    <th className="p-4 sm:p-5 font-serif font-bold text-base">Plan Feature</th>
                    {FEE_PACKAGES.map((pkg) => (
                      <th key={pkg.id} className="p-4 sm:p-5 text-center">
                        <span className="block text-xs uppercase tracking-wider text-[#d5aa44]">
                          {pkg.badge}
                        </span>
                        <span className="block font-serif font-bold text-lg">{pkg.name}</span>
                        <span className="block font-serif text-xl font-extrabold text-[#f4e8c7] mt-1">
                          {currentCurrencyInfo.symbol}{pkg.prices[selectedCurrency]}
                          <span className="text-xs font-normal text-emerald-200">/mo</span>
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0eee4] text-[#13241d]">
                  <tr>
                    <td className="p-4 font-semibold text-[#064232] bg-[#faf9f5]">Live One-to-One Class Count</td>
                    <td className="p-4 text-center">8 Classes / Month (2x/wk)</td>
                    <td className="p-4 text-center bg-amber-50/40 font-semibold text-[#064232]">12 Classes / Month (3x/wk)</td>
                    <td className="p-4 text-center">16 Classes / Month (4x/wk)</td>
                    <td className="p-4 text-center">20 Classes / Month (5x/wk)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#064232] bg-[#faf9f5]">Session Duration</td>
                    <td className="p-4 text-center">30 Minutes</td>
                    <td className="p-4 text-center bg-amber-50/40">30 Minutes</td>
                    <td className="p-4 text-center">30 Minutes</td>
                    <td className="p-4 text-center">30 Minutes (Daily)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#064232] bg-[#faf9f5]">Eligible Courses</td>
                    <td className="p-4 text-center" colSpan={4}>
                      <span className="text-xs text-[#064232] font-medium">
                        All Courses Included: Nazra, Tajweed, Hifz, Islamic Studies, Duas, Arabic & New Muslim Pathway
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#064232] bg-[#faf9f5]">Teacher Preference</td>
                    <td className="p-4 text-center">Male or Female Ustadhah</td>
                    <td className="p-4 text-center bg-amber-50/40">Male or Female Ustadhah</td>
                    <td className="p-4 text-center">Male or Female Ustadhah</td>
                    <td className="p-4 text-center">Male or Female Ustadhah</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#064232] bg-[#faf9f5]">Monthly Progress Report</td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 mx-auto text-[#064232]" /></td>
                    <td className="p-4 text-center bg-amber-50/40"><Check className="w-4 h-4 mx-auto text-[#064232]" /></td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 mx-auto text-[#064232]" /></td>
                    <td className="p-4 text-center"><Check className="w-4 h-4 mx-auto text-[#064232]" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#064232] bg-[#faf9f5]">Guaranteed Makeup Classes</td>
                    <td className="p-4 text-center">1 class with notice</td>
                    <td className="p-4 text-center bg-amber-50/40 font-semibold">2 classes with notice</td>
                    <td className="p-4 text-center">3 classes with notice</td>
                    <td className="p-4 text-center">Flexible unlimited</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#064232] bg-[#faf9f5]">Action</td>
                    {FEE_PACKAGES.map((pkg) => (
                      <td key={pkg.id} className="p-4 text-center">
                        <button
                          onClick={() => onOpenFreeTrial()}
                          className="px-4 py-2 rounded-xl text-xs font-semibold text-[#064232] bg-gradient-to-r from-[#e6c564] to-[#c69b32] hover:brightness-105 transition-all shadow-sm"
                        >
                          Book Trial
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 4 Guarantees & Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {FEE_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#e5e3d7] shadow-sm flex flex-col justify-start"
            >
              <div className="w-8 h-8 rounded-xl bg-[#064232]/10 flex items-center justify-center text-[#064232] mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#064232] mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-[#4e655c] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Custom Hours / Extended Session Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#e5e3d7] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#c69b32] block mb-1">
              Custom Requirements?
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#064232] mb-1">
              Need 45-Minute Classes or Family Sibling Bundles?
            </h3>
            <p className="text-xs sm:text-sm text-[#4e655c] leading-relaxed max-w-2xl">
              We cater to specialized requests, including adult intensive 60-minute sessions, weekend-only classes, and family discounts for 2 or more siblings.
            </p>
          </div>

          <div className="flex items-center gap-3 whitespace-nowrap">
            <a
              id="fee-custom-whatsapp-btn"
              href={academyWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#064232] bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 transition-colors inline-flex items-center gap-2"
            >
              <span>Ask on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenFreeTrial()}
              className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#064232] bg-gradient-to-r from-[#e6c564] to-[#c69b32] hover:brightness-105 transition-all shadow-md"
            >
              Book 1st Free Class
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
