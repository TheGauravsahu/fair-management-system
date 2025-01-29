"use server";

import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export const listAllUsers = async (): Promise<User[]> => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.log("Failed to list all users", error);
    throw error;
  }
};
