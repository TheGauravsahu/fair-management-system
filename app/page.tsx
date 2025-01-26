"use client";

import { HeroSection } from "@/components/hero-section";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, CalendarDays, Users, Info } from "lucide-react";

export default function Page() {
  return (
    <div>
      <NavBar
        items={[
          {
            name: "Home",
            url: "/",
            icon: Home,
          },
          {
            name: "Events",
            url: "/events",
            icon: CalendarDays,
          },
          {
            name: "Vendors",
            url: "/vendors",
            icon: Users,
          },
          {
            name: "About",
            url: "/about",
            icon: Info,
          },
        ]}
      />
      <HeroSection
        title="Seamless Fair and Event Management"
        image={{
          alt: "fair dashboard",
          light: "/hero.jpg",
          dark: "/hero.jpg",
        }}
        actions={[
          {
            href: "/signup",
            text: "Signup",
          },
          {
            href: "/login",
            text: "Login",
          },
        ]}
        description="Effortlessly organize events, allocate land to vendors, and resolve disputes with our streamlined management system. Empowering communities with transparency and efficiency."
      />
    </div>
  );
}
