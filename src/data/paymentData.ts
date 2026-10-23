import { PaymentMethod } from '../types';

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'bank-wire',
    name: 'Meezan Bank (Direct Bank Transfer & IBAN)',
    category: 'international',
    badge: 'Official Academy Bank',
    tagline: 'Direct IBFT, 1Link, RAAST & International SWIFT Wire Transfer.',
    description: 'Direct wire or local IBFT transfer into our verified Meezan Islamic Bank account in Pakistan. Instant confirmation upon sharing the receipt.',
    supportedCurrencies: ['PKR', 'USD', 'GBP', 'EUR', 'CAD', 'AUD', 'AED', 'SAR'],
    instructions: 'Bank: Meezan Bank (Meezan Digital Centre) | Title: SANAULLAH | Acc: 00300114398034 | IBAN: PK59MEZN0000300114398034'
  },
  {
    id: 'visa-card',
    name: 'Visa / Mastercard (Debit & Credit Cards)',
    category: 'international',
    badge: 'Secure Card Payment',
    tagline: 'Pay online with any Visa or Mastercard debit or credit card.',
    description: 'Local and international families can pay securely with a Visa or Mastercard through the official payment link shared by our billing team on WhatsApp or email after enrollment.',
    supportedCurrencies: ['USD', 'GBP', 'EUR', 'CAD', 'AUD', 'AED', 'SAR', 'PKR'],
    instructions: 'Request your secure Visa / Mastercard payment link on WhatsApp (+92 313 0958451). Card details are entered only on the secure checkout page — never share them in chat.'
  },
  {
    id: 'local-pakistan',
    name: 'EasyPaisa / JazzCash / RAAST to Meezan Bank',
    category: 'local',
    badge: 'Instant 1Link / RAAST',
    tagline: 'Zero-fee instant transfers from any Pakistani bank or mobile wallet.',
    description: 'Use EasyPaisa, JazzCash, SadaPay, NayaPay, or any mobile banking app to send via Bank Transfer to Meezan Bank.',
    supportedCurrencies: ['PKR'],
    instructions: 'Select Meezan Bank -> Enter Account No: 00300114398034 -> Verify Name: SANAULLAH -> Send receipt to WhatsApp (+92 313 0958451).'
  }
];

export const PAYMENT_STEPS = [
  {
    stepNumber: '01',
    title: 'Attend Free Trial First',
    titleUr: 'پہلے 3 روزہ مفت ٹرائل لیں',
    titleAr: 'احضر الحصة التجريبية المجانية أولاً',
    description: 'No fee or payment method is requested upfront. You take your 30-minute private trial class completely free of charge.',
    descriptionUr: 'کوئی پیشگی فیس یا بینک کارڈ درکار نہیں ہے۔ آپ 30 منٹ کی 1-on-1 پرائیویٹ کلاس بالکل مفت لیتے ہیں۔',
    descriptionAr: 'لا يُطلب منك أي رسوم أو وسيلة دفع مسبقاً. تبدأ بحصتك الفردية المباشرة (30 دقيقة) مجاناً 100% دون أي التزام.'
  },
  {
    stepNumber: '02',
    title: 'Choose Days & Package',
    titleUr: 'دن اور پیکیج منتخب کریں',
    titleAr: 'اختر الأيام والباقة المناسبة',
    description: 'If you are satisfied with the teacher, choose your desired weekly class frequency (2, 3, 4, or 5 days per week).',
    descriptionUr: 'استاد کے تدریسی انداز سے مطمئن ہونے کے بعد، اپنی پسند کے ہفتہ وار دن (2، 3، یا 5 دن فی ہفتہ) منتخب کریں۔',
    descriptionAr: 'بعد الاطمئنان لمستوى المعلم، حدد عدد الحصص الأسبوعية المفضلة (يومان، 3 أيام، أو 5 أيام أسبوعياً).'
  },
  {
    stepNumber: '03',
    title: 'Receive Secure Invoice',
    titleUr: 'محفوظ انوائس موصول کریں',
    titleAr: 'استلم الفاتورة المعتمدة وبيانات التحويل',
    description: 'Our coordinator sends your itemized invoice and preferred payment method link directly via WhatsApp (+92 313 0958451) or email.',
    descriptionUr: 'ہمارا کوآرڈینیٹر آپ کو واٹس ایپ (+92 313 0958451) یا ای میل کے ذریعے باضابطہ رسید اور بینک تفصیلات ارسال کرتا ہے۔',
    descriptionAr: 'يرسل لك منسق الأكاديمية تفاصيل الفاتورة وبيانات الحساب المصرفي الرسمي عبر واتساب (+92 313 0958451) أو البريد.'
  },
  {
    stepNumber: '04',
    title: 'Instant Confirmation & Receipt',
    titleUr: 'فوری تصدیق اور رسید',
    titleAr: 'تأكيد فوري واعتماد الجدول الدائم',
    description: 'Once completed, send your screenshot/reference number. You receive an official stamped digital receipt and your permanent schedule is active.',
    descriptionUr: 'فیس منتقلی کے بعد رسید کا اسکرین شاٹ بھیجیں، آپ کو باضابطہ مہر لگی ڈیجیٹل رسید مل جائے گی اور مستقل شیڈول شروع ہو جائے گا۔',
    descriptionAr: 'بمجرد إرسال صورة التحويل أو الرقم المرجعي، تستلم إيصالاً إلكترونياً رسمياً وتثبت مواعيد حصصك الدائمة.'
  }
];

