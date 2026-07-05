"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Heart, Clock, UserCheck, ChevronRight } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Amanah",
    desc: "Menjaga kepercayaan dengan penuh tanggung jawab",
  },
  {
    icon: Heart,
    title: "Ikhlas",
    desc: "Bergerak karena Allah dalam setiap langkah pendidikan",
  },
  {
    icon: Clock,
    title: "Disiplin",
    desc: "Membentuk karakter santri yang kuat dan konsisten",
  },
  {
    icon: UserCheck,
    title: "Mandiri",
    desc: "Santri yang berdaya, tangguh, dan siap menghadapi masa depan",
  },
];

export default function About() {
  return (
    <section id="tentang" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[#0F3D2E] font-semibold text-sm tracking-widest uppercase mb-3">
              TENTANG DAARUL MULTAZAM
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Bermula dari Sebuah Garasi,<br />
              Kini Menjadi <span className="text-[#0F3D2E]">Harapan Umat</span>
            </h2>
            <div className="text-gray-600 space-y-4 mb-8">
              <p>
                Daarul Multazam adalah lembaga pondok pesantren tahfidz di Bogor yang berdedikasi mencetak penghafal Al-Qur&apos;an yang mandiri serta <strong>berjiwa entrepreneur</strong>.
              </p>
              <p>
                Sejak berdiri pada 22 Maret 2009 di Bogor, Daarul Multazam memulai langkahnya dari sebuah garasi rumah yang menjadi tempat anak-anak yatim dan dhuafa menghafal Al-Qur&apos;an dan belajar. Dengan segala keterbatasan ekonomi dan sosial, para santri tetap bersemangat dalam menghafal Al-Qur&apos;an.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {values.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#0F3D2E] flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#tentang"
              className="inline-flex items-center justify-center gap-2 bg-[#0F3D2E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0a2e22] transition-colors"
            >
              Selengkapnya Tentang Kami
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-gray-100">
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply z-10" />
              <div className="w-full h-full bg-emerald-800/20 flex items-center justify-center">
                 <span className="text-emerald-800 font-medium">Gambar Santri Belajar</span>
              </div>
            </div>

            {/* Floating Quote Box */}
            <div className="absolute -bottom-8 -left-8 md:-left-12 bg-[#0F3D2E] text-white p-6 md:p-8 rounded-2xl shadow-xl max-w-[280px] z-20">
              <div className="text-4xl text-yellow-500 font-serif leading-none mb-2">&quot;</div>
              <p className="text-sm md:text-base italic mb-4">
                Ilmu tanpa akhlak adalah kegelapan, akhlak tanpa ilmu adalah kesia-siaan.
              </p>
              <div className="text-xs font-semibold text-yellow-500 uppercase tracking-wider">
                Daarul Multazam
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(circle_at_center,_#0F3D2E_2px,_transparent_2px)] bg-[length:12px_12px] opacity-20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
