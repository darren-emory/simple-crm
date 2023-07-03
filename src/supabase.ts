import { createClient } from "@supabase/supabase-js";

// create supabase connection
export const supabase = createClient(
  "https://aubhbxjhaejjitgtfkfb.supabase.co",
  import.meta.env.VITE_API as string
);

// fetch all users
export async function fetchUsers() {
  const { data } = await supabase.from("users").select();
  return data as any;
}

// fetch inidivual user
export async function fetchUser(id: string) {
  const { data, error } = await supabase.from("users").select().eq("id", id);
  return data as any;
  return error as any;
}
