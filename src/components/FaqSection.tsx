import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faqData';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const academyWhatsAppUrl = 'https://wa.me/923130958451?text=' + encodeURIComponent('Assalamu Alaikum, I have a question regarding Noor Ul Huda Academy that was not covered in the FAQ.');

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#faf9f5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064232]/10 border border-[#064232]/20 mb-4">
            <HelpCircle className="w-4 h-4 text-[#064232]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#064232]">
              Clear Answers
            </span>
          </div>

          <h2
            id="faq-headline"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#064232] tracking-tight mb-4"
          >
            Frequently Asked <span className="text-[#c69b32] font-serif italic">Questions</span>
          </h2>

          <p className="text-base text-[#4e655c]">
            Everything you need to know about our teaching methodology, one-on-one classes, faculty vetting, and the free trial.
          </p>
        </div>

        {/* Search Filter input */}
        <div className="relative mb-8 max-w-lg mx-auto">
          <Search className="w-4 h-4 text-[#4e655c] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            id="faq-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. trial, teachers, children)..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-[#e5e3d7] text-sm text-[#13241d] focus:outline-none focus:border-[#064232] shadow-sm transition-colors"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-12">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-white rounded-2xl border border-[#e5e3d7] shadow-sm transition-all overflow-hidden"
              >
                <button
                  id={`faq-button-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#064232]">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#faf9f5] border border-[#e5e3d7] flex items-center justify-center flex-shrink-0 text-[#064232]">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-[#4e655c] leading-relaxed border-t border-[#f4f3eb]"
                  >
                    <p className="mt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center bg-white rounded-2xl border border-[#e5e3d7]">
              <p className="text-sm text-[#4e655c]">No questions found matching your search.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-2 text-xs font-semibold text-[#064232] underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* WhatsApp Direct Help Banner */}
        <div className="p-6 rounded-2xl bg-white border border-[#e5e3d7] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-sm font-bold text-[#064232] block">
              Have a specific question not answered here?
            </span>
            <span className="text-xs text-[#4e655c]">
              Our academic coordination team is available to help anytime.
            </span>
          </div>

          <a
            id="faq-ask-whatsapp-btn"
            href={academyWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#064232] bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Ask Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
