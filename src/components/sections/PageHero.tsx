'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, staggerContainer } from '@/animations/variants';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ivory pt-32 dark:bg-maroon-900">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container-px relative pb-16 text-center"
      >
        {eyebrow && (
          <motion.span variants={fadeUp} className="eyebrow mb-5 justify-center">
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          variants={fadeUp}
          className="heading-xl mx-auto max-w-4xl font-semibold text-ink dark:text-gold-100"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/70 dark:text-ivory/70 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div variants={fadeUp} className="mt-8">
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
