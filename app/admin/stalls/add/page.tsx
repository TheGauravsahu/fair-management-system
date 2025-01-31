import AddStallForm from "@/components/stalls/addStall-form";
import { Card, CardContent } from "@/components/ui/card";
import { listAllUsers } from "@/data/user.data";
import React from "react";

export default async function AddStall() {
  const users = await listAllUsers()

  return (
    <div className="md:p-8">
      <h1 className="text-2xl font-bold mb-4">Add Stall</h1>

      <Card className="max-w-4xl p-4">
        <CardContent>
          <AddStallForm navigateTo="/admin/stalls" users={users} />
        </CardContent>
      </Card>
    </div>
  );
}
