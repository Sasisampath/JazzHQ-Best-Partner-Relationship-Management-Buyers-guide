# JazzHQ PRM buyer’s guide

Standalone Next.js editorial draft. The approved Euler Alternatives branch supplied the JazzHQ design and selected assets; no Alternatives routes are included here.

## Local preview

Use Node.js 20.9 or later.

```sh
npm ci
npm run dev
```

Open [the buyer’s guide](http://localhost:3000/buyers-guide/best-prm-software). The page is intentionally unlisted and has `noindex` enabled. Set `NEXT_PUBLIC_SITE_URL` at build time to change the canonical origin for an approved hosting environment. Nothing in this repo publishes or deploys the guide.

```sh
npm run lint
npm run typecheck
npm run build
```

The article lives in `src/app/buyers-guide/best-prm-software`; product and editorial copy live in `src/data/guide.ts` and `src/data/evaluation.ts`. See [the editorial review](BEST_PRM_SOFTWARE_EDITORIAL_REVIEW.md) for source status and the product image map.
