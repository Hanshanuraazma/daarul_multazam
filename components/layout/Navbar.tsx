"use client";

import Link from 'next/link'
import { ChevronRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-emerald-900 leading-none">Daarul Multazam</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link href="/" className="text-gray-900 font-semibold hover:text-emerald-700 transition-colors text-sm">
              Home
            </Link>
            <Link href="#tentang" className="text-gray-600 font-medium hover:text-emerald-700 transition-colors text-sm">
              Tentang
            </Link>
            <Link href="#program" className="text-gray-600 font-medium hover:text-emerald-700 transition-colors text-sm">
              Program
            </Link>
            <Link href="#keunggulan" className="text-gray-600 font-medium hover:text-emerald-700 transition-colors text-sm">
              Keunggulan
            </Link>
            <Link href="#galeri" className="text-gray-600 font-medium hover:text-emerald-700 transition-colors text-sm">
              Galeri
            </Link>
            <Link href="#pendaftaran" className="text-gray-600 font-medium hover:text-emerald-700 transition-colors text-sm">
              Pendaftaran
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link 
              href="#pendaftaran" 
              className="inline-flex items-center gap-2 bg-[#0F3D2E] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#0a2e22] transition-colors shadow-md shadow-[#0F3D2E]/20 text-sm"
            >
              Daftar Sekarang
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 bg-gray-50 rounded-md"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl px-4 pt-2 pb-6 flex flex-col space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-900 font-semibold hover:text-emerald-700 transition-colors text-base px-2 py-1">
            Home
          </Link>
          <Link href="#tentang" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium hover:text-emerald-700 transition-colors text-base px-2 py-1">
            Tentang
          </Link>
          <Link href="#program" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium hover:text-emerald-700 transition-colors text-base px-2 py-1">
            Program
          </Link>
          <Link href="#keunggulan" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium hover:text-emerald-700 transition-colors text-base px-2 py-1">
            Keunggulan
          </Link>
          <Link href="#galeri" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium hover:text-emerald-700 transition-colors text-base px-2 py-1">
            Galeri
          </Link>
          <Link href="#pendaftaran" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium hover:text-emerald-700 transition-colors text-base px-2 py-1">
            Pendaftaran
          </Link>
          <Link 
            href="#pendaftaran" 
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-[#0F3D2E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0a2e22] transition-colors mt-4"
          >
            Daftar Sekarang
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </nav>
  )
}
