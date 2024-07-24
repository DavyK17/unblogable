import { MergeDeep } from "type-fest";
import { DatabaseGenerated } from "$lib/supabase";

// Override the type for a specific column in a view:
export type Database = MergeDeep<DatabaseGenerated, {}>;
