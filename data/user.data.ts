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

export const getUserDetails = async (id: string): Promise<User> => {
  try {
    const user = await prisma.user.findFirstOrThrow({
      where: { id },
    });
    return user;
  } catch (error) {
    console.log("Error getting user details.", error);
    throw error;
  }
};
