import { ArrowRight, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import heroPhoto from '@/assets/images/01-foto-section.webp';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-offwhite pt-20 lg:pt-24">
      <div className="container-content relative grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
        {/* Text — takes 5 cols on lg */}
        <div className="order-2 lg:order-1 lg:col-span-5">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-coksu-200 bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-coksu-600">
              <Sparkles size={14} strokeWidth={1.75} />
              Fashion Muslim Pria &amp; Anak
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-tight text-coksu-950 sm:text-6xl lg:text-7xl">
              Tampil
              <br />
              <span className="italic text-coksu-600">Rapi.</span>
              <br />
              Tetap Nyaman.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-charcoal/65 sm:text-lg">
              Fashion muslim pria dan anak dengan bahan yang adem, nyaman, tidak mudah kusut, dan
              mudah dipakai untuk berbagai momen.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="#koleksi"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-coksu-800 px-8 py-4 text-sm font-semibold text-cream transition-all hover:bg-coksu-900 hover:shadow-lg sm:w-auto"
              >
                Lihat Koleksi
                <ArrowRight size={16} strokeWidth={2} />
              </a>
              <a
                href="#tentang"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-coksu-200 bg-white px-8 py-4 text-sm font-semibold text-coksu-700 transition-all hover:border-coksu-300 hover:bg-coksu-50 sm:w-auto"
              >
                Jelajahi Produk
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-8 text-xs font-medium uppercase tracking-widest text-coksu-500">
              Nyaman dipakai &bull; Mudah dirawat &bull; Siap untuk berbagai momen
            </p>
          </Reveal>
        </div>

        {/* Visual — takes 7 cols on lg, offset slightly */}
        <div className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6">
          <Reveal className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg bg-coksu-100 shadow-2xl sm:max-w-lg lg:max-w-none">
              <img
                src={heroPhoto}
                alt="Pria Indonesia mengenakan kurta premium Azmee Store"
                className="h-full w-full object-cover"
                fetchPriority="high"
                width={720}
                height={900}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coksu-950/20 via-transparent to-transparent" />
            </div>

            {/* floating card — editorial style */}
            <div className="absolute -bottom-6 left-6 right-6 mx-auto max-w-xs rounded-lg border border-coksu-100 bg-white p-5 shadow-xl sm:left-auto sm:right-8 sm:mx-0 sm:translate-x-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-coksu-100 text-coksu-700">
                  <Sparkles size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-coksu-900">Bahan Adem &amp; Anti Kusut</p>
                  <p className="mt-0.5 text-xs text-charcoal/55">Dipakai seharian tetap nyaman</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
