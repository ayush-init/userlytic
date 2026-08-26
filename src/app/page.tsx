"use client";

import { useEffect, useState } from "react";

import { UserCard } from "@/components/user-card";
import { UserTable } from "@/components/user-table";
import { ViewToggle } from "@/components/view-toggle";
import { getUsers } from "@/lib/api";
import type { User } from "@/types/user";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [view, setView] = useState<"cards" | "table">("cards");

  useEffect(() => {
    async function loadUsers() {
      const data = await getUsers(12, 0);
      setUsers(data.users);
    }

    loadUsers();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              User Directory
            </h1>

            <p className="mt-2 text-muted-foreground">
              Browse and explore users from our directory.
            </p>
          </div>

          <ViewToggle view={view} onViewChange={setView} />
        </div>

        {view === "cards" ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <UserTable users={users} />
        )}
      </div>
    </main>
  );
}