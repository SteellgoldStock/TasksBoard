import type { LoadEvent } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ }: LoadEvent) {
  const response = await fetch('http://127.0.0.1:5173/api/tasks/all');
  const tasks = await response.json();

  return {
    props: {
      tasks: JSON.stringify(tasks)
    }
  };
}