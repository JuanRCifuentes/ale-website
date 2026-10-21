# masanchez.com

Personal site of Alejandra Sánchez, built with [Astro](https://docs.astro.build) and deployed as static assets on Cloudflare Workers.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `bun install`     | Install dependencies                         |
| `bun run dev`     | Start the dev server at `localhost:4321`     |
| `bun run build`   | Build the site to `./dist/`                  |
| `bun run preview` | Preview the build locally                    |

## Where things live

- `src/pages/`: one file per route; work pages come from `src/content/work/`.
- `src/assets/`: photos, optimized at build time by `<Image>`.
- `public/`: files served as-is (favicons, backgrounds, `robots.txt`, `_headers`).
- Fonts are self-hosted from the `@fontsource` packages (see `astro.config.mjs`).
