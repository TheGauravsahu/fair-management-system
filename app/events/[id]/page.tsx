import EventDetailsCard from "@/components/events/detailsCard";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { getEventWithStallDetails } from "@/data/event.data";
import React from "react";

interface EventDetailsProps {
  params: Promise<{ id: string }>;
}
export default async function EventDetails({ params }: EventDetailsProps) {
  const { id } = await params;

  const event = await getEventWithStallDetails(id);
  return (
    <div className="w-full p-8">
      <NavBar />
      <div className="mt-32">
        <EventDetailsCard event={event} />
      </div>
    </div>
  );
}
