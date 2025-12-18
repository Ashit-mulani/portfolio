import type { ReactElement } from "react";

export type MenuItem = {
  name: string;
  path: string;
};

export type ProjectItem = {
  id: string;
  name: string;
  type: "Project" | "Components" | "Library" | "Tool" | "Package" | "Other";
  coverImage: string;
  gallery?: string[];
  title: string;
  description: string;
  techStack: string[];
  architecture?: string;
  problem?: string;
  solution?: string;
  role?: string;
  status?:
    | "In-Production"
    | "In-Beta"
    | "In-development"
    | "Open-source"
    | "Prototype"
    | "Experimental"
    | "Archived";
  links?: {
    name: string;
    icon: ReactElement;
    url: string;
  }[];
  year?: number;
};
