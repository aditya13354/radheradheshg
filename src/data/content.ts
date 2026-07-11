import type {
  Feature,
  Testimonial,
  FaqItem,
  ProcessStep,
  ImpactStat,
  GalleryItem,
} from '@/types';

export const features: Feature[] = [
  { title: '100% Handmade', description: 'Every piece is shaped and finished entirely by hand.', icon: 'Hand' },
  { title: 'Made by Rural Women', description: 'Crafted by skilled women artisans of our village.', icon: 'Users' },
  { title: 'Eco Friendly', description: 'Natural clay, safe and sustainable materials.', icon: 'Leaf' },
  { title: 'Made in India', description: 'Proudly handcrafted in Saharanpur, Uttar Pradesh.', icon: 'MapPin' },
  { title: 'Traditional Designs', description: 'Authentic motifs rooted in Indian heritage.', icon: 'Palette' },
  { title: 'Festival Special', description: 'Perfect for Karwa Chauth, Diwali and every occasion.', icon: 'Sparkles' },
  { title: 'Wholesale Available', description: 'Reliable supply for retailers and distributors.', icon: 'Store' },
  { title: 'Customization Available', description: 'Bespoke designs, colours and branding.', icon: 'Wand2' },
  { title: 'Premium Quality', description: 'Vibrant colours and a durable premium finish.', icon: 'Gem' },
  { title: 'Government Supported', description: 'Backed under UPSRLM / NRLM mission.', icon: 'ShieldCheck' },
  { title: 'Bulk Orders', description: 'Large-volume orders delivered on time.', icon: 'Boxes' },
  { title: 'OEM Manufacturing', description: 'Private label & OEM production welcome.', icon: 'Factory' },
];

export const processSteps: ProcessStep[] = [
  { title: 'Clay Selection', description: 'We hand-pick premium natural clay for strength and finish.' },
  { title: 'Handcrafting', description: 'Skilled women shape each piece by hand with care.' },
  { title: 'Drying', description: 'Pieces are sun-dried gradually to prevent cracks.' },
  { title: 'Painting', description: 'Vibrant, festive colours are hand-painted with love.' },
  { title: 'Decoration', description: 'Golden lace, latkans and sequins are added by hand.' },
  { title: 'Quality Check', description: 'Every product is inspected for a flawless finish.' },
  { title: 'Packaging', description: 'Safe, multi-layer packaging protects each piece.' },
  { title: 'Delivery', description: 'Pan-India delivery, reliably and on time.' },
];

export const impactStats: ImpactStat[] = [
  { value: 150, suffix: '+', label: 'Women Empowered' },
  { value: 12, suffix: '+', label: 'Villages Supported' },
  { value: 50000, suffix: '+', label: 'Products Crafted' },
  { value: 300, suffix: '+', label: 'Bulk Orders Delivered' },
  { value: 5000, suffix: '+', label: 'Happy Customers' },
  { value: 25, suffix: '+', label: 'Festivals Celebrated' },
];

