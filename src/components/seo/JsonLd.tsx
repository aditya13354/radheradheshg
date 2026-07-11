import { siteConfig } from '@/lib/site';

export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.nameHindi,
        url: siteConfig.url,
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: `+91${siteConfig.phones[0]}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
          addressLocality: 'Saharanpur',
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.pincode,
          addressCountry: 'IN',
        },
        sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
        knowsAbout: siteConfig.keywords,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { '@id': `${siteConfig.url}/#organization` },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.url}/#localbusiness`,
        name: siteConfig.name,
        image: `${siteConfig.url}/images/og.jpg`,
        telephone: `+91${siteConfig.phones[0]}`,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
          addressLocality: 'Saharanpur',
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.pincode,
          addressCountry: 'IN',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
