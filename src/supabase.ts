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
export async function fetchUser(id: number, cb?: any) {
  const { data, error } = await supabase.from("users").select().eq("id", id);
  if (error) {
    console.warn(error);
  } else if (data) {
    cb && cb();
    return data as any;
  }
}

// update individual user
export async function updateUser(user: IUser, cb?: any) {
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
  if (error) {
    console.warn(error);
  } else {
    cb && cb();
  }
}

// create individual user
export async function insertUser(user: IUser, cb?: any) {
  const { data, error } = await supabase.from("users").insert(user).select();
  if (error) {
    console.warn(error);
  } else if (data) {
    cb && cb();
    return data as any;
  }
}

// delete individual user
export async function deleteUser(id: number, cb?: any) {
  const { error } = await supabase.from("users").delete().eq("id", id);
  if (error) {
    console.warn(error);
  } else {
    cb && cb();
  }
}
