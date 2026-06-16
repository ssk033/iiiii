# PTS Quick Notes Viewer

A lightweight React web application for quickly accessing **Penetration Testing & Secure Systems Lab** exam notes during university lab sessions and CTF-style assessments.

The app presents a single **PTS** button. Clicking it loads and displays structured lab notes covering network reconnaissance, target identification, and exploit walkthroughs for OWASP Juice Shop, Shepherd, and NanoCorp.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Usage Guide](#usage-guide)
- [Notes Content (`pts.txt`)](#notes-content-ptstxt)
- [Customization](#customization)
- [Configuration Reference](#configuration-reference)
- [Legacy Assets](#legacy-assets)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Troubleshooting](#troubleshooting)

---

## Overview

This project was originally a multi-button student management code viewer. It has been simplified into a focused **exam reference tool** for the Penetration Testing & Secure Systems (PTS) lab course.

| Aspect | Description |
|--------|-------------|
| **Purpose** | Fast, offline-friendly access to lab exploit notes during exams |
| **Primary UI** | One button labeled `PTS` |
| **Data source** | Plain-text file at `public/pts.txt` |
| **Runtime** | Client-side only — no backend server required |
| **Target environment** | Isolated university lab network (e.g. `192.168.139.0/24`) |

---

## Features

- **Single-click access** — One `PTS` button loads all lab notes
- **Copy to clipboard** — Copy the entire notes document with one click (`C` button)
- **Dismissible panel** — Close the notes view with the `×` button
- **Loading state** — Button shows `Loading...` while fetching notes
- **Dark theme UI** — Optimized for readability in lab environments
- **Static content** — Notes live in a plain `.txt` file, easy to edit without code changes
- **Responsive layout** — Notes panel scales up to 1200px width with scroll support

---

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| UI Framework | React | 18.3.x |
| Language | TypeScript | 5.6.x |
| Build Tool | Vite | 6.x |
| Styling | CSS + Tailwind CSS | 3.4.x |
| Linting | ESLint + typescript-eslint | 9.x |
| Icons (unused component) | @tabler/icons-react | 3.x |
| Syntax highlighting (unused component) | react-syntax-highlighter | 16.x |

---

## Project Structure

```
iiiii/
├── public/
│   └── pts.txt                 # Lab notes content (served at /pts.txt)
├── src/
│   ├── App.tsx                 # Main application component
│   ├── App.css                 # Component-specific styles
│   ├── main.tsx                # React entry point
│   ├── index.css               # Global styles + Tailwind directives
│   ├── vite-env.d.ts           # Vite type declarations
│   ├── assets/
│   │   └── react.svg
│   └── components/
│       └── ui/
│           └── code-block.tsx  # Reusable syntax-highlighted code block (not used in App)
├── components/                 # Legacy standalone HTML/JS lab files
│   ├── q1.html … q12.html      # Individual question/demo pages
│   ├── q7.js, q8.js, q10.js
│   └── react/                  # Bundled React/Babel runtime for legacy pages
├── index.html                  # HTML shell
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript project references
├── tsconfig.app.json           # App TypeScript config
├── tsconfig.node.json          # Node/build tool TypeScript config
├── eslint.config.js            # ESLint flat config
└── package.json                # Dependencies and npm scripts
```

---

## Architecture

### Data Flow

```
User clicks "PTS"
       │
       ▼
App.tsx → fetch('/pts.txt')
       │
       ▼
Vite dev server / static host serves public/pts.txt
       │
       ▼
Response text stored in React state (notes)
       │
       ▼
Rendered inside <pre><code> block with copy/close controls
```

### Component Breakdown

#### `src/main.tsx`
Bootstraps the React application inside `#root` using `createRoot` with `StrictMode` enabled.

#### `src/App.tsx`
The entire active UI lives here:

| State Variable | Type | Purpose |
|----------------|------|---------|
| `notes` | `string \| null` | Loaded notes text; `null` when panel is hidden |
| `copied` | `boolean` | Tracks clipboard copy feedback (shows `✓` for 2 seconds) |
| `loading` | `boolean` | Prevents duplicate fetches while loading |

| Handler | Behavior |
|---------|----------|
| `handlePtsClick` | Fetches `/pts.txt`, sets `notes` on success |
| `handleCopy` | Copies `notes` to clipboard via `navigator.clipboard` |

#### `public/pts.txt`
Static content file. Vite copies everything in `public/` to the build output root, so the file is always available at `/pts.txt` in both development and production.

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20 LTS)
- **npm** 9+ (comes with Node.js)

### Installation

```bash
# Clone or navigate to the project directory
cd iiiii

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Vite starts a local dev server (default: `http://localhost:5173`). Open this URL in your browser.

Hot Module Replacement (HMR) is enabled — changes to `src/` files reload automatically. Changes to `public/pts.txt` may require a manual page refresh.

### Production Build

```bash
npm run build
```

Output is written to `dist/`:
- `dist/index.html`
- `dist/assets/` (bundled JS and CSS)
- `dist/pts.txt` (copied from `public/`)

### Preview Production Build

```bash
npm run preview
```

Serves the `dist/` folder locally to verify the production build.

### Lint

```bash
npm run lint
```

Runs ESLint across TypeScript and TSX files.

---

## Usage Guide

### During an Exam

1. Open the app in your browser
2. Click the **PTS** button
3. Read the notes in the panel that appears
4. Use **C** to copy all notes to clipboard if needed
5. Use **×** to close the panel

### Exam Workflow (from notes)

The notes follow this sequence:

```
SN → P- → Browser → Identify → Exploit
```

| Step | Action |
|------|--------|
| **SN** | Host scan — `nmap -sn 192.168.139.0/24` |
| **P-** | Full port scan — `nmap -p- <IP>` on each discovered host |
| **Browser** | Open `http://<IP>:<PORT>` for each target |
| **Identify** | Determine which app: Juice Shop, Shepherd, or NanoCorp |
| **Exploit** | Follow target-specific challenge steps |

---

## Notes Content (`pts.txt`)

The notes file is organized into the following sections:

### Step 0 — Network Reconnaissance

- Live host discovery with `nmap -sn`
- Full port scanning with `nmap -p-`
- Fast scan alternative: `nmap -Pn -T4 -p- <IP>`
- Example IPs and ports for three lab targets

### Target Identification

| Application | Visual Indicators |
|-------------|-------------------|
| **OWASP Juice Shop** | Orange theme, product catalog, search bar |
| **Shepherd** | Shepherd branding, lessons/challenges list |
| **NanoCorp** | NanoCorp branding, Orders/Reviews/Products sections |

### Target 1 — OWASP Juice Shop (6 Challenges)

| # | Challenge | OWASP Category | Technique |
|---|-----------|----------------|-----------|
| 1 | Sensitive Data Exposure | A01/A05 | Access `/ftp/acquisitions.md` |
| 2 | Security Misconfiguration | A05 | Access `/metrics` endpoint |
| 3 | SQL Injection Login Bypass | A03 | `' OR TRUE--` username payload |
| 4 | Broken Access Control (IDOR) | A01 | Modify `BasketId` in Session Storage |
| 5 | UNION SQL Injection | A03 | Extract schema from `sqlite_master` |
| 6 | Submit Review as Another User | A01 | Modify `author` field in fetch request |

### Target 2 — Shepherd (3 Challenges)

| # | Challenge | Technique |
|---|-----------|-----------|
| 1 | CSRF | Hit `/root/grantComplete/csrfLesson?userId=<id>` |
| 2 | SQL Injection | `" OR 1=1 --` payload |
| 3 | XSS | `<img src=x onerror=alert(1)>` |

### Target 3 — NanoCorp (3 Challenges)

| # | Challenge | Technique |
|---|-----------|-----------|
| 1 | Reflected XSS | `<script>alert('XSS')</script>` or img/svg variants |
| 2 | Stored XSS | `<img src="#" onerror="alert('XSS')">` |
| 3 | IDOR | Enumerate `/orders/1`, `/orders/2`, etc. |

### Extra — Docker / MySQL Commands

Commands for querying the lab MySQL container (`sclab-s2-mysql`) including database listing, table enumeration, and challenge token retrieval.

---

## Customization

### Updating Lab Notes

Edit `public/pts.txt` directly. No code changes required.

```bash
# Example: add a new section at the end of pts.txt
echo "New challenge notes here" >> public/pts.txt
```

Restart or refresh the browser after editing in development mode.

### Changing the Button Label

In `src/App.tsx`, change the button text:

```tsx
{loading ? 'Loading...' : 'PTS'}
```

### Changing the Panel Title

In `src/App.tsx`, update the `<h2>` inside `.code-header`:

```tsx
<h2>Penetration Testing & Secure Systems Lab – Quick Notes</h2>
```

### Styling

| File | Scope |
|------|-------|
| `src/App.css` | PTS button, notes panel, copy/close buttons |
| `src/index.css` | Global typography, body layout, Tailwind base |

Key CSS classes:

| Class | Element |
|-------|---------|
| `.pts-button` | Main PTS trigger button |
| `.code-display` | Notes panel container |
| `.code-header` | Panel header with title and action buttons |
| `.code-block` | Monospace preformatted notes area |
| `.copy-button` | Clipboard copy control |
| `.close-button` | Dismiss panel control |

---

## Configuration Reference

### Vite (`vite.config.ts`)

```ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

The `@/` alias maps to `./src/` for cleaner imports (e.g. `@/components/ui/code-block`).

### TypeScript (`tsconfig.app.json`)

- Target: ES2020
- Strict mode enabled
- JSX: `react-jsx`
- Path alias: `@/*` → `./src/*`
- Includes only `src/` directory

### Tailwind (`tailwind.config.js`)

Scans `./index.html` and `./src/**/*.{js,ts,jsx,tsx}` for class usage. Currently used mainly in the unused `CodeBlock` component.

### npm Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `vite` | Start development server |
| `build` | `tsc -b && vite build` | Type-check and build for production |
| `preview` | `vite preview` | Serve production build locally |
| `lint` | `eslint .` | Run ESLint |

---

## Legacy Assets

The `components/` directory contains standalone HTML and JavaScript files from a previous version of this project (student management lab questions). These files are **not wired into the current React app** but are retained in the repository:

| File | Type | Description |
|------|------|-------------|
| `q1.html` | HTML | Translate text function demo |
| `q2.html` | HTML | Temperature conversion |
| `q3.html` | HTML | Display utility |
| `q4.html` | JSX-style HTML | React class component demo |
| `q5.html` | HTML | Pluralize function |
| `q6.html` | HTML | Additional demo |
| `q7.js` | JavaScript | Logic demo |
| `q8.js` | JavaScript | Stack/Queue demo |
| `q9.html` | HTML | Check utility |
| `q10.js` | JavaScript | Additional logic |
| `q11.html` | HTML | Demo page |
| `q12.html` | HTML | Stack/Queue UI |
| `components/react/` | Libraries | React, ReactDOM, Babel, Axios (for standalone HTML pages) |

These can be opened directly in a browser or served separately if needed.

### Unused React Component

`src/components/ui/code-block.tsx` is a syntax-highlighted, tabbed code block component built with `react-syntax-highlighter` and Tabler icons. It is installed as a dependency but **not currently imported** by `App.tsx`. It can be reused if the app is extended to show formatted code snippets.

---

## Development

### Adding New Features

Example: load notes from multiple files with tabs.

1. Add new `.txt` files under `public/`
2. Extend `App.tsx` state to track active file
3. Fetch the selected file on button click
4. Optionally integrate the existing `CodeBlock` component for syntax highlighting

### Path Aliases

Import from `src/` using the `@/` prefix:

```tsx
import { CodeBlock } from '@/components/ui/code-block';
```

### Code Style

- ESLint with React Hooks rules enabled
- TypeScript strict mode
- Functional components with hooks (no class components in active code)

---

## Build & Deployment

### Static Hosting

This is a static SPA. Deploy the `dist/` folder to any static host:

- GitHub Pages
- Netlify
- Vercel
- Nginx / Apache
- Any file server

Ensure `pts.txt` is served from the root path (`/pts.txt`) alongside `index.html`.

### Build Output

```
dist/
├── index.html
├── pts.txt
└── assets/
    ├── index-<hash>.js
    └── index-<hash>.css
```

---

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| Notes panel empty | `pts.txt` missing or fetch failed | Verify `public/pts.txt` exists; check browser Network tab for 404 |
| `tsc` not found on build | Dependencies not installed | Run `npm install` |
| Copy button does nothing | Clipboard API blocked | Use HTTPS or `localhost`; grant clipboard permissions |
| Changes to `pts.txt` not visible | Browser cache | Hard refresh (`Ctrl+Shift+R`) |
| Port 5173 in use | Another Vite instance running | Stop other process or run `npm run dev -- --port 3000` |
| Dark/light theme inconsistency | `prefers-color-scheme` media query in `index.css` | Override styles in `App.css` if needed |

---

## Security Notice

The content in `pts.txt` describes exploitation techniques intended **only for authorized use** in isolated university lab environments. Do not use these techniques against systems you do not own or have explicit permission to test.

Credentials and tokens in the notes (e.g. MySQL password `CowSaysMoo`, challenge tokens) are specific to the lab Docker environment and are not real production secrets.

---

## License

Private project — not published to npm (`"private": true` in `package.json`).
