'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { products, collections } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { CollectionCard } from '@/components/ui/CollectionCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { staggerContainer, viewportOnce } from '@/animations/variants';
import { cn } from '@/lib/utils';

const filters = [
  'All',
  'Traditional Karwa',
  'Premium Painted Karwa',
  'Swastik Karwa',
  'Designer Latkan Karwa',
  'Decorative Karwa',
] as const;

export function ProductsGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? products : products.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      <section className="section container-px">
        <SectionHeading
          eyebrow="Featured Products"
          title="Handcrafted, Not Manufactured"
          subtitle="Explore our signature Karwas. We don't display prices online — message us on WhatsApp for retail, wholesale and bulk pricing tailored to you."
        />

        {/* Category filter */}
        <div className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-x-visible sm:px-0">
          {filters.map((cat) => (
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

        <motion.div
          key={filter}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 grid gap-5 sm:mt-10 sm:gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </motion.div>
      </section>

      <section className="section bg-white/50 dark:bg-white/5">
        <div className="container-px">
          <SectionHeading
            eyebrow="All Collections"
            title="Explore Every Collection"
            subtitle="From festive Karwas to wedding return gifts — there's a handcrafted collection for every occasion."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          >
            {collections.map((collection) => (
              <CollectionCard key={collection.slug} collection={collection} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
