import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { User } from "../types/user";

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  const fullName = `${user.firstName} ${user.lastName}`;
  const initials = `${user.firstName[0]}${user.lastName[0]}`;

  return (
    <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage src={user.image} alt={fullName} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>

          <div className="min-w-0">
            <h2 className="truncate font-semibold">{fullName}</h2>

            <p className="truncate text-sm text-muted-foreground">
              @{user.username}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Email
          </p>

          <p className="truncate text-sm">{user.email}</p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Location
          </p>

          <p className="text-sm">
            {user.address.city}, {user.address.country}
          </p>
        </div>

        <Badge variant="secondary">{user.role}</Badge>
      </CardContent>

      <CardFooter>
        <Link
          href={`/users/${user.id}`}
          className={cn(buttonVariants({ variant: "default" }), "w-full text-center")}
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
}