import { signOut } from "@/auth";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { revalidatePath } from "next/cache";

export default function Logout() {
  const LogoutUser = async () => {
    "use server";

    try {
      await signOut({
        redirectTo: "/login",
      });

      revalidatePath("/");
    } catch (error) {
      console.log(error);

      return { success: false, message: error };
    }
  };

  return (
    <div onClick={LogoutUser} className="w-full">
      <Button className="gap-1 font-semibold w-full">
        <LogOut size={20} />
        Logout
      </Button>
    </div>
  );
}
