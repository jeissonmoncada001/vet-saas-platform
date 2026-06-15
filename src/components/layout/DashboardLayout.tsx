"use client";

import { AppSidebar } from "./AppSidebar";
import { AppNavbar } from "./AppNavbar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppNavbar />
        <main className="flex-1 p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
