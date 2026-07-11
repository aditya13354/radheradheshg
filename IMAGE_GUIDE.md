# 📸 Image Placement Guide

All images live in `public/images/`. The site uses a graceful fallback, so it
looks complete even before you add photos — but for launch, drop your real
photographs at the exact paths below. Use **WebP or JPG**, optimized for web.

> Tip: Keep product/hero images around 1200–1600px wide. The site auto-serves
> AVIF/WebP via `next/image`.

## Root

| File | Used For | Recommended Size |
| --- | --- | --- |
| `public/images/og.jpg` | Social share preview (Open Graph / Twitter) | 1200 × 630 |
| `public/images/qr-whatsapp.png` | QR code that opens your WhatsApp | 500 × 500 |
| `public/favicon.svg` | Browser tab icon (already provided) | — |

## Hero (`public/images/hero/`)

| File | Used For |
| --- | --- |
| `hero-karwa.jpg` | Main hero image — your best premium Karwa shot (portrait 4:5) |

## Products (`public/images/products/`)

| File | Product |
| --- | --- |
| `traditional-karwa.jpg` | Traditional Karwa |
| `designer-karwa.jpg` | Designer Latkan Karwa |
| `om-karwa.jpg` | Om Karwa |
| `swastik-karwa.jpg` | Swastik Karwa |
| `premium-karwa.jpg` | Premium Painted Karwa |
| `wedding-karwa.jpg` | Wedding Return Gift Karwa |
| `clay-pots.jpg` | Decorative Clay Pots |
| `navgrah-samrani.jpg` | Navgrah Samrani Cup |

## Collections (`public/images/collections/`)

`traditional-karwa.jpg`, `designer-karwa.jpg`, `om-karwa.jpg`,
`swastik-karwa.jpg`, `premium-karwa.jpg`, `wedding-karwa.jpg`,
`festival-decor.jpg`, `clay-pots.jpg`, `navgrah-samrani.jpg`,
`customized.jpg`, `seasonal.jpg`, `corporate.jpg`

## Gallery (`public/images/gallery/`)

Products: `product-1.jpg` … `product-6.jpg`
Women Artisans: `artisan-1.jpg`, `artisan-2.jpg`
Workshop: `workshop-1.jpg`
Manufacturing: `manufacturing-1.jpg`
Events: `event-1.jpg`
Exhibitions: `exhibition-1.jpg`

## Suggested mapping from your provided photos

- **Close-up Om Karwa (stacked, yellow Om)** → `hero/hero-karwa.jpg`, `products/om-karwa.jpg`, `gallery/product-1.jpg`
- **Red designer Karwa with yellow leaf design (table)** → `products/designer-karwa.jpg`, `collections/designer-karwa.jpg`, `gallery/product-2.jpg`
- **Red Karwa with bell design (table)** → `products/premium-karwa.jpg`, `gallery/product-5.jpg`
- **Swastik + floral stacked Karwas** → `products/swastik-karwa.jpg`, `collections/swastik-karwa.jpg`, `gallery/product-3.jpg`
- **Navgrah Samrani banner/cup** → `products/navgrah-samrani.jpg`, `collections/navgrah-samrani.jpg`, `gallery/product-6.jpg`
- **Exhibition stall photos (people at stall)** → `gallery/event-1.jpg`, `gallery/exhibition-1.jpg`, `about` page
- **Any artisan-at-work photos** → `gallery/artisan-1.jpg`, `gallery/artisan-2.jpg`, `gallery/workshop-1.jpg`
- **Unpainted pink pots drying** → `gallery/manufacturing-1.jpg`
- **Premium marketing flyer product shot** → `collections/premium-karwa.jpg`, `collections/corporate.jpg`

After adding images, run `npm run dev` and refresh — they appear automatically.
