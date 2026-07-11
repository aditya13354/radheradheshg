import type { Product, Collection } from '@/types';

/**
 * Product & collection data.
 * Replace the `image` paths with the uploaded photographs placed inside
 * /public/images/products and /public/images/collections.
 * A photo-placement guide is documented in README.md and IMAGE_GUIDE.md.
 */

export const collections: Collection[] = [
  {
    slug: 'traditional-karwa',
    name: 'Traditional Karwa',
    nameHindi: 'पारंपरिक करवा',
    description:
      'Timeless handcrafted Mitti Karwas painted in festive maroon and gold — perfect for an authentic Karwa Chauth.',
    image: '/images/collections/traditional-karwa.jpg',
  },
  {
    slug: 'designer-latkan-karwa',
    name: 'Designer Latkan Karwa',
    nameHindi: 'डिज़ाइनर लटकन करवा',
    description:
      'Elegant Karwas adorned with colourful latkans, golden lace and sequins for a rich, celebratory look.',
    image: '/images/collections/designer-karwa.jpg',
  },
  {
    slug: 'om-karwa',
    name: 'Om Karwa',
    nameHindi: 'ओम डिज़ाइन करवा',
    description:
      'Sacred Om motif hand-painted onto premium clay Karwas — devotion crafted with love.',
    image: '/images/collections/om-karwa.jpg',
  },
  {
    slug: 'swastik-karwa',
    name: 'Swastik Karwa',
    nameHindi: 'स्वास्तिक डिज़ाइन करवा',
    description:
      'Auspicious Swastik designs symbolising prosperity, painted by skilled village artisans.',
    image: '/images/collections/swastik-karwa.jpg',
  },
  {
    slug: 'premium-painted-karwa',
    name: 'Premium Painted Karwa',
    nameHindi: 'प्रीमियम पेंटेड करवा',
    description:
      'Our finest hand-painted Karwas with floral and bell detailing — luxury for every festival table.',
    image: '/images/collections/premium-karwa.jpg',
  },
  {
    slug: 'wedding-return-gift-karwa',
    name: 'Wedding Return Gift Karwa',
    nameHindi: 'वेडिंग रिटर्न गिफ्ट करवा',
    description:
      'Memorable handcrafted Karwas that make graceful, meaningful wedding return gifts in bulk.',
    image: '/images/collections/wedding-karwa.jpg',
  },
  {
    slug: 'festival-decoration',
    name: 'Festival Decoration Collection',
    nameHindi: 'त्योहार सजावट संग्रह',
    description:
      'Handmade décor pieces and hangings that bring warmth and tradition to every celebration.',
    image: '/images/collections/festival-decor.jpg',
  },
  {
    slug: 'decorative-clay-pots',
    name: 'Decorative Clay Pots',
    nameHindi: 'सजावटी मिट्टी के बर्तन',
    description:
      'Eco-friendly decorative clay pots, hand-finished for home décor, gifting and events.',
    image: '/images/collections/clay-pots.jpg',
  },
  {
    slug: 'navgrah-samrani-cup',
    name: 'Navgrah Samrani Cup',
    nameHindi: 'नवग्रह समरानी कप',
    description:
      'Divine nine-planet Samrani cups for purification, peace and long-lasting natural fragrance.',
    image: '/images/collections/navgrah-samrani.jpg',
  },
  {
    slug: 'customized-clay-products',
    name: 'Customized Clay Products',
    nameHindi: 'कस्टमाइज़्ड मिट्टी उत्पाद',
    description:
      'Private label, OEM and made-to-order clay products designed exactly to your brief.',
    image: '/images/collections/customized.jpg',
  },
  {
    slug: 'seasonal-collection',
    name: 'Seasonal Collection',
    nameHindi: 'मौसमी संग्रह',
    description:
      'Fresh handcrafted pieces released for every festive season — Diwali, Karwa Chauth and more.',
    image: '/images/collections/seasonal.jpg',
  },
  {
    slug: 'corporate-gift-collection',
    name: 'Corporate Gift Collection',
    nameHindi: 'कॉर्पोरेट गिफ्ट संग्रह',
    description:
      'Elegant branded handicrafts for corporate gifting, backed by a powerful social-impact story.',
    image: '/images/collections/corporate.jpg',
  },
];

