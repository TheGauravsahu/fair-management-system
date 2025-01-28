import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const values = await req.json();

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
  } catch (error: any) {
    console.log("---/api/auth/signup error---", error.message);
    return Response.json(
      { message: "Internal Server Error", error: error },
      {
        status: 500,
      }
    );
  }
}
