"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useRouter } from "next/navigation";
import LoadingButton from "./ui/loading-button";
import { useEffect, useState } from "react";
import { User } from "@prisma/client";
import { updateUser } from "@/actions/user.actions";

const editUserFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

export type EditUserFormValues = z.infer<typeof editUserFormSchema>;

export function EditUserForm({ id, user }: { id: string; user: User }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<EditUserFormValues>({
    resolver: zodResolver(editUserFormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function handleSubmit(values: EditUserFormValues) {
    try {
      setLoading(true);
      await updateUser(id, values);
      form.reset();
      setLoading(false);
      router.push("/admin/users");
    } catch (error) {
      setLoading(false);
      console.error("Error editing user:", error);
    }
  }

  useEffect(() => {
    form.reset({
      name: user.name,
      email: user.email,
    });
  }, [form, user]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        {/* name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LoadingButton loading={loading} text="Update" loadingText="Updating" />
      </form>
    </Form>
  );
}
