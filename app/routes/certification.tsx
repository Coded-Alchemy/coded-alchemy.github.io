import type { Route } from "./+types/certification";
import { CertificationPage } from "~/certification/certification";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Coded Alchemy - Certification" },
    { name: "The portfolio of Taji Abdullah", content: "Welcome to Coded Alchemy!" },
  ];
}

export default function CertificationComponent() {
  return <CertificationPage />;
}
