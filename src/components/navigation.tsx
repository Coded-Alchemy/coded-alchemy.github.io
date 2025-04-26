// This file contains the applications main navigation component.

import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <div className="flex items-center  ">
            <nav className="flex items-center justify-center space-x-6">
                {/* Home Link */}
                <Link to={"/"} className="text-xl font-bold transition-transform duration-300 hover:scale-110">Home</Link>

                {/* About Link */}
                <Link to={"about"} className="text-xl font-bold transition-transform duration-300 hover:scale-110">About</Link>


                 {/*Projects Dropdown with Accordion Animation */}
                <div className="group relative">
                    <h2 className="text-xl font-bold transition-transform duration-300 hover:scale-110 cursor-pointer">
                        Projects
                    </h2>
                    {/* Dropdown Menu */}
                    <ProjectDropDownMenu/>
                </div>

                {/* Certification Link */}
                <Link to={"certification"}
                   className="text-xl font-bold transition-transform duration-300 hover:scale-110">Certification</Link>

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
                    <Link to={"hashcatnip"}
                          className="text-med font-bold transition-transform duration-300 hover:scale-110">Hash Catnip</Link>
                </li>
                {/*<li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">*/}
                {/*    <a href="/project2">Project 2</a>*/}
                {/*</li>*/}
                {/*<li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">*/}
                {/*    <a href="/project3">Project 3</a>*/}
                {/*</li>*/}
                {/*<li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">*/}
                {/*    <a href="/project4">Project 4</a>*/}
                {/*</li>*/}
            </ul>
        </div>
    );
}