"use server";

import { prisma } from "@/lib/prisma";
import { IStallWithEvent } from "@/types/stall.types";
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

export const getStallDetails = async (id: string): Promise<IStallWithEvent> => {
  try {
    const stall = await prisma.stall.findFirstOrThrow({
      where: {
        id,
      },
      include: {
        event: true,
      },
    });
    return stall;
  } catch (error) {
    console.log("Failed to get stall details:", error);
    throw error;
  }
};

export const getUserStalls = async (id: string): Promise<Stall> => {
  try {
    const stall = await prisma.stall.findFirstOrThrow({
      where: {
        userId: id,
      },
    });
    return stall;
  } catch (error) {
    console.log("Failed to get user stalls:", error);
    throw error;
  }
};

export const doesUserHasStalls = async (id: string): Promise<boolean> => {
  const stalls = await getUserStalls(id);

  if (stalls) {
    return true;
  } else {
    return false;
  }
};
