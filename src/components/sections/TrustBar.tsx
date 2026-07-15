'use client';

import { motion } from 'framer-motion';
import { Hand, Leaf, ShieldCheck, MapPin, Truck, Package } from 'lucide-react';
import { fadeUp, viewportOnce } from '@/animations/variants';

const items = [
  { icon: Hand, label: '100% Handmade' },
  { icon: Leaf, label: 'Eco-Friendly' },
  { icon: ShieldCheck, label: 'Govt. Supported' },
  { icon: MapPin, label: 'Made in India' },
  { icon: Package, label: 'Safe Packaging' },
  { icon: Truck, label: 'Pan-India Delivery' },
];

export function TrustBar() {
  return (
    <section className="border-y border-maroon/10 bg-white/60 dark:border-gold/10 dark:bg-white/5">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-px grid grid-cols-3 gap-4 py-5 sm:grid-cols-3 sm:gap-6 sm:py-8 lg:grid-cols-6"
      >
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1.5 text-center sm:gap-2"
          >
            <Icon className="h-5 w-5 text-gold-500 sm:h-6 sm:w-6" />
            <span className="text-[10px] font-semibold uppercase tracking-wide text-ink/70 dark:text-ivory/70 sm:text-xs">
              {label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
