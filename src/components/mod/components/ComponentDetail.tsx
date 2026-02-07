import NotFound from "@/components/404";
import DetailInfoPage from "@/components/DetailInfoPage";
import { projectsData } from "@/lib/data/ProjectData";
import { usePageTitle } from "@/lib/hooks/usePageTitle";
import { useParams } from "react-router-dom";

const ComponentDetail = () => {
  const { componentId } = useParams<{ componentId: string }>();

  usePageTitle(`${componentId} | Component-Package | Ashit Mulani`);

  const component = projectsData.find(p => p.id === componentId)

  if (!component) {
    return <NotFound />;
  }

  return <DetailInfoPage project={component} />
};

export default ComponentDetail;
