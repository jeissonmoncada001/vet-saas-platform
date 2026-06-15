"use client";

import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AppBreadcrumbs } from "./AppBreadcrumbs";

export function AppNavbar() {
  const pathname = usePathname();

  return (
    <header className="flex h-14 items-center gap-4 border-b px-6">
      <SidebarTrigger />
      <Separator orientation="vertical" className="h-5" />
      <AppBreadcrumbs pathname={pathname} />
    </header>
  );
}
