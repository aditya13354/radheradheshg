import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Heart } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { footerLinks } from '@/lib/nav';
import { whatsappLink, telLink, mailLink, waMessages } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

export function Footer() {
  const { address } = siteConfig;

  return (
    <footer className="relative overflow-hidden bg-maroon-900 text-ivory">
      <div className="container-px relative py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-12 items-center justify-center rounded-2xl bg-gold-gradient px-3.5 font-hindi text-base font-bold text-maroon-900">
                राधे
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-gold-100">
                  Radhe Radhe
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-gold-300/80">
                  Self Help Group
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ivory/70">
              Handcrafted clay creations, made by rural women and inspired by
              Indian traditions. Every purchase empowers a family.
            </p>
            <p className="mt-4 font-hindi text-sm text-gold-200">
              {siteConfig.nameHindi}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold-200 transition-colors hover:bg-gold/10"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold-200 transition-colors hover:bg-gold/10"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gold-100">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-gold-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gold-100">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-ivory/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-300" />
                <span>
                  {address.line1}, {address.line2}, {address.district},{' '}
                  {address.state} {address.pincode}, {address.country}
                </span>
              </li>
              {siteConfig.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3">
                  <Phone className="h-4 w-4 flex-shrink-0 text-gold-300" />
                  <a href={`tel:+91${phone}`} className="hover:text-gold-200">
                    +91 {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold-300" />
                <a href={mailLink()} className="hover:text-gold-200">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gold-100">
              Let&apos;s Connect
            </h3>
            <p className="mt-5 text-sm text-ivory/70">
              Have a question, bulk order or custom requirement? We are one
              message away.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={whatsappLink(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a href={telLink()} className="btn-gold w-full">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
            <div className="mt-6 rounded-2xl border border-gold/20 bg-white/5 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-gold-300">
                Government Supported
              </p>
              <p className="mt-1 text-xs text-ivory/60">
                {siteConfig.govt.scheme} &middot; {siteConfig.govt.code}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gold/15 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-ivory/60">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-ivory/60">
            Made with <Heart className="h-3.5 w-3.5 fill-terracotta text-terracotta" /> in
            India
          </p>
          <Link
            href="/privacy-policy"
            className="text-xs text-ivory/60 transition-colors hover:text-gold-200"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
