import NotFound from "@/components/404";
import DetailInfoPage from "@/components/DetailInfoPage";
import { projectsData } from "@/lib/data/ProjectData";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return <NotFound />;
  }

  return <DetailInfoPage project={project} />;
};

export default ProjectDetail;
