# Panduan Deployment ke Vercel

## Environment Variables yang Harus Diset di Vercel

Sebelum deploy, pastikan environment variables berikut sudah diset di Vercel Dashboard:

### Required Variables:

1. **NEXT_PUBLIC_SANITY_PROJECT_ID**
   - Nilai: ID project Sanity Anda
   - Cara mendapatkan: Buka https://sanity.io/manage → pilih project → copy Project ID

2. **NEXT_PUBLIC_SANITY_DATASET**
   - Nilai: `production` (atau nama dataset Anda)
   - Default: `production`

3. **NEXT_PUBLIC_SANITY_API_VERSION**
   - Nilai: `2024-05-01`
   - Default sudah di-set di code

4. **NEXT_PUBLIC_SANITY_REGISTRATION_DATASET**
   - Nilai: `registration` (atau nama dataset untuk PPDB Anda)
   - Default: `registration`

5. **SANITY_API_TOKEN** (Optional, untuk write operations)
   - Nilai: Token dengan write permission dari Sanity
   - Cara mendapatkan: Sanity Dashboard → API → Tokens → Add API Token
   - Permission: Editor atau Admin

## Cara Set Environment Variables di Vercel:

1. Buka project Anda di https://vercel.com
2. Pergi ke **Settings** → **Environment Variables**
3. Tambahkan setiap variable di atas:
   - Name: nama variable (contoh: `NEXT_PUBLIC_SANITY_PROJECT_ID`)
   - Value: nilai yang sesuai
   - Environment: Pilih **Production**, **Preview**, dan **Development**
4. Klik **Save**

## Setelah Set Environment Variables:

1. **PENTING: Clear Build Cache di Vercel**
   - Pergi ke **Settings** → **General** → Scroll ke bawah
   - Cari section **Build & Development Settings**
   - Jika ada tombol "Clear Build Cache", klik tombol tersebut
   
2. Pergi ke **Deployments** tab
3. Klik titik tiga (...) pada deployment terakhir
4. Pilih **Redeploy**
5. **CENTANG** checkbox "Clear cache and redeploy" atau pilih "Rebuild without cache"
6. Klik **Redeploy**

## Troubleshooting:

### Error: "Export doesn't exist in target module" atau "Cannot find module"
- **Root Cause**: Vercel menggunakan cache build lama yang punya file yang sudah dihapus
- **Solusi**: 
  1. Push commit terbaru ke Git
  2. Di Vercel Deployments, klik titik tiga (...) → Redeploy
  3. **WAJIB centang "Clear cache and redeploy"**
  4. Tunggu build selesai

### Error: "Missing environment variable"
- **Solusi**: Pastikan semua env variables sudah diset di Vercel Dashboard
- Re-deploy setelah menambahkan variables

### Error: "Export doesn't exist in target module"
- **Solusi**: Sudah diperbaiki dengan config di `next.config.ts`
- Pastikan versi Next.js adalah 16.2.10 atau lebih baru

### Build Success tapi Runtime Error:
- **Solusi**: Check environment variables di Runtime Logs
- Pastikan `NEXT_PUBLIC_` prefix digunakan untuk client-side variables

## Local Development:

1. Copy `.env.example` menjadi `.env.local`
2. Isi dengan nilai yang sesuai
3. Jangan commit `.env.local` ke Git
4. Run `npm run dev` untuk development

## Notes:

- File `.env.local` tidak akan di-deploy ke Vercel
- Semua environment variables harus diset manual di Vercel Dashboard
- Variables dengan prefix `NEXT_PUBLIC_` bisa diakses di client-side
- Variables tanpa prefix hanya bisa diakses di server-side
