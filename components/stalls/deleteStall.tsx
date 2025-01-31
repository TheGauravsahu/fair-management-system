"use client";

import { deleteStall } from "@/actions/stall.actions";
import { Button } from "../ui/button";

export default function DeleteStall({ id }: { id: string }) {
  return (
    <Button variant="outline" size="sm" onClick={() => deleteStall(id)}>
      Delete
    </Button>
  );
}
