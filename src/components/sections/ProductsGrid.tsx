'use client';

import { motion } from 'framer-motion';
import { products, collections } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { CollectionCard } from '@/components/ui/CollectionCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { staggerContainer, viewportOnce } from '@/animations/variants';

export function ProductsGrid() {
  return (
    <>
      <section className="section container-px">
        <SectionHeading
          eyebrow="Featured Products"
          title="Handcrafted, Not Manufactured"
          subtitle="Explore our signature products. We don't display prices online — message us on WhatsApp for retail, wholesale and bulk pricing tailored to you."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid gap-5 sm:mt-14 sm:gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </motion.div>
      </section>

      <section className="section bg-white/50 dark:bg-white/5">
        <div className="container-px">
          <SectionHeading
            eyebrow="All Collections"
            title="Explore Every Collection"
            subtitle="From festive Karwas to corporate gifts and spiritual pieces — there's a handcrafted collection for every occasion."
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
