import { Reveal } from '@/components/Reveal';
import { problems } from '@/data/content';

export function ProblemSection() {
  return (
    <section id="masalah" className="bg-offwhite py-16 sm:py-20 lg:py-24">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-coksu-500">
              Masalah yang Sering Dirasakan
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-coksu-950 sm:text-4xl">
              Pakaian Muslim Seharusnya Tidak Merepotkan.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 text-base leading-relaxed text-charcoal/65">
              Memilih pakaian muslim yang nyaman dan praktis kadang terasa sulit. Berikut beberapa
              hal yang mungkin pernah Anda alami.
            </p>
          </Reveal>
        </div>

        <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {problems.map((problem, i) => (
            <Reveal as="li" key={problem} delay={i * 80}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-coksu-100 bg-cream/60 p-5 transition-colors hover:border-coksu-200 hover:bg-cream">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coksu-100 text-xs font-bold text-coksu-700">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-charcoal/80">{problem}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
