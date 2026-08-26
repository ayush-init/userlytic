type ErrorStateProps = {
  message?: string;
};

export function ErrorState({ message = "Something went wrong." }: ErrorStateProps) {
  return <p className="text-sm text-red-600">{message}</p>;
}