export interface PaymentFaqItem {
  id: string;
  questionEn: string;
  questionUr: string;
  questionAr: string;
  answerEn: string;
  answerUr: string;
  answerAr: string;
  category: 'confirmation' | 'refund' | 'trial' | 'currency' | 'receipt' | 'schedule';
}

export const PAYMENT_FAQS: PaymentFaqItem[] = [
  {
    id: 'confirmation-time',
    category: 'confirmation',
    questionEn: 'How long does payment confirmation take?',
    questionUr: 'فیس کی منتقلی کے بعد تصدیق میں کتنا وقت لگتا ہے؟',
    questionAr: 'كم يستغرق تأكيد استلام الرسوم الدراسية؟',
    answerEn: 'Transfers via Meezan Bank (IBFT), RAAST, EasyPaisa, and JazzCash are confirmed almost immediately (within 10-15 minutes) once you send the payment receipt or transaction ID to our WhatsApp coordinator (+92 313 0958451). International Visa / Mastercard payments and direct SWIFT wire transfers are confirmed within 1 banking business day.',
    answerUr: 'میزان بینک (IBFT)، راست (RAAST)، ایزی پیسہ اور جاز کیش کے ذریعے ادائیگی کی تصدیق واٹس ایپ (+92 313 0958451) پر رسید بھیجتے ہی تقریباً فوری طور پر (10 سے 15 منٹ میں) ہو جاتی ہے۔ بین الاقوامی Visa / Mastercard ادائیگی اور بینک وائر ٹرانسفر (SWIFT) کی تصدیق 1 کاروباری دن میں ہو جاتی ہے۔',
    answerAr: 'يتم تأكيد التحويلات المباشرة عبر بنك ميزان، وRAAST والمحافظ الإلكترونية فورياً (خلال 10-15 دقيقة) بمجرد إرسال صورة الإشعار لمنسق الحسابات عبر واتساب (+92 313 0958451). أما الدفع الدولي ببطاقات Visa / Mastercard أو التحويل البنكي SWIFT فيتم تأكيده خلال يوم عمل واحد.'
  },
  {
    id: 'refund-policy',
    category: 'refund',
    questionEn: 'What are your refund policies and money-back guarantee?',
    questionUr: 'فیس کی واپسی (ریفنڈ) اور اطمینان کی ضمانت کیا ہے؟',
    questionAr: 'ما هي سياسة استرداد الرسوم وضمان الرضا التام؟',
    answerEn: 'We offer an unconditional 100% Satisfaction Guarantee. If you or your child are not completely satisfied with the teaching quality within the first 7 days of paid enrollment, you are entitled to a full 100% refund with no questions asked. Alternatively, you may request a free change of tutor (male or female) to better fit your learning style.',
    answerUr: 'ہم 100 فیصد اطمینان کی غیر مشروط ضمانت دیتے ہیں۔ اگر ادا شدہ کلاسز کے پہلے 7 دنوں کے دوران آپ یا آپ کا بچہ استاد کے پڑھانے کے انداز سے مطمئن نہ ہو، تو آپ بغیر کسی کٹوتی کے مکمل فیس واپسی (100% Refund) کے حقدار ہیں۔ اس کے علاوہ آپ کسی بھی وقت نیا استاد بھی منتخب کر سکتے ہیں۔',
    answerAr: 'نقدم ضمان رضا بنسبة 100% دون أي شروط. إذا لم تكن راضياً تماماً عن جودة التعليم أو أسلوب المعلم خلال الأيام السبعة الأولى من بدء الاشتراك المدفوع، فيحق لك استرداد كامل المبلغ المدفوع (100%) دون أي تعقيد، أو استبدال المعلم بمعلم آخر يناسب احتياجاتك.'
  },
  {
    id: 'trial-payment',
    category: 'trial',
    questionEn: 'Do I have to pay anything before or during the 3-day free trial?',
    questionUr: 'کیا 3 دن کی مفت ٹرائل کلاسز سے پہلے کوئی فیس ادا کرنی ہوتی ہے؟',
    questionAr: 'هل يترتب عليّ دفع أي مبلغ قبل أو خلال التجربة المجانية؟',
    answerEn: 'No, absolutely not. The 3-day trial is 100% free with no bank details, prepayment, or payment commitment required. You only decide to pay the monthly tuition after you and your child have personally attended the live trial sessions and feel completely comfortable with the assigned teacher.',
    answerUr: 'جی بالکل نہیں۔ 3 روزہ ٹرائل کلاسز 100 فیصد مفت ہیں۔ اس کے لیے کسی پیشگی ادائیگی یا بینک تفصیلات کی ضرورت نہیں ہوتی۔ آپ صرف اس وقت داخلہ لیتے ہیں جب آپ ٹرائل کلاسز لے کر استاد اور پڑھائی سے پوری طرح مطمئن ہو جائیں۔',
    answerAr: 'كلا، إطلاقاً. الحصص التجريبية لمدة 3 أيام مجانية بالكامل، ولا تتطلب إدخال أي بطاقة دفع أو أي التزام مسبق. أنت من يقرر الاشتراك فقط بعد خوض التجربة المباشرة والشعور بالراحة التامة مع المعلم.'
  },
  {
    id: 'supported-currencies',
    category: 'currency',
    questionEn: 'Which currencies and international payment methods do you accept?',
    questionUr: 'اکیڈمی کن ممالک اور کرنسیوں میں فیس قبول کرتی ہے؟',
    questionAr: 'ما هي العملات ووسائل الدفع الدولية المقبولة لدى الأكاديمية؟',
    answerEn: 'We support international families in the USA, UK, Canada, Australia, Europe, GCC/Middle East, and Pakistan. Accepted currencies include USD ($), GBP (£), EUR (€), CAD ($), AUD ($), AED, SAR, and PKR. You can pay via direct Meezan Bank transfer, Visa / Mastercard, International SWIFT/IBAN wire, or local wallets (RAAST, EasyPaisa, JazzCash).',
    answerUr: 'ہم امریکہ، برطانیہ، کینیڈا، آسٹریلیا، یورپ، خلیجی ممالک اور پاکستان کے طلباء کی سہولت کے لیے تمام بڑی کرنسیاں (USD, GBP, EUR, CAD, AUD, AED, SAR, PKR) قبول کرتے ہیں۔ ادائیگی میزان بینک اکاؤنٹ، Visa / Mastercard، بین الاقوامی وائر ٹرانسفر (SWIFT) یا موبائل بینکنگ (RAAST/EasyPaisa/JazzCash) کے ذریعے کی جا سکتی ہے۔',
    answerAr: 'نقدم خدماتنا للعائلات في جميع أنحاء العالم (أمريكا، بريطانيا، كندا، أستراليا، أوروبا، دول الخليج العربي، وغيرها). نقبل الدفع بالدولار الأمريكي والجنيه الإسترليني واليورو والريال السعودي والدرهم الإماراتي والروبية الباكستانية، عبر التحويل المصرفي المباشر، أو بطاقات Visa / Mastercard، أو التحويل البنكي الدولي SWIFT، أو المحافظ المحلية (RAAST / EasyPaisa / JazzCash).'
  },
  {
    id: 'receipt-proof',
    category: 'receipt',
    questionEn: 'How do I submit my payment receipt or screenshot?',
    questionUr: 'فیس ادا کرنے کے بعد رسید یا اسکرین شاٹ کیسے بھیجیں؟',
    questionAr: 'كيف أقوم بإرسال إيصال السداد أو لقطة الشاشة للتأكيد؟',
    answerEn: 'Simply take a clear screenshot or photo of your payment confirmation showing the transaction ID, date, and amount, and send it to our verified WhatsApp billing coordinator at +92 313 0958451. Our team will verify it, issue an official digital acknowledgment receipt, and confirm your scheduled class time slots.',
    answerUr: 'رقم منتقل کرنے کے بعد بینک ایپ یا رسید کا اسکرین شاٹ ہمارے آفیشل واٹس ایپ نمبر (+92 313 0958451) پر ارسال فرمائیں۔ ہماری ٹیم تصدیق کے بعد آپ کو باضابطہ ڈیجیٹل رسید جاری کرے گی اور مستقل کلاسز کی تصدیق کر دے گی۔',
    answerAr: 'بكل بساطة، التقط صورة واضحة لإشعار التحويل البنكي أو رقم العملية، وأرسلها عبر تطبيق واتساب إلى منسق الأكاديمية على الرقم (+92 313 0958451). سيقوم فريقنا بمطابقة التحويل، وإصدار إيصال إلكتروني مختوم وتأكيد جدول الحصص فوراً.'
  },
  {
    id: 'reschedule-pause',
    category: 'schedule',
    questionEn: 'Can I pause, reschedule, or cancel my classes anytime?',
    questionUr: 'کیا ہم سفر، امتحانات یا رمضان کے دوران کلاسز روک یا تبدیل کر سکتے ہیں؟',
    questionAr: 'هل يمكنني إيقاف الحصص مؤقتاً أو تعديل المواعيد عند السفر أو الامتحانات؟',
    answerEn: 'Yes! All our packages are on a flexible monthly subscription with no long-term lock-in contract. If you need to reschedule a class due to illness, travel, school exams, or pause during Ramadan or summer break, simply inform your coordinator 24 to 48 hours in advance to arrange makeup sessions or credit rollover.',
    answerUr: 'جی ہاں! ہمارے تمام پیکیجز ماہانہ بنیادوں پر ہیں اور کوئی جبری معاہدہ نہیں ہے۔ سفر، امتحانات، بیماری یا رمضان المبارک کی تعطیلات کی صورت میں آپ 24 سے 48 گھنٹے پہلے آگاہ کر کے کلاسز ری شیڈول یا وقتی طور پر موقوف (Pause) کر سکتے ہیں۔',
    answerAr: 'نعم بكل تأكيد! جميع اشتراكاتنا شهرية مرنة دون عقود طويلة الأجل. في حال طرأ ظرف كالسفر أو الامتحانات أو الرغبة في إيقاف مؤقت خلال شهر رمضان المبارك، يكفي إبلاغ المنسق قبل 24-48 ساعة لترتيب حصص تعويضية أو ترحيل الرصيد للشهر التالي.'
  }
];


