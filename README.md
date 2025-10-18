# abcqwq Next.js Starter

A minimal opinionated starter for Next.js (App Router) using TypeScript and styled-components. Use this repo as a base for new projects or as a template on GitHub.

Features

- Next.js (App Router)
- TypeScript
- styled-components with SSR registry
- Biome for linting/formatting (optional)

Quick start

Install dependencies and start the dev server:

```powershell
npm install
npm run dev
```

Open http://localhost:3000

What you'll find

- `src/app` - app router entry with `layout.tsx` and `page.tsx`
- `src/components` - example `Center` component
- `src/styled-components/registry.tsx` - server-side registry for styled-components
- `next.config.ts`, `tsconfig.json` - basic configuration

Recommended next steps

- Update `package.json` with your name, repository, and scripts you prefer
- Add ESLint/Prettier or Biome configs depending on your style choice
- Add example pages/components and tests
- Configure CI/CD and deploy settings (Vercel/GitHub Actions)

License
This project is licensed under the MIT License - see the `LICENSE` file for details.
