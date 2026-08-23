import { Reveal } from '@/components/Reveal';
import { valueItems } from '@/data/content';

export function ValueProposition() {
  return (
    <section id="tentang" className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-coksu-500">
              Mengapa Azmee Store
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-coksu-950 sm:text-4xl">
              Dirancang untuk Nyaman. Dibuat untuk Menemani Setiap Momen.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valueItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 100}>
                <div className="group flex h-full flex-col items-start rounded-2xl border border-coksu-100 bg-offwhite p-6 transition-all hover:-translate-y-1 hover:border-coksu-200 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-coksu-100 text-coksu-700 transition-colors group-hover:bg-coksu-800 group-hover:text-cream">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-coksu-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
