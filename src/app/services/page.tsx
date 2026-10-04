import React from "react";
import Link from "next/link";
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
  Check,
  Target,
  Eye,
  Compass,
  Briefcase,
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
  Target: Target,
  Eye: Eye,
  Compass: Compass,
  Briefcase: Briefcase,
  Bot: Bot,
  Users: Users,
  Database: Database,
  Terminal: Terminal,
  Zap: Zap
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="bg-transparent text-white min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F5C200]">Core Capabilities</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our Services</h1>
          <p className="text-white/60 text-base leading-relaxed">
            Specialized enterprise capabilities designed to automate workflows, accelerate operations, modernize data architectures, and build custom digital platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Brain;
            const features = Array.isArray(service.features) ? service.features : [];
            const techStack = Array.isArray(service.techStack) ? service.techStack : [];

            return (
              <GlassCard 
                key={service.id} 
                className="flex flex-col justify-between hover:border-[#F5C200]/30 group"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="inline-flex p-3.5 rounded-xl bg-yellow-500/10 text-[#F5C200] ">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  {/* Title & Desc */}
                  <div>
                    <span className="text-xs font-semibold text-white/40  uppercase tracking-wide">{service.category}</span>
                    <h3 className="text-xl font-bold text-white  mt-1 group-hover:text-[#F5C200] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/60  mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-2 border-t border-white/08 ">
                    <h5 className="text-xs font-semibold text-white/60  uppercase tracking-wider">Features:</h5>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-white/80 ">
                          <Check className="h-3.5 w-3.5 text-[#F5C200]  shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack List */}
                  {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {techStack.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-transparent  border border-white/08  px-2 py-0.5 rounded text-[10px] text-white/60  font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Read Details Link */}
                <div className="pt-6 mt-6 border-t border-white/08 ">
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center space-x-2 text-sm font-bold text-[#F5C200]  hover:text-[#F5C200] w-full justify-between"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Custom Quote Box */}
        <div className="border border-[#F5C200]/20 p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden">
          {/* Subtle gold glow behind */}
          <div className="absolute inset-0 bg-[#F5C200]/[0.03] pointer-events-none" />
          <h3 className="relative text-2xl font-bold text-white">Need a Custom Enterprise Solution?</h3>
          <p className="relative text-white/50 max-w-xl mx-auto text-sm sm:text-base">
            We draft precise Statement of Work blueprints outlining technical stacks, milestones, deliverables, and SLAs.
          </p>
          <Link
            href="/contact"
            className="relative inline-flex items-center space-x-2 bg-[#F5C200] px-8 py-3.5 text-sm font-bold text-[#05050d] hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-[#F5C200]/20"
          >
            <span>Request Enterprise Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
