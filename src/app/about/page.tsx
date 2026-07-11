import type { Metadata } from 'next';
import { Heart, Sprout, Landmark, Eye, Gem, Sparkles, Users, Leaf } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { SmartImage } from '@/components/ui/SmartImage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { CtaBand } from '@/components/sections/CtaBand';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'The story of Radhe Radhe Self Help Group \u2014 a women-led handicraft collective from Saharanpur empowering rural women through handmade clay creations, supported under UPSRLM / NRLM.',
  alternates: { canonical: '/about' },
};

const values = [
  { icon: Heart, title: 'Empowerment', text: 'We put dignity, income and independence into the hands of rural women.' },
  { icon: Leaf, title: 'Sustainability', text: 'Natural clay and eco-friendly methods honour the earth we craft from.' },
  { icon: Gem, title: 'Craftsmanship', text: 'Every piece is finished by hand with uncompromising attention to detail.' },
  { icon: Sparkles, title: 'Authenticity', text: 'Genuine Indian tradition, never mass-produced imitation.' },
];

const journey = [
  { year: 'The Beginning', text: 'A handful of women in Village Ugrah began shaping festive Karwas to support their families.' },
  { year: 'Growing Together', text: 'More women joined, learning painting, decoration and finishing techniques from one another.' },
  { year: 'Government Support', text: 'Recognised and supported under the UPSRLM / NRLM mission, formalising our collective.' },
  { year: 'Today', text: 'A thriving Self Help Group serving retailers, wholesalers and businesses across India.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Handcrafted Heritage, Woman by Woman"
        subtitle="We are a women-led Self Help Group from Village Ugrah, Saharanpur, turning traditional clay craftsmanship into sustainable livelihoods."
      />

      {/* Who we are */}
      <section className="section container-px">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink/10 shadow-soft">
              <SmartImage
                src="/images/gallery/event-1.jpg"
                alt="Radhe Radhe Self Help Group exhibition stall"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="More Than a Craft — A Community"
              subtitle="Radhe Radhe Self Help Group is a collective of skilled rural women who handcraft premium clay Karwas, festive décor and customised handicrafts."
            />
            <p className="mt-5 text-base leading-relaxed text-ink/70 dark:text-ivory/70">
              Founded in the heart of Village Ugrah, Post Kailashpur, District
              Saharanpur, our group was created with one purpose — to give rural
              women a livelihood without leaving their homes and families
              behind. Today, our artisans transform humble clay into beautiful,
              meaningful creations that reach homes and businesses across India.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70 dark:text-ivory/70">
              Operated by {siteConfig.govt.manager} and supported under the{' '}
              {siteConfig.govt.scheme} mission, we blend timeless tradition with
              a modern commitment to quality, reliability and social impact.
            </p>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section bg-white dark:bg-white/5">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Journey"
            title="From a Spark to a Movement"
            subtitle="Every great craft has a story. Here's ours."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((item, i) => (
              <div
                key={item.year}
                className="relative rounded-2xl border border-ink/10 bg-ivory p-6 dark:border-gold/10 dark:bg-maroon-800"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-gradient font-display text-lg font-bold text-maroon-900">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink dark:text-gold-100">
                  {item.year}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-ivory/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section container-px">
        <SectionHeading
          eyebrow="Our Values"
          title="What We Stand For"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-ink/10 bg-white p-6 text-center dark:border-gold/10 dark:bg-maroon-800"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-maroon text-gold-200">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-gold-100">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-ivory/65">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission mini */}
      <section className="container-px pb-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-gradient text-maroon-900">
              <Eye className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink dark:text-gold-100">
              Our Vision
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink/70 dark:text-ivory/70">
              To bring India&apos;s handmade heritage into every home while making
              rural women self-reliant, respected and financially independent.
            </p>
          </div>
          <div className="rounded-2xl border border-maroon/20 bg-maroon/5 p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-maroon text-gold-200">
              <Landmark className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink dark:text-gold-100">
              Our Mission
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink/70 dark:text-ivory/70">
              To transform traditional craftsmanship into sustainable
              livelihoods — one handcrafted piece, one empowered family at a
              time.
            </p>
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <CtaBand
        heading="Be Part of Our Story"
        subheading="Every order you place writes the next chapter for a rural woman and her family. Let's create something beautiful together."
      />
    </>
  );
}
