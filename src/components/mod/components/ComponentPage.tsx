import ComponentCard from "@/components/ComponentCard";
import Heading from "@/components/Heading";
import Typography from "@/components/Typography";
import { GoPackage } from "react-icons/go";

const ComponentPage = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div>
        <Heading name="Components/packages" icon={<GoPackage />} />
        <Typography
          description=" A collection of npm packages and reusable components I've built to
    simplify development and make everyday work easier for developers."
        />
      </div>
      <ComponentCard />
    </div>
  );
};

export default ComponentPage;
