# Panduan Setup Sanity CMS untuk Daarul Multazam

Ikuti langkah-langkah berikut untuk membuat dan konfigurasi Sanity project dari awal.

---

## 📋 Prerequisites

- Node.js terinstall (v18 atau lebih baru)
- npm atau yarn
- Akun Sanity (gratis) - https://sanity.io

---

## 🚀 STEP 1: Buat Akun Sanity (Jika Belum Punya)

1. **Buka** https://sanity.io
2. **Klik** tombol "Get Started" atau "Sign Up"
3. **Pilih** metode sign up:
   - Login dengan GitHub (recommended)
   - Login dengan Google
   - Atau gunakan email
4. **Selesaikan** proses registrasi

---

## 🏗️ STEP 2: Buat Project Baru di Sanity

### **Opsi A: Via Sanity Dashboard (Recommended)**

1. **Login** ke https://sanity.io/manage
2. **Klik** tombol **"Create project"** atau **"New project"**
3. **Isi informasi project:**
   ```
   Project name: Daarul Multazam
   ```
4. **Pilih plan:** 
   - Pilih **"Free"** (cukup untuk development dan production kecil-menengah)
   - Free plan includes:
     - 10,000 documents
     - 5GB assets
     - 10GB bandwidth/month
     - Unlimited API requests
5. **Klik** "Create project"
6. **SIMPAN** informasi berikut yang muncul:
   ```
   Project ID: <akan-muncul-ID-unik>
   ```
   Contoh: `abc123de`

### **Opsi B: Via CLI (Alternative)**

Jika ingin menggunakan CLI:

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Login ke Sanity
sanity login

# Project sudah ada, tidak perlu buat lagi via CLI
```

---

## 🗄️ STEP 3: Buat Dataset di Sanity

Project Sanity membutuhkan **2 datasets** untuk project ini:

### **Dataset 1: production (untuk konten umum)**

1. Di **Sanity Dashboard** (https://sanity.io/manage)
2. **Pilih** project "Daarul Multazam"
3. Klik tab **"Datasets"** di sidebar
4. Klik tombol **"Add dataset"**
5. **Isi informasi:**
   ```
   Name: production
   Visibility: Public (recommended untuk website public)
   ```
6. Klik **"Create"**

### **Dataset 2: registration (untuk data PPDB)**

1. Masih di halaman **Datasets**
2. Klik tombol **"Add dataset"** lagi
3. **Isi informasi:**
   ```
   Name: registration
   Visibility: Private (recommended untuk data siswa)
   ```
4. Klik **"Create"**

---

## 🔑 STEP 4: Buat API Token untuk Write Access

Token ini diperlukan agar website bisa submit data pendaftaran ke Sanity.

1. Di **Sanity Dashboard**, pilih project "Daarul Multazam"
2. Klik tab **"API"** di sidebar
3. Scroll ke section **"Tokens"**
4. Klik tombol **"Add API token"**
5. **Isi informasi:**
   ```
   Label: Vercel Deployment Token
   Permissions: Editor
   ```
   > **Note:** Pilih "Editor" agar bisa read dan write data
6. Klik **"Add token"**
7. **COPY TOKEN YANG MUNCUL** (token hanya muncul sekali!)
   ```
   Token: sk... (panjang sekitar 40-50 karakter)
   ```
8. **SIMPAN** token ini di tempat aman (password manager)

⚠️ **PENTING:** Token hanya ditampilkan sekali! Jika hilang, harus buat token baru.

---

## 🔧 STEP 5: Konfigurasi CORS di Sanity

CORS perlu dikonfigurasi agar website (frontend) bisa akses Sanity API.

1. Di **Sanity Dashboard**, pilih project "Daarul Multazam"
2. Klik tab **"API"** di sidebar
3. Scroll ke section **"CORS Origins"**
4. Klik tombol **"Add CORS origin"**
5. **Tambahkan origin berikut satu per satu:**

   **Origin 1: Localhost (untuk development)**
   ```
   Origin: http://localhost:3000
   Allow credentials: ✅ (centang)
   ```

   **Origin 2: Vercel Production**
   ```
   Origin: https://daarul-multazam.vercel.app
   Allow credentials: ✅ (centang)
   ```
   > Ganti `daarul-multazam.vercel.app` dengan URL Vercel Anda

   **Origin 3: Vercel Preview (untuk testing)**
   ```
   Origin: https://*.vercel.app
   Allow credentials: ✅ (centang)
   ```

6. Klik **"Add"** untuk setiap origin

---

## 💻 STEP 6: Setup Environment Variables di Local

Sekarang kita setup environment variables di komputer lokal untuk development.

1. **Buka** folder project di VS Code atau editor Anda
2. **Copy** file `.env.example` menjadi `.env.local`:
   ```bash
   copy .env.example .env.local
   ```
   
3. **Edit** file `.env.local` dan isi dengan nilai yang sudah Anda simpan:
   ```env
   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc123de
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-05-01
   NEXT_PUBLIC_SANITY_REGISTRATION_DATASET=registration
   
   # Sanity Write Token (dari STEP 4)
   SANITY_API_TOKEN=sk...your-token-here
   ```

4. **Ganti** nilai berikut:
   - `abc123de` → dengan Project ID Anda (dari STEP 2)
   - `sk...your-token-here` → dengan API Token Anda (dari STEP 4)

5. **Save** file `.env.local`

⚠️ **PENTING:** Jangan commit file `.env.local` ke Git! (sudah ada di `.gitignore`)

---

## 🎨 STEP 7: Inisialisasi Sanity Studio (Content Management)

Sanity Studio adalah dashboard admin untuk manage konten.

1. **Install dependencies** (jika belum):
   ```bash
   npm install --force
   ```

2. **Test apakah Sanity config sudah benar:**
   ```bash
   npm run dev
   ```

3. **Buka browser** dan akses:
   ```
   http://localhost:3000/studio
   ```

4. **Login** dengan akun Sanity Anda
5. **Anda akan melihat Sanity Studio** dengan menu:
   - Article
   - Gallery Item
   - Testimonial
   - Data PPDB

6. **Test create content:**
   - Klik "Article"
   - Klik "Create new Article"
   - Isi form dan klik "Publish"
   - Jika berhasil, content tersimpan!

---

## 🌐 STEP 8: Deploy Sanity Studio (Optional tapi Recommended)

Anda bisa akses Sanity Studio dari URL production tanpa perlu run dev server.

### **Cara 1: Via Vercel (Sudah otomatis)**

Sanity Studio sudah include di project Next.js Anda di route `/studio`.
Setelah deploy ke Vercel, akses:
```
https://your-domain.vercel.app/studio
```

### **Cara 2: Deploy ke Sanity Cloud (Standalone)**

Jika ingin Sanity Studio terpisah:

```bash
# Di folder project
npm run build

