"use server";

import { AddEventFormValues } from "@/components/events/addEvent-form";
import { prisma } from "@/lib/prisma";
import { Event } from "@prisma/client";


export const createEvent = async (
  values: AddEventFormValues
): Promise<Event> => {
  try {
    const event = await prisma.event.create({
      data: values,
    });
    return event;
  } catch (error) {
    console.log("Error creating event.", error);
    throw error;
  }
};
