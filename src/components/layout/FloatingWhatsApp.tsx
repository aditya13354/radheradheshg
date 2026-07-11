'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import { whatsappLink, waMessages } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

const quickMessages = [
  { label: 'General Enquiry', message: waMessages.general },
  { label: 'Request Catalogue', message: waMessages.catalogue },
  { label: 'Wholesale Order', message: waMessages.wholesale },
  { label: 'Customize Product', message: waMessages.customize },
];

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            className="w-64 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-premium dark:border-white/10 dark:bg-maroon-800"
          >
            <div className="bg-[#25D366] px-5 py-4 text-white">
              <p className="font-display text-base font-semibold">Chat with us</p>
              <p className="text-xs text-white/85">
                We usually reply within minutes
              </p>
            </div>
            <ul className="flex flex-col p-2">
              {quickMessages.map((item) => (
                <li key={item.label}>
                  <a
                    href={whatsappLink(item.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-ivory dark:text-ivory dark:hover:bg-white/5"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close WhatsApp menu' : 'Open WhatsApp menu'}
        aria-expanded={open}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-premium transition-transform hover:scale-105"
      >
        {!open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/60" />
        )}
        {open ? (
          <X className="relative h-6 w-6" />
        ) : (
          <WhatsAppIcon className="relative h-7 w-7" />
        )}
      </button>
    </div>
  );
}
