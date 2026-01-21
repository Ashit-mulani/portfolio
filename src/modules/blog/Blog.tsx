import { usePageTitle } from "@/lib/hooks/usePageTitle";
import { Outlet } from "react-router-dom";

const Blog = () => {
  usePageTitle("Blogs | Ashit Mulani");

  return <Outlet />;
};

export default Blog;
