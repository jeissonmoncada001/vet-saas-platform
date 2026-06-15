export interface Client {
  id: string;
  clinic_id: string;
  nombre: string;
  documento: string;
  telefono: string;
  email: string;
  direccion: string;
  created_at: string;
}

export type ClientFormValues = Omit<Client, "id" | "clinic_id" | "created_at">;
