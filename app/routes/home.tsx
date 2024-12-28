import type { Route } from "./+types/home";
import { HomePage } from "~/home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Coded Alchemy" },
    { name: "The portfolio of Taji Abdullah", content: "Welcome to Coded Alchemy!" },
  ];
}

export default function DisplayHomePage() {
  return <HomePage />;
}
