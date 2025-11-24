# React + Vite + TypeScript Template

A clean, minimal, opinionated starter for React projects.

- ⚡ **Vite** — fast dev server & build
- ⚛️ **React + TypeScript** (strict mode)
- 💅 **styled-components** + ThemeProvider
- 🧭 **React Router**
- 🧹 **ESLint (flat config)** + Prettier + EditorConfig
- 📁 **Clear folder structure + absolute imports (`@/`)**
- 🚀 Ready for real projects, PWAs, dashboards, landing pages, apps

This repository is designed to be used as a **template**.

---

## 🚀 Tech Stack

- **Build:** Vite
- **Language:** TypeScript
- **Framework:** React 18
- **Styling:** styled-components
- **Theming:** ThemeProvider (light/dark structure prepared)
- **Routing:** React Router
- **Linting:** ESLint (flat config)
- **Formatting:** Prettier, EditorConfig
- **Testing:** Vitest + Testing Library (optional, preconfigured)

---

## 📦 Getting Started

### 1. Create a project from this template

#### **Via GitHub**

1. Click **“Use this template”**
2. Select **“Create a new repository”**
3. Clone it

#### **Via CLI**

```bash
npx degit <your-github-username>/neutral-react-template my-new-project
cd my-new-project
npm install
```

---

## 🧑‍💻 Development

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🔧 Available Scripts

```jsonc
"scripts": {
  "dev": "vite",
  "build": "tsc --noEmit && vite build",
  "preview": "vite preview",

  "lint": "eslint src --ext ts,tsx --max-warnings=0",
  "lint:fix": "eslint src --ext ts,tsx --fix",
  "type-check": "tsc --noEmit",
  "format": "prettier \"src/**/*.{ts,tsx,js,jsx,json,css,md}\" --write"
}
```

- `dev` — start development server
- `build` — type-check + build
- `preview` — preview built app
- `lint` — run ESLint
- `lint:fix` — run ESLint with autofix
- `type-check` — TypeScript only
- `format` — code formatting with Prettier

---

## 📁 Project Structure

> **Naming conventions**
>
> - Components → `PascalCase.tsx`
> - Styled components → `PascalCase.styled.tsx`
> - Hooks → `usePascalCase.ts`
> - Component folders → `PascalCase`
> - Technical folders → `camelCase`

```text
node_modules/             # dependencies
public/
  favicon.svg             # static assets

src/
  api/                    # API clients, axios/fetch, services

  assets/
    images/               # logos, mockups, static graphics
    icons/                # raw SVG files

  components/
    icons/                # SVG React components
    layout/
      Container/
        Container.styled.ts
        index.tsx
      Footer/
        Footer.styled.ts
        index.tsx
      Navigation/
        Navigation.styled.ts
        index.tsx
    ui/                   # Button, Input, Card, Badge, etc.

  sections/               # big reusable page sections

  data/
    example.ts            # static data

  pages/                  # React Router pages
    ErrorPage/
      ErrorPage.styled.tsx
      index.tsx
    Home/
      Home.styled.ts
      index.tsx

  styles/
    GlobalStyles.ts       # global styles
    reset.css             # CSS reset
    styled.d.ts           # styled-components theme typing
    theme/
      index.ts
      light.ts
      dark.ts

  hooks/
    useCustomHook.ts      # shared hooks

  utils/
    example.ts            # helpers, formatters

  App.tsx                 # root app: Router, Theme, Layout
  main.tsx                # ReactDOM entry point

.editorconfig             # editor configuration
eslint.config.js          # ESLint flat config
.gitignore                # git ignored files
.prettierignore           # prettier ignored files
.prettierrc               # prettier config
index.html                # Vite root HTML
package.json              # scripts + dependencies
tsconfig.json             # TypeScript config + path aliases
vite.config.ts            # Vite config + aliases + tests
```

---

## 🎨 Styling & Theming

This template uses **styled-components** with a typed theme.

- Global reset → `src/styles/reset.css`
- Global styles → `src/styles/GlobalStyles.ts`
- Theme typing → `src/styles/styled.d.ts`

Themes live in:

- `src/styles/theme/light.ts`
- `src/styles/theme/dark.ts`
- `src/styles/theme/index.ts`

---

## 🧭 Routing

Routing is handled by **React Router**.

Pages live in:

```
src/pages/
```

Default included pages:

- `Home/`

You can add new pages by creating a folder in `src/pages` and registering it in `App.tsx`.

---

## 🧱 Extending the Template

After creating a project from this template, recommended steps:

1. Update project name in `package.json`
2. Customize themes (light/dark)
3. Remove example components
4. Add your own sections in `src/sections`
5. Implement API logic inside `src/api`
6. Update README with project-specific info

---

## 📜 Template Changelog

```
2025-11-24 — Initial version with routing, theming, folder structure, ESLint, Prettier.
```

---

## ✔️ License

Free to use in personal and commercial projects.
