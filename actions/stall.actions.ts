"use server";

import { AddStallFormValues } from "@/components/stalls/addStall-form";
import { EditStallFormValues } from "@/components/stalls/editStall-form";
import { prisma } from "@/lib/prisma";
import { Stall } from "@prisma/client";

export const addStall = async (values: AddStallFormValues): Promise<Stall> => {
  try {
    const stall = await prisma.stall.create({
      data: values,
    });
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