export const customizationOptions = [
  { title: 'Private Label', description: 'Your brand name and identity on every product.' },
  { title: 'OEM Manufacturing', description: 'End-to-end production tailored to your specs.' },
  { title: 'Customized Design', description: 'Motifs, colours and shapes designed for you.' },
  { title: 'Wedding Gifts', description: 'Bulk return gifts, custom to your theme.' },
  { title: 'Festival Gifts', description: 'Seasonal collections for festive campaigns.' },
  { title: 'Corporate Branding', description: 'Branded handicrafts with a social-impact story.' },
  { title: 'Retail Supply', description: 'Consistent quality for your retail shelves.' },
  { title: 'Wholesale Supply', description: 'Competitive bulk supply for distributors.' },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Anjali Verma',
    role: 'Boutique Owner',
    location: 'Delhi',
    quote:
      'The Karwas are absolutely stunning and the quality is unmatched. My customers love that every piece supports rural women. I reorder every festive season.',
  },
  {
    name: 'Rohit Malhotra',
    role: 'Wedding Planner',
    location: 'Jaipur',
    quote:
      'We ordered 500 customised return-gift Karwas for a wedding. The finish, packaging and on-time delivery were flawless. Highly recommended for bulk orders.',
  },
  {
    name: 'Priya Nair',
    role: 'Gift Store Owner',
    location: 'Lucknow',
    quote:
      'Authentic, eco-friendly and beautifully handcrafted. The team was responsive on WhatsApp and helped me customise a complete festival range.',
  },
  {
    name: 'Sunil Agarwal',
    role: 'Wholesale Distributor',
    location: 'Kanpur',
    quote:
      'Reliable supply, premium quality and honest pricing. Working with a government-supported women\u2019s group makes the partnership even more meaningful.',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'Do you sell products directly on the website?',
    answer:
      'Our website is a showroom to explore our handcrafted collections. To place an order, get pricing or discuss customisation, simply contact us on WhatsApp, phone or email — our team responds quickly.',
  },
  {
    question: 'Do you accept wholesale and bulk orders?',
    answer:
      'Yes. We specialise in wholesale, bulk and OEM manufacturing for retailers, wedding planners, corporates and export buyers. Share your requirement on WhatsApp for a quick quote.',
  },
  {
    question: 'Can products be customised for my brand?',
    answer:
      'Absolutely. We offer private label, OEM, custom designs, colours, branding and packaging tailored to your business or event.',
  },
  {
    question: 'Do you deliver across India?',
    answer:
      'Yes, we offer safe multi-layer packaging and pan-India delivery. Export enquiries are also welcome.',
  },
  {
    question: 'Are the products eco-friendly?',
    answer:
      'Yes. Every product is handcrafted from natural clay using eco-friendly, sustainable materials.',
  },
  {
    question: 'Who makes these products?',
    answer:
      'Every product is lovingly handcrafted by rural women of our Self Help Group, supported under the UPSRLM / NRLM government mission.',
  },
];

/**
 * Gallery items reference photos placed in /public/images/gallery.
 * Provided artisan, event and product photographs should be dropped in here.
 */
export const galleryItems: GalleryItem[] = [
  { src: '/images/gallery/product-1.jpg', alt: 'Handcrafted maroon and gold Om Karwa', category: 'Products', featured: true },
  { src: '/images/gallery/product-2.jpg', alt: 'Designer latkan Karwa with tassels', category: 'Products' },
  { src: '/images/gallery/product-3.jpg', alt: 'Swastik design festive Karwa', category: 'Products' },
  { src: '/images/gallery/product-4.jpg', alt: 'Red decorative clay pot with golden lace', category: 'Products' },
  { src: '/images/gallery/product-5.jpg', alt: 'Premium painted Karwa collection stacked', category: 'Products', featured: true },
  { src: '/images/gallery/product-6.jpg', alt: 'Navgrah Samrani cup', category: 'Products' },
  { src: '/images/gallery/artisan-1.jpg', alt: 'Rural woman artisan hand-painting a Karwa', category: 'Women Artisans', featured: true },
  { src: '/images/gallery/artisan-2.jpg', alt: 'Women artisans decorating clay pots', category: 'Women Artisans' },
  { src: '/images/gallery/workshop-1.jpg', alt: 'Inside the Radhe Radhe workshop', category: 'Workshop' },
  { src: '/images/gallery/manufacturing-1.jpg', alt: 'Unpainted clay pots drying in the workshop', category: 'Manufacturing' },
  { src: '/images/gallery/event-1.jpg', alt: 'Radhe Radhe SHG exhibition stall', category: 'Events', featured: true },
  { src: '/images/gallery/exhibition-1.jpg', alt: 'Officials visiting the Radhe Radhe exhibition stall', category: 'Exhibitions' },
];
