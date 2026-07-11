import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A premium gallery of handcrafted clay products, women artisans, workshop moments, manufacturing, events and exhibitions by Radhe Radhe Self Help Group.',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Craft, Community & Celebration"
        subtitle="Browse our products, meet the women behind them and see the moments that make our story."
      />
      <GalleryGrid />
      <CtaBand
        heading="Like What You See?"
        subheading="Request our full catalogue on WhatsApp and discover the complete range of handcrafted collections."
      />
    </>
  );
}
