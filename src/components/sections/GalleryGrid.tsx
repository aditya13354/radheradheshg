'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from '@/data/content';
import { SmartImage } from '@/components/ui/SmartImage';
import { cn } from '@/lib/utils';
import type { GalleryCategory } from '@/types';

const categories: (GalleryCategory | 'All')[] = [
  'All',
  'Products',
  'Women Artisans',
  'Workshop',
  'Manufacturing',
  'Events',
  'Exhibitions',
];

export function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter],
  );

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length],
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length],
  );

  return (
    <section className="section container-px">
      {/* Filters */}
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-x-visible sm:px-0 sm:pb-0">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={cn(
              'shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-all sm:px-5 sm:text-sm',
              filter === cat
                ? 'bg-maroon-gradient text-ivory shadow-soft'
                : 'border border-maroon/15 text-ink/70 hover:border-maroon/40 dark:border-gold/20 dark:text-ivory/70',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <motion.div
        layout
        className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3"
      >
        <AnimatePresence>
          {filtered.map((item, index) => (
            <motion.button
              layout
              key={item.src}
              type="button"
              onClick={() => setLightbox(index)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group relative mb-4 block w-full overflow-hidden rounded-3xl border border-maroon/10 shadow-soft dark:border-gold/10"
            >
              <div
                className={cn(
                  'relative w-full',
                  index % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square',
                )}
              >
                <SmartImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-maroon opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  {item.category}
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-maroon-900/90 p-4 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-ivory hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-ivory hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[4/3] w-full">
                <SmartImage
                  src={filtered[lightbox].src}
                  alt={filtered[lightbox].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-center text-sm text-ivory/80">
                {filtered[lightbox].alt}
              </p>
            </motion.div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-ivory hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
