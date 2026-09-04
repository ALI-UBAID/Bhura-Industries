import { Award, Globe, Factory } from 'lucide-react';
import { companyInfo } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="section-pad bg-cream-100">
      <div className="mx-auto max-w-7xl">
        <div className="gold-divider mb-12">
          <span className="text-sm font-semibold tracking-[0.3em] text-gold-600">
            ABOUT US
          </span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/30918891/pexels-photo-30918891.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200"
                alt="Industrial bakery oven with bread"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 flex items-center gap-4 rounded-xl bg-ink-950 px-6 py-5 shadow-xl lg:-right-8">
              <div className="font-serif text-5xl font-bold text-gold-400">
                {companyInfo.experience}+
              </div>
              <div className="text-xs leading-tight tracking-widest text-cream-200">
                YEARS OF
                <br />
                EXCELLENCE
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-ink-900 md:text-5xl">
              A Legacy Forged in
              <span className="text-gold-600"> Steel &amp; Craft</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-ink-600">
              Founded in {companyInfo.since} in the industrial heart of
              Saharanpur, Bhura Industries began as a small workshop with a
              singular vision: to manufacture baking trays and moulds that
              meet the highest standards of quality and durability.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-ink-600">
              Over five decades later, that vision has grown into a
              world-class manufacturing operation. Today, our products serve
              bakeries across India and international markets, built on the
              foundation of precision engineering and uncompromising
              craftsmanship.
            </p>

            {/* Vision cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-gold-200 bg-cream-50 p-5">
                <Factory className="mb-3 text-gold-600" size={28} />
                <h3 className="mb-1 font-serif text-base font-bold text-ink-900">
                  Manufacturing
                </h3>
                <p className="text-sm text-ink-500">
                  State-of-the-art production facility
                </p>
              </div>
              <div className="rounded-xl border border-gold-200 bg-cream-50 p-5">
                <Award className="mb-3 text-gold-600" size={28} />
                <h3 className="mb-1 font-serif text-base font-bold text-ink-900">
                  Quality
                </h3>
                <p className="text-sm text-ink-500">
                  Export-grade standards since inception
                </p>
              </div>
              <div className="rounded-xl border border-gold-200 bg-cream-50 p-5">
                <Globe className="mb-3 text-gold-600" size={28} />
                <h3 className="mb-1 font-serif text-base font-bold text-ink-900">
                  Vision
                </h3>
                <p className="text-sm text-ink-500">
                  India's largest baking equipment exporter
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
