'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { customizationOptions } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { whatsappLink, waMessages } from '@/lib/whatsapp';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';

export function Customization() {
  return (
    <section className="section bg-white/50 dark:bg-white/5">
      <div className="container-px">
        <SectionHeading
          eyebrow="Customization & OEM"
          title="Your Brand, Our Craftsmanship"
          subtitle="From private label to full OEM manufacturing, we craft made-to-order handicrafts tailored to your business, event or brand."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
        >
          {customizationOptions.map((option) => (
            <motion.div
              key={option.title}
              variants={fadeUp}
              className="rounded-2xl border border-ink/10 bg-ivory p-6 transition-colors duration-200 hover:border-gold/40 dark:border-gold/10 dark:bg-maroon-800"
            >
              <h3 className="font-display text-lg font-semibold text-maroon dark:text-gold-100">
                {option.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-ivory/65">
                {option.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href={whatsappLink(waMessages.customize)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Customize a Product
          </a>
          <Link href="/bulk-orders" className="btn-outline">
            Explore Bulk & OEM
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
