import React from "react";
import {NavLink} from "react-router";

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
            <p>&copy;2025 Taji Abdullah</p>
        </footer>
    );
}

export function Navigation() {
    return (
        <nav className="flex flex-row items-center gap-9">
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="/about" end>
                About
            </NavLink>
            <NavLink to="/about" end>
                Projects
            </NavLink>
            <a href="https://technofiles.hashnode.dev/" target="_blank" rel="noopener noreferrer">
                Blog
            </a>
        </nav>
    );
}
