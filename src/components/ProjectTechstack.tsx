import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProjectTechstack = ({
  techStack,
  className,
}: {
  techStack: string[];
  className?: string;
}) => {
  if (!Array.isArray(techStack) || techStack.length === 0) {
    return null;
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-1", className)}>
      {techStack.map((t, idx) => (
        <Button
          key={t || idx}
          variant="outline"
          size="sm"
          className="pointer-events-none"
        >
          {t ? t : "-"}
        </Button>
      ))}
    </div>
  );
};

export default ProjectTechstack;
