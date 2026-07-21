'use client';

import { motion } from 'framer-motion';
import { SmartImage } from '@/components/ui/SmartImage';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { whatsappLink, waMessages } from '@/lib/whatsapp';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';

export function MissionPreview() {
  return (
    <section className="relative overflow-hidden bg-maroon-900 py-14 text-ivory sm:py-24">
      <div className="container-px relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.span
            variants={fadeUp}
            className="eyebrow mb-5 text-gold-200"
          >
            Our Mission
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="heading-lg font-semibold text-ivory"
          >
            Every Purchase Empowers a Family
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-sm leading-relaxed text-ivory/80 sm:mt-5 sm:text-base lg:text-lg"
          >
            Behind every Karwa is a woman who woke up with a dream — of
            educating her children, supporting her home and standing on her own
            feet. Our mission is to turn traditional craftsmanship into
            sustainable livelihoods, one handcrafted piece at a time.
          </motion.p>

          <motion.blockquote
            variants={fadeUp}
            className="mt-6 rounded-xl border border-gold/20 bg-white/5 p-4 sm:mt-8 sm:rounded-2xl sm:p-6"
          >
            <p className="font-display text-lg italic text-gold-100">
              &ldquo;When you gift our handmade Karwa, you gift a mother the
              confidence to dream bigger.&rdquo;
            </p>
            <footer className="mt-3 text-sm text-ivory/60">
              &mdash; The women of Radhe Radhe SHG
            </footer>
          </motion.blockquote>

          <motion.div variants={fadeUp} className="mt-8">
            <a
              href={whatsappLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Support Our Artisans
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/20 shadow-soft">
            <SmartImage
              src="/images/products/p13/1.jpg"
              alt="A premium handcrafted Karwa detailed by hand with golden sequin lace"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
