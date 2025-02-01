import AdminSidebar from "@/components/admin-sidebar";
import AdminNavbar from "@/components/ui/admin-navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";
import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Admin - Bazaar Hub",
  description: "Fair management platform.",
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="w-full">
      <SidebarProvider>
        <AdminSidebar />
        <div className="p-4 w-full">
          <AdminNavbar />
          {children}
        </div>
      </SidebarProvider>
    </div>
  );
}
