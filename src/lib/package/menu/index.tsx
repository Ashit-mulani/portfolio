import {
  Children,
  ReactNode,
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type MenuType = {
  open: boolean;
  toggle: () => void;
  align?: "left" | "right" | "center";
};

const MenuContext = createContext<MenuType | null>(null);

const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("All Menu's components must be used within a Menu");
  }
  return context;
};

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const Menu = ({
  children,
  align = "left",
}: {
  children?: ReactNode;
  align?: "left" | "right" | "center";
}) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <MenuContext.Provider value={{ open, toggle, align }}>
      <div>{children}</div>
    </MenuContext.Provider>
  );
};

const MenuSvg = ({
  size = 22,
  className = "",
}: {
  size?: number;
  className?: string;
}) => {
  const { open } = useMenu();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M4 12h16"
          style={{
            transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
            transform: open ? "rotate(45deg)" : "translateY(-4px)",
            transformOrigin: "12px 12px",
          }}
          strokeWidth={open ? 2 : 3.5}
        />
        <path
          d="M4 12h16"
          style={{
            transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
            transform: open ? "rotate(-45deg)" : "translateY(4px)",
            transformOrigin: "12px 12px",
          }}
        />
      </g>
    </svg>
  );
};

const MenuTriggerButton = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  const { toggle } = useMenu();
  return <div onClick={toggle}>{children ? children : <MenuSvg />}</div>;
};

function useSize(width: number): boolean {
  const getMatch = () =>
    typeof window !== "undefined" && window.innerWidth <= width;

  const [isMatched, setIsMatched] = useState(getMatch);

  useEffect(() => {
    function handleResize() {
      setIsMatched(getMatch());
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return isMatched;
}

const MenuContent = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  const { open } = useMenu();
  const contentRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (open) {
      setRender(true);
      setTimeout(() => {
        setVisible(true);
      }, 100);
    } else {
      setVisible(false);
      const timeout = setTimeout(() => {
        setRender(false);
      }, 350);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    render && (
      <div
        className={cn(
          "fixed inset-0 z-40 flex h-screen bg-white dark:bg-zinc-950",
          className,
        )}
      >
        <div
          ref={contentRef}
          className={cn(
            "menu-content w-full overflow-y-auto",
            "max-h-[calc(100dvh-2rem)]",
            "p-6",
            "transform-cpu",
          )}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            maxHeight: visible ? "calc(100dvh - 2rem)" : "0px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(-16px)",
            transition:
              "max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.35s cubic-bezier(0.4,0,0.2,1)",
            overflowY: "auto",
          }}
        >
          <style>
            {`
              .menu-content::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {children}
        </div>
      </div>
    )
  );
};

const MenuItemGroup = ({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const { align } = useMenu();

  const alignClass =
    align === "right" ? "items-end" : align === "center" ? "items-center" : "";

  return (
    <section className={cn("mb-8 flex flex-col gap-2", alignClass, className)}>
      {children}
    </section>
  );
};

const MenuItemGroupTitle = ({
  className = "",
  title,
}: {
  className?: string;
  title: string;
}) => {
  return (
    <span
      className={cn("text-muted-foreground text-xs font-medium", className)}
    >
      {title}
    </span>
  );
};

const MenuItem = ({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const { toggle, align } = useMenu();

  const alignClass =
    align === "right"
      ? "items-end justify-end"
      : align === "center"
        ? "items-center justify-center"
        : "";

  return (
    <button
      onClick={toggle}
      className={cn("flex w-full text-xl font-semibold", alignClass, className)}
    >
      {children}
    </button>
  );
};

export {
  useSize,
  useMenu,
  Menu,
  MenuSvg,
  MenuTriggerButton,
  MenuContent,
  MenuItemGroup,
  MenuItemGroupTitle,
  MenuItem,
};
