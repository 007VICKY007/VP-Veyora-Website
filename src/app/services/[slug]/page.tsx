import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServices } from "@/lib/dataLoaders";
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
  CheckCircle,
  Clock,
  User,
  Shield,
  HelpCircle,
  Bot,
  Users,
  Database,
  Terminal,
  Zap
} from "lucide-react";

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

interface ServiceDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailProps) {
  const { slug } = await params;
  const services = await getServices();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Brain;
  const features = Array.isArray(service.features) ? service.features : [];
  const techStack = Array.isArray(service.techStack) ? service.techStack : [];

  return (
    <div className="bg-transparent text-white  min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Back Link & Header */}
        <div className="space-y-6">
          <Link 
            href="/services" 
            className="inline-flex items-center space-x-2 text-xs font-semibold text-white/60  hover:text-[#F5C200]  transition-colors"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            <span>Back to All Services</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/08  pb-10">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#F5C200]  uppercase tracking-widest">{service.category}</span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">{service.title}</h1>
              <p className="text-white/60  max-w-2xl leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </div>
            <div className="h-20 w-20 bg-yellow-500/10 text-[#F5C200]  flex items-center justify-center border border-[#F5C200]/20 shrink-0">
              <Icon className="h-10 w-10" />
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-10">
            {/* Features Breakdown */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold">Capabilities & Deliverables</h3>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feat, idx) => (
                  <GlassCard key={idx} interactive={false} className="flex items-start space-x-4 border-white/08   ">
                    <CheckCircle className="h-5 w-5 text-[#F5C200]  shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white  text-sm sm:text-base">{feat}</h4>
                      <p className="text-xs text-white/40  mt-1 leading-relaxed">
                        Industry-grade implementation using optimized API paths, validated database integrations, and thorough audits.
                      </p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Implementation Workflow */}
            <div className="space-y-6 border-t border-white/08  pt-10">
              <h3 className="text-xl sm:text-2xl font-bold">Our Delivery Method</h3>
              <div className="relative border-l border-white/08  pl-6 ml-3 space-y-8">
                <div className="relative">
                  <span className="absolute -left-9 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-950 border border-[#F5C200] text-xs font-semibold text-[#F5C200] ">1</span>
                  <h4 className="font-semibold text-white  text-sm sm:text-base">Scoping & Blueprints</h4>
                  <p className="text-xs text-white/40  mt-1">We map out data structures, automation paths, and wireframes to ensure alignment.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-9 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-950 border border-[#F5C200] text-xs font-semibold text-[#F5C200] ">2</span>
                  <h4 className="font-semibold text-white  text-sm sm:text-base">Agile Development</h4>
                  <p className="text-xs text-white/40  mt-1">We write modular, type-safe Next.js code, deploy Docker scripts, and seed database systems.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-9 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-950 border border-[#F5C200] text-xs font-semibold text-[#F5C200] ">3</span>
                  <h4 className="font-semibold text-white  text-sm sm:text-base">Security Audits & Launch</h4>
                  <p className="text-xs text-white/40  mt-1">We run penetration checks, verify rate limiters, configure SSL certs, and deploy to Vercel/Docker.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24">
            
            {/* Technologies */}
            {techStack.length > 0 && (
              <GlassCard interactive={false} className="border-white/08  space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-[#F5C200] ">Primary Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="bg-[#07070f]  border border-white/08  rounded px-3 py-1 text-xs text-white/80  font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            )}

            {/* Quick Stats Card */}
            <GlassCard interactive={false} className="border-white/08  space-y-4 text-xs sm:text-sm">
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/40">Project Parameters</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2.5 text-white/60 ">
                  <User className="h-4.5 w-4.5 text-[#F5C200]  shrink-0" />
                  <span>Led by CEO: <strong className="text-white  font-semibold">Vignesh Pandiya</strong></span>
                </li>
                <li className="flex items-center space-x-2.5 text-white/60 ">
                  <Clock className="h-4.5 w-4.5 text-[#F5C200]  shrink-0" />
                  <span>Support Schedule: <strong className="text-white  font-semibold">Mon - Sat, 9am-7pm IST</strong></span>
                </li>
                <li className="flex items-center space-x-2.5 text-white/60 ">
                  <Shield className="h-4.5 w-4.5 text-[#F5C200]  shrink-0" />
                  <span>Encryption: <strong className="text-white  font-semibold">SSL, AES-256 standard</strong></span>
                </li>
              </ul>
            </GlassCard>

            {/* CTA */}
            <GlassCard className="border-[#F5C200]/20 bg-[#F5C200]/05 border border-[#F5C200]/20/50  border border-[#F5C200]/20/50 space-y-4">
              <h4 className="font-bold text-base text-white ">Need this service?</h4>
              <p className="text-xs text-white/60  leading-relaxed">
                Consult with our engineering team. We provide free initial blueprints for qualified projects.
              </p>
              <Link
                href="/contact"
                className="flex w-full items-center justify-center space-x-2 rounded-xl bg-[#F5C200] px-4 py-2.5 text-xs sm:text-sm font-bold text-white  hover:bg-[#F5C200]/080 transition-colors shadow-md shadow-indigo-600/20"
              >
                <span>Request Quotation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </GlassCard>

          </div>

        </div>

      </div>
    </div>
  );
}
