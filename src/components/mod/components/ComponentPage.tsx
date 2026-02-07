import ComponentCard from "@/components/ComponentCard";
import Heading from "@/components/Heading";
import Typography from "@/components/Typography";
import { SidePanelSeparator, SidePanelTrigger } from "@/lib/package/side-panel";
import { SidePanelContent } from "@/lib/package/side-panel";
import { SidePanel } from "@/lib/package/side-panel";
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
      <SidePanel>
        <SidePanelTrigger align="center" />
        <SidePanelContent className="p-4">
          <h3 className="font-semibold text-lg mb-2">Panel content</h3>
          <SidePanelSeparator />
          <p>This SidePanel can be used for settings, navigation, etc.</p>
        </SidePanelContent>
      </SidePanel>
    </div>

  );
};

export default ComponentPage;
