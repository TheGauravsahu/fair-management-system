import React from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SidebarTrigger } from "./sidebar";
import { auth } from "@/auth";

export default async function AdminNavbar() {
  const session = await auth();

  return (
    <nav className="flex items-center justify-between border-b pb-2">
      <SidebarTrigger />
      <div className="flex items-center gap-1">
        <span>Welcome, {session?.user?.name}</span>
        <ModeToggle />
      </div>
    </nav>
  );
}
