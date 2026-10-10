# mengutay-com

Marketing site for **Aroro**, an omnichannel, hardware-aware AI personal assistant by Mengutay Lab (Switzerland).

## Stack

- Next.js (App Router) + React + TypeScript
- Plain modern CSS (`app/globals.css`), no CSS framework
- [lucide-react](https://lucide.dev) icons

Requires Node 20.9 or newer.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Structure

```
app/
  layout.tsx            # metadata (title, description), font
  page.tsx              # header, hero, bento grid, footer
  globals.css           # all styles and design tokens (:root)
  components/
    BetaForm.tsx        # "Request Access" email form (client component)
    ModelToggle.tsx     # BYOK model selector mock (client component)
```

## Notes

- The email form only prevents the default submit and shows a confirmation; it is not connected to a backend yet (see the TODO in `BetaForm.tsx`).
- The footer LinkedIn link in `app/page.tsx` is still the placeholder `https://linkedin.com/in/YOUR_LINKEDIN_ID`.
- Colors and spacing are CSS variables at the top of `app/globals.css`.
