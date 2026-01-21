import { cn } from "@/lib/utils";

const Typography = ({
  description,
  className,
}: {
  description?: string;
  className?: string;
}) => {
  return (
    <p
      className={cn("text-muted-foreground text-sm tracking-tight", className)}
    >
      {description}
    </p>
  );
};

export default Typography;
