import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getUser } from "@/lib/api";

interface UserDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function UserDetailsPage({
  params,
}: UserDetailsPageProps) {
  const { id } = await params;
  const user = await getUser(id);

  const fullName = `${user.firstName} ${user.lastName}`;
  const initials = `${user.firstName[0]}${user.lastName[0]}`;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/">← Back to Users</Link>
        </Button>

        <Card>
          <CardHeader>
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user.image} alt={fullName} />
                <AvatarFallback className="text-xl">
                  {initials}
                </AvatarFallback>
              </Avatar>

              <div>
                <h1 className="text-2xl font-bold">{fullName}</h1>

                <p className="text-muted-foreground">
                  @{user.username}
                </p>

                <Badge className="mt-2" variant="secondary">
                  {user.role}
                </Badge>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <section>
              <h2 className="font-semibold">Contact Information</h2>

              <Separator className="my-3" />

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="mt-1">{user.email}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="mt-1">{user.phone}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Website</p>
                  <p className="mt-1">{user.domain ?? "Not available"}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">University</p>
                  <p className="mt-1">{user.university}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-semibold">Address</h2>

              <Separator className="my-3" />

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="mt-1">{user.address.address}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">City</p>
                  <p className="mt-1">{user.address.city}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">State</p>
                  <p className="mt-1">{user.address.state}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Country</p>
                  <p className="mt-1">{user.address.country}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-semibold">Company</h2>

              <Separator className="my-3" />

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Company
                  </p>
                  <p className="mt-1">{user.company.name}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Department
                  </p>
                  <p className="mt-1">{user.company.department}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Job Title
                  </p>
                  <p className="mt-1">{user.company.title}</p>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}