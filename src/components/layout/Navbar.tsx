'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/nav';
import { siteConfig } from '@/lib/site';
import { whatsappLink } from '@/lib/whatsapp';
import { waMessages } from '@/lib/whatsapp';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrollPosition(30);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-maroon/10 bg-ivory/85 backdrop-blur-xl shadow-soft dark:border-gold/10 dark:bg-maroon-900/85'
          : 'bg-transparent',
      )}
    >
      <nav className="container-px flex h-16 items-center justify-between py-3" aria-label="Main">
        <Link href="/" className="flex items-center gap-3" aria-label={siteConfig.name}>
          <span className="flex h-11 items-center justify-center rounded-2xl bg-maroon px-3 font-hindi text-base font-bold text-gold-200">
            राधे
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold text-maroon dark:text-gold-100">
              Radhe Radhe
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-terracotta">
              Self Help Group
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors xl:px-4',
                    active
                      ? 'bg-maroon/10 text-maroon dark:bg-gold/10 dark:text-gold-100'
                      : 'text-ink/70 hover:text-maroon dark:text-ivory/70 dark:hover:text-gold-100',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={whatsappLink(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp hidden md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-maroon/15 text-maroon dark:border-gold/20 dark:text-gold-100 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-maroon/10 bg-ivory/95 backdrop-blur-xl dark:border-gold/10 dark:bg-maroon-900/95 lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-xl px-4 py-3 text-base font-medium',
                      pathname === link.href
                        ? 'bg-maroon/10 text-maroon dark:bg-gold/10 dark:text-gold-100'
                        : 'text-ink/80 dark:text-ivory/80',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={whatsappLink(waMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
