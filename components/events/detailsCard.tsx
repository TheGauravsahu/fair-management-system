import { formatDate } from "@/lib/utils";
import { IEventWithStall } from "@/types/event.types";
import React from "react";

export default function EventDetailsCard({
  event,
}: {
  event: IEventWithStall;
}) {
  return (
    <div className="bg-secondary rounded-2xl shadow-sm border p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-semibold">{event.name}</h1>
          <p className="text-gray-600 mt-2">{event.description}</p>
        </div>
        <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium capitalize">
          {event.status}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <label className="text-sm text-gray-500 font-medium">
            Date & Time
          </label>
          <p className="mt-2">
            {formatDate(event.startDate)} - {formatDate(event.endDate)}
          </p>
        </div>
        <div>
          <label className="text-sm text-gray-500 font-medium">Location</label>
          <p className="mt-2">{event.location}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500 font-medium">Price</label>
          <p className="mt-2">${event.price.toFixed(2)}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500 font-medium">
            Number of Stalls
          </label>
          <p className="mt-2">{event.stalls.length}</p>
        </div>
      </div>

      <div className="border-t pt-6">
        <h2 className="text-lg font-medium mb-4">Stalls</h2>
        <div className="grid grid-cols-1 gap-4">
          {event.stalls.map((stall) => (
            <div key={stall.id} className="bg-primary/10 rounded-xl p-6">
              <h4 className="font-medium">{stall.name}</h4>
              <p className="text-gray-500 text-sm mt-1">{stall.description}</p>
              {stall.location && (
                <p className="text-gray-400 text-sm mt-2">
                  Location: {stall.location}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
