"use client";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { deletUser } from "@/actions/user.actions";

export default function DeleteUser({ id }: { id: string }) {
  return (
    <Button
      onClick={() => deletUser(id)}
      variant="destructive"
      className="gap-1"
    >
      <span className="hidden lg:block">Delete</span>
      <Trash size={16} />
    </Button>
  );
}
