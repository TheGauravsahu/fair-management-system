import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 z-40">
      <div className="text-center">
        <Badge variant="outline">Learn more ✨</Badge>
        <h1 className="text-7xl font-bold tracking-tight text-foreground  sm:text-6xl">
          Streamline your {""}
          <span className="animate-text-gradient  bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
            fair management
          </span>{" "}
          experience
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-400">
          Organize, manage, and track everything in one place with our platform.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button className="gap-2">Get started {"->"}</Button>
        </div>
      </div>
    </div>
  );
}
