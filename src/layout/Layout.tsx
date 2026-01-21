import { Route, Routes } from "react-router-dom";
import Topnavbar from "./navigation/Topnavbar";
import Footer from "@/layout/footer/Footer";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/modules/home/Home";
import ProjectDetail from "@/components/mod/project/ProjectDetail";
import ComponentDetail from "@/components/mod/components/ComponentDetail";
import BlogDetail from "@/components/mod/blog/BlogDetail";
import ComponentPage from "@/components/mod/components/ComponentPage";
import ProjectPage from "@/components/mod/project/ProjectPage";
import BlogPage from "@/components/mod/blog/BlogPage";
import Project from "@/modules/project/Project";
import Component from "@/modules/components/Component";
import Blog from "@/modules/blog/Blog";

const Layout = () => {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center">
        <nav className="fixed top-0 z-20 flex w-full max-w-180 border-x border-b border-dashed bg-white px-4 py-3 dark:bg-zinc-950">
          <Topnavbar />
        </nav>
        <div className="relative min-h-screen w-full max-w-180 overflow-hidden border-x border-dashed px-4 pt-18">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components/*" element={<Component />}>
              <Route index element={<ComponentPage />} />
              <Route path=":componentId" element={<ComponentDetail />} />
            </Route>
            <Route path="/projects/*" element={<Project />}>
              <Route index element={<ProjectPage />} />
              <Route path=":projectId" element={<ProjectDetail />} />
            </Route>
            <Route path="/blogs/*" element={<Blog />}>
              <Route index element={<BlogPage />} />
              <Route path=":blogId" element={<BlogDetail />} />
            </Route>
          </Routes>
        </div>
        <footer className="w-full max-w-180 border-x border-dashed pt-4">
          <Footer />
        </footer>
        <Toaster position="top-center" duration={2000} />
      </main>
    </>
  );
};

export default Layout;
