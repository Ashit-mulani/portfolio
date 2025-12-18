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

const Footer = () => {
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Components", to: "/components" },
    { label: "Projects", to: "/projects" },
    { label: "Blogs", to: "/blogs" },
  ];

  // const isMobile = useSize();

  return (
    <div className="relative flex flex-col gap-4 border-t p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex flex-col items-start gap-2">
          <span className="px-2.5">Menu</span>
          <div className="flex flex-col items-start">
            {navLinks.map((nav) => (
              <Button
                asChild
                variant="link"
                key={nav.to}
                className="text-muted-foreground hover:text-secondary-foreground dark:hover:text-primary"
              >
                <Link to={nav.to} onClick={useMoveToTop}>
                  {nav.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <span className="px-2.5">Blogs</span>
          <div className="flex flex-col items-start">
            {navLinks.map((nav) => (
              <Button
                asChild
                variant="link"
                key={nav.to}
                className="text-muted-foreground hover:text-secondary-foreground dark:hover:text-primary"
              >
                <Link to={nav.to} onClick={useMoveToTop}>
                  {nav.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <span className="px-2.5">Components</span>
          <div className="flex flex-col items-start">
            {navLinks.map((nav) => (
              <Button
                asChild
                variant="link"
                key={nav.to}
                className="text-muted-foreground hover:text-secondary-foreground dark:hover:text-primary"
              >
                <Link to={nav.to} onClick={useMoveToTop}>
                  {nav.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <span className="px-2.5">Projects</span>
          <div className="flex flex-col items-start">
            {navLinks.map((nav) => (
              <Button
                asChild
                variant="link"
                key={nav.to}
                className="text-muted-foreground hover:text-secondary-foreground dark:hover:text-primary"
              >
                <Link to={nav.to} onClick={useMoveToTop}>
                  {nav.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-1">
        <div>
          <Contact />
        </div>
        <Tooltip>
          <TooltipTrigger>
            <span>
              <Button
                variant="secondary"
                size="icon"
                onClick={useMoveToTop}
                aria-label="Back To Top"
              >
                <IconArrowNarrowUp />
              </Button>
            </span>
          </TooltipTrigger>
          <TooltipContent>Back To Top</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default Footer;
