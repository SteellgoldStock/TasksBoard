import { supabase } from "./Supabase";

export async function isValidRequest(userIdentifier: string, userSecret: string) : Promise<boolean> {
  let { data: users, error } = await supabase
    .from('users')
    .select('id')
    .eq('user_identifier', userIdentifier)
    .eq('user_secret', userSecret);

  if (users?.length === 0) {
    return false;
  }

  return true;
}

export async function getTasksFromUser(userIdentifier: string, userSecret: string) : Promise<any> {
  let { data: tasks, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('user_identifier', userIdentifier)
    .eq('user_secret', userSecret);

  return tasks;
}