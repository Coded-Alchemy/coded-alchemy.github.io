import type { Route } from "./+types/home";
import { Landing } from "~/landing/landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Coded Alchemy" },
    { name: "description", content: "Welcome to Coded Alchemy!" },
  ];
}

export default function Home() {
  return <Landing />;
}
