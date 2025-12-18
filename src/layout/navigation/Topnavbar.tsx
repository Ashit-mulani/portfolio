import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  Avatar,
  AvatarFallback,
  AvatarImage as Image,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";
import { useMoveToTop } from "@/lib/hooks/useMoveToTop";
import { useSize } from "@/lib/hooks/useSize";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/types";
import {
  IconArticle,
  IconBrandGithub,
  IconFolders,
  IconHome,
  IconMenu2,
  IconPuzzle,
} from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";

const Topnavbar = () => {
  const location = useLocation();

  const isHome = location.pathname == "/";

  const isMobile = useSize(500);

  return (
    <div className="flex w-full items-center justify-between gap-4">
      <Link to="/">
        {isHome ? (
          <span className="px-[6.5px]">AJ</span>
        ) : (
          <AvatarImage
            className="hover:border-primary"
            src="/me_yellow.png"
            fallBack="AJ"
          />
        )}
      </Link>
      {!isMobile && <TopNavbarMenu />}
      <div className="flex items-center gap-1">
        {isMobile && <TopNavbarMenuOnMobile />}
        <Button
          onClick={() => {
            window.open(
              "https://github.com/Ashit-mulani",
              "_blank",
              "noopener,noreferrer",
            );
          }}
          variant="outline"
        >
          <IconBrandGithub />
        </Button>
        <AnimatedThemeToggler />
      </div>
    </div>
  );
};

export default Topnavbar;

const AvatarImage = ({
  src,
  fallBack,
  className,
}: {
  src: string;
  fallBack: string;
  className?: string;
}) => {
  return (
    <Avatar className={cn("rounded-none", className)}>
      <Image className="rounded-none" src={src} />
      <AvatarFallback className="rounded-none bg-transparent">
        {fallBack || "AJ"}
      </AvatarFallback>
    </Avatar>
  );
};

const menu: MenuItem[] = [
  {
    name: "Portfolio",
    path: "/",
  },
  {
    name: "Components",
    path: "/components",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
];

const TopNavbarMenu = () => {
  const location = useLocation();

  return (
    <div className="flex items-center gap-1">
      {menu.map((m) => (
        <Link to={m.path} key={m.path || m.name}>
          <Button
            variant={location.pathname === m.path ? "default" : "outline"}
          >
            {m.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

const TopNavbarMenuOnMobile = () => {
  const location = useLocation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <IconMenu2 />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-56 p-0">
        <SheetHeader className="mb-2 p-4">
          <span className="text-base font-semibold">Menu</span>
        </SheetHeader>
        <div className="flex flex-col gap-1 p-2">
          {menu.map((m) => {
            let IconComp = null;
            switch (m.name) {
              case "Portfolio":
                IconComp = <IconHome className="mr-2" />;
                break;
              case "Components":
                IconComp = <IconPuzzle className="mr-2" />;
                break;
              case "Projects":
                IconComp = <IconFolders className="mr-2" />;
                break;
              case "Blogs":
                IconComp = <IconArticle className="mr-2" />;
                break;
              default:
                IconComp = null;
            }
            return (
              <SheetClose asChild key={m.path || m.name}>
                <Link to={m.path}>
                  <Button
                    onClick={useMoveToTop}
                    variant={location.pathname === m.path ? "default" : "ghost"}
                    className={`w-full justify-start`}
                    asChild
                  >
                    <span className="flex items-center">
                      {IconComp}
                      {m.name}
                    </span>
                  </Button>
                </Link>
              </SheetClose>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};
