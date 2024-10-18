"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">
          Car PCP Loan Calculator
        </h1>

        {/* Hamburger menu for mobile */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            <li className="hover:bg-gray-100 p-2 rounded-md group">
              <Link href="/" className="group-hover:text-black text-white">
                Home
              </Link>
            </li>
            <li className="hover:bg-gray-100 p-2 rounded-md group">
              <Link href="/" className="group-hover:text-black text-white">
                Calculator
              </Link>
            </li>
            <li className="hover:bg-gray-100 p-2 rounded-md group">
              <Link href="/about" className="group-hover:text-black text-white">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-black">
          <ul className="flex flex-col items-center py-4">
            <li>
              <Link
                href="/"
                className="text-white hover:text-blue-200 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-white hover:text-blue-200 transition-colors"
              >
                Calculator
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white hover:text-blue-200 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
