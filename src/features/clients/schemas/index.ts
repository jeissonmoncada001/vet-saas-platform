import { z } from "zod";

export const clientSchema = z.object({
  nombre: z.string().min(2, "Mínimo 2 caracteres"),
  documento: z.string().min(5, "Documento inválido"),
  telefono: z.string().min(7, "Teléfono inválido"),
  email: z.string().email("Email inválido").or(z.literal("")),
  direccion: z.string().default(""),
});

export type ClientSchema = z.infer<typeof clientSchema>;
