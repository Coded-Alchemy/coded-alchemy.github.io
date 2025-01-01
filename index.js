import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useParams, useLoaderData, useActionData, useMatches, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const stylesheet = "/coded-alchemy.github.io/assets/app-CX1ecSJm.css";
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}, {
  rel: "stylesheet",
  href: stylesheet
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Header() {
  return /* @__PURE__ */ jsx("header", { className: "flex flex-col items-center gap-9", children: /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold text-white-900", children: "Coded Alchemy" }) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "flex flex-col items-center gap-9", children: [
    /* @__PURE__ */ jsxs("nav", { className: "flex flex-row items-center gap-9", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://twitter.com/CodedAlchemy",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-sm transition-transform duration-300 hover:scale-110",
          children: "X"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.linkedin.com/in/tajiabdullah/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-sm transition-transform duration-300 hover:scale-110",
          children: "LinkedIn"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://tryhackme.com/r/p/TrapRat",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-sm transition-transform duration-300 hover:scale-110",
          children: "TryHackMe"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.credly.com/users/taji-abdullah.coded-alchemy",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-sm transition-transform duration-300 hover:scale-110",
          children: "Credly"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://github.com/Coded-Alchemy",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-sm transition-transform duration-300 hover:scale-110",
          children: "GitHub"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-9" }),
    /* @__PURE__ */ jsx("p", { className: "text-sm", children: "©2025 Taji Abdullah" })
  ] });
}
function Navigation() {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center  ", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center justify-center space-x-6 items-center", children: [
    /* @__PURE__ */ jsx("a", { href: "/", className: "text-xl font-bold transition-transform duration-300 hover:scale-110", children: "Home" }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "/about",
        className: "text-xl font-bold transition-transform duration-300 hover:scale-110",
        children: "About"
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "/certification",
        className: "text-xl font-bold transition-transform duration-300 hover:scale-110",
        children: "Certification"
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://technofiles.hashnode.dev/",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-xl font-bold transition-transform duration-300 hover:scale-110",
        children: "Blog"
      }
    )
  ] }) });
}
function HomePage() {
  return /* @__PURE__ */ jsx("main", { className: "flex items-center justify-center pt-16 pb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center gap-16 min-h-0", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsx(Content$3, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
function Content$3() {
  useTypewriterEffect(".typewriter");
  return /* @__PURE__ */ jsx("div", { className: "max-w-[800px] w-full space-y-6 px-4", children: /* @__PURE__ */ jsx("div", { className: "rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-md mx-auto overflow-hidden md:max-w-2xl", children: /* @__PURE__ */ jsxs("div", { className: "md:flex", children: [
    /* @__PURE__ */ jsx("div", { className: "md:shrink-0", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "h-64 w-full object-cover md:h-full md:w-64",
        src: "/app/home/Designer.jpeg",
        alt: "Taji Abdullah"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "p-8", children: /* @__PURE__ */ jsx("h1", { className: "text-3xl typewriter text-center" }) })
  ] }) }) }) });
}
function useTypewriterEffect(selector) {
  useEffect(() => {
    const dataText = [
      "Im Taji Abdullah",
      "software engineer",
      "and builder of things.",
      "Welcome to my website!"
    ];
    function typeWriter(text, i, fnCallback) {
      const element = document.querySelector(selector);
      if (element) {
        if (i < text.length) {
          element.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
          setTimeout(() => typeWriter(text, i + 1, fnCallback), 100);
        } else if (fnCallback) {
          setTimeout(fnCallback, 700);
        }
      }
    }
    function startTextAnimation(i) {
      if (i >= dataText.length) {
        setTimeout(() => startTextAnimation(0), 2e4);
        return;
      }
      if (dataText[i]) {
        typeWriter(dataText[i], 0, () => startTextAnimation(i + 1));
      }
    }
    startTextAnimation(0);
  }, [selector]);
}
function meta$3({}) {
  return [{
    title: "Coded Alchemy"
  }, {
    name: "The portfolio of Taji Abdullah",
    content: "Welcome to Coded Alchemy!"
  }];
}
const home = withComponentProps(function HomeComponent() {
  return /* @__PURE__ */ jsx(HomePage, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
function AboutPage() {
  return /* @__PURE__ */ jsx("main", { className: "flex items-center justify-center pt-16 pb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center gap-16 min-h-0", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsx(Content$2, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
function Content$2() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(About, {}) });
}
function About() {
  return /* @__PURE__ */ jsx("div", { className: "max-w-[800px] w-full space-y-6 px-4", children: /* @__PURE__ */ jsx("div", { className: "rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-md mx-auto overflow-hidden md:max-w-2xl", children: /* @__PURE__ */ jsx("div", { className: "md:flex", children: /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl", children: "About" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-white-500 mt-8", children: "As a Software Engineer with over a decade of experience, I leverage my extensive background in native Android development to deliver cutting-edge and user-friendly applications across diverse client domains. My proficiency spans the entire software development life cycle, encompassing planning, building, testing, deployment, and maintenance. Utilizing modern development practices and tools, I ensure the delivery of high-quality and efficient solutions." }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-white-500 mt-8", children: "With a keen passion for continuous learning, I actively explore and experiment with emerging technologies and frameworks. This commitment to staying abreast of industry trends allows me to remain at the forefront of innovation. I possess a strong foundation in key areas such as Java and Kotlin for object-oriented programming, Git for version control, SQL for database management, XML, JSON, and Android Studio with the Android SDK for mobile application development. The Model-View-ViewModel (MVVM) architecture serves as a cornerstone in my approach to crafting robust mobile applications." })
  ] }) }) }) }) });
}
function meta$2({}) {
  return [{
    title: "Coded Alchemy"
  }, {
    name: "The portfolio of Taji Abdullah",
    content: "About Taji Abdullah"
  }];
}
const about = withComponentProps(function AboutComponent() {
  return /* @__PURE__ */ jsx(AboutPage, {});
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
function ProjectsPage() {
  return /* @__PURE__ */ jsx("main", { className: "flex items-center justify-center pt-16 pb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center gap-16 min-h-0", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsx(Content$1, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
function Content$1() {
  return /* @__PURE__ */ jsx("div", {});
}
function meta$1({}) {
  return [{
    title: "Coded Alchemy - Projects"
  }, {
    name: "The portfolio of Taji Abdullah",
    content: "The project portfolio of Taji Abdullah."
  }];
}
const projects = withComponentProps(function ProjectsComponent() {
  return /* @__PURE__ */ jsx(ProjectsPage, {});
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: projects,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function CertificationPage() {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center pt-16 pb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center gap-16 min-h-0", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Content, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
function Content() {
  const images = [
    "app/certification/img/google_cs.png",
    "app/certification/img/thm_aoc.png",
    "app/certification/img/critical_thinking_problem_solving.png",
    "app/certification/img/strategic_thinking.png",
    "app/certification/img/how-to-be-more-strategic.png",
    "app/certification/img/emotional_intelligence.png",
    "app/certification/img/active_listening.png",
    "app/certification/img/big_goals.png"
  ];
  return /* @__PURE__ */ jsx("div", { className: "max-w-[800px] w-full space-y-6 px-4", children: /* @__PURE__ */ jsx("div", { className: "rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4", children: /* @__PURE__ */ jsx("div", { className: "box", children: /* @__PURE__ */ jsx(Carousel, { useKeyboardArrows: true, children: images.map((URL, index) => /* @__PURE__ */ jsx("div", { className: "slide", children: /* @__PURE__ */ jsx("img", { alt: "sample_file", src: URL }, index) })) }) }) }) });
}
function meta({}) {
  return [{
    title: "Coded Alchemy - Certification"
  }, {
    name: "The portfolio of Taji Abdullah",
    content: "Welcome to Coded Alchemy!"
  }];
}
const certification = withComponentProps(function CertificationComponent() {
  return /* @__PURE__ */ jsx(CertificationPage, {});
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: certification,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/coded-alchemy.github.io/assets/entry.client-u-M4TmH-.js", "imports": ["/coded-alchemy.github.io/assets/chunk-K6AXKMTT-DycbfBQN.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/coded-alchemy.github.io/assets/root-BOkYVCeg.js", "imports": ["/coded-alchemy.github.io/assets/chunk-K6AXKMTT-DycbfBQN.js", "/coded-alchemy.github.io/assets/with-props-BJdOiEPt.js"], "css": [] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/coded-alchemy.github.io/assets/home-CObhm9cE.js", "imports": ["/coded-alchemy.github.io/assets/with-props-BJdOiEPt.js", "/coded-alchemy.github.io/assets/chunk-K6AXKMTT-DycbfBQN.js", "/coded-alchemy.github.io/assets/componets-BBBwtgY3.js"], "css": [] }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/coded-alchemy.github.io/assets/about-BURWQjOj.js", "imports": ["/coded-alchemy.github.io/assets/with-props-BJdOiEPt.js", "/coded-alchemy.github.io/assets/chunk-K6AXKMTT-DycbfBQN.js", "/coded-alchemy.github.io/assets/componets-BBBwtgY3.js"], "css": [] }, "routes/projects": { "id": "routes/projects", "parentId": "root", "path": "projects", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/coded-alchemy.github.io/assets/projects-BbJYjc5w.js", "imports": ["/coded-alchemy.github.io/assets/with-props-BJdOiEPt.js", "/coded-alchemy.github.io/assets/chunk-K6AXKMTT-DycbfBQN.js", "/coded-alchemy.github.io/assets/componets-BBBwtgY3.js"], "css": [] }, "routes/certification": { "id": "routes/certification", "parentId": "root", "path": "certification", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/coded-alchemy.github.io/assets/certification-DIprxw-w.js", "imports": ["/coded-alchemy.github.io/assets/with-props-BJdOiEPt.js", "/coded-alchemy.github.io/assets/chunk-K6AXKMTT-DycbfBQN.js", "/coded-alchemy.github.io/assets/componets-BBBwtgY3.js"], "css": ["/coded-alchemy.github.io/assets/certification-D4P7Gp5Y.css"] } }, "url": "/coded-alchemy.github.io/assets/manifest-5cb0c387.js", "version": "5cb0c387" };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/coded-alchemy.github.io/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/certification": {
    id: "routes/certification",
    parentId: "root",
    path: "certification",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
