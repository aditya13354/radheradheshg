import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { CollectionsShowcase } from '@/components/sections/CollectionsShowcase';
import { MissionPreview } from '@/components/sections/MissionPreview';
import { ImpactCounters } from '@/components/sections/ImpactCounters';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { Testimonials } from '@/components/sections/Testimonials';
import { Faq } from '@/components/sections/Faq';
import { CtaBand } from '@/components/sections/CtaBand';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutPreview />
      <WhyChooseUs />
      <CollectionsShowcase />
      <MissionPreview />
      <ImpactCounters />
      <GalleryPreview />
      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  );
}
