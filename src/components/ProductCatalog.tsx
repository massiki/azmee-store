import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { StarRating } from '@/components/StarRating';
import { products, type Product } from '@/data/content';

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg bg-white transition-all hover:shadow-lg">
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
          <span className="absolute left-4 top-4 rounded-full bg-coksu-900 px-3 py-1 text-xs font-medium text-cream">
            {product.badge}
          </span>
        )}
        {product.oldPrice && (
          <span className="absolute right-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-coksu-700">
            Hemat
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-xs font-medium uppercase tracking-widest text-coksu-500">
          {product.category}
        </p>
        <h3 className="mt-2 font-display text-base font-medium leading-snug text-coksu-950">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-charcoal/50">{product.rating}</span>
        </div>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-semibold text-coksu-900">{product.price}</span>
          {product.oldPrice && (
            <span className="text-sm text-charcoal/35 line-through">{product.oldPrice}</span>
          )}
        </div>

        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-coksu-200 bg-offwhite px-4 py-2.5 text-sm font-medium text-coksu-800 transition-all hover:bg-coksu-800 hover:text-cream"
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
    <section id="koleksi" className="editorial-section bg-offwhite">
      <div className="container-content">
        {/* Heading — full width */}
        <div className="mb-12 text-center lg:mb-16">
          <Reveal>
            <h2 className="font-display text-4xl font-medium leading-[0.95] tracking-tight text-coksu-950 sm:text-5xl">
              Temukan Gaya Muslim
              <br />
              <span className="italic text-coksu-600">Favoritmu.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-charcoal/60">
              Koleksi pilihan Azmee Store untuk melengkapi penampilan pria dan anak laki-laki.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <a
              href={products[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-coksu-800 transition-colors hover:text-coksu-600"
            >
              Lihat Semua Koleksi
              <ArrowRight size={16} strokeWidth={2} />
            </a>
          </Reveal>
        </div>

        {/* Product grid — uniform */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
