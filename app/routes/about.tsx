import type { Route } from "./+types/home";
import {AboutPage} from "~/about/about";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Coded Alchemy" },
        { name: "description", content: "Coded Alchemy about page." },
    ];
}

export default function About() {
    return <AboutPage />
}