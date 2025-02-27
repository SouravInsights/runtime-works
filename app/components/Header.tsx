"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 backdrop-blur bg-black/50 border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl bg-clip-text text-transparent bg-green-400"
        >
          runtime.works
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/manifesto"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Manifesto
          </Link>
          <Link
            href="/thoughts"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Thoughts
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 p-4 bg-black/80">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/manifesto"
            className="text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Manifesto
          </Link>
          <Link
            href="/thoughts"
            className="text-blue-400 hover:text-blue-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Thoughts
          </Link>
        </nav>
      )}
    </header>
  );
}
