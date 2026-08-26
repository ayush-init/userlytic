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
            <div
              key={user.id}
              className="rounded-xl border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h2 className="font-semibold">
                    {user.firstName} {user.lastName}
                  </h2>

                  <p className="text-sm text-muted-foreground">
                    @{user.username}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-2 text-sm">
                <p>{user.email}</p>
                <p className="text-muted-foreground">
                  {user.address.city}, {user.address.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}