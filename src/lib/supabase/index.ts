import type { Database as DatabaseGenerated } from "./database-generated";
import type { Database } from "./database";
import supabase from "./client";

export type { Database, DatabaseGenerated };
export { supabase };
