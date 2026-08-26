import { Users } from "lucide-react";

export function EmptyState() {
    return (
        <div className="flex min-h-60 flex-col items-center justify-center rounded-xl border border-dashed p-8 text-center">
            <Users className="mb-4 h-10 w-10 text-muted-foreground" />

            <h2 className="text-lg font-semibold">No users found</h2>

            <p className="mt-1 text-sm text-muted-foreground">
                There are currently no users to display.
            </p>
        </div>
    );
}