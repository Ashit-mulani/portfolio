import { usePageTitle } from "@/lib/hooks/usePageTitle";
import { useParams } from "react-router-dom";

const ComponentDetail = () => {
  const { componentId } = useParams<{ componentId: string }>();

  usePageTitle(`${componentId} | Component-Package | Ashit Mulani`);

  return <div>componentId : {componentId}</div>;
};

export default ComponentDetail;
