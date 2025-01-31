import React from "react";
import { Users, MapPin, CalendarCheck, Settings } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  const features = [
    {
      icon: Users,
      title: "Vendor & Shopkeeper Management",
      description:
        "Easily manage vendor registrations, shopkeeper allocations, and ensure smooth event operations.",
    },
    {
      icon: MapPin,
      title: "Smart Land Allocation",
      description:
        "Automated land allotment system to reduce disputes and optimize space utilization.",
    },
    {
      icon: CalendarCheck,
      title: "Event Scheduling",
      description:
        "Organize multiple events efficiently with our robust event scheduling and tracking system.",
    },
    {
      icon: Settings,
      title: "Admin Controls",
      description:
        "Powerful admin panel to oversee events, vendors, and operational management seamlessly.",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen w-full py-32">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 text-center">
        <h1 className="text-5xl font-bold ">
          About{" "}
          <span className="animate-text-gradient  bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
            Bazaar Hub
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Bazaar Hub is your one-stop solution for seamless fair management,
          vendor coordination, and event organization.
        </p>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-12 pb-32">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Choose Bazaar Hub?
        </h2>

        <div className="flex items-center justify-center gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index}>
                <Card className="w-80 h-64 p-6 shadow-lg rounded-2xl bg-baground/10 hover:shadow-2xl transition-all">
                  <CardContent className="flex flex-col items-center text-center">
                    <Icon className="w-12 h-12 text-violet-500" />
                    <h3 className="mt-4 text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-12">
        <Button>
          <Link href="/login">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}
