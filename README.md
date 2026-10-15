# PRODZ.dev

Personal developer website built with Next.js, React, Tailwind CSS, and an embedded Sanity Studio.

Live site: [www.prodz.dev](https://www.prodz.dev)

## Local development

Use Node.js 24 LTS and npm. With nvm installed:

```bash
nvm install
nvm use
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000) for the website or [localhost:3000/studio](http://localhost:3000/studio) for Sanity Studio. Studio requires an authorized Sanity account, and the local origin must be allowed in the Sanity project's CORS settings.

Configure these variables in `.env.local` (or in your hosting environment):

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-08-01
```

The API version is a fixed Sanity API date, independent of the installed Studio version. Keep the project's existing date unless intentionally migrating API behavior. These public configuration values are included in the browser bundle; do not put API tokens in `NEXT_PUBLIC_` variables.

The homepage and metadata read published Sanity content. Builds need network access to the configured dataset and a populated profile document.

## Validation

```bash
npm run check
```

This runs ESLint, generates Next.js route types, checks TypeScript, and builds the production site. Next.js 16 does not run ESLint as part of `next build`, so keep the separate lint step in deployment checks.

To preview the production build:

```bash
npm start
```

Use Node.js 24 in the hosting provider's build and runtime settings as well. Commit `package-lock.json` with dependency changes and use `npm ci` for reproducible installs.

## Tooling compatibility

Type checking uses TypeScript 7 (`@typescript/native`, which provides `tsc`). The `typescript` dependency aliases Microsoft's TypeScript 6 compatibility package because typescript-eslint still needs its JavaScript compiler API. See [Microsoft's side-by-side setup](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0).

ESLint stays on the latest 9.x release until the React, import, and accessibility plugins used by `eslint-config-next` support ESLint 10. Node type definitions stay on 24.x to match the runtime.

## Dependency audit (October 12, 2026)

After updating direct and transitive dependencies, `npm audit` reports 21 findings (11 high, 10 moderate), with no critical findings. The remaining advisory sources are `braces`, `js-yaml`, `smol-toml`, `sprintf-js`, and `uuid`, pulled in through Sanity tooling and Next.js lint tooling. Some upstream packages pin affected versions. Recheck with `npm audit` when those packages release updates; `npm audit fix --force` currently proposes major downgrades and is not a safe upgrade path.

## Editorial homepage content

The refreshed homepage is one page: hero, one featured project, up to six selected
projects, toolkit, and contact. Open `/studio` and edit **Profile**:

- **Hero title — first line / blue line** and **Hero introduction** control the hero.
  The introduction falls back to Short Bio, then Bio. Location appears under the photo.
- **Featured project** chooses the large project. **Selected projects** holds up to
  six references; drag them to set the grid order. The featured project cannot also
  be selected. Hidden/deleted references and duplicates are omitted by the site.
- **Toolkit heading / introduction / rows** control the category rows. Each row has
  a category and a list of technology labels. Legacy skill documents remain available.
- **Contact heading** supports line breaks. Email and social links use the existing fields.

For each **Project**, add a short summary, display tags, your role, optional live/source
URLs, and the full description. The featured summary falls back to Description; tags
fall back to the existing Web/Mobile type. Clicking a screenshot or project title opens
its details and full screenshot in a keyboard-accessible dialog. Turning **Visible**
off hides a project from both featured and selected work.

No content migration is required. Until curation is saved, the site uses ToneHunt
(or the first visible project) as featured and prioritizes GoyaPR, Guilty v3, Arco
Financiero, Escuela Optometria PR, PR Wheels, and Fuel It (web) in the grid, filling
any gaps from the existing visible projects. An explicitly saved empty selection
shows no grid. The toolkit uses the approved four default rows until configured.
These defaults live in `utils/portfolio.ts` and `components/Skills.tsx`.

Schema changes do not write to the hosted dataset. Publish edits in Studio to replace
the defaults. The homepage revalidates every 60 seconds (Sanity CDN propagation may
add delay). Run `npm run check` for lint, selection/link tests, types, and production build.

### Testing on a phone over the local network

Open `http://192.168.0.37:3000` while the phone and development machine are on the
same network. `next.config.ts` explicitly permits that LAN hostname and `127.0.0.1`
in `allowedDevOrigins`. Next.js otherwise blocks dev resources for those origins,
which can leave server-rendered pages visible but their interactive controls inactive.
If the machine's LAN IP changes, update that entry and restart `npm run dev`.

### Styling conventions

Use Tailwind utilities for component layout, typography, responsive behavior, and
interaction states. Shared colors, font aliases, and the existing 521px/721px
breakpoints live in `app/globals.css` as Tailwind theme values. Keep custom CSS for
shared base behavior or cases utilities cannot express clearly; the `portfolio-site`
selector scopes interaction defaults away from Sanity Studio.
