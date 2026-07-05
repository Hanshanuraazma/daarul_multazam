# Website PPDB Pondok Pesantren Daarul Multazam

Website Penerimaan Peserta Didik Baru (PPDB) untuk Pondok Pesantren Daarul Multazam - Mencetak Generasi Qurani yang Mandiri dan Berjiwa Entrepreneur.

## 🚀 Quick Start

**Baru pertama kali setup?** Baca dokumentasi ini sesuai urutan:

1. **[QUICK_START.md](./QUICK_START.md)** - Overview dan ringkasan cepat
2. **[SANITY_SETUP.md](./SANITY_SETUP.md)** - Setup Sanity CMS dari awal (WAJIB BACA!)
3. **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deploy ke Vercel

## 🛠️ Tech Stack

- **Framework:** Next.js 16.2.10 (App Router)
- **CMS:** Sanity.io (Headless CMS)
- **Styling:** Tailwind CSS v4
- **Form Management:** React Hook Form + Zod
- **Icons:** Lucide React
- **Animation:** Framer Motion
- **Hosting:** Vercel

## 📋 Prerequisites

- Node.js v18+ 
- npm atau yarn
- Akun Sanity (gratis) - https://sanity.io
- Akun Vercel (gratis) - https://vercel.com

## ⚡ Quick Setup

```bash
# 1. Clone repository
git clone <repository-url>
cd daarul_multazam

# 2. Install dependencies
npm install --force

# 3. Setup environment variables
copy .env.example .env.local
# Edit .env.local dengan Project ID dan Token dari Sanity

# 4. Run development server
npm run dev

# 5. Open browser
# - Website: http://localhost:3000
# - Sanity Studio: http://localhost:3000/studio
```

## 📁 Project Structure

```
daarul_multazam/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── studio/            # Sanity Studio admin
├── components/            # React components
│   └── layout/            # Navbar & Footer
├── sanity/                # Sanity CMS config
│   ├── schemaTypes/       # Content schemas
│   └── lib/               # Sanity clients
├── public/                # Static assets
└── ...config files
```

## 🎨 Features

- ✅ Responsive Design (Mobile-first)
- ✅ Modern UI with Tailwind CSS
- ✅ Sanity CMS integration
- ✅ Content management via Sanity Studio
- ✅ Form validation
- ✅ SEO optimized
- 🚧 Registration form (coming soon)
- 🚧 Gallery & Articles (coming soon)
- 🚧 Testimonials section (coming soon)

## 📚 Documentation

- **QUICK_START.md** - Quick reference guide
- **SANITY_SETUP.md** - Panduan setup Sanity CMS
- **DEPLOYMENT.md** - Panduan deploy ke Vercel
- **AGENTS.md** - AI development rules

## 🔧 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Environment Variables

Required environment variables (lihat `.env.example`):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-05-01
NEXT_PUBLIC_SANITY_REGISTRATION_DATASET=registration
SANITY_API_TOKEN=your_api_token
```

## 🚀 Deployment

Deploy menggunakan Vercel:

1. Push code ke GitHub
2. Import project di Vercel
3. Set environment variables
4. Deploy (pastikan clear cache!)

Lihat **DEPLOYMENT.md** untuk panduan lengkap.

## 🆘 Troubleshooting

### Build Error
- Clear Vercel cache saat redeploy
- Check environment variables

### Sanity Connection Error
- Verify Project ID dan API Token
- Check CORS settings di Sanity Dashboard

Lihat troubleshooting lengkap di **DEPLOYMENT.md**

## 📞 Support

Jika menemukan bug atau ada pertanyaan:
1. Check dokumentasi di folder ini
2. Baca troubleshooting section
3. Create issue di repository

## 📄 License

Private project for Pondok Pesantren Daarul Multazam

---

**Built with ❤️ for Islamic Education**
