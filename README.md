# Personal Website

A polished, static-first personal website built with Next.js App Router, TypeScript, and Tailwind CSS. The current content is intentionally placeholder-based so it can be replaced safely without inventing personal details.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static local content in `content/site.ts`
- Theme-aware styles using the visitor's system color scheme

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
npm run format
npm run format:check
```

## Customization

Most public content lives in `content/site.ts`:

- Name, headline, intro, bio, email, and social links
- Navigation labels
- Skills and tools
- Project cards
- Experience timeline entries
- Writing or note cards

The placeholder values are clearly marked. Replace them with real public information when you are ready. Do not add private phone numbers, home addresses, government IDs, passwords, API keys, or sensitive employment details.

Visual and layout files:

- `app/page.tsx` contains the page sections.
- `app/globals.css` contains global theme tokens and base styles.
- `components/` contains small reusable presentation components.
- `public/portfolio-signal.png` is the abstract hero and social preview image.

## Deployment

This project is ready for Vercel:

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project in Vercel.
3. Use the default Next.js build settings.
4. Replace `metadataBase` in `app/layout.tsx` with the production URL before launch.

## Content Roadmap

Good next steps after replacing placeholders:

- Add real project case studies with outcomes and screenshots.
- Replace placeholder note cards with MDX-backed writing.
- Add a real Open Graph image once the site identity is final.
- Review contrast, keyboard navigation, and mobile spacing after real content is added.
