"use client";

import { Button } from "@/components/ui/button";

interface ViewToggleProps {
  view: "cards" | "table";
  onViewChange: (view: "cards" | "table") => void;
}

export function ViewToggle({
  view,
  onViewChange,
}: ViewToggleProps) {
  return (
    <div className="flex rounded-lg border p-1">
      <Button
        type="button"
        size="sm"
        variant={view === "cards" ? "default" : "ghost"}
        onClick={() => onViewChange("cards")}
      >
        Cards
      </Button>

      <Button
        type="button"
        size="sm"
        variant={view === "table" ? "default" : "ghost"}
        onClick={() => onViewChange("table")}
      >
        Table
      </Button>
    </div>
  );
}