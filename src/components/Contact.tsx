import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { companyInfo } from '@/lib/data';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('submitting');
    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-pad bg-ink-950">
      <div className="mx-auto max-w-7xl">
        <div className="gold-divider mb-6">
          <span className="text-sm font-semibold tracking-[0.3em] text-gold-400">
            CONTACT US
          </span>
        </div>
        <h2 className="mb-4 text-center font-serif text-4xl font-bold text-cream-50 md:text-5xl">
          Let's Build Together
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-cream-200/60">
          Whether you need a standard tray or a custom mould, our team is ready
          to help. Reach out and we'll respond within one business day.
        </p>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-500/15">
                <MapPin size={22} className="text-gold-400" />
              </div>
              <div>
                <h3 className="mb-1 font-serif text-lg font-bold text-cream-50">
                  Our Address
                </h3>
                <p className="text-sm leading-relaxed text-cream-200/60">
                  {companyInfo.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-500/15">
                <Phone size={22} className="text-gold-400" />
              </div>
              <div>
                <h3 className="mb-1 font-serif text-lg font-bold text-cream-50">
                  Phone
                </h3>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                  className="text-sm text-cream-200/60 transition-colors hover:text-gold-400"
                >
                  {companyInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-500/15">
                <Mail size={22} className="text-gold-400" />
              </div>
              <div>
                <h3 className="mb-1 font-serif text-lg font-bold text-cream-50">
                  Email
                </h3>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-sm text-cream-200/60 transition-colors hover:text-gold-400"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>

            {/* Map embed */}
            <div className="overflow-hidden rounded-xl border border-ink-700">
              <iframe
                title="Bhura Industries location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.5480%2C29.9600%2C77.5700%2C29.9800&layer=mapnik&marker=29.9700%2C77.5590"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-ink-700 bg-ink-900 p-8"
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-cream-200"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-ink-600 bg-ink-800 px-4 py-3 text-cream-50 placeholder-cream-200/30 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-cream-200"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-ink-600 bg-ink-800 px-4 py-3 text-cream-50 placeholder-cream-200/30 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-cream-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your requirements..."
                  className="w-full resize-none rounded-lg border border-ink-600 bg-ink-800 px-4 py-3 text-cream-50 placeholder-cream-200/30 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-base font-semibold text-ink-950 transition-all hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                  <CheckCircle size={18} />
                  Thank you! Your message has been sent. We'll be in touch soon.
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 rounded-lg border border-accent-500/30 bg-accent-500/10 px-4 py-3 text-sm text-accent-500">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
