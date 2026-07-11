'use client';

import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { whatsappLink, telLink, mailLink, waMessages } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { fadeUp, viewportOnce } from '@/animations/variants';

interface CtaBandProps {
  heading?: string;
  subheading?: string;
  message?: string;
  compact?: boolean;
}

export function CtaBand({
  heading = "Let's Create Something Beautiful Together",
  subheading = "Whether you're looking for festive decorations, wedding return gifts, wholesale orders, or customized handcrafted products, our team is here to help.",
  message = waMessages.general,
  compact = false,
}: CtaBandProps) {
  return (
    <section className={compact ? 'container-px' : 'container-px section'}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative overflow-hidden rounded-2xl bg-maroon px-6 py-14 text-center sm:px-12 sm:py-20"
      >
        <div className="relative mx-auto max-w-3xl">
          <span className="eyebrow mb-5 text-gold-200">
            Let&apos;s Talk
          </span>
          <h2 className="heading-lg font-semibold text-ivory">{heading}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ivory/80 sm:text-lg">
            {subheading}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <a href={telLink()} className="btn-gold">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a href={mailLink()} className="btn-outline border-white/40 text-ivory hover:border-white">
              <Mail className="h-4 w-4" />
              Email Us
            </a>
            <a
              href={whatsappLink(waMessages.catalogue)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white/40 text-ivory hover:border-white"
            >
              Request Catalogue
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
