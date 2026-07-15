import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { SmartImage } from '@/components/ui/SmartImage';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { siteConfig } from '@/lib/site';
import {
  whatsappLink,
  telLink,
  mailLink,
  waMessages,
} from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contact Us | WhatsApp, Call or Visit — Saharanpur, UP',
  description:
    'Contact Radhe Radhe Self Help Group for handmade clay Karwas, wholesale, bulk and custom orders. WhatsApp +91 9719266605, call or email us. Based in Village Ugrah, Saharanpur, Uttar Pradesh 247001.',
  keywords: ['Contact Radhe Radhe', 'Handicraft Shop Saharanpur', 'Clay Karwa Order WhatsApp', 'Wholesale Handicrafts Contact'],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | Radhe Radhe Self Help Group',
    description: 'WhatsApp, call or email us for clay Karwas, wholesale pricing and custom orders. Based in Saharanpur, UP.',
    url: '/contact',
    type: 'website',
  },
};

const quickActions = [
  { label: 'Request Catalogue', message: waMessages.catalogue },
  { label: 'Get Wholesale Pricing', message: waMessages.wholesale },
  { label: 'Talk to Our Team', message: waMessages.team },
  { label: 'Place Bulk Order', message: waMessages.bulk },
  { label: 'Customize Product', message: waMessages.customize },
  { label: 'Get Festival Collection', message: waMessages.festival },
];

export default function ContactPage() {
  const { address, phones, email } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Start a Conversation"
        subtitle="Have a question, a bulk requirement or a custom idea? We're just one message away and usually reply within minutes."
      />

      <section className="section container-px">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Contact info */}
          <div>
            <div className="rounded-2xl border border-maroon/10 bg-white/70 p-5 shadow-soft dark:border-gold/10 dark:bg-maroon-800 sm:rounded-3xl sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-maroon dark:text-gold-100">
                {siteConfig.name}
              </h2>
              <p className="mt-1 font-hindi text-sm text-terracotta">
                {siteConfig.nameHindi}
              </p>

              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold-600">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-maroon dark:text-gold-100">
                      Address
                    </p>
                    <p className="mt-1 text-sm text-ink/70 dark:text-ivory/70">
                      {address.line1}, {address.line2}
                      <br />
                      {address.district}, {address.state}
                      <br />
                      {address.country} &ndash; {address.pincode}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold-600">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-maroon dark:text-gold-100">
                      Phone
                    </p>
                    {phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:+91${phone}`}
                        className="mt-1 block text-sm text-ink/70 hover:text-maroon dark:text-ivory/70 dark:hover:text-gold-200"
                      >
                        +91 {phone}
                      </a>
                    ))}
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold-600">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-maroon dark:text-gold-100">
                      Email
                    </p>
                    <a
                      href={mailLink()}
                      className="mt-1 block text-sm text-ink/70 hover:text-maroon dark:text-ivory/70 dark:hover:text-gold-200"
                    >
                      {email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold-600">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-maroon dark:text-gold-100">
                      Working Hours
                    </p>
                    <p className="mt-1 text-sm text-ink/70 dark:text-ivory/70">
                      Mon &ndash; Sat: 9:00 AM &ndash; 7:00 PM
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-maroon/15 text-maroon hover:bg-maroon/5 dark:border-gold/20 dark:text-gold-100"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-maroon/15 text-maroon hover:bg-maroon/5 dark:border-gold/20 dark:text-gold-100"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-gold/20 bg-gold/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">
                Government Supported
              </p>
              <p className="mt-1 text-sm text-ink/70 dark:text-ivory/70">
                {siteConfig.govt.scheme} &middot; {siteConfig.govt.code}
              </p>
            </div>
          </div>

          {/* WhatsApp CTA + quick actions */}
          <div>
            <div className="overflow-hidden rounded-3xl bg-maroon-gradient p-8 text-center text-ivory shadow-premium">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]">
                <WhatsAppIcon className="h-8 w-8 text-white" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold">
                Chat With Us Instantly
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm text-ivory/80">
                WhatsApp is the fastest way to reach us. Tap below to get pricing,
                catalogues and answers in minutes.
              </p>
              <a
                href={whatsappLink(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-6"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat on WhatsApp
              </a>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <a href={telLink()} className="btn-gold">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={mailLink()}
                  className="btn-outline border-white/40 bg-white/10 text-ivory hover:border-white"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-maroon/10 bg-white/70 p-6 dark:border-gold/10 dark:bg-maroon-800">
              <p className="text-sm font-semibold text-maroon dark:text-gold-100">
                Quick Enquiries
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {quickActions.map((action) => (
                  <a
                    key={action.label}
                    href={whatsappLink(action.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-2xl border border-maroon/10 bg-ivory px-4 py-3 text-sm font-medium text-ink/80 transition-colors hover:border-gold/40 dark:border-gold/10 dark:bg-maroon-900 dark:text-ivory/80"
                  >
                    <WhatsAppIcon className="h-4 w-4 flex-shrink-0 text-[#25D366]" />
                    {action.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-maroon/10 shadow-soft dark:border-gold/10">
          <div className="relative aspect-[21/9] w-full bg-maroon-100/40 dark:bg-maroon-800">
            <iframe
              title="Radhe Radhe Self Help Group location"
              src="https://www.google.com/maps?q=Kailashpur,+Saharanpur,+Uttar+Pradesh+247001&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
