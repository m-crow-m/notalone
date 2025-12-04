<!-- Short, focused instructions for AI coding agents working on the `notalone` repo -->
# Copilot / AI Agent Instructions — notalone

This project is a small React + Vite presentation site (slides + video assets). Below are concise, actionable rules and references so an AI agent can be productive immediately.

1. Project overview:
   - Tech: Vite (plugin: `@vitejs/plugin-react-swc`), React (TSX), plain Tailwind-compiled CSS in `src/index.css`.
   - Entry points: `src/main.tsx` and `src/App.tsx` (App orchestrates slide navigation).
   - Slides: `src/components/Slide1.tsx` ... `Slide8.tsx` — each slide is presentational. To add a slide, create `SlideX.tsx` and add to the `slides` array in `src/App.tsx`.

2. Build & run (use exact commands):
   - Install: `npm install` (or `pnpm install` / `yarn` depending on maintainer preference).
   - Dev server: `npm run dev` — Vite serves on port `3000` (see `vite.config.ts`).
   - Build: `npm run build` — outputs to `build` (Vite `outDir`).

3. Important config and conventions:
   - Aliases: `@` -> `./src` is configured in `vite.config.ts`. Use `@/...` for cross-file imports when helpful.
   - UI primitives: `src/components/ui/` contains project-specific wrappers for Radix and UI building blocks (e.g., `button.tsx`, `input.tsx`). Prefer these wrappers to importing raw Radix components directly.
   - Animation library: animations use `motion/react` (imported as `motion`) and `motion` package APIs — follow the variant/transition patterns in `src/App.tsx`.
   - Image pattern: `src/components/figma/ImageWithFallback.tsx` demonstrates the project's pattern for remote images with fallback — reuse that component for reliability.
   - Styling: utility-class-first (Tailwind-like) approach; main stylesheet is `src/index.css`. Avoid adding a new global CSS file unless necessary.

4. Testing & CI:
   - No test scripts observed in `package.json`. CI contains a GitHub Pages workflow at `.github/workflows/deploy.yml` which uploads the repository and deploys pages on pushes to `main`.
   - When making build changes, ensure `npm run build` produces the static files consumed by the Pages workflow (default `build` folder). If changing the output path, update the workflow accordingly.

5. Patterns to follow (examples from code):
   - Slide registration: the `slides` array in `src/App.tsx` drives navigation (id, label, component). Keep ids sequential and zero-based.
   - Keyboard navigation: App listens to `keydown` for Arrow keys — preserve that behavior when refactoring navigation.
   - Navigation controls: left/right arrows and the right-side nav map to the slides array; avoid duplicating navigation logic.

6. When editing code:
   - Keep changes minimal and localized. Prefer adding files under `src/components` and `src/components/ui`.
   - Follow existing style (no new lint or formatting config added). Don't change package versions unless requested.
   - For dependency changes, update `package.json` and state rationale in the PR description.

7. Files & places to inspect when diagnosing issues:
   - `vite.config.ts` — aliases, dev server port, build outDir.
   - `package.json` — scripts.
   - `src/App.tsx` — slide orchestration and animation patterns.
   - `src/components/` — slide content and UI primitives.
   - `.github/workflows/deploy.yml` — GitHub Pages deployment behavior.

8. Deliverables on PRs from AI edits:
   - Short description of intent and what was changed.
   - How to run locally to verify (`npm install && npm run dev`, or `npm run build` and confirm output).
   - If behavior changed (routing, output folder, animation timing), include before/after notes.

If anything here is unclear or you want more detail (for example a recommended dev script using `serve` for previewing `build/`), tell me what to expand and I will iterate.
