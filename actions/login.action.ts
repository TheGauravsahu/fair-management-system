"use server";

import { signIn } from "@/auth";

export const signInWithCredentials = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    await signIn("credentials", {
      redirect: false,
      ...credentials,
    });

    return {
      success: true,
      message: "Sign in successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error,
    };
  }
};
