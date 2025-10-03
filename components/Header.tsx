"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="px-6 py-4 border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <Link href="/" onClick={handleCloseMenu}>
          <h1 className="text-xl font-semibold cursor-pointer">Fisayo Ariyo</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-4">
          <Link href="/poems" className={navLinkClass(pathname === "/poems")}>
            Poetry
          </Link>
          <a href="#projects" className={navLinkClass(false)}>
            Projects
          </a>
          <a href="#about" className={navLinkClass(false)}>
            About
          </a>
          <a href="#subscribe" className={navLinkClass(false)}>
            Subscribe
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="sm:hidden mt-4 flex flex-col space-y-3">
          <Link
            href="/poems"
            onClick={handleCloseMenu}
            className="hover:underline"
          >
            Poetry
          </Link>
          <a
            href="#projects"
            onClick={handleCloseMenu}
            className="hover:underline"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={handleCloseMenu}
            className="hover:underline"
          >
            About
          </a>
          <a
            href="#subscribe"
            onClick={handleCloseMenu}
            className="hover:underline"
          >
            Subscribe
          </a>
        </div>
      )}
    </header>
  );
}

function navLinkClass(active: boolean) {
  return `hover:underline ${
    active ? "font-semibold text-black" : "text-gray-700"
  }`;
}
