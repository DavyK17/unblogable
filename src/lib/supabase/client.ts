import type { Database } from "$lib/supabase";
import { dev } from "$app/environment";

import { createClient } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from "$env/static/public";

const url = dev ? "http://127.0.0.1:54321" : PUBLIC_SUPABASE_URL;
const supabase = createClient<Database>(url, PUBLIC_SUPABASE_KEY);

export default supabase;
