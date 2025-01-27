import AdminSidebar from "@/components/admin-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div>
      <SidebarProvider>
        <AdminSidebar />
        <div>
          <nav className="w-full p-4">
            <SidebarTrigger />
          </nav>
          {children}
        </div>
      </SidebarProvider>
    </div>
  );
}
