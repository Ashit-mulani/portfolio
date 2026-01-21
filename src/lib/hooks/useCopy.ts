import { toast } from "sonner";

export function useCopy(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast.success("Copied to clipboard");
    })
    .catch(() => {
      toast.error("Failed to copy");
    });
}
