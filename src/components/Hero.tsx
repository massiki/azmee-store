import { ArrowRight, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import heroPhoto from '@/assets/images/01-foto-section.webp';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream pt-16 lg:pt-20">
      {/* soft background accent */}
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-coksu-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-coksu-100/60 blur-3xl" />

      <div className="container-content relative grid grid-cols-1 items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* Text */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-coksu-200 bg-offwhite px-4 py-1.5 text-xs font-medium text-coksu-700">
              <Sparkles size={14} strokeWidth={1.75} />
              Fashion Muslim Pria &amp; Anak
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-coksu-950 sm:text-5xl lg:text-6xl">
              Tampil Rapi.
              <br />
              Tetap Nyaman.
              <br />
              <span className="text-coksu-600">Setiap Hari.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-charcoal/70 sm:text-lg lg:mx-0">
              Fashion muslim pria dan anak dengan bahan yang adem, nyaman, tidak mudah kusut, dan
              mudah dipakai untuk berbagai momen.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
              <a
                href="#koleksi"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-coksu-800 px-7 py-3.5 text-sm font-semibold text-cream transition-all hover:bg-coksu-900 hover:shadow-lg sm:w-auto"
              >
                Lihat Koleksi
                <ArrowRight size={16} strokeWidth={2} />
              </a>
              <a
                href="#tentang"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-coksu-300 bg-offwhite px-7 py-3.5 text-sm font-semibold text-coksu-800 transition-all hover:border-coksu-400 hover:bg-coksu-50 sm:w-auto"
              >
                Jelajahi Produk
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-coksu-600/80">
              Nyaman dipakai &bull; Mudah dirawat &bull; Siap untuk berbagai momen
            </p>
          </Reveal>
        </div>

        {/* Visual */}
        <div className="order-1 lg:order-2">
          <Reveal className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-coksu-100 shadow-xl lg:max-w-none">
              <img
                src={heroPhoto}
                alt="Pria Indonesia mengenakan kurta premium Azmee Store"
                className="h-full w-full object-cover"
                fetchPriority="high"
                width={720}
                height={900}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coksu-950/25 via-transparent to-transparent" />
            </div>

            {/* floating card */}
            <div className="absolute -bottom-4 left-4 right-4 mx-auto max-w-xs rounded-2xl border border-coksu-100 bg-offwhite/95 p-4 shadow-lg backdrop-blur-sm sm:left-auto sm:right-6 sm:mx-0 sm:translate-x-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coksu-100 text-coksu-700">
                  <Sparkles size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-coksu-900">Bahan Adem &amp; Anti Kusut</p>
                  <p className="text-xs text-charcoal/60">Dipakai seharian tetap nyaman</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
