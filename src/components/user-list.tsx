import type { User } from "../types/user";
import { UserCard } from "./user-card";

type UserListProps = {
  users: User[];
};

export function UserList({ users }: UserListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
