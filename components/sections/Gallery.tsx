"use client";

import { motion } from "framer-motion";

// Placeholder gallery array
const galleryImages = [1, 2, 3, 4, 5, 6];

export default function Gallery() {
  return (
    <section id="galeri" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <div className="text-[#0F3D2E] font-semibold text-sm tracking-widest uppercase mb-3">
              GALERI KEGIATAN
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Dokumentasi Kegiatan Santri
            </h2>
          </div>
          <button className="px-6 py-2 border border-gray-300 rounded-full font-medium text-gray-700 hover:border-[#0F3D2E] hover:text-[#0F3D2E] transition-colors shrink-0">
            Lihat Semua
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group bg-gray-100"
            >
              <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors z-10" />
              <div className="w-full h-full flex items-center justify-center text-emerald-800/50 font-medium text-sm">
                Foto {item} (Menyusul)
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
