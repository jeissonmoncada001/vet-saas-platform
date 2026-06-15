"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import type { ClientSchema } from "../schemas";

const TABLE = "clients";
const PATH = "/clients";

export async function createClientAction(values: ClientSchema) {
  const supabase = await createClient();
  const { error } = await supabase.from(TABLE).insert(values);
  if (error) return { error: error.message };
  revalidatePath(PATH);
  return { success: true };
}

export async function updateClientAction(id: string, values: ClientSchema) {
  const supabase = await createClient();
  const { error } = await supabase.from(TABLE).update(values).eq("id", id);
  if (error) return { error: error.message };
  revalidatePath(PATH);
  return { success: true };
}

export async function deleteClientAction(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) return { error: error.message };
  revalidatePath(PATH);
  return { success: true };
}
