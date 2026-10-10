import React, { useState } from 'react';
import {
  Sparkles,
  Compass,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  Award,
  Calendar,
  Clock,
  Layers,
  GraduationCap,
  Download,
  X
} from 'lucide-react';
import { LearningPath } from '../types';

interface LearningPathWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onPathGenerated?: (path: LearningPath) => void;
  onOpenFreeTrial?: (courseTitle: string) => void;
}

export const LearningPathWizard: React.FC<LearningPathWizardProps> = ({
  isOpen,
  onClose,
  onPathGenerated,
  onOpenFreeTrial
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    studentName: 'Zaid Khan',
    studentAge: 'Youth (10-16)',
    alphabetKnowledge: 'confident', // 'none' | 'basic' | 'confident'
    readingFluency: 'struggling_rules', // 'none' | 'slow_letters' | 'struggling_rules' | 'fluent_rules'
    primaryGoal: 'tajweed_mastery', // 'qaida_basics' | 'tajweed_mastery' | 'hifz_memorization' | 'islamic_studies' | 'new_muslim'
    daysPerWeek: 3
  });

  const [isLoading, setIsLoading] = useState(false);
  const [generatedPath, setGeneratedPath] = useState<LearningPath | null>(null);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else handleGenerate();
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/learning-path/assess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName: formData.studentName,
          studentAge: formData.studentAge,
          alphabetKnowledge: formData.alphabetKnowledge,
          readingFluency: formData.readingFluency,
          targetGoal: formData.primaryGoal,
          daysPerWeek: formData.daysPerWeek
        })
      });

      if (res.ok) {
        const data = await res.json();
        setGeneratedPath(data.learningPath);
        if (onPathGenerated) onPathGenerated(data.learningPath);
      } else {
        throw new Error('Failed to generate path');
      }
    } catch (err) {
      // Local fallback generation
      const mockPath: LearningPath = {
        studentId: 'NUH-8421',
        studentName: formData.studentName,
        ageGroup: formData.studentAge,
        currentLevel:
          formData.primaryGoal === 'new_muslim'
            ? 'New Muslim Foundation'
            : formData.alphabetKnowledge === 'none'
            ? 'Beginner (Qaida)'
            : formData.primaryGoal === 'hifz_memorization'
            ? 'Advanced (Hifz & Tafsir)'
            : 'Intermediate (Nazra & Tajweed)',
        primaryGoal:
          formData.primaryGoal === 'new_muslim'
            ? 'Islamic Foundations, Salah, & Basic Quran'
            : 'Tajweed Mastery and Holy Quran Fluency',
        daysPerWeek: formData.daysPerWeek,
        recommendedCourse:
          formData.primaryGoal === 'new_muslim'
            ? 'New Muslim Foundation Pathway'
            : formData.alphabetKnowledge === 'none'
            ? 'Noorani Qaida & Basic Arabic'
            : formData.primaryGoal === 'hifz_memorization'
            ? 'Quran Memorization (Hifz) & Revision'
            : 'Tajweed-ul-Quran & Makharij Masterclass',
        stage: 'Stage 2: Core Articulations & Practical Recitation',
        milestones: [
          {
            id: 'm1',
            title: 'Diagnostic Recitation & Phonetics Audit',
            duration: 'Week 1',
            status: 'completed',
            description: '1-on-1 assessment with certified Qari to evaluate Makharij.'
          },
          {
            id: 'm2',
            title: 'Noon & Meem Saakin Rules Application',
            duration: 'Weeks 2-5',
            status: 'in-progress',
            description: 'Izhar, Idgham with Ghunnah, Iqlab, and Ikhfa across short Surahs.'
          },
          {
            id: 'm3',
            title: 'Elongations (Madd) & Stopping Signs (Waqf)',
            duration: 'Weeks 6-9',
            status: 'upcoming',
            description: 'Harmonious cadence without altering verse meanings.'
          },
          {
            id: 'm4',
            title: 'Full Juz Recitation & Retention Milestone',
            duration: 'Weeks 10-14',
            status: 'upcoming',
            description: 'Oral evaluation and progress certification.'
          }
        ],
        updatedAt: new Date().toISOString()
      };
      setGeneratedPath(mockPath);
      if (onPathGenerated) onPathGenerated(mockPath);
    } finally {
      setIsLoading(false);
      setStep(5); // Result view
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#e5e3d7] overflow-hidden my-4">
        {/* Header */}
        <div className="bg-[#064232] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#c69b32] text-[#064232]">
              Adaptive Curriculum
            </span>
            <span className="text-xs text-emerald-200">AI-Powered Diagnostic</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            Personalized Student Learning Path
          </h3>
          <p className="text-xs text-emerald-100/80 mt-1">
            Assess → Profile → Match → Plan → Learn → Review → Improve
          </p>
        </div>

        {/* Progress bar */}
        {step < 5 && (
          <div className="w-full bg-[#f0eee4] h-1.5">
            <div
              className="bg-gradient-to-r from-[#e6c564] to-[#c69b32] h-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {step === 1 && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <span className="text-xs font-bold text-[#c69b32] uppercase tracking-wider">Step 1 of 4</span>
                <h4 className="font-serif text-xl font-bold text-[#064232] mt-1">
                  Student Profile & Age Group
                </h4>
                <p className="text-xs text-[#4e655c] mt-0.5">
                  Helps us calibrate lesson pacing and match with appropriate male or female specialized teachers.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#13241d] mb-1.5">Student Name</label>
                  <input
                    type="text"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf9f5] border border-[#e5e3d7] text-sm text-[#13241d] focus:border-[#064232] focus:outline-none"
                    placeholder="e.g. Zaid Khan"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#13241d] mb-1.5">Age Group</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {['Child (4-9)', 'Youth (10-16)', 'Adult (17-49)', 'Senior (50+)'].map((age) => (
                      <button
                        key={age}
                        type="button"
                        onClick={() => setFormData({ ...formData, studentAge: age })}
                        className={`p-3 rounded-xl border text-xs font-semibold transition-all ${
                          formData.studentAge === age
                            ? 'bg-[#064232] text-white border-[#064232] shadow-sm'
                            : 'bg-[#faf9f5] text-[#4e655c] border-[#e5e3d7] hover:border-[#064232]'
                        }`}
                      >
                        {age}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <span className="text-xs font-bold text-[#c69b32] uppercase tracking-wider">Step 2 of 4</span>
                <h4 className="font-serif text-xl font-bold text-[#064232] mt-1">
                  Current Arabic & Quran Literacy
                </h4>
                <p className="text-xs text-[#4e655c] mt-0.5">
                  Be completely honest; there is immense reward in starting from any stage!
                </p>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-semibold text-[#13241d]">Arabic Alphabet Knowledge</label>
                <div className="space-y-2">
                  {[
                    { id: 'none', label: 'Cannot recognize Arabic letters yet (Starting from zero)' },
                    { id: 'basic', label: 'Know some letters but struggle connecting them' },
                    { id: 'confident', label: 'Can recognize and read connected words with vowels' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, alphabetKnowledge: item.id })}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all flex items-center justify-between ${
                        formData.alphabetKnowledge === item.id
                          ? 'bg-[#064232] text-white border-[#064232] shadow-sm'
                          : 'bg-[#faf9f5] text-[#13241d] border-[#e5e3d7] hover:border-[#064232]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {formData.alphabetKnowledge === item.id && <CheckCircle2 className="w-4 h-4 text-[#facc15]" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <label className="block text-xs font-semibold text-[#13241d]">Quran Reading Fluency</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'none', label: 'Cannot read Holy Quran yet' },
                    { id: 'slow_letters', label: 'Read slowly, spell letter-by-letter' },
                    { id: 'struggling_rules', label: 'Read sentences, need Tajweed rules' },
                    { id: 'fluent_rules', label: 'Fluent reader, seeking Hifz or Ijazah' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, readingFluency: item.id })}
                      className={`p-3 rounded-xl border text-xs text-left transition-all ${
                        formData.readingFluency === item.id
                          ? 'bg-[#064232] text-white border-[#064232] shadow-sm'
                          : 'bg-[#faf9f5] text-[#13241d] border-[#e5e3d7] hover:border-[#064232]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <span className="text-xs font-bold text-[#c69b32] uppercase tracking-wider">Step 3 of 4</span>
                <h4 className="font-serif text-xl font-bold text-[#064232] mt-1">
                  Primary Learning Objective
                </h4>
                <p className="text-xs text-[#4e655c] mt-0.5">
                  Select your primary spiritual and educational target.
                </p>
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    id: 'qaida_basics',
                    title: 'Noorani Qaida & Reading Basics',
                    desc: 'Perfect for children or beginners learning to pronounce Arabic sounds and connect words.'
                  },
                  {
                    id: 'tajweed_mastery',
                    title: 'Tajweed-ul-Quran & Makharij Articulation',
                    desc: 'Master rules of Noon Saakin, Meem Saakin, Madd, and correct throat/tongue positions.'
                  },
                  {
                    id: 'hifz_memorization',
                    title: 'Quran Memorization (Hifz)',
                    desc: 'Memorize Juz Amma, selected Surahs, or complete Quran with Sabak/Sabqi/Manzil routine.'
                  },
                  {
                    id: 'new_muslim',
                    title: 'New Muslim Islamic & Quran Foundation',
                    desc: 'Gentle, supportive pathway: learn Shahada, Wudu, Salah steps, and initial Surahs.'
                  }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, primaryGoal: item.id })}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                      formData.primaryGoal === item.id
                        ? 'bg-[#064232] text-white border-[#064232] shadow-md'
                        : 'bg-[#faf9f5] text-[#13241d] border-[#e5e3d7] hover:border-[#064232]'
                    }`}
                  >
                    <div className="font-serif font-bold text-sm">{item.title}</div>
                    <div
                      className={`text-xs mt-1 leading-relaxed ${
                        formData.primaryGoal === item.id ? 'text-emerald-100' : 'text-[#4e655c]'
                      }`}
                    >
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <span className="text-xs font-bold text-[#c69b32] uppercase tracking-wider">Step 4 of 4</span>
                <h4 className="font-serif text-xl font-bold text-[#064232] mt-1">
                  Schedule & Frequency Commitment
                </h4>
                <p className="text-xs text-[#4e655c] mt-0.5">
                  Consistency is the secret to retaining the Holy Quran.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    days: 2,
                    label: 'Basic Routine',
                    sub: '2 Days / Week',
                    price: '$40 / mo',
                    desc: '8 classes/month. Great for busy schedules and beginners.'
                  },
                  {
                    days: 3,
                    label: 'Standard (Recommended)',
                    sub: '3 Days / Week',
                    price: '$59 / mo',
                    desc: '12 classes/month. Optimal balance of practice and retention.'
                  },
                  {
                    days: 5,
                    label: 'Intensive Track',
                    sub: '5 Days / Week',
                    price: '$85 / mo',
                    desc: '20 classes/month. Perfect for rapid Hifz and committed students.'
                  }
                ].map((item) => (
                  <button
                    key={item.days}
                    type="button"
                    onClick={() => setFormData({ ...formData, daysPerWeek: item.days })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      formData.daysPerWeek === item.days
                        ? 'bg-[#064232] text-white border-[#064232] shadow-md ring-2 ring-[#c69b32]'
                        : 'bg-[#faf9f5] text-[#13241d] border-[#e5e3d7] hover:border-[#064232]'
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#c69b32] text-[#064232] inline-block mb-1">
                      {item.label}
                    </span>
                    <div className="font-serif font-bold text-base mt-1">{item.sub}</div>
                    <div className="font-bold text-sm text-[#facc15] mt-0.5">{item.price}</div>
                    <p
                      className={`text-xs mt-2 leading-relaxed ${
                        formData.daysPerWeek === item.days ? 'text-emerald-100' : 'text-[#4e655c]'
                      }`}
                    >
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && generatedPath && (
            <div className="space-y-6 animate-fade-in">
              {/* Assessment Card */}
              <div className="p-5 rounded-2xl bg-[#064232] text-white space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c69b32] text-[#064232]">
                    {generatedPath.currentLevel}
                  </span>
                  <span className="text-xs text-emerald-200">
                    Calculated for: {generatedPath.studentName}
                  </span>
                </div>
                <h4 className="font-serif text-2xl font-bold text-white">
                  {generatedPath.recommendedCourse}
                </h4>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  <strong>Pacing:</strong> {generatedPath.daysPerWeek} classes per week • {generatedPath.stage}
                </p>
              </div>

              {/* Milestone Roadmap */}
              <div>
                <h5 className="font-serif text-base font-bold text-[#064232] mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#c69b32]" />
                  <span>Custom Milestone Roadmap</span>
                </h5>

                <div className="space-y-3">
                  {generatedPath.milestones.map((m, idx) => (
                    <div
                      key={m.id}
                      className="p-3.5 rounded-xl border border-[#e5e3d7] bg-[#faf9f5] flex items-start gap-3"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#064232] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h6 className="font-serif font-bold text-sm text-[#064232]">{m.title}</h6>
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-[#f0eee4] text-[#4e655c]">
                            {m.duration}
                          </span>
                        </div>
                        <p className="text-xs text-[#4e655c] mt-1 leading-relaxed">{m.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                {onOpenFreeTrial && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenFreeTrial(generatedPath.recommendedCourse);
                    }}
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#064232] bg-gradient-to-r from-[#e6c564] to-[#c69b32] hover:brightness-105 active:scale-95 transition-all shadow-md text-center"
                  >
                    Start Free Trial for This Plan
                  </button>
                )}
                <button
                  onClick={() => window.print()}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl text-xs font-semibold text-[#064232] bg-[#faf9f5] border border-[#e5e3d7] hover:bg-[#f0eee4] transition-all flex items-center justify-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Save Plan</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        {step < 5 && (
          <div className="p-4 sm:p-5 bg-[#faf9f5] border-t border-[#e5e3d7] flex items-center justify-between">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-[#4e655c] hover:bg-black/5 disabled:opacity-30 transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              onClick={handleNext}
              disabled={isLoading}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#064232] bg-gradient-to-r from-[#e6c564] to-[#c69b32] hover:brightness-105 active:scale-95 transition-all shadow flex items-center gap-1.5"
            >
              <span>{step === 4 ? 'Generate My Plan' : 'Next Step'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
