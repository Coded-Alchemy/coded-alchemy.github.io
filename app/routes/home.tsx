import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Coded Alchemy" },
    { name: "description", content: "Welcome to Coded Alchemy!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
