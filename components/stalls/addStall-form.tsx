"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { z } from "zod";
import LoadingButton from "../ui/loading-button";
import { addStall } from "@/actions/stall.actions";
import { Event, User } from "@prisma/client";
import { listAllEvents } from "@/data/event.data";

const addStallFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  location: z.string().optional(),
  userId: z.string().min(1, "User ID is required."),
  eventId: z.string().min(1, "Event ID is required"),
});

export type AddStallFormValues = z.infer<typeof addStallFormSchema>;

export default function AddStallForm({
  navigateTo,
  users,
  eventId,
  userId,
}: {
  navigateTo: string;
  users?: User[];
  eventId?: string;
  userId?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const router = useRouter();

  const addStallForm = useForm<AddStallFormValues>({
    resolver: zodResolver(addStallFormSchema),
    defaultValues: {
      name: "",
      description: "",
      location: "",
      eventId: eventId ?? "",
      userId: userId ?? "",
    },
  });

  async function handleSubmit(values: AddStallFormValues) {
    try {
      setLoading(true);
      await addStall(values);

      addStallForm.reset();
      setLoading(false);
      router.push(navigateTo);
    } catch (error) {
      setLoading(false);
      console.log("Error adding stall.", error);
      toast.error("Error adding stall.");
    }
  }

  const pathname = usePathname();
  const isAdminAddingStall = pathname === "/admin/stalls/add";

  // fetching events
  useEffect(() => {
    const getEvents = async () => {
      const eventsData = await listAllEvents();
      setEvents(eventsData);
    };

    getEvents();
  }, [addStallForm, eventId, userId, isAdminAddingStall]);

  return (
    <Form {...addStallForm}>
      <form
        onSubmit={addStallForm.handleSubmit(handleSubmit)}
        className="space-y-8"
      >
        {/* name */}
        <FormField
          control={addStallForm.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter stall name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* description */}
        <FormField
          control={addStallForm.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe your stall." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* location */}
        <FormField
          control={addStallForm.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter stall location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* events list (admin only) */}
        {isAdminAddingStall && (
          <FormField
            control={addStallForm.control}
            name="eventId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event</FormLabel>
                <FormControl>
                  <select {...field} className="w-full p-2 border rounded">
                    {events.map((event) => (
                      <option key={event.id} value={event.id}>
                        {event.name}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {/* users list (admin only) */}
        {isAdminAddingStall && (
          <FormField
            control={addStallForm.control}
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User</FormLabel>
                <FormControl>
                  <select {...field} className="w-full p-2 border rounded">
                    {users?.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.name} - {user.role}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <LoadingButton
          loading={loading}
          text="Add stall"
          loadingText="Adding stall"
        />
      </form>
    </Form>
  );
}
