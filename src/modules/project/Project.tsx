import { usePageTitle } from "@/lib/hooks/usePageTitle";
import { Outlet } from "react-router-dom";

const Project = () => {
  usePageTitle("Projects | Ashit Mulani");

  return <Outlet />;
};

export default Project;
