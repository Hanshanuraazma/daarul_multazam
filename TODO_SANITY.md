# TODO: Setup Sanity - Checklist untuk User

Ikuti checklist ini step by step. Setelah selesai, kirim credentials ke saya.

---

## ✅ **STEP-BY-STEP CHECKLIST:**

### **1. Buat Akun Sanity** (5 menit)

- [ ] Buka https://sanity.io
- [ ] Klik "Sign up" atau "Get started"
- [ ] Login dengan GitHub (recommended) atau Google atau Email
- [ ] Selesaikan registrasi

---

### **2. Buat Project Baru** (5 menit)

- [ ] Login ke https://sanity.io/manage
- [ ] Klik tombol **"Create project"** atau **"New project"**
- [ ] Isi nama project: **Daarul Multazam**
- [ ] Pilih plan: **Free** (gratis)
- [ ] Klik "Create project"
- [ ] **COPY Project ID yang muncul** (contoh: abc123xyz)
- [ ] **SIMPAN Project ID** di notepad atau tempat aman

---

### **3. Buat Dataset 1: production** (3 menit)

- [ ] Di Sanity Dashboard, pilih project "Daarul Multazam"
- [ ] Klik tab **"Datasets"** di sidebar kiri
- [ ] Klik tombol **"Add dataset"**
- [ ] Isi informasi:
  - Dataset name: **production** (lowercase!)
  - Visibility: **Public** (pilih yang "accessible to everyone")
- [ ] Klik **"Create"**

---

### **4. Buat Dataset 2: registration** (3 menit)

- [ ] Masih di halaman Datasets
- [ ] Klik tombol **"Add dataset"** lagi
- [ ] Isi informasi:
  - Dataset name: **registration** (lowercase!)
  - Visibility: **Private** (pilih yang "accessible with a token")
- [ ] Klik **"Create"**

---

### **5. Buat API Token** (3 menit) - PENTING!

- [ ] Di project Sanity, klik tab **"API"** di sidebar kiri
- [ ] Scroll ke section **"Tokens"**
- [ ] Klik tombol **"Add API token"**
- [ ] Isi informasi:
  - Label: **Vercel Deploy Token**
  - Permissions: **Editor** (HARUS Editor, bukan Viewer!)
- [ ] Klik **"Add token"**
- [ ] **TOKEN AKAN MUNCUL (hanya sekali!)**
- [ ] **COPY TOKEN segera!** (contoh: sk1234567890abcd...)
- [ ] **SIMPAN TOKEN** di notepad atau password manager

⚠️ **PENTING:** Token hanya ditampilkan SEKALI! Jika tidak di-copy, harus buat token baru.

---

### **6. Setup CORS** (5 menit)

- [ ] Masih di tab **"API"**
- [ ] Scroll ke section **"CORS Origins"**
- [ ] Klik tombol **"Add CORS origin"**

**Tambahkan 3 origins berikut satu per satu:**

**Origin 1:**
- [ ] Origin: **http://localhost:3000**
- [ ] Allow credentials: **✅ Centang**
- [ ] Klik "Add"

**Origin 2:**
- [ ] Klik "Add CORS origin" lagi
- [ ] Origin: **https://daarul-multazam.vercel.app** (atau URL Vercel Anda)
- [ ] Allow credentials: **✅ Centang**
- [ ] Klik "Add"

**Origin 3:**
- [ ] Klik "Add CORS origin" lagi
- [ ] Origin: **https://*.vercel.app**
- [ ] Allow credentials: **✅ Centang**
- [ ] Klik "Add"

---

### **7. Kirim Credentials ke Saya** 📤

- [ ] Buka file **SANITY_CREDENTIALS.txt** di folder project
- [ ] Isi dengan informasi yang sudah Anda simpan:
  - Project ID
  - API Token
  - (Vercel URL jika sudah ada)
- [ ] Kirim file atau copy-paste isi file ke chat

**ATAU** kirim format ini:

```
Project ID: abc123xyz
API Token: sk1234567890abcdefghijklmnopqrstuvwxyz
```

---

## ✅ **SELESAI!**

Setelah Anda kirim credentials, saya akan:
1. ✅ Update .env.local dengan credentials Anda
2. ✅ Test koneksi ke Sanity
3. ✅ Setup environment variables untuk Vercel
4. ✅ Siap untuk deploy!

---

## 🆘 **Jika Ada Masalah:**

### **Error: Tidak bisa buat project**
- Coba refresh browser
- Logout dan login lagi
- Gunakan browser lain (Chrome/Firefox)

### **Error: Token tidak muncul**
- Buat token baru
- Pastikan permission "Editor" dipilih
- Copy token segera saat muncul

### **Tidak yakin sudah benar?**
- Screenshot setiap langkah
- Kirim screenshot ke saya untuk verifikasi

---

## ⏱️ **Estimasi Waktu:**

Total waktu yang dibutuhkan: **±25 menit**

- Step 1: 5 menit
- Step 2: 5 menit  
- Step 3: 3 menit
- Step 4: 3 menit
- Step 5: 3 menit
- Step 6: 5 menit
- Step 7: 1 menit

---

**Selamat mengerjakan! Jika ada yang tidak jelas, tanya saja sebelum mulai.** 😊
