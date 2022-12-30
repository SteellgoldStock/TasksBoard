import { parseURL } from "$lib/utils/Env";
import { USER_IDENTIFIER, USER_SECRET } from "$env/static/private";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const response = await fetch(parseURL("tasks/" + USER_IDENTIFIER), {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${USER_SECRET}`
    }
  });

  const tasks = await response.json();
  console.log(tasks[0].taskTitle);

  return {
    tasks: JSON.stringify(tasks)
  };
}