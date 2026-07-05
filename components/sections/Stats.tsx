"use client";

import { Calendar, Users, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    id: 1,
    icon: Calendar,
    label: "Sejak",
    value: "2009",
    sublabel: "Berdiri",
  },
  {
    id: 2,
    icon: Users, // Custom icon style for santri
    label: "Lebih dari",
    value: "650+",
    sublabel: "Santri Aktif",
  },
  {
    id: 3,
    icon: BookOpen,
    label: "Program",
    value: "6+",
    sublabel: "Unggulan",
  },
  {
    id: 4,
    icon: GraduationCap,
    label: "Lebih dari",
    value: "1.000+",
    sublabel: "Alumni",
  },
];

export default function Stats() {
  return (
    <section className="relative -mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0F3D2E] rounded-2xl shadow-xl p-8 lg:p-12 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left px-4"
              >
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-white/5 shrink-0">
                  <Icon className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">{stat.label}</p>
                  <h3 className="text-3xl font-bold text-white leading-tight">{stat.value}</h3>
                  <p className="text-white/80 text-sm">{stat.sublabel}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
