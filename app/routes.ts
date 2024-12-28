import {
    type RouteConfig,
    index,
    route,
    layout} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("projects", "routes/projects.tsx"),
    route("certification", "routes/certification.tsx"),


    // layout("certification", "routes/certification.tsx", [
    //     index("certification/home.tsx"),
    //     // route("contact", "./marketing/contact.tsx"),
    // ])

    // parent route
    // route("dashboard", "./dashboard.tsx", [
    //     // child routes
    //     index("./home.tsx"),
    //     route("settings", "./settings.tsx"),
    // ]),
] satisfies RouteConfig;