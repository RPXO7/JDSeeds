'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-12 w-32">
              <Image
                src="/assets/brands/jd-seeds.png"
                alt="JD SEEDS"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-[#1B5E20] hidden sm:block">
              JD SEEDS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#1B5E20] font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#1B5E20] font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-[#1B5E20] font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#1B5E20] font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-[#1B5E20] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#2E7D32] transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-[#1B5E20] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-[#1B5E20] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/products"
              className="block py-2 text-gray-700 hover:text-[#1B5E20] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-[#1B5E20] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block mt-4 bg-[#1B5E20] text-white px-6 py-2 rounded-lg font-medium text-center hover:bg-[#2E7D32] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

