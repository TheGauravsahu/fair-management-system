"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInWithCredentials } from "@/actions/login.action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const loginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  type LoginFormValues = z.infer<typeof loginFormSchema>;

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleSubmit(values: LoginFormValues) {
    try {
      setLoading(true);
      const res = await signInWithCredentials(values);
      console.log("--response--", res);

      form.reset();

      if (res.success) {
        setLoading(false);
        toast("Login successful");
        router.push("/");
      }
      if (!res.success) {
        setLoading(false);
        toast.error("Invalid credentials.");
      }

      setLoading(false);
      toast.error("Login successful.");
    } catch (error) {
      setLoading(false);
      toast.error("Invalid credentials.");
      console.log("Error loggin in", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        {/* email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* passoword */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading}>
          {loading ? (
            <span className="flex items-center justify-center gap-1">
              <Loader2 className="animate-spin" /> Logging In
            </span>
          ) : (
            <span>Login</span>
          )}
        </Button>
      </form>
    </Form>
  );
}
