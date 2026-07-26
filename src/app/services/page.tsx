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
  Check
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
  Megaphone: Megaphone
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="bg-transparent text-slate-900 dark:text-white min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00529b] dark:text-blue-400">Our Offerings</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Technical Services</h1>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            From Generative AI applications to full-scale cloud migrations and custom IoT embedded systems, we deliver production-ready software solutions.
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
                className="flex flex-col justify-between hover:border-[#00529b]/30 group"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="inline-flex p-3.5 rounded-xl bg-blue-500/10 text-[#00529b] dark:text-blue-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  {/* Title & Desc */}
                  <div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-gray-500 uppercase tracking-wide">{service.category}</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-[#00529b] dark:text-indigo-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-gray-900">
                    <h5 className="text-xs font-semibold text-slate-600 dark:text-gray-400 uppercase tracking-wider">Features:</h5>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-gray-300">
                          <Check className="h-3.5 w-3.5 text-[#00529b] dark:text-blue-400 shrink-0 mt-0.5" />
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
                          className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 px-2 py-0.5 rounded text-[10px] text-slate-600 dark:text-gray-400 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Read Details Link */}
                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-gray-900">
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center space-x-2 text-sm font-bold text-[#00529b] dark:text-blue-400 hover:text-[#00529b] dark:text-indigo-300 w-full justify-between"
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
        <div className="rounded-3xl bg-white/70 border border-slate-100 dark:bg-white dark:bg-gray-900/40 dark:border-gray-950 border border-slate-200 dark:border-gray-800 p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold">Need a Custom Enterprise Solution?</h3>
          <p className="text-slate-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            We draft precise Statement of Work blueprints outlining technical stacks, milestones, deliverables, and SLAs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-650 px-6 py-3 text-sm font-bold text-slate-900 dark:text-white hover:scale-105 transition-all shadow-lg"
          >
            <span>Request Enterprise Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
