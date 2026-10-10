import React from 'react';
import { TEACHERS_LIST } from '../data/safirData';
import { Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SafirTeachersSectionProps {
  onOpenFreeTrial: () => void;
}

export const SafirTeachersSection: React.FC<SafirTeachersSectionProps> = ({ onOpenFreeTrial }) => {
  const { t, isRtl } = useLanguage();

  const getTeacherInfo = (id: string, defaultName: string, defaultRole: string, defaultBio: string) => {
    if (id === '1' && t.teachers.teachers?.sheikhSalman) return t.teachers.teachers.sheikhSalman;
    if (id === '2' && t.teachers.teachers?.qariSafeer) return t.teachers.teachers.qariSafeer;
    if (id === '3' && t.teachers.teachers?.qariAbdulSamad) return t.teachers.teachers.qariAbdulSamad;
    return { name: defaultName, role: defaultRole, bio: defaultBio };
  };

  return (
    <section id="teachers" className="py-10 sm:py-16 lg:py-20 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-heading font-semibold text-[#064232] tracking-tight mb-2">
            {t.teachers.title}
          </h2>
          <div className="w-16 h-1 bg-[#eab308] mx-auto rounded-full mb-3"></div>
          <p className="font-body font-normal text-xs sm:text-base text-gray-600">
            {t.teachers.subtitle}
          </p>
        </div>

        {/* 3 Teachers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
          {TEACHERS_LIST.map((teacher) => {
            const info = getTeacherInfo(teacher.id, teacher.name, teacher.role, teacher.bio);
            return (
              <div
                key={teacher.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(6,66,50,0.12)] transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Teacher Photo with Golden Yellow Background Header as in video */}
                <div className="w-full bg-[#facc15] py-5 sm:py-7 flex justify-center items-center relative">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300 bg-amber-50">
                    <img
                      src={teacher.image}
                      alt={info.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width={144}
                      height={144}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute bottom-2.5 right-4 sm:right-6 rtl:right-auto rtl:left-4 sm:rtl:left-6 bg-[#064232] text-[#facc15] p-1.5 rounded-full shadow border-2 border-white">
                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>

                {/* Teacher Card Body */}
                <div className="p-4 sm:p-7 flex flex-col items-center flex-grow w-full">
                  {/* Teacher Name */}
                  <h3 className="text-base sm:text-xl font-heading font-semibold text-[#064232] mb-1 group-hover:text-[#0a523f] transition-colors">
                    {info.name}
                  </h3>

                  {/* Role Title in Emerald Green */}
                  <span className="inline-block text-xs sm:text-sm font-nav font-medium text-[#059669] mb-3 sm:mb-4">
                    {info.role}
                  </span>

                  {/* Bio Paragraph */}
                  <p className="font-body font-normal text-xs sm:text-sm text-gray-600 leading-relaxed text-center mb-5 sm:mb-6">
                    {info.bio}
                  </p>

                  {/* Action Button */}
                  <button
                    onClick={onOpenFreeTrial}
                    className="mt-auto w-full py-2.5 px-4 bg-[#064232] hover:bg-[#0a523f] text-white font-nav font-medium text-xs sm:text-sm rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
                  >
                    {t.teachers.scheduleBtn}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
