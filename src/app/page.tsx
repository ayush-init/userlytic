import { UserCard } from "../components/user-card";
import { getUsers } from "../lib/api";

export default async function Home() {
  const data = await getUsers(12, 0);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            User Directory
          </h1>

          <p className="mt-2 text-muted-foreground">
            Browse and explore users from our directory.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </main>
  );
}