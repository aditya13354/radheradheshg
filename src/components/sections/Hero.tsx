'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SmartImage } from '@/components/ui/SmartImage';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { whatsappLink, waMessages } from '@/lib/whatsapp';
import { fadeUp, staggerContainer } from '@/animations/variants';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-24 dark:bg-maroon-900 sm:pt-28 lg:pt-32">
      <div className="container-px relative grid items-center gap-10 pb-14 sm:pb-20 lg:grid-cols-2 lg:gap-10 lg:pb-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          <motion.span variants={fadeUp} className="eyebrow mb-4 sm:mb-6">
            Government Supported &middot; UPSRLM / NRLM
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="heading-xl font-semibold text-ink dark:text-gold-100"
          >
            Handcrafted Clay Karwas
            <span className="mt-1 block text-gradient-gold sm:mt-2">& Handicrafts</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink/70 dark:text-ivory/70 sm:mt-6 sm:text-base lg:mx-0"
          >
            Premium handmade clay products crafted by rural women artisans of
            Saharanpur. Wholesale, retail &amp; custom orders welcome.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:mt-8 sm:gap-3 lg:justify-start"
          >
            <a
              href={whatsappLink(waMessages.catalogue)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
            <Link href="/products" className="btn-primary">
              View Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink/10 shadow-soft sm:rounded-3xl">
            <SmartImage
              src="/images/hero/hero-karwa.jpg"
              alt="Premium handcrafted clay Karwa with golden lace and colourful tassels"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
