type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  return (
    <nav className="flex items-center justify-between gap-3">
      <button
        className="rounded-md border border-zinc-300 px-3 py-2 text-sm disabled:opacity-50"
        type="button"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      >
        Previous
      </button>
      <span className="text-sm text-zinc-600">
        Page {page} of {totalPages}
      </span>
      <button
        className="rounded-md border border-zinc-300 px-3 py-2 text-sm disabled:opacity-50"
        type="button"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </nav>
  );
}
