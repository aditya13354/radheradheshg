import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata: Metadata = {
  title: 'Gallery | Handcrafted Clay Products & Women Artisans Photos',
  description:
    'Browse our premium gallery showcasing handcrafted clay Karwas, decorative pots, women artisans at work, workshop moments, manufacturing process, and events by Radhe Radhe Self Help Group, Saharanpur.',
  keywords: ['Clay Karwa Photos', 'Handicraft Gallery', 'Women Artisans India', 'Handmade Products Gallery', 'Self Help Group Exhibition'],
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Gallery | Radhe Radhe Self Help Group',
    description: 'See our handcrafted clay creations, artisans at work and exhibition moments.',
    url: '/gallery',
    type: 'website',
  },
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
