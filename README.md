# juanseperea.dev

Personal portfolio. Next.js (static export) + Tailwind v4 + MDX, deployed on Vercel.

## Commands

```bash
npm run dev        # local dev server
npm run build      # static export to out/
npm run typecheck
```

## Where things live

| What | Where |
| --- | --- |
| Name, contact, availability, stack, experience | `lib/site.ts` |
| Colors, typography, carousel animation | `app/globals.css` |
| Page sections | `components/` |

## Before shipping

- [ ] Set the real GitHub URL in `lib/site.ts`
- [ ] Add an OG image (`app/opengraph-image.png`, 1200x630)
- [ ] Buy `juanseperea.dev` and point it at Vercel
- [ ] Run Lighthouse; check mobile and dark mode

## Deploy

Push to GitHub, import the repo in Vercel. Framework preset: Next.js. No env
vars needed. `output: "export"` means it ships as static files.
