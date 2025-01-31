"use client"

import React from "react";
import { Button } from "../ui/button";
import { deleteEvent } from "@/actions/event.actions";

export default function DeleteEvent({ id }: { id: string }) {
  return (
    <Button onClick={() => deleteEvent(id)} variant="outline" size="sm">
      Delete
    </Button>
  );
}
