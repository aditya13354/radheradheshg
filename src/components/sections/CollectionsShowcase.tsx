'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { collections } from '@/data/products';
import { CollectionCard } from '@/components/ui/CollectionCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { staggerContainer, viewportOnce } from '@/animations/variants';

export function CollectionsShowcase() {
  return (
    <section className="section container-px">
      <SectionHeading
        eyebrow="Our Collections"
        title="Premium Handcrafted Collections"
        subtitle="From traditional Karwas to bespoke corporate gifts, explore handcrafted collections made for every celebration and occasion."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {collections.slice(0, 6).map((collection) => (
          <CollectionCard key={collection.slug} collection={collection} />
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <Link href="/products" className="btn-primary">
          Explore All Collections
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
