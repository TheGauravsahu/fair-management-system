"use client";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const imageSrc =
    resolvedTheme === "light"
      ? "https://www.launchuicomponents.com/app-light.png"
      : "https://www.launchuicomponents.com/app-dark.png";

  return (
    <div className="h-full w-full  overflow-hidden">
      <div className="mx-auto max-w-2xl h-full md:max-w-4xl py-32 sm:pt-48 lg:pt-56 lg:mb-8 z-40">
        <div className="text-center">
          <Badge variant="outline">Learn more ✨</Badge>
          <h1 className="text-3xl md:text-7xl font-bold tracking-tight text-foreground  sm:text-6xl">
            Streamline your {""}
            <span className="animate-text-gradient  bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
              fair management
            </span>{" "}
            experience
          </h1>
          <p className="my-2 md:text-lg  text-gray-400">
            Organize, manage, and track everything in one place with our
            platform.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button className="gap-2">
              <Link href="/events">Get started {"->"}</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="h-[30vh] md:h-screen mb-16">
        <div className="h-fit  w-[90%] md:w-[85%] bg-white dark:bg-black  z-40 absolute left-1/2 -translate-x-1/2 rounded-lg p-2 overflow-hidden">
          <div className=" flex flex-col items-center space-y-4 m-4">
            <div className="absolute left-4 top-4 flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          <img
            className="rounded-lg object-contain h-full w-full"
            src={imageSrc}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
