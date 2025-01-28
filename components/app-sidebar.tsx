import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, Calendar, Store, Info } from "lucide-react";
import Link from "next/link";

const sidebarItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Calendar, label: "Events", href: "/events" },
  { icon: Store, label: "Vendors", href: "/vendors" },
  { icon: Info, label: "About", href: "/about" },
];

export default function AppSidebar() {
  return (
    <div className="hidden">
      <Sidebar side="right">
        <SidebarHeader className="font-semibold px-4">Bazaar Hub</SidebarHeader>
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
      </Sidebar>
    </div>
  );
}
