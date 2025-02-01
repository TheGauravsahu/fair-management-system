import { Event, Stall, User } from "@prisma/client";

interface IStallWithUser extends Stall {
  user: User
}
export interface IEventWithStalls extends Event {
  stalls: IStallWithUser[];
}
