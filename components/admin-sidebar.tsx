import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Settings,
  Ticket,
  Users,
  Calendar,
  Store,
} from "lucide-react";
import Link from "next/link";

export default function AdminSidebar() {
  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
    { icon: Users, label: "Users", href: "/admin/users" },
    { icon: Store, label: "Stalls", href: "/admin/stalls" },
    { icon: Ticket, label: "Tickets", href: "/admin/tickets" },
    { icon: Calendar, label: "Events", href: "/admin/events" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="font-semibold px-4">
        <Link href="/">Bazaar Hub.</Link>
      </SidebarHeader>
      <SidebarContent className="px-4">
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
