import { PawPrint, Users, CalendarDays, DollarSign } from "lucide-react";
import { StatsCard } from "./StatsCard";
import { UpcomingAppointments } from "./UpcomingAppointments";
import { UpcomingVaccines } from "./UpcomingVaccines";
import { HospitalizedPets } from "./HospitalizedPets";
import { RecentActivity } from "./RecentActivity";
import {
  dashboardStatsMock,
  upcomingAppointmentsMock,
  upcomingVaccinesMock,
  hospitalizedPetsMock,
  recentActivityMock,
} from "../constants/mocks";

export function DashboardOverview() {
  const stats = dashboardStatsMock;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatsCard
          title="Mascotas registradas"
          value={stats.petsCount}
          icon={<PawPrint className="size-5 text-muted-foreground" />}
        />
        <StatsCard
          title="Clientes registrados"
          value={stats.clientsCount}
          icon={<Users className="size-5 text-muted-foreground" />}
        />
        <StatsCard
          title="Citas hoy"
          value={stats.todayAppointments}
          icon={<CalendarDays className="size-5 text-muted-foreground" />}
        />
        <StatsCard
          title="Ingresos del mes"
          value={`$${stats.monthlyRevenue.toLocaleString("es-CO")}`}
          icon={<DollarSign className="size-5 text-muted-foreground" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <UpcomingAppointments items={upcomingAppointmentsMock} />
        <UpcomingVaccines items={upcomingVaccinesMock} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <HospitalizedPets items={hospitalizedPetsMock} />
        <RecentActivity items={recentActivityMock} />
      </div>
    </div>
  );
}
