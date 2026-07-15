'use client';

import { motion } from 'framer-motion';
import { SmartImage } from '@/components/ui/SmartImage';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { whatsappLink, waMessages } from '@/lib/whatsapp';
import type { Product } from '@/types';
import { fadeUp } from '@/animations/variants';

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-white shadow-soft dark:border-gold/10 dark:bg-maroon-800 sm:rounded-2xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SmartImage
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.nameHindi && (
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 font-hindi text-xs font-medium text-maroon backdrop-blur">
            {product.nameHindi}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-terracotta">
          {product.category}
        </span>
        <h3 className="mt-1 font-display text-lg font-semibold text-ink dark:text-gold-100">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-ink/65 dark:text-ivory/65">
          {product.tagline}
        </p>

        <div className="mt-auto pt-4">
          <a
            href={whatsappLink(waMessages.product(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Enquire Now
          </a>
        </div>
      </div>
    </motion.article>
  );
}
