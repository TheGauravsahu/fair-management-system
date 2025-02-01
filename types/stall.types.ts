import { Event, Stall } from "@prisma/client";

export interface IStallWithEvent extends Stall {
  event: Event;
}
