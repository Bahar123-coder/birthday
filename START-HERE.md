# Bijaya’s 27th — Source Code

This ZIP contains the complete source of the deployed birthday wish website, including its React interface, server API, Neon PostgreSQL integration, package lockfile, and original build configuration.

## Main files
- `app/page.tsx`: birthday page, message wall, and wish form.
- `app/globals.css`: responsive styling.
- `app/api/wishes/route.ts`: server-side GET and POST endpoints.
- `db/index.ts`: Neon database connection.
- `.env.example`: environment variable name (no password included).

## Run locally
1. Install Node.js 22.13 or later, and pnpm matching `packageManager` in package.json.
2. Run `pnpm install` in this folder.
3. Create `.dev.vars` in this folder and add your Neon connection string as `DATABASE_URL="your-connection-string"`.
4. Run `pnpm dev`. The portable development server uses port 5173; follow its printed URL.

Your current Neon database already has the `birthday_wishes` table. To use a new database, run the SQL in `database-schema.sql` in its SQL editor.

## Build and hosting
Run `pnpm build`. This project uses Vinext and the Cloudflare Workers runtime. The build output is in `dist/`. The original Sites hosting configuration is retained in `.openai/hosting.json`; its project ID identifies the existing website. Hosting on a different platform may require adapting the Cloudflare-specific runtime and build configuration. This is not a static HTML-only website: the API requires a server runtime.

Set `DATABASE_URL` as a server-side secret on your hosting provider. Never put it in frontend code or a NEXT_PUBLIC variable. Credentials and database contents are not included in this export.

The old D1 schema/migration files are retained as project history. Current wish reads and writes use Neon PostgreSQL through `db/index.ts` and `app/api/wishes/route.ts`.

See `README.md` for the original framework and hosting details.
