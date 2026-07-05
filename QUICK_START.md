# Quick Start Guide - Daarul Multazam PPDB

Panduan cepat untuk setup dan deploy project ini.

---

## 🎯 Overview

Project ini adalah website PPDB (Penerimaan Peserta Didik Baru) untuk Pondok Pesantren Daarul Multazam dengan tech stack:

- **Frontend:** Next.js 16 (App Router)
- **CMS:** Sanity (Headless CMS)
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel

---

## 📋 Quick Setup (30 menit)

### **1. Setup Sanity Project (15 menit)**

```bash
# Baca panduan lengkap
📖 Buka file: SANITY_SETUP.md
```

**Ringkasan:**
- Buat akun di https://sanity.io
- Buat project baru "Daarul Multazam"
- Buat 2 datasets: `production` dan `registration`
- Buat API Token dengan permission "Editor"
- Setup CORS untuk localhost dan Vercel

**Yang perlu disimpan:**
```
Project ID: <copy-dari-sanity>
API Token: sk...<copy-dari-sanity>
```

---

### **2. Setup Local Development (5 menit)**

```bash
# 1. Clone repository (jika belum)
git clone <repository-url>
cd daarul_multazam

# 2. Install dependencies
npm install --force

# 3. Setup environment variables
copy .env.example .env.local

# 4. Edit .env.local dengan text editor
# Isi dengan Project ID dan Token dari Sanity

# 5. Run development server
npm run dev

# 6. Buka browser
# - Website: http://localhost:3000
# - Sanity Studio: http://localhost:3000/studio
```

---

### **3. Deploy ke Vercel (10 menit)**

```bash
# Baca panduan lengkap
📖 Buka file: DEPLOYMENT.md
```

**Ringkasan:**
1. **Push code ke GitHub** (jika belum)
2. **Import project di Vercel:**
   - Buka https://vercel.com/new
   - Import repository dari GitHub
3. **Set Environment Variables:**
   - Copy dari `.env.local` ke Vercel Settings
4. **Deploy:**
   - Klik "Deploy"
   - ⚠️ Pastikan centang "Clear cache" jika redeploy!

---

## 📁 Project Structure

```
daarul_multazam/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Homepage
│   ├── layout.tsx           # Root layout
│   └── studio/              # Sanity Studio routes
├── components/              # React components
│   └── layout/              # Layout components (Navbar, Footer)
├── sanity/                  # Sanity configuration
│   ├── schemaTypes/         # Content schemas
│   │   ├── article.ts       # Blog/artikel
│   │   ├── galleryItem.ts   # Galeri foto
│   │   ├── testimonial.ts   # Testimoni santri
│   │   └── registration.ts  # Data PPDB
│   ├── lib/                 # Sanity clients
│   └── env.ts               # Environment config
├── public/                  # Static assets
├── .env.local              # Local environment (JANGAN COMMIT!)
├── .env.example            # Template environment
├── sanity.config.ts        # Sanity Studio config
└── next.config.ts          # Next.js config
```

---

## 🎨 Content Schemas

Project ini punya 4 content types di Sanity:

### **1. Article (Artikel/Berita)**
- Title
- Slug
- Cover Image
- Category (Berita, Artikel Islami, Pengumuman)
- Body content
- Published date
- Author

### **2. Gallery Item (Galeri Foto)**
- Title
- Image
- Description
- Date

### **3. Testimonial (Testimoni)**
- Student name
- Testimonial text
- Photo
- Grade/level

### **4. Registration (Data PPDB)**
- Full name
- WhatsApp
- Address
- Previous school
- Target level
- Additional message
- Status (Pending/Diterima/Ditolak)
- Registration date

---

## 🔑 Environment Variables

File `.env.local` (untuk local development):

```env
# Sanity Project ID (dari https://sanity.io/manage)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id

# Dataset untuk konten umum
NEXT_PUBLIC_SANITY_DATASET=production

# API version
NEXT_PUBLIC_SANITY_API_VERSION=2024-05-01

# Dataset untuk data PPDB
NEXT_PUBLIC_SANITY_REGISTRATION_DATASET=registration

# Token untuk write access (dari Sanity API settings)
SANITY_API_TOKEN=your_api_token
```

⚠️ **Variable dengan prefix `NEXT_PUBLIC_` akan exposed ke browser (client-side)**

---

## 🧪 Testing

```bash
# Run development server
npm run dev

# Build for production (test locally)
npm run build
npm run start

# Lint code
npm run lint
```

---

## 🚀 Deployment Checklist

Sebelum deploy, pastikan:

- [x] Sanity project sudah dibuat
- [x] Datasets sudah dibuat (production & registration)
- [x] API Token sudah dibuat
- [x] CORS settings sudah dikonfigurasi
- [x] `.env.local` sudah diisi dengan benar
- [x] `npm run dev` berjalan tanpa error
- [x] Bisa akses Sanity Studio di http://localhost:3000/studio
- [x] Code sudah di-push ke GitHub
- [x] Environment variables sudah di-set di Vercel
- [x] Deploy dengan "Clear cache" option

---

## 🔧 Common Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint

# Sanity
npm run dev              # Sanity Studio accessible at /studio
```

---

## 📚 Documentation Files

- **SANITY_SETUP.md** - Panduan lengkap setup Sanity dari awal
- **DEPLOYMENT.md** - Panduan deploy ke Vercel
- **README.md** - Next.js default documentation
- **AGENTS.md** - Agent rules untuk AI development
- **QUICK_START.md** - File ini (quick reference)

---

## 🆘 Troubleshooting

### Build Error di Vercel

**Error:** "Export doesn't exist in target module"
- **Solusi:** Clear cache saat redeploy
- Klik Deploy → ⋯ → Redeploy → ☑️ Clear cache

**Error:** "Missing environment variable"
- **Solusi:** Set environment variables di Vercel Settings
- Lihat DEPLOYMENT.md untuk detail

### Sanity Studio Error

**Error:** "Project not found"
- **Solusi:** Check Project ID di `.env.local`

**Error:** "Unauthorized"
- **Solusi:** Check API Token, pastikan permission "Editor"

**Error:** CORS error
- **Solusi:** Tambahkan origin URL di Sanity CORS settings

### Local Development Error

**Error:** npm install failed
- **Solusi:** Gunakan `npm install --force`

**Error:** Port 3000 sudah dipakai
- **Solusi:** Matikan aplikasi yang pakai port 3000
- Atau ganti port: `npm run dev -- -p 3001`

---

## 📞 Next Steps

Setelah setup selesai:

1. ✅ **Tambahkan konten** via Sanity Studio
   - Login ke /studio
   - Buat beberapa artikel
   - Upload foto ke galeri
   - Tambahkan testimoni

2. ✅ **Customize website**
   - Edit warna di `tailwind.config`
   - Ganti logo di `components/layout/Navbar.tsx`
   - Update kontak info di `components/layout/Footer.tsx`

3. ✅ **Deploy ke production**
   - Follow DEPLOYMENT.md
   - Set custom domain (optional)

4. ✅ **Monitor dan maintain**
   - Check Vercel analytics
   - Update content via Sanity Studio
   - Monitor form submissions di /studio/ppdb

---

## 🎓 Learning Resources

- Next.js Docs: https://nextjs.org/docs
- Sanity Docs: https://www.sanity.io/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React: https://react.dev

---

**Happy coding! 🚀**

Jika ada pertanyaan, baca dokumentasi lengkap di:
- SANITY_SETUP.md (untuk setup Sanity)
- DEPLOYMENT.md (untuk deploy ke Vercel)
