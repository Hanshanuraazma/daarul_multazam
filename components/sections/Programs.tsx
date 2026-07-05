"use client";

import { motion } from "framer-motion";
import { BookOpen, Heart, Book, BookMarked, UserCog, Briefcase } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Tahfidz Al-Qur'an",
    desc: "Program tahfidz terstruktur dengan target hafalan yang jelas dan terukur.",
  },
  {
    icon: Heart,
    title: "Pembinaan Akhlak",
    desc: "Membentuk karakter Islami berlandaskan Al-Qur'an dan sunnah.",
  },
  {
    icon: Book,
    title: "Pendidikan Diniyah",
    desc: "Pembelajaran ilmu agama secara mendalam dan menyeluruh.",
  },
  {
    icon: BookMarked,
    title: "Kajian Kitab",
    desc: "Kajian kitab kuning untuk memahami ilmu para ulama.",
  },
  {
    icon: UserCog,
    title: "Kemandirian Santri",
    desc: "Santri dilatih mandiri dalam kehidupan sehari-hari dan berorganisasi.",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurial Skills",
    desc: "Membekali santri dengan keterampilan dan jiwa entrepreneur.",
  },
];

export default function Programs() {
  return (
    <section id="program" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-[#0F3D2E] font-semibold text-sm tracking-widest uppercase mb-3">
            PROGRAM UNGGULAN
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Kurikulum Pendidikan Komprehensif
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {programs.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center text-[#0F3D2E] mb-6 group-hover:scale-110 group-hover:bg-[#0F3D2E] group-hover:text-white transition-all">
                <prog.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">{prog.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {prog.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
