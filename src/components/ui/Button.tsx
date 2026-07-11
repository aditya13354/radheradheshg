import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'gold' | 'outline' | 'whatsapp';

interface ButtonProps {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

const variantMap: Record<Variant, string> = {
  primary: 'btn-primary',
  gold: 'btn-gold',
  outline: 'btn-outline',
  whatsapp: 'btn-whatsapp',
};

export function Button({
  href,
  variant = 'primary',
  children,
  className,
  external,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(variantMap[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
