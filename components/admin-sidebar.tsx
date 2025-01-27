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

export default function AdminSidebar() {
  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
    { icon: Users, label: "Exhibitors", href: "/admin/exhibitors" },
    { icon: Store, label: "Stalls", href: "/admin/stalls" },
    { icon: Ticket, label: "Tickets", href: "/admin/tickets" },
    { icon: Calendar, label: "Events", href: "/admin/events" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ];
  return (
    <Sidebar>
      <SidebarHeader className="font-semibold px-4">Bazaar Hub</SidebarHeader>
      <SidebarContent className="px-4">
        <SidebarMenu>
          {sidebarItems.map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton asChild>
                <a href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
