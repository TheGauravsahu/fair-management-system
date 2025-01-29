import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminStall() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Stalls</h1>

      <div className="my-8">
        <Button>
          <Link href="/admin/stalls/add">Add stalls</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
    </div>
  );
}
