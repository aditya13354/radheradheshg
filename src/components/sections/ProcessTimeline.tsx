'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';

export function ProcessTimeline() {
  return (
    <section className="section container-px">
      <SectionHeading
        eyebrow="How We Work"
        title="From Humble Clay to Handcrafted Art"
        subtitle="Every product passes through eight careful stages — each one touched by skilled hands and finished with pride."
      />

      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {processSteps.map((step, index) => (
          <motion.li
            key={step.title}
            variants={fadeUp}
            className="group relative rounded-2xl border border-ink/10 bg-white p-6 transition-colors duration-200 hover:border-gold/40 dark:border-gold/10 dark:bg-maroon-800"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-gradient font-display text-lg font-bold text-maroon-900">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-maroon dark:text-gold-100">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-ivory/65">
              {step.description}
            </p>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}
