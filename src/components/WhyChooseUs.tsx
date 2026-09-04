import { Shield, Layers, Ship, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Uncompromising Quality',
    description:
      'Every tray and mould undergoes rigorous quality checks at each production stage, ensuring dimensional accuracy and structural integrity.',
  },
  {
    icon: Layers,
    title: 'Built for Durability',
    description:
      'Heavy-gauge steel construction designed to withstand the demands of high-volume commercial bakeries for years without warping.',
  },
  {
    icon: Ship,
    title: 'Export-Grade Standards',
    description:
      'Our products meet international manufacturing standards, trusted by bakeries across multiple countries on three continents.',
  },
  {
    icon: Sparkles,
    title: 'Advanced Non-Stick Coating',
    description:
      'Premium food-grade non-stick technology ensures effortless release, consistent browning, and easy cleaning — batch after batch.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad bg-cream-100">
      <div className="mx-auto max-w-7xl">
        <div className="gold-divider mb-6">
          <span className="text-sm font-semibold tracking-[0.3em] text-gold-600">
            WHY CHOOSE US
          </span>
        </div>
        <h2 className="mb-4 text-center font-serif text-4xl font-bold text-ink-900 md:text-5xl">
          The Bhura Standard
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-ink-600">
          Four pillars that have defined our manufacturing philosophy for over
          five decades.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-xl border border-gold-200 bg-cream-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Icon circle */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/10 transition-colors group-hover:bg-gold-500">
                  <Icon
                    size={28}
                    className="text-gold-600 transition-colors group-hover:text-ink-950"
                  />
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-ink-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-500">
                  {feature.description}
                </p>

                {/* Number indicator */}
                <span className="absolute right-5 top-5 font-serif text-5xl font-bold text-gold-200/40">
                  0{features.indexOf(feature) + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
