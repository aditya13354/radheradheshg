'use client';

import { whatsappLink, waMessages } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(waMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-premium transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
