import type { Metadata } from 'next';
import { HeartHandshake, Home, GraduationCap, Sprout } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { SmartImage } from '@/components/ui/SmartImage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CtaBand } from '@/components/sections/CtaBand';
import { waMessages } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Our Mission | Empowering Rural Women Through Handicrafts',
  description:
    'Every purchase from Radhe Radhe Self Help Group supports rural women of Saharanpur with sustainable livelihoods. Discover the human impact behind every handcrafted clay creation — women empowerment through traditional Indian craftsmanship.',
  keywords: ['Women Empowerment India', 'Rural Women Livelihoods', 'Sustainable Handicrafts', 'Self Help Group Mission', 'Artisan Women India'],
  alternates: { canonical: '/mission' },
  openGraph: {
    title: 'Our Mission | Radhe Radhe Self Help Group',
    description: 'Empowering rural women with sustainable livelihoods through traditional clay craftsmanship.',
    url: '/mission',
    type: 'website',
  },
};

const stories = [
  {
    icon: Home,
    title: 'A Roof Strengthened',
    text: 'Income from handcrafted Karwas helped an artisan repair her family home before the monsoon.',
  },
  {
    icon: GraduationCap,
    title: 'A Child Educated',
    text: 'Steady seasonal orders mean school fees are paid on time, and dreams stay alive.',
  },
  {
    icon: Sprout,
    title: 'A Skill Passed On',
    text: 'Experienced women now train newcomers, keeping a centuries-old craft thriving.',
  },
];

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Mission"
        title="Every Purchase Empowers a Family"
        subtitle="We exist to turn traditional craftsmanship into sustainable livelihoods for rural women — and to keep India's handmade heritage alive."
      />

      <section className="section container-px">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why It Matters"
              title="Behind Every Clay Pot Is a Woman With a Dream"
            />
            <p className="mt-5 text-base leading-relaxed text-ink/70 dark:text-ivory/70">
              In rural India, opportunity is often out of reach for women who
              carry the weight of their households. Our Self Help Group changes
              that. By crafting beautiful, in-demand handicrafts from home, our
              women earn with dignity — on their own terms.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70 dark:text-ivory/70">
              When you buy from us, you don&apos;t just receive a beautifully
              handcrafted product. You fund education, healthcare, confidence
              and independence. You help preserve a craft that has been passed
              down through generations.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-gold/20 bg-gold/5 p-5">
              <HeartHandshake className="h-8 w-8 flex-shrink-0 text-gold-600" />
              <p className="text-sm font-medium text-ink/80 dark:text-ivory/80">
                100% of every order directly supports the livelihoods of our
                women artisans and their families.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink/10 shadow-soft">
            <SmartImage
              src="/images/products/p16/1.jpg"
              alt="Handcrafted Swastik Karwa with a lit diya on a festive brass thali"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-white/5">
        <div className="container-px">
          <SectionHeading
            eyebrow="Real Stories, Real Impact"
            title="The Difference Your Order Makes"
            subtitle="These are the everyday victories made possible when tradition meets opportunity."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {stories.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-ink/10 bg-ivory p-8 dark:border-gold/10 dark:bg-maroon-800"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-maroon text-gold-200">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink dark:text-gold-100">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-ivory/65">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Empower a Family Today"
        subheading="Choose handcrafted. Choose meaningful. Choose to make a difference with every order you place."
      />
    </>
  );
}
