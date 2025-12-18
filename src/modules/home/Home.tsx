import TechStack from "@/components/Teckstack";
import { StripedPattern } from "@/components/ui/striped-pattern";
import Contact from "@/components/Contact";
import Projects from "@/components/ProjectCard";
import { IconMapPin } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const Home = () => {
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
        <p className="text-muted-foreground text-sm tracking-tight">
          Full-Stack Web Developer skilled in both frontend and backend
          development, with strong knowledge of React.js, Next.js, Node.js,
          Express.js, Docker, Kafka, Redis, and related tools. I have built
          advanced, production-level projects on my own, including scalable
          systems. I also have solid understanding of system design, performance
          optimization, and building reliable, high-quality applications
          end-to-end.
        </p>
        <section>
          <TechStack />
        </section>
        <section>
          <Projects />
        </section>
      </div>
    </>
  );
};

export default Home;
