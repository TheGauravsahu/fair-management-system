import Form from "next/form";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function SearchStalls() {
  return (
    <Form
      action="/admin/stalls"
      className="max-w-2xl mx-auto flex flex-1 items-center gap-2"
    >
      <Input placeholder="Search stalls..." name="search" />
      <Button variant="outline" type="submit">
        Search
      </Button>
    </Form>
  );
}
