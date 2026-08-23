import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { faqItems } from '@/data/content';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-offwhite py-16 sm:py-20 lg:py-24">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-coksu-500">
              Bantuan
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-coksu-950 sm:text-4xl">
              Pertanyaan yang Sering Ditanyakan
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 max-w-2xl space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.question} delay={i * 50}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen ? 'border-coksu-300 bg-cream' : 'border-coksu-100 bg-offwhite'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span className="text-sm font-semibold text-coksu-950 sm:text-base">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen ? 'bg-coksu-800 text-cream' : 'bg-coksu-100 text-coksu-700'
                      }`}
                    >
                      {isOpen ? <Minus size={16} strokeWidth={2} /> : <Plus size={16} strokeWidth={2} />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-sm leading-relaxed text-charcoal/70 sm:px-6">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
