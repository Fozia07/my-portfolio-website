'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#9b4819] text-[#f2e1d6] sticky top-0 z-50 shadow-md">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo or Brand */}
          <Link href="/" className="text-xl lg:text-2xl font-extrabold tracking-wide">
            Fozia.dev
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8 text-lg lg:text-xl font-semibold">
            <li className="hover:text-white transition duration-200">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-white transition duration-200">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-white transition duration-200">
              <Link href="/services">Services</Link>
            </li>
            <li className="hover:text-white transition duration-200">
              <Link href="/contact-me">Contact</Link>
            </li>
          </ul>

          {/* Mobile menu icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 py-4 text-lg font-semibold">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li>
              <Link href="/contact-me" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
