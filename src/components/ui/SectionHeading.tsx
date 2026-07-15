'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, viewportOnce } from '@/animations/variants';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  light,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && <span className="eyebrow mb-3 sm:mb-5">{eyebrow}</span>}
      <h2
        className={cn(
          'heading-lg font-semibold',
          light ? 'text-ivory' : 'text-ink dark:text-gold-100',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-3 text-sm leading-relaxed sm:mt-5 sm:text-base lg:text-lg',
            light ? 'text-ivory/80' : 'text-ink/70 dark:text-ivory/70',
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
