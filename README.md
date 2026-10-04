# VP Veyora Private Limited Website

Official corporate website for **VP Veyora Private Limited**, an AI-first SaaS and digital transformation enterprise founded by **Vignesh Pandiya**.

Built with Next.js 16 (Turbopack), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Prisma, NextAuth, and Resend.

---

## 🚀 Key Features

1. **Aesthetics & UI/UX**: Ultra-premium dark glassmorphic interface (`#05050d` base), mouse-reactive ambient glow, subtle border highlights, Framer Motion smooth scroll reveals, infinite running letter marquees, and dynamic typewriter animations.
2. **Core 9 Specialized Services**:
   - AI & Machine Learning
   - Web Development
   - Software Development
   - AI Agents
   - Automation
   - Data Analytics
   - CRM Solutions
   - ERP Solutions
   - Custom Technology Services
3. **High-Performance Architecture**: Statically pre-rendered routes, Edge caching, responsive layout across all device viewports, and Core Web Vitals optimization.
4. **Resilient Data Fallbacks**: Graceful fallback to static datasets if local PostgreSQL database is offline.
5. **Inquiry & CRM Pipeline**: Leads capture form with validation, Resend email routing, and PostgreSQL storage.
6. **Admin Dashboard**: Protected management panel (`/admin`) for viewing submissions and configuring settings.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.11 (App Router, Turbopack)
- **Library**: React 19.2.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 12
- **Database / ORM**: Prisma 5.22 + PostgreSQL
- **Icons**: Lucide React
- **Email Service**: Resend

---

## 💻 Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/vpveyora?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key-at-least-32-chars-long"
RESEND_API_KEY="re_your_api_key_here" # Optional in dev mode (falls back to console mock)
```

### 3. Generate Database Client & Seed
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

### 4. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

```bash
npm run build
npm run start
```

---

## 📄 License & Credits

© 2026 VP Veyora Private Limited. All rights reserved. Founded by Vignesh Pandiya.
