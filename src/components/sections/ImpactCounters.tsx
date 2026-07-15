'use client';

import { motion } from 'framer-motion';
import { impactStats } from '@/data/content';
import { useCountUp } from '@/hooks/useCountUp';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';
import type { ImpactStat } from '@/types';

function StatCard({ stat }: { stat: ImpactStat }) {
  const { ref, value } = useCountUp(stat.value);
  const formatted =
    stat.value >= 1000 ? value.toLocaleString('en-IN') : value.toString();

  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl border border-ink/10 bg-white p-4 text-center shadow-soft dark:border-white/10 dark:bg-white/5 sm:p-8"
    >
      <span
        ref={ref}
        className="font-display text-2xl font-bold text-maroon dark:text-gold-100 sm:text-4xl md:text-5xl"
      >
        {formatted}
        {stat.suffix}
      </span>
      <p className="mt-2 text-[10px] font-medium uppercase tracking-wide text-ink/60 dark:text-ivory/70 sm:mt-3 sm:text-sm">
        {stat.label}
      </p>
    </motion.div>
  );
}

export function ImpactCounters() {
  return (
    <section className="section bg-ivory dark:bg-maroon-900">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Impact"
          title="Numbers That Tell a Human Story"
          subtitle="Every figure below represents real women, real families and real celebrations across India."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-3"
        >
          {impactStats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
