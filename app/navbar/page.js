"use client";
import { useState } from "react";
import Link from "next/link";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800 py-4 shadow-md navbar">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl">
          Blog App
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-200">Home</Link> 
          <Link href="/blogs" className="text-white hover:text-gray-200">Blogs</Link>
          <Link href="/about" className="text-white hover:text-gray-200">About</Link>    
          <Link href="/contact" className="text-white hover:text-gray-200">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/" className="block text-white hover:text-gray-200">Home</Link>
          <Link href="/blogs" className="block text-white hover:text-gray-200">Blogs</Link>
          <Link href="/about" className="block text-white hover:text-gray-200">About</Link>
          <Link href="/contact" className="block text-white hover:text-gray-200">Contact</Link>
        </div>
      )}


      
    
    </div>
  );
}
