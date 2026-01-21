import { usePageTitle } from "@/lib/hooks/usePageTitle";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { blogId } = useParams<{ blogId: string }>();

  usePageTitle(`${blogId} | Blog | Ashit Mulani`);

  return <div>blogId : {blogId}</div>;
};

export default BlogDetail;
