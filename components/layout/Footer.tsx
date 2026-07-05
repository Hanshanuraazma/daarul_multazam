"use client";

import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="font-bold text-xl text-emerald-900 leading-none">Daarul Multazam</span>
            </div>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              Mencetak generasi qurani yang mandiri, berakhlak mulia, dan berjiwa entrepreneur.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#0F3D2E] hover:text-white transition-colors text-xs font-bold">
                FB
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#0F3D2E] hover:text-white transition-colors text-xs font-bold">
                IG
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#0F3D2E] hover:text-white transition-colors text-xs font-bold">
                YT
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Quick Link</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-500 hover:text-[#0F3D2E] text-sm">Home</Link></li>
              <li><Link href="#tentang" className="text-gray-500 hover:text-[#0F3D2E] text-sm">Tentang Kami</Link></li>
              <li><Link href="#program" className="text-gray-500 hover:text-[#0F3D2E] text-sm">Program</Link></li>
              <li><Link href="#keunggulan" className="text-gray-500 hover:text-[#0F3D2E] text-sm">Keunggulan</Link></li>
              <li><Link href="#galeri" className="text-gray-500 hover:text-[#0F3D2E] text-sm">Galeri</Link></li>
              <li><Link href="#pendaftaran" className="text-gray-500 hover:text-[#0F3D2E] text-sm">Pendaftaran</Link></li>
              <li><Link href="#kontak" className="text-gray-500 hover:text-[#0F3D2E] text-sm">Kontak</Link></li>
            </ul>
          </div>

          {/* Col 3: Program */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Program</h4>
            <ul className="space-y-3">
              <li className="text-gray-500 text-sm">Tahfidz Al-Qur&apos;an</li>
              <li className="text-gray-500 text-sm">Pendidikan Diniyah</li>
              <li className="text-gray-500 text-sm">Kajian Kitab</li>
              <li className="text-gray-500 text-sm">Pembinaan Akhlak</li>
              <li className="text-gray-500 text-sm">Kemandirian Santri</li>
              <li className="text-gray-500 text-sm">Entrepreneurial Skills</li>
            </ul>
          </div>

          {/* Col 4: Kontak */}
          <div id="kontak">
            <h4 className="font-bold text-gray-900 mb-6">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-500">
                <MapPin className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>Jl. Raya Cenggerang, RT.05/RW.01, Cikarawang, Kec. Dramaga, Kabupaten Bogor, Jawa Barat 16680</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <Phone className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>0822-1010-5600</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <Mail className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>info@daarulmultazam.or.id</span>
              </li>
            </ul>
            {/* Map Placeholder */}
            <div className="mt-6 w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Bogor&zoom=12&size=400x200&sensor=false')] bg-cover opacity-50" />
               <div className="relative z-10 flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded shadow-sm text-xs font-bold text-gray-700">
                 <MapPin className="w-3 h-3 text-red-500" />
                 Daarul Multazam
               </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Pondok Pesantren Daarul Multazam. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-emerald-700 text-sm">Privasi</a>
            <a href="#" className="text-gray-400 hover:text-emerald-700 text-sm">Syarat & Ketentuan</a>
            <a href="#" className="text-gray-400 hover:text-emerald-700 text-sm">Kebijakan</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
