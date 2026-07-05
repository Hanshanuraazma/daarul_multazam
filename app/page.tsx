export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-emerald-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-emerald-200 text-emerald-800 text-sm font-semibold mb-6">
                <span className="mr-2 text-yellow-500">⭐</span> Pondok Pesantren Tahfidz Modern
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Mencetak Generasi Qurani yang <span className="text-emerald-700">Mandiri</span> dan Berjiwa Entrepreneur
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Bersama Daarul Multazam, kami membina santri agar menjadi hafidz Al-Qur'an yang berakhlak mulia, mandiri, dan siap memberi manfaat bagi umat.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg">
                  Daftar Santri Baru &rsaquo;
                </button>
                <button className="bg-white hover:bg-gray-50 text-emerald-800 border border-emerald-200 px-8 py-3.5 rounded-full font-semibold transition-all">
                  Lihat Profil Pondok &#9654;
                </button>
              </div>
            </div>
            <div className="relative">
              {/* Temporary placeholder for hero image */}
              <div className="aspect-square bg-emerald-100 rounded-2xl flex items-center justify-center border-4 border-white shadow-xl">
                <span className="text-emerald-800 font-bold">Gambar Hero (Menyusul)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rest of the sections will be built here later */}
    </>
  );
}
