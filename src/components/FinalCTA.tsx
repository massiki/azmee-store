import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function FinalCTA() {
  return (
    <section id="kontak" className="bg-cream px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
      <Reveal className="relative mx-auto max-w-content overflow-hidden rounded-[2rem] bg-coksu-800 px-6 py-14 text-center sm:px-10 sm:py-16 lg:py-20">
        {/* decorative texture */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-coksu-700/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-coksu-950/30 blur-3xl" />

        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-cream sm:text-4xl lg:text-5xl">
            Saatnya Tampil Lebih Rapi Tanpa Mengorbankan Kenyamanan.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-cream/75">
            Temukan koleksi fashion muslim pria dan anak yang nyaman, praktis, dan siap menemani
            setiap momen.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#koleksi"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-coksu-900 transition-all hover:bg-offwhite hover:shadow-lg sm:w-auto"
            >
              Belanja Sekarang
              <ArrowRight size={16} strokeWidth={2} />
            </a>
            <a
              href="https://wa.me/6281384654138"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-all hover:bg-coksu-700 sm:w-auto"
            >
              Chat Admin
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
