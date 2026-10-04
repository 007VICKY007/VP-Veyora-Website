import React from "react";
import Link from "next/link";
import { 
  getSiteSettings, 
  getServices, 
  getPortfolio, 
  getTestimonials, 
  getPricingPlans 
} from "@/lib/dataLoaders";
import { Hero } from "@/components/sections/Hero";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";
import { Industries } from "@/components/sections/Industries";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  Counter 
} from "@/components/shared/MotionWrappers";
import { RunningMarquee } from "@/components/shared/RunningText";
import { 
  Brain, 
  Cpu, 
  Code, 
  Globe, 
  Smartphone, 
  ShieldAlert, 
  Cloud, 
  BarChart3, 
  Link as LinkIcon, 
  Megaphone,
  ArrowRight,
  Check,
  Zap,
  ExternalLink,
  Target,
  Eye,
  Mail,
  ShieldCheck,
  TrendingUp,
  Layers,
  Bot,
  Users,
  Database,
  Terminal
} from "lucide-react";
import { LinkedInIcon } from "@/components/shared/SocialIcons";

const iconMap: Record<string, any> = {
  Brain: Brain,
  Cpu: Cpu,
  Code: Code,
  Globe: Globe,
  Smartphone: Smartphone,
  ShieldAlert: ShieldAlert,
  Cloud: Cloud,
  BarChart3: BarChart3,
  CpuIcon: Cpu,
  Link: LinkIcon,
  Megaphone: Megaphone,
  Bot: Bot,
  Users: Users,
  Database: Database,
  Terminal: Terminal,
  Zap: Zap
};

