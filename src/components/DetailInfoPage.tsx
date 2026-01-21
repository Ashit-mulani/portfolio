import Heading from "@/components/Heading";
import Typography from "@/components/Typography";
import NotFound from "@/components/404";
import { useIsDarkTheme } from "@/lib/hooks/useIsDarkTheme";
import ProjectTechstack from "@/components/ProjectTechstack";
import { Button } from "@/components/ui/button";
import type { ProjectItem } from "@/types";
import { statusColor } from "./ProjectCard";
import { cn } from "@/lib/utils";

const DetailInfoPage = ({ project }: { project: ProjectItem }) => {
  const isDark = useIsDarkTheme();

  if (!project) {
    return <NotFound />;
  }

  const imgSrc = isDark
    ? project?.coverImage
    : project?.gallery?.[0] || project?.coverImage;

  return (
    <article className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <div>
          <div className="flex flex-wrap items-center justify-between">
            <Heading name={project?.name} className="font-semibold" />
            <span
              className={cn(
                statusColor[project?.status as keyof typeof statusColor],
                "text-xs",
              )}
            >
              {project?.status}
            </span>
          </div>
          <Typography
            className="text-black dark:text-white"
            description={project?.title}
          />
        </div>
        {imgSrc && (
          <section>
            <img
              src={imgSrc}
              alt={project?.name}
              className="max-h-[480px] w-full border object-contain"
            />
          </section>
        )}
      </header>
      <section className="flex flex-col gap-2">
        <div>
          <span className="text-xs">Description</span>
          <Typography
            className="text-xs"
            description="This section provides a high-level overview of the project's main purpose and functionality."
          />
        </div>
        <ul className="text-muted-foreground list-disc pl-6">
          <li>
            <Typography description={project?.description} />
          </li>
          <li>
            <Typography description={project?.problem} />
          </li>
          <li>
            <Typography description={project?.solution} />
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-2">
        <div>
          <span className="text-xs">Tech Stack</span>
          <Typography
            className="text-xs"
            description="Key technologies and tools used to build and support the project."
          />
        </div>
        <ProjectTechstack techStack={project?.techStack} />
      </section>
      {project?.links && project?.links?.length > 0 && (
        <section className="flex flex-col gap-2">
          <div>
            <span className="text-xs">More Links</span>
            <Typography
              className="text-xs"
              description="Explore more links related to this project."
            />
          </div>
          <div className="flex flex-wrap items-center gap-1">
            {project?.links
              .filter((l) => l?.name !== "More Information")
              .map((l) => (
                <a target="_blank" key={l?.url || l?.name} href={l?.url}>
                  <Button variant="secondary">
                    {l?.icon}
                    {l?.name}
                  </Button>
                </a>
              ))}
          </div>
        </section>
      )}
    </article>
  );
};
export default DetailInfoPage;
