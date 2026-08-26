import Link from "next/link";
import {
  ArrowLeft,
  Briefcase,
  Building2,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  User as UserIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getUser } from "@/lib/api";
import { cn } from "@/lib/utils";

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
    <main className="min-h-screen bg-muted/20 pb-16">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
        {/* Back Button */}
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "mb-6 inline-flex items-center gap-2 rounded-lg transition-colors"
          )}
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Directory</span>
        </Link>

        {/* Profile Header Card */}
        <Card className="border-border/60 shadow-xs mb-6">
          <CardHeader className="p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <Avatar className="h-20 w-20 sm:h-24 sm:w-24 rounded-full border bg-muted shrink-0">
              <AvatarImage src={user.image} alt={fullName} />
              <AvatarFallback className="text-2xl font-bold bg-muted">
                {initials}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0 space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground truncate">
                  {fullName}
                </h1>
                <Badge variant="secondary" className="w-fit mx-auto sm:mx-0 capitalize font-medium">
                  {user.role}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground">
                @{user.username} &bull; {user.company?.title ?? "Member"}
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {user.address.city}, {user.address.country}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <UserIcon className="h-3.5 w-3.5" />
                  {user.age} yrs old, {user.gender}
                </span>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Content Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <Card className="border-border/60 shadow-xs">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="font-medium text-foreground break-all">{user.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Phone</p>
                  <p className="font-medium text-foreground">{user.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Domain / Website</p>
                  <p className="font-medium text-foreground break-all">{user.domain ?? "Not available"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">University</p>
                  <p className="font-medium text-foreground">{user.university}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Company & Employment */}
          <Card className="border-border/60 shadow-xs">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                Company & Employment
              </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Building2 className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Company Name</p>
                  <p className="font-medium text-foreground">{user.company.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Department</p>
                  <p className="font-medium text-foreground">{user.company.department}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <UserIcon className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Job Title</p>
                  <p className="font-medium text-foreground">{user.company.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Address Details */}
          <Card className="border-border/60 shadow-xs md:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                Address Details
              </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Street Address</p>
                  <p className="mt-1 font-medium text-foreground">{user.address.address}</p>
                </div>

                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">City</p>
                  <p className="mt-1 font-medium text-foreground">{user.address.city}</p>
                </div>

                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">State / Postal Code</p>
                  <p className="mt-1 font-medium text-foreground">{user.address.state} ({user.address.postalCode})</p>
                </div>

                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Country</p>
                  <p className="mt-1 font-medium text-foreground">{user.address.country}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}