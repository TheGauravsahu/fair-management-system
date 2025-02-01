"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
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
import { useEffect, useState } from "react";
import { Event, User } from "@prisma/client";
import { listAllEvents } from "@/data/event.data";
import LoadingButton from "../ui/loading-button";
import { updateStall } from "@/actions/stall.actions";
import { IStallWithEvent } from "@/types/stall.types";

interface EditStallFormProps {
  navigateTo: string;
  users?: User[];
  id: string;
  stall: IStallWithEvent;
}

const editStallFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  location: z.string().optional(),
  eventId: z.string().min(1, "Event ID is required"),
  userId: z.string().min(1, "User ID is required"),
});

export type EditStallFormValues = z.infer<typeof editStallFormSchema>;

export default function EditStallForm({
  navigateTo,
  id,
  stall,
  users,
}: EditStallFormProps) {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);

  const router = useRouter();

  const editStallForm = useForm<EditStallFormValues>({
    resolver: zodResolver(editStallFormSchema),
    defaultValues: {
      name: "",
      description: "",
      location: "",
      eventId: "",
      userId: "",
    },
  });

  // fetching events
  useEffect(() => {
    const getEvents = async () => {
      const eventsData = await listAllEvents();
      setEvents(eventsData);
    };

    getEvents();
  }, [id]);

  // reset form values
  useEffect(() => {
    editStallForm.reset({
      name: stall.name,
      description: stall.description,
      location: stall.description,
      eventId: stall.eventId,
      userId: stall.userId,
    });
  }, [editStallForm, stall]);

  async function handleSubmit(values: EditStallFormValues) {
    try {
      setLoading(true);
      await updateStall(values, id);
      editStallForm.reset();
      toast.success("Successfully edited stall.");
      setLoading(false);
      router.push(navigateTo);
    } catch (error) {
      setLoading(false);
      console.log("Error editing stall:", error);
      toast.error("Failed to edit stall.");
    }
  }

  const pathname = usePathname();
  const isAdminAddingStall = pathname.startsWith("/admin")

  return (
    <Form {...editStallForm}>
      <form
        onSubmit={editStallForm.handleSubmit(handleSubmit)}
        className="space-y-8"
      >
        {/* name */}
        <FormField
          control={editStallForm.control}
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
          control={editStallForm.control}
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
          control={editStallForm.control}
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

        {/* event */}
        <FormField
          control={editStallForm.control}
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

        {/* users list (admin only) */}
        {isAdminAddingStall && (
          <FormField
            control={editStallForm.control}
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
          text="Save Changes"
          loadingText="Saving"
        />
      </form>
    </Form>
  );
}
