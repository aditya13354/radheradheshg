'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { whatsappLink, waMessages } from '@/lib/whatsapp';
import { fadeUp, viewportOnce } from '@/animations/variants';

export function FestivalBanner() {
  return (
    <section className="container-px py-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gold-gradient px-6 py-6 sm:px-10"
      >
        <div className="relative flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <Sparkles className="hidden h-10 w-10 flex-shrink-0 text-maroon-900 sm:block" />
            <div>
              <p className="font-display text-lg font-bold text-maroon-900 sm:text-xl">
                Karwa Chauth &amp; Festive Collection Now Open
              </p>
              <p className="mt-1 text-sm text-maroon-800">
                Book your festival &amp; wholesale orders early to avoid the rush.
              </p>
            </div>
          </div>
          <a
            href={whatsappLink(waMessages.festival)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-maroon-900 text-ivory hover:-translate-y-0.5 hover:bg-maroon-800"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Get Festival Collection
          </a>
        </div>
      </motion.div>
    </section>
  );
}
