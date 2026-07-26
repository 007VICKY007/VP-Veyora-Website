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
import { GlassCard } from "@/components/shared/GlassCard";
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
  Star,
  Zap,
  Briefcase,
  ExternalLink,
  Target,
  Eye,
  Mail
} from "lucide-react";
import { LinkedInIcon } from "@/components/shared/SocialIcons";

// Mapping string names to Lucide icons dynamically
const iconMap: Record<string, any> = {
  Brain: Brain,
  Cpu: Cpu,
  Code: Code,
  Globe: Globe,
  Smartphone: Smartphone,
  ShieldAlert: ShieldAlert,
  Cloud: Cloud,
  BarChart3: BarChart3,
  CpuIcon: Cpu, // fallback
  Link: LinkIcon,
  Megaphone: Megaphone
};

export default async function HomePage() {
  const settings = await getSiteSettings();
  const services = await getServices();
  const portfolio = await getPortfolio();
  const testimonials = await getTestimonials();
  const pricing = await getPricingPlans();

  const heroTitle = settings["homepage.hero.title"] || "Engineering AI Solutions for Tomorrow";
  const heroSubtitle = settings["homepage.hero.subtitle"] || "Helping businesses automate, innovate, and grow using Artificial Intelligence and modern software technologies.";
  const aboutText = settings["homepage.about.text"] || "VP Enterpriceses is an AI-first technology company founded by Vignesh Pandiya. We help startups, enterprises, and organizations build intelligent software, AI-powered products, automation workflows, enterprise applications, cloud infrastructure, and cybersecurity solutions.";

  // Removed local industries list to use the new interactive Industries component

  const techStackCategories = [
    { title: "Artificial Intelligence", techs: ["OpenAI API", "Claude API", "Gemini API", "LangChain", "Pinecone"] },
    { title: "Software & Web Dev", techs: ["Next.js 15", "React 19", "TypeScript", "Node.js", "PostgreSQL"] },
    { title: "Cloud & DevOps", techs: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Nginx"] },
    { title: "AI Automation", techs: ["n8n", "Make.com", "Zapier", "WhatsApp API", "Resend"] }
  ];

  return (
    <div className="bg-transparent text-slate-900 dark:text-white min-h-screen">
      
      {/* 1. Hero Section */}
      <Hero title={heroTitle} subtitle={heroSubtitle} />

      {/* 2. About & Founder Profile */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-t border-slate-200 dark:border-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 rounded-full border border-[#00529b]/20 bg-blue-50/40 border border-blue-100/50 dark:bg-blue-50/40 border border-blue-100/50 px-4 py-1.5 text-xs text-[#00529b] dark:text-blue-400">
              <Target className="h-4 w-4" />
              <span>Our Profile</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              About VP Enterpriceses
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
              {aboutText}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-[#00529b] pl-4 space-y-1">
                <h4 className="font-semibold text-slate-900 dark:text-white">Our Mission</h4>
                <p className="text-xs text-slate-500 dark:text-gray-500">Helping businesses automate, innovate, and grow using Artificial Intelligence and modern software technologies.</p>
              </div>
              <div className="border-l-2 border-[#0072ce] pl-4 space-y-1">
                <h4 className="font-semibold text-slate-900 dark:text-white">Our Vision</h4>
                <p className="text-xs text-slate-500 dark:text-gray-500">To become one of India's leading AI and Digital Transformation companies delivering world-class enterprise solutions.</p>
              </div>
            </div>
          </div>

          {/* Founder Panel */}
          <GlassCard className="relative overflow-hidden border-slate-200/60 shadow-xl hover:shadow-[#00529b]/10 hover:border-[#00529b]/35 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative group/img">
                    <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#00205b] to-[#0072ce] rounded-full blur opacity-25 group-hover/img:opacity-45 transition duration-300"></div>
                    <div className="relative h-16 w-16 rounded-full bg-gradient-to-tr from-[#00205b] to-[#00529b] flex items-center justify-center text-white text-xl font-bold font-mono shadow-md border border-slate-200/50 transform hover:scale-105 transition-transform duration-300 select-none">
                      VP
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Vignesh Pandiya</h3>
                    <p className="text-sm font-semibold text-[#00529b]">Founder & CEO, Lead Architect</p>
                  </div>
                </div>
                
                {/* Social icons */}
                <div className="flex space-x-2">
                  <a href="https://linkedin.com/in/vigneshpandiya" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-[#00529b] rounded-full border border-slate-200 transition-colors" aria-label="LinkedIn Profile">
                    <LinkedInIcon size={14} className="h-3.5 w-3.5" />
                  </a>
                  <a href="mailto:contact@vpenterprises.in" className="p-2 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-[#00529b] rounded-full border border-slate-200 transition-colors" aria-label="Email Founder">
                    <Mail className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
              
              <blockquote className="text-slate-700 italic leading-relaxed text-sm border-l-2 border-[#00529b]/40 pl-3">
                "Our mission is to bridge the gap between complex technological capabilities and actual business outcomes. We don't just build software; we engineer competitive advantages through intelligent automation and secure, scalable design."
              </blockquote>
              
              <div className="flex flex-wrap gap-2 text-[10px] font-semibold text-slate-500 pt-2 border-t border-slate-100">
                <span className="bg-blue-50/50 px-2.5 py-1 rounded-full text-[#00529b]">AI Solutions</span>
                <span className="bg-blue-50/50 px-2.5 py-1 rounded-full text-[#00529b]">Enterprise Software</span>
                <span className="bg-blue-50/50 px-2.5 py-1 rounded-full text-[#00529b]">Cloud & DevOps</span>
                <span className="bg-blue-50/50 px-2.5 py-1 rounded-full text-[#00529b]">Cybersecurity</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* 2.5 Value Proposition & Trust Indicators */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-t border-slate-200 bg-gradient-to-b from-white via-blue-50/5 to-white">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00529b]">Value Proposition</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            One Trusted Partner for Your Complete Digital Business Journey
          </h2>
          <p className="text-slate-600 text-lg">
            From Strategy to Software, We Deliver End-to-End Business Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="border-slate-200/60 shadow-md hover:border-[#00529b]/25 transition-all duration-300 space-y-4 p-8">
            <div className="inline-flex p-3 rounded-xl bg-blue-500/10 text-[#00529b]">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Streamline Operations</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We audit and optimize your workflows to eliminate bottlenecks, integrate legacy databases, and automate scheduling, procurement, and billing systems.
            </p>
          </GlassCard>

          <GlassCard className="border-slate-200/60 shadow-md hover:border-[#00529b]/25 transition-all duration-300 space-y-4 p-8">
            <div className="inline-flex p-3 rounded-xl bg-blue-500/10 text-[#00529b]">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Automate Workflows</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Utilize custom AI agents, automated email alerts, and cross-application API integrations to free your teams from manual data entry and tasks.
            </p>
          </GlassCard>

          <GlassCard className="border-slate-200/60 shadow-md hover:border-[#00529b]/25 transition-all duration-300 space-y-4 p-8">
            <div className="inline-flex p-3 rounded-xl bg-blue-500/10 text-[#00529b]">
              <Brain className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Accelerate Growth</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Deploy high-conversion web portals, e-commerce storefronts, and client databases that improve overall customer experience and scale revenues.
            </p>
          </GlassCard>
        </div>

        {/* Enterprise Trust Grid */}
        <div className="mt-16 pt-16 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <span className="text-3xl font-extrabold text-[#00529b]">99.9%</span>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">System SLA Uptime</h4>
            <p className="text-[10px] text-slate-400">Enterprise grade reliability</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xl font-extrabold text-[#00529b]">Zero-Trust</span>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Security First</h4>
            <p className="text-[10px] text-slate-400">Rigid pen-testing audits</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xl font-extrabold text-[#00529b]">Global</span>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Delivery Model</h4>
            <p className="text-[10px] text-slate-400">Serving clients worldwide</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xl font-extrabold text-[#00529b]">Long-Term</span>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Partnerships</h4>
            <p className="text-[10px] text-slate-400">Sustained system evolution</p>
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-t border-slate-200 dark:border-gray-900 bg-gradient-to-b from-white via-blue-50/10 to-white dark:from-gray-950 dark:via-gray-900/30 dark:to-gray-950">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-[#00529b]/20 bg-blue-50/40 border border-blue-100/50 dark:bg-blue-50/40 border border-blue-100/50 px-4 py-1.5 text-xs text-[#00529b] dark:text-blue-400">
            <Zap className="h-4 w-4" />
            <span>Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Core Service Offerings
          </h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Premium tech solutions designed to optimize your operations, secure your digital assets, and drive business intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => {
            const Icon = iconMap[service.icon] || Brain;
            const features = Array.isArray(service.features) ? service.features : [];
            return (
              <GlassCard key={service.id} className="flex flex-col justify-between h-full hover:border-[#00529b]/30">
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-blue-500/10 text-[#00529b] dark:text-blue-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 pt-2">
                    {features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-xs text-slate-500 dark:text-gray-500">
                        <Check className="h-3.5 w-3.5 text-[#00529b] dark:text-blue-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-gray-800/60">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center space-x-1 text-sm font-semibold text-[#00529b] dark:text-blue-400 hover:text-[#00529b] dark:hover:text-blue-300"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </GlassCard>
            );
          })}
        </div>

        <div className="text-center pt-12">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 rounded-full border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 px-6 py-3 text-sm font-semibold text-[#00529b] dark:text-blue-400 hover:text-[#00529b] dark:hover:text-blue-300 border-blue-200 dark:border-blue-900/30 transition-all"
          >
            <span>View All Services</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 4. Industries Section */}
      <Industries />

      {/* 5. Featured Case Studies */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-t border-slate-200 dark:border-gray-900 bg-gradient-to-b from-white via-blue-50/10 to-white dark:from-gray-950 dark:via-indigo-950/5 dark:to-gray-950">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-[#00529b]/20 bg-blue-50/40 border border-blue-100/50 dark:bg-blue-50/40 border border-blue-100/50 px-4 py-1.5 text-xs text-[#00529b] dark:text-blue-400">
            <Eye className="h-4 w-4" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Case Studies</h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Discover how we helped global organizations optimize processes, decrease workloads, and scale their infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {portfolio.filter(p => p.featured).slice(0, 2).map((item) => {
            const results = typeof item.results === "string" ? {} : item.results;
            return (
              <GlassCard key={item.id} className="overflow-hidden p-0 border-slate-200 dark:border-gray-800/60 flex flex-col justify-between hover:scale-[1.01]">
                <div>
                  <div 
                    className="h-60 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  />
                  <div className="p-8 space-y-4">
                    <span className="text-xs font-semibold text-[#00529b] dark:text-blue-400 uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-gray-800">
                      {Object.entries(results).map(([key, value]) => (
                        <div key={key} className="space-y-0.5">
                          <span className="text-xs text-slate-500 dark:text-gray-500">{key}</span>
                          <p className="text-base font-bold text-slate-900 dark:text-white">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="inline-flex items-center space-x-2 rounded-xl bg-white dark:bg-gray-900 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 hover:border-[#00529b] dark:hover:border-blue-800 px-5 py-3 text-sm font-semibold text-[#00529b] dark:text-blue-400 w-full justify-center transition-all duration-300 shadow-sm"
                  >
                    <span>Read Complete Case Study</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* 6. Technology Stack Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-t border-slate-200 dark:border-gray-900">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Our Technology Stack</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm">
            We master enterprise-grade frameworks, databases, and APIs to guarantee performant, secure deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStackCategories.map((cat, idx) => (
            <GlassCard key={idx} interactive={false} className="space-y-4 border-slate-200 dark:border-gray-900 bg-white/70 border border-slate-100 dark:bg-gray-900/10 dark:border-gray-950">
              <h4 className="font-bold text-[#00529b] dark:text-blue-400 border-b border-slate-200 dark:border-gray-800 pb-2 text-sm uppercase tracking-wider">{cat.title}</h4>
              <ul className="space-y-2">
                {cat.techs.map((tech, i) => (
                  <li key={i} className="text-sm text-slate-700 dark:text-gray-300 font-medium flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00529b]"></span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 7. Pricing Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-t border-slate-200 dark:border-gray-900">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Predictable Pricing Plans</h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-xl mx-auto text-sm">
            Choose a plan tailored to your business lifecycle. Custom systems are built under direct statement-of-work quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan) => {
            const features = Array.isArray(plan.features) ? plan.features : [];
            return (
              <GlassCard 
                key={plan.id} 
                className={`flex flex-col justify-between h-full relative ${
                  plan.featured 
                    ? "border-[#00529b] bg-blue-50/40 border border-blue-100/50 dark:bg-blue-50/40 border border-blue-100/50 shadow-2xl shadow-blue-900/5" 
                    : "border-slate-200 dark:border-gray-900"
                }`}
              >
                {plan.featured && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00529b] px-4 py-1 text-xs font-semibold text-white tracking-wide uppercase">
                    Most Popular
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-gray-500 mt-1">{plan.description}</p>
                  </div>

                  <div className="flex items-baseline text-slate-900 dark:text-white">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">{plan.price}</span>
                    <span className="ml-1 text-sm font-semibold text-slate-500 dark:text-gray-500">
                      {plan.billingPeriod !== "one-time" && plan.billingPeriod !== "custom" ? `/${plan.billingPeriod}` : ""}
                      {plan.billingPeriod === "one-time" ? " flat fee" : ""}
                    </span>
                  </div>

                  <ul className="space-y-3 pt-4 border-t border-slate-200 dark:border-gray-800/80">
                    {features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 dark:text-gray-300">
                        <Check className="h-4.5 w-4.5 text-[#00529b] dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href={plan.buttonUrl}
                    className={`${plan.featured ? "bg-gradient-to-r from-[#00205b] to-[#00529b] text-white font-semibold hover:from-[#00205b] hover:to-[#00529b] shadow-lg shadow-blue-900/15" : "bg-white hover:bg-blue-50/50 text-[#00529b] border border-blue-200 hover:border-blue-300 shadow-sm"} block w-full text-center rounded-xl py-3 text-sm font-semibold transition-all`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>



      {/* 9. FAQ Section */}
      <FAQ />

      {/* 10. Contact Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-t border-slate-200 dark:border-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Let's Build Something <span className="text-gradient">Extraordinary</span></h2>
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
              Submit your project scope, budget guidelines, and target timelines. Vignesh Pandiya and our system architect teams will schedule a brief technical exploration call within 24 business hours.
            </p>
            <div className="space-y-4 text-sm text-slate-600 dark:text-gray-400 pt-4">
              <p>Email: <a href="mailto:contact@vpenterprises.in" className="text-[#00529b] dark:text-blue-400 hover:underline">contact@vpenterprises.in</a></p>
              <p>WhatsApp: <a href="https://wa.me/919488890697" className="text-[#00529b] dark:text-blue-400 hover:underline">+91 9488890697</a></p>
              <p>Location: <span className="text-slate-900 dark:text-white">Tamil Nadu, India</span></p>
              <p>Hours: <span className="text-slate-900 dark:text-white">Monday - Saturday (9:00 AM - 7:00 PM IST)</span></p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

    </div>
  );
}
