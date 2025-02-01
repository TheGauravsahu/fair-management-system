"use server";

import { AddStallFormValues } from "@/components/stalls/addStall-form";
import { EditStallFormValues } from "@/components/stalls/editStall-form";
import { prisma } from "@/lib/prisma";
import { Stall } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const addStall = async (values: AddStallFormValues): Promise<Stall> => {
  try {
    console.log("--values---", values);
    if (!values || typeof values !== "object") {
      console.error("Invalid stall data provided:", values);
      throw new Error("Invalid stall data provided.");
    }

    const stall = await prisma.stall.create({
      data: {
        name: values.name,
        description: values.description,
        location: values.location || null, // Ensure null instead of undefined
        userId: values.userId,
        eventId: values.eventId,
      },
    });

    revalidatePath("/events/stalls");
    revalidatePath("/admin/stalls");
    return stall;
  } catch (error) {
    console.log("Error adding stall:", error);
    throw error;
  }
};

export const updateStall = async (
  values: EditStallFormValues,
  id: string
): Promise<Stall> => {
  try {
    if (!values || typeof values !== "object") {
      throw new Error("Invalid stall data provided.");
    }
    const stall = await prisma.stall.update({
      where: {
        id,
      },
      data: values,
    });
    return stall;
  } catch (error) {
    console.log("Error updating stall:", error);
    throw error;
  }
};

export const deleteStall = async (id: string) => {
  try {
    await prisma.stall.delete({
      where: { id },
    });
    revalidatePath("/admin/stalls");
  } catch (error) {
    console.log("Error deleting stall:", error);
    throw error;
  }
};
