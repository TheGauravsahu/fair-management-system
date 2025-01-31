import EventDetailsCard from "@/components/events/detailsCard";
import { getEventWithStallDetails } from "@/data/event.data";

interface AdminEventDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function AdminEventDetails({
  params,
}: AdminEventDetailsProps) {
  const { id } = await params;

  const event = await getEventWithStallDetails(id);

  return (
    <div className="p-8">
      <EventDetailsCard event={event} />
    </div>
  );
}
