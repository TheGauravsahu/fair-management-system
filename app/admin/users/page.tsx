import { auth } from "@/auth";
import { listAllUsers } from "@/data/user.data";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function AdminUsers() {
  const users = await listAllUsers();
  const session = await auth();

  const filteredUsers = users.filter(
    (user) => user.email != session?.user.email
  );

  return (
    <div className="p-8">
      <Table>
        <TableCaption>A list Users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead className="w-[100px]">name</TableHead>
            <TableHead>email</TableHead>
            <TableHead>role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
