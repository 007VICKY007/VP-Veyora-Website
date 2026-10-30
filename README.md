# VP VEYORA PRIVATE LIMITED — AI Automation Delivery Partner

Official website and platform repository for **VP VEYORA PRIVATE LIMITED**, an India-based technology company building AI automation solutions, intelligent agents, and system integrations for international businesses and software agencies.

- **Website**: [https://vpveyora.com/](https://vpveyora.com/)
- **Core Positioning**: *Your AI Automation Delivery Partner — Turn Repetitive Business Operations into Intelligent AI Workflows.*
- **Target Geographies**: UK, USA, UAE, Singapore, Australia, and Europe.
- **Delivery Models**: White-label Delivery, Joint Delivery, and Referral Partnerships.

---

## 🚀 Platform Architecture & Routes

| Route | Purpose | Key Features |
|---|---|---|
| `/` | Homepage | Enterprise hero, business outcomes, 6 core offerings, interactive demo, 5-stage delivery process, partner highlight, indicative packages, FAQ |
| `/solutions/ai-automation` | Solutions Directory | Deep technical workflows for 7 common business problems (lead triage, CRM updates, document extraction, support assistants, RAG search, reporting, API bridges) |
| `/partners` | International Partner Program | Agency white-label delivery, joint delivery, referral models, governance, IP transfer, and dedicated onboarding inquiry form |
| `/demos` | Live Interactive Demos | Sandbox simulators: AI Lead Qualification (Demo A) & Document / Invoice Extraction (Demo B) with human approval gates and architecture diagrams |
| `/pricing` | Indicative Engagement Models | Configurable pricing tiers (Discovery, PoC, Pilot, Retainer SLA) in USD & INR, commercial boundaries, payment milestones, and USD quote requests |
| `/portfolio` | Demonstrations & Case Studies | Architectural blueprints and synthetic dataset benchmarks with explicit demonstration labeling |
| `/about` | Company Profile | Founder & Lead Systems Architect profile (Vignesh Pandiya), engineering ethos, and India-based global delivery model |
| `/contact` | Lead Generation | Input-sanitized, bot-protected inquiry form with direct routing and confirmation dispatch |
| `/privacy-policy` | Legal Compliance | Data minimization disclosures, TLS transmission, and rights under international data protection laws |
| `/terms` | Commercial Terms | Website terms, non-binding inquiry clarification, and IP assignment boundaries |
| `/refund-policy` | Commercial Policy | Milestone-based settlement terms, SOW cancellation protocols, and warranty window |

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI & Components**: React 19, Tailwind CSS v4, Lucide React
- **Animations**: Framer Motion
- **ORM & Data**: Prisma 5.22 + PostgreSQL (with resilient static fallbacks)
- **Deployment Target**: Cloudflare Workers / Pages (`@opennextjs/cloudflare` + `wrangler`)
- **SEO & Discovery**: Dynamic sitemap (`sitemap.xml`), robots (`robots.txt`), OpenGraph, JSON-LD Organization schema

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
RESEND_API_KEY="re_your_api_key_here" # Optional for dev (mock logger handles emails if missing)
```

### 3. Generate Prisma Client
```bash
npx prisma generate
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing & Verification

### Run Type Checking & Production Build
```bash
npm run build
```

### Run Linter
```bash
npm run lint
```

---

## 📄 License & Ownership

© 2026 VP VEYORA PRIVATE LIMITED. All rights reserved. Registered technology enterprise in Tamil Nadu, India.
