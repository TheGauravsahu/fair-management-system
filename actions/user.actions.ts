"use server";

import { EditUserFormValues } from "@/components/editUser-form";
import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const deletUser = async (id: string) => {
  try {
    await prisma.user.delete({
      where: {
        id,
      },
    });
    revalidatePath("/admin/users");
  } catch (error) {
    console.log("Error deleting user.", error);
    throw error;
  }
};

export const updateUser = async (
  id: string,
  values: EditUserFormValues
): Promise<User> => {
  try {
    const user = await prisma.user.update({
      where: { id },
      data: values,
    });
    return user;
  } catch (error) {
    console.log("Error updating user.", error);
    throw error;
  }
};
