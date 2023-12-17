<p align="center">
  <img src="./src/assets/svg/logo.inline.png" alt="Doomsday Trainer Icon">
</p>

# Doomsday Trainer

This is a web app that helps you practice the [Doomsday algorithm](https://en.wikipedia.org/wiki/Doomsday_rule) by John Conway, a method for calculating the day of the week of any given date. The app shows you a random date and lets you guess what weekday it was. You can check your answer and how long you took.

The app is built with [Gatsby](https://www.gatsbyjs.com/), a React-based framework that generates fast and secure websites. You can use the app in your web browser, or install it as a PWA (progressive web app) on your device.

Project based on the [Gatsby Typescript Starter](https://github.com/jpedroschmitz/gatsby-starter-ts).

## Features

- ⚡️ Gatsby 5
- ⚛️ React 18
- ⛑ TypeScript
- 🐐 Tests — Vitest and Testing Library out of the box
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 🚓 Commitlint — To make sure your commit messages follow the convention
- 🖌 Renovate — To keep your dependencies up to date
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files
- 👷 PR Workflow — Run Type Check & Linters on Pull Requests
- ⚙️ EditorConfig - Consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `@` prefix

## Quick Start

The best way to start with this template is using the [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/).

```
npx gatsby new starter-ts https://github.com/jpedroschmitz/gatsby-starter-ts
```

### Development

To start the project locally, run:

```bash
pnpm start
```

Open `http://localhost:8000` with your browser to see the result.

## Documentation

### Requirements

- Node.js >= 18
- pnpm 7

### Directory Structure

- [`__helpers__`](./__helpers__/) — Helpers files for testing configuration.<br>
- [`__mocks__`](./__mocks__/) — Mocks for testing.<br>
- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `pnpm start` — Starts the application in development mode at `http://localhost:8000`.
- `pnpm build` — Compile your application and make it ready for deployment.
- `pnpm serve` — Serve the production build of your site
- `pnpm clean` — Wipe out the cache (`.cache` folder).
- `pnpm type-check` — Validate code using TypeScript compiler.
- `pnpm lint` — Runs ESLint for all files in the `src` directory.
- `pnpm format` — Runs Prettier for all files in the `src` directory.
- `pnpm test` — Run tests with Vitest.
- `pnpm test:watch` — Run tests on watch mode.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/Button';

// To import images or other files from the static folder
import avatar from '@/static/avatar.png';
```

### Switch to Yarn/npm

This starter uses pnpm by default, but this choice is yours. If you'd like to switch to Yarn/npm, delete the `pnpm-lock.yaml` file, install the dependencies with Yarn/npm, change the CI workflow, Husky Git hooks to use Yarn/npm commands, and uninstall the `gatsby-plugin-pnpm` plugin (you also need to remove it from the `gatsby-config` file).

## License

This project is licensed under the BSD Zero Clause License - see the [LICENSE](LICENSE) file for more information.
