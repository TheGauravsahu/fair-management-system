import DeleteEvent from "@/components/events/deleteEvent";
import SearchEvents from "@/components/events/searchEvents";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { listAllEvents } from "@/data/event.data";
import { formatDate } from "@/lib/utils";
import { Event } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface AdminEventsProps {
  searchParams: Promise<{ search?: string }>;
}

export default async function AdminEvents({ searchParams }: AdminEventsProps) {
  const events = await listAllEvents();
  const { search } = await searchParams;

  let filteredEvents: Event[] = events;
  if (search) {
    filteredEvents = events.filter((event) =>
      event.name.toLowerCase().includes(search)
    );
  }

  return (
    <div className="p-8">
      <div className="w-full flex items-center justify-center mb-8">
        <SearchEvents />
      </div>

      <div className="mb-8 mt-8">
        <Button>
          <Link href="/admin/events/add">Add event</Link>
        </Button>
      </div>

      <h1 className="text-2xl font-bold mb-4">Events</h1>

      <div className="w-full h-full flex items-center justify-center lg:justify-normal gap-4 flex-wrap mt-4">
        {filteredEvents.map((event) => (
          <Card
            key={event.id}
            className="hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out w-[21rem] h-80 lg:h-72 hover:shadow-lg"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg hover:text-primary transition-colors">
                {event.name}
              </CardTitle>
              <CardDescription className="text-sm hover:text-foreground transition-colors">
                {event.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm hover:text-primary transition-colors">
                Location: {event.location}
              </p>
              <p className="text-sm hover:text-primary transition-colors">
                Price: ₹{event.price}
              </p>
              <p className="text-sm hover:text-primary transition-colors">
                Status: {event.status}
              </p>
              <p className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                Duration: {formatDate(event.startDate)} -{" "}
                {formatDate(event.endDate)}
              </p>
              <p className="text-xs text-muted-foreground mt-1 hover:text-foreground transition-colors">
                Created: {formatDate(event.createdAt)}
              </p>
            </CardContent>
            <CardFooter className="flex items-center mt-2 gap-2">
              <Button variant="outline" size="sm">
                <Link href={`/admin/events/${event.id}/edit`}>Edit</Link>
              </Button>
              <DeleteEvent id={event.id} />
              <Button variant="outline" size="sm">
                <Link href={`/admin/events/${event.id}`}>View details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
