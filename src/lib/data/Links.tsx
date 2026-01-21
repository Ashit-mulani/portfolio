import { BlogData } from "./BlogData";
import { projectsData } from "./ProjectData";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Components", to: "/components" },
  { label: "Projects", to: "/projects" },
  { label: "Blogs", to: "/blogs" },
];

export const componentsLinks = projectsData
  .filter((p) => p.type === "Component" || p.type === "Package")
  .map((cp) => {
    if (!cp || cp.links?.[0]?.name !== "More Information") {
      return;
    }
    return {
      label: cp.name,
      to: cp.links?.[0].url,
    };
  })
  .filter(Boolean);

export const projectsLinks = projectsData
  .filter((p) => p.type === "Project")
  .map((pr) => {
    if (!pr || pr.links?.[0]?.name !== "More Information") {
      return;
    }
    return {
      label: pr.name,
      to: pr.links?.[0].url,
    };
  });

export const blogsLinks = BlogData.filter((b) => !!b?.path).map((b) => {
  return {
    label: b.name,
    to: b.path,
  };
});
