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
        className="container-px grid grid-cols-2 gap-6 py-8 sm:grid-cols-3 lg:grid-cols-6"
      >
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 text-center"
          >
            <Icon className="h-6 w-6 text-gold-500" />
            <span className="text-xs font-semibold uppercase tracking-wide text-ink/70 dark:text-ivory/70">
              {label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
