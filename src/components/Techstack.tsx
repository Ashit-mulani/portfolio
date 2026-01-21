import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { SiApachekafka } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { FaCloudflare } from "react-icons/fa6";
import { CgNpm } from "react-icons/cg";
import { SiJsonwebtokens } from "react-icons/si";
import { SiConsul } from "react-icons/si";
import { BsStack } from "react-icons/bs";
import Heading from "./Heading";

const techStack = [
  {
    name: "JavaScript",
    icon: <IoLogoJavascript color="#F7DF1D" size={33} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript color="#017ACB" size={28} />,
  },
  {
    name: "React",
    icon: <FaReact color="#58C4DC" size={29} />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill size={33} />,
  },
  {
    name: "Redux",
    icon: <SiRedux color="#855DBA" size={26} />,
  },
  {
    name: "React Router",
    icon: <SiReactrouter color="#F44250" size={32} />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill color="#06B6D4" size={32} />,
  },
  {
    name: "shadcn/ui",
    icon: <SiShadcnui size={24} />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color="#558E48" size={28} />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={30} />,
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens color="#D639FC" size={26} />,
  },
  {
    name: "Mongoose",
    icon: <SiMongoose color="#B71C1C" size={32} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb color="#599636" size={30} />,
  },
  {
    name: "Docker",
    icon: <FaDocker color="#2496ED" size={32} />,
  },
  {
    name: "Redis",
    icon: <DiRedis color="#FF4438" size={38} />,
  },
  {
    name: "Apache Kafka",
    icon: <SiApachekafka size={26} />,
  },
  {
    name: "Consul",
    icon: <SiConsul color="#E03875" size={26} />,
  },
  {
    name: "Socket Io",
    icon: <SiSocketdotio size={26} />,
  },
  {
    name: "Postman",
    icon: <SiPostman color="#FE6C35" size={26} />,
  },
  {
    name: "Cloudinary",
    icon: <SiCloudinary color="#0071CE" size={32} />,
  },
  {
    name: "Cloudflare",
    icon: <FaCloudflare color="#F6821F" size={34} />,
  },
  {
    name: "Vercel",
    icon: <SiVercel size={26} />,
  },
  {
    name: "GitHub",
    icon: <FaGithub size={26} />,
  },
  {
    name: "Npm",
    icon: <CgNpm color="#C53433" size={32} />,
  },
];

const TechStackIconWrapper = ({ icon }: { icon: React.ReactElement }) => {
  return (
    <i className="flex h-12 w-12 items-center justify-center border border-dashed">
      {icon}
    </i>
  );
};

const TechStack = () => {
  return (
    <div className="flex flex-col gap-2">
      <Heading name="Tech Stack" icon={<BsStack />} />
      <div className="flex flex-wrap gap-2">
        {techStack.map(({ name, icon }) => (
          <Tooltip key={name}>
            <TooltipTrigger asChild>
              <span>
                <TechStackIconWrapper icon={icon} />
              </span>
            </TooltipTrigger>
            <TooltipContent className="font-medium">
              <span>{name}</span>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
