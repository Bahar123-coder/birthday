import { getSql } from '../../../db';

export const dynamic = 'force-dynamic';
export async function GET() {
  try {
    const sql = getSql();
    const rows = await sql`SELECT id, name, message, emoji, created_at AS "createdAt" FROM birthday_wishes ORDER BY created_at DESC, id DESC`;
    return Response.json(rows, {headers: {'Cache-Control': 'no-store'}});
  } catch {
    return Response.json({error: 'Could not load wishes. Please try again.'}, {status: 500});
  }
}
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const name = typeof data.name === 'string' ? data.name.trim() : '';
    const message = typeof data.message === 'string' ? data.message.trim() : '';
    if (!name || name.length > 60 || !message || message.length > 2000) {
      return Response.json({error: 'Please add your name and a message (up to 2,000 characters).'}, {status: 400});
    }
    const emoji = ['💛','🎂','✨','🌷','🎉','🥂'].includes(data.emoji) ? data.emoji : '💛';
    const sql = getSql();
    const rows = await sql`INSERT INTO birthday_wishes (name, message, emoji) VALUES (${name}, ${message}, ${emoji}) RETURNING id, name, message, emoji, created_at AS "createdAt"`;
    return Response.json(rows[0], {status: 201});
  } catch {
    return Response.json({error: 'Your wish could not be saved. Please try again.'}, {status: 500});
  }
}
