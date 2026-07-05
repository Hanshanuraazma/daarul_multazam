# Workflow & Architecture - Daarul Multazam PPDB

Dokumen ini menjelaskan alur kerja dan arsitektur aplikasi.

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        USER ACCESS                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  👤 Pengunjung Website          👨‍💼 Admin/Staff             │
│  (Calon Santri/Wali)           (Pengelola Pondok)          │
│         │                              │                     │
│         │                              │                     │
│         ▼                              ▼                     │
│  ┌──────────────┐            ┌─────────────────┐           │
│  │   Website    │            │  Sanity Studio  │           │
│  │  (Next.js)   │            │  CMS Dashboard  │           │
│  └──────────────┘            └─────────────────┘           │
│         │                              │                     │
└─────────┼──────────────────────────────┼─────────────────────┘
          │                              │
          │                              │
          ▼                              ▼
   ┌────────────────────────────────────────────┐
   │         Sanity Cloud (Backend)             │
   │                                            │
   │  ┌──────────────┐    ┌─────────────────┐ │
   │  │  Dataset:    │    │   Dataset:      │ │
   │  │  production  │    │  registration   │ │
   │  │              │    │                 │ │
   │  │ - Articles   │    │ - PPDB Forms    │ │
   │  │ - Gallery    │    │ - Student Data  │ │
   │  │ - Testimonial│    │                 │ │
   │  └──────────────┘    └─────────────────┘ │
   └────────────────────────────────────────────┘
```

---

## 🔄 Data Flow

### **1. Visitor Flow (Pengunjung Website)**

```
1. User mengakses website
   └─> Next.js renders homepage
       └─> Fetch data dari Sanity (articles, gallery, testimonials)
           └─> Display content dinamis

2. User mengisi form pendaftaran
   └─> Form validation (React Hook Form + Zod)
       └─> Submit ke API Route (/api/register)
           └─> Save to Sanity (registration dataset)
               └─> Show success message
                   └─> (Optional) Send WhatsApp notification
```

### **2. Admin Flow (Pengelola Pondok)**

```
1. Admin login ke Sanity Studio (/studio)
   └─> Authenticate dengan Sanity account

2. Manage Content
   ├─> Create/Edit Articles
   ├─> Upload Gallery Images
   ├─> Add/Edit Testimonials
   └─> Review PPDB Submissions
       ├─> View applicant data
       ├─> Change status (Pending/Diterima/Ditolak)
       └─> Export data (optional)

3. Changes auto-published
   └─> Website immediately shows updated content
       (via Sanity CDN & Next.js ISR/SSR)
```

---

## 📊 Content Schema Relationships

```
┌─────────────────────────────────────────────────────────┐
│                   SANITY SCHEMAS                         │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Dataset: production                                    │
│  ┌────────────────────────────────────────────┐        │
│  │  Article                                    │        │
│  │  ├─ title (string)                         │        │
│  │  ├─ slug (slug)                            │        │
│  │  ├─ coverImage (image)                     │        │
│  │  ├─ category (string)                      │        │
│  │  ├─ body (block content)                   │        │
│  │  ├─ publishedAt (datetime)                 │        │
│  │  └─ author (string)                        │        │
│  └────────────────────────────────────────────┘        │
│                                                          │
│  ┌────────────────────────────────────────────┐        │
│  │  Gallery Item                               │        │
│  │  ├─ title (string)                         │        │
│  │  ├─ image (image)                          │        │
│  │  ├─ description (text)                     │        │
│  │  └─ date (datetime)                        │        │
│  └────────────────────────────────────────────┘        │
│                                                          │
│  ┌────────────────────────────────────────────┐        │
│  │  Testimonial                                │        │
│  │  ├─ studentName (string)                   │        │
│  │  ├─ testimonialText (text)                 │        │
│  │  ├─ photo (image)                          │        │
│  │  └─ grade (string)                         │        │
│  └────────────────────────────────────────────┘        │
│                                                          │
│  Dataset: registration                                  │
│  ┌────────────────────────────────────────────┐        │
│  │  Registration (PPDB Data)                   │        │
│  │  ├─ fullName (string)                      │        │
│  │  ├─ whatsapp (string)                      │        │
│  │  ├─ address (text)                         │        │
│  │  ├─ previousSchool (string)                │        │
│  │  ├─ targetLevel (string)                   │        │
│  │  ├─ additionalMessage (text)               │        │
│  │  ├─ status (string) ← Editable by admin    │        │
│  │  └─ registrationDate (datetime)            │        │
│  └────────────────────────────────────────────┘        │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 Deployment Flow

