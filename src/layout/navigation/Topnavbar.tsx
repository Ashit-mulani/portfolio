import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  Avatar,
  AvatarFallback,
  AvatarImage as Image,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useMoveToTop } from "@/lib/hooks/useMoveToTop";
import { useSize } from "@/lib/hooks/useSize";
import { cn } from "@/lib/utils";
import type { MenuItems } from "@/types";
import { IconBrandGithub } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupTitle,
  MenuSvg,
  MenuTriggerButton,
} from "@ajx2/menu";
import { blogsLinks, componentsLinks, projectsLinks } from "@/lib/data/Links";
import { useTruncate } from "@/lib/hooks/useTruncate";

const Topnavbar = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

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

const menu: MenuItems[] = [
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

function isMenuActive(menuPath: string, locationPath: string) {
  if (menuPath === "/") {
    return locationPath === "/";
  }
  return locationPath === menuPath || locationPath.startsWith(menuPath + "/");
}

const TopNavbarMenu = () => {
  const location = useLocation();

  return (
    <div className="flex items-center gap-1">
      {menu.map((m) => (
        <Link to={m.path} key={m.path || m.name}>
          <Button
            onClick={useMoveToTop}
            variant={
              isMenuActive(m.path, location.pathname) ? "default" : "ghost"
            }
          >
            {m.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

const TopNavbarMenuOnMobile = () => {
  return (
    <Menu>
      <MenuTriggerButton className="border-none p-0">
        <Button variant="outline">
          <MenuSvg />
        </Button>
      </MenuTriggerButton>
      <MenuContent className="mt-14 border border-dashed">
        <MenuItemGroup>
          <MenuItemGroupTitle title="Menu" />
          {menu.map((m) => (
            <Link to={m.path} onClick={useMoveToTop} key={m.path || m.name}>
              <MenuItem className="dark:hover:text-primary">{m.name}</MenuItem>
            </Link>
          ))}
        </MenuItemGroup>
        <MenuItemGroup>
          <MenuItemGroupTitle title="Projects" />
          {projectsLinks.map((m) => (
            <Link to={m?.to || "/"} onClick={useMoveToTop} key={m?.to}>
              <MenuItem className="dark:hover:text-primary">
                {m?.label}
              </MenuItem>
            </Link>
          ))}
        </MenuItemGroup>
        <MenuItemGroup>
          <MenuItemGroupTitle title="Components" />
          {componentsLinks.map((m) => (
            <Link to={m?.to || "/"} onClick={useMoveToTop} key={m?.to}>
              <MenuItem className="dark:hover:text-primary">
                {m?.label}
              </MenuItem>
            </Link>
          ))}
        </MenuItemGroup>
        <MenuItemGroup>
          <MenuItemGroupTitle title="Blogs" />
          {blogsLinks.map((m) => (
            <Link to={m?.to || "/"} onClick={useMoveToTop} key={m?.to}>
              <MenuItem className="dark:hover:text-primary">
                {useTruncate(m?.label)}
              </MenuItem>
            </Link>
          ))}
        </MenuItemGroup>
      </MenuContent>
    </Menu>
  );
};
