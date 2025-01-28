import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./button";
import { auth } from "@/auth";
import { SidebarTrigger } from "./sidebar";

interface NavBarProps {
  className?: string;
}

export async function NavBar({ className }: NavBarProps) {
  const items = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Events",
      url: "/events",
    },
    {
      name: "Vendors",
      url: "/vendors",
    },
    {
      name: "About",
      url: "/about",
    },
  ];

  const session = await auth();

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 mb-6 pt-6 w-[95%] md:w-[60%]",
        className
      )}
    >
      <div className="flex justify-between items-center gap-2 md:gap-3 bg-background/5  border border-border backdrop-blur-lg py-2 px-4 md:px-8 rounded-lg shadow-lg">
        <Link href="/">
          <h1 className="font-bold text-sm md:text-base">Bazaar Hub</h1>
        </Link>

        <nav className="flex items-center gap-1">
          {items.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.url}
                className={cn(
                  "relative cursor-pointer text-xs md:text-sm px-2 md:px-4 py-2 rounded-full transition-colors",
                  "text-foreground/60 hover:text-primary"
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <ModeToggle />

          {session ? (
            <div className="flex items-center">
              <Button variant="outline"  className="hidden md:block">
                <Link href="/profile">
                  Profile
                </Link>
              </Button>
              <button  className="block md:hidden">
           
                <SidebarTrigger />
              </button>
            </div>
          ) : (
            <Button variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
