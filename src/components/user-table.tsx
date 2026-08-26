import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { User } from "@/types/user";

interface UserTableProps {
  users: User[];
}

export function UserTable({ users }: UserTableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-xl border bg-card shadow-xs">
      <Table className="min-w-[600px] w-full text-left text-sm">
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead className="hidden sm:table-cell">Email</TableHead>
            <TableHead className="hidden md:table-cell">Location</TableHead>
            <TableHead className="hidden sm:table-cell">Role</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => {
            const fullName = `${user.firstName} ${user.lastName}`;
            const initials = `${user.firstName[0]}${user.lastName[0]}`;

            return (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 shrink-0">
                      <AvatarImage src={user.image} alt={fullName} />
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>

                    <div className="min-w-0">
                      <p className="font-medium text-foreground truncate">{fullName}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        @{user.username}
                      </p>
                      <p className="text-xs text-muted-foreground sm:hidden mt-0.5 truncate">
                        {user.email} &bull; {user.role}
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell className="hidden sm:table-cell">{user.email}</TableCell>

                <TableCell className="hidden md:table-cell">
                  {user.address.city}, {user.address.country}
                </TableCell>

                <TableCell className="hidden sm:table-cell">{user.role}</TableCell>

                <TableCell className="text-right">
                  <Link
                    href={`/users/${user.id}`}
                    className={cn(buttonVariants({ size: "sm" }))}
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}