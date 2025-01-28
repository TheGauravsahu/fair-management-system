/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

interface IValues {
  name: string;
  email: string;
  password: string;
}

export async function POST(req: Request) {
  try {
    const values: IValues = await req.json();

    // Check if the user already exists
    const user = await prisma.user.findUnique({
      where: { email: values.email },
    });

    if (user) {
      return Response.json(
        { message: "User already exists" },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(values.password, 10);

    const newUser = await prisma.user.create({
      data: {
        name: values.name,
        email: values.email,
        password: hashedPassword,
      },
    });

    const { password, ...userWithoutPassword } = newUser;

    return Response.json(
      { message: "User created", user: userWithoutPassword },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log("---/api/auth/signup error---", error);
    return Response.json(
      { message: "Internal Server Error", error: error },
      {
        status: 500,
      }
    );
  }
}
