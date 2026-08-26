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
    <div className="grid grid-cols-2 w-full sm:w-auto sm:flex items-center rounded-lg border bg-muted/20 p-1 gap-1">
      <Button
        type="button"
        size="sm"
        variant={view === "cards" ? "default" : "ghost"}
        onClick={() => onViewChange("cards")}
        className="w-full sm:w-auto justify-center font-medium"
      >
        Cards
      </Button>

      <Button
        type="button"
        size="sm"
        variant={view === "table" ? "default" : "ghost"}
        onClick={() => onViewChange("table")}
        className="w-full sm:w-auto justify-center font-medium"
      >
        Table
      </Button>
    </div>
  );
}