import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/travelData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="perguntas" className="py-24 bg-neutral-950 text-white scroll-mt-16 border-t border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <span>Dúvidas Frequentes</span>
            <span aria-hidden="true">·</span>
            <span>Transparência Total</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium tracking-tight text-white mb-4">
            Tudo o que você precisa saber antes de embarcar.
          </h2>
          <p className="text-sm text-neutral-400">
            Respostas diretas sobre nosso modelo de trabalho, garantias e consultoria.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/60 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 bg-neutral-900/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
