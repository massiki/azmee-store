import { Reveal } from '@/components/Reveal';
import { StarRating } from '@/components/StarRating';
import { testimonials } from '@/data/content';

function initials(name: string) {
  return name.charAt(0).toUpperCase();
}

export function Testimonials() {
  return (
    <section id="testimoni" className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-coksu-500">
              Cerita Pelanggan
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-coksu-950 sm:text-4xl">
              Cerita Mereka yang Sudah Memilih Azmee Store
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-coksu-100 bg-offwhite p-6 sm:p-7">
                <StarRating rating={t.rating} size={16} />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-charcoal/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-coksu-200 text-sm font-bold text-coksu-800">
                    {initials(t.name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-coksu-950">{t.name}</p>
                    <p className="text-xs text-charcoal/55">{t.city}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
