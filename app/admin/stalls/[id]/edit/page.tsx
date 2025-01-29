import EditStallForm from "@/components/stalls/editStall-form";
import { Card, CardContent } from "@/components/ui/card";
import { getStallDetails } from "@/data/stall.data";
import React from "react";

interface AdminEditStallProps {
  params: Promise<{ id: string }>;
}
export default async function AdminEditStall({ params }: AdminEditStallProps) {
  const { id } = await params;
  const stall = await getStallDetails(id);
  
  return (
    <div className="md:p-8 p-4">
      <h1 className="text- font-bold text-2xl">Edit Event</h1>

      <Card className="md:max-w-3xl my-4 md:p-4 py-2">
        <CardContent>
          <EditStallForm stall={stall} id={id} navigateTo="/admin/stalls" />
        </CardContent>
      </Card>
    </div>
  );
}
