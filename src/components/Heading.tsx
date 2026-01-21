import { cn } from "@/lib/utils";
import type { ReactElement } from "react";

const Heading = ({
  className,
  name,
  icon,
}: {
  className?: string;
  name: string;
  icon?: ReactElement;
}) => {
  return (
    <div
      className={cn(
        "dark:text-primary text-secondary-foreground flex items-center gap-2 text-xl",
        className,
      )}
    >
      {icon}
      <p>{name}</p>
    </div>
  );
};

export default Heading;
