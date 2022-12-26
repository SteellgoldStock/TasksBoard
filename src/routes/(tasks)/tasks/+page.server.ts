import { parseURL } from '$lib/utils/Env';
import type { LoadEvent } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ }: LoadEvent) {
  const response = await fetch(parseURL("api/tasks/all"));
  const tasks = await response.json();

  return {
    props: {
      tasks: JSON.stringify(tasks)
    }
  };
}