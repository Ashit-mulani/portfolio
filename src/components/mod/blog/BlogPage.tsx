import BlogCard from "@/components/BlogCard";
import Heading from "@/components/Heading";
import Typography from "@/components/Typography";
import { IconFileInvoiceFilled } from "@tabler/icons-react";

const BlogPage = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div>
        <Heading name="Blogs" icon={<IconFileInvoiceFilled />} />
        <Typography description="A growing collection of technical blogs covering software development, system design, real-world engineering challenges, performance, tooling, and lessons learned from building production systems." />
      </div>
      <BlogCard />
    </div>
  );
};

export default BlogPage;
