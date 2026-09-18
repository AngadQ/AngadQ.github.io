# Angad Kochhar — academic portfolio

A small Astro site for GitHub Pages. The site is static and keeps its editable content in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).

## Run locally

```sh
npm install
npx astro dev --background
```

Use `npx astro dev status`, `npx astro dev logs`, and `npx astro dev stop` to manage the background server. Run `npm run build` before publishing. Pushing to `master` triggers the existing GitHub Pages workflow.

## Edit the portfolio

Open `src/data/portfolio.ts`:

- Update `profile` with your short bio, email, links, and document paths.
- Set a section's `visible` value to `false` to remove its link and page from the next build. Set it to `true` to publish it again.
- Edit the existing items in `education`, `experience`, `research`, `projects`, and `activities`, or add more. Entries display in the order you write them.

For example:

```ts
export const education = [
  {
    degree: 'M.S. in Your Field',
    institution: 'Your University',
    dates: '2025–2027',
    details: ['Relevant coursework or thesis topic'],
  },
];
```

The example above is documentation only. The content file is already populated from `Portfolio_content/`; review and adjust any wording before publishing. An empty section displays a short “coming soon” message.

## Add photos, video, and PDFs

Put files inside `public/`, then use paths beginning with `/` in `src/data/portfolio.ts`.

| File | Example content value |
| --- | --- |
| `public/media/portrait.jpg` | `portrait: '/media/portrait.jpg'` |
| `public/documents/resume.pdf` | `resume: '/documents/resume.pdf'` |
| `public/documents/cv.pdf` | `cv: '/documents/cv.pdf'` |

Projects and activities can include photos:

```ts
images: [{ src: '/media/project-photo.jpg', alt: 'A descriptive caption' }],
```

Projects can include a local video with `videoFile: '/media/demo.mp4'` or an embedded video with `videoEmbedUrl: 'https://www.youtube.com/embed/VIDEO_ID'`. Use an embed URL, not a normal watch-page URL. Keep large videos on a video host to avoid making the GitHub repository unnecessarily large.

The supplied resume and CV are already copied into `public/documents/` and linked on the home page. The portrait still needs to be added; until then, the site shows a monogram placeholder. Update the PDFs in `public/documents/` whenever your documents change.

## Color theme

The theme button switches between light and dark mode and saves the visitor's choice in their browser. Until a visitor picks a theme, the site follows their system setting.
