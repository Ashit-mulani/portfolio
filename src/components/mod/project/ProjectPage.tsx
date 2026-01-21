import Heading from "@/components/Heading";
import ProjectCard from "@/components/ProjectCard";
import Typography from "@/components/Typography";
import { AiFillProject } from "react-icons/ai";

const ProjectPage = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div>
        <Heading name="Projects" icon={<AiFillProject />} />
        <Typography description=" Projects I built to learn, experiment, and solve real problems while improving my development skills." />
      </div>
      <ProjectCard />
    </div>
  );
};

export default ProjectPage;
