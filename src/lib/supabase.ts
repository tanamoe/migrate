import { createClient } from '@supabase/supabase-js'

import type { Database } from '../types/supabase';

if (!Bun.env.SUPABASE_URL) throw new Error("URL not defined");
if (!Bun.env.SUPABASE_ANON_KEY) throw new Error("Anon key not defined");

export const supabase = createClient<Database>(Bun.env.SUPABASE_URL, Bun.env.SUPABASE_ANON_KEY)