# Deploy studio ke Sanity Cloud
npx sanity deploy
```

Akan mendapat URL seperti:
```
https://daarul-multazam.sanity.studio
```

---

## ✅ STEP 9: Verifikasi Setup

Checklist untuk memastikan semuanya sudah benar:

- [ ] Project Sanity sudah dibuat
- [ ] Dataset "production" sudah dibuat
- [ ] Dataset "registration" sudah dibuat
- [ ] API Token sudah dibuat dan disimpan
- [ ] CORS origins sudah dikonfigurasi
- [ ] File `.env.local` sudah dibuat dan diisi
- [ ] `npm run dev` berjalan tanpa error
- [ ] Bisa akses http://localhost:3000/studio
- [ ] Bisa login di Sanity Studio
- [ ] Bisa create dan publish content

---

## 📊 STEP 10: Ringkasan Informasi yang Perlu Disimpan

Simpan informasi berikut untuk digunakan di Vercel deployment:

```
===========================================
SANITY PROJECT INFORMATION
===========================================

Project Name: Daarul Multazam
Project ID: <your-project-id>

Datasets:
- production
- registration

API Token: sk...<your-token>

CORS Origins:
- http://localhost:3000
- https://daarul-multazam.vercel.app
- https://*.vercel.app

===========================================
```

---

## 🚀 STEP 11: Deploy ke Vercel

Setelah semua setup Sanity selesai, ikuti panduan di **DEPLOYMENT.md** untuk:

1. Set environment variables di Vercel (gunakan nilai dari `.env.local`)
2. Deploy project ke Vercel
3. Test di production URL

---

## 🔍 Troubleshooting

### Error: "Project not found"
- **Solusi:** Cek apakah Project ID di `.env.local` sudah benar
- Buka https://sanity.io/manage → copy Project ID yang benar

### Error: "Unauthorized" atau "403 Forbidden"
- **Solusi:** API Token salah atau tidak punya permission
- Buat token baru dengan permission "Editor"

### Error: "CORS error"
- **Solusi:** Tambahkan origin URL Anda di CORS settings
- Sanity Dashboard → API → CORS Origins

### Tidak bisa login di Studio
- **Solusi:** Pastikan sudah login di https://sanity.io
- Clear browser cache dan cookies
- Coba login lagi

### Dataset tidak muncul
- **Solusi:** Pastikan dataset name di `.env.local` sama dengan yang dibuat di Sanity
- Dataset name case-sensitive!

---

## 📚 Resources

- Sanity Documentation: https://www.sanity.io/docs
- Sanity Schema Documentation: https://www.sanity.io/docs/schema-types
- Next.js + Sanity: https://www.sanity.io/plugins/next-sanity
- Sanity Studio: https://www.sanity.io/docs/sanity-studio

---

## 🆘 Need Help?

Jika ada error atau butuh bantuan:

1. Check error message di browser console (F12)
2. Check error message di terminal
3. Lihat troubleshooting section di atas
4. Baca Sanity docs: https://www.sanity.io/docs

---

**Selamat! Setup Sanity sudah selesai.** 

Sekarang Anda bisa lanjut ke **DEPLOYMENT.md** untuk deploy ke Vercel.
