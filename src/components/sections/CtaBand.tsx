'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { telLink } from '@/lib/whatsapp';
import { fadeUp, viewportOnce } from '@/animations/variants';

interface CtaBandProps {
  heading?: string;
  subheading?: string;
  compact?: boolean;
}

export function CtaBand({
  heading = "Let's Create Something Beautiful Together",
  subheading = "Whether you're looking for festive decorations, wedding return gifts, wholesale orders, or customized products — call us or tap the WhatsApp button.",
  compact = false,
}: CtaBandProps) {
  return (
    <section className={compact ? 'container-px' : 'container-px section'}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative overflow-hidden rounded-2xl bg-maroon px-5 py-10 text-center sm:px-12 sm:py-20"
      >
        <div className="relative mx-auto max-w-3xl">
          <span className="eyebrow mb-5 text-gold-200">
            Let&apos;s Talk
          </span>
          <h2 className="heading-lg font-semibold text-ivory">{heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ivory/80 sm:mt-5 sm:text-base lg:text-lg">
            {subheading}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:mt-9 sm:gap-3">
            <a href={telLink()} className="btn-gold">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
