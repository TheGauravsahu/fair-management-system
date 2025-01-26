"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 mb-6 pt-6 w-[95%] md:w-[60%]",
        className
      )}
    >
      <div className="flex justify-between items-center gap-2 md:gap-3 bg-background/5 border border-border backdrop-blur-lg py-2 px-4 md:px-8 rounded-lg shadow-lg">
        <div>
          <h1 className="font-bold text-sm md:text-base">Bazaar Hub</h1>
        </div>

        <nav className="flex items-center gap-1">
          {items.map((item) => {
            const Icon = item.icon;

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
                <span className="md:hidden">
                  <Icon size={16} strokeWidth={2.5} />
                </span>
              </Link>
            );
          })}
        </nav>

        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
