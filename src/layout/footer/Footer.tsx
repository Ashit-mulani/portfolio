import { IconArrowNarrowUp } from "@tabler/icons-react";
import { Button } from "../../components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { Link } from "react-router-dom";
import Contact from "../../components/Contact";
import { useMoveToTop } from "@/lib/hooks/useMoveToTop";
import { useTruncate } from "@/lib/hooks/useTruncate";
import {
  blogsLinks,
  componentsLinks,
  navLinks,
  projectsLinks,
} from "@/lib/data/Links";

const Footer = () => {
  return (
    <div className="bg-muted/25 relative flex flex-col gap-6 border-t border-dashed p-4">
      <div className="flex w-full flex-col gap-2 gap-y-4">
        <div className="flex flex-wrap items-start justify-between gap-2 gap-y-4">
          {navLinks?.length > 0 && (
            <div className="flex flex-col items-start gap-2">
              <span className="px-2.5">Menu</span>
              <div className="flex flex-col items-start">
                {navLinks.map((nav) => (
                  <Link key={nav.to} to={nav.to} tabIndex={-1}>
                    <Button
                      onClick={useMoveToTop}
                      variant="link"
                      className="text-muted-foreground hover:text-secondary-foreground dark:hover:text-primary w-full text-left"
                    >
                      {useTruncate(nav.label)}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          )}
          {componentsLinks?.length > 0 && (
            <div className="flex flex-col items-start gap-2">
              <span className="px-2.5">Components</span>
              <div className="flex flex-col items-start">
                {componentsLinks.map((cp) => (
                  <Link key={cp?.to} to={`${cp?.to}`} tabIndex={-1}>
                    <Button
                      onClick={useMoveToTop}
                      variant="link"
                      className="text-muted-foreground hover:text-secondary-foreground dark:hover:text-primary w-full text-left"
                    >
                      {useTruncate(cp?.label ?? "")}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          )}
          {projectsLinks?.length > 0 && (
            <div className="flex flex-col items-start gap-2">
              <span className="px-2.5">Projects</span>
              <div className="flex flex-col items-start">
                {projectsLinks.map((pr) => (
                  <Link key={pr?.to} to={`${pr?.to}`} tabIndex={-1}>
                    <Button
                      onClick={() => useMoveToTop()}
                      variant="link"
                      className="text-muted-foreground hover:text-secondary-foreground dark:hover:text-primary w-full text-left"
                    >
                      {useTruncate(pr?.label ?? "")}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        {blogsLinks?.length > 0 && (
          <div className="flex flex-col items-start gap-2">
            <span className="px-2.5">Blogs</span>
            <div className="flex flex-col items-start">
              {blogsLinks.map((b) => (
                <Link key={b?.to} to={`${b?.to}`} tabIndex={-1}>
                  <Button
                    onClick={useMoveToTop}
                    variant="link"
                    className="text-muted-foreground hover:text-secondary-foreground dark:hover:text-primary w-full text-left"
                  >
                    {useTruncate(`${b?.label}`, 20)}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex items-end justify-between gap-2">
        <div>
          <Contact />
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              onClick={useMoveToTop}
              aria-label="Back To Top"
            >
              <IconArrowNarrowUp />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Back To Top</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default Footer;
