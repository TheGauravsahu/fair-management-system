import { Loader2 } from "lucide-react";
import { Button } from "./button";

interface LoadingButtonProps {
  loading: boolean;
  text: string;
  loadingText: string;
}

export default function LoadingButton({
  loading,
  text,
  loadingText,
}: LoadingButtonProps) {
  return (
    <Button disabled={loading}>
      {loading ? (
        <span className="flex items-center justify-center gap-1">
          <Loader2 className="animate-spin" /> {loadingText}
        </span>
      ) : (
        <span>{text}</span>
      )}
    </Button>
  );
}