export const products: Product[] = [
  {
    slug: 'premium-karwa-collection',
    name: 'Premium Karwa Collection',
    nameHindi: 'प्रीमियम करवा संग्रह',
    category: 'Signature Collection',
    tagline: 'One complete range — every design, every occasion, every order size',
    description:
      'Our flagship handcrafted Karwa range brings together every design we make — Traditional, Designer Latkan, Om, Swastik, Bell and Floral — in one premium collection. Each Mitti Karwa is shaped and hand-painted by rural women artisans, finished with golden lace, sequins and colourful tassels, and packed safely for retail, wholesale, bulk and export orders alike.',
    image: '/images/hero/hero-karwa.jpg',
    badges: [
      'Available for Retail',
      'Available for Wholesale',
      'Bulk Orders',
      'OEM / Private Label',
      'Customization Available',
      'Festival Collection',
      'Wedding Collection',
      'Corporate Gifts',
      'Return Gifts',
    ],
    features: [
      '100% handmade by rural women',
      'Eco-friendly natural clay',
      'Hand-painted traditional designs',
      'Decorative latkans & golden lace',
      'Premium durable finish',
      'Safe bubble-wrap packaging',
    ],
    uses: [
      'Karwa Chauth',
      'Diwali & festivals',
      'Wedding return gifts',
      'Corporate & bulk gifting',
      'Pooja & rituals',
      'Retail & resale',
    ],
    colors: ['Maroon', 'Red', 'Pink', 'Yellow', 'Gold accents', 'Custom on request'],
    customizable: true,
  },
  {
    slug: 'traditional-karwa',
    name: 'Traditional Karwa',
    nameHindi: 'पारंपरिक करवा',
    category: 'Karwa',
    tagline: 'The authentic Mitti Karwa for a blessed Karwa Chauth',
    description:
      'A beautifully handcrafted clay Karwa painted in deep festive maroon and finished with golden lace, sequins and colourful tassels. Shaped and decorated entirely by hand by the rural women of our group.',
    image: '/images/products/traditional-karwa.jpg',
    badges: ['Available for Retail', 'Available for Wholesale', 'Festival Collection'],
    features: ['100% handmade', 'Eco-friendly natural clay', 'Traditional Indian design', 'Durable premium finish'],
    uses: ['Karwa Chauth', 'Pooja & rituals', 'Festival décor', 'Gifting'],
    colors: ['Maroon', 'Red', 'Gold accents'],
    customizable: true,
  },
  {
    slug: 'designer-latkan-karwa',
    name: 'Designer Latkan Karwa',
    nameHindi: 'डिज़ाइनर लटकन करवा',
    category: 'Karwa',
    tagline: 'Rich, celebratory Karwas with decorative hangings',
    description:
      'Premium Karwas adorned with vibrant multi-colour latkans, golden lace borders and shimmering sequins — a statement piece for a grand festive celebration.',
    image: '/images/products/designer-karwa.jpg',
    badges: ['Available for Retail', 'Available for Wholesale', 'Bulk Orders', 'Customization Available'],
    features: ['Decorative latkans & coins', 'Hand-painted detailing', 'Golden lace finish', 'Premium quality'],
    uses: ['Karwa Chauth', 'Festive gifting', 'Wedding rituals', 'Retail display'],
    colors: ['Maroon', 'Red', 'Multi-colour tassels'],
    customizable: true,
  },
  {
    slug: 'om-karwa',
    name: 'Om Karwa',
    nameHindi: 'ओम डिज़ाइन करवा',
    category: 'Karwa',
    tagline: 'Sacred Om motif crafted with devotion',
    description:
      'A devotional Karwa featuring a hand-painted Om symbol in golden hues, blending spirituality with fine craftsmanship.',
    image: '/images/products/om-karwa.jpg',
    badges: ['Available for Retail', 'Available for Wholesale', 'Festival Collection', 'OEM Available'],
    features: ['Sacred Om motif', 'Hand-painted', 'Eco-friendly clay', 'Traditional finish'],
    uses: ['Pooja & rituals', 'Karwa Chauth', 'Temple gifting', 'Festival décor'],
    colors: ['Maroon', 'Gold'],
    customizable: true,
  },
  {
    slug: 'swastik-karwa',
    name: 'Swastik Karwa',
    nameHindi: 'स्वास्तिक डिज़ाइन करवा',
    category: 'Karwa',
    tagline: 'Auspicious Swastik designs for prosperity',
    description:
      'Handcrafted Karwas featuring the auspicious Swastik symbol, hand-painted to invite prosperity and positivity into every home.',
    image: '/images/products/swastik-karwa.jpg',
    badges: ['Available for Retail', 'Available for Wholesale', 'Bulk Orders'],
    features: ['Auspicious Swastik design', 'Handmade', 'Vibrant colours', 'Durable finish'],
    uses: ['Pooja & rituals', 'Karwa Chauth', 'Festival décor', 'Gifting'],
    colors: ['Maroon', 'Gold', 'Yellow'],
    customizable: true,
  },
  {
    slug: 'premium-painted-karwa',
    name: 'Premium Painted Karwa',
    nameHindi: 'प्रीमियम पेंटेड करवा',
    category: 'Karwa',
    tagline: 'Our finest hand-painted festive Karwa',
    description:
      'The pinnacle of our craftsmanship — richly hand-painted with floral, bell and paisley detailing and finished with premium decorative trims.',
    image: '/images/products/premium-karwa.jpg',
    badges: ['Available for Retail', 'Available for Wholesale', 'Corporate Gifts', 'Customization Available'],
    features: ['Intricate hand-painting', 'Floral & bell motifs', 'Premium decorative trims', 'Luxury finish'],
    uses: ['Premium gifting', 'Karwa Chauth', 'Corporate gifts', 'Festive décor'],
    colors: ['Maroon', 'Gold', 'Multi-colour'],
    customizable: true,
  },
  {
    slug: 'wedding-return-gift-karwa',
    name: 'Wedding Return Gift Karwa',
    nameHindi: 'वेडिंग रिटर्न गिफ्ट करवा',
    category: 'Wedding',
    tagline: 'Meaningful handcrafted wedding return gifts',
    description:
      'Graceful handmade Karwas produced in bulk for weddings — a memorable, culturally rich return gift with a heart-warming social story.',
    image: '/images/products/wedding-karwa.jpg',
    badges: ['Wedding Collection', 'Bulk Orders', 'Return Gifts', 'Customization Available'],
    features: ['Bulk manufacturing', 'Custom colours & branding', 'Safe packaging', 'Made by rural women'],
    uses: ['Wedding return gifts', 'Events', 'Bulk gifting', 'Festivals'],
    colors: ['Custom on request'],
    customizable: true,
  },
  {
    slug: 'decorative-clay-pots',
    name: 'Decorative Clay Pots',
    nameHindi: 'सजावटी मिट्टी के बर्तन',
    category: 'Decor',
    tagline: 'Eco-friendly handcrafted décor pots',
    description:
      'Beautifully finished decorative clay pots for home décor, plants, gifting and event styling — a sustainable alternative crafted by hand.',
    image: '/images/products/clay-pots.jpg',
    badges: ['Available for Retail', 'Available for Wholesale', 'Bulk Orders', 'OEM Available'],
    features: ['Eco-friendly clay', 'Hand-finished', 'Versatile décor use', 'Custom sizes'],
    uses: ['Home décor', 'Events', 'Gifting', 'Retail'],
    colors: ['Terracotta', 'Painted on request'],
    customizable: true,
  },
  {
    slug: 'navgrah-samrani-cup',
    name: 'Navgrah Samrani Cup',
    nameHindi: 'नवग्रह समरानी कप',
    category: 'Spiritual',
    tagline: 'Divine fragrance for the nine planets',
    description:
      'A handcrafted nine-planet (Navgrah) Samrani cup designed for home purification, mental peace and long-lasting natural fragrance — 100% natural and made to last.',
    image: '/images/products/navgrah-samrani.jpg',
    badges: ['Available for Retail', 'Available for Wholesale', 'Bulk Orders', 'Festival Collection'],
    features: ['Purifies the home', 'Brings mental peace', '100% natural', 'Long-lasting fragrance'],
    uses: ['Daily rituals', 'Home purification', 'Gifting', 'Spiritual stores'],
    colors: ['Natural clay', 'Painted'],
    customizable: true,
  },
];
