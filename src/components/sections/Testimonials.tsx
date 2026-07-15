'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';

export function Testimonials() {
  return (
    <section className="section container-px">
      <SectionHeading
        eyebrow="Testimonials"
        title="Loved by Buyers Across India"
        subtitle="From boutique owners to wedding planners and wholesalers — here is what our partners say."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2"
      >
        {testimonials.map((t) => (
          <motion.figure
            key={t.name}
            variants={fadeUp}
            className="relative rounded-2xl border border-maroon/10 bg-white/70 p-5 shadow-soft dark:border-gold/10 dark:bg-maroon-800 sm:rounded-3xl sm:p-8"
          >
            <Quote className="absolute right-6 top-6 h-10 w-10 text-gold/20" />
            <div className="flex gap-1 text-gold-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-base leading-relaxed text-ink/75 dark:text-ivory/75">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon-gradient font-display text-lg font-semibold text-gold-200">
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-semibold text-maroon dark:text-gold-100">
                  {t.name}
                </p>
                <p className="text-xs text-ink/60 dark:text-ivory/60">
                  {t.role} &middot; {t.location}
                </p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
