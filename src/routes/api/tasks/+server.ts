import type { RequestEvent } from '@sveltejs/kit';
import { Tasks } from './tasks';
import { TEMP_AUTHENTIFICATION_TOKEN } from '$env/static/private';
import { z } from 'zod';

export async function GET({ url } : RequestEvent) : Promise<Response> {
  if (url.searchParams.get('authToken') !== TEMP_AUTHENTIFICATION_TOKEN) return new Response('Unauthorized', { status: 401 });

  if (url.searchParams.get('id')) {
    const task = Tasks.find(task => task.id === url.searchParams.get('id')) || {};
    if (Object.keys(task).length === 0) return new Response('Not found', { status: 404 });
    else return new Response(JSON.stringify(task), { status: 200 });
  } else return new Response("Parameter ID missing", { status: 400 });
}

export async function POST({ url, request } : RequestEvent) : Promise<Response> {
  if (url.searchParams.get('authToken') !== TEMP_AUTHENTIFICATION_TOKEN) return new Response('Unauthorized', { status: 401 });
  const values = await request.json();

  // Comments: Ideas for future improvements
  const bodySchema = z.object({
    id: z.string(),
    title: z.string().min(3).max(25),
    description: z.string(),
    // status: z.string(),
    // priority: z.string(),
    // dueDate: z.string(),
    addedAt: z.string(),
    // completedAt: z.string(),
  });
  
  const bodyParsed = bodySchema.safeParse(values);
  if (!bodyParsed.success) return new Response('Bad request: \n' + bodyParsed.error.message, { status: 400 });

  const task = Tasks.find(task => task.id === values.id);
  if (task) {
    return new Response(`Task ID ${bodyParsed.data.id} already exists`, { status: 409 });
  } else {
    values.addedAt = Number.parseInt(values.addedAt);
    Tasks.push(values);
    return new Response(`Task ID ${bodyParsed.data.id} successfuly added`, { status: 201 });
  }
}

export async function PUT({ url, request } : RequestEvent) : Promise<Response> {
  if (url.searchParams.get('authToken') !== TEMP_AUTHENTIFICATION_TOKEN) return new Response('Unauthorized', { status: 401 });
  const values = await request.json();
  
  const bodySchema = z.object({
    id: z.string(),
    fields: z.array(z.string().max(25)),
    values: z.array(z.any()),
  });

  const bodyParsed = bodySchema.safeParse(values);
  if (!bodyParsed.success) return new Response('Bad request: \n' + bodyParsed.error.message, { status: 400 });

  const task = Tasks.find(task => task.id === values.id);
  if (task) {
    for (let i = 0; i < bodyParsed.data.fields.length; i++) {
      // @ts-ignore
      task[bodyParsed.data.fields[i]] = bodyParsed.data.values[i];
    }

    return new Response(`Task ID ${bodyParsed.data.id} successfuly updated`, { status: 200 });
  }

  return new Response(`Task ID ${bodyParsed.data.id} not found`, { status: 404 });
}