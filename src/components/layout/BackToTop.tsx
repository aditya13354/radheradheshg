'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export function BackToTop() {
  const visible = useScrollPosition(600);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 left-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-white/80 text-maroon shadow-soft backdrop-blur-md transition-transform hover:scale-105 dark:bg-maroon-800/80 dark:text-gold-100 sm:bottom-8 sm:left-8"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
