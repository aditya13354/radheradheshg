'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SmartImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Wraps next/image with a graceful decorative fallback so the site looks
 * complete even before the real photographs are dropped into /public/images.
 */
export function SmartImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  sizes,
  priority,
}: SmartImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'flex items-center justify-center bg-gradient-to-br from-maroon-100 via-ivory to-gold-100 text-center dark:from-maroon-800 dark:via-maroon-900 dark:to-maroon-800',
          fill ? 'absolute inset-0 h-full w-full' : '',
          className,
        )}
        style={!fill ? { width, height } : undefined}
      >
        <span className="px-4 font-display text-sm text-maroon/50 dark:text-gold-200/60">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={sizes}
      priority={priority}
      onError={() => setError(true)}
      className={className}
    />
  );
}
