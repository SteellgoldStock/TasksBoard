import type { RequestEvent } from '@sveltejs/kit';
import { Tasks } from '../tasks';

// const GET export, return Promise<Response>
export async function GET() : Promise<Response> {
  return new Response(JSON.stringify(Tasks), { status: 200 });
}