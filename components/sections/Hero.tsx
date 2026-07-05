"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden bg-[#F8FAFC]">
      {/* Background styling to match the image */}
      <div className="absolute inset-0 w-full h-full">
        {/* We use Next Image for the hero background */}
        <div className="absolute right-0 top-0 w-full lg:w-[65%] h-full z-0 opacity-90 lg:opacity-100">
          <Image
            src="/hero.png"
            alt="Daarul Multazam"
            fill
            className="object-cover object-left lg:object-center mask-image-hero"
            priority
          />
          {/* Gradient overlay for better text readability on mobile */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent lg:hidden" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 pt-12 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-6"
            >
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-semibold text-gray-700">Pondok Pesantren Tahfidz Modern</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#111827] leading-[1.1] mb-6 tracking-tight"
            >
              Mencetak Generasi<br />
              Qurani yang <span className="text-[#0F3D2E]">Mandiri</span><br />
              dan Berjiwa Entrepreneur
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed"
            >
              Bersama Daarul Multazam, kami membina santri agar menjadi hafidz Al-Qur&apos;an yang berakhlak mulia, mandiri, dan siap memberi manfaat bagi umat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#pendaftaran"
                className="inline-flex items-center justify-center gap-2 bg-[#0F3D2E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0a2e22] transition-colors shadow-lg shadow-[#0F3D2E]/20"
              >
                Daftar Santri Baru
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#tentang"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0F3D2E] px-8 py-4 rounded-full font-semibold border border-gray-200 hover:border-[#0F3D2E] transition-colors"
              >
                Lihat Profil Pondok
                <span className="text-lg leading-none">&#9654;</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
