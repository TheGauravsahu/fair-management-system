import AddStallForm from "@/components/stalls/addStall-form";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function AddStall() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Add Stall</h1>

      <Card className="max-w-4xl p-4">
        <CardContent>
          <AddStallForm navigateTo="/admin/stalls" />
        </CardContent>
      </Card>
    </div>
  );
}
