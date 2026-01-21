import { projectsData } from "@/lib/data/ProjectData";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Link } from "react-router-dom";
import { useMoveToTop } from "@/lib/hooks/useMoveToTop";
import Typography from "./Typography";
import Wrapper from "./Wrapper";
import ProjectTechstack from "./ProjectTechstack";

export const statusColor: Record<string, string> = {
  "In-Production": "text-green-500",
  "In-Beta": "text-blue-500",
  "In-development": "text-amber-600",
  "Npm-Package": "text-purple-500",
  Prototype: "text-gray-500",
  Experimental: "text-slate-500",
  Archived: "text-neutral-500",
  Component: "text-sky-500",
};

const ProjectCard = ({
  slice,
  numberOfSlice,
}: {
  slice?: boolean;
  numberOfSlice?: number;
}) => {
  const dataToShow = slice
    ? projectsData.slice(0, numberOfSlice ?? 5)
    : projectsData;
  return (
    <div className="flex flex-col gap-4">
      {dataToShow.map((p) => {
        if (!p) {
          return null;
        }
        return (
          <Wrapper key={p?.id || p?.name}>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <span className="tracking-tight">{p?.name}</span>
              <div className="flex items-center gap-1">
                {p?.status && (
                  <Button
                    variant="secondary"
                    size="sm"
                    className={statusColor[p?.status] + " pointer-events-none"}
                  >
                    {p?.status}
                  </Button>
                )}
                {p?.links?.map((l) => (
                  <Tooltip key={l?.name + l?.url}>
                    <TooltipTrigger asChild>
                      {l?.name === "More Information" ? (
                        <Link to={l?.url}>
                          <Button
                            onClick={useMoveToTop}
                            size="icon-sm"
                            variant="secondary"
                          >
                            {l?.icon}
                          </Button>
                        </Link>
                      ) : (
                        <Button size="icon-sm" variant="secondary">
                          <a
                            href={l?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {l?.icon}
                          </a>
                        </Button>
                      )}
                    </TooltipTrigger>
                    <TooltipContent>{l?.name}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-start gap-x-4 sm:flex-nowrap">
              <div className="text-muted-foreground flex flex-col gap-2">
                <div className="tracking-tight">
                  <span>{p?.title}</span>
                  <Typography
                    description={p.description}
                    className="opacity-70"
                  />
                </div>
                <ProjectTechstack techStack={p.techStack} />
              </div>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
};

export default ProjectCard;
