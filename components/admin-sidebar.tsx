import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Users, Calendar, Store } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

export default function AdminSidebar() {
  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
    { icon: Users, label: "Users", href: "/admin/users" },
    { icon: Store, label: "Stalls", href: "/admin/stalls" },
    { icon: Calendar, label: "Events", href: "/admin/events" },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="font-semibold px-4 mt-4">
        <Link href="/" className="flex items-end gap-1">
          <h1 className="font-bold text-lg md:text-base">Bazaar Hub</h1>
          <Badge className="text-xs">dev</Badge>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-4 mt-4">
        <SidebarMenu>
          {sidebarItems.map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton asChild>
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
