import type { Route } from "./+types/home";
import {AboutPage} from "~/about/about";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Coded Alchemy" },
        { name: "The portfolio of Taji Abdullah", content: "About Taji Abdullah" },
    ];
}

export default function AboutComponent() {
    return <AboutPage />
}