```
┌──────────────────────────────────────────────────────────┐
│                    DEPLOYMENT FLOW                        │
└──────────────────────────────────────────────────────────┘

1. Developer makes changes locally
   └─> Edit code in VS Code
       └─> Test dengan `npm run dev`
           └─> Verify di localhost:3000

2. Commit and push to GitHub
   └─> git add .
       └─> git commit -m "message"
           └─> git push origin main

3. Vercel auto-deploy (CI/CD)
   └─> Detect push to main branch
       └─> Pull latest code
           └─> Install dependencies
               └─> Build Next.js (npm run build)
                   └─> Run tests (if any)
                       └─> Deploy to Vercel CDN
                           └─> Assign URL (auto/custom)

4. Production live!
   └─> Website accessible globally
       └─> Sanity Studio also deployed at /studio
```

**Deployment Environment Variables:**
```
Local (.env.local)  →  Push to Git (excluded)
                              ↓
                    Manually set in Vercel Dashboard
                              ↓
                    Used during build & runtime
```

---

## 🔐 Security & Access Control

### **Environment Variables Security**

```
┌─────────────────────────────────────────────────────┐
│  PUBLIC Variables (Client-side accessible)          │
│  - NEXT_PUBLIC_SANITY_PROJECT_ID                   │
│  - NEXT_PUBLIC_SANITY_DATASET                      │
│  - NEXT_PUBLIC_SANITY_API_VERSION                  │
│  - NEXT_PUBLIC_SANITY_REGISTRATION_DATASET         │
│  └─> Safe to expose, read-only access             │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  PRIVATE Variables (Server-side only)               │
│  - SANITY_API_TOKEN                                │
│  └─> Never exposed to browser                     │
│  └─> Used for write operations                    │
└─────────────────────────────────────────────────────┘
```

### **Sanity Access Control**

```
┌────────────────────────────────────────────┐
│  Anonymous Users (Website visitors)        │
│  ├─ Read: ✅ Articles, Gallery, Testimonial│
│  ├─ Write: ✅ Registration form only       │
│  └─ Access: Via Sanity public API         │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│  Authenticated Admin (via Sanity Studio)   │
│  ├─ Read: ✅ All datasets                  │
│  ├─ Write: ✅ All schemas                  │
│  ├─ Edit: ✅ Registration status           │
│  └─ Access: Login required                │
└────────────────────────────────────────────┘
```

---

## 📱 User Journey

### **Journey 1: Calon Santri mencari informasi**

```
1. Google Search: "Pondok Pesantren Daarul Multazam"
   ↓
2. Klik link website → Landing di homepage
   ↓
3. Scroll & baca:
   - Profil pondok
   - Program yang ditawarkan
   - Keunggulan
   - Lihat galeri foto
   - Baca testimoni alumni
   ↓
4. Tertarik → Klik "Daftar Santri Baru"
   ↓
5. Isi form pendaftaran
   ↓
6. Submit → Konfirmasi berhasil
   ↓
7. (Optional) Terima notifikasi WhatsApp
```

### **Journey 2: Admin mengelola pendaftaran**

