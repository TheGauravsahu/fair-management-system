import { auth } from "@/auth";
import AddStallForm from "@/components/stalls/addStall-form";
import { Card, CardContent } from "@/components/ui/card";
import { NavBar } from "@/components/ui/tubelight-navbar";
import React from "react";

interface AddStallProps {
  params: Promise<{ id: string }>;
}

export default async function AddStall({ params }: AddStallProps) {
  const { id } = await params;
  const session = await auth();

  return (
    <div className="md:p-8 w-full h-full">
      <NavBar />
      <div className="max-w-4xl p-4 mx-auto  py-32">
        <h1 className="text-2xl font-bold mb-8">Add Stall</h1>
        <Card className="p-4">
          <CardContent>
            <AddStallForm
              navigateTo={`/events/${id}/stalls`}
              eventId={id}
              userId={session?.user.id}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
