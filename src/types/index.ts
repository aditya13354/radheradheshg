export interface Product {
  slug: string;
  name: string;
  nameHindi?: string;
  category: string;
  tagline: string;
  description: string;
  /** Primary/cover image. */
  image: string;
  /** Full photo gallery for the product (includes the cover image first). */
  images: string[];
  badges: string[];
  features: string[];
  uses: string[];
  colors: string[];
  customizable: boolean;
}

export interface Collection {
  slug: string;
  name: string;
  nameHindi?: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  category: GalleryCategory;
  featured?: boolean;
}

export type GalleryCategory =
  | 'Traditional Karwa'
  | 'Premium Painted'
  | 'Swastik Karwa'
  | 'Designer Latkan'
  | 'Decorative';

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ImpactStat {
  value: number;
  suffix: string;
  label: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}
