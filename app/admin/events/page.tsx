import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function AdminEvents() {
  return (
    <div className="p-8">
      <div className="mb-4">
        <Button>
          <Link href="/admin/events/add">Add event</Link>
        </Button>
      </div>

      <div className="w-full h-full flex items-center justify-center lg:justify-normal">
        <Card className="hover:scale-105 cursor-pointer transition-all ease-in-out w-96">
          <CardHeader>
            <CardTitle>Durga Puja - Haripur Maltol</CardTitle>
            <CardDescription>
              Shree Shree 108 Durga Puja Haripur Maltol
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Organiser : Haripur Maltol Commettie</p>
            <p className="text-foreground/80"> 21st feb - 26 jan 2024</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
