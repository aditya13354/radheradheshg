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
    <section className="relative overflow-hidden bg-ivory pt-28 dark:bg-maroon-900 sm:pt-32">
      <div className="container-px relative grid items-center gap-12 pb-20 lg:grid-cols-2 lg:gap-10 lg:pb-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          <motion.span variants={fadeUp} className="eyebrow mb-6">
            Government Supported &middot; UPSRLM / NRLM
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="heading-xl font-semibold text-ink dark:text-gold-100"
          >
            Handcrafted Clay Creations
            <span className="mt-2 block text-gradient-gold">Made by Rural Women</span>
            <span className="mt-2 block text-ink/80 dark:text-ivory">
              Inspired by Indian Traditions
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/70 dark:text-ivory/70 sm:text-lg lg:mx-0"
          >
            Handmade Karwas, festive décor and clay pots crafted by rural women
            artisans. Every piece carries a story — and every order empowers a family.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Link href="/products" className="btn-primary">
              Explore Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink(waMessages.catalogue)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Request Catalogue
            </a>
            <a
              href={whatsappLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink/60 dark:text-ivory/60 lg:justify-start"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" /> 100% Handmade
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Eco-Friendly Clay
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-maroon" /> Made in India
            </span>
          </motion.div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink/10 shadow-soft">
            <SmartImage
              src="/images/hero/hero-karwa.jpg"
              alt="Premium handcrafted clay Karwa with golden lace and colourful tassels"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>

          {/* Floating badge card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="glass-card absolute -bottom-6 -left-4 flex items-center gap-3 px-5 py-4 sm:-left-8"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon text-lg font-bold text-gold-200">
              150+
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold text-ink dark:text-gold-100">
                Women Empowered
              </p>
              <p className="text-xs text-ink/60 dark:text-ivory/60">
                Across 12+ villages
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
