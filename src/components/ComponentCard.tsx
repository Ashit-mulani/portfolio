import { projectsData } from "@/lib/data/ProjectData";
import Typography from "./Typography";
import { Link } from "react-router-dom";
import CommandCard from "./CommandCard";
import { useMoveToTop } from "@/lib/hooks/useMoveToTop";
import Wrapper from "./Wrapper";

const ComponentCard = () => {
  const componentsPackagesData = projectsData.filter(
    (p) => p.type === "Package" || p.type === "Component",
  );

  return componentsPackagesData.map((cp) => {
    if (!cp) {
      return null;
    }
    return (
      <Wrapper key={cp?.id || cp?.name}>
        <Link
          onClick={useMoveToTop}
          to={`/components/${cp?.id}`}
          className="group"
        >
          <div className="flex flex-wrap items-start justify-between gap-2">
            <span className="dark:group-hover:decoration-primary tracking-tight underline-offset-2 group-hover:underline">
              {cp?.name}{" "}
              <span className="text-muted-foreground text-xs">{cp?.type}</span>
            </span>
            {/* {cp?.links
              ?.filter((link) => link?.name == "More Information")
              .map((l) => (
                <Link to={l?.url}>
                  <Button
                    onClick={useMoveToTop}
                    size="icon-sm"
                    variant="secondary"
                  >
                    {l?.icon}
                  </Button>
                </Link>
              ))} */}
          </div>
          <Typography description={cp?.description} className="opacity-70" />
        </Link>
        {cp?.command && <CommandCard command={`${cp?.command}`} />}
      </Wrapper>
    );
  });
};

export default ComponentCard;
