import Link from "next/link";
import type { User } from "../types/user";

type UserTableProps = {
  users: User[];
};

export function UserTable({ users }: UserTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-zinc-50 text-zinc-600">
          <tr>
            <th className="px-4 py-3 font-medium">Name</th>
            <th className="px-4 py-3 font-medium">Email</th>
            <th className="px-4 py-3 font-medium">Phone</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-zinc-50">
              <td className="px-4 py-3 text-zinc-950 font-medium">
                <Link href={`/users/${user.id}`} className="hover:underline">
                  {user.firstName} {user.lastName}
                </Link>
              </td>
              <td className="px-4 py-3 text-zinc-600">{user.email}</td>
              <td className="px-4 py-3 text-zinc-600">{user.phone ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

