import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { CollectionsShowcase } from '@/components/sections/CollectionsShowcase';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { CtaBand } from '@/components/sections/CtaBand';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutPreview />
      <CollectionsShowcase />
      <GalleryPreview />
      <CtaBand />
    </>
  );
}
