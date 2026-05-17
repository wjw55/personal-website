# Wang Jiawei Portfolio

A polished, static-first portfolio for Wang Jiawei, a NUS Computer Engineering student focused on embedded systems, robotics, AI, workflow automation, FPGA systems, and product-minded engineering. Core profile, project, education, skill, and experience content lives in a simple local content file so it can be edited without changing page structure.

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

If PowerShell blocks `npm` scripts on Windows, use `npm.cmd` instead:

```bash
npm.cmd run dev
```

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

- Name, headline, value proposition, about copy, email, and social links
- Education entries
- Navigation labels
- Skills and tools
- Project cards, case-study previews, proof links, and visual placeholder TODOs
- Experience timeline entries
- Resume link path: currently `/resume/Wang_Jiawei_Resume.pdf`

To update project links, edit each project's `links` array in `content/site.ts`. Add public GitHub, live app, or case-study URLs only when they are ready to share. If a project has no public URL, keep `linkNote` honest, such as `Private code / case-study preview`.

To make the visible Resume links work, add the PDF at `public/resume/Wang_Jiawei_Resume.pdf`, or update `profile.resumeHref` in `content/site.ts` to the final public path.

Visual and layout files:

- `app/page.tsx` contains the page sections.
- `app/globals.css` contains global theme tokens and base styles.
- `components/` contains small reusable presentation components.
- `public/portfolio-signal.png` is the abstract hero and social preview image.
- `public/favicon.svg` is the site icon.

## Privacy

Do not commit private phone numbers, home addresses, dates of birth, government IDs, passwords, API keys, private employment details, unpublished confidential workflow details, or other sensitive personal information.

## Deployment

This project is ready for Vercel:

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project in Vercel.
3. Use the default Next.js build settings.
4. Replace `metadataBase` in `app/layout.tsx` with the production URL before launch.
5. Run `npm run build` locally before deployment.

## Content Roadmap

Good next steps:

- Add the resume PDF at `public/resume/Wang_Jiawei_Resume.pdf`.
- Replace the OPTIMEAL dashboard preview with a final exported screenshot if the app UI changes again.
- Add true project or experience numbers later where TODO comments mark safe places for metrics.
- Add live demo links where projects are safely publishable.
- Replace `metadataBase` with the production URL after deployment.
- Review contrast, keyboard navigation, and mobile spacing after real content is added.
