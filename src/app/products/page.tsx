import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { ProductsGrid } from '@/components/sections/ProductsGrid';
import { Customization } from '@/components/sections/Customization';
import { CtaBand } from '@/components/sections/CtaBand';
import { waMessages } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Products & Collections',
  description:
    'Explore handcrafted clay Karwas, decorative pots, Navgrah Samrani cups and festive handicrafts by Radhe Radhe Self Help Group. Retail, wholesale, bulk & OEM available.',
  alternates: { canonical: '/products' },
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
        subheading="Message us for retail, wholesale or bulk pricing, or to customize any design for your brand or event."
        message={waMessages.pricing}
      />
    </>
  );
}
