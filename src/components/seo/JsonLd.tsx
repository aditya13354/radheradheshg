import { siteConfig } from '@/lib/site';

export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: [siteConfig.nameHindi, siteConfig.shortName, 'Radhe Radhe SHG'],
        url: siteConfig.url,
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: `+91${siteConfig.phones[0]}`,
        foundingLocation: {
          '@type': 'Place',
          name: 'Village Ugrah, Saharanpur, Uttar Pradesh, India',
        },
        numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 50 },
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
          addressLocality: 'Saharanpur',
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.pincode,
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
        knowsAbout: [
          'Handmade Clay Karwa',
          'Indian Handicrafts',
          'Terracotta Products',
          'Women Self Help Group',
          'Festival Decoration',
          'Clay Pottery',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        alternateName: siteConfig.nameHindi,
        publisher: { '@id': `${siteConfig.url}/#organization` },
        inLanguage: ['en-IN', 'hi-IN'],
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteConfig.url}/products?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.url}/#localbusiness`,
        name: siteConfig.name,
        image: `${siteConfig.url}/images/og.jpg`,
        telephone: `+91${siteConfig.phones[0]}`,
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, UPI, Bank Transfer',
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
          addressLocality: 'Saharanpur',
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.pincode,
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Handcrafted Clay Products',
          itemListElement: [
            {
              '@type': 'OfferCatalog',
              name: 'Clay Karwas',
              description: 'Handmade clay Karwas for Karwa Chauth and festive occasions',
            },
            {
              '@type': 'OfferCatalog',
              name: 'Decorative Clay Pots',
              description: 'Hand-painted decorative clay pots and planters',
            },
            {
              '@type': 'OfferCatalog',
              name: 'Festival & Puja Items',
              description: 'Navgrah Samrani cups, diyas, and festival décor',
            },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteConfig.url}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Products', item: `${siteConfig.url}/products` },
          { '@type': 'ListItem', position: 3, name: 'Gallery', item: `${siteConfig.url}/gallery` },
          { '@type': 'ListItem', position: 4, name: 'About', item: `${siteConfig.url}/about` },
          { '@type': 'ListItem', position: 5, name: 'Contact', item: `${siteConfig.url}/contact` },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteConfig.url}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What products does Radhe Radhe Self Help Group make?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We handcraft premium clay Karwas for Karwa Chauth, decorative clay pots, Navgrah Samrani cups, festive diyas, and custom handicrafts. All products are made by rural women artisans in Saharanpur, Uttar Pradesh.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you accept wholesale and bulk orders?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! We offer wholesale, bulk, OEM manufacturing and private label services. We serve retail stores, corporates, wedding planners and export buyers across India with factory-direct pricing.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I place an order or get pricing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Simply message us on WhatsApp at +91 9719266605 or call us. We respond within minutes with our catalogue, pricing and customization options.',
            },
          },
          {
            '@type': 'Question',
            name: 'Where is Radhe Radhe Self Help Group located?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We are based in Village Ugrah, Post Kailashpur, District Saharanpur, Uttar Pradesh 247001, India. We deliver pan-India.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are the products eco-friendly?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, all our products are made from natural clay using traditional, eco-friendly methods. We use sustainable practices that honour the earth and preserve India\'s artisan heritage.',
            },
          },
        ],
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
