"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createEvent } from "@/actions/event.actions";
import { useEffect, useState } from "react";
import LoadingButton from "../ui/loading-button";
import { Event } from "@prisma/client";

const updateEventFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  startDate: z.date(),
  endDate: z.date(),
  location: z.string().min(1, "Location is required"),
  price: z.number().positive("Price must be positive"),
  status: z.enum(["active", "inactive"]).default("active"),
});

export type UpdateEventFormValues = z.infer<typeof updateEventFormSchema>;

export default function EditEventForm({ event }: { event: Event }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const updateEventForm = useForm<UpdateEventFormValues>({
    resolver: zodResolver(updateEventFormSchema),
    defaultValues: {
      name: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      location: "",
      price: 0,
      status: "active",
    },
  });

  async function handleSubmit(values: UpdateEventFormValues) {
    try {
      setLoading(true);
      // create event
      await createEvent(values);

      // Reset form after successful submission
      updateEventForm.reset();
      toast.success("Event updated successfully.");
      setLoading(false);
      router.push("/admin/events");
    } catch (error) {
      setLoading(false);
      console.error("Error updating event:", error);
      toast.error("Error updating event");
    }
  }

  useEffect(() => {
    updateEventForm.reset({
      name: event.name,
      description: event.description,
      startDate: new Date(event.startDate),
      endDate: new Date(event.endDate),
      location: event.location,
      price: event.price,
      status: event.status as "active" | "inactive",
    });
  });

  return (
    <Form {...updateEventForm}>
      <form
        onSubmit={updateEventForm.handleSubmit(handleSubmit)}
        className="space-y-8"
      >
        {/* name */}
        <FormField
          control={updateEventForm.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter event name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* description */}
        <FormField
          control={updateEventForm.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter event description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Dates */}
        <div className="flex gap-4 items-center w-full flex-col md:flex-row">
          {/* startDate */}
          <FormField
            control={updateEventForm.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    value={field.value.toISOString().split("T")[0]}
                    onChange={(e) => field.onChange(new Date(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* endDate */}
          <FormField
            control={updateEventForm.control}
            name="endDate"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>End Date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    value={field.value.toISOString().split("T")[0]}
                    onChange={(e) => field.onChange(new Date(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* location */}
        <FormField
          control={updateEventForm.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter event location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* price */}
        <FormField
          control={updateEventForm.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter event price"
                  {...field}
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* status */}
        <FormField
          control={updateEventForm.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <select {...field} className="w-full p-2 border rounded">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LoadingButton
          loading={loading}
          text="Add event"
          loadingText="Adding event"
        />
      </form>
    </Form>
  );
}
