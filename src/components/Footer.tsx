import { MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';
import { companyInfo } from '@/lib/data';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const productLinks = [
  'Bakery tray',
  'Bun tray',
  'Cookies tray',
  'Muffin tray',
  'Baguette tray',
  'Cream roll cone',
  'Burger tray',
  'Rusk moulds',
  'Bread moulds',
  'Belan',
  'Burger ring',
  'Garlic bread moulds'
];

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/20 bg-ink-950 pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo size={72} variant="dark" />
            </div>
            <p className="text-sm leading-relaxed text-cream-200/50">
              Premium baking trays and moulds manufactured with over five
              decades of expertise. Trusted by bakeries worldwide.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-serif text-base font-bold text-gold-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-200/50 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 font-serif text-base font-bold text-gold-400">
              Our Products
            </h4>
            <ul className="space-y-2">
              {productLinks.map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-sm text-cream-200/50 transition-colors hover:text-gold-400"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-serif text-base font-bold text-gold-400">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-cream-200/50">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold-500" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-cream-200/50">
                <Phone size={16} className="flex-shrink-0 text-gold-500" />
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                  className="transition-colors hover:text-gold-400"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-cream-200/50">
                <Mail size={16} className="flex-shrink-0 text-gold-500" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="transition-colors hover:text-gold-400"
                >
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Gold divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-cream-200/40">
            © {new Date().getFullYear()} {companyInfo.name}. All rights
            reserved.
          </p>
          <p className="text-xs text-cream-200/40">
            Manufacturing Excellence Since {companyInfo.since}
          </p>
        </div>
      </div>
    </footer>
  );
}
