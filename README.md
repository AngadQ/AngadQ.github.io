# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

---

## Angad Kochhar — academic portfolio

A small Astro website inspired by the structure of al-folio. The site is static, works with GitHub Pages, and keeps its editable content in [`src/data/portfolio.ts`](src/data/portfolio.ts).

## Run locally

```sh
npm install
npx astro dev --background
```

Use these commands to manage the background server:

```sh
npx astro dev status
npx astro dev logs
npx astro dev stop
```

Run `npm run build` before publishing. Pushing to `master` triggers the existing GitHub Pages workflow.

## Edit your profile

Open `src/data/portfolio.ts`. The `profile` object contains your About text, photo, contact links, resume, and CV paths. The `news` array controls the short updates on the homepage.

## Show or hide pages

Every main page is listed in `sections`:

```ts
{ slug: 'activities', label: 'Activities', visible: true },
```

Set `visible` to `false` and rebuild the site. The navigation link and generated page will both be removed.

## Add research and projects

Research entries are stored in `research`; project entries are stored in `projects`. Each item has three useful switches:

```ts
visible: true,     // Show this item in the website.
featured: true,    // Also show it on the homepage.
detailPage: true,  // Generate a dedicated page and a “Read more” link.
```

When `detailPage` is `false`, the item stays on the listing page without linking to an individual page.

Each item must have a unique URL-friendly `slug`, such as `spot-connect-four`. Longer detail pages can use:

```ts
details: [
  'First paragraph about the work.',
  'Second paragraph about results and lessons.',
],
highlights: [
  'A result or contribution',
  'Another result or contribution',
],
```

## Add photos

Put images in `public/media/`. Add a left-side listing image with:

```ts
thumbnail: {
  src: '/media/spot-connect-four.jpg',
  alt: 'Boston Dynamics Spot playing Connect-4',
},
```

Add one or more images to a dedicated page with:

```ts
images: [
  {
    src: '/media/spot-connect-four-board.jpg',
    alt: 'Spot positioned in front of the Connect-4 board',
    caption: 'System demonstration at Purdue University.',
  },
],
```

Without a thumbnail, the listing uses a simple visual placeholder.

## Add links and video

Links appear below the project or research summary:

```ts
links: [
  { label: 'Code', href: 'https://github.com/example/repository' },
  { label: 'Paper', href: '/documents/example-paper.pdf' },
],
```

A dedicated page can show either a local video or an embedded video:

```ts
videoFile: '/media/project-demo.mp4',
```

or:

```ts
videoEmbedUrl: 'https://www.youtube.com/embed/VIDEO_ID',
```

Use a YouTube embed URL rather than its normal watch-page URL. Hosting large videos outside the repository keeps GitHub Pages deployments small.

## Resume and CV

The current files are:

- `public/documents/Angad_Kochhar_Resume.pdf`
- `public/documents/Angad_Kochhar_CV.pdf`

Replace these files when the documents change, keeping the same names. Their download buttons appear at the bottom of the homepage.

## Light and dark themes

The theme button follows the visitor's system preference initially and saves their manual choice in browser storage.
