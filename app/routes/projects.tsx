// provides type safety/inference
import type { Route } from "./+types/projects";
import { ProjectsPage } from "~/projects/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Coded Alchemy - Projects" },
    { name: "The portfolio of Taji Abdullah", content: "The project portfolio of Taji Abdullah." },
  ];
}

export default function ProjectsComponent() {
  return <ProjectsPage />;
}
