"use server";

import { AddStallFormValues } from "@/components/stalls/addStall-form";
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
