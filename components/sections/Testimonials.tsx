"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Anak kami berkembang pesat baik dari segi hafalan, akhlak, maupun kemandiriannya. Terima kasih Daarul Multazam.",
    name: "Bapak Andi",
    role: "Wali Santri",
  },
  {
    quote: "Lingkungan yang sangat mendukung untuk menghafal Al-Qur'an dan belajar. Para ustadz sangat perhatian.",
    name: "Alumni 2018",
    role: "Mahasiswa",
  },
  {
    quote: "Disini saya belajar arti kesabaran, keikhlasan, dan tanggung jawab. Banyak pengalaman berharga.",
    name: "Ahmad Fauzi",
    role: "Santri",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-[#0F3D2E] font-semibold text-sm tracking-widest uppercase mb-8">
          TESTIMONI
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-[#0F3D2E] text-4xl font-serif leading-none mb-4">&quot;</div>
              <p className="text-gray-600 mb-8 italic min-h-[80px]">
                {testi.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold shrink-0">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testi.name}</h4>
                  <p className="text-sm text-gray-500">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
