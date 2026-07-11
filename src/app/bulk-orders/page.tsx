import type { Metadata } from 'next';
import {
  Factory,
  Tag,
  Palette,
  PackageCheck,
  Truck,
  BadgeIndianRupee,
  Store,
  Building2,
  Gift,
  Globe2,
} from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { CtaBand } from '@/components/sections/CtaBand';
import { whatsappLink, waMessages, telLink } from '@/lib/whatsapp';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bulk Orders, Wholesale & OEM',
  description:
    'Wholesale, bulk and OEM manufacturing of handmade clay Karwas and handicrafts. Private label, custom design, safe packaging and pan-India delivery from Radhe Radhe SHG.',
  alternates: { canonical: '/bulk-orders' },
};

const services = [
  { icon: Factory, title: 'OEM Manufacturing', text: 'End-to-end production built to your specifications and volumes.' },
  { icon: Tag, title: 'Private Label', text: 'Your brand identity on every handcrafted product.' },
  { icon: Palette, title: 'Custom Design', text: 'Bespoke motifs, colours, shapes and finishes.' },
  { icon: PackageCheck, title: 'Safe Packaging', text: 'Multi-layer protective packaging for damage-free transit.' },
  { icon: Truck, title: 'Pan-India Delivery', text: 'Reliable, on-time delivery across the country.' },
  { icon: BadgeIndianRupee, title: 'Factory-Direct Pricing', text: 'Competitive wholesale rates, straight from the artisans.' },
];

const audiences = [
  { icon: Store, label: 'Retail Stores & Gift Shops' },
  { icon: Building2, label: 'Corporates & Offices' },
  { icon: Gift, label: 'Wedding & Event Planners' },
  { icon: Globe2, label: 'Export & International Buyers' },
];

const steps = [
  { title: 'Share Your Requirement', text: 'Tell us quantity, design and timeline on WhatsApp.' },
  { title: 'Get a Custom Quote', text: 'Receive factory-direct pricing and samples.' },
  { title: 'Approve & Produce', text: 'We handcraft your order with quality checks throughout.' },
  { title: 'Safe Delivery', text: 'Securely packed and delivered on schedule, pan-India.' },
];

export default function BulkOrdersPage() {
  return (
    <>
      <PageHero
        eyebrow="Wholesale &middot; Bulk &middot; OEM"
        title="Partner With a Purpose-Driven Manufacturer"
        subtitle="From small wholesale lots to large OEM production runs, we deliver premium handcrafted quality, on time — with a powerful social-impact story behind every piece."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink(waMessages.bulk)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Place Bulk Order
          </a>
          <a
            href={whatsappLink(waMessages.wholesale)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Get Wholesale Pricing
          </a>
        </div>
      </PageHero>

      {/* Services */}
      <section className="section container-px">
        <SectionHeading
          eyebrow="What We Offer"
          title="Manufacturing Built Around You"
          subtitle="Everything you need to source handcrafted clay products at scale, reliably."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-ink/10 bg-white p-6 transition-colors duration-200 hover:border-gold/40 dark:border-gold/10 dark:bg-maroon-800"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-maroon text-gold-200">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-gold-100">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-ivory/65">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Audiences */}
      <section className="section bg-white dark:bg-white/5">
        <div className="container-px">
          <SectionHeading
            eyebrow="Who We Supply"
            title="Trusted by Businesses of Every Size"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-4 rounded-2xl border border-ink/10 bg-ivory p-8 text-center dark:border-gold/10 dark:bg-maroon-800"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient text-maroon-900">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="text-sm font-semibold text-ink dark:text-gold-100">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section container-px">
        <SectionHeading
          eyebrow="How It Works"
          title="From Enquiry to Delivery in 4 Simple Steps"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl border border-ink/10 bg-white p-6 dark:border-gold/10 dark:bg-maroon-800"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-gradient font-display text-lg font-bold text-maroon-900">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink dark:text-gold-100">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-ivory/65">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink(waMessages.bulk)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Start Your Bulk Order
          </a>
          <a href={telLink()} className="btn-outline">
            <Phone className="h-4 w-4" />
            Talk to Our Team
          </a>
        </div>
      </section>

      <CtaBand
        heading="Become a Dealer or Retail Partner"
        subheading="Join a growing network of partners sourcing premium, purpose-driven handicrafts. Let's build something meaningful together."
        message={waMessages.dealer}
      />
    </>
  );
}
