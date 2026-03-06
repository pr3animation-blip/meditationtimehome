This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## OpenAI Image Generation Setup

This repo includes a local asset-generation script so you can create website images with your own OpenAI API key without exposing that key in the client bundle or turning the public site into a billable image-generation endpoint.

1. Copy `.env.example` to `.env.local`.
2. Put your real OpenAI key in `OPENAI_API_KEY`.
3. Optionally change `OPENAI_IMAGE_MODEL` if you want something other than `gpt-image-1.5`.
4. Generate an asset:

```bash
bun run image:generate -- \
  --prompt "Serene Reiki studio with warm desert light, natural textures, editorial photography" \
  --out public/images/generated/reiki-hero.webp
```

Useful optional flags:

```bash
--size 1536x1024
--quality high
--background auto
--format webp
--model gpt-image-1.5
```

The script creates missing folders automatically and writes the generated file directly into the project so it can be referenced like any other static asset.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
