import { parseURL } from '$lib/utils/Env';
import type { LoadEvent } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ }: LoadEvent) {
  console.log("load");
  const response = await fetch(parseURL("api/tasks/all"), { method: "GET" });
  console.log(response);
  const tasks = await response.json();

  return {
    tasks: JSON.stringify(tasks)
  };
}