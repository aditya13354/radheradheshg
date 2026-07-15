'use client';

import { motion } from 'framer-motion';
import { features } from '@/data/content';
import * as Icons from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';

type IconName = keyof typeof Icons;

export function WhyChooseUs() {
  return (
    <section className="section bg-white dark:bg-white/5">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Crafted with Care, Trusted with Reason"
          subtitle="From the hands that shape them to the values behind them, here is what makes every Radhe Radhe creation special."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.slice(0, 6).map((feature) => {
            const Icon = (Icons[feature.icon as IconName] ??
              Icons.Sparkles) as React.ComponentType<{ className?: string }>;
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="group rounded-2xl border border-ink/10 bg-ivory p-5 transition-colors duration-200 hover:border-gold/40 dark:border-gold/10 dark:bg-maroon-800 sm:p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-maroon text-gold-200">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-gold-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-ivory/65">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
