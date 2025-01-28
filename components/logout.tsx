"use client";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const LogoutUser = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });

      console.log(res);

      if (res.ok) {
        toast.success("Logged out successfully.");
        router.push("/login");
      }
    } catch (error) {
      toast.error(`Failed to logout ${error}`);
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
