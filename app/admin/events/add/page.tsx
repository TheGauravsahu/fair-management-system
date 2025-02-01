import AddEventForm from "@/components/events/addEvent-form";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function AddEvent() {
  return (
    <div className="md:p-8 p-4"> 
      <h1 className="text- font-bold text-2xl">Add Event</h1>

      <Card className="md:max-w-3xl my-4 md:p-4 py-2">
        <CardContent>

        <AddEventForm />
        </CardContent>
      </Card>
    </div>
  );
}
