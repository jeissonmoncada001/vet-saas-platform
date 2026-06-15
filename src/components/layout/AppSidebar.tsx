"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  PawPrint,
  CalendarDays,
  FileText,
  Syringe,
  BedDouble,
  Package,
  Receipt,
  BarChart3,
  UserCog,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { APP_NAME, ROUTES } from "@/constants";
import { UserMenu } from "./UserMenu";

const navItems = [
  { label: "Dashboard", href: ROUTES.DASHBOARD, icon: LayoutDashboard },
  { label: "Clientes", href: ROUTES.CLIENTS, icon: Users },
  { label: "Mascotas", href: ROUTES.PETS, icon: PawPrint },
  { label: "Citas", href: ROUTES.APPOINTMENTS, icon: CalendarDays },
  { label: "Historia Clínica", href: ROUTES.MEDICAL_RECORDS, icon: FileText },
  { label: "Vacunas", href: ROUTES.VACCINES, icon: Syringe },
  { label: "Hospitalización", href: ROUTES.HOSPITALIZATIONS, icon: BedDouble },
  { label: "Inventario", href: ROUTES.INVENTORY, icon: Package },
  { label: "Facturación", href: ROUTES.INVOICES, icon: Receipt },
  { label: "Reportes", href: ROUTES.REPORTS, icon: BarChart3 },
  { label: "Usuarios", href: ROUTES.USERS, icon: UserCog },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <span className="text-xl font-bold">{APP_NAME}</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Módulos</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <Link href={item.href} className="w-full">
                    <SidebarMenuButton isActive={pathname === item.href}>
                      <item.icon className="size-4" />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <UserMenu />
      </SidebarFooter>
    </Sidebar>
  );
}
