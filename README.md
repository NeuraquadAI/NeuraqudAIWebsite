# Neuraquadai

A clean, minimal Next.js landing page for Neuraquadai — showcasing what the company is currently building for future clients.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
| ----- | ----------- |
| `/` | Home — hero, what we're building, about, contact |
| `/features` | Product capabilities |
| `/pricing` | Starter, Pro, Enterprise tiers |
| `/testimonials` | Client quotes |
| `/faq` | Expandable FAQ |
| `/about` | Mission, values, timeline |
| `/contact` | Contact form & inquiry options |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/login` | Sign-in form (UI only) |
| `/get-started` | Sign-up form (UI only) |

## Customize

- **Shared content**: Edit `src/lib/content.ts` for features, pricing, testimonials, and FAQs.
- **Homepage projects**: Edit the `projects` array in `src/app/page.tsx`.
- **Contact email**: Update `hello@neuraquadai.com` across pages.
- **Auth forms**: Wire up `src/components/AuthForm.tsx` to your auth provider (e.g. Clerk).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Run production server    |
