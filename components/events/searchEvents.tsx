import Form from "next/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function SearchEvents() {
  return (
    <Form action="/admin/events" className="max-w-2xl mx-auto flex flex-1 items-center gap-2">
      <Input placeholder="Search events..." name="search" />
      <Button variant="outline" type="submit">Search</Button>
    </Form>
  );
}
