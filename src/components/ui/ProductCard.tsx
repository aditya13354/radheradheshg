'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SmartImage } from '@/components/ui/SmartImage';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { whatsappLink, waMessages } from '@/lib/whatsapp';
import type { Product } from '@/types';
import { fadeUp } from '@/animations/variants';

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft transition-colors duration-200 hover:border-gold/40 dark:border-gold/10 dark:bg-maroon-800"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SmartImage
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 90vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.nameHindi && (
          <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 font-hindi text-xs font-medium text-maroon backdrop-blur">
            {product.nameHindi}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">
          {product.category}
        </span>
        <h3 className="mt-1.5 font-display text-xl font-semibold text-ink dark:text-gold-100">
          {product.name}
        </h3>
        <p className="mt-1 text-sm italic text-ink/60 dark:text-ivory/60">
          {product.tagline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-ivory/70">
          {product.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-maroon dark:text-gold-200">
              Features
            </p>
            <ul className="mt-2 space-y-1.5">
              {product.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-1.5 text-xs text-ink/65 dark:text-ivory/65"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-gold-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-maroon dark:text-gold-200">
              Perfect For
            </p>
            <ul className="mt-2 space-y-1.5">
              {product.uses.map((u) => (
                <li
                  key={u}
                  className="flex items-start gap-1.5 text-xs text-ink/65 dark:text-ivory/65"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-gold-500" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-maroon dark:text-gold-200">
            Available Colours
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <span
                key={c}
                className="rounded-full border border-maroon/15 px-3 py-1 text-xs text-ink/70 dark:border-gold/20 dark:text-ivory/70"
              >
                {c}
              </span>
            ))}
            {product.customizable && (
              <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-gold-700 dark:text-gold-200">
                Customization Available
              </span>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-maroon/10 pt-5 dark:border-gold/10">
          <a
            href={whatsappLink(waMessages.product(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex-1"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Get Price
          </a>
          <a
            href={whatsappLink(waMessages.bulk)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex-1"
          >
            Bulk Enquiry
          </a>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <a
            href={whatsappLink(waMessages.catalogue)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex-1 text-xs"
          >
            Request Catalogue
          </a>
          <a
            href={whatsappLink(waMessages.customize)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex-1 text-xs"
          >
            Customize Design
          </a>
        </div>
      </div>
    </motion.article>
  );
}
