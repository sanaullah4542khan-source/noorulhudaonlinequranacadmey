import React from 'react';
import { BookOpen, Award, Heart, ShieldCheck, Users, Target, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onOpenTrial: () => void;
  onExploreCourses: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenTrial, onExploreCourses }) => {
  return (
    <div id="about-page-view" className="pt-28 pb-20 bg-[#faf9f5]">
      {/* Header Banner */}
      <section className="relative py-16 bg-[#064232] text-white overflow-hidden">
        <div className="absolute inset-0 bg-islamic-dark-pattern opacity-50 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#c69b32]/30 mb-4">
            <BookOpen className="w-4 h-4 text-[#e6c564]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#f4e8c7]">
              Our Heritage & Vision
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">
            About <span className="gold-gradient-text">Noor Ul Huda</span>
          </h1>

          <p className="font-body font-normal text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Founded on the sacred conviction that Quranic learning must be personalized, patient, and accessible to every seeking heart across the globe.
          </p>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <span className="text-xs font-nav font-medium uppercase tracking-widest text-[#c69b32]">
              Our Sacred Mission
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#064232] leading-tight">
              Honoring the Quran as an Amanah (Sacred Trust)
            </h2>
            <p className="font-body font-normal text-sm sm:text-base text-[#4e655c] leading-relaxed">
              Noor Ul Huda was established to solve a common heartbreak in online Islamic education: students being placed into large, impersonal groups where pronunciation mistakes go uncorrected, where children feel anxious, and where adult learners feel embarrassed to ask fundamental questions.
            </p>
            <p className="font-body font-normal text-sm sm:text-base text-[#4e655c] leading-relaxed">
              We reimagined the online academy from the ground up: every class is private, one-to-one, and structured around the student’s unique pace. Whether you are a 5-year-old child forming your first Arabic sounds, a sister balancing family life, a working brother seeking evening Tajweed polish, or a new Muslim learning how to pray, our doors are open with warmth and dignity.
            </p>
          </div>

          {/* Mission Core Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-white border border-[#e5e3d7] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#064232]/10 flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-[#c69b32]" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#064232] mb-2">
                Personalized Care
              </h3>
              <p className="font-body font-normal text-xs text-[#4e655c] leading-relaxed">
                We craft individual learning journeys based on age, goals, and schedule.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#e5e3d7] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#064232]/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-[#c69b32]" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#064232] mb-2">
                Vetted Faculty
              </h3>
              <p className="font-body font-normal text-xs text-[#4e655c] leading-relaxed">
                Qualified male and female teachers evaluated for phonetic mastery and pedagogical warmth.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#e5e3d7] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#064232]/10 flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-[#c69b32]" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#064232] mb-2">
                Compassionate Tone
              </h3>
              <p className="font-body font-normal text-xs text-[#4e655c] leading-relaxed">
                Zero frustration or harshness. We instill love for Allah and His Book.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#e5e3d7] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#064232]/10 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-[#c69b32]" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#064232] mb-2">
                Global Accessibility
              </h3>
              <p className="font-body font-normal text-xs text-[#4e655c] leading-relaxed">
                Supporting families 24/7 across USA, UK, Europe, Australia, and Middle East.
              </p>
            </div>
          </div>
        </div>

        {/* Our Scholarly Principles */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e5e3d7] shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-nav font-medium uppercase tracking-widest text-[#c69b32] block mb-1">
              Guiding Ethos
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-[#064232]">
              Scholarly Principles We Uphold
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[#4e655c]">
            <div className="space-y-2">
              <strong className="text-base font-heading font-semibold text-[#064232] block">
                Phonetic Authenticity (Tajweed)
              </strong>
              <p className="font-body font-normal leading-relaxed">
                We strictly preserve classical Arabic articulation points (Makharij al-Huroof) and characteristics (Sifat), ensuring the Quran is recited as it was revealed to Prophet Muhammad ﷺ.
              </p>
            </div>

            <div className="space-y-2">
              <strong className="text-base font-heading font-semibold text-[#064232] block">
                Balanced Islamic Understanding
              </strong>
              <p className="font-body font-normal leading-relaxed">
                Our curriculum fosters grounded, balanced orthodox Islamic knowledge rooted in the Quran, authentic Hadith, and moral character (Akhlaq), avoiding sectarian disputes.
              </p>
            </div>

            <div className="space-y-2">
              <strong className="text-base font-heading font-semibold text-[#064232] block">
                Parental Partnership
              </strong>
              <p className="font-body font-normal leading-relaxed">
                We believe the teacher and parent form a unified team in nurturing the child’s character, spiritual habits, and consistent Quranic connection.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#064232] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-white mb-2">
              Experience the Noor Ul Huda Difference
            </h3>
            <p className="font-body font-normal text-xs sm:text-sm text-emerald-100">
              Schedule your 30-minute free trial session with one of our qualified teachers today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenTrial}
              className="px-6 py-3 rounded-xl font-nav font-medium text-xs sm:text-sm text-[#064232] bg-gradient-to-r from-[#e6c564] to-[#c69b32] hover:brightness-105 transition-all shadow-md whitespace-nowrap cursor-pointer"
            >
              Book Free Trial
            </button>
            <button
              onClick={onExploreCourses}
              className="px-5 py-3 rounded-xl font-nav font-medium text-xs sm:text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 whitespace-nowrap cursor-pointer"
            >
              Explore Courses
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
