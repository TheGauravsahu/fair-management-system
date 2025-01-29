import EditEventForm from "@/components/events/editEvent-form";
import { Card, CardContent } from "@/components/ui/card";
import { getEventDetails } from "@/data/event.data";
import React from "react";

interface AminEditEventProps {
  params: { id: Promise<string> };
}

export default async function AdminEditEvent({ params }: AminEditEventProps) {
  const id = await params.id;

  const event = await getEventDetails(id);

  return (
    <div className="md:p-8 p-4">
      <h1 className="text- font-bold text-2xl">Edit Event</h1>

      <Card className="md:max-w-3xl my-4 md:p-4 py-2">
        <CardContent>
          <EditEventForm event={event} id={id} />
        </CardContent>
      </Card>
    </div>
  );
}
