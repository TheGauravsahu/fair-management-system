import { signOut } from "@/auth";

export async function POST() {
  try {
    await signOut({
      redirect: false,
    });

    return Response.json(
      { message: "User logged out successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Failed to log out." }, { status: 500 });
  }
}
