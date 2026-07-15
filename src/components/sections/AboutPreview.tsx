'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SmartImage } from '@/components/ui/SmartImage';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';

export function AboutPreview() {
  return (
    <section className="section container-px">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative order-2 lg:order-1"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <motion.div
              variants={fadeUp}
              className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-gold/20 shadow-soft"
            >
              <SmartImage
                src="/images/gallery/artisan-1.jpg"
                alt="Rural woman artisan hand-painting a clay Karwa"
                fill
                sizes="45vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-gold/20 shadow-soft">
                <SmartImage
                  src="/images/gallery/workshop-1.jpg"
                  alt="Inside the Radhe Radhe handicraft workshop"
                  fill
                  sizes="45vw"
                  className="object-cover"
                />
              </div>
              <div className="glass-card flex items-center gap-3 p-4">
                <span className="font-display text-3xl font-bold text-gradient-gold">
                  50k+
                </span>
                <span className="text-xs font-medium text-ink/70 dark:text-ivory/70">
                  Products lovingly crafted by hand
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="order-1 lg:order-2"
        >
          <motion.span variants={fadeUp} className="eyebrow mb-3 sm:mb-5">
            Our Story
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="heading-lg font-semibold text-maroon dark:text-gold-100"
          >
            Women-Led Handicraft Collective
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-sm leading-relaxed text-ink/70 dark:text-ivory/70 sm:text-base"
          >
            Radhe Radhe Self Help Group was born in Village Ugrah, Saharanpur —
            a community of rural women turning traditional clay craftsmanship
            into sustainable livelihoods. Every product is handmade with care
            and finished with pride.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6">
            <Link href="/about" className="btn-outline">
              Read Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
