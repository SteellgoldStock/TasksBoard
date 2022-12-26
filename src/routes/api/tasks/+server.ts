import type { RequestEvent } from '@sveltejs/kit';
import { Tasks } from './tasks';
import { TEMP_AUTHENTIFICATION_TOKEN } from '$env/static/private';

export async function GET({ url } : RequestEvent) : Promise<Response> {
  if (url.searchParams.get('authToken') !== TEMP_AUTHENTIFICATION_TOKEN) {
    return new Response('Unauthorized', { status: 401 });
  }

  if (url.searchParams.get('id')) {
    const task = Tasks.find(task => task.id === url.searchParams.get('id')) || {};
    
    if (Object.keys(task).length === 0) {
      return new Response('Not found', { status: 404 });
    }
    
    return new Response(JSON.stringify(task), { status: 200 });
  }

  return new Response("Missing parameter 'id'", { status: 400 });
}