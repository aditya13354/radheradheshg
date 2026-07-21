import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { ProductsGrid } from '@/components/sections/ProductsGrid';
import { Customization } from '@/components/sections/Customization';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata: Metadata = {
  title: 'Products & Collections | Handmade Clay Karwa, Pots & Handicrafts',
  description:
    'Explore handcrafted clay Karwas by Radhe Radhe Self Help Group, Saharanpur — traditional, premium hand-painted, Swastik, designer latkan and mirror-work Karwas for Karwa Chauth. Retail, wholesale, bulk & OEM available. Buy Karwa for Karwa Chauth.',
  keywords: ['Buy Clay Karwa', 'Handmade Karwa Chauth Karwa', 'Designer Latkan Karwa', 'Swastik Karwa', 'Premium Painted Karwa', 'Mirror Work Karwa', 'Wholesale Clay Karwa', 'Handcrafted Karwa India'],
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Products & Collections | Radhe Radhe Self Help Group',
    description: 'Premium handcrafted clay Karwas, decorative pots and festive handicrafts. Made by rural women artisans of Saharanpur. Wholesale & retail.',
    url: '/products',
    type: 'website',
  },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Premium Handcrafted Clay Creations"
        subtitle="Every product is handmade by rural women artisans. Discover our collections and message us for pricing, customization and bulk orders."
      />
      <ProductsGrid />
      <Customization />
      <CtaBand
        heading="Found Something You Love?"
        subheading="Call us for retail, wholesale or bulk pricing, or tap WhatsApp to customize any design for your brand or event."
      />
    </>
  );
}
