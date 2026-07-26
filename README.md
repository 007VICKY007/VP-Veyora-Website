# VP Enterprises Corporate Website

A complete, production-ready corporate website for **VP Enterprises**, an AI-first software development and digital transformation organization founded by **Vignesh Pandiya**. 

Built with Next.js 15, React 19, TypeScript, Tailwind CSS, Prisma, PostgreSQL, NextAuth, and Resend.

---

## Technical Features

1. **Aesthetics & UI/UX**: Stripe-grade typography/grids, Apple-style minimalism, premium HSL dark-mode color scheme, custom glassmorphism panels, radial gradient backgrounds, and micro-interactive hover states.
2. **PostgreSQL Database**: Built using Prisma schemas supporting Leads tracking, CMS Services, Portfolio Case Studies, Blogs, Testimonials, Careers, Pricing Plans, and site configurations.
3. **Resend Email Integrations**: Captures client project inquiries, writes them to PostgreSQL, sends a confirmation email to the client, and notifies `contact@vpenterprises.in` with detailed timelines and budgets.
4. **CRM Leads Panel**: Protected dashboard to filter incoming project scopes, update client status, write internal sales logs, and delete entries.
5. **Dynamic CMS & Site Configuration**: Admin portal containing a unified dynamic CRUD component for edit/delete across all sections, alongside homepage hero configurators.
6. **Robust Dev-Failbacks**: Automated mock checks for emails and database connections, preventing builds from crashing locally when servers are offline.

---

## File Structure

```text
├── prisma/
│   ├── schema.prisma   # PostgreSQL models (Leads, Users, CMS tables)
│   └── seed.ts         # Seeding script with real VP Enterprises datasets
├── src/
│   ├── app/
│   │   ├── api/        # NextAuth, Leads handling, and CMS CRUD endpoints
│   │   ├── admin/      # Credentials login and CMS Dashboard routes
│   │   ├── services/   # Public service index & dynamic details
│   │   ├── portfolio/  # Case studies listing & dynamic results
│   │   ├── blog/       # Insights index & formatted article detail
│   │   ├── ...         # Speciality landings, policies, and 404 pages
│   │   ├── layout.tsx  # ThemeProvider, Header & Footer integrations
│   │   └── globals.css # Design system utilities & glass classes
│   ├── components/
│   │   ├── layout/     # Header navigation and Footer information blocks
│   │   ├── sections/   # Home Hero, FAQ accordion, and Contact form
│   │   └── shared/     # ThemeContext provider and GlassCard wrappers
│   ├── lib/
│   │   ├── db.ts       # Prisma Client exporter
│   │   ├── auth.ts     # NextAuth Options configuration
│   │   ├── resend.ts   # Resend email handler with mock logger
│   │   └── dataLoaders.ts # Resilient db querying with static fallbacks
│   └── middleware.ts   # Edge route interception securing admin dashboard
└── .env                # Local development variables
```

---

## Local Setup & Run Instructions

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Configure Database & Environment
Setup your local PostgreSQL instance and edit connection parameters in `.env`:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/vpenterprises?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="f6385d3826042db68641973cfbc9759d57a4bd794c48ce4cb996bf427514a6e0"
RESEND_API_KEY="re_1234567890" # Optional, falls back to logging emails to console in dev mode
```

### 3. Generate Database Client & Seed Records
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

---

## Admin Credentials
To enter the Admin Panel and CMS editor, navigate to `/admin/login` and log in with the seeded credentials:
- **Email**: `contact@vpenterprises.in`
- **Password**: `VPAdmin2026!`
# VP-Enterpricses
