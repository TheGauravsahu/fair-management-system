import { EditUserForm } from "@/components/editUser-form";
import { Card, CardContent } from "@/components/ui/card";
import { getUserDetails } from "@/data/user.data";
import React from "react";

interface AdminEditUserProps {
  params: Promise<{ id: string }>;
}
export default async function AdminEditUser({ params }: AdminEditUserProps) {
  const { id } = await params;

  const user = await getUserDetails(id);

  return (
    <div className="md:p-8 p-4">
      <h1 className="text- font-bold text-2xl">Edit User</h1>

      <Card className="md:max-w-3xl my-4 md:p-4 py-2">
        <CardContent>
          <EditUserForm user={user} id={id} />
        </CardContent>
      </Card>
    </div>
  );
}
