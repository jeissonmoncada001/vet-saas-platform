"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const routeLabels: Record<string, string> = {
  dashboard: "Dashboard",
  clients: "Clientes",
  pets: "Mascotas",
  appointments: "Citas",
  "medical-records": "Historia Clínica",
  vaccines: "Vacunas",
  hospitalizations: "Hospitalización",
  inventory: "Inventario",
  invoices: "Facturación",
  reports: "Reportes",
  users: "Usuarios",
};

export function AppBreadcrumbs({ pathname }: { pathname: string }) {
  const segments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard">Inicio</BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const label = routeLabels[segment] ?? segment;

          return (
            <span key={segment} className="flex items-center gap-1.5">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={`/${segments.slice(0, index + 1).join("/")}`}>
                    {label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </span>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
