import type { ProjectItem } from "@/types";
import {
  IconBrandGithub,
  IconExternalLink,
  IconFileText,
} from "@tabler/icons-react";

export const projectsData: ProjectItem[] = [
  {
    id: "imagebox",
    name: "ImageBox",
    type: "Project",
    title: "Cloud-based Photo management",
    coverImage: "/project/imagebox/cover.png",
    gallery: ["/project/imagebox/gallery/dark-mode-view.png"],
    description:
      "A cloud-based photo management app that lets users easily upload, organize, and share images online.",
    problem:
      "Managing and sharing large collections of personal photos online can be challenging.",
    solution:
      "Developed a user-friendly cloud platform enabling seamless photo uploads, organization, and instant sharing, powered by - imagekit.io",
    techStack: ["ReactJs", "ExpressJs", "MongoDB", "Imagekit.io"],
    role: "Full-Stack Developer",
    architecture: "Monolith",
    status: "In-Production",
    links: [
      {
        name: "More Information",
        icon: <IconFileText />,
        url: "/projects/imagebox",
      },
      {
        name: "Github Repository",
        icon: <IconBrandGithub />,
        url: "https://github.com/Ashit-mulani/imagebox",
      },
      {
        name: "Live Preview",
        icon: <IconExternalLink />,
        url: "https://imagebox.fluoce.com/user/home",
      },
    ],
    year: 2025,
  },
  {
    id: "side-panel",
    name: "SidePanel",
    type: "Package",
    title: "package for Side Panel component",
    description:
      "A flexible side panel component for React, It provides a smooth slide-in panel with customizable triggers, left/right positioning, and a clean compound-component API, published as a public npm package.",
    problem:
      "Many React applications require side panels for secondary actions or tools, Integrating side panels in React applications often requires installing large, opinionated UI libraries. Many developers need a lightweight, standalone package that can be easily integrated without pulling in a full UI framework.",
    solution:
      "Designed and built a lightweight, headless-friendly side panel component inspired by Gmail's UI. The package offers flexible positioning, animated transitions, customizable triggers, and full TypeScript support, making it easy to integrate into any React + Tailwind project.",
    techStack: ["NPM", "React", "Tailwind CSS", "clsx", "tailwind-merge"],
    role: "Package Author & Maintainer",
    status: "Npm-Package",
    links: [
      {
        name: "More Information",
        icon: <IconFileText />,
        url: "/components/side-panel",
      },
      {
        name: "NPM Package",
        icon: <IconExternalLink />,
        url: "https://www.npmjs.com/package/@ajx2/side-panel",
      },
    ],
    year: 2025,
    command: "npm i @ajx2/side-panel",
  },
  {
    id: "goldphin",
    name: "GoldPhin",
    type: "Project",
    title: "Dashboard for Crypto Wallets",
    coverImage: "/project/goldphin/cover.png",
    gallery: ["/project/goldphin/gallery/dark-mode-view.png"],
    description:
      "Connect your crypto wallet and view all your wallet stats in one place. Includes a built-in token swap service that lets you seamlessly exchange tokens across multiple blockchains.",
    problem:
      "Crypto users often manage assets across multiple wallets and blockchains, requiring them to switch between different platforms to check balances, track tokens, and perform swaps. This fragmented experience makes portfolio monitoring inefficient and time-consuming.",
    solution:
      "GoldPhin provides a single dashboard where users can connect their crypto wallets and instantly view all wallet statistics in one place. The platform integrates multi-chain data fetching and a built-in token swap service, enabling users to manage and exchange tokens without leaving the dashboard.",
    techStack: ["EthersJs", "Moralis.com", "1inch.com", "ReactJs", "ExpressJs"],
    role: "Full-Stack Developer",
    architecture: "Monolith",
    status: "In-Production",
    links: [
      {
        name: "More Information",
        icon: <IconFileText />,
        url: "/projects/goldphin",
      },
      {
        name: "Github Repository",
        icon: <IconBrandGithub />,
        url: "https://github.com/Ashit-mulani/GoldPhin.io",
      },
      {
        name: "Live Preview",
        icon: <IconExternalLink />,
        url: "https://goldphin.fluoce.com",
      },
    ],
    year: 2025,
  },
  {
    id: "fluoce",
    name: "Fluoce",
    type: "Project",
    title: "Store, Share and Access your files anytime, anywhere",
    coverImage: "/project/fluoce/cover.png",
    gallery: ["/project/fluoce/gallery/dark-mode-view.png"],
    description:
      "Cloud storage platform. Designed to provide reliable file availability, seamless organization, and secure access across all your devices with secure file sharing.",
    problem:
      "Managing files across multiple devices and sharing them securely can be inefficient without a centralized platform. Traditional file sharing methods often lack access control, organization, and real-time availability.",
    solution:
      "Built a cloud storage solution that enables users to upload and manage files in a structured environment while offering secure sharing options. The platform centralizes file access and ensures data availability from any device , anywhere and anytime.",
    techStack: [
      "NextJs",
      "Redis",
      "Cloudflare-R2",
      "Consul",
      "ExpressJs",
      "MongoDB",
    ],
    role: "Full-Stack Developer",
    architecture: "Command Query Responsibility Segregation (CQRS)",
    status: "In-Beta",
    links: [
      {
        name: "More Information",
        icon: <IconFileText />,
        url: "/projects/fluoce",
      },
      {
        name: "Github Repository",
        icon: <IconBrandGithub />,
        url: "https://github.com/Ashit-mulani/fluoce",
      },
    ],
    year: 2025,
  },
  {
    id: "leaflet-live",
    name: "Leaflet-Live",
    type: "Project",
    title: "Real-Time Location Sharing with Groups",
    description:
      "A room-based real-time location sharing platform allowing users to join public or private rooms and share their live location with others on an interactive map.",
    problem:
      "Coordinating live locations within groups is challenging when existing apps scatter location updates across individual chats or require repeated manual sharing, especially when multiple people need to track or be seen together. Current solutions lack centralized, dedicated spaces for group-based real-time tracking and collaboration.",
    solution:
      "Developed a web application that enables users to create or join both public and private rooms where all participants live locations are shown in real time using Leaflet maps. This approach creates a centralized space for group tracking, simplifies coordination, and enhances privacy for closed groups.",
    techStack: ["NextJs", "Socket Io", "LeafletJs", "Redis", "Geolocation API"],
    role: "Full-Stack Developer",
    architecture: "Monolith",
    status: "In-development",
    links: [
      {
        name: "More Information",
        icon: <IconFileText />,
        url: "/projects/leaflet-live",
      },
      {
        name: "Github Repository",
        icon: <IconBrandGithub />,
        url: "https://github.com/Ashit-mulani/Leaflet-Live",
      },
    ],
    year: 2024,
  },
  {
    id: "menu",
    name: "Menu",
    type: "Package",
    title: "Mobile first menu component",
    description:
      "A fully-responsive, headless menu component for React and Tailwind CSS. Provides a modern, mobile-first navigation experience with seamless animations, accessibility, and flexible alignment—ideal for building polished navigation UIs quickly.",
    problem:
      "Creating a mobile-friendly navigation menu looks easy, but developers face many frustrating challenges. Common problems include menus not sizing correctly on different devices, broken scrolling, content that gets clipped or hidden, touch areas that are too small or unresponsive, and unpredictable behavior in browsers. These issues make it difficult to provide a smooth and reliable menu experience for users on all devices.",
    solution:
      "Created a lightweight, context-driven menu system that handles mobile responsiveness correctly by using dynamic viewport units, isolated scroll containers, and controlled mount animations. The component ensures consistent behavior across devices while providing a clean API and smooth user experience.",
    techStack: ["NPM", "React", "Tailwind CSS", "clsx", "tailwind-merge"],
    role: "Package Author & Maintainer",
    status: "Npm-Package",
    links: [
      {
        name: "More Information",
        icon: <IconFileText />,
        url: "/components/menu",
      },
      {
        name: "NPM Package",
        icon: <IconExternalLink />,
        url: "https://www.npmjs.com/package/@ajx2/menu",
      },
    ],
    year: 2025,
    command: "npm i @ajx2/menu",
  },
];
