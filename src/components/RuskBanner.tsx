import { Globe2 } from 'lucide-react';

export default function RuskBanner() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20">
      {/* Subtle gold texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(45deg, #d99a1f 25%, transparent 25%, transparent 75%, #d99a1f 75%), linear-gradient(45deg, #d99a1f 25%, transparent 25%, transparent 75%, #d99a1f 75%)',
          backgroundSize: '4px 4px',
          backgroundPosition: '0 0, 2px 2px',
        }}
      />
      {/* Glow accents */}
      <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-12">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/5">
            <Globe2 className="text-gold-400" size={32} />
          </div>
        </div>
        <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-cream-50 md:text-4xl lg:text-5xl">
          Specialists in rusk and bread moulds,
          <br />
          <span className="text-gold-400">
            exporting to 65+ countries worldwide.
          </span>
        </h2>
        <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      </div>
    </section>
  );
}
