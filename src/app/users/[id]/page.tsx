import Link from "next/link";
import { getUser } from "../../../lib/api";

type UserPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function UserPage({ params }: UserPageProps) {
  const { id } = await params;
  const user = await getUser(id);

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-10">
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-zinc-500 hover:text-zinc-900"
      >
        &larr; Back to directory
      </Link>
      <div className="flex items-center gap-4">
        {user.image && (
          <img
            src={user.image}
            alt={`${user.firstName} ${user.lastName}`}
            className="h-20 w-20 rounded-full object-cover border"
          />
        )}
        <div>
          <h1 className="text-3xl font-semibold text-zinc-950">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-sm text-zinc-500">@{user.username}</p>
        </div>
      </div>
      <div className="mt-6 space-y-2 text-zinc-700 border-t pt-4">
        <p><span className="font-medium">Email:</span> {user.email}</p>
        <p><span className="font-medium">Phone:</span> {user.phone ?? "-"}</p>
        <p><span className="font-medium">Role:</span> {user.role ?? "-"}</p>
        <p><span className="font-medium">Company:</span> {user.company?.name ?? "-"}</p>
        {user.address && (
          <p><span className="font-medium">Location:</span> {user.address.city}, {user.address.country}</p>
        )}
      </div>
    </main>
  );
}

