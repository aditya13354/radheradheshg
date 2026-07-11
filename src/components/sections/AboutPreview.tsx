'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Heart, Sprout, Landmark, Eye } from 'lucide-react';
import { SmartImage } from '@/components/ui/SmartImage';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';

const pillars = [
  { icon: Heart, title: 'Women Empowerment', text: 'Dignified livelihoods for rural women, right in their own village.' },
  { icon: Sprout, title: 'Rural Livelihood', text: 'Sustainable income that keeps traditional crafts alive.' },
  { icon: Landmark, title: 'Government Support', text: 'Proudly backed under the UPSRLM / NRLM mission.' },
  { icon: Eye, title: 'Our Vision', text: 'To bring India\u2019s handmade heritage to every home, everywhere.' },
];

export function AboutPreview() {
  return (
    <section className="section container-px">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative order-2 lg:order-1"
        >
          <div className="grid grid-cols-2 gap-4">
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
          <motion.span variants={fadeUp} className="eyebrow mb-5">
            Our Story
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="heading-lg font-semibold text-maroon dark:text-gold-100"
          >
            Where Every Clay Pot Carries a Story
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base leading-relaxed text-ink/70 dark:text-ivory/70"
          >
            Radhe Radhe Self Help Group was born in the village of Ugrah,
            Saharanpur, from a simple belief — that the skilled hands of rural
            women can shape not just beautiful clay, but brighter futures. What
            began as a few women moulding festive Karwas has grown into a
            thriving community of artisans preserving India&apos;s craft heritage.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-ink/70 dark:text-ivory/70"
          >
            Every product is handcrafted with love, painted with tradition and
            finished with pride. When you choose our creations, you don&apos;t
            simply buy a product — you empower a family.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {pillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-3 rounded-2xl border border-maroon/10 bg-white/60 p-4 dark:border-gold/10 dark:bg-white/5"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-600">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-maroon dark:text-gold-100">
                    {title}
                  </p>
                  <p className="mt-1 text-xs text-ink/60 dark:text-ivory/60">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <Link href="/about" className="btn-outline">
              Read Our Full Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
