import { projectsData } from "@/lib/data/ProjectData";
import Heading from "./Heading";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Link } from "react-router-dom";
import { useMoveToTop } from "@/lib/hooks/useMoveToTop";
import { IconArrowForwardUpDouble } from "@tabler/icons-react";

const statusColor: Record<string, string> = {
  "In-Production": "text-green-500",
  "In-Beta": "text-blue-500",
  "In-development": "text-amber-600",
  "Open-source": "text-purple-500",
  Prototype: "text-gray-500",
  Experimental: "text-slate-500",
  Archived: "text-neutral-500",
};

const Projects = () => {
  return (
    <div className="flex flex-col gap-2">
      <Heading name="Work Highlights" />
      <div className="flex flex-col gap-4">
        {projectsData.slice(0, 5).map((p) => {
          if (!p) {
            return null;
          }
          return (
            <div
              className="flex flex-col gap-2 overflow-hidden border border-dashed p-2 sm:p-4"
              key={p.id || p.name}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                {/* <span className="text-muted-foreground text-sm tracking-tight">
                  {p?.type}
                </span> */}
                <span className="tracking-tight">{p.name}</span>
                <div className="flex items-center gap-1">
                  {p.status && (
                    <Button
                      variant="secondary"
                      size="sm"
                      className={statusColor[p.status] + " pointer-events-none"}
                    >
                      {p.status}
                    </Button>
                  )}
                  {p.links?.map((l) => (
                    <Tooltip key={l.name + l.url}>
                      <TooltipTrigger>
                        {l.name === "More Information" ? (
                          <Link to={l.url}>
                            <Button
                              onClick={useMoveToTop}
                              size="icon-sm"
                              variant="secondary"
                            >
                              {l.icon}
                            </Button>
                          </Link>
                        ) : (
                          <a
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button size="icon-sm" variant="secondary">
                              {l.icon}
                            </Button>
                          </a>
                        )}
                      </TooltipTrigger>
                      <TooltipContent>{l.name}</TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-start gap-x-4 sm:flex-nowrap">
                <div className="text-muted-foreground flex flex-col gap-2">
                  <div className="tracking-tight">
                    <span>{p.title}</span>
                    <p className="text-sm opacity-60">{p.description}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-1">
                    {p.techStack.map((t) => (
                      <Button
                        key={t}
                        variant="outline"
                        size="sm"
                        className="pointer-events-none"
                      >
                        {t}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Link to="/projects">
            <Button
              variant="outline"
              className="text-secondary-foreground dark:text-primary"
              onClick={useMoveToTop}
            >
              All Projects <IconArrowForwardUpDouble />
            </Button>
          </Link>
          <Link to="/components">
            <Button
              variant="outline"
              className="text-secondary-foreground dark:text-primary"
              onClick={useMoveToTop}
            >
              Components <IconArrowForwardUpDouble />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
