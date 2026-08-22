import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://uwcrflplhkshomnxnond.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_p95-dfg6P9L_t6Vbz4txdQ_GhOGAhtU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
