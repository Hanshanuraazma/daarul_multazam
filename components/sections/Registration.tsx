"use client";

import { Check, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const facilities = [
  "Asrama Nyaman",
  "Ruang Belajar Representatif",
  "Masjid & Sarana Ibadah",
  "Lapangan Olahraga",
  "Kantin Sehat",
  "Lingkungan Asri & Aman",
];

const formSchema = z.object({
  nama: z.string().min(3, { message: "Nama minimal 3 karakter" }),
  wa: z.string().min(10, { message: "Nomor WhatsApp tidak valid" }),
  alamat: z.string().optional(),
  asalSekolah: z.string().optional(),
  jenjang: z.string().min(1, { message: "Silakan pilih jenjang" }),
  pesan: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    const text = `Assalamu'alaikum, saya ingin mendaftar PPDB Daarul Multazam.
    
*Data Calon Santri:*
- Nama Lengkap: ${data.nama}
- No. WhatsApp: ${data.wa}
- Alamat: ${data.alamat || "-"}
- Asal Sekolah: ${data.asalSekolah || "-"}
- Jenjang: ${data.jenjang}
- Pesan Tambahan: ${data.pesan || "-"}

Mohon informasi selanjutnya. Terima kasih.`;

    const encodedText = encodeURIComponent(text);
    const phoneNumber = "6282210105600";
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <section id="pendaftaran" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Info */}
            <div className="p-8 md:p-12 lg:p-16 bg-gradient-to-br from-emerald-50 to-white">
              <div className="text-[#0F3D2E] font-semibold text-sm tracking-widest uppercase mb-3">
                PENDAFTARAN SANTRI BARU
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Bergabung Bersama<br />Daarul Multazam
              </h2>
              <p className="text-gray-600 mb-10">
                Daftarkan putra anda sekarang dan jadilah bagian dari keluarga besar kami.
              </p>

              <h4 className="font-bold text-gray-900 mb-4">FASILITAS KAMI</h4>
              <ul className="space-y-3 mb-10">
                {facilities.map((fac, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-gray-700">{fac}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#form-daftar"
                className="inline-flex items-center justify-center gap-2 bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-600 transition-colors shadow-lg shadow-yellow-500/30"
              >
                Daftar Sekarang via WhatsApp
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            {/* Right Form */}
            <div id="form-daftar" className="p-8 md:p-12 lg:p-16 relative">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Form Pendaftaran</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      {...register("nama")}
                      placeholder="Nama Lengkap"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]/20 focus:border-[#0F3D2E] transition-all bg-gray-50"
                    />
                    {errors.nama && <p className="text-red-500 text-xs mt-1">{errors.nama.message}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      {...register("wa")}
                      placeholder="Nomor WhatsApp"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]/20 focus:border-[#0F3D2E] transition-all bg-gray-50"
                    />
                    {errors.wa && <p className="text-red-500 text-xs mt-1">{errors.wa.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      {...register("alamat")}
                      placeholder="Alamat"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]/20 focus:border-[#0F3D2E] transition-all bg-gray-50"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      {...register("asalSekolah")}
                      placeholder="Asal Sekolah"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]/20 focus:border-[#0F3D2E] transition-all bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <select
                    {...register("jenjang")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]/20 focus:border-[#0F3D2E] transition-all bg-gray-50 text-gray-700"
                    defaultValue=""
                  >
                    <option value="" disabled>Pilih Jenjang yang Dituju</option>
                    <option value="SMP">SMP Tahfidz</option>
                    <option value="SMA">SMA Tahfidz</option>
                    <option value="Takhossus">Takhossus (Fokus Hafalan)</option>
                  </select>
                  {errors.jenjang && <p className="text-red-500 text-xs mt-1">{errors.jenjang.message}</p>}
                </div>

                <div>
                  <textarea
                    {...register("pesan")}
                    placeholder="Pesan Tambahan (Opsional)"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]/20 focus:border-[#0F3D2E] transition-all bg-gray-50 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#0F3D2E] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0a2e22] transition-colors shadow-lg shadow-[#0F3D2E]/20"
                >
                  Kirim Pendaftaran via WhatsApp
                  <MessageCircle className="w-5 h-5" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
