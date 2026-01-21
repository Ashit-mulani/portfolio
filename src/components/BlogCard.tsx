import { BlogData } from "@/lib/data/BlogData";
import Typography from "./Typography";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Wrapper from "./Wrapper";

const BlogCard = () => {
  return BlogData.map((b) => {
    if (!b) {
      return null;
    }
    return (
      <Wrapper key={b?.id || b?.name}>
        <div className="flex flex-wrap items-start justify-between gap-1">
          <span className="dark:group-hover:decoration-primary tracking-tight underline-offset-2 group-hover:underline">
            {b?.name}{" "}
          </span>
          <div>
            <Typography description={b?.title} />
            <Typography
              description={b?.description}
              className="text-xs opacity-70"
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-1">
          {b?.links?.map((l) => (
            <Tooltip key={l?.name + l?.url}>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  tabIndex={0}
                  aria-label={l?.name}
                >
                  <a href={l?.url} target="_blank" rel="noopener noreferrer">
                    {l?.icon}
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{l?.name}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </Wrapper>
    );
  });
};

export default BlogCard;
