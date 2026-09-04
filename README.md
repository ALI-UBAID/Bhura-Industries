# Bhura Industries

A responsive product website for Bhura Industries, showcasing commercial baking trays, moulds, and related bakery equipment.

Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Product catalogue with locally bundled product images
- Responsive navigation and product grid
- Company details, location map, and WhatsApp contact button
- Contact form that opens a pre-filled WhatsApp inquiry
- Production-ready Vite build setup

## Getting started

### Prerequisites

- Node.js 18 or later
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

## Available scripts

- `npm run dev`: start the local Vite development server.
- `npm run build`: create an optimized production build in `dist/`.
- `npm run preview`: preview the production build locally.
- `npm run typecheck`: run TypeScript type checking without emitting files.
- `npm run lint`: run ESLint across the project.

## Project structure

```text
src/
  components/       Reusable page sections and UI components
  images/           Local product images
  lib/data.ts       Product catalogue and company information
  App.tsx           Page composition
```

## Updating products and images

Add product images to `src/images/`, then import them and assign them to the relevant product entry in [`src/lib/data.ts`](src/lib/data.ts). Vite processes these imports and includes the image assets in the production build.

## Contact details

Company name, address, email, phone numbers, and WhatsApp number are managed in `src/lib/data.ts`. The contact form uses the WhatsApp number to create the inquiry link.
