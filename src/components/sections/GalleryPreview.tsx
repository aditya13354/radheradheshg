'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { galleryItems } from '@/data/content';
import { SmartImage } from '@/components/ui/SmartImage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';
import { cn } from '@/lib/utils';

export function GalleryPreview() {
  const items = galleryItems.slice(0, 6);

  return (
    <section className="section bg-white/50 dark:bg-white/5">
      <div className="container-px">
        <SectionHeading
          eyebrow="Gallery"
          title="A Glimpse Into Our World"
          subtitle="Handcrafted products, the women who make them, and the celebrations they become part of."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.src}
              variants={fadeUp}
              className={cn(
                'group relative overflow-hidden rounded-3xl border border-maroon/10 shadow-soft dark:border-gold/10',
                index === 0 && 'lg:col-span-2 lg:row-span-2',
                index === 3 && 'sm:col-span-2 lg:col-span-1',
              )}
            >
              <SmartImage
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-maroon opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                {item.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/gallery" className="btn-primary">
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
