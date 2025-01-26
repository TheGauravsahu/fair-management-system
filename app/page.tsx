"use client";

import HeroSection from "@/components/hero-section";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, CalendarDays, Users, Info } from "lucide-react";

export default function Page() {
  return (
    <div>
      <div className="h-full fixed top-0 left-0 right-0 w-full bg-white dark:bg-black -z-50 ">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full dark:bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] "></div> 
        <div className="absolute bottom-0 left-0 right-0 top-0 dark:bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)] bg-[radial-gradient(circle_800px_at_10%_200px,#d5c5ff,transparent)]"></div>
      </div>
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

        <HeroSection />
      </div>
    </div>
  );
}
