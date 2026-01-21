import TechStack from "@/components/Techstack";
import { StripedPattern } from "@/components/ui/striped-pattern";
import Contact from "@/components/Contact";
import { IconArrowForwardUpDouble, IconMapPin } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import Typography from "@/components/Typography";
import ProjectCard from "@/components/ProjectCard";
import { usePageTitle } from "@/lib/hooks/usePageTitle";
import Heading from "@/components/Heading";
import { AiFillHighlight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useMoveToTop } from "@/lib/hooks/useMoveToTop";

const Home = () => {
  usePageTitle("Ashit Mulani | Portfolio");

  return (
    <>
      <StripedPattern className="-z-20 [mask-image:radial-gradient(300px_circle_at_top,white,transparent)] opacity-40" />
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full items-start gap-4">
          <img src="/me_yellow.png" alt="" className="h-20 w-20" />
          <div className="flex w-full flex-col">
            <div>
              <h1>Ashit Mulani</h1>
              <h2 className="truncate">Full-Stack Web Devloper</h2>
            </div>
            <div className="flex">
              <Button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open(
                      "https://www.google.com/maps/@22.8914163,72.3674807,7.86z?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D",
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }
                }}
                variant="outline"
                className="gap-3"
              >
                <IconMapPin /> Gujarat, India
              </Button>
            </div>
          </div>
        </div>
        <Contact />
        <Typography
          description=" Full-Stack Web Developer skilled in both frontend and backend
        development, with strong knowledge of React.js, Next.js, Node.js,
        Express.js, Docker, Kafka, Redis, and related tools. I have built
        advanced, production-level projects on my own, including scalable
        systems. I also have solid understanding of system design, performance
        optimization, and building reliable, high-quality applications
        end-to-end."
        />
        <section>
          <TechStack />
        </section>
        <section className="flex flex-col gap-2">
          <Heading name="Work Highlights" icon={<AiFillHighlight />} />
          <ProjectCard slice={true} />
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Link to="/projects">
              <Button
                variant="outline"
                className="text-secondary-foreground dark:text-primary"
                onClick={useMoveToTop}
              >
                All Projects <IconArrowForwardUpDouble />
              </Button>
            </Link>
            <Link to="/components">
              <Button
                variant="outline"
                className="text-secondary-foreground dark:text-primary"
                onClick={useMoveToTop}
              >
                Components <IconArrowForwardUpDouble />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
