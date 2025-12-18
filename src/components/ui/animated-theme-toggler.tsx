import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { IconBrightness } from "@tabler/icons-react";

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

function getInitialTheme(): boolean {
  // Try to get theme from localStorage, fallback to OS preference, then light
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    // OS preference fallback
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false;
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const [isDark, setIsDark] = useState(getInitialTheme || true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Whenever isDark changes, update <html> and save to localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Listen for external theme changes (possibly from other tabs or sources)
  useEffect(() => {
    const updateTheme = () => {
      const systemThemeDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      let theme: string | null = localStorage.getItem("theme");
      if (!theme) {
        // If no localStorage theme, fallback to system
        setIsDark(systemThemeDark);
      } else {
        setIsDark(theme === "dark");
      }
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const storageListener = () => updateTheme();
    window.addEventListener("storage", storageListener);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", storageListener);
    };
  }, []);

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    const newTheme = !isDark;

    await (document as any).startViewTransition(() => {
      flushSync(() => {
        setIsDark(newTheme);
        // The useEffect above already updates <html> and localStorage
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top),
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  }, [isDark, duration]);

  return (
    <Button
      variant="outline"
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      size="icon"
      {...props}
    >
      <IconBrightness />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
