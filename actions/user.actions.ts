"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deletUser = async (id: string) => {
  try {
    await prisma.user.delete({
      where: {
        id,
      },
    });
    revalidatePath("/admin/users")
  } catch (error) {
    console.log("Error deleting user.", error);
    throw error;
  }
};
