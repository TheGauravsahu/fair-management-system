import AdminSidebar from "@/components/admin-sidebar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="w-full">
      <SidebarProvider>
        <AdminSidebar />
        <div className="p-4 w-full">
          <nav className="flex items-center justify-between border-b pb-2">
            <SidebarTrigger />
            <div className="flex items-center gap-1">
              <span>Welcome, Gaurav</span>
              <ModeToggle />
            </div>
          </nav>
          {children}
        </div>
      </SidebarProvider>
    </div>
  );
}
