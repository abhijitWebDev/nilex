# Nilex Holidays — website

Next.js 16 (App Router) · Tailwind CSS v4 · shadcn/ui (Radix) · Motion animations.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Before going live

1. **Contact details**: edit `src/lib/site.ts`. Phone, WhatsApp number, email, address, hours, socials and domain are all placeholders marked `PLACEHOLDER`.
2. **Images**: all photos are high-resolution Unsplash images (free for commercial use under the Unsplash License, no attribution required), listed in `src/lib/images.ts` and optimised by `next/image` (AVIF/WebP, responsive sizes). Swap any photo by changing its id there. The old brochure crops in `public/images/` are no longer used and can be deleted.
3. **Enquiry form**: it has no backend. It opens WhatsApp with the details pre-filled. To send to email/CRM, replace `onSubmit` in `src/components/sections/enquiry.tsx` with a Server Action.

## Where things live

- `src/lib/destinations.ts`: all destination content (add or edit destinations here; pages generate automatically)
- `src/components/sections/*`: homepage sections
- `src/app/destinations/[slug]/page.tsx`: destination detail pages
- `src/components/ui/*`: shadcn/ui components
- `src/app/globals.css`: brand colours (blue primary, orange accent from the logo) and fonts
