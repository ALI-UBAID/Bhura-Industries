import { products } from '@/lib/data';

export default function Products() {
  return (
    <section id="products" className="section-pad bg-ink-950">
      <div className="mx-auto max-w-7xl">
        <div className="gold-divider mb-6">
          <span className="text-sm font-semibold tracking-[0.3em] text-gold-400">
            OUR PRODUCTS
          </span>
        </div>
        <h2 className="mb-4 text-center font-serif text-4xl font-bold text-cream-50 md:text-5xl">
          Precision-Engineered Baking Solutions
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-cream-200/60">
          Every tray and mould is crafted to deliver consistent, bakery-grade
          results — built to last through decades of daily use.
        </p>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <article
              key={product.name}
              className="group relative overflow-hidden rounded-xl border border-ink-700 bg-ink-900 shadow-lg transition-all duration-300 hover:border-gold-500/50 hover:shadow-2xl hover:shadow-gold-500/10"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-5">
                <h3 className="mb-1 font-serif text-lg font-bold text-cream-50 transition-colors group-hover:text-gold-400">
                  {product.name}
                </h3>
                <p className="text-sm leading-snug text-cream-200/50">
                  {product.label}
                </p>
              </div>

              {/* Gold accent bar */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold-500 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* CTA below grid */}
        <div className="mt-14 text-center">
          <p className="mb-6 text-cream-200/60">
            Need a custom tray or mould specification?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gold-500 px-8 py-4 text-base font-semibold text-gold-400 transition-all hover:bg-gold-500 hover:text-ink-950"
          >
            Request a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
