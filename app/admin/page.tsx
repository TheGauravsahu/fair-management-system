import { Card } from "@/components/ui/card";
import { Users, ShoppingCart, DollarSign, Activity } from "lucide-react";
import {
  getTotalUsers,
  getTotalEvents,
  getTotalRevenue,
  getActiveEvents,
} from "@/data/admin-dashboard.data";

export default async function Admin() {
  const totalUsers = await getTotalUsers();
  const totalEvents = await getTotalEvents();
  const revenue = await getTotalRevenue();
  const activeEvents = await getActiveEvents();

  return (
    <main className="flex-1 p-8 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-gray-500" />
            <h3 className="text-sm font-medium">Total Users</h3>
          </div>
          <p className="text-2xl font-bold">{totalUsers}</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-4 w-4 text-gray-500" />
            <h3 className="text-sm font-medium">Total Events</h3>
          </div>
          <p className="text-2xl font-bold">{totalEvents}</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-gray-500" />
            <h3 className="text-sm font-medium">Revenue</h3>
          </div>
          <p className="text-2xl font-bold">${revenue.toLocaleString()}</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-gray-500" />
            <h3 className="text-sm font-medium">Active Events</h3>
          </div>
          <p className="text-2xl font-bold">{activeEvents}</p>
        </Card>
      </div>
    </main>
  );
}
