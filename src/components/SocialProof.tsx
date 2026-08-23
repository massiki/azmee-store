import { Reveal } from '@/components/Reveal';
import { stats } from '@/data/content';

export function SocialProof() {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-coksu-950 sm:text-4xl">
              Dipilih untuk Kenyamanan, Dipercaya untuk Setiap Momen.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="rounded-2xl border border-coksu-100 bg-offwhite p-8 text-center">
                <p className="text-4xl font-extrabold tracking-tight text-coksu-800 sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-charcoal/60">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-center text-sm italic text-coksu-600">
            Karena pakaian yang nyaman membuat setiap momen terasa lebih baik.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
