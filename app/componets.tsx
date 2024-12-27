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
            <p>&copy; Taji Abdullah 2025</p>
        </footer>
    );
}