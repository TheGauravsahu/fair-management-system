import { Event, Stall } from "@prisma/client";

export interface IEventWithStall extends Event {
  stalls: Stall[];
}
