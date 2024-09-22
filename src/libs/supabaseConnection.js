import { createClient } from "@supabase/supabase-js";
import { envs } from "../config/envs";

export const supabaseClient = createClient(
  envs.supabaseUrl,envs.supabaseAnonKey
);