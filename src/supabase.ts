import { createClient } from "@supabase/supabase-js";
import { IUser } from "./interfaces.ts";

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

// fetch individual user
export async function fetchUser(id: number) {
  const { data } = await supabase.from("users").select().eq("id", id);
  return data as any;
}

// update individual user
export async function updateUser(user: IUser) {
  const { error } = await supabase
    .from("users")
    .update({
      title: user.title,
      first_name: user.first_name,
      last_name: user.last_name,
      city: user.city,
      state: user.state,
      country: user.country,
      email: user.email,
      phone: user.phone,
      status: user.status,
      picture_url: user.picture_url,
      isArchived: user.isArchived,
    })
    .eq("id", user.id);
  return error as any;
}

// create individual user
export async function insertUser(user: IUser) {
  const { data } = await supabase.from("users").insert(user).select();
  return data as any;
}

// delete individual user
export async function deleteUser(id: number) {
  const { data } = await supabase.from("users").delete().eq("id", id);
  return data as any;
}
