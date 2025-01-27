import { Card } from "@/components/ui/card";
import { Users, ShoppingCart, DollarSign, Activity } from "lucide-react";

export default function Admin() {
  const data = [
    { name: "Jan", total: 1200 },
    { name: "Feb", total: 2100 },
    { name: "Mar", total: 1800 },
    { name: "Apr", total: 2400 },
    { name: "May", total: 2700 },
  ];

  return (
    <main className="flex-1 p-8 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-gray-500" />
            <h3 className="text-sm font-medium">Total Users</h3>
          </div>
          <p className="text-2xl font-bold">2,543</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-4 w-4 text-gray-500" />
            <h3 className="text-sm font-medium">Total Orders</h3>
          </div>
          <p className="text-2xl font-bold">12,789</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-gray-500" />
            <h3 className="text-sm font-medium">Revenue</h3>
          </div>
          <p className="text-2xl font-bold">$45,231</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-gray-500" />
            <h3 className="text-sm font-medium">Active Now</h3>
          </div>
          <p className="text-2xl font-bold">573</p>
        </Card>
      </div>
    </main>
  );
}
