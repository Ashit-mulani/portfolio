import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { IconChevronRight } from "@tabler/icons-react";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type SidePanelContextType = {
  open: boolean;
  toggle: () => void;
  position: "left" | "right";
};

const SidePanelContext = createContext<SidePanelContextType | null>(null);

const useSidePanel = () => {
  const ctx = useContext(SidePanelContext);
  if (!ctx)
    throw new Error("SidePanel components must be inside <SidePanel />");
  return ctx;
};

const SidePanel = ({
  children,
  position = "right",
}: {
  children: ReactNode;
  position?: "left" | "right";
}) => {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  return (
    <SidePanelContext.Provider value={{ open, toggle, position }}>
      <div
        className={cn(
          "fixed top-0 z-50 flex h-full",
          position === "right" ? "right-0" : "left-0",
        )}
      >
        {children}
      </div>
    </SidePanelContext.Provider>
  );
};

const SidePanelTrigger = ({
  align = "bottom",
  icon,
}: {
  align?: "top" | "center" | "bottom";
  icon?: ReactNode;
}) => {
  const { open, toggle, position } = useSidePanel();

  const vertical =
    align === "top"
      ? "top-5"
      : align === "bottom"
        ? "bottom-5"
        : "top-1/2 -translate-y-1/2";

  const horizontal = position === "right" ? "-left-10" : "-right-10";

  const rounded =
    position === "right"
      ? "rounded-tl-[20px] rounded-bl-[20px]"
      : "rounded-tr-[20px] rounded-br-[20px]";

  const borderSide = position === "right" ? "border-l" : "border-r";

  return (
    <button
      onClick={toggle}
      className={cn(
        "absolute z-40",
        vertical,
        horizontal,
        "flex h-10 items-center gap-2 px-3",
        "bg-background border-y",
        borderSide,
        rounded,
        "hover:bg-muted",
      )}
    >
      {icon ? (
        icon
      ) : (
        <IconChevronRight
          size={17}
          style={{
            transition: "transform 0.4s",
            transform:
              (position === "right" && open) || (position === "left" && !open)
                ? "rotate(-180deg)"
                : "rotate(0deg)",
          }}
        />
      )}
    </button>
  );
};

const SidePanelContent = ({
  children,
  width = 280,
  className,
}: {
  children?: ReactNode;
  width?: number;
  className?: string;
}) => {
  const { open, position } = useSidePanel();

  return (
    <div
      className={cn(
        "h-full transition-all duration-200 ease-out",
        "bg-background flex flex-col overflow-auto shadow-xl",
        position === "right" ? "border-l" : "border-r",
        "max-w-[280px]",
        open ? "opacity-100" : "opacity-0",
        open
          ? "translate-x-0"
          : position === "right"
            ? "translate-x-full"
            : "-translate-x-full",
        open && className,
      )}
      style={{
        width: open ? width : 0,
      }}
    >
      {children}
    </div>
  );
};

const SidePanelSeparator = ({ className }: { className?: string }) => {
  return <div className={cn("bg-muted my-3 h-px", className)} />;
};

export {
  SidePanel,
  SidePanelTrigger,
  SidePanelContent,
  SidePanelSeparator,
  useSidePanel,
  cn,
};
