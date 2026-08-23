import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { StarRating } from '@/components/StarRating';
import { products, type Product } from '@/data/content';

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-coksu-100 bg-offwhite transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden bg-coksu-100">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          width={940}
          height={1175}
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-coksu-900/90 px-3 py-1 text-xs font-semibold text-cream backdrop-blur-sm">
            {product.badge}
          </span>
        )}
        {product.oldPrice && (
          <span className="absolute right-3 top-3 rounded-full bg-cream/90 px-2.5 py-1 text-xs font-semibold text-coksu-700">
            Hemat
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-coksu-500">
          {product.category}
        </p>
        <h3 className="mt-1.5 text-base font-bold leading-snug text-coksu-950">{product.name}</h3>

        <div className="mt-2 flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-charcoal/55">{product.rating}</span>
        </div>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-coksu-900">{product.price}</span>
          {product.oldPrice && (
            <span className="text-sm text-charcoal/40 line-through">{product.oldPrice}</span>
          )}
        </div>

        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full border border-coksu-200 bg-cream px-4 py-2.5 text-sm font-semibold text-coksu-800 transition-all hover:bg-coksu-800 hover:text-cream"
        >
          Lihat Produk
          <ArrowRight size={14} strokeWidth={2} />
        </a>
      </div>
    </article>
  );
}

export function ProductCatalog() {
  return (
    <section id="koleksi" className="bg-offwhite py-16 sm:py-20 lg:py-24">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-coksu-500">
              Koleksi Pilihan
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-coksu-950 sm:text-4xl">
              Temukan Gaya Muslim Favoritmu
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 text-base leading-relaxed text-charcoal/65">
              Koleksi pilihan Azmee Store untuk melengkapi penampilan pria dan anak laki-laki.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * 90} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
