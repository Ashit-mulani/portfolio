import { SiNpm } from "react-icons/si";
import { Button } from "./ui/button";
import { useCopy } from "@/lib/hooks/useCopy";
import { IconCopy } from "@tabler/icons-react";

const CommandCard = ({ command }: { command: string }) => {
  return (
    <div className="flex items-center justify-between border border-dashed p-2">
      <div className="flex items-center gap-3">
        <i className="text-muted-foreground p-1">
          <SiNpm size={20} />
        </i>
        <span className="dark:text-primary text-xs">{command}</span>
      </div>
      <Button
        onClick={(e) => (e.stopPropagation(), useCopy(`${command}`))}
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
      >
        <IconCopy />
      </Button>
    </div>
  );
};

export default CommandCard;
