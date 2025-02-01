import { getEventWithStallDetails } from "@/data/event.data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { NavBar } from "@/components/ui/tubelight-navbar";

interface StallsProps {
  params: Promise<{ id: string }>;
}

export default async function Stalls({ params }: StallsProps) {
  const { id } = await params;
  const event = await getEventWithStallDetails(id);
  const stalls = event.stalls;

  return (
    <>
      <NavBar />
      <Card className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto mb-8 mt-32 p-2">
        <h1 className="font-semibold ml-1 text-2xl p-4">
          All stalls - {event.name}
        </h1>
        <CardContent className="w-full h-full">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Owner</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stalls.map((stall) => (
                <TableRow key={stall.id}>
                  <TableCell className="font-medium">{stall.name}</TableCell>
                  <TableCell>{stall.location || "Not mentioned"} </TableCell>
                  <TableCell className="max-w-[200px]">
                    {stall.description}
                  </TableCell>
                  <TableCell className="text-right">
                    {stall.user.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
