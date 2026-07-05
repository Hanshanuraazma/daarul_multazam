"use client";

import { motion } from "framer-motion";
import { BookOpen, Star, Moon, Users, HandCoins, UserHeart } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Fokus Tahfidz\nAl-Qur'an",
  },
  {
    icon: Star,
    title: "Pembinaan\nKarakter",
  },
  {
    icon: Moon,
    title: "Lingkungan\nIslami",
  },
  {
    icon: Users,
    title: "Santri\nMandiri",
  },
  {
    icon: HandCoins,
    title: "Nilai\nEntrepreneur",
  },
  {
    icon: UserHeart,
    title: "Pengasuhan\nPenuh Perhatian",
  },
];

export default function WhyUs() {
  return (
    <section id="keunggulan" className="py-24 bg-[#0F3D2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4">
            <div className="text-yellow-500 font-semibold text-sm tracking-widest uppercase mb-3">
              KEUNGGULAN KAMI
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Mengapa Memilih<br />Daarul Multazam?
            </h2>
            <p className="text-white/80 leading-relaxed text-lg">
              Kami berkomitmen memberikan pendidikan terbaik untuk mencetak generasi qurani yang siap berkontribusi bagi umat dan bangsa.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-6 text-center">
              {features.map((feat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-16 h-16 rounded-full border border-yellow-500/30 flex items-center justify-center bg-white/5 mb-4 group-hover:bg-yellow-500 transition-colors">
                    <feat.icon className="w-8 h-8 text-yellow-500 group-hover:text-[#0F3D2E] transition-colors" />
                  </div>
                  <h4 className="font-semibold text-sm md:text-base whitespace-pre-line leading-tight">
                    {feat.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
