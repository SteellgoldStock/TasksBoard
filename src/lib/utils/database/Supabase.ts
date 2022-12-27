import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private';
import type{ Database } from './Database.types';

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);