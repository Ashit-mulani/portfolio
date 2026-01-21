import { type ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-2 overflow-hidden border border-dashed p-2 sm:p-4">
      {children}
    </div>
  );
};

export default Wrapper;
