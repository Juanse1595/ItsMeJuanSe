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
| Case studies | `content/work/*.mdx` |
| "How I work" copy | `content/how-i-work.mdx` |
| Colors, typography, prose styles | `app/globals.css` |
| Page sections | `components/` |

Adding a case study = drop a new `.mdx` file in `content/work/`. It appears on
the homepage and gets its own page automatically. Set `published: false` in the
frontmatter to keep a draft out of the build; `order` controls homepage sort.

## Before shipping

- [ ] Write the three case studies (search the repo for `TODO`)
- [ ] Rewrite `content/how-i-work.mdx` in your own voice
- [ ] Add `public/cv.pdf` — the Contact and Hero links point at it
- [ ] Set the real GitHub URL in `lib/site.ts`
- [ ] Add an OG image (`app/opengraph-image.png`, 1200x630)
- [ ] Buy `juanseperea.dev` and point it at Vercel
- [ ] Run Lighthouse; check mobile and dark mode

## Deploy

Push to GitHub, import the repo in Vercel. Framework preset: Next.js. No env
vars needed. `output: "export"` means it ships as static files.
