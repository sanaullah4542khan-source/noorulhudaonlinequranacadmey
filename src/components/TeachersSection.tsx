import React, { useState } from 'react';
import { TEACHERS_DATA } from '../data/teachersData';
import { Teacher } from '../types';
import { Users, GraduationCap, Globe, Clock, Sparkles, Check, ArrowRight } from 'lucide-react';

interface TeachersSectionProps {
  onOpenFreeTrial: () => void;
}

export const TeachersSection: React.FC<TeachersSectionProps> = ({ onOpenFreeTrial }) => {
  const [filterGender, setFilterGender] = useState<'all' | 'male' | 'female'>('all');

  const filteredTeachers = filterGender === 'all'
    ? TEACHERS_DATA
    : TEACHERS_DATA.filter((t) => t.gender === filterGender);

  return (
    <section id="teachers" className="py-20 lg:py-28 bg-[#faf9f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064232]/10 border border-[#064232]/20 mb-4">
            <Users className="w-4 h-4 text-[#064232]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#064232]">
              Our Faculty
            </span>
          </div>

          <h2
            id="teachers-headline"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#064232] tracking-tight mb-5"
          >
            Male & Female <br className="hidden sm:inline" />
            <span className="text-[#c69b32] font-serif italic">Qualified Teachers</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4e655c] leading-relaxed">
            Every instructor at Noor Ul Huda undergoes rigorous vetting for phonetic precision, student patience, child pedagogy, and authentic character. Sisters can learn with certified female teachers, and brothers with certified male scholars.
          </p>
        </div>

        {/* Gender Filter Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white border border-[#e5e3d7] rounded-2xl shadow-sm">
            <button
              id="filter-teacher-all"
              onClick={() => setFilterGender('all')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filterGender === 'all'
                  ? 'bg-[#064232] text-white shadow-sm'
                  : 'text-[#4e655c] hover:text-[#064232]'
              }`}
            >
              All Faculty ({TEACHERS_DATA.length})
            </button>
            <button
              id="filter-teacher-female"
              onClick={() => setFilterGender('female')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filterGender === 'female'
                  ? 'bg-[#064232] text-white shadow-sm'
                  : 'text-[#4e655c] hover:text-[#064232]'
              }`}
            >
              Female Teachers (Ustadhahs)
            </button>
            <button
              id="filter-teacher-male"
              onClick={() => setFilterGender('male')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filterGender === 'male'
                  ? 'bg-[#064232] text-white shadow-sm'
                  : 'text-[#4e655c] hover:text-[#064232]'
              }`}
            >
              Male Teachers (Qaris & Sheikhs)
            </button>
          </div>
        </div>

        {/* Teacher Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              id={`teacher-card-${teacher.id}`}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e5e3d7] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Avatar and Identity */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#064232]/10 border-2 border-[#c69b32]/30 flex items-center justify-center text-[#064232] font-serif text-2xl font-bold flex-shrink-0">
                    {teacher.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#c69b32] block">
                      {teacher.gender === 'female' ? 'Female Instructor' : 'Male Instructor'}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#064232] leading-tight">
                      {teacher.name}
                    </h3>
                    <p className="text-xs text-[#4e655c] font-medium mt-0.5">
                      {teacher.title}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-[#4e655c] leading-relaxed mb-5">
                  {teacher.bio}
                </p>

                {/* Core Teacher Attributes */}
                <div className="space-y-2.5 p-4 rounded-2xl bg-[#faf9f5] border border-[#f0eee4] text-xs mb-5">
                  <div>
                    <span className="font-semibold text-[#13241d] block">Specialization:</span>
                    <span className="text-[#4e655c]">{teacher.specialization}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#e5e3d7]">
                    <span className="font-semibold text-[#13241d]">Experience:</span>
                    <span className="text-[#064232] font-medium">{teacher.experience}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#e5e3d7]">
                    <span className="font-semibold text-[#13241d]">Teaching Category:</span>
                    <span className="text-[#4e655c]">{teacher.teachingCategory}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#e5e3d7]">
                    <span className="font-semibold text-[#13241d]">Languages:</span>
                    <span className="text-[#4e655c]">{teacher.languages.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Request This Teacher in Free Trial */}
              <button
                onClick={onOpenFreeTrial}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#064232] bg-gradient-to-r from-[#e6c564]/30 via-[#d5aa44]/20 to-transparent hover:bg-gradient-to-r hover:from-[#e6c564] hover:to-[#c69b32] border border-[#c69b32]/40 transition-all flex items-center justify-center gap-2 group-hover:border-[#c69b32]"
              >
                <span>Request Trial with {teacher.gender === 'female' ? 'Sister Teacher' : 'Brother Teacher'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="p-6 rounded-2xl bg-[#064232]/5 border border-[#064232]/15 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-[#4e655c] leading-relaxed">
            <strong className="text-[#064232]">Teacher Satisfaction Guarantee:</strong> If for any reason you or your child do not feel a comfortable pedagogical connection with your assigned teacher, we will re-match you immediately with another instructor at zero additional cost.
          </p>
        </div>
      </div>
    </section>
  );
};
