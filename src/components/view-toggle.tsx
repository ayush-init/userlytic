type ViewMode = "grid" | "table";

type ViewToggleProps = {
  value: ViewMode;
  onChange: (value: ViewMode) => void;
};

export function ViewToggle({ value, onChange }: ViewToggleProps) {
  return (
    <div className="inline-flex rounded-md border border-zinc-300 bg-white p-1">
      {(["grid", "table"] as const).map((mode) => (
        <button
          className={`rounded px-3 py-1.5 text-sm ${
            value === mode ? "bg-zinc-900 text-white" : "text-zinc-600"
          }`}
          key={mode}
          type="button"
          onClick={() => onChange(mode)}
        >
          {mode}
        </button>
      ))}
    </div>
  );
}
