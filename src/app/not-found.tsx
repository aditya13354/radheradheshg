import Link from 'next/link';
import { Home } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { whatsappLink, waMessages } from '@/lib/whatsapp';

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-warm-radial px-6 dark:bg-maroon-900">
      <div className="text-center">
        <p className="font-display text-7xl font-bold text-gradient-gold sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-maroon dark:text-gold-100">
          This Page Wandered Off
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-ink/70 dark:text-ivory/70">
          The page you&apos;re looking for doesn&apos;t exist — but our beautiful
          handcrafted collections do. Let&apos;s get you back.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <a
            href={whatsappLink(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
