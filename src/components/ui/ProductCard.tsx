'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { SmartImage } from '@/components/ui/SmartImage';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { whatsappLink, waMessages } from '@/lib/whatsapp';
import type { Product } from '@/types';
import { fadeUp } from '@/animations/variants';
import { cn } from '@/lib/utils';

export function ProductCard({ product }: { product: Product }) {
  const images = product.images?.length ? product.images : [product.image];
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const safeActive = active % images.length;

  const prev = useCallback(
    () => setActive((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setActive((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox, prev, next]);

  return (
    <>
      <motion.article
        variants={fadeUp}
        className="group flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-white shadow-soft dark:border-gold/10 dark:bg-maroon-800 sm:rounded-2xl"
      >
        <button
          type="button"
          onClick={() => setLightbox(true)}
          aria-label={`View photos of ${product.name}`}
          className="relative block aspect-[4/3] w-full overflow-hidden"
        >
          <SmartImage
            key={images[safeActive]}
            src={images[safeActive]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {images.length > 1 && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-maroon-900/70 px-2.5 py-1 text-[11px] font-medium text-ivory backdrop-blur">
              <Images className="h-3.5 w-3.5" />
              {images.length}
            </span>
          )}
          {product.nameHindi && (
            <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 font-hindi text-xs font-medium text-maroon backdrop-blur">
              {product.nameHindi}
            </span>
          )}
        </button>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto px-4 pt-3 sm:px-5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-label={`Show photo ${i + 1} of ${product.name}`}
                className={cn(
                  'relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border transition-all',
                  i === safeActive
                    ? 'border-terracotta ring-1 ring-terracotta'
                    : 'border-ink/10 opacity-70 hover:opacity-100 dark:border-gold/15',
                )}
              >
                <SmartImage src={src} alt="" fill sizes="44px" className="object-cover" />
              </button>
            ))}
          </div>
        )}

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

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-maroon-900/90 p-4 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={() => setLightbox(false)}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-ivory hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>

            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous photo"
                className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-ivory hover:bg-white/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            <motion.div
              key={safeActive}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                <SmartImage
                  src={images[safeActive]}
                  alt={`${product.name} — photo ${safeActive + 1}`}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-center text-sm text-ivory/80">
                {product.name}
                {images.length > 1 && (
                  <span className="text-ivory/50"> · {safeActive + 1}/{images.length}</span>
                )}
              </p>
            </motion.div>

            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next photo"
                className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-ivory hover:bg-white/20"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
