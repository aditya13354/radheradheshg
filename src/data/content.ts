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
 * Gallery items reference the real product photographs in
 * /public/images/products. The gallery showcases our handcrafted Karwa range
 * across every design family.
 */
export const galleryItems: GalleryItem[] = [
  { src: '/images/products/p13/1.jpg', alt: 'Premium lidded maroon Karwa with double golden sequin borders', category: 'Premium Painted', featured: true },
  { src: '/images/products/p16/1.jpg', alt: 'Swastik Karwa with a lit diya on a brass thali', category: 'Swastik Karwa', featured: true },
  { src: '/images/products/p1/1.jpg', alt: 'Rose-pink designer latkan Karwa with colourful tassels', category: 'Designer Latkan', featured: true },
  { src: '/images/products/p5/1.jpg', alt: 'Classic red Karwa with golden coin sequin lace', category: 'Traditional Karwa', featured: true },
  { src: '/images/products/p11/1.jpg', alt: 'Maroon Karwa hand-painted with a golden mandala', category: 'Premium Painted' },
  { src: '/images/products/p7/1.jpg', alt: 'Pink mirror-work Karwa used as a festive tealight', category: 'Decorative', featured: true },
  { src: '/images/products/p14/1.jpg', alt: 'Swastik Karwa with sun and shell motifs', category: 'Swastik Karwa' },
  { src: '/images/products/p12/1.jpg', alt: 'Traditional spouted red Karwa with coin tassels', category: 'Traditional Karwa' },
  { src: '/images/products/p2/1.jpg', alt: 'Bright yellow designer Karwa with bold fan motifs', category: 'Designer Latkan' },
  { src: '/images/products/p15/1.jpg', alt: 'Swastik Karwa with twin golden sequin borders', category: 'Swastik Karwa' },
  { src: '/images/products/p8/1.jpg', alt: 'Lidded pink Karwa with spiral bel-buti hand-painting', category: 'Designer Latkan' },
  { src: '/images/products/p10/1.jpg', alt: 'Red traditional Karwa with a mirror-work band', category: 'Traditional Karwa' },
  { src: '/images/products/p9/1.jpg', alt: 'Pink designer Karwa with a golden sunburst motif', category: 'Designer Latkan' },
  { src: '/images/products/p3/1.jpg', alt: 'Pink Karwa with peacock-green fan artwork', category: 'Designer Latkan' },
  { src: '/images/products/p4/1.jpg', alt: 'Lidded yellow Karwa with red leaf detailing', category: 'Designer Latkan' },
  { src: '/images/products/p6/1.jpg', alt: 'Lidded pink Karwa with fan and shell motifs', category: 'Designer Latkan' },
];
