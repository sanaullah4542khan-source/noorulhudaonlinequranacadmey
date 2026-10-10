import React from 'react';
import { Check, X, Sparkles, Percent } from 'lucide-react';
import { LEARNING_PLANS, SAVINGS_BREAKDOWN } from '../data/safirData';
import { useLanguage } from '../context/LanguageContext';

interface SafirPricingSectionProps {
  onSelectPlan: (planId: string) => void;
}

export const SafirPricingSection: React.FC<SafirPricingSectionProps> = ({ onSelectPlan }) => {
  const { t, isRtl, isArabic, isUrdu } = useLanguage();

  const getPlanDetails = (plan: typeof LEARNING_PLANS[0]) => {
    if (isArabic) {
      if (plan.id === 'standard' || plan.id === 'standard-plan') {
        return {
          name: 'الباقة القياسية (Standard)',
          tagline: 'الخيار الأكثر طلباً للعائلات',
          features: [
            { text: '3 حصص أسبوعياً (30 دقيقة للحصة)', included: true },
            { text: 'حصة فردية مباشرة 1-لـ-1 مع معلم مجاز', included: true },
            { text: 'تقرير تقييم شهري لمستوى الطالب', included: true },
            { text: 'اختيار أوقات مرنة تناسب جدولك', included: true },
            { text: 'دعم أكاديمي مباشر عبر واتساب 24/7', included: true }
          ]
        };
      }
      if (plan.id === 'basic' || plan.id === 'basic-plan') {
        return {
          name: 'الباقة الأساسية (Basic)',
          tagline: 'مثالية للأطفال والمبتدئين في البداية',
          features: [
            { text: 'حصتان أسبوعياً (30 دقيقة للحصة)', included: true },
            { text: 'حصة فردية مباشرة 1-لـ-1 مع معلم مجاز', included: true },
            { text: 'تقرير تقييم شهري لمستوى الطالب', included: true },
            { text: 'اختيار أوقات مرنة تناسب جدولك', included: true },
            { text: 'دعم أكاديمي مباشر عبر واتساب 24/7', included: false }
          ]
        };
      }
      return {
        name: 'الباقة المتميزة (Premium)',
        tagline: 'لحفظ القرآن الكريم وإتقان التجويد المكثف',
        features: [
          { text: '5 حصص أسبوعياً (30 دقيقة للحصة)', included: true },
          { text: 'حصة فردية مباشرة 1-لـ-1 مع نخبة المشايخ والقراء', included: true },
          { text: 'تقرير أداء ومتابعة أسبوعية مفصلة', included: true },
          { text: 'أولوية تامة في اختيار وتغيير المواعيد', included: true },
          { text: 'دعم أكاديمي وإشرافي مخصص 24/7', included: true }
        ]
      };
    }

    if (isUrdu) {
      if (plan.id === 'standard' || plan.id === 'standard-plan') {
        return {
          name: 'اسٹینڈرڈ پلان',
          tagline: 'سب سے زیادہ منتخب کیا جانے والا پلان',
          features: [
            { text: 'ہفتے میں 3 کلاسز (30 منٹ فی کلاس)', included: true },
            { text: '1-on-1 مصدقہ استاد کے ساتھ لائیو کلاس', included: true },
            { text: 'ماہانہ تعلیمی رپورٹ اور جائزہ', included: true },
            { text: 'لچکدار اوقات کا انتخاب', included: true },
            { text: '24/7 واٹس ایپ اکیڈمک سپورٹ', included: true }
          ]
        };
      }
      if (plan.id === 'basic' || plan.id === 'basic-plan') {
        return {
          name: 'بیسک پلان',
          tagline: 'نئے شروع کرنے والوں کے لیے موزوں',
          features: [
            { text: 'ہفتے میں 2 کلاسز (30 منٹ فی کلاس)', included: true },
            { text: '1-on-1 مصدقہ استاد کے ساتھ لائیو کلاس', included: true },
            { text: 'ماہانہ تعلیمی رپورٹ اور جائزہ', included: true },
            { text: 'لچکدار اوقات کا انتخاب', included: true },
            { text: '24/7 واٹس ایپ اکیڈمک سپورٹ', included: false }
          ]
        };
      }
      return {
        name: 'پریمیئم پلان',
        tagline: 'تیز رفتار اور جامع حفظ و تجوید نصاب',
        features: [
          { text: 'ہفتے میں 5 کلاسز (30 منٹ فی کلاس)', included: true },
          { text: '1-on-1 سینئر استاد یا قاری کے ساتھ لائیو کلاس', included: true },
          { text: 'ہفتہ وار تفصیلی تعلیمی رپورٹ', included: true },
          { text: 'ترجیحی نظام الاوقات', included: true },
          { text: '24/7 واٹس ایپ اکیڈمک سپورٹ', included: true }
        ]
      };
    }

    return {
      name: plan.name,
      tagline: plan.tagline,
      features: plan.features
    };
  };

  const getSavingsItem = (idx: number, def: typeof SAVINGS_BREAKDOWN[0]) => {
    if (isArabic) {
      if (idx === 0) return { title: 'التوفير الشهري', amount: def.amount, description: 'وفر حتى 20% مقارنة بالدروس الخصوصية المعتادة' };
      if (idx === 1) return { title: 'التوفير السنوي', amount: def.amount, description: 'خصم إضافي عند الاشتراك السنوي' };
      return { title: 'خصم العائلات والأشقاء', amount: def.amount, description: 'تخفيض خاص عند تسجيل أكثر من طالب من نفس العائلة' };
    }
    if (isUrdu) {
      if (idx === 0) return { title: 'ماہانہ بچت', amount: def.amount, description: 'عام کلاسز کے مقابلے میں 20% تک کفایت' };
      if (idx === 1) return { title: 'سالانہ بچت', amount: def.amount, description: 'سالانہ فیس پر خصوصی رعایت' };
      return { title: 'فیملی ڈسکاؤنٹ', amount: def.amount, description: 'ایک سے زیادہ بچوں کے داخلے پر اضافی رعایت' };
    }
    return def;
  };

  return (
    <section id="pricing" className="py-10 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-heading font-semibold text-[#064232] tracking-tight mb-2">
            {t.pricing.title}
          </h2>
          <div className="w-16 h-1 bg-[#eab308] mx-auto rounded-full mb-3"></div>
          <p className="font-body font-normal text-xs sm:text-base text-gray-600">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch mb-10 sm:mb-16">
          {LEARNING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            const details = getPlanDetails(plan);

            return (
              <div
                key={plan.id}
                className={`w-full bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col relative ${
                  isPopular
                    ? 'border-[#eab308] shadow-[0_10px_35px_rgba(234,179,8,0.2)] md:-translate-y-2'
                    : 'border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-lg'
                }`}
              >
                {/* Most Popular Ribbon */}
                {isPopular && (
                  <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 overflow-hidden w-28 sm:w-32 h-28 sm:h-32 z-10 pointer-events-none">
                    <div className="bg-[#eab308] text-[#13241d] font-nav font-medium text-[9px] sm:text-xs uppercase py-1 text-center rotate-45 rtl:-rotate-45 translate-x-7 sm:translate-x-8 rtl:-translate-x-7 sm:rtl:-translate-x-8 translate-y-3 sm:translate-y-4 shadow-sm tracking-wider">
                      {t.pricing.mostPopular}
                    </div>
                  </div>
                )}

                {/* Card Header Gradient */}
                <div className="bg-gradient-to-br from-[#064232] via-[#0a523f] to-[#043327] text-white p-4 sm:p-7 text-center">
                  <h3 className="text-lg sm:text-xl font-heading font-semibold tracking-tight mb-1 text-white">
                    {details.name}
                  </h3>
                  <p className="font-body font-normal text-xs text-[#a7d7c5] mb-3 sm:mb-4">
                    {details.tagline}
                  </p>

                  {/* Pricing Box */}
                  <div className="flex items-center justify-center gap-2 mb-2" dir="ltr">
                    <span className="text-gray-400 line-through text-base sm:text-lg font-body font-normal">
                      ${plan.originalPrice}
                    </span>
                    <div className="flex items-baseline">
                      <span className="text-2xl sm:text-4xl font-heading font-semibold text-white">
                        ${plan.price}
                      </span>
                      <span className="text-xs font-body font-normal text-[#a7d7c5] ml-1">{t.pricing.monthly}</span>
                    </div>
                  </div>

                  {/* Discount Badge */}
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#eab308] text-[#13241d] text-[10.5px] sm:text-[11px] font-nav font-medium shadow-sm">
                    {t.pricing.save} {plan.discountPercentage}%
                  </div>
                </div>

                {/* Card Body with Features */}
                <div className="p-4 sm:p-7 flex-grow flex flex-col justify-between bg-white text-left rtl:text-right">
                  <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 text-xs sm:text-sm font-body font-normal">
                    {details.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className={`flex items-start gap-2.5 ${
                          feature.included ? 'text-gray-700' : 'text-gray-400'
                        }`}
                      >
                        {feature.included ? (
                          <div className="w-4 h-4 rounded-full bg-[#dcfce7] text-[#15803d] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <X className="w-3 h-3 stroke-[2.5]" />
                          </div>
                        )}
                        <span className={feature.included ? 'font-medium' : 'line-through text-gray-400'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className="w-full py-2.5 sm:py-3 px-4 bg-[#eab308] hover:bg-[#ca8a04] text-[#13241d] font-nav font-medium text-xs sm:text-sm rounded-lg shadow hover:shadow-md transition-all text-center active:scale-[0.98] cursor-pointer"
                  >
                    {t.pricing.getStarted}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* "See How Much You Can Save" Section */}
        <div className="bg-[#f0fdf4] rounded-2xl p-4 sm:p-8 border border-[#bbf7d0]">
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-2xl font-heading font-semibold text-[#064232]">
              {t.pricing.savingsTitle}
            </h3>
            <p className="font-body font-normal text-xs sm:text-sm text-gray-600 mt-1">
              {t.pricing.savingsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
            {SAVINGS_BREAKDOWN.map((saving, idx) => {
              const item = getSavingsItem(idx, saving);
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-4 sm:p-5 text-center border border-[#dcfce7] shadow-sm flex flex-col items-center"
                >
                  <div className="text-[11px] sm:text-xs font-nav font-medium text-gray-500 uppercase tracking-wider mb-1">
                    {item.title}
                  </div>
                  <div className="text-xl sm:text-3xl font-heading font-semibold text-[#059669] mb-1" dir="ltr">
                    {item.amount}
                  </div>
                  <div className="text-xs font-body font-normal text-gray-600">
                    {item.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
