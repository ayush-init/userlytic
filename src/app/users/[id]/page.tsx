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
      <h1 className="text-3xl font-semibold text-zinc-950">{user.name}</h1>
      <div className="mt-6 space-y-2 text-zinc-700">
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone ?? "-"}</p>
        <p>Website: {user.website ?? "-"}</p>
        <p>Company: {user.company?.name ?? "-"}</p>
      </div>
    </main>
  );
}
