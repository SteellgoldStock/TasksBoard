import type { RequestEvent } from '@sveltejs/kit';
import { Tasks } from '../tasks';
import { TEMP_AUTHENTIFICATION_TOKEN } from '$env/static/private';

export async function GET({ url }: RequestEvent) : Promise<Response> {
  if (url.searchParams.get('authToken') !== TEMP_AUTHENTIFICATION_TOKEN) {
    return new Response('Unauthorized', { status: 401 });
  }

  return new Response(JSON.stringify(Tasks), { status: 200 });
}