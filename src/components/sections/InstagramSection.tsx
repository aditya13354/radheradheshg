'use client';

import { motion } from 'framer-motion';
import { Instagram, QrCode, ScanLine } from 'lucide-react';
import { SmartImage } from '@/components/ui/SmartImage';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/lib/site';
import { whatsappLink, waMessages } from '@/lib/whatsapp';
import { galleryItems } from '@/data/content';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';

export function InstagramSection() {
  const feed = galleryItems.slice(0, 6);

  return (
    <section className="section container-px">
      <SectionHeading
        eyebrow="Follow Our Journey"
        title="Handmade Stories, Every Day"
        subtitle="Follow us on Instagram for behind-the-scenes glimpses, new collections and festive inspiration."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-8 lg:grid-cols-3"
      >
        {/* Instagram feed grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {feed.map((item) => (
              <motion.a
                key={item.src}
                variants={fadeUp}
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-2xl border border-maroon/10 dark:border-gold/10"
              >
                <SmartImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 33vw, 22vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-maroon-900/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Instagram className="h-6 w-6 text-ivory" />
                </div>
              </motion.a>
            ))}
          </div>
          <div className="mt-6 text-center sm:text-left">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Instagram className="h-4 w-4" />
              Follow @radheradheshg
            </a>
          </div>
        </div>

        {/* QR code card */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center justify-center rounded-3xl bg-maroon-gradient p-8 text-center text-ivory shadow-premium"
        >
          <span className="eyebrow mb-5 border-gold/40 bg-white/10 text-gold-100">
            <ScanLine className="h-3.5 w-3.5" />
            Scan to Connect
          </span>
          <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-white p-3 shadow-lg">
            <SmartImage
              src="/images/qr-whatsapp.png"
              alt="Scan QR code to chat with us on WhatsApp"
              width={140}
              height={140}
              className="h-full w-full object-contain"
            />
          </div>
          <p className="mt-5 font-display text-lg font-semibold">
            Scan on WhatsApp
          </p>
          <p className="mt-1 text-sm text-ivory/70">
            Instant catalogue &amp; pricing
          </p>
          <a
            href={whatsappLink(waMessages.catalogue)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Request Catalogue
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
