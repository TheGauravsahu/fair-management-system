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

export const getStallDetails = async (id: string): Promise<Stall> => {
  try {
    const stall = await prisma.stall.findFirstOrThrow({
      where: {
        id,
      },
    });
    return stall;
  } catch (error) {
    console.log("Failed to get stall details:", error);
    throw error;
  }
};
