import { FeePackage } from '../types';

export type SupportedCurrency = 'USD' | 'GBP' | 'EUR' | 'CAD' | 'AUD';

export interface CurrencyInfo {
  code: SupportedCurrency;
  symbol: string;
  name: string;
  flag: string;
}

export const SUPPORTED_CURRENCIES: CurrencyInfo[] = [
  { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧' },
  { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
  { code: 'CAD', symbol: 'CA$', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'AUD', symbol: 'AU$', name: 'Australian Dollar', flag: '🇦🇺' }
];

export const FEE_PACKAGES: FeePackage[] = [
  {
    id: 'plan-2-days',
    name: 'Starter Plan',
    badge: 'Light Schedule',
    classesPerWeek: 2,
    classesPerMonth: 8,
    sessionDuration: '30 Minutes',
    recommended: false,
    prices: {
      USD: 36,
      GBP: 29,
      EUR: 33,
      CAD: 48,
      AUD: 52
    },
    billingPeriod: 'per month',
    idealFor: 'Beginners, busy working professionals, or very young toddlers needing a gentle introduction.',
    features: [
      '8 Live One-to-One Classes per Month',
      '30 Minutes per Class with Dedicated Mentor',
      'Male or Female Qualified Teacher of Choice',
      'Noorani Qaida or Nazra Quran Foundation',
      'Digital Progress Report Every 30 Days',
      'Free Class Rescheduling (24h advance notice)',
      'Free 30-Minute Trial Before First Payment'
    ]
  },
  {
    id: 'plan-3-days',
    name: 'Standard Plan',
    badge: 'Most Popular',
    classesPerWeek: 3,
    classesPerMonth: 12,
    sessionDuration: '30 Minutes',
    recommended: true,
    prices: {
      USD: 49,
      GBP: 39,
      EUR: 45,
      CAD: 66,
      AUD: 72
    },
    billingPeriod: 'per month',
    idealFor: 'Consistent, steady learning for school-aged children, teens, and adults learning Tajweed.',
    features: [
      '12 Live One-to-One Classes per Month',
      '30 Minutes per Class with Undivided Focus',
      'Male or Female Certified Teacher of Choice',
      'Full Access to Quran, Tajweed & Islamic Studies',
      'Monthly Parent-Teacher Review & Recording Option',
      '2 Guaranteed Makeup Classes for Missed Sessions',
      'Free Study Materials & Digital Quran Reader',
      'Free 30-Minute Assessment Trial'
    ]
  },
  {
    id: 'plan-4-days',
    name: 'Accelerated Plan',
    badge: 'Fast Progress',
    classesPerWeek: 4,
    classesPerMonth: 16,
    sessionDuration: '30 Minutes',
    recommended: false,
    prices: {
      USD: 62,
      GBP: 49,
      EUR: 57,
      CAD: 84,
      AUD: 92
    },
    billingPeriod: 'per month',
    idealFor: 'Students preparing for Hifz, rapid Quran completion, or New Muslims needing regular guidance.',
    features: [
      '16 Live One-to-One Classes per Month',
      '30 Minutes Dedicated Daily Practice (Mon-Thu)',
      'Male or Female Senior Scholar / Ustadhah',
      'Comprehensive Tajweed + Duas + Hadith',
      'Bi-Weekly Memorization / Fluency Checkpoints',
      'Flexible Timings with Priority Slot Selection',
      'Dedicated Academic WhatsApp Coordinator Support'
    ]
  },
  {
    id: 'plan-5-days',
    name: 'Intensive / Hifz Plan',
    badge: 'Complete Immersion',
    classesPerWeek: 5,
    classesPerMonth: 20,
    sessionDuration: '30 Minutes',
    recommended: false,
    prices: {
      USD: 75,
      GBP: 59,
      EUR: 69,
      CAD: 102,
      AUD: 110
    },
    billingPeriod: 'per month',
    idealFor: 'Full-time Hifz memorization, intensive Arabic language, or quick foundation mastery.',
    features: [
      '20 Live One-to-One Classes per Month (Mon - Fri)',
      '30 Minutes Daily Class with Certified Hafiz/Hafiza',
      'Rigorous Sabaq, Sabqi, and Manzil Structure',
      'Weekly Comprehensive Retention Exam',
      'Custom Milestone Tracking & Quarterly Certification',
      'Unlimited Rescheduling with Assigned Teacher',
      'Direct WhatsApp Line to Instructor & Principal'
    ]
  }
];

export const FEE_HIGHLIGHTS = [
  {
    title: 'Zero Registration Fee',
    description: '100% free enrollment. You never pay any setup, administrative, or platform access fees.'
  },
  {
    title: '10% Family & Sibling Discount',
    description: 'Enrolling more than one child or family member? Receive an automatic 10% discount on every additional student.'
  },
  {
    title: 'Pay After Free Trial Only',
    description: 'No credit card or prepayment required to test our classes. Pay only once you are 100% satisfied with your teacher.'
  },
  {
    title: 'No Long-Term Contracts',
    description: 'Billed month-to-month. You can pause during family holidays or cancel anytime with zero penalties.'
  }
];
