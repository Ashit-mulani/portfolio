import type { ReactElement } from "react";

export type MenuItems = {
  name: string;
  path: string;
};

export type ProjectItem = {
  id: string;
  name: string;
  type: "Project" | "Component" | "Library" | "Tool" | "Package" | "Other";
  coverImage?: string;
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
    | "Npm-Package"
    | "Component"
    | "Prototype"
    | "Experimental"
    | "Archived";
  links?: {
    name: string;
    icon: ReactElement;
    url: string;
  }[];
  year?: number;
  command?: string;
};

export type BlogItem = {
  id: string;
  path?: string;
  name: string;
  title: string;
  description?: string;
  links?: {
    name: string;
    icon: ReactElement;
    url: string;
  }[];
};

export type ContentRendererProps = {
  modules: Record<string, () => Promise<unknown>>;
  contentId?: string;
  basePath: string;
};

export type DelayedSpinnerProps = {
  delay?: number;
  children: React.ReactNode;
};
