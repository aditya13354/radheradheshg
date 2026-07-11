import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { siteConfig } from '@/lib/site';
import { mailLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Radhe Radhe Self Help Group (radheradheshg.com).',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
};

const sections = [
  {
    heading: 'Introduction',
    body: `This Privacy Policy explains how ${siteConfig.name} ("we", "us", or "our") handles information when you visit ${siteConfig.domain}. We are committed to protecting your privacy and being transparent about our practices.`,
  },
  {
    heading: 'Information We Collect',
    body: 'Our website is an informational showroom and does not sell products online. We do not require you to create an account or submit personal data to browse. When you contact us via WhatsApp, phone or email, you voluntarily share information such as your name, contact number and enquiry details so we can respond to you.',
  },
  {
    heading: 'How We Use Your Information',
    body: 'Any information you share through WhatsApp, phone or email is used solely to respond to your enquiries, provide catalogues and pricing, process orders you request, and communicate about our products and services.',
  },
  {
    heading: 'Cookies & Analytics',
    body: 'We may use minimal, privacy-friendly analytics to understand overall website traffic and improve your experience. We do not use this information to personally identify you.',
  },
  {
    heading: 'Third-Party Links',
    body: 'Our website may link to third-party platforms such as WhatsApp, Instagram, Facebook and Google Maps. These platforms have their own privacy policies, and we are not responsible for their practices.',
  },
  {
    heading: 'Data Sharing',
    body: 'We do not sell, rent or trade your personal information. We only use the details you share to serve your enquiry.',
  },
  {
    heading: 'Your Rights',
    body: 'You may request that we update or delete any information you have shared with us by contacting us directly. We will honour reasonable requests promptly.',
  },
  {
    heading: 'Children\u2019s Privacy',
    body: 'Our website is intended for a general audience and is not directed at children. We do not knowingly collect information from children.',
  },
  {
    heading: 'Updates to This Policy',
    body: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Your trust matters to us. Here's how we respect and protect your privacy."
      />

      <section className="section container-px">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-ink/60 dark:text-ivory/60">
            Last updated: {new Date().toLocaleDateString('en-IN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          <div className="mt-8 space-y-8">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-xl font-semibold text-maroon dark:text-gold-100">
                  {section.heading}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink/70 dark:text-ivory/70">
                  {section.body}
                </p>
              </div>
            ))}

            <div className="rounded-3xl border border-gold/20 bg-gold/5 p-6">
              <h2 className="font-display text-xl font-semibold text-maroon dark:text-gold-100">
                Contact Us
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink/70 dark:text-ivory/70">
                For any questions about this Privacy Policy, please reach us at{' '}
                <a
                  href={mailLink('Privacy Policy Enquiry')}
                  className="font-medium text-terracotta hover:underline"
                >
                  {siteConfig.email}
                </a>{' '}
                or call +91 {siteConfig.phones[0]}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
