import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="font-bold text-xl text-emerald-900">Daarul Multazam</span>
            </div>
            <p className="text-gray-600 mb-6">
              Mencetak generasi qurani yang mandiri, berakhlak mulia, dan berjiwa entrepreneur.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-700 font-semibold">
                FB
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-700 font-semibold">
                IG
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-700 font-semibold">
                YT
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Quick Link</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-600 hover:text-emerald-700">Home</Link></li>
              <li><Link href="#tentang" className="text-gray-600 hover:text-emerald-700">Tentang Kami</Link></li>
              <li><Link href="#program" className="text-gray-600 hover:text-emerald-700">Program</Link></li>
              <li><Link href="#keunggulan" className="text-gray-600 hover:text-emerald-700">Keunggulan</Link></li>
              <li><Link href="#galeri" className="text-gray-600 hover:text-emerald-700">Galeri</Link></li>
              <li><Link href="#pendaftaran" className="text-gray-600 hover:text-emerald-700">Pendaftaran</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Program</h3>
            <ul className="space-y-4">
              <li className="text-gray-600">Tahfidz Al-Qur'an</li>
              <li className="text-gray-600">Pendidikan Diniyah</li>
              <li className="text-gray-600">Kajian Kitab</li>
              <li className="text-gray-600">Pembinaan Akhlak</li>
              <li className="text-gray-600">Kemandirian Santri</li>
              <li className="text-gray-600">Entrepreneurial Skills</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-emerald-700 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-600">Jl. Raya Cengkareng, RT.05/RW.01, Cikarawang, Kec. Dramaga, Kabupaten Bogor, Jawa Barat 16680</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-emerald-700 flex-shrink-0" size={20} />
                <span className="text-gray-600">0822-1010-5600</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-emerald-700 flex-shrink-0" size={20} />
                <span className="text-gray-600">info@daarulmultazam.or.id</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Pondok Pesantren Daarul Multazam. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-emerald-700">Privasi</Link>
            <Link href="#" className="hover:text-emerald-700">Syarat & Ketentuan</Link>
            <Link href="#" className="hover:text-emerald-700">Kebijakan</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
