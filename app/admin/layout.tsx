import { auth } from "@/auth";
import AdminSidebar from "@/components/admin-sidebar";
import AdminNavbar from "@/components/ui/admin-navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";
import React from "react";
import { redirect } from "next/navigation";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Admin - Bazaar Hub",
  description: "Fair management platform.",
};

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const session = await auth();

  if (!session || session.user?.role != "admin") {
    redirect("/login");
  }
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
