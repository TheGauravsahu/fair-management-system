import { getStallDetails } from "@/data/stall.data";
import { formatDate } from "@/lib/utils";

interface AdminStallDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function AdminStallDetails({
  params,
}: AdminStallDetailsProps) {
  const { id } = await params;
  const stall = await getStallDetails(id);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-secondary rounded-2xl shadow-sm border p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold ">{stall.name}</h1>
        <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
        Active
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
        <div className="space-y-6">
          <div>
          <label className="text-sm text-gray-500 font-medium">Description</label>
          <p className="mt-2 ">{stall.description}</p>
          </div>
          
          <div>
          <label className="text-sm text-gray-500 font-medium">Location</label>
          <p className="mt-2 ">{stall.location || "Not specified"}</p>
          </div>

          <div className="flex gap-6">
          <div>
            <label className="text-sm text-gray-500 font-medium">Created</label>
            <p className="mt-2 ">{formatDate(stall.createdAt)}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500 font-medium">Updated</label>
            <p className="mt-2 ">{formatDate(stall.updatedAt)}</p>
          </div>
          </div>
        </div>
        </div>

        <div className="bg-primary/10 rounded-xl p-6">
        <h2 className="text-lg font-medium  mb-4">Event Summary</h2>
        <div className="space-y-4">
          <div>
          <label className="text-sm text-gray-500 font-medium">Event</label>
          <p className="mt-2 ">{stall.event.name}</p>
          </div>
          <div>
          <label className="text-sm text-gray-500 font-medium">Duration</label>
          <p className="mt-2 ">
            {formatDate(stall.event.startDate)} - {formatDate(stall.event.endDate)}
          </p>
          </div>
          <div>
          <label className="text-sm text-gray-500 font-medium">Price</label>
          <p className="mt-2 ">${stall.event.price}</p>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}
