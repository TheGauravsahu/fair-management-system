"use server";

import { prisma } from "@/lib/prisma";
import { Stall } from "@prisma/client";

export const listAllStalls = async (): Promise<Stall[]> => {
  try {
    const stalls = await prisma.stall.findMany();
    return stalls;
  } catch (error) {
    console.log("Failed to list all stalls:", error);
    throw error;
  }
};
