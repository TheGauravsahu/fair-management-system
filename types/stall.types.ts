import { Event } from "@prisma/client";

export interface IStallWithEvent {
  id: string;
  name: string;
  description: string;
  location?: string | null;
  createdAt: Date;
  updatedAt: Date;
  eventId: string;
  event: Event;
}
