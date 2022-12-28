import { getTasksFromUser, isValidRequest } from '$lib/utils/database/Validator';
import type { RequestEvent } from '@sveltejs/kit';

export async function GET({ url }: RequestEvent) : Promise<Response> {
  if (url.searchParams.get('user_identifier') == null) {
    return new Response("User identifier not found", { status: 404 });
  }

  if (url.searchParams.get('user_secret') == null) {
    return new Response("User secret not found", { status: 404 });
  }

  let userIdentifier : string = url.searchParams.get('user_identifier') ?? "";
  let userSecret : string = url.searchParams.get('user_secret') ?? "";

  if (!await isValidRequest(userIdentifier, userSecret)) {
    return new Response("The identifiers you have transmitted are not valid", { status: 401 });
  }

  let tasks = await getTasksFromUser(userIdentifier, userSecret);
  return new Response(tasks, { status: 200 });
}

// export async function GET({ url }: RequestEvent) : Promise<Response> {
//   if (url.searchParams.get('authToken') !== TEMP_AUTHENTIFICATION_TOKEN) {
//     return new Response('Unauthorized', { status: 401 });
//   }

//   let { data: tasks, error } = await supabase
//     .from('tasks')
//     .select('*')
//   console.log(tasks)

//   return new Response(JSON.stringify(tasks), { status: 200 });
// }