export const dashboardStatsMock = {
  petsCount: 128,
  clientsCount: 84,
  todayAppointments: 9,
  monthlyRevenue: 4_250_000,
};

export const upcomingAppointmentsMock = [
  { id: "1", petName: "Max", ownerName: "Carlos Pérez", time: "09:00", reason: "Vacunación" },
  { id: "2", petName: "Luna", ownerName: "Ana Gómez", time: "10:30", reason: "Control" },
  { id: "3", petName: "Rocky", ownerName: "Luis Torres", time: "11:00", reason: "Cirugía" },
  { id: "4", petName: "Coco", ownerName: "María Díaz", time: "14:00", reason: "Baño y corte" },
];

export const upcomingVaccinesMock = [
  { id: "1", petName: "Max", ownerName: "Carlos Pérez", vaccine: "Rabia", dueDate: "2025-07-02" },
  { id: "2", petName: "Luna", ownerName: "Ana Gómez", vaccine: "Parvovirus", dueDate: "2025-07-05" },
  { id: "3", petName: "Toby", ownerName: "Pedro Ruiz", vaccine: "DHPP", dueDate: "2025-07-08" },
];

export const hospitalizedPetsMock = [
  { id: "1", petName: "Rocky", ownerName: "Luis Torres", since: "2025-06-28", status: "Estable" },
  { id: "2", petName: "Bella", ownerName: "Sandra López", since: "2025-06-30", status: "En observación" },
];

export const recentActivityMock = [
  { id: "1", description: "Nueva cita registrada para Max", time: "Hace 10 min" },
  { id: "2", description: "Historia clínica actualizada — Luna", time: "Hace 25 min" },
  { id: "3", description: "Cliente nuevo: María Rodríguez", time: "Hace 1h" },
  { id: "4", description: "Vacuna aplicada a Toby", time: "Hace 2h" },
  { id: "5", description: "Factura generada — $120.000", time: "Hace 3h" },
];
