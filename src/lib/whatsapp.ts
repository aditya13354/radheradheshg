import { siteConfig } from './site';

/** Pre-written WhatsApp message templates for one-tap enquiries. */
export const waMessages = {
  general:
    'Hello, I visited your website and would like to know more about your handmade clay products.',
  catalogue: 'Hello, please share your latest catalogue.',
  wholesale: 'Hello, I want to place a wholesale order.',
  bulk: 'Hello, I would like to place a bulk order. Please share the details.',
  customize:
    'Hello, can you customize products for my business? I would like to discuss a custom design.',
  festival:
    'Hello, please share your latest festival collection and availability.',
  pricing: 'Hello, please share pricing details for your products.',
  dealer:
    'Hello, I am interested in becoming a dealer / retail partner. Please share more details.',
  team: 'Hello, I would like to talk to your team about an enquiry.',
  product: (name: string) =>
    `Hello, I am interested in your "${name}". Please share the price and availability.`,
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telLink(): string {
  return `tel:+91${siteConfig.phones[0]}`;
}

export function mailLink(subject = 'Enquiry from radheradheshg.com'): string {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`;
}
