import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { listAllStalls } from "@/data/stall.data";
import Link from "next/link";

export default async function AdminStall() {
  const stalls = await listAllStalls();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Stalls</h1>

      <div className="my-8">
        <Button>
          <Link href="/admin/stalls/add">Add stalls</Link>
        </Button>
      </div>
      <div className="flex items-center justify-center md:justify-normal flex-wrap gap-4">
        {stalls.map((stall) => (
          <Card
            key={stall.id}
            className="hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out w-[21rem] h-52 hover:shadow-lg"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg hover:text-primary transition-colors">
                {stall.name}
              </CardTitle>
              <CardDescription className="text-sm hover:text-foreground transition-colors">
                {stall.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              {stall.location && (
                <p className="text-sm hover:text-primary transition-colors">
                  Location: {stall.location}
                </p>
              )}
            </CardContent>
            <CardFooter className="flex gap-2 mt-2">
              <Button variant="outline" size="sm">
                <Link href={`/admin/stalls/${stall.id}/edit`}>Edit</Link>
              </Button>
              <Button variant="outline" size="sm">
                <Link href={`/admin/stalls/${stall.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
