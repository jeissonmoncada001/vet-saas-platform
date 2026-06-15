export const APP_NAME = "VetSaaS";

export const ROLES = {
  ADMIN: "admin",
  VETERINARIO: "veterinario",
  RECEPCIONISTA: "recepcionista",
  AUXILIAR: "auxiliar",
} as const;

export const APPOINTMENT_STATUS = {
  PENDIENTE: "pendiente",
  CONFIRMADA: "confirmada",
  ATENDIDA: "atendida",
  CANCELADA: "cancelada",
} as const;

export const APPOINTMENT_STATUS_LABELS: Record<string, string> = {
  pendiente: "Pendiente",
  confirmada: "Confirmada",
  atendida: "Atendida",
  cancelada: "Cancelada",
};

export const SPECIES_LABELS: Record<string, string> = {
  perro: "Perro",
  gato: "Gato",
  ave: "Ave",
  reptil: "Reptil",
  roedor: "Roedor",
  otro: "Otro",
};

export const SEX_LABELS: Record<string, string> = {
  macho: "Macho",
  hembra: "Hembra",
};

export const LOW_STOCK_THRESHOLD = 5;

export const VACCINE_ALERT_DAYS = 7;

export const ROUTES = {
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  DASHBOARD: "/dashboard",
  CLIENTS: "/clients",
  PETS: "/pets",
  APPOINTMENTS: "/appointments",
  MEDICAL_RECORDS: "/medical-records",
  VACCINES: "/vaccines",
  HOSPITALIZATIONS: "/hospitalizations",
  INVENTORY: "/inventory",
  INVOICES: "/invoices",
  REPORTS: "/reports",
  USERS: "/users",
} as const;
