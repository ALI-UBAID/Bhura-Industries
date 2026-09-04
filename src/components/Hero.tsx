import { ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { companyInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink-950"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/6291407/pexels-photo-6291407.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Industrial bakery with trays and moulds"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/60 to-ink-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/30" />
      </div>

      {/* Subtle steel texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #d99a1f 25%, transparent 25%, transparent 75%, #d99a1f 75%), linear-gradient(45deg, #d99a1f 25%, transparent 25%, transparent 75%, #d99a1f 75%)",
          backgroundSize: "4px 4px",
          backgroundPosition: "0 0, 2px 2px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-32 lg:px-12">
        {/* Logo */}
        <div className="animate-fade-in">
          <Logo size={120} variant="dark" />
        </div>

        {/* Tagline */}
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-gold-500" />
            <span className="text-sm font-semibold tracking-[0.3em] text-gold-400">
              EST. {companyInfo.since}
            </span>
          </div>
          <h1 className="text-balance text-5xl font-bold leading-tight text-cream-50 md:text-6xl lg:text-7xl">
            Premium Baking
            <br />
            <span className="text-gold-400">Trays &amp; Moulds</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-200/80">
            Crafting world-class bakery equipment since {companyInfo.since}.
            Over {companyInfo.experience} years of manufacturing excellence,
            trusted by bakeries across the globe.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-base font-semibold text-ink-950 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/30"
          >
            View Products
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-cream-200/30 px-8 py-4 text-base font-semibold text-cream-100 transition-all hover:border-gold-400 hover:text-gold-400"
          >
            Get a Quote
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-8 flex gap-12 border-t border-ink-700 pt-8">
          <div>
            <div className="font-serif text-3xl font-bold text-gold-400">
              {companyInfo.experience}+
            </div>
            <div className="text-xs tracking-widest text-cream-200/60">
              YEARS EXPERIENCE
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-gold-400">
              50+
            </div>
            <div className="text-xs tracking-widest text-cream-200/60">
              PRODUCT TYPES
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-gold-400">
              1966
            </div>
            <div className="text-xs tracking-widest text-cream-200/60">
              ESTABLISHED
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-cream-200/20 pt-2">
          <div className="h-2 w-1 animate-bounce rounded-full bg-gold-400" />
        </div>
      </div>
    </section>
  );
}
