import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://oechdfimynhsqdryrzzh.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lY2hkZmlteW5oc3FkcnlyenpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTU4MjEsImV4cCI6MjA1MDAzMTgyMX0.FbNGxJghbFsRiWrdqd6xj2Wx2mVQsMxycVXUofxm2_I';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