export default async function HomePage() {
  const settings = await getSiteSettings();
  const services = await getServices();
  const portfolio = await getPortfolio();
  const pricing = await getPricingPlans();

  const heroTitle = settings["homepage.hero.title"] || "Engineering AI Solutions for Tomorrow";
  const heroSubtitle = settings["homepage.hero.subtitle"] || "Building intelligent technology for growing businesses worldwide — custom software, cloud orchestration, workflow automation, and cybersecurity.";

  const techStackCategories = [
    { title: "Artificial Intelligence", techs: ["OpenAI API", "Claude API", "Gemini API", "LangChain", "Pinecone"] },
    { title: "Full-Stack Platforms", techs: ["Next.js 15", "React 19", "TypeScript", "Node.js", "PostgreSQL"] },
    { title: "Cloud & Infrastructure", techs: ["AWS Cloud", "Docker", "Kubernetes", "GitHub Actions", "Nginx"] },
    { title: "Autonomous Automation", techs: ["n8n Workflows", "Make.com", "WhatsApp API", "Stripe API", "Resend"] }
  ];

  return (
    <div className="bg-transparent text-white min-h-screen">
      
      {/* 1. Hero Section */}
      <Hero title={heroTitle} subtitle={heroSubtitle} />

      {/* Running Letter Banner (Infinite Marquee) */}
      <RunningMarquee />

      {/* 2. About & Founder Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-t border-white/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: About Copy */}
          <FadeIn direction="up" className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 rounded-full border border-[#F5C200]/20 bg-[#F5C200]/05 px-3.5 py-1 text-xs font-semibold text-[#F5C200]">
              <Target className="h-3.5 w-3.5" />
              <span>Company Profile</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Architecting Intelligent Systems for Modern Enterprises
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl">
              VP Veyora Private Limited is an AI-first technology company delivering custom software, intelligent automation, cloud architectures, and proactive cybersecurity to forward-thinking businesses.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="border-l-2 border-[#F5C200] pl-4 space-y-1">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Our Mission</h4>
                <p className="text-xs text-white/45 leading-relaxed">
                  Eliminate repetitive manual overhead and empower organizations through high-velocity AI automation.
                </p>
              </div>
              <div className="border-l-2 border-white/20 pl-4 space-y-1">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Our Vision</h4>
                <p className="text-xs text-white/45 leading-relaxed">
                  To be India's premier digital transformation partner for enterprise-grade SaaS and automated intelligence.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Founder Signature Card */}
          <FadeIn direction="left" delay={0.2} className="lg:col-span-5">
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.015] p-8 space-y-6 hover:border-[#F5C200]/30 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-[#F5C200] flex items-center justify-center text-[#05050d] font-black text-lg">
                    VP
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Vignesh Pandiya</h3>
                    <p className="text-xs font-semibold text-[#F5C200]">Founder & CEO · Lead Architect</p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <a 
                    href="https://linkedin.com/in/vigneshpandiya" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-lg border border-white/[0.08] text-white/40 hover:text-[#F5C200] hover:border-[#F5C200]/40 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon size={14} className="h-3.5 w-3.5" />
                  </a>
                  <a 
                    href="mailto:vpveyora@gmail.com" 
                    className="p-2 rounded-lg border border-white/[0.08] text-white/40 hover:text-[#F5C200] hover:border-[#F5C200]/40 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
              
              <blockquote className="text-white/70 italic text-sm leading-relaxed border-l-2 border-[#F5C200]/40 pl-4">
                "We don't just write software; we engineer sustainable competitive advantages through intelligent workflows and zero-trust design."
              </blockquote>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                {["AI Automation", "Custom SaaS", "Cloud DevOps", "Cybersecurity"].map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold text-white/40 bg-white/[0.03] px-2.5 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* 3. Value Proposition & Animated Metrics */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-t border-white/[0.06]">
        <FadeIn className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F5C200]">Value Proposition</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Built for Measurable Business Impact
          </h2>
          <p className="text-white/50 text-sm">
            End-to-end technological execution designed to eliminate friction and maximize operating leverage.
          </p>
        </FadeIn>

        {/* 3 Pillars */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: "Streamline Operations",
              desc: "Automate scheduling, eliminate manual data entry, and unify legacy databases into high-speed synchronized platforms."
            },
            {
              icon: Zap,
              title: "Automate Workflows",
              desc: "Deploy autonomous AI agents, instant communication hooks, and cross-platform API bridges across your software stack."
            },
            {
              icon: TrendingUp,
              title: "Accelerate Scale",
              desc: "Launch high-performance cloud applications and digital portals engineered for low latency and high concurrency."
            }
          ].map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.015] p-8 space-y-4 hover:border-[#F5C200]/35 transition-all duration-300">
                <div className="inline-flex p-3 rounded-lg bg-[#F5C200]/10 text-[#F5C200] border border-[#F5C200]/20">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Animated Metrics Bar */}
        <FadeIn delay={0.2} className="mt-16 pt-16 border-t border-white/[0.06]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Counter value="99.9%" label="System SLA Uptime" className="text-3xl sm:text-4xl font-black text-[#F5C200]" />
            <Counter value="100%" label="Zero-Trust Architecture" className="text-3xl sm:text-4xl font-black text-white" />
            <Counter value="50+" label="Global Deployments" className="text-3xl sm:text-4xl font-black text-[#F5C200]" />
            <Counter value="24/7" label="Continuous SLA Monitoring" className="text-3xl sm:text-4xl font-black text-white" />
          </div>
        </FadeIn>
      </section>

      {/* 4. Core Services */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-t border-white/[0.06]">
        <FadeIn className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 rounded-full border border-[#F5C200]/20 bg-[#F5C200]/05 px-3.5 py-1 text-xs font-semibold text-[#F5C200]">
            <Zap className="h-3.5 w-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Specialized Enterprise Services
          </h2>
          <p className="text-white/50 text-sm">
            High-leverage engineering tailored to modernize your operations, secure your digital assets, and drive revenue.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Brain;
            return (
              <StaggerItem key={service.id}>
                <div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.015] p-7 flex flex-col justify-between hover:border-[#F5C200]/40 transition-all duration-300 group">
                  <div className="space-y-4">
                    <div className="inline-flex p-3 rounded-lg bg-[#F5C200]/10 text-[#F5C200] border border-[#F5C200]/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#F5C200] transition-colors">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-white/50 leading-relaxed line-clamp-3">{service.description}</p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.06]">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#F5C200] hover:text-white transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.2} className="text-center pt-12">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 border border-white/[0.12] bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#F5C200]/40 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white hover:text-[#F5C200] transition-all rounded-lg"
          >
            <span>View All Services</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </section>

      {/* 5. Industries Section */}
      <Industries />

      {/* 6. Featured Case Studies */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-t border-white/[0.06]">
        <FadeIn className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 rounded-full border border-[#F5C200]/20 bg-[#F5C200]/05 px-3.5 py-1 text-xs font-semibold text-[#F5C200]">
            <Eye className="h-3.5 w-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Featured Case Studies
          </h2>
          <p className="text-white/50 text-sm">
            Real outcomes delivered for organizations across automated workflows, custom platforms, and data pipelines.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolio.filter(p => p.featured).slice(0, 2).map((item) => {
            const results = typeof item.results === "string" ? {} : item.results;
            return (
              <FadeIn key={item.id} className="rounded-xl border border-white/[0.08] bg-white/[0.015] overflow-hidden flex flex-col justify-between hover:border-[#F5C200]/30 transition-all duration-300">
                <div>
                  <div 
                    className="h-52 w-full bg-cover bg-center border-b border-white/[0.06]"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  />
                  <div className="p-7 space-y-4">
                    <span className="text-[10px] font-bold text-[#F5C200] uppercase tracking-widest">{item.category}</span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-white/50 leading-relaxed">{item.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.06]">
                      {Object.entries(results).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-[10px] uppercase tracking-wider text-white/40 block">{key}</span>
                          <p className="text-base font-bold text-white mt-0.5">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2">
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#F5C200] hover:text-white transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* 7. Technology Stack */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-t border-white/[0.06]">
        <FadeIn className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Enterprise Technology Stack
          </h2>
          <p className="text-white/50 text-sm">
            Production-proven frameworks, databases, and LLM APIs engineered for resilience.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStackCategories.map((cat, idx) => (
            <StaggerItem key={idx}>
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.015] p-6 space-y-4 h-full hover:border-[#F5C200]/30 transition-all">
                <h4 className="font-bold text-[#F5C200] text-xs uppercase tracking-wider border-b border-white/[0.06] pb-3">
                  {cat.title}
                </h4>
                <ul className="space-y-2.5">
                  {cat.techs.map((tech, i) => (
                    <li key={i} className="text-xs sm:text-sm text-white/70 font-medium flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F5C200]" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 8. Predictable Pricing */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-t border-white/[0.06]">
        <FadeIn className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Transparent Investment Plans
          </h2>
          <p className="text-white/50 text-sm">
            Predictable packages designed for startups, growing SMEs, and enterprise custom requirements.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((plan) => {
            const features = Array.isArray(plan.features) ? plan.features : [];
            return (
              <StaggerItem key={plan.id}>
                <div 
                  className={`rounded-xl border p-8 flex flex-col justify-between h-full relative transition-all duration-300 ${
                    plan.featured 
                      ? "border-[#F5C200] bg-white/[0.03] shadow-2xl shadow-[#F5C200]/05" 
                      : "border-white/[0.08] bg-white/[0.015] hover:border-white/[0.15]"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#F5C200] px-3.5 py-0.5 text-[10px] font-bold text-[#05050d] tracking-widest uppercase">
                      Recommended
                    </span>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                      <p className="text-xs text-white/40 mt-1">{plan.description}</p>
                    </div>

                    <div className="flex items-baseline text-white">
                      <span className="text-3xl sm:text-4xl font-black">{plan.price}</span>
                      <span className="ml-1.5 text-xs text-white/40 uppercase tracking-wider">
                        {plan.billingPeriod === "one-time" ? " flat fee" : ""}
                      </span>
                    </div>

                    <ul className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                      {features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-white/70">
                          <Check className="h-3.5 w-3.5 text-[#F5C200] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <Link
                      href={plan.buttonUrl}
                      className={`block w-full text-center py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                        plan.featured 
                          ? "bg-[#F5C200] text-[#05050d] hover:bg-white" 
                          : "border border-white/[0.15] bg-white/[0.02] text-white hover:border-[#F5C200] hover:text-[#F5C200]"
                      }`}
                    >
                      {plan.buttonText}
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* 9. FAQ Section */}
      <FAQ />

      {/* Secondary Running Letter Ticker */}
      <RunningMarquee 
        speed={34}
        items={[
          "99.9% SLA UPTIME",
          "ZERO-TRUST ARCHITECTURE",
          "HIGH-VELOCITY ENGINEERING",
          "24/7 CONTINUOUS MONITORING",
          "SECURE DATA PIPELINES",
          "FOUNDED BY VIGNESH PANDIYA",
          "TAMIL NADU, INDIA"
        ]}
      />

      {/* 10. Contact Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-t border-white/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <FadeIn className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 rounded-full border border-[#F5C200]/20 bg-[#F5C200]/05 px-3.5 py-1 text-xs font-semibold text-[#F5C200]">
              <Mail className="h-3.5 w-3.5" />
              <span>Direct Inquiries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let's Build Your <span className="text-gradient">Advantage</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-md">
              Share your project scope, target timeline, and requirements. Our engineering team will review and schedule an architecture discussion within 24 hours.
            </p>
            
            <div className="space-y-3.5 text-xs sm:text-sm text-white/60 pt-4 border-t border-white/[0.06]">
              <p className="flex items-center gap-2">
                <span className="text-white/30 uppercase text-[10px] tracking-wider w-20">Email</span>
                <a href="mailto:vpveyora@gmail.com" className="text-[#F5C200] hover:underline font-mono">vpveyora@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white/30 uppercase text-[10px] tracking-wider w-20">WhatsApp</span>
                <a href="https://wa.me/919488890697" className="text-[#F5C200] hover:underline font-mono">+91 9488890697</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white/30 uppercase text-[10px] tracking-wider w-20">Location</span>
                <span className="text-white/80">Tamil Nadu, India</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white/30 uppercase text-[10px] tracking-wider w-20">Hours</span>
                <span className="text-white/80">Mon – Sat (9:00 AM – 7:00 PM IST)</span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left" className="lg:col-span-7">
            <ContactForm />
          </FadeIn>

        </div>
      </section>

    </div>
  );
}
