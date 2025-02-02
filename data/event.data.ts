"use server";

import { prisma } from "@/lib/prisma";
import { IEventWithStalls } from "@/types/event.types";
import { Event } from "@prisma/client";

export const listAllEvents = async (): Promise<Event[]> => {
  try {
    const events = await prisma.event.findMany();
    return events;
  } catch (error) {
    console.log("Failed to list all events", error);
    throw error;
  }
};

export const getEventDetails = async (id: string): Promise<Event> => {
  try {
    const event = await prisma.event.findFirstOrThrow({
      where: {
        id,
      },
    });
    return event;
  } catch (error) {
    console.log("Failed to get event details.", error);
    throw error;
  }
};

export const getEventWithStallDetails = async (
  id: string
): Promise<IEventWithStalls> => {
  try {
    const event = await prisma.event.findFirstOrThrow({
      where: {
        id,
      },
      include: {
        stalls: {
          include: {
            user: true,
          },
        },
      },
    });
    return event;
  } catch (error) {
    console.log("Failed to get event details.", error);
    throw error;
  }
};
