import Link from "next/link";
import type { User } from "../types/user";

type UserCardProps = {
  user: User;
};

export function UserCard({ user }: UserCardProps) {
  return (
    <Link href={`/users/${user.id}`} className="block">
      <article className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
        <h2 className="text-lg font-semibold text-zinc-950">
          {user.firstName} {user.lastName}
        </h2>
        <p className="mt-1 text-sm text-zinc-600">{user.email}</p>
        {user.company?.name ? (
          <p className="mt-3 text-sm text-zinc-500">{user.company.name}</p>
        ) : null}
      </article>
    </Link>
  );
}

