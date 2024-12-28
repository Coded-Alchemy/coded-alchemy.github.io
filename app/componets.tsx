import React from "react";

export function Header() {
    return (
        <header className="flex flex-col items-center gap-9">
            <h1 className="text-5xl font-bold text-white-900">Coded Alchemy</h1>
        </header>
    );
}

export function Footer() {
    return (
        <footer className="flex flex-col items-center gap-9">
            <nav className="flex flex-row items-center gap-9">

                <a href="https://twitter.com/CodedAlchemy" target="_blank" rel="noopener noreferrer"
                   className="text-sm transition-transform duration-300 hover:scale-110">X</a>

                <a href="https://www.linkedin.com/in/tajiabdullah/" target="_blank" rel="noopener noreferrer"
                   className="text-sm transition-transform duration-300 hover:scale-110">LinkedIn</a>

                <a href="https://tryhackme.com/r/p/TrapRat" target="_blank" rel="noopener noreferrer"
                   className="text-sm transition-transform duration-300 hover:scale-110">TryHackMe</a>

                <a href="https://www.credly.com/users/taji-abdullah.coded-alchemy" target="_blank"
                   rel="noopener noreferrer"
                   className="text-sm transition-transform duration-300 hover:scale-110">Credly</a>

                <a href="https://github.com/Coded-Alchemy" target="_blank" rel="noopener noreferrer"
                   className="text-sm transition-transform duration-300 hover:scale-110">GitHub</a>
            </nav>

            <div className="flex flex-col items-center gap-9"></div>

            <p className="text-sm">&copy;2025 Taji Abdullah</p>
        </footer>
    );
}

export function Navigation() {
    return (
        <div className="flex items-center  ">
            <nav className="flex items-center justify-center space-x-6 items-center">
                {/* Home Link */}
                <a href="/" className="text-xl font-bold transition-transform duration-300 hover:scale-110">Home</a>

                {/* About Link */}
                <a href="/about"
                   className="text-xl font-bold transition-transform duration-300 hover:scale-110">About</a>

                {/* Projects Dropdown with Accordion Animation */}
                <div className="group relative">
                    <h2 className="text-xl font-bold transition-transform duration-300 hover:scale-110 cursor-pointer">
                        Projects
                    </h2>
                    {/* Dropdown Menu */}
                    <ProjectDropDownMenu/>
                </div>

                {/* Certification Link */}
                <a href="/certification"
                   className="text-xl font-bold transition-transform duration-300 hover:scale-110">Certification</a>

                {/* Blog Link */}
                <a href="https://technofiles.hashnode.dev/" target="_blank" rel="noopener noreferrer"
                   className="text-xl font-bold transition-transform duration-300 hover:scale-110">Blog</a>
            </nav>
        </div>
    );
}

function ProjectDropDownMenu() {
    return (
        <div
            className="absolute max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out
            group-hover:max-h-96 group-hover:opacity-100 bg-white dark:bg-gray-800 border border-gray-200
            dark:border-gray-700 mt-2 rounded-lg shadow-lg z-10">
            <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <a href="/project1">Project 1</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <a href="/project2">Project 2</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <a href="/project3">Project 3</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <a href="/project4">Project 4</a>
                </li>
            </ul>
        </div>
    );
}
