type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-900"
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search users"
    />
  );
}
