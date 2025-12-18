import Home from "@/modules/home/Home";
import { Route, Routes } from "react-router-dom";
import Topnavbar from "./navigation/Topnavbar";
import Component from "@/modules/components/Component";
import Blog from "@/modules/blog/Blog";
import Project from "@/modules/project/Project";
import Footer from "@/layout/footer/Footer";

const Layout = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <nav className="fixed top-0 z-20 flex w-full max-w-180 border-x border-b border-dashed bg-white px-4 py-3 dark:bg-zinc-950">
        <Topnavbar />
      </nav>
      <div className="relative min-h-screen w-full max-w-180 overflow-hidden border-x border-dashed px-4 pt-18">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Component />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </div>
      <footer className="w-full max-w-180 border-x border-dashed pt-4">
        <Footer />
      </footer>
    </main>
  );
};

export default Layout;
