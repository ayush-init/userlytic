"use client";

import { AlertCircle, RefreshCw } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  onRetry: () => void;
}

export function ErrorState({ onRetry }: ErrorStateProps) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />

      <AlertTitle>Unable to load users</AlertTitle>

      <AlertDescription className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span>
          Something went wrong while fetching users. Please try again.
        </span>

        <Button
          variant="outline"
          size="sm"
          onClick={onRetry}
          className="w-fit"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
      </AlertDescription>
    </Alert>
  );
}