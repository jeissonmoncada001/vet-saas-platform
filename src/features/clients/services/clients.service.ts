import { createClient } from "@/lib/supabase/client";
import type { Client, ClientFormValues } from "../types";

const TABLE = "clients";

export async function getClients(): Promise<Client[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("nombre");
  if (error) throw error;
  return data ?? [];
}

export async function getClientById(id: string): Promise<Client> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
}

export async function createClientRecord(values: ClientFormValues): Promise<Client> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from(TABLE)
    .insert(values)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function updateClientRecord(id: string, values: Partial<ClientFormValues>): Promise<Client> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from(TABLE)
    .update(values)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteClientRecord(id: string): Promise<void> {
  const supabase = createClient();
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw error;
}
