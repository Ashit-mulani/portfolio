import type { DelayedSpinnerProps } from "@/types";
import { useEffect, useState } from "react";

const DelayedSpinner = ({ delay = 1500, children }: DelayedSpinnerProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!show) return null;

  return <>{children}</>;
};

export default DelayedSpinner;
