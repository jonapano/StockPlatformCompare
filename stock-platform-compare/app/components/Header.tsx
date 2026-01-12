"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-navyblue">
          StockPlatformCompare
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-8 text-gray-700 font-medium">
            <li>
              <Link href="/" className="hover:text-navyblue">
                Home
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-navyblue">
                Platform Reviews
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-navyblue">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-navyblue">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <ul className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-navyblue"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                onClick={() => setMenuOpen(false)}
                className="hover:text-navyblue"
              >
                Platform Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-navyblue"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-navyblue"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
