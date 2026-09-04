# Bhura Industries

A responsive product website for Bhura Industries, showcasing commercial baking trays, moulds, and related bakery equipment.

Built with React, TypeScript, Vite, Tailwind CSS, and Supabase.

## Features

- Product catalogue with locally bundled product images
- Responsive navigation and product grid
- Company details, location map, and WhatsApp contact button
- Contact form that stores inquiries in Supabase
- Production-ready Vite build setup

## Getting started

### Prerequisites

- Node.js 18 or later
- npm
- A Supabase project for the contact form

### Install and run

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

## Environment variables

Create a `.env` file in the project root with your Supabase project credentials:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

The `.env` file is ignored by Git and must not be committed.

## Supabase setup

Apply the migration at [`supabase/migrations/20260904044217_create_contact_messages.sql`](supabase/migrations/20260904044217_create_contact_messages.sql) to create the `contact_messages` table and its insert policy. The contact form writes new inquiries to this table.

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
  lib/supabase.ts   Supabase client configuration
  App.tsx           Page composition
supabase/migrations/ Database schema and access policy
```

## Updating products and images

Add product images to `src/images/`, then import them and assign them to the relevant product entry in [`src/lib/data.ts`](src/lib/data.ts). Vite processes these imports and includes the image assets in the production build.

## Contact details

Company name, address, email, phone numbers, and WhatsApp number are managed in `src/lib/data.ts`.
