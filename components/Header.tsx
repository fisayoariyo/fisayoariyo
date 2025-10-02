"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Fisayo Ariyo</h1>

        <nav className="hidden md:flex space-x-6">
          <Link href="#books">Books</Link>
          <Link href="#poems">Poems</Link>
          <Link href="#hobbies">Other Hobbies</Link>
        </nav>

        <div className="md:hidden">
          {menuOpen ? (
            <FiX className="text-2xl" onClick={() => setMenuOpen(false)} />
          ) : (
            <FiMenu className="text-2xl" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
          <Link href="#books" onClick={() => setMenuOpen(false)}>
            Books
          </Link>
          <Link href="#poems" onClick={() => setMenuOpen(false)}>
            Poems
          </Link>
          <Link href="#hobbies" onClick={() => setMenuOpen(false)}>
            Other Hobbies
          </Link>
        </div>
      )}
    </header>
  );
}
