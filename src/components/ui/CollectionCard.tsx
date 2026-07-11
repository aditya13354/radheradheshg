'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SmartImage } from '@/components/ui/SmartImage';
import type { Collection } from '@/types';
import { fadeUp } from '@/animations/variants';

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <motion.div variants={fadeUp}>
      <Link
        href="/products"
        className="group relative block overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft transition-colors duration-200 hover:border-gold/40 dark:border-gold/10 dark:bg-maroon-800"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <SmartImage
            src={collection.image}
            alt={collection.name}
            fill
            sizes="(max-width: 768px) 90vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/70 via-maroon-900/10 to-transparent" />
          {collection.nameHindi && (
            <span className="absolute right-4 top-4 rounded-full bg-white/85 px-3 py-1 font-hindi text-xs font-medium text-maroon backdrop-blur">
              {collection.nameHindi}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="font-display text-xl font-semibold text-ivory">
              {collection.name}
            </h3>
          </div>
        </div>
        <div className="p-5">
          <p className="text-sm leading-relaxed text-ink/65 dark:text-ivory/65">
            {collection.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta transition-colors group-hover:text-maroon dark:group-hover:text-gold-200">
            View Collection
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