```
1. Akses /studio atau sanity.studio
   ↓
2. Login dengan akun Sanity
   ↓
3. Klik menu "Data PPDB"
   ↓
4. List semua pendaftaran muncul
   ↓
5. Klik salah satu pendaftar
   ↓
6. Review data:
   - Nama lengkap
   - Kontak WhatsApp
   - Alamat
   - Asal sekolah
   - dll
   ↓
7. Update status:
   - Pending → Diterima
   - Atau Ditolak (dengan alasan)
   ↓
8. Save → Status ter-update
   ↓
9. (Optional) Hubungi via WhatsApp
```

---

## 🔄 Content Update Flow

### **Real-time Updates**

```
Admin publishes content in Sanity Studio
              ↓
         Sanity CDN
              ↓
    ┌─────────┴─────────┐
    ↓                   ↓
Next.js SSR      Next.js ISR
(real-time)     (cached with revalidation)
    ↓                   ↓
    └─────────┬─────────┘
              ↓
     Website updated!
```

**Revalidation Strategy:**
- **On-demand:** Webhook dari Sanity (future)
- **Time-based:** ISR dengan revalidate time
- **Client-side:** Real-time updates via SWR/React Query (future)

---

## 🎯 Future Enhancements

### **Phase 1: Core Features (Current)**
- [x] Basic website structure
- [x] Sanity CMS integration
- [x] Content schemas
- [x] Responsive design
- [ ] Registration form implementation
- [ ] Dynamic content display

### **Phase 2: Enhanced Features**
- [ ] Email notifications
- [ ] WhatsApp integration
- [ ] PDF certificate generation
- [ ] Payment gateway (if needed)
- [ ] Advanced search & filter
- [ ] Multi-language support

### **Phase 3: Advanced Features**
- [ ] Progressive Web App (PWA)
- [ ] Push notifications
- [ ] Analytics dashboard
- [ ] AI chatbot for FAQ
- [ ] Mobile app (React Native)

---

## 📈 Performance Optimization

```
┌─────────────────────────────────────────────┐
│  OPTIMIZATION STRATEGIES                    │
├─────────────────────────────────────────────┤
│                                             │
│  1. Image Optimization                      │
│     └─> Next.js Image component            │
│         └─> Automatic WebP conversion      │
│             └─> Lazy loading               │
│                                             │
│  2. Static Generation (SSG)                │
│     └─> Pre-render pages at build time     │
│         └─> Serve from CDN                 │
│                                             │
│  3. Incremental Static Regeneration (ISR)  │
│     └─> Revalidate pages on-demand        │
│         └─> Balance freshness & speed      │
│                                             │
│  4. Code Splitting                         │
│     └─> Automatic by Next.js              │
│         └─> Load only what's needed        │
│                                             │
│  5. Caching Strategy                       │
│     └─> Sanity CDN cache                  │
│         └─> Vercel Edge cache             │
│             └─> Browser cache             │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🆘 Common Workflows

### **Update Website Content**
```bash
# Admin tidak perlu technical knowledge!
1. Login ke /studio
2. Edit content
3. Click "Publish"
4. Done! Website updated instantly
```

### **Fix Bug atau Update Code**
```bash
# Developer workflow
1. Pull latest changes: git pull
2. Create branch: git checkout -b fix/bug-name
3. Make changes & test: npm run dev
4. Commit: git commit -m "fix: description"
5. Push: git push origin fix/bug-name
6. Create PR & merge to main
7. Vercel auto-deploy
```

### **Add New Content Schema**
```bash
1. Create new schema file in sanity/schemaTypes/
2. Export in sanity/schemaTypes/index.ts
3. Test in local studio: npm run dev
4. Push to Git
5. Redeploy Vercel
6. New schema available in Studio!
```

---

**Need more details?** Check other documentation files:
- SANITY_SETUP.md - Setup Sanity from scratch
- DEPLOYMENT.md - Deploy to Vercel
- QUICK_START.md - Quick reference guide
