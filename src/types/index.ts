export type Role = "admin" | "veterinario" | "recepcionista" | "auxiliar";

export type AppointmentStatus = "pendiente" | "confirmada" | "atendida" | "cancelada";

export type HospitalizationStatus = "activa" | "alta" | "fallecido";

export type Species = "perro" | "gato" | "ave" | "reptil" | "roedor" | "otro";

export type Sex = "macho" | "hembra";

export interface BaseEntity {
  id: string;
  clinic_id: string;
  created_at: string;
}

export interface Profile extends BaseEntity {
  nombre: string;
  email: string;
  rol: Role;
}

export interface Client extends BaseEntity {
  nombre: string;
  documento: string;
  telefono: string;
  email: string;
  direccion: string;
}

export interface Pet extends BaseEntity {
  owner_id: string;
  nombre: string;
  especie: Species;
  raza: string;
  sexo: Sex;
  color: string;
  peso: number;
  fecha_nacimiento: string;
  microchip?: string;
  foto?: string;
}

export interface Appointment extends BaseEntity {
  pet_id: string;
  veterinarian_id: string;
  fecha_hora: string;
  motivo: string;
  estado: AppointmentStatus;
}

export interface MedicalRecord extends BaseEntity {
  pet_id: string;
  veterinarian_id: string;
  fecha: string;
  motivo_consulta: string;
  sintomas: string;
  diagnostico: string;
  tratamiento: string;
  observaciones?: string;
}

export interface Vaccine extends BaseEntity {
  pet_id: string;
  nombre: string;
  fecha_aplicacion: string;
  proxima_aplicacion: string;
}

export interface Hospitalization extends BaseEntity {
  pet_id: string;
  fecha_ingreso: string;
  estado: HospitalizationStatus;
  observaciones: string;
}

export interface InventoryItem extends BaseEntity {
  nombre: string;
  categoria: string;
  stock: number;
  precio: number;
  fecha_vencimiento?: string;
}

export interface Invoice extends BaseEntity {
  owner_id: string;
  total: number;
  fecha: string;
}

export interface InvoiceItem {
  id: string;
  invoice_id: string;
  descripcion: string;
  cantidad: number;
  precio_unitario: number;
}
