import { usePageTitle } from "@/lib/hooks/usePageTitle";
import { Outlet } from "react-router-dom";

const Component = () => {
  usePageTitle("Components-Packages | Ashit Mulani");

  return <Outlet />;
};

export default Component;
