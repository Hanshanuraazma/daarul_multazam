'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Program', href: '#program' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Pendaftaran', href: '#pendaftaran' },
    { name: 'Kontak', href: '#kontak' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              {/* Placeholder for Logo */}
              <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="font-bold text-xl text-emerald-900">Daarul Multazam</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-gray-700 hover:text-emerald-700 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#pendaftaran"
              className="bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg"
            >
              Daftar Sekarang &rsaquo;
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-700"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#pendaftaran"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-emerald-800 text-white px-5 py-3 rounded-md font-semibold"
            >
              Daftar Sekarang &rsaquo;
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
