"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

import { EmptyState } from "@/components/empty-state";
import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { UserCard } from "@/components/user-card";
import { UserTable } from "@/components/user-table";
import { ViewToggle } from "@/components/view-toggle";
import { getUsers } from "@/lib/api";
import type { User } from "@/types/user";
import { toast } from "sonner";

const STORAGE_KEY = "user_directory_view";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): "cards" | "table" {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "cards" || saved === "table") {
      return saved;
    }
  }
  return "cards";
}

function getServerSnapshot(): "cards" | "table" {
  return "cards";
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const syncedView = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const [localView, setLocalView] = useState<"cards" | "table" | null>(null);
  const view = localView ?? syncedView;

  const handleViewChange = (newView: "cards" | "table") => {
    setLocalView(newView);
    localStorage.setItem(STORAGE_KEY, newView);
    window.dispatchEvent(new Event("storage"));
  };

  const loadUsers = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);

    try {
      const data = await getUsers(12, 0);
      setUsers(data.users);
    } catch {
      setHasError(true);
      toast.error("Unable to load users", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

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

          <ViewToggle view={view} onViewChange={handleViewChange} />
        </div>

        {isLoading ? (
          <LoadingState view={view} />
        ) : hasError ? (
          <ErrorState onRetry={loadUsers} />
        ) : (
          <>
            {users.length === 0 ? (
              <EmptyState />
            ) : view === "cards" ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {users.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            ) : (
              <UserTable users={users} />
            )}
          </>
        )}
      </div>
    </main>
  );
}