# Hi Developers – Software House website (React + Vite)

Rebuilt from the supplied Figma file (single 1440px desktop frame).

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure
- `src/components/` – one component per Figma section (Header, Hero, Services, About, Clients, Testimonials, CaseStudies, WayOfBuilding, Approach, TechStack, HowItWorks, Resources, CtaBanner, Footer)
- `src/styles/` – `variables.css` (Figma tokens), `global.css`, `header.css`, `hero.css`, `sections.css`, `footer.css`, `responsive.css`
- `public/assets/` – images exported from the .fig file (WebP), logos/icons exported as SVG, Inter + Poppins font files

## Notes
- Copy follows Figma; two typos ("cutomers", "Raed more") were corrected.
- The brand wordmark uses the "Inspiration" font from Figma, which was not available; it falls back to a cursive system font. Add the font file to `public/assets/fonts` and an `@font-face` in `variables.css` to match exactly.
- The Figma file has no tablet/mobile frames, so those layouts are adaptations.
- The tech-stack tabs each show their own logo set; all but Backend load from the Devicon CDN.
- Pages: a tiny router in `App.jsx` (no extra dependency) with clean URLs: `/about`, `/case-studies`, `/case-studies/<slug>`, `/blog`, `/blog/<slug>`, `/services/<slug>`, `/how-it-works`, `/hire`. Links can be written as plain paths (`/about`) or section anchors (`#contact`); the router handles both without putting `#...` in the address bar. Old `/#/about` style links are converted automatically. **When you deploy, configure the host to serve `index.html` for every path** (Netlify: a `_redirects` file with `/* /index.html 200`; Vercel: a rewrite to `/index.html`; nginx: `try_files $uri /index.html`), otherwise opening or refreshing a page like `/about` shows a 404. The About page's figures and milestones are placeholder copy.
- Services dropdown: the header's Services item opens a menu (hover/focus on desktop, arrow button and accordion on mobile). Each entry opens `#/services/<slug>` (`src/pages/ServicePage.jsx`, `src/styles/services.css`). Add or edit services, and their sample copy, in `src/data/services.js`; the dropdown and pages update automatically.
- Home About video: add `public/assets/about-video.mp4` (a free Mixkit clip is used as a fallback).
