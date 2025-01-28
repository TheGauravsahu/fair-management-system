import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, Calendar, Store, Info } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { auth } from "@/auth";
import Logout from "./logout";

const sidebarItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Calendar, label: "Events", href: "/events" },
  { icon: Store, label: "Vendors", href: "/vendors" },
  { icon: Info, label: "About", href: "/about" },
];

export default async function AppSidebar() {
  const session = await auth();

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
        <SidebarFooter>
          {session ? (
            <Logout />
          ) : (
            <Button>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